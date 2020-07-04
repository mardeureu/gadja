window.addEventListener('DOMContentLoaded', function(){
    //swiper slide
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            stopOnLastOnide: false,
            disableOn: false,
            reverseDirection: false,
            WaitForTransition: false,
        },
        keyboard: {
            enabled: true,
          },
        speed: 600,
        updateOnWindowResize: true,
        setWrapperSize: true,
        loop: true,
        //autoheight: true,
        });//swiper end

    
});//END

