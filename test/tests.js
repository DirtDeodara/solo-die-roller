import randomWholeNum from '../src/wholeNumbers.js';

const test = QUnit.test;



test('function returns a whole number', (assert) => {
    //Arrange
    //const range = 7;
    const expectedList = [1, 2, 3, 4, 5, 6];

    //Act 
    const result = expectedList.includes(randomWholeNum(7));
    const booleanResult = true;

    //Assert
    assert.equal(result, booleanResult);
});