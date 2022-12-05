// HATS
var hatImg1 = "img/IMG_7485.png";
var hatImg2 = "img/IMG_7489.png";

var hatImgArray = [hatImg1, hatImg2, hatImg3];

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
var shirtImg1 = "img/IMG_7486.png";
var shirtImg2 = "img/IMG_7490.png";
var shirtImg3 = "img/IMG_7495.png";

var shirtImgArray = [shirtImg1, shirtImg2, shirtImg3];

var shirtI = 0;

function shirtRight() {
  if(shirtI == shirtImgArray.length - 1) { // if we're at the end of the array, go back to the first image
    shirtI = 0;
    document.getElementById("shirtPic").src = shirtImgArray[shirtI];
   }
   else { // go to the next img
    shirtI++;
    document.getElementById("shirtPic").src = shirtImgArray[shirtI];
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
var pantImg1 = "img/IMG_7487.png";
var pantImg2 = "img/IMG_7491.png";
var pantImg3 = "mg/IMG_7496.png";

var pantImgArray = [pantImg1, pantImg2, pantImg3];

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

// SHOES
var shoeImg1 = "img/IMG_7488.png";
var shoeImg2 = "img/IMG_7492.png";
var shoeImg3 = "img/IMG_7497.png";

var shoeImgArray = [shoeImg1, shoeImg2, shoeImg3];

var shoeI = 0;

function shoeLeft() {
  if(shoeI == 0) { // if we're at the first img, go to the last image
    shoeI = shoeImgArray.length - 1;
    document.getElementById("shoePic").src = shoeImgArray[shoeI];
    else { // go to the next img
     shoeI++;
     document.getElementById("shoePic").src = shoeImgArray[shoeI];
    }
   }

  }
  else { // go to the prev image
    shoeI--;
    document.getElementById("shoePic").src = shoeImgArray[shoeI];
  }
}


// Username Implementation
function sortingHat(str) {
  len = str.length;
  mod = len % 3 ;

  if (mod==0) {
    return "Heavy Outfit"
  }
  else if (mod==1) {
    return "Summer Outfit"
  }
  else if (mod==2) {
    return "Raincoats"
  }


var myButton = document.getElementById("mybutton");
myButton.addEventListener("click", function() {
  var name = document.getElementById("username").value;
  var house = sortingHat(name);
  newText = "<p> Your results are your... " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
});
