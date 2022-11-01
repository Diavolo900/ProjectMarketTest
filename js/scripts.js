
/*--------------------------Header-fixed--------------------------*/
window.onscroll = function showHeader(){
    var header = document.querySelector('.header-bottom');

    if(window.pageYOffset > 215){
        header.classList.add('header_fixed');
    } else{
        header.classList.remove('header_fixed');
    }
}


/*--------------------------Slider--------------------------*/
$(document).ready(function(){
    $('.slider').slick();
});

/*--------------------------Burger-menu--------------------------*/
const burger = document.querySelector(".menu-icon");
const popup = document.querySelector(".menu-popup");
const menu = document.querySelector(".header-bottom").cloneNode(1);

burger.addEventListener('click', burgerHandler);

function burgerHandler(e) {
    e.preventDefault();
    popup.classList.toggle('open');
    menu.classList.toggle('display');
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu); 
}