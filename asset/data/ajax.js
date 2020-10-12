var dIdx = location.hash.slice(1);
// //console.log(dIdx);

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


if () {}

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
  var prodArtist = document.querySelector('.productions .prod-content-head dl dd');
  var prodMain = document.querySelector('.productions .tralier');
  var prodBrochure = document.querySelector('.productions .brochure');
  var prodDesc = document.querySelector('.productions .prod-content-wrap p');
  var prodCredit = document.querySelector('.productions .credit');
  var prodSlideImg = document.querySelector('.slide-list');

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
