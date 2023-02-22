class Calculator {
    constructor(topInnerText, bottomInnerText){
        this.topInnerText = topInnerText;
        this.bottomInnerText = bottomInnerText;
        this.allClear();
    }

    clear() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    allClear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== ''){
            this.compute();
        }
        this.operation = operation; 
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev)|| isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break
            case '-':
                computation = prev - current;
                break
            case '*':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }


    updateDisplay() {
        this.bottomInnerText.innerText = this.currentOperand;
        if (this.operation != null) {
            this.topInnerText.innerText = `${this.previousOperand} ${this.operation}`;
        }
    }

}

const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('.equal');
const allClearButton = document.querySelector('.allclear');
const clearButton = document.querySelector('.clear');
const topInnerText = document.querySelector('.top');
const bottomInnerText = document.querySelector('.bottom');

const calculator = new Calculator(topInnerText, bottomInnerText);

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click', button=> {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', button=> {
    calculator.allClear();
    calculator.updateDisplay();
})

clearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

