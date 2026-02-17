let options=document.getElementsByClassName("option");
let selected=document.getElementById("selected");
let textbox=document.getElementById("text");
let actionButton=document.getElementById("fixText");

let mode="encrypt";

options[0].onclick=function() {
    options[0].style.fontWeight="bold";
    options[1].style.fontWeight="normal";
    textbox.placeholder="Type your regular text here..."
    actionButton.textContent="Encrypt Text"
}
options[1].onclick=function() {
    options[0].style.fontWeight="normal";
    options[1].style.fontWeight="bold";
    textbox.placeholder="Type your encrypted text here...";
    actionButton.textContent="Decrypt Text"
}