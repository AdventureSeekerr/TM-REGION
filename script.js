let carImages = document.querySelectorAll(".vehicle-1");

carImages.forEach(function (image) {
    image.addEventListener("click", function () {
        carImages.forEach(function (img) {
            img.classList.remove("carImg");
        });
        image.classList.add("carImg");
    });
});


let mainImg = document.querySelector(".main-image");
let descrTitle = document.querySelector(".description-title");
let descrText = document.querySelector(".description-text");

function showImg(pathImg, title){
    if(pathImg != "./vehicles/01.jpg"){
        descrTitle.innerHTML = title;
        descrText.innerHTML = "Полноцветная печать на плёнке Avery 3000";
    } else {
        descrTitle.innerHTML = "";
        descrText.innerHTML = "";
    };
    mainImg.src = pathImg;
};

const szFO = document.querySelectorAll(".cls-sz");
const centrFO = document.querySelectorAll(".cls-cen");
const privFO = document.querySelectorAll(".cls-priv");
const usnFO = document.querySelectorAll(".cls-usn");
const skFO = document.querySelectorAll(".cls-sk");
const urFO = document.querySelectorAll(".cls-ur");
const sbFO = document.querySelectorAll(".cls-sb");
const dalFO = document.querySelectorAll(".cls-dal");

function showRegion(array){
    
}
