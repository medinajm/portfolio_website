// let intro = document.getElementsByClassName('intro')

// function changeTextColor {
//     intro.style.color = 'red';
// }
// intro.addEventListener('mouseover', changeTextColor)

let h1Name = document.querySelector("h1");
function changeText() {
    h1Name.innerHTML = "My name is Jeff!";
    h1Name.style.color = "pink";
}
function changeBack() {
    h1Name.style.color = ''
    h1Name.innerHTML = 'Jeff Medina'
}
h1Name.addEventListener("mouseover", changeText);
h1Name.addEventListener('mouseout', changeBack);

let mailImage = document.getElementById('mail');
let rotation = 0
function rotateMail() {
    rotation += 90;
    if(rotation === 360) {
        rotation = 0
    }
    mailImage.style.transform = `rotate(${rotation}deg)`
}
let startRotate = window.setInterval(rotateMail, 1000);