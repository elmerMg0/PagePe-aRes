
/* Activar hamburguesa */
document.querySelector(".navegation-primary__bars").onclick = ()=>{
    document.querySelector(".navegation-primary__nav-bar").classList.toggle("show");
}
/* Scroll abajo  */
window.addEventListener("scroll",()=>{
    var header = document.querySelector(".navegation-primary-bg");
    header.classList.toggle("down", window.scrollY>0);

    var navbar = document.querySelector(".navegation-primary__nav-bar");

    navbar.classList.toggle("down", window.scrollY>0);
})

/* Carousel */
const slider = document.querySelector(".slider");
const sections = document.querySelectorAll(".slider__section");

const lastElement = sections[sections.length - 1];
const btnRigth = document.querySelector(".slider__btn--rigth");
const btnLeft = document.querySelector(".slider__btn--left");
var a;

slider.insertAdjacentElement("afterbegin",lastElement);

const next = () => {
    let firstElement = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 1.5s";
    setTimeout(()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend",firstElement);
        slider.style.marginLeft = "-100%";
    },1500)
}

const previus = () => {
    let lastElement = document.querySelectorAll(".slider__section")[sections.length-1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 1.5s";
    setTimeout(()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin",lastElement);
        slider.style.marginLeft = "-100%";
    },1500)
}

btnRigth.addEventListener("click",()=>{
    next();
})
btnLeft.addEventListener("click",()=>{
    previus();
})

a = setInterval(()=>{
    next();
},5000)

btnLeft.onmouseout = function() {
    a = setInterval(()=>{
        next();
    },5000)
}
btnRigth.onmouseout = function() {
    a = setInterval(()=>{
        next();
    },5000)
}



btnLeft.onmouseover = function(){
    console.log("dentro");
    clearInterval(a)
}

btnRigth.onmouseover = function(){
    console.log("dentro");
    clearInterval(a)
}