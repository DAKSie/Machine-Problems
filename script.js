// Problem 1: Number Calculator
// Demonstrates: Basic arithmetic operations, DOM manipulation, template literals
function calculateNumbers() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result1');

    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerHTML = '<strong>Error:</strong> Please enter valid numbers in both fields.';
        return;
    }

    // Perform calculations
    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const quotient = num2 !== 0 ? (num1 / num2).toFixed(2) : 'Cannot divide by zero';

    // Display results using template literals
    resultDiv.innerHTML = `
        <strong>Results:</strong><br>
        Sum: ${num1} + ${num2} = <strong>${sum}</strong><br>
        Difference: ${num1} - ${num2} = <strong>${difference}</strong><br>
        Product: ${num1} × ${num2} = <strong>${product}</strong><br>
        Quotient: ${num1} ÷ ${num2} = <strong>${quotient}</strong>
    `;
}

// Problem 2: String Transformer
// Demonstrates: String methods, manipulation, and transformation
function transformText() {
    const text = document.getElementById('textInput').value;
    const resultDiv = document.getElementById('result2');

    // Validate input
    if (text.trim() === '') {
        resultDiv.innerHTML = '<strong>Error:</strong> Please enter some text.';
        return;
    }

    // String transformations
    const uppercase = text.toUpperCase();
    const lowercase = text.toLowerCase();
    const reversed = text.split('').reverse().join('');
    const wordCount = text.trim().split(/\s+/).length;
    const charCount = text.length;
    const firstChar = text.charAt(0);
    const lastChar = text.charAt(text.length - 1);

    // Display results
    resultDiv.innerHTML = `
        <strong>Original:</strong> ${text}<br>
        <strong>Uppercase:</strong> ${uppercase}<br>
        <strong>Lowercase:</strong> ${lowercase}<br>
        <strong>Reversed:</strong> ${reversed}<br>
        <strong>Word Count:</strong> ${wordCount}<br>
        <strong>Character Count:</strong> ${charCount}<br>
        <strong>First Character:</strong> "${firstChar}"<br>
        <strong>Last Character:</strong> "${lastChar}"
    `;
}

// Problem 3: Number List Analyzer
// Demonstrates: Arrays, array methods, mathematical operations
function analyzeNumbers() {
    const input = document.getElementById('numberList').value;
    const resultDiv = document.getElementById('result3');

    // Validate input
    if (input.trim() === '') {
        resultDiv.innerHTML = '<strong>Error:</strong> Please enter comma-separated numbers.';
        return;
    }

    // Parse input into array of numbers
    const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    if (numbers.length === 0) {
        resultDiv.innerHTML = '<strong>Error:</strong> No valid numbers found.';
        return;
    }

    // Calculate statistics
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = (sum / numbers.length).toFixed(2);
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const count = numbers.length;
    const sorted = [...numbers].sort((a, b) => a - b);

    // Display results
    resultDiv.innerHTML = `
        <strong>Numbers:</strong> [${numbers.join(', ')}]<br>
        <strong>Count:</strong> ${count}<br>
        <strong>Sum:</strong> ${sum}<br>
        <strong>Average:</strong> ${average}<br>
        <strong>Maximum:</strong> ${max}<br>
        <strong>Minimum:</strong> ${min}<br>
        <strong>Sorted:</strong> [${sorted.join(', ')}]
    `;
}

// Problem 4: Temperature Converter
// Demonstrates: Conditional logic, mathematical formulas, user selection
function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('tempUnit').value;
    const resultDiv = document.getElementById('result4');

    // Validate input
    if (isNaN(temp)) {
        resultDiv.innerHTML = '<strong>Error:</strong> Please enter a valid temperature.';
        return;
    }

    let convertedTemp, fromUnit, toUnit, formula;

    // Perform conversion based on selected unit
    if (unit === 'celsius') {
        convertedTemp = (temp * 9/5) + 32;
        fromUnit = '°C';
        toUnit = '°F';
        formula = '(°C × 9/5) + 32';
    } else {
        convertedTemp = (temp - 32) * 5/9;
        fromUnit = '°F';
        toUnit = '°C';
        formula = '(°F - 32) × 5/9';
    }

    // Display result
    resultDiv.innerHTML = `
        <strong>Original:</strong> ${temp}${fromUnit}<br>
        <strong>Converted:</strong> ${convertedTemp.toFixed(2)}${toUnit}<br>
        <strong>Formula:</strong> ${formula}
    `;
}

// Problem 5: Interactive Counter
// Demonstrates: State management, event handling, DOM updates
let counter = 0;

function incrementCounter() {
    counter++;
    updateCounterDisplay();
}

function decrementCounter() {
    counter--;
    updateCounterDisplay();
}

function resetCounter() {
    counter = 0;
    updateCounterDisplay();
}

function updateCounterDisplay() {
    const counterElement = document.getElementById('counterValue');
    counterElement.textContent = counter;
    
    // Add visual feedback based on counter value
    if (counter > 0) {
        counterElement.style.color = '#28a745';
    } else if (counter < 0) {
        counterElement.style.color = '#dc3545';
    } else {
        counterElement.style.color = '#2196F3';
    }
}

// Problem 6: Grade Calculator
// Demonstrates: Mathematical operations, conditional logic, grade classification
function calculateGrade() {
    const grade1 = parseFloat(document.getElementById('grade1').value);
    const grade2 = parseFloat(document.getElementById('grade2').value);
    const grade3 = parseFloat(document.getElementById('grade3').value);
    const resultDiv = document.getElementById('result6');

    // Validate inputs
    if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3)) {
        resultDiv.innerHTML = '<strong>Error:</strong> Please enter valid grades for all three fields.';
        return;
    }

    // Check if grades are within valid range
    if (grade1 < 0 || grade1 > 100 || grade2 < 0 || grade2 > 100 || grade3 < 0 || grade3 > 100) {
        resultDiv.innerHTML = '<strong>Error:</strong> Grades must be between 0 and 100.';
        return;
    }

    // Calculate average
    const average = ((grade1 + grade2 + grade3) / 3).toFixed(2);

    // Determine letter grade
    let letterGrade, status, emoji;
    if (average >= 90) {
        letterGrade = 'A';
        status = 'Excellent!';
        emoji = '🌟';
    } else if (average >= 80) {
        letterGrade = 'B';
        status = 'Very Good!';
        emoji = '👍';
    } else if (average >= 70) {
        letterGrade = 'C';
        status = 'Good';
        emoji = '✓';
    } else if (average >= 60) {
        letterGrade = 'D';
        status = 'Passed';
        emoji = '📝';
    } else {
        letterGrade = 'F';
        status = 'Failed - Keep trying!';
        emoji = '📚';
    }

    // Display results
    resultDiv.innerHTML = `
        <strong>Grades Entered:</strong> ${grade1}, ${grade2}, ${grade3}<br>
        <strong>Average:</strong> ${average}%<br>
        <strong>Letter Grade:</strong> ${letterGrade}<br>
        <strong>Status:</strong> ${emoji} ${status}
    `;
}

// Initialize counter display when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateCounterDisplay();
    console.log('Machine Problems website loaded successfully!');
    console.log('Ready for interactive JavaScript learning.');
});
