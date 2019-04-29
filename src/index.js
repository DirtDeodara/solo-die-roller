import randomWholeNum from './wholeNumbers.js';


const rollSixButton = document.getElementById('six-sided');
const rollTwentyButton = document.getElementById('twenty-sided');
const resultMessage = document.getElementById('result-message');


rollSixButton.addEventListener('click', () => {
    resultMessage.textContent = randomWholeNum(7);
});

rollTwentyButton.addEventListener('click', () => {
    resultMessage.textContent = randomWholeNum(21);
});
