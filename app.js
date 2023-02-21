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
const subtract = document.querySelector('.subtract');
const decimal = document.querySelector('.decimal');
const topScreen = document.querySelector('.top');
const bottomScreen = document.querySelector('.bottom');
let values = [];

//when a button is clicked, insert that button into the bottomScreen div
 updateBottom = (value) => {
    if (values.length < 9){
        values.push(value);
        bottomScreen.innerText = `${values.join('')}`
    }
}

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
    if (!(values.includes('.'))){
        updateBottom('.');
    }
}



