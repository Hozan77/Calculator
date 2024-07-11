const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    let expression = display.value;
    expression = expression.replace(/×/g, '*').replace(/÷/g, '/');
    try {
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}
