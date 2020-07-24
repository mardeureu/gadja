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
    let subPara = document.querySelector('.subpage-head p');
    let subHead3 = document.querySelector('.prod-content-head h3');
    let subArtistName = document.querySelector('.productions .prod-content-head dl');
    let subArtistPara = document.querySelector('.prod-content-head p');
    if (document.contains(subHead2) || document.contains(subPara)) {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        subHead2.className = 'headscroll';
        subPara.className = 'subParaScroll';
      } else {
        subHead2.className = '';
        subPara.className = '';
      }
    } else if (document.contains(subHead3) && document.contains(subArtistName)) {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        subHead3.className = 'headscroll';
        subArtistName.className = 'headscroll';
      } else {
        subHead3.className = '';
        subArtistName.className = '';
      }
    }  else {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        subHead3.className = 'headscroll';
        subArtistPara.className = 'headscroll';
      } else {
        subHead3.className = '';
        subArtistPara.className = '';
      }
    }

  });//head scroll event end


});//END