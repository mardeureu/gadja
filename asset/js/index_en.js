window.addEventListener('DOMContentLoaded', function(){
    //swiper slide
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 15000,
            stopOnLastOnide: false,
            disableOn: false,
            reverseDirection: true,
            WaitForTransition: true,
        },
        keyboard: {
            enabled: true,
          },
        loop: true,
        });//swiper end

});//END

