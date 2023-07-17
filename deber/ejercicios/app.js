document.getElementById('purchaseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const totalAmount = parseFloat(document.getElementById('totalAmount').value);
    const paidAmount = parseFloat(document.getElementById('paidAmount').value);

    const ivaPercentage = 14; // IVA del 14%

    const iva = calculateIVA(totalAmount, ivaPercentage);
    const change = calculateChange(totalAmount, iva, paidAmount);

    showMessage('El vuelto a entregar al cliente es: $' + change.toFixed(2));
});

function calculateIVA(totalAmount, ivaPercentage) {
    return (totalAmount * ivaPercentage) / 100;
}

function calculateChange(totalAmount, iva, paidAmount) {
    return paidAmount - (totalAmount + iva);
}

function showMessage(message) {
    document.getElementById('result').textContent = message;
}

//multiplos
function checkMultiple() {
    const firstNumber = parseInt(document.getElementById('firstNumber').value, 10);
    const secondNumber = parseInt(document.getElementById('secondNumber').value, 10);
    const resultDiv = document.getElementById('result');

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        resultDiv.textContent = secondNumber % firstNumber === 0
            ? `${secondNumber} es múltiplo de ${firstNumber}.`
            : `${secondNumber} NO es múltiplo de ${firstNumber}.`;
    } else {
        resultDiv.textContent = 'Por favor, ingresa números válidos.';
    }
}
//divisores
function findDivisors() {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    if (!isNaN(numberInput) && numberInput !== '') {
        const number = parseInt(numberInput, 10);
        resultDiv.textContent = '';

        const divisors = calculateDivisors(number);
        const divisorsText = divisors.join(', ');

        resultDiv.textContent = `Los divisores de ${number} son: ${divisorsText}.`;
    } else {
        resultDiv.textContent = 'Por favor, ingresa un número válido.';
    }
}

function calculateDivisors(number) {
    const divisors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}
//suma divisores
function sumDivisors() {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    if (!isNaN(numberInput) && numberInput !== '') {
        const number = parseInt(numberInput, 10);
        resultDiv.textContent = '';

        const divisors = calculateDivisors(number);
        const sum = calculateSum(divisors);

        resultDiv.textContent = `La suma de los divisores de ${number} es: ${sum}.`;
    } else {
        resultDiv.textContent = 'Por favor, ingresa un número válido.';
    }
}

function calculateDivisors(number) {
    const divisors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

function calculateSum(divisors) {
    let sum = 0;
    for (const divisor of divisors) {
        sum += divisor;
    }
    return sum;
}
//cantidad divisores
function countDivisors() {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    if (!isNaN(numberInput) && numberInput !== '') {
        const number = parseInt(numberInput, 10);
        resultDiv.textContent = '';

        const divisorsCount = calculateDivisorsCount(number);

        resultDiv.textContent = `El número ${number} tiene ${divisorsCount} divisores.`;
    } else {
        resultDiv.textContent = 'Por favor, ingresa un número válido.';
    }
}

function calculateDivisorsCount(number) {
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }
    return count;
}
//perfecto
function checkPerfectNumber() {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    if (!isNaN(numberInput) && numberInput !== '') {
        const number = parseInt(numberInput, 10);
        resultDiv.textContent = '';

        const isPerfect = isPerfectNumber(number);

        if (isPerfect) {
            resultDiv.textContent = `${number} es un número perfecto.`;
        } else {
            resultDiv.textContent = `${number} NO es un número perfecto.`;
        }
    } else {
        resultDiv.textContent = 'Por favor, ingresa un número válido.';
    }
}

function isPerfectNumber(number) {
    let sumOfDivisors = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sumOfDivisors += i;
        }
    }
    return sumOfDivisors === number;
}
//amigos
function checkAmicableNumbers() {
    const numberInput1 = document.getElementById('numberInput1').value;
    const numberInput2 = document.getElementById('numberInput2').value;
    const resultDiv = document.getElementById('result');

    if (!isNaN(numberInput1) && !isNaN(numberInput2) && numberInput1 !== '' && numberInput2 !== '') {
        const number1 = parseInt(numberInput1, 10);
        const number2 = parseInt(numberInput2, 10);
        resultDiv.textContent = '';

        const areAmicable = areAmicableNumbers(number1, number2);

        if (areAmicable) {
            resultDiv.textContent = `${number1} y ${number2} son números amigos.`;
        } else {
            resultDiv.textContent = `${number1} y ${number2} NO son números amigos.`;
        }
    } else {
        resultDiv.textContent = 'Por favor, ingresa números válidos.';
    }
}

function areAmicableNumbers(number1, number2) {
    return (
        sumOfDivisors(number1) === number2 &&
        sumOfDivisors(number2) === number1 &&
        number1 !== number2
    );
}

function sumOfDivisors(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum;
}
//primos
function checkPrimeNumber() {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    if (!isNaN(numberInput) && numberInput !== '') {
        const number = parseInt(numberInput, 10);
        resultDiv.textContent = '';

        const isPrime = isPrimeNumber(number);

        if (isPrime) {
            resultDiv.textContent = `${number} es un número primo.`;
        } else {
            resultDiv.textContent = `${number} NO es un número primo.`;
        }
    } else {
        resultDiv.textContent = 'Por favor, ingresa un número válido.';
    }
}

