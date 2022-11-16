// const img1 = document.createElement("img1");
var img1 = "img/autumn.png";

// const img2 = document.createElement("img2");
var img2 = "img/end.jpg";

var img3 = "";

var img4 = "";

var imgArray = [img1, img2, img3, img4];

var i = 0;

function right() {
  if(i == imgArray.length - 1) { // if we're at the end of the array, go back to the first image
     i = 0;
     document.getElementById("pic").src = imgArray[i];
   }
   else { // go to the next img
     i++;
     document.getElementById("pic").src = imgArray[i];
   }
  }

function left() {
  if(i == 0) { // if we're at the first img, go to the last image
    i = imgArray.length - 1;
    document.getElementById("pic").src = imgArray[i];
  }
  else { // go to the prev image
    i--;
    document.getElementById("pic").src = imgArray[i];
  }
}
