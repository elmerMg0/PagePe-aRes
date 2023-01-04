
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