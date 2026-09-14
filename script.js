const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Use eval carefully for simple calculators
        // In a production app, a custom math parser is safer
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}
