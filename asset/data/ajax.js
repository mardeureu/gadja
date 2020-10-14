//slideImage eventListener
addEventListener("load", reqListener);

//XHR func reqListener
function reqListener() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      prodCFunc(this);
      console.log("XMLHttpRequest success");
    }
  };
  xmlhttp.open("GET", "../../../asset/data/productions_sub.json", true);
  xmlhttp.responseType = "text";
  xmlhttp.send();
}//reqListener Func

//productions subpage
function prodCFunc(xmlhttp) {
  //object variable
  var dataDoc = xmlhttp;
  var perseObj = JSON.parse(xmlhttp.responseText);
  var dataLoot = perseObj.EunMeAhn;
  //DOM node
  var resHeadTitle = document.documentElement.firstChild;
  var resTitle = document.querySelector('.productions .prod-content-head h3');
  var resLocalMenuTitle = document.querySelector('.productions .local-menu li:last-child a');
  var resArtist = document.querySelector('.productions .prod-content-head dl dd');
  var resMain = document.querySelector('.productions .tralier');
  var resBrochure = document.querySelector('.productions .brochure');
  var resDesc = document.querySelector('.productions .prod-content-wrap p');
  var resCredit = document.querySelector('.productions .credit');
  var resSlide = document.querySelector('.slide-list');

  var resCredit = document.querySelector('.credit');

  //loop dataLoot
  var i;
  for (i = 0; i < dataLoot.length; i++) {
    //data variable
    var dataTitle = dataLoot[i].title;
    var dataYears = dataLoot[i].years;
    var dataArtist = dataLoot[i].artist;
    var dataMain = dataLoot[i].mainVisual;
    var dataBrochure = dataLoot[i].brochure;
    //arr
    var dataImages = dataLoot[i].images;
    var dataDesc = dataLoot[i].desc;
    var dataCreditRole = dataLoot[i].credits.role;
    var dataCreditCast = dataLoot[i].credits.cast;
  }

  //cFunction
  (function() {
    //head title
    var titItem = document.createElement('title');
    if (titItem.innerText == "") {
      titItem.textContent = dataTitle + " - Productions - GADJA";
      resHeadTitle.appendChild(titItem);
    } else {
      titItem.innerText = "";
    }
    //local-menu
    if (resLocalMenuTitle.innerText == "") {
      resLocalMenuTitle.textContent = dataTitle;
    } else {
      resLocalMenuTitle.innerText == "";
    }
    //productions subpage contents
    //productions title, aritst name, main-visual, dataBrochure
    if (resTitle.innerText == "" || resArtist.innerText == "" || 
        resMain.src == "" || resBrochure.href == "") {
      resTitle.textContent = dataTitle;
      resArtist.textContent = dataArtist;
      resMain.src = dataMain;
      resBrochure.href = dataBrochure;
    } else {
      resTitle.textContent = "";
      resArtist.innerText = "";
      resMain.src = "";
      resBrochure.href = "";
    }
    //loop contents
    //slide images ***************** 슬라이드 작동 오류
    for (var i = 0; i < dataImages.length; i++) {
      var slideItem = document.createElement('div');
      const createImgElem = document.createElement('img');
//alt
      slideItem.classList.add('slide-items');
      createImgElem.src = dataImages[i];
      slideItem.appendChild(createImgElem);
      resSlide.appendChild(slideItem);
    }
    //description
    for (let i = 0; i < dataDesc.length; i++) { 
      const descItem = document.createElement('span');
      const descTxt = document.createTextNode(dataDesc[i]);
      descItem.appendChild(descTxt);
      resDesc.appendChild(descItem);
    }
    //credits
      function creditsFunc() {
        for (let i = 0; i < dataCreditRole.length || i < dataCreditCast.length; i++) {
          if (!(i > dataCreditRole.length-1)) {
            var creditRole = document.createElement('dt');
            const creditRoleTxt = document.createTextNode(dataCreditRole[i]);
            creditRole.appendChild(creditRoleTxt);
            resCredit.appendChild(creditRole);
          }
          if (!(i > dataCreditCast.length-1)) {
            var creditCast = document.createElement('dd');
            const creditCastTxt = document.createTextNode(dataCreditCast[i]);
            creditCast.appendChild(creditCastTxt);
            resCredit.appendChild(creditCast);
          }
        }
        console.log(creditCast);
      }//creditsFunc
      creditsFunc();
  })();

  locationHashChanged(dataLoot);
} //prodCFunc Func

//hash Change Event
function locationHashChanged(dataLoot) {
    var maxLen = dataLoot.length;
    var curURL = location.href;
    var i;
    (function() {
    window.addEventListener("hashchange", locationHashChanged)
    for (i = 0; i < maxLen; i++) {
      let curHash = location.hash;
      if (curURL.indexOf("#") === -1) {
        location.replace(curURL + "#" + i);
        curHash = location.hash;
        location.replace(curURL + curHash);
      }
    }
  })();
}//locationHashChanged

//dymamic create url page func