function isPrimeNumber(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
//primos gemelos
function checkTwinPrimes() {
    const numberInput1 = document.getElementById('numberInput1').value;
    const numberInput2 = document.getElementById('numberInput2').value;
    const resultDiv = document.getElementById('result');

    if (!isNaN(numberInput1) && !isNaN(numberInput2) && numberInput1 !== '' && numberInput2 !== '') {
        const number1 = parseInt(numberInput1, 10);
        const number2 = parseInt(numberInput2, 10);
        resultDiv.textContent = '';

        const areTwinPrimes = areTwinPrimesNumbers(number1, number2);

        if (areTwinPrimes) {
            resultDiv.textContent = `${number1} y ${number2} son números primos gemelos.`;
        } else {
            resultDiv.textContent = `${number1} y ${number2} NO son números primos gemelos.`;
        }
    } else {
        resultDiv.textContent = 'Por favor, ingresa números válidos.';
    }
}

function isPrimeNumber(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function areTwinPrimesNumbers(number1, number2) {
    return isPrimeNumber(number1) && isPrimeNumber(number2) && Math.abs(number1 - number2) === 2;
}
//cantidad digitos
function countDigits() {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    if (!isNaN(numberInput) && numberInput !== '') {
        const number = parseInt(numberInput, 10);
        resultDiv.textContent = '';

        const digitsCount = countNumberDigits(number);

        resultDiv.textContent = `El número ${number} tiene ${digitsCount} dígitos.`;
    } else {
        resultDiv.textContent = 'Por favor, ingresa un número válido.';
    }
}

function countNumberDigits(number) {
    return Math.abs(number).toString().length;
}
//numeros invertidos
function reverseNumber() {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    if (!isNaN(numberInput) && numberInput !== '') {
        const number = parseInt(numberInput, 10);
        resultDiv.textContent = '';

        const reversedNumber = reverseDigits(number);

        resultDiv.textContent = `El número invertido es: ${reversedNumber}`;
    } else {
        resultDiv.textContent = 'Por favor, ingresa un número válido.';
    }
}

function reverseDigits(number) {
    let reversedNumber = 0;
    let remainder;

    while (number !== 0) {
        remainder = number % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        number = Math.floor(number / 10);
    }

    return reversedNumber;
}
//factorial
function calculateFactorial() {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    if (!isNaN(numberInput) && numberInput !== '') {
        const number = parseInt(numberInput, 10);
        resultDiv.textContent = '';

        const factorial = calculateRecursiveFactorial(number);

        resultDiv.textContent = `El factorial de ${number} es: ${factorial}`;
    } else {
        resultDiv.textContent = 'Por favor, ingresa un número válido.';
    }
}

function calculateIterativeFactorial(number) {
    if (number < 0) {
        return undefined;
    }

    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }

    return factorial;
}

function calculateRecursiveFactorial(number) {
    if (number < 0) {
        return undefined;
    }

    if (number === 0 || number === 1) {
        return 1;
    }

    return number * calculateRecursiveFactorial(number - 1);
}
//exponente
function calculateExponent() {
    const baseInput = document.getElementById('baseInput').value;
    const exponentInput = document.getElementById('exponentInput').value;
    const resultDiv = document.getElementById('result');

    if (!isNaN(baseInput) && !isNaN(exponentInput) && baseInput !== '' && exponentInput !== '') {
        const base = parseFloat(baseInput);
        const exponent = parseInt(exponentInput, 10);
        resultDiv.textContent = '';

        const result = calculatePower(base, exponent);

        resultDiv.textContent = `El resultado de ${base} elevado a ${exponent} es: ${result}`;
    } else {
        resultDiv.textContent = 'Por favor, ingresa números válidos.';
    }
}

function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}
//tabla
function generateMultiplicationTable() {
    const numberInput = document.getElementById('numberInput').value;
    const tableDiv = document.getElementById('table');

    if (!isNaN(numberInput) && numberInput !== '') {
        const number = parseInt(numberInput, 10);
        tableDiv.textContent = '';

        const table = createMultiplicationTable(number);

        tableDiv.appendChild(table);
    } else {
        tableDiv.textContent = 'Por favor, ingresa un número válido.';
    }
}

function createMultiplicationTable(number) {
    const table = document.createElement('table');
    table.border = '1';

    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');

        cell1.textContent = `${number} x ${i}`;
        cell2.textContent = number * i;

        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    }

    return table;
}
//fibonaci
function generateFibonacciSeries() {
    const numberInput = document.getElementById('numberInput').value;
    const seriesDiv = document.getElementById('series');

    if (!isNaN(numberInput) && numberInput !== '') {
        const number = parseInt(numberInput, 10);
        seriesDiv.textContent = '';

        const series = calculateFibonacciSeries(number);

        seriesDiv.textContent = `Serie de Fibonacci hasta ${number}: ${series.join(', ')}`;
    } else {
        seriesDiv.textContent = 'Por favor, ingresa un número válido.';
    }
}

function calculateFibonacciSeries(limit) {
    const series = [0, 1];
    let a = 0;
    let b = 1;

    while (b <= limit) {
        const nextNumber = a + b;
        a = b;
        b = nextNumber;
        series.push(nextNumber);
    }

    return series;
}






