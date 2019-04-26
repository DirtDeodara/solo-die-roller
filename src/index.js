
import randomWholeNum from './wholeNumbers.js'


const rollSixButton = document.getElementById('six-button');
const rollTwentyButton = document.getElementById('twenty-button');
const  resultMessage = document.getElementById('result-message');

//initiallize some stuff
//let sixSidedResult = '';
//let twentySidedResult = '';


rollSixButton.addEventListener('click', () => {
    resultMessage.textContent = randomWholeNum(7);
    console.log('rolled');
});

rollTwentyButton.addEventListener('click', () => {
    resultMessage.textContent = randomWholeNum(21);
});


//show message
