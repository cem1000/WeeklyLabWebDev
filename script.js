const arrayLength = 4;

function generateNumbers() {
    const numbers = [];
    for (let i = 0; i < arrayLength; i++) {
        numbers[i] = Math.floor(Math.random() * 100) + 1;
    }
    return numbers;
}

let numbers = generateNumbers();

function calculateSum(arrayOfNumbers) {
    let sum = 0;

    for(let i = 0; i < arrayOfNumbers.length; i++) {
        sum = sum + arrayOfNumbers[i];
    }
    
    return sum;
}

function calculateMean(arrayOfNumbers) {

    const sum = calculateSum(arrayOfNumbers);
    
    const mean = sum / arrayOfNumbers.length;
    
    return mean;
}

function displayResults(sum, mean) {
    const resultsContainer = document.getElementById("array-results");
    resultsContainer.innerHTML = `
    <p>The sum is: ${sum}</p>
    <p>The mean is: ${mean}</p>`;
}

function displayArray() {
    const arrayContainer = document.getElementById("array-numbers");
    arrayContainer.innerHTML = `Our numbers are: ${numbers}`;
}

function clearDisplay() {
    const resultsContainer = document.getElementById("array-results");
    const arrayContainer = document.getElementById("array-numbers");
    resultsContainer.innerHTML = '';
    arrayContainer.innerHTML = '';
}

function runCalculations() {
    numbers = generateNumbers();
    
    const sum = calculateSum(numbers);
    const mean = calculateMean(numbers);
    
    clearDisplay();
    
    displayResults(sum, mean);
    displayArray();
}

document.getElementById('calculate-btn').addEventListener('click', runCalculations);

