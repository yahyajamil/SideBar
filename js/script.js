let navImgElems = document.querySelectorAll(".nav-img");
let navTextElems = document.querySelectorAll(".nav-text");
let modeBtn = document.getElementById("btn");
let arrowBtn = document.getElementById("arrow");
let svgMoon = document.querySelector(".moon");
let svgSun = document.querySelector(".sun");

let whiteSrc = [
    {src:"image/grid.png"},
    {src:"image/white/package.png"},
    {src:"image/white/users.png"},
    {src:"image/white/message-square.png"},
    {src:"image/white/database.png"},
    {src:"image/white/bell.png"},
    {src:"image/white/settings.png"},
    {src:"image/white/alert-circle.png"},
    {src:"image/log-out.png"},
]

let darkSrc = [ 
    {src:"image/grid.png"},
    {src:"image/package.png"},
    {src:"image/users.png"},
    {src:"image/message-square.png"},
    {src:"image/database.png"},
    {src:"image/bell.png"},
    {src:"image/settings.png"},
    {src:"image/alert-circle.png"},
    {src:"image/log-out.png"},
]

function darkModeHandler() {

    document.getElementById("side").classList.toggle("dark-mode");
    document.getElementById("btn").classList.toggle("btn-white");
    document.getElementById("title").classList.toggle("light-title");
    document.getElementById("name").classList.toggle("light-title");
    document.getElementById("arrow").classList.toggle("arrow-light");

    if(document.getElementById("side").classList.contains("dark-mode")){
        navImgElems.forEach((item, index)=>{
            item.setAttribute('src', whiteSrc[index].src);
        });

        navTextElems.forEach((item)=>{
            item.classList.remove("nav-text")
            item.classList.add("light-text")
        });

        svgMoon.classList.add("d-none")
        svgSun.classList.remove("d-none")

    }else {
        navImgElems.forEach((item, index)=>{
            item.setAttribute('src', darkSrc[index].src);
        });

        navTextElems.forEach((item)=>{
            item.classList.add("nav-text")
            item.classList.remove("light-text")
        });

        svgMoon.classList.remove("d-none")
        svgSun.classList.add("d-none")
    }
    
};

function sizeHandler(){
    document.getElementById("side").classList.toggle("s");

    if(document.getElementById("side").classList.contains("s")){
        document.getElementById("arrow").classList.remove("moved");
        document.getElementById("title").classList.add("d-none");
        document.getElementById("name").classList.add("d-none");
        document.querySelector(".nav-text-red").classList.add("d-none");
        document.querySelector(".nav-text-purple").classList.add("d-none");
        document.querySelector(".search-input").classList.add("d-none");
        document.querySelector(".modal-btn").classList.remove("d-none");

        navTextElems.forEach(item => {
            item.classList.add("d-none");
        })
    }else {
        document.getElementById("arrow").classList.add("moved");
        document.getElementById("title").classList.remove("d-none");
        document.getElementById("name").classList.remove("d-none");
        document.querySelector(".nav-text-red").classList.remove("d-none");
        document.querySelector(".nav-text-purple").classList.remove("d-none");
        document.querySelector(".search-input").classList.remove("d-none");
        document.querySelector(".modal-btn").classList.add("d-none");

        navTextElems.forEach(item => {
            item.classList.remove("d-none");
        })

        document.querySelector("input").type = "search";
        document.querySelector("input").classList.remove("button");
    }
}

modeBtn.addEventListener("click", darkModeHandler);
arrowBtn.addEventListener("click", sizeHandler);