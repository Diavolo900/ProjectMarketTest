
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



