
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
const containerSlider = document.querySelector(".container-slider");
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
    slider.style.transition = "all 1s";
    setTimeout(()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend",firstElement);
        slider.style.marginLeft = "-100%";
    },1000)
}

const previus = () => {
    let lastElement = document.querySelectorAll(".slider__section")[sections.length-1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 1s";
    setTimeout(()=>{
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin",lastElement);
        slider.style.marginLeft = "-100%";
    },1000)
}

btnRigth.addEventListener("click",()=>{
    next();
})
btnLeft.addEventListener("click",()=>{
    previus();
})

a = setInterval(()=>{
    next();
},10000)

containerSlider.onmouseout = function() {
    console.log("fuera")
    a = setInterval(()=>{
        next();
    },10000)
}

containerSlider.onmouseover = function(){
    console.log("dentro")
    clearInterval(a)
}
/* Carosel menu */
const slider_menu = document.querySelector(".slider__menu");
const container_slider_menu = document.querySelector(".container-slider-menu");
const sectionsMenu = document.querySelectorAll(".slider__section--menu");

const lastElementMenu = sectionsMenu[sections.length - 1];
const btnRigthMenu = document.querySelector(".slider__btn-menu--rigth");
const btnLeftMenu = document.querySelector(".slider__btn-menu--left");
var m;

slider_menu.insertAdjacentElement("afterbegin",lastElementMenu);

const nextMenu = () => {
    let firstElement = document.querySelectorAll(".slider__section--menu")[0];
    slider_menu.style.marginLeft = "-200%";
    slider_menu.style.transition = "all 1s";
    setTimeout(()=>{
        slider_menu.style.transition = "none";
        slider_menu.insertAdjacentElement("beforeend",firstElement);
        slider_menu.style.marginLeft = "-100%";
    },1000)
}

const previusMenu = () => {
    let lastElement = document.querySelectorAll(".slider__section--menu")[sections.length-1];
    slider_menu.style.marginLeft = "0%";
    slider_menu.style.transition = "all 1s";
    setTimeout(()=>{
        slider_menu.style.transition = "none";
        slider_menu.insertAdjacentElement("afterbegin",lastElement);
        slider_menu.style.marginLeft = "-100%";
    },1000)
}

btnRigthMenu.addEventListener("click",()=>{
    nextMenu();
})
btnLeftMenu.addEventListener("click",()=>{
    previusMenu();
})

m = setInterval(()=>{
    nextMenu();
},5000)

container_slider_menu.onmouseout = function() {
    m = setInterval(()=>{
        nextMenu();
    },5000)
}

container_slider_menu.onmouseover = function(){
    clearInterval(m)
}

/* Botones menu */

const btnPlatos = document.querySelector(".menu-txt__btn-rigth");
const btnFondos = document.querySelector(".menu-txt__btn-left");
const menuTextPlates = document.querySelector(".menu-text-plates");
const menuTextFondo  = document.querySelector(".menu-text-fondos");
const dish_content  = document.querySelectorAll(".dish-content");

btnPlatos.addEventListener("click",()=>{
    const res = btnPlatos.classList.contains("btn-active")
    if(!res){
        btnFondos.classList.remove("btn-active");
        btnPlatos.classList.add("btn-active");
        menuTextPlates.classList.remove("hide-menu");
        menuTextFondo.classList.add("hide-menu");
    }
})
btnFondos.addEventListener("click",()=>{
    const res = btnFondos.classList.contains("btn-active")
    if(!res){
        btnPlatos.classList.remove("btn-active");
        btnFondos.classList.add("btn-active");
        menuTextFondo.classList.remove("hide-menu");
        menuTextPlates.classList.add("hide-menu");
    }
})
