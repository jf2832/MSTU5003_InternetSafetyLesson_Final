/***************************************
Activity 4 - Highlight Text & Filter
****************************************/

// function highlightingText() {
//     document.getElementById("highlight1").className = "highlightedText"; // Using className to highlight the text. Problem: Won't unhighlight
// }
//
// function highlightingText() {
//     document.getElementById("highlight1").classList.add("highlightedText"); // Using classList.add to highlight the text. Same Problem: Won't unhighlight
// }

function highlightingText1() {
  document.getElementById("highlight1").classList.toggle("highlightedText");
}

function highlightingText2() {
  document.getElementById("highlight2").classList.toggle("highlightedText");
}

function highlightingText3() {
  document.getElementById("highlight3").classList.toggle("highlightedText");
}

function highlightingText4() {
  document.getElementById("highlight4").classList.toggle("highlightedText");
}

function highlightingText5() {
  document.getElementById("highlight5").classList.toggle("highlightedText");
}


function reprintHighlightedText() {
  var textHighlights = document.querySelectorAll(".highlightedText");
  for (var i = 0; i < textHighlights.length; i++) {
    var highlights = textHighlights[i].innerHTML;
  }
  document.getElementById("allHighlights").innerHTML = highlights;
}


// function hideUnhighlightedText() {
// var textToHide = document.getElementsByClassName("unhighlightedText");
//     for(var i = 0; i < textToHide.length; i++){
//         textToHide[i].style.visibility = "hidden";
//     }
// }
