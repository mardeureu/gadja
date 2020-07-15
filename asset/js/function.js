window.addEventListener('DOMContentLoaded', function(){
    var elem = document.querySelectorAll('.is-visible');
    var i = elem.length;

    //var elemoffsetY = document.elem[];
    
    console.log(elem);
    
    function scrolled() {
                
        // if(document.body.scrollTop > ele[i]) || document.documentElement.scrollTop < ele[i] {
        //     document.documentElement.classList.add("visible");
        // } else {
        //     document.documentElement.classList.remove("invisible");
        // }
    }
    function scrollAppear() {
        var txt = document.querySelector('.scrolled_text');
        var scrollPosition = txt.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;
        console.log("scrollPosition =   "+scrollPosition + "screenPosition = " + screenPosition);

        if (scrollPosition < screenPosition) {
            txt.classList.add('visible');
        }
    }
    window.addEventListener(scroll, scrollAppear());

});//end