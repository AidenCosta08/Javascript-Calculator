

const display = document.querySelector('#calcDisplay');

let currentValue = '';

['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].forEach(num => {
    document.getElementById(num).addEventListener('click', function() {
        currentValue += num;
        display.textContent = currentValue;
    });
});

['add', 'sub', 'divide', 'mult'].forEach(operator => {
    document.getElementById(operator).addEventListener('click', function() {
        currentValue += getOperator(operator);
        display.textContent = currentValue;
    });
});

function getOperator(operator){
    if(operator === 'add'){
        return "+";
    }
    else if(operator === 'sub'){
        return "-";
    }
    else if(operator === 'divide'){
        return "/";
    }
    else if(operator === 'mult'){
        return "*";
    }
}

document.getElementById('equals').addEventListener('click', function() {
    try{
        currentValue = eval(currentValue);
        display.textContent = currentValue;
    }
    catch(err){
        display.textContent = err.message;
    }
});
