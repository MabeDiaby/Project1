/*
TODO:
A short description of your game: 
A single player game where the player will guess letters to create a hidden (random) word. if they guess correctly, they win, if they guess the wrong letter the spacemen lose.
MVP Goals
    [x] Be able to either click letters or type on keyboards
    [] Able to restart game with restart button
    [x] Able to show total amount of chances/guesses left
    []  Nice clean game
Stretch Goals
    [] Animated astronaut and ship
    [] Victory or losing animation
    [] A timer
    [x] Random word generator with genre
    [] Track scores across games (even if the page is reloaded)
*/ 

/*
HTML Steps:
    [x] Div class: Wrapper class: wraps the game in a box
    [x] Make a Title
    [x] Make p tags: Catagory's/Genre 
    [x] Make a h3 tag: Choose a letter below
    [x] Make divs: Lives Remaining, Restart Button, Info
    [x] Make a Reset Button: Play Again
    [x] Make an h3: Game Over, You Win
BONUS
    [] Timer
    [] Random funfacts
*/
/*
JS Steps:
    [x] Pull random words from API
    [x] Have a feild for wrong letters
    [] You win and You lose screens to work
    [x] Have lines so players know how many letters in the word
    [x] Be able to use your key board
    [x] Be able to use buttons
    [] 
    [] 
*/
/*
CSS Steps:
    [x] Make it look like squid games using the color schemes
    [x] Using green and pink
    [x] Have a doll and different squid games characters
    [] Make everything look nicer
    [] 
    [] 
    [] 
    [] 
*/

const word = document.querySelector("#word")
const wrongLettters = document.getElementById("notifForLetters")
const playAgain = document.getElementsByClassName("playAgainBtn")
const newGame = document.getElementById("newGameBtn")
const popupNotif = document.getElementsByClassName("pops")
const notification = document.getElementsByClassName("notif")
const youWin = document.getElementsByClassName("youWin")
const youLost = document.getElementsByClassName("gameOver")
const hangman = document.querySelectorAll(".hangman")
const url = "https://random-word-form.herokuapp.com/random/noun"

const hint = document.getElementById("hintBtn")
const guessWordBtn = document.getElementById("guessWordBtn")
const allIn = document.getElementById("myGuess")
const alphaWord = document.getElementsByClassName("guessBtn")


// const words = []
const correctGuesses = []
const wrongGuesses = []


var obj;
let div = document.createElement("div", '_');
let message = ""
let replaced = ""

// function randomWord() {
//     e.preventDefault()
//     fetch(url)
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
//   console.log(word.data);
// }


fetch(url)
.then((res) => {
    res.preventDefault
    if (res.ok) {
        return res.json();
    } else {
        throw new Error("NETWORK RESPONSE ERROR");
    }
})
.then(data => {
    obj = data[0]
    console.log((obj));
    console.log((obj.length));
    for (let i = 0; i < obj.length; i++) {
        message += "_ "
    }
    console.log(message);
    word.innerText = message
})
.then(() => {
    console.log(obj)
})
//   console.log(data);
.catch((error) => console.error("FETCH ERROR:", error));


function selectedWord(){
    word.innerHTML=
    `${obj
        .split('')
        // https://stackoverflow.com/questions/23565201/put-each-letter-in-given-div-in-separate-span
        // https://stackoverflow.com/questions/68503823/how-ternary-operator-calls-a-function
        .map(letter=>`
         <span class="letter">
            ${correctGuesses.includes(letter)?letter:"_"}
         </span>
        `).join('')
    }`
    // https://dmitripavlutin.com/replace-all-string-occurrences-javascript/
    // const innerWord=word.innerText.replace(/\n/g,'')
    // if(innerWord===obj){
    //     youWin.innerText='You Won!'
    //     popupNotif.style.display="flex"
    // }
}

function updateWrongLetter(){
    // display wrong letters
    wrongLettters.innerHTML=`
    ${wrongGuesses.length>0?'<p>Already Gressed!</p>':'_'}
    ${wrongGuesses.map(letter=>`<span>${letter}</span>`)}
   `    
//    displaying the hang man
   hangman.forEach((part,index)=>{
       const errors=wrongGuesses.length
       if(index<errors){
           part.style.display='block'
       }else{
           part.style.display='none'
       }
   })

//    check if you lost
// if(wrongGuesses.length===hangman.length){
//     youLost.innerText='you lost'
//     popupNotif.style.display='flex'
// }
}
// show notifications
// function notifications(){
//     notification.classList.add('show')
//     setTimeout(()=>{
//         notification.classList.remove('show')
//     },2000)
// }
// https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/
window.addEventListener('keydown',e=>{
    if(e.keyCode>=65&&e.keyCode<=189){
        const letter=e.key
        // https://stackoverflow.com/questions/39972269/how-do-i-check-if-a-guessed-character-is-in-a-string-in-this-code
        if(obj.includes(letter)){
            if(!correctGuesses.includes(letter)){
                correctGuesses.push(letter)
                selectedWord()
            }
            // else{
            //     notifications( )
            // }
        }else{
            if(!wrongGuesses.includes(letter)){
                wrongGuesses.push(letter)
                updateWrongLetter()
            }
            // else{
            //     notifications()
            // }
        }
    }
})

// function playGame(){   
//     //empty array
// correctGuesses.splice(0)
// wrongGuesses.splice(0)
// obj=words[Math.floor(Math.random()*words.length)]
// selectedWord()
// updateWrongLetter()
// popupNotif.style.display='none'         
// }

// play again
// newGameBtn.addEventListener('click',playAgain)
// window.addEventListener('keydown',(e)=>{
//     if(e.keyCode===13){
//         playAgain()
//     }
// })

// selectedWord()





// const innerWord = word.innerText.replace(/\n/g, '')
// if (innerWord ===obj) {
//     console.log('you win');
// }
// console.log(obj);
// // https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/
// let updatedGuess = ""
// word.innerText = updatedGuess

// window.addEventListener('keydown', e => {
//     if (e.keyCode>=65&&e.keyCode<=190) {
//         const letter = e.key
        
//         if(obj.includes(letter)) {
//             // const obj = word.appendChild(e.key).style.visbility = "visable"
//             // word.push(letter)
//             for (let i = 0; i < obj.length; i++) {
//                 if (obj[i] == letter) {
//                     updatedGuess += letter;
//                     updatedGuess[i].innerHTML = letter
//                     word.innerHTML += letter
//                     // word.appendChild(letter)
                
//                 }
//             }
            
//             console.log(letter)
//             console.log(updatedGuess);
//         }
//         // div.innerHTML = e.key
//         // e.key.push()
        // console.log(`you clicked ${e.key}`);
//     }
//     // for (let i = 0; i < obj.length; i++) {
//     //     updatedGuess += "_";
//     // };
// })

// newGame.addEventListener("click", () => {
//     console.log("You clicked?"); 
// });
