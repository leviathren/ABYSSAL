// changes the font size
function resizeText(multiplier) {
  if (document.body.style.fontSize == "") {
    document.body.style.fontSize = "1.0rem";
  }
  // adds or subtracts by 0.1rem
  document.body.style.fontSize =
    parseFloat(document.body.style.fontSize) + multiplier * 0.1 + "rem";
}
// resets text back to 1.0rem
function resetText() {
  document.body.style.fontSize = "1.0rem";
}

// changes the line-height
function resizeLine(multiplier) {
  if (document.body.style.lineHeight == "") {
    document.body.style.lineHeight = "2rem";
  }
  // adds or subtracts by 0.2rem
  document.body.style.lineHeight =
    parseFloat(document.body.style.lineHeight) + multiplier * 0.1 + "rem";
}
// resets line-height back to 1.2rem
function resetLine() {
  document.body.style.lineHeight = "2rem";
}