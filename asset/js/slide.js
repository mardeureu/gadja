function carouselSlide() {
    //carousel slide slideItems
    const slideList = document.querySelector('.slide-list');
    const slideItems = document.querySelectorAll('.slide-items');
    const slideBtnNext = document.getElementById('next');
    const slideBtnPrev = document.getElementById('prev');
    const slideLen = slideItems.length;
    const slideWidth = 70;
    const slideSpeed = 500;
    const startNum = 0;

    //copy slide
    let firstChild = slideList.firstElementChild;
    let lastChild = slideList.lastElementChild;
    let clonedFirst = firstChild.cloneNode(true);
    let clonedLast = lastChild.cloneNode(true);

    //add copy slide
    slideList.appendChild(clonedFirst);
    slideList.insertBefore(clonedLast, slideList.firstElementChild);

    let curIndex = startNum;
    let curSlide = slideItems[curIndex];
    curSlide.classList.add('slide_active');

    //add css
    slideList.style.width = slideWidth * (slideLen + 2) + 'vw';
    slideList.style.transform = 'translate3d(-' + (slideWidth * (startNum + 1)) + 'vw, 0px, 0px';

    //btn
    slideBtnNext.addEventListener('click', function(){
        if (curIndex <=  slideLen - 1) {
            slideList.style.transition = slideSpeed + 'ms';
            slideList.style.transform = 'translate3d(-' + (slideWidth * (curIndex + 2)) + 'vw, 0px, 0px)';
        }
        if (curIndex === slideLen - 1) {
            setTimeout(function() {
                slideList.style.transition = '0ms';
                slideList.style.transform = 'translate3d(-' + slideWidth + 'vw, 0px, 0px';
            }, slideSpeed);
            curIndex = -1;
        }
        curSlide.classList.remove('slide_active');
        curSlide = slideItems[++curIndex];
        curSlide.classList.add('slide_active');
    });
    slideBtnPrev.addEventListener('click', function(){
        if (curIndex >= 0) {
            slideList.style.transition = slideSpeed + 'ms';
            slideList.style.transform = 'translate3d(-' + (slideWidth * curIndex) + 'vw, 0px, 0px)';
        }
        if (curIndex === 0) {
            setTimeout(function() {
                slideList.style.transition = '0ms';
                slideList.style.transform = 'translate3d(-' + (slideWidth * slideLen) + 'vw, 0px, 0px';
            }, slideSpeed);
            curIndex = slideLen;
        }
        curSlide.classList.remove('slide_active');
        curSlide = slideItems[--curIndex];
        curSlide.classList.add('slide_active');
    }); 
}
carouselSlide();
//carousel slide end