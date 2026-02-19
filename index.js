let options=document.getElementsByClassName("option");
let actionButton=document.getElementById("fixText")
let mode="encrypt"
let open=false
let learnControls=document.getElementsByClassName("learnControls");

options[0].addEventListener('click',encryptMode)
options[1].addEventListener('click',decryptMode)
actionButton.addEventListener('click',fixText)
learnControls[0].addEventListener('click',openCloseLearn)
learnControls[1].addEventListener('click',openCloseLearn)

// Changes mode to encrypt
function encryptMode() {
    options[0].style.fontWeight="bold";
    options[1].style.fontWeight="normal";
    text.placeholder="Type your regular text here..."
    actionButton.textContent="Encrypt Text"
    mode="encrypt"
}

// Changes mode to decrypt
function decryptMode() {
    options[0].style.fontWeight="normal";
    options[1].style.fontWeight="bold";
    text.placeholder="Type your encrypted text here...";
    actionButton.textContent="Decrypt Text"
    mode="decrypt"
}

// Determines weather to open or close learn area
function openCloseLearn() {
    let learnArea=document.getElementById("explanation");
    if (!open) {
        openLearn(learnArea)
    } else {
        closeLearn(learnArea)
    }
}

// Opens learn area
function openLearn(learnArea){
    learnArea.style.opacity="1";
    learnArea.style.pointerEvents="all";
    open=true;
}

// Closes learn area
function closeLearn(learnArea) {
    learnArea.style.opacity="0";
    learnArea.style.pointerEvents="none";
    open=false;
}

// Decides waht to do with the text
function fixText() {
    const alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let text=document.getElementById("text");
    let original=text.value.toLowerCase()
    let shift=Number(document.getElementById("key").value);

    if(mode=="encrypt"){
        encrypt(original, alphabet, shift)
    } else{
        decrypt(original, alphabet, shift)
    }
}

// Encrypts the text
function encrypt(original,alphabet,shift){
    let encrypted=""
    for (i in original) {
        if(alphabet.includes(original[i])) {
            if((alphabet.indexOf(original[i])+shift) < alphabet.length) {
                encrypted=encrypted+alphabet[(alphabet.indexOf(original[i]))+shift]
            }else{
                encrypted=encrypted+alphabet[shift-1]
            }
        }else{
            encrypted=encrypted+original[i]
        }
    }
    text.value=""
    text.value+=encrypted
}

// Decrypts the text
function decrypt(original,alphabet,shift){
    let decrypted=""
    for (i in original) {
        if(alphabet.includes(original[i])) {
            decrypted=decrypted+alphabet[(alphabet.indexOf(original[i]))-shift]
        }else{
            decrypted=decrypted+original[i]
        }
    }
    text.value=""
    text.value+=decrypted
}