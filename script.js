var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0',' ','\n']
var letterIndex = 0
function updateLetter() {
    document.getElementById('letter').textContent = letters[letterIndex]
}
function moveLeft() {
    let element = document.getElementById('text');
    let currentText = element.textContent;
    
    // Remove the last character using slice
    element.textContent = currentText.slice(0, -1);
}
function moveUp() {
    if(letterIndex < 37){
        letterIndex += 1
    }
    updateLetter()
}
function moveDown() {
    if(letterIndex > 0){
        letterIndex -= 1
    }
    updateLetter()
}
function moveRight() {
    document.getElementById('text').textContent += letters[letterIndex]
}