let parallax = document.querySelector(".text");
let parallax2 = document.querySelector(".first-element");

function ScrollParallax(){
    let scroll = document.documentElement.scrollTop;

    parallax.style.transform = 'translateY('+ scroll * 0.3 +'px)';
    parallax2.style.transform = 'translateY('+ scroll * 0.3 +'px)';
}
window.addEventListener('scroll', ScrollParallax);