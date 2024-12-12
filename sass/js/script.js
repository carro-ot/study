let displayElement = document.getElementById('calculator-display');
let currentOperation = null;
let firstOperation = null;

function appendNumber(number) {
	if (displayElement.value === '0') {
		displayElement.value = number;
	} else {
		displayElement.value += number;
	}
};

function setOperation(operation) {
	firstOperation = parseFloat(displayElement.value);
	currentOperation = operation;

	displayElement.value += operation;
	}

function calculator() {
	let [firstPart, secondPart] = displayElement.value.split(currentOperation);
	let secondOperand = parseFloat(secondPart);

	let result = 0;;

	if (currentOperation === '+') {
		result = firstOperation + secondOperand;
	} else if (currentOperation === '-') {
		result = firstOperation - secondOperand;
	} else if (currentOperation === '*') {
		result = firstOperation * secondOperand;
	} else if (currentOperation === '/') {
		if (secondOperand !== 0) {
			result = firstOperation / secondOperand;
		} else {
			result = 'error'
		}
		
	}
	
	displayElement.value += `=${result}`;
	currentOperation = 0;
	firstOperation = 0;
}
function clearDisplay() {
	displayElement.value = '0';
	currentOperation = null;
	firstOperation = null;
}



