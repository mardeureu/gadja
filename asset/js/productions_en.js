// window.addEventListener('DOMContentLoaded',function(){
    
//     window.addEventListener('onscroll', function(){
//         const scrolllabel = document.documentElement.scrollHeight - window.innerHeight;
//         console.log('scrolllabel = ' + scrolllabel);
//         const scrolled = window.scrollY;
//         console.log('scrollled' + scrolled);
//         console.log('scroll Math.ceil' + Math.ceil(scrolled));
        
//         //list scroll target object
//         const prodTit = document.querySelector('prod-tit');
//         const prodArtist = document.querySelector('prod-artist');
//         const viewBtn = document.querySelector('.prod-container li > a');
//         const image = document.querySelector('li figure a');

//         function scrollevent(e) {
//             if(Math.ceil(scrolled) === scrolllabel) {
//                 prodTit.className = "invisible";
//             } else {
//                 className = "visible";
//             }
//         };
        
//         onscroll.
//     });//Scroll end
//     document.addEvent
// });//end

var scroll = window.requestAnimationFrame ||
function (callback) {
    window.setTimeout(callback, 1000/600);
};
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });
    scroll(loop);
  }
  loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );

    //performerance slider
    function performenceSlider() {
      //performenceSlider
      let sliderContainer = document.querySelector('.slider-container');
      let slidetBox = sliderContainer.querySelector('.slider-box');
      let slider = sliderContainer.querySelector('.slider');
      var nxtPrv = document.getElementById('prev');
      var nxtBtn = document.getElementById('next');

      
    }
  }