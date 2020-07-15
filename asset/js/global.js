window.addEventListener('DOMContentLoaded', function(){
  //hide nav onscroll
  var prevScrollPos = window.pageYOffset;
  window.addEventListener('scroll', function() {
    
    var currnetScrollPos = window.pageYOffset;
    if (prevScrollPos > currnetScrollPos) {
        document.querySelector('header').style.top = 0;
    } else {
        document.querySelector('header').style.top = '-60px';
    }
    prevScrollPos = currnetScrollPos;
  });

  // head scroll event
  window.addEventListener('scroll', function() {
    let subHead2 = document.querySelector('h2');
    const subHead3 = document.querySelector('h3');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      subHead2.className = 'headscroll';
    } else {
      subHead2.className = '';
    }
  
  });


});//END