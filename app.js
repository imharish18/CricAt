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
    "People throw stones at you, and you convert them into milestones.",
    "I don’t mind repeating everything.",
    "Self-belief and hard work will always earn you success.",
    "No matter how talented you are or how much work you put in, if you can't perform on match day, it's of no use.",
    "When life knocks you down, get up and hit it for a six!",
    "The bat is not a toy, it’s a weapon."
];
let string2 = [
    "Sachin Tendulkar",
    "Mahendra Singh Dhoni",
    "Virat Kohli",
    "Rohit Sharma ",
    "Yuvraj Singh",
    "Virender Sehwag"
];
let stringIndex = 0;
let textString1 = document.querySelector("#textString1");
function changeString() {
    textString1.innerText = string1[stringIndex]+" -"+string2[stringIndex];

    setTimeout(() => {
        stringIndex = (stringIndex + 1)%6;  
    }, 800); 
}
setInterval(changeString, 1000);


