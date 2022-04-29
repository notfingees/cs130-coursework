/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

function makeDefault() {

   document.querySelector("." + current_class_name).className = "container"
   current_class_name = "container"

};
function makeOcean() {
   document.querySelector("." + current_class_name).className = "ocean"
   current_class_name = "ocean"
};
function makeDesert() {
   document.querySelector("." + current_class_name).className = "desert"
   current_class_name = "desert"
};
function makeHC() {
   document.querySelector("." + current_class_name).className = "high-contrast"
   current_class_name = "high-contrast"

};

var current_class_name = 'container'

document.getElementById("default").addEventListener('click', makeDefault);
document.getElementById("ocean").addEventListener('click', makeOcean);
document.getElementById("desert").addEventListener('click', makeDesert);
document.getElementById("high-contrast").addEventListener('click', makeHC);


