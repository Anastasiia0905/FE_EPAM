const inputValue = document.querySelector('#number');
const answerValue = document.querySelector('#answer');
const buttonCheck = document.querySelector(".check");

let count = 1;




window.onload = function (){
    let num = Math.ceil(Math.random()*100);
     inputValue.value = num;
}
buttonCheck.addEventListener('click', function(){
      console.log(answerValue.value);
      if(inputValue.value > answerValue.value){
          alert('wow')
      }
})
