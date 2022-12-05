// HATS
var hatImg1 = "IMG_7485.png";
var hatImg2 = "IMG_7489.png";
var hatImg3 = "";
var hatImg4 = "";

var hatImgArray = [hatImg1, hatImg2, hatImg3, hatImg4];

var hatI = 0;

function hatRight() {
  if(hatI == hatImgArray.length - 1) { // if we're at the end of the array, go back to the first image
    hatI = 0;
    document.getElementById("hatPic").src = hatImgArray[hatI];
   }
   else { // go to the next img
    hatI++;
    document.getElementById("hatPic").src = hatImgArray[hatI];
   }
  }

function hatLeft() {
  if(hatI == 0) { // if we're at the first img, go to the last image
    hatI = hatImgArray.length - 1;
    document.getElementById("hatPic").src = hatImgArray[hatI];
  }
  else { // go to the prev image
    hatI--;
    document.getElementById("hatPic").src = hatImgArray[hatI];
  }
}

// SHIRTS
var shirtImg1 = "IMG_7486.png";
var shirtImg2 = "IMG_7490.png";
var shirtImg3 = "";
var shirtImg4 = "";

var shirtImgArray = [shirtImg1, shirtImg2, shirtImg3, shirtImg4];

var shirtI = 0;

function shirtRight() {
  if(shirtI == shirtImgArray.length - 1) { // if we're at the end of the array, go back to the first image
    shirtI = 0;
    document.getElementById("hatPic").src = shirtImgArray[shirtI];
   }
   else { // go to the next img
    shirtI++;
    document.getElementById("hatPic").src = shirtImgArray[shirtI];
   }
  }

function shirtLeft() {
  if(shirtI == 0) { // if we're at the first img, go to the last image
    shirtI = shirtImgArray.length - 1;
    document.getElementById("shirtPic").src = shirtImgArray[shirtI];
  }
  else { // go to the prev image
    shirtI--;
    document.getElementById("shirtPic").src = shirtImgArray[shirtI];
  }
}

// PANTS
var pantImg1 = "IMG_7487.png";
var pantImg2 = "IMG_7491.png";
var pantImg3 = "";
var pantImg4 = "";

var pantImgArray = [shirtImg1, shirtImg2, shirtImg3, shirtImg4];

var pantI = 0;

function pantRight() {
  if(pantI == pantImgArray.length - 1) { // if we're at the end of the array, go back to the first image
    pantI = 0;
    document.getElementById("pantPic").src = pantImgArray[pantI];
   }
   else { // go to the next img
    pantI++;
    document.getElementById("pantPic").src = pantImgArray[pantI];
   }
  }

function pantLeft() {
  if(pantI == 0) { // if we're at the first img, go to the last image
    pantI = pantImgArray.length - 1;
    document.getElementById("pantPic").src = pantImgArray[pantI];
  }
  else { // go to the prev image
    pantI--;
    document.getElementById("pantPic").src = pantImgArray[pantI];
  }
}

// Username Implementation
function sortingHat(str) {
  len = str.length;
  mod = len % 4 ;

  if (mod==0) {
    return "Heavy Outfit"
  }
  else if (mod==1) {
    return "Summer Outfit"
  }
  else if (mod==2) {
    return "Medium T-shirt and Jeans"
  }
  else if (mod==3) {
    return "Raincoats"
  }
  else if (mod==4) {
    return "Funny Outfit"
  }
}

var myButton = document.getElementById("mybutton");
myButton.addEventListener("click", function() {
  var name = document.getElementById("username").value;
  var house = sortingHat(name);
  newText = "<p> Your results are your... " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
});
