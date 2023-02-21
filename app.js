const allClearButton = document.querySelector('.allclear');
const clearButton = document.querySelector('.clear');
const nine = document.querySelector('.nine');
const eight = document.querySelector('.eight');
const seven = document.querySelector('.seven');
const six = document.querySelector('.six');
const five = document.querySelector('.five');
const four = document.querySelector('.four');
const three = document.querySelector('.three');
const two = document.querySelector('.two');
const one = document.querySelector('.one');
const zero = document.querySelector('.zero')
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const plus = document.querySelector('.plus');
const subtract = document.querySelector('.subtract');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.equal');
const topScreen = document.querySelector('.top');
const bottomScreen = document.querySelector('.bottom');
let bottomValues = [];
let topValues = [];
let operator;

//when a button is clicked, insert that button into the bottomScreen div
 updateBottom = (value) => {
    if (bottomValues.length < 9){
        bottomValues.push(value);
        bottomScreen.innerText = `${bottomValues.join('')}`
    }
}

updateTop = (value) => {
    topScreen.innerText = `${topValues.join('')}` + value
}


//number buttons
nine.onclick = () => updateBottom(9);
eight.onclick = () => updateBottom(8);
seven.onclick = () => updateBottom(7);
six.onclick = () => updateBottom(6);
five.onclick = () => updateBottom(5);
four.onclick = () => updateBottom(4);
three.onclick = () => updateBottom(3);
two.onclick = () => updateBottom(2);
one.onclick = () => updateBottom(1);
zero.onclick = () => updateBottom(0);
decimal.onclick = () => {
    if (!(bottomValues.includes('.'))){
        updateBottom('.');
    }
}

//operand buttons

plus.onclick = () => {
    if (!(bottomValues.includes('+') && bottomValues[0] !== '+')){
        topValues = bottomValues;
        updateTop('+');
        operator = '+';
    }
    bottomValues = [];
    updateBottom();
}

subtract.onclick = () => {
    if (!(bottomValues.includes('-') && bottomValues[0] !== '-')){
        topValues = bottomValues;
        updateTop('-')
    }
    bottomValues = [];
    updateBottom();
}

divide.onclick = () => {
    if (!(bottomValues.includes('÷') && bottomValues[0] !== '÷')){
        topValues = bottomValues;
        updateTop('÷');
    }
    bottomValues = [];
    updateBottom();
}

multiply.onclick = () => {
    if (!(bottomValues.includes('*') && bottomValues[0] !== '*')){
        topValues = bottomValues;
        updateTop('*');
    }
    bottomValues = [];
    updateBottom();
}

//equal button
evaluate = () => {
    let a = Number(topValues.join(''));

    let b = Number(bottomValues.join(''));

    let result = a/b;
   
    bottomScreen.innerText = `${result}`
}

equal.onclick = () => evaluate();
