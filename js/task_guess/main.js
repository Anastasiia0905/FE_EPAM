let randomNumber = Math.ceil(Math.random()*100);
let guessField = document.querySelector("#guessField");
let guessSubmit = document.querySelector(".guessSubmit");
let guessCount = 0;

let count = document.querySelector(".count");
let hint = document.querySelector(".hint");

let topNumber = 100;
let bottomNumber = 0;


function check(){
    let guessNumber = Number(guessField.value);
    guessCount ++;
    if(guessNumber > randomNumber){
        topNumber = guessNumber -1;
        bottomNumber = bottomNumber;
        show();
    }
    if(guessNumber < randomNumber){
        bottomNumber = guessNumber + 1;
        topNumber = topNumber;
        show();
    }
    if(guessNumber === randomNumber){
        alert(`Ты угадал!!!`);
        reset();
    }
    
}
function show(){
    count.textContent = `Это твоя попытка № ${guessCount}`;
    hint.textContent = `Загаданое число от ${bottomNumber} до ${topNumber}`;
}
function reset(){
    randomNumber = Math.ceil(Math.random()*100);
    count.textContent = `Это твоя попытка №`
    hint.textContent = `Загаданое число от 0 до 100`;
    guessCount = 0;
    guessField.value = '';
    topNumber = 100;
    bottomNumber = 0;

}
guessSubmit.addEventListener("click", check);
