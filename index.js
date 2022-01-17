// Write your code here!

//remove main DIV
const mainDIV = document.querySelector("#main")
mainDIV.remove();

//create variable newHeader H1 with id of victory with textContent of "YOUR-NAME is the champion"
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.textContent = "Lindsey is the champion!"
