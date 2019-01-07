function add (a,b) {
	return(a + b);
}

function subtract (a,b) {
	return(a-b);
}

function multiply (a,b) {
	return (a * b)
}

function divide(a,b) {
	return (a / b)
}


function operate(operation,number1,number2){
	if(operation=='add'){
		var result=add(number1,number2)
	} else if(operation == 'multiply') {
		var result = multiply(number1,number2)
	} else if (operation == 'subtract') {
		var result = subtract(number1,number2) 
	} else if (operation == 'power') {
		var result = power(number1,number2)
	}
	return result
}

const buttonPlus = document.getElementById('btnAdd').addEventListener('click', function () {
	initOperation('add');
});

const buttonMinus = document.getElementById('btnMinus').addEventListener('click', function () {
	initOperation('subtract');
});
const buttonTimes = document.getElementById('btnTimes').addEventListener('click', function () {
	initOperation('multiply');
});
const buttonDivide = document.getElementById('btnDivide').addEventListener('click', function () {
	initOperation('divide');
});
const buttonResult = document.getElementById('btnEquals').addEventListener('click', result);

const buttonClear = document.getElementById('btnClear').addEventListener('click', allClear);
const buttonDelete = document.getElementById('btnDelete').addEventListener('click', deleteNumber);