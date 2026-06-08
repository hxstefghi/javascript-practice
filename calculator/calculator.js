let display = document.getElementById("display");
let calcBtn = document.querySelectorAll(".btn");

let expression = "";
let validKeys = "1234567890+-*/";
let justCalculated = false;
let numbers = "1234567890";
let operators = "+-*/";

calcBtn.forEach((btn) => {
  let value = btn.innerText;
  btn.addEventListener("click", () => {
    if (value === "=") {
      displayResult();
      return;
    }

    clearExpression(value);

    deleteLastCharacter(value);

    handleInput(value);
  });
});

window.addEventListener("keydown", (event) => {
  handleInput(event.key);

  deleteLastCharacter(event.key);

  if (event.key === "Enter" || event.key === "=") {
    displayResult();
  }
});

function displayResult() {
  let result = "";

  if (expression.includes("/")) {
    result = eval(expression).toFixed(2);
    display.innerText = result;
    justCalculated = true;
    expression = result;
    return;
  }

  try {
    result = eval(expression).toString();
    display.innerText = result;
    justCalculated = true;
    expression = result;
  } catch (error) {
    display.innerText = "Invalid expression";
    justCalculated = true;
    expression = 0;
  }
}

function handleInput(value) {
  if (justCalculated) {
    if (numbers.includes(value)) {
      expression = value;
      display.innerText = expression;
      justCalculated = false;
      return;
    }

    if (operators.includes(value)) {
      expression += value;
      display.innerText = expression;
      justCalculated = false;
      return;
    }
  } else {
    if (validKeys.includes(value)) {
      expression += value;
      display.innerText = expression;
    }
  }
}

function deleteLastCharacter(char) {
  if (char === "Backspace") {
    expression = expression.slice(0, -1);
    display.innerText = expression;

    if (display.innerText === "") {
      display.innerText = 0;
    }
  }

  if (char === "DEL") {
    expression = expression.slice(0, -1);
    display.innerText = expression;

    if (display.innerText === "") {
      display.innerText = 0;
    }
    return;
  }
}

function clearExpression(char) {
  if (char === "AC") {
    expression = "";
    display.innerText = 0;
    return;
  }
}
