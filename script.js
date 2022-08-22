// JS for index.html
let origName = document.querySelector('h1').innerText
let h1Name = document.querySelector("h1");
function changeText() {
    h1Name.innerHTML = "My name is Jeff!";
    h1Name.style.color = "pink";
}
function changeBack() {
    h1Name.style.color = ''
    h1Name.innerHTML = origName
}
h1Name.addEventListener("mouseover", changeText);
h1Name.addEventListener('mouseout', changeBack);


// JS for contact.html
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

//script for projects page
// Creates a random number between 0 and 4.
const randNum = Math.floor(Math.random() * 5)

const msgCont = {
    today:[["finish that project"], ["take the next step"], ["reach the next level"], ["try something new"], ["make a new memory"]],
    walk: [["kindness is always the best option"], ["tomorrow is never promised"], ["life is a gift"], ["love is life's greatest gifts"], ["life is about experiences"]],
    remember: [["are awesome"], ["are great"], ["can do anything"], ["can choose to be better"], ["are never too old to learn and grow"]],
}
let today = (`Today is the day that you'll ${msgCont.today[randNum]}`);
let walk = (`Take a walk and remind yourself that ${msgCont.walk[randNum]}`);
let remember = (`Always remember that you ${msgCont.remember[randNum]}`);

const msgOut = () => {
    document.getElementById('demo1').innerHTML = today;
    document.getElementById('demo2').innerHTML = walk;
    document.getElementById('demo3').innerHTML = remember;
    document.getElementById('resetButton').hidden = false;
}

const resetMsg = () => {
    document.getElementById('resetButton').hidden = true
    document.getElementById('demo1').innerHTML = ''
    document.getElementById('demo2').innerHTML = ''
    document.getElementById('demo3').innerHTML = ''
}
