//url을 조건으로 그 url과 같은 경우 해당 내용을 로드하기

var urlId = location.url();
console.log("urlId : " + urlId);

// //element
// var elemTitle = document.querySelector(".prod-content-head h3");

// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       func(this);
//     }
//   };
//   xhttp.open("GET", "../../../asset/dataproductions_sub.json", true);
//   xhttp.send();
// }

// function func(dataDoc) {
//   var i;
//   var dataDoc;
//   //data
//     var dataLoot = dataDoc.productions.EunMeAhn;
//     var dataTitle = dataLoot.title[0];

//     console.log(dataLoot + dataTitle);

//     // data append
//     // title
//     dataTitle.elemTitle.nodeValue;
// }


function loadDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      prodCFunc(this);
    }
  };
  xmlhttp.open("GET", "../../../asset/data/data.json", true);
  xmlhttp.send();
}//loadDoc Func

//productions subpage
function prodCFunc(xmlhttp) {
  var i;
  var dataDoc = xmlhttp;
  var perseObj = JSON.parse(dataDoc.responseText);
  var dataLoot = perseObj.productions.EunMeAhn;
  //DOM node resTitle
  var resTitle = document.querySelector('.productions .prod-content-head h3');
  var resArtist = document.querySelector('.productions .prod-content-head dl dd');
  var resMain = document.querySelector('.productions .tralier');
  var resBrochure = document.querySelector('.productions .brochure');
  var resDesc = document.querySelector('.productions .prod-content-wrap p');
  var resCredit = document.querySelector('.productions .credit');
  var resSlideImg = document.querySelector('.slide-list');

  //data
  var dataTitle = dataLoot.Letmechangeyourname.title;

  //resTitle
  (function() {
    if (resTitle.innerText == "") {
      resTitle.textContent = dataTitle;
    } else {
      resTitle.textContent = "";
    }
  })()

  console.log(dataTitle);
  console.log(location.hash.slice(1));

}//prodCFunc Func
loadDoc();

//dymamic create url page func

