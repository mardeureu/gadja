window.addEventListener('DOMContentLoaded',function(){
    // var slider = document.querySelector('slider-container'),
    //     sliderItems = document.querySelector('slides'),
    //     SlidePrevBtn = document.querySelector('prev'),
    //     SlideNextBtn = document.querySelector('next');
    // slide(slider, sliderItems, SlidePrevBtn, SlideNextBtn);
    // function slide(wrapper, items, SlidePrevBtn, SlideNextBtn) {
    //     var posX1 = 0,
    //         posX2 = 0,
    //         posInitial,
    //         posFinal,
    //         threshold = 100,
    //         slides = items.getElemetByClassName('slides'),
    //         slideLength = slides.length,
    //         slideSize = items.getElemetByClassName('slides')[0].offsetWidth,
    //         firstSlide = slides[0],
    //         lastSlide = slides[slideLength -1],
    //         cloneFirst = firstSlide.cloneNode(1);
    //         clonneLast = lastSlide.cloneNode(1)
    //         index = 0;
    //         allowShift = ture;
    //     items.appendChild(cloneFirst);
    //     items.insertBefore(cloneFirst, firstSlide);

    //     wrapper.classList.add('loaded');

    //     //mouse event
    //     items.onmousedouwn = dragStart;
    //     //touch evnet
    //     items.addEventListener('touchstart', dragStart);
    //     items.addEvnetListener('touchend', dragEnd);
    //     items.addEventListener('touchmove', dragAction);
    //     //click event
    //     SlidePrevBtn.addEventListener('click', function() {shiftSlide(-1)});
    //     SlideNextBtn.addEventListener('click', function() {shiftSlide(1)});

    //     function dragStart (e) {
    //         e =  e || window.event;
    //         e.preventDefault();
    //         posInitial = items.offsetLeft;
    //         if (e.type == 'touchstart') {
    //             posX1 = e.touchs[0].clientX;
    //         } else {
    //             document.onmouseup = dragEnd;
    //             document.onmousemove = dragAction;
    //         }
    //     }
    //     function dragAction (e) {
    //         e = e || window.event;
    //         if(type == 'touchmove') {
    //             posX2 = posX1 - e.touchs[0].clientX;
    //             posX1 = e.touchs.clientX;
    //         } else {
    //             posX2 = posX1 - e.clientX;
    //             posX1 = e.clientX;
    //         }
    //         items.style.left = (items.offsetLeft - posX2) + "px";
    //     }
    // };

    const slider = document.querySelector('.slides');
    const slideItems = document.querySelectorAll('.slide');
    const slideNextBtn = document.getElementById('next');
    const slidePrevBtn = document.getElementById('prev');
    const pagenation = document.querySelector('.pagenation');
    const slideLen = slideItems.length;
    const slideWidth = 400;
    const slideSpeed = 300;
    const startNum = 0;

    slider.style.width = slideWidth * (slideLen + 2) + 'px';

    let curIndex = startNum;
    let curSlide = slideLen[curIndex];
    //copy the first slide, last slide
    let firstChild = slider.firstElementChild;
    let lastChild = slider.lastElementChild;
    let cloneFirst = firstChild.cloneNode(1);
    let cloneLast = lastChild.cloneNode(1);
    //add copyied slides
    slider.appendChild(cloneFirst);
    slider.insertBefore(cloneLast, slider.firstElementChild);
    slider.style.trnasform = 'transform3d(' + (slideWidth * (curIndex + 1)) + '0, 0)';

    //next btn
    slideNextBtn.addEventListener('click',function(){
        if (curIndex <= slideLen - 1) {
            slider.style.transition = slideSpeed + 'ms';
            slider.style.transform = 'transform3d(' + (slideWidth * (curIndex + 1)) + ', 0, 0)';
        }
        if (curIndex === slideLen - 1) {
            setTimeOut (function(){
                slider.transition = '0ms';
                slider.style.transform = 'transform3d(' + slideWidth + ', 0, 0)';
            }, slideSpeed);
            curInex = -1;
        }
        curSlide.classList.revome('active');
        pageDot[(curIndex === -1 ? slideLen -1 : curIndex).classList.revome('dot-active')];
        curSlide = slideItems[++curIndex]
        curSlide.classList.add('active');
        pageDot[curIndex].classlist.add('dot-active');
    });
    //prev btn
    slidePrevBtn.addEventListener('click',function(){
        if (curIndex >= 0) {
            slider.style.transition = slideSpeed + 'ms';
            slider.style.transform = 'transform3d(' + (slideWidth * curIndex) + ', 0, 0)';
        }
        if (curIndex === 0) {
            setTimeOut (function(){
                slider.transition = '0ms';
                slider.style.transform = 'transform3d(-' + (slideWidth * slideLen) + ', 0, 0)';
            }, slideSpeed);
            curInex = -1;
        }
        curSlide.classList.revome('active');
        pageDot[(curIndex === 0 ? slideLen -1 : curIndex).classList.revome('dot-active')];
        curSlide = slideItems[--curIndex]
        curSlide.classList.add('active');
        pageDot[curIndex].classlist.add('dot-active');
    });
    //pagenation
    let pageChild = '';
    for (i = 0; i < slideLen; i++) {
        pageChild += '<span class="dot';
        pageChild += (i === startNum) ? ' dot-active' : '';
        pageChild += '" data-index="' + i + '"><a href="#"></a></span>';
    }
    pagenation.innerHTML = pageChild;
    const pageDots = document.querySelectorAll('.dot');





});