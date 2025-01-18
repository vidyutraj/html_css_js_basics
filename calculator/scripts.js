// Get the display input
const display = document.getElementById('display');
const maxLength = 25; // Maximum length for the display

// Function to append to the display
function appendToDisplay(value) {
    if (display.value.length < maxLength) {
        display.value += value;
    }
}

// Function to calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to clear the last entry
function clearLastEntry() {
    display.value = display.value.slice(0, -1);
}

// Event listener for keyboard input
document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Handle numbers, operators, and basic functions
    if (/[\d.+\-*/]/.test(key) && display.value.length < maxLength) {
        display.value += key;
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        clearLastEntry();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
