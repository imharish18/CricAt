let homeLeftPortionImg = document.querySelector("#home-leftPortion-img");
let images = [
    "img/extraImages/designImage1.png",
    "img/extraImages/designImage2.png",
    "img/extraImages/designImage3.png",
];

let currentIndex = 0;

function changeImage() {
    homeLeftPortionImg.style.opacity = 0;
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length; 
        homeLeftPortionImg.src = images[currentIndex]; 
        homeLeftPortionImg.style.opacity = 1; 
    }, 800); 
}
setInterval(changeImage, 3000);

// TextDivergence
let string1 = [
    "People throw stones at you, and you convert them into milestones!",
    "I don’t mind repeating everything!",
    "Self-belief and hard work will always earn you success!",
    "Cricket is in my Blood!",
    "When life knocks you down, get up and hit it for a six!",
    "The bat is not a toy, it’s a weapon!"
];
let string2 = [
    "Sachin Tendulkar",
    "Mahendra Singh Dhoni",
    "Virat Kohli",
    "Harish ",
    "Yuvraj Singh",
    "Virender Sehwag"
];
let color2 = [
    "#3587A4",
    "#F28500",
    "#303847"
]
let stringIndex = 0;
let textString1 = document.querySelector("#textString1");
textString1.innerText = string1[stringIndex]+" -"+string2[stringIndex];
stringIndex = 1;
function changeString() {
    textString1.innerText = string1[stringIndex]+" -"+string2[stringIndex];

    setTimeout(() => {
        stringIndex = (stringIndex + 1)%6;  
    }, 1500); 
}
setInterval(changeString,2000);

// Home 2
let h2Links =[
    "https://images.unsplash.com/photo-1625401586060-f12be3d7cc57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://www.livemint.com/lm-img/img/2024/06/30/original/CRICKET-WC-2024-T20-IND-RSA-38_1719734726637.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/391500/391556.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/373300/373335.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/371500/371561.jpg",
    "https://www.shutterstock.com/image-illustration/karachi-pakistan-26-may-cricket-600nw-2308637453.jpg"
];

let h2TextBoxImage = document.querySelector("#h2TextBoxImage");
h2TextBoxImage.src = h2Links[0];   
let h2TextBoxImageCounter = 1;
function h2ChangeImage() {
    h2TextBoxImage.src = h2Links[h2TextBoxImageCounter];   
    setTimeout(() => {
        h2TextBoxImageCounter = (h2TextBoxImageCounter + 1) % h2Links.length; 
    }, 800); 
}
setInterval(h2ChangeImage,4000);

function textRendering(element,textArray){
    let textIndex = 0; 
    let charIndex = 0; 
    let isDeleting = false;
    const speed = 50; 
    const backspaceSpeed = 50;
    const pauseTime = 1500;
    const typingElement = document.getElementById(element);
    typeEffect();
        
    function typeEffect() {
        let currentText = textArray[textIndex];
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex--);
        } else {
            typingElement.textContent = currentText.substring(0, charIndex++);
        }

        let delay = isDeleting ? backspaceSpeed : speed;

        if (!isDeleting && charIndex === currentText.length+1) {
            isDeleting = true;
            delay = pauseTime;
        } else if (isDeleting && charIndex === 1) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
        }

        setTimeout(typeEffect, delay);
    }

}


const textArray1 = ["Welcome to CricAt!!", "Create Your Own Cards Free Now!", "Make Your Career!"];
textRendering("adHead",textArray1);

const textArray2 = ["Let's Start the Contest!","Customize your own Team!","Lets dive in a Contest!","Create a Clash Arena!"];
textRendering("h3ContentData",textArray2);

const textArray3 = ["Will this be the steal of the season?","Bidding war heating up! Who’s next?" ,"Dreams turn into reality under the auction hammer!", "Uncapped to Unstoppable – Who’s the next breakout star?" ];
textRendering("auctionText",textArray3);

document.addEventListener("DOMContentLoaded", function () {
    let icons = document.querySelectorAll("#auctionContentLeft i");
    let index = 0;
    icons.forEach(icon => icon.style.display = "none"); 
    icons[index].style.display = "inline-block";
    setInterval(() => {
        icons.forEach(icon => icon.style.display = "none"); 
        icons[index].style.display = "inline-block"; 
        index = (index + 1) % icons.length; 
    }, 500);
});
