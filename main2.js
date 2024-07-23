window.onload = function() {
    const calculator = new Calculator();
    const display = document.getElementById('calcDisplay');

    function updateDisplay() {
        display.innerText = calculator.currentVal;
    }

    document.querySelectorAll('button').forEach(button => { 
        button.addEventListener('click', () => {
            if (button.id === 'equals') {
                calculator.evaluate();
            } else if (['add', 'sub', 'divide', 'mult'].includes(button.id)) {
                calculator.setOpp(button.id);
            } else if (button.id === 'reset') {
                calculator.reset();
                updateDisplay(); 
            } else {
                calculator.appendNum(button.id);
            }
            updateDisplay();
        });
    });
}
class Calculator {
    constructor() {
        this.currentVal = '0';
        this.currentOpp = null;
        this.result = 0;
    }

    appendNum(num) {
        if (this.currentVal === '0' && num !== '.') {
            this.currentVal = num;
        } else {
            this.currentVal += num;
        }
    }

    setOpp(opp) {
        if (this.currentVal !== '0') {
            if (this.currentOpp !== null) {
                this.evaluate();
            } else {
                this.result = Number(this.currentVal);
            }
            this.currentOpp = opp;
            this.currentVal = '';
        }
    }

    reset() {
        this.currentVal = '0';
        this.currentOpp = null;
        this.result = 0;
    }

    evaluate() {
        if (this.currentOpp !== null) {
            switch (this.currentOpp) {
                case 'add':
                    this.add();
                    break;
                case 'sub':
                    this.sub();
                    break;
                case 'divide':
                    this.div();
                    break;
                case 'mult':
                    this.mult();
                    break;
                default:
                    break;
            }
            this.currentOpp = null;
            this.currentVal = this.result.toString();
        }
    }

    add() {
        this.result += Number(this.currentVal);
    }

    sub() {
        this.result -= Number(this.currentVal);
    }

    div() {
        if (this.currentVal !== '0') {
            this.result = parseFloat(this.result) / parseFloat(this.currentVal);
        } else {
            console.error("Division by zero is not allowed");
        }
    }

    mult() {
        this.result *= Number(this.currentVal);
    }
}
