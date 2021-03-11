let text = document.querySelector(".text-info");
let text_us = document.querySelector(".information-text");
let img_us = document.querySelector(".img-us");
let network = document.querySelector(".container-networks");
let us = document.querySelector(".network");
let info = document.querySelector(".text-more-information");
let info_img = document.querySelector(".img-information");
let video = document.querySelector(".video");
let img_work = document.querySelector(".work-extra");
let title_word = document.querySelector(".title-languajes");

function ScrollParallax(){
    let scroll = document.documentElement.scrollTop;
    /* efecto */
    text.style.transform='translateY('+ scroll * -0.25 +'px)';
    text_us.style.transform='translateY('+ scroll * -0.25 +'px)';
    img_us.style.transform='translateY('+ scroll * -0.1 +'px)';
    network.style.transform='translateY('+ scroll * -0.2 +'px)';
    us.style.transform='translateY('+ scroll * -0.15 +'px)';
    info.style.transform='translateY('+ scroll * -0.25 +'px)';
    info_img.style.transform='translateY('+ scroll * -0.1 +'px)';
    video.style.transform='translateY('+ scroll * -0.1 +'px)';
    img_work.style.transform='translateY('+ scroll * -0.25 +'px)';
    title_word.style.transform='translateY('+ scroll * -0.15 +'px)';
}

window.addEventListener('scroll', ScrollParallax);
