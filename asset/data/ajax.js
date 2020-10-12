//XHR func reqListener
function reqListener() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      prodCFunc(this);
    } else {
      console.log("XMLHttpRequest faled");
    }
  };
  xmlhttp.open("GET", "../../../asset/data/productions_sub.json", true);
  xmlhttp.responseType = "text";
  xmlhttp.send();
  console.log("reqListener test: " + xmlhttp);
}//reqListener Func
reqListener();

//productions subpage
function prodCFunc(xmlhttp) {
  //object variable
  var i;
  var dataDoc = xmlhttp;
  var perseObj = JSON.parse(dataDoc.responseText);
  var dataLoot = perseObj.EunMeAhn;
  //node variable
  var resTitle = document.querySelector('.productions .prod-content-head h3');
  var resArtist = document.querySelector('.productions .prod-content-head dl dd');
  var resMain = document.querySelector('.productions .tralier');
  var resBrochure = document.querySelector('.productions .brochure');
  var resDesc = document.querySelector('.productions .prod-content-wrap p');
  var resCredit = document.querySelector('.productions .credit');
  var resSlideImg = document.querySelector('.slide-list');
  //data variable
  var dataTitle = dataLoot[0].title;

  (function() {
    if (resTitle.innerText == "") {
      resTitle.textContent = dataTitle;
    } else {
      resTitle.textContent = "";
    }
    console.log("prodCFunc test : " + dataTitle);
  })();

} //prodCFunc Func

//dymamic create url page func
//url conditional
//  console.log(location.hash.slice(1));
var curURL = location.href;
console.log("curURL : " + curURL);

if (Boolean(curURL.indexOf('Letmechangeyourname'))) {
  console.log("success");
}
