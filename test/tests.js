import randomWholeNum from '../src/wholeNumbers.js';

const test = QUnit.test;

test('function returns a whole number', (assert) => {
    
    const expectedList = [1, 2, 3, 4, 5, 6];

    const result = expectedList.includes(randomWholeNum(7));
    const booleanResult = true;

    assert.equal(result, booleanResult);
});