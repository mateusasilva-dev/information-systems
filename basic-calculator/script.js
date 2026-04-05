/*  Basic Calculator
    PUC Minas - Exercise
*/

// Get the numbers from the input
function getNumbers() {
  const firstNumber = Number(document.getElementById("first-operator").value);
  const secondNumber = Number(document.getElementById("second-operator").value);

  return { firstNumber, secondNumber };
}

// Displays the result of the operation
function displayResult(result) {
  document.getElementById("result").value = result;
}

function add() {
  const { firstNumber, secondNumber } = getNumbers();
  displayResult(firstNumber + secondNumber);
}

function subtract() {
  const { firstNumber, secondNumber } = getNumbers();
  displayResult(firstNumber - secondNumber);
}

function divide() {
  const { firstNumber, secondNumber } = getNumbers();
  displayResult(firstNumber / secondNumber);
}

function multiply() {
  const { firstNumber, secondNumber } = getNumbers();
  displayResult(firstNumber * secondNumber);
}

function calculatePercentage() {
  const { firstNumber, secondNumber } = getNumbers();
  displayResult((firstNumber * secondNumber) / 100);
}
