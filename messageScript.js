// Creates a random number between 0 and 4.
const randNum = Math.floor(Math.random() * 5)
const msgArt = String.raw`--  --
()  ()
  /_
 \__/ `;

const msgCont = {
    today:[["finish that project"], ["take the next step"], ["reach the next level"], ["try something new"], ["make a new memory"]],
    walk: [["kindness is always the best option"], ["tomorrow is never promised"], ["life is a gift"], ["love is life's greatest gifts"], ["life is about experiences"]],
    remember: [["are awesome"], ["are great"], ["can do anything"], ["can choose to be better"], ["are never too old to learn and grow"]],
}

const msgOut = () => {
    console.log(`Today is the day that you'll ${msgCont.today[randNum]}`);
    console.log(`Take a walk and remind yourself that ${msgCont.walk[randNum]}`);
    console.log(`Always remember that you ${msgCont.remember[randNum]}`);
    console.log(msgArt)
}

msgOut();