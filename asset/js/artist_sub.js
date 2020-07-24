window.addEventListener('DOMContentLoaded',function(){
    //scroll
    // var subArtistReviewPara = document.querySelectorAll('.artist-review p span');
    // var idx;
    // for (i = 0; i < subArtistReviewPara.length; i++) {
    //     window.addEventListener('scroll', function(){
    //         if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //             subArtistReviewPara[i].classList.add('subParaScroll')
    //         } else {
    //             subArtistReviewPara[i].classList.remove('subParaScroll');
    //         }
    //         console.log(subArtistReviewPara[i]);
    //     });
    // }
    //accordion
    var acc = document.getElementsByClassName('accordion');
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click',function(){
            this.classList.toggle('active');
            var panel = this.nextElementSibling;
            console.log(panel.style.maxHeight);
            if (panel.style.maxHeight) {
                panel.style.maxHeight = '';
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });

    }


});//end