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

function showImg(pathImg, title) {
    if (pathImg != "./vehicles/01.jpg") {
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

function showRegion(array) {
    array.forEach(function (elements) {
        elements.addEventListener("mouseover", () => {
            array.forEach(function (el) {
                el.style.fill = "#da0000"
            });
        });
        elements.addEventListener("mouseout", () => {
            array.forEach(function (el) {
                el.style.fill = "#c1c1c1"
            });
        });

    });
};
showRegion(szFO);
showRegion(centrFO);
showRegion(privFO);
showRegion(usnFO);
showRegion(skFO);
showRegion(urFO);
showRegion(sbFO);
showRegion(dalFO);

const onlySzFO = [...centrFO, ...privFO, ...usnFO, ...skFO, ...urFO, ...sbFO, ...dalFO];
const onlyCentrFO = [...szFO, ...privFO, ...usnFO, ...skFO, ...urFO, ...sbFO, ...dalFO];
const onlyPrivFO = [...szFO, ...centrFO, ...usnFO, ...skFO, ...urFO, ...sbFO, ...dalFO];
const onlyUsnFO = [...szFO, ...centrFO, ...privFO, ...skFO, ...urFO, ...sbFO, ...dalFO];
const onlySkFO = [...szFO, ...centrFO, ...privFO, ...usnFO, ...urFO, ...sbFO, ...dalFO];
const onlyUrFO = [...szFO, ...centrFO, ...privFO, ...usnFO, ...skFO, ...sbFO, ...dalFO];
const onlySbFO = [...szFO, ...centrFO, ...privFO, ...usnFO, ...skFO, ...urFO, ...dalFO];
const onlyDalFO = [...szFO, ...centrFO, ...privFO, ...usnFO, ...skFO, ...urFO, ...sbFO];


const infoSz = document.querySelector(".info-region__sz");
const infoCen = document.querySelector(".info-region__cen");
const infoUsn = document.querySelector(".info-region__usn");
const infoSk = document.querySelector(".info-region__sk");
const infoPriv = document.querySelector(".info-region__priv");
const infoUr = document.querySelector(".info-region__ur");
const infoSib = document.querySelector(".info-region__sib");
const infoDal = document.querySelector(".info-region__dal");
const sloi1 = document.querySelector("#Слой_1");

let cls1 = document.querySelectorAll(".cls-1");
let cls2 = document.querySelectorAll(".cls-2");

function animationCls(){
    setTimeout(() => {
        cls1.forEach((el) =>{
            el.classList.toggle("cls-active")
        });
        cls2.forEach((el) =>{
            el.classList.toggle("cls-active")
        });
    }, 600)
}

function removeRegions(region, regionArray, descrRegion, transition) {
    region.forEach((el) => {
        el.addEventListener("click", () => {
            animationCls();
            descrRegion.classList.toggle("info-region__active");
            region.forEach((animation) => {
                animation.classList.toggle(transition);
                sloi1.style.height = "auto";
                if (animation.classList.contains(transition)) {
                    sloi1.style.height = "500px";
                }
            });
            regionArray.forEach((regions) => {
                regions.classList.toggle("region-active")
            });
        });
    });
}

removeRegions(szFO, onlySzFO, infoSz, "info-region__transition");
removeRegions(centrFO, onlyCentrFO, infoCen, "info-region__transition-2");
removeRegions(usnFO, onlyUsnFO, infoUsn, "info-region__transition-3");
removeRegions(skFO, onlySkFO, infoSk, "info-region__transition-4");
removeRegions(privFO, onlyPrivFO, infoPriv, "info-region__transition-5");
removeRegions(urFO, onlyUrFO, infoUr, "info-region__transition-6");
removeRegions(sbFO, onlySbFO, infoSib, "info-region__transition-7");
removeRegions(dalFO, onlyDalFO, infoDal, "info-region__transition-8");

