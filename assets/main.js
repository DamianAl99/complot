"use strict"

window.sr = ScrollReveal();

sr.reveal(".foo", {
    duration: 3000,
    origin: "bottom",
    distance: "100px"
});

//var menu
let iconMenu = document.querySelector(".icon-menu");
let nav = document.querySelector("nav");
let inicio = document.querySelector("#inicio");
let locales = document.querySelector("#locales");
let contacto = document.querySelector("#contacto");
//var maps
let maps = document.querySelector(".maps");
let mariscal = document.querySelector(".l-mariscal");
let pinedo = document.querySelector(".l-pinedo");
let sLorenzo = document.querySelector(".l-sLorenzo");
let multiplaza = document.querySelector(".l-multiplaza");
let centro = document.querySelector(".l-centro");
//menu
iconMenu.addEventListener("click", function(){
    nav.classList.toggle("show");
});
inicio.addEventListener("click", function(){
    nav.classList.toggle("show");
});
locales.addEventListener("click", function(){
    nav.classList.toggle("show");
});
contacto.addEventListener("click", function(){
    nav.classList.toggle("show");
});
//maps
mariscal.addEventListener("click", function(){
    maps.style.marginTop = "-300px";
});
multiplaza.addEventListener("click", function(){
    maps.style.marginTop = "-600px";
});
pinedo.addEventListener("click", function(){
    maps.style.marginTop = "-900px";
});
sLorenzo.addEventListener("click", function(){
    maps.style.marginTop = "-900px";
});
centro.addEventListener("click", function(){
    maps.style.marginTop = "0px";
});

$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true
    });
});


