
import randomWholeNum from './wholeNumbers.js'


const rollSixButton = document.getElementById('six-sided');
const rollTwentyButton = document.getElementById('twenty-sided');
const  resultMessage = document.getElementById('result-message');

//initiallize some stuff
//let sixSidedResult = '';
//let twentySidedResult = '';


rollSixButton.addEventListener('click', () => {
    resultMessage.textContent = randomWholeNum(7);
});

rollTwentyButton.addEventListener('click', () => {
    resultMessage.textContent = randomWholeNum(21);
});


//show message
