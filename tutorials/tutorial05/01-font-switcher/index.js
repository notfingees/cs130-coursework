function makeBigger() {
   var curr_size = parseFloat(getComputedStyle(document.getElementById("text")).fontSize)
   document.getElementById("text").style.fontSize = `${curr_size+1}px`

   var curr_size_h1 = parseFloat(getComputedStyle(document.getElementById("h1")).fontSize)
   document.getElementById("h1").style.fontSize = `${curr_size_h1+2}px`
};

function makeSmaller() {
   var curr_size = parseFloat(getComputedStyle(document.getElementById("text")).fontSize)
   document.getElementById("text").style.fontSize = `${curr_size-1}px`

   var curr_size_h1 = parseFloat(getComputedStyle(document.getElementById("h1")).fontSize)
   document.getElementById("h1").style.fontSize = `${curr_size_h1-2}px`
};


document.getElementById("a1").addEventListener('click', makeBigger);
document.getElementById("a2").addEventListener('click', makeSmaller);

