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

    if (value === "AC") {
      expression = "";
      display.innerText = 0;
      return;
    }

    if (value === "DEL") {
      expression = expression.slice(0, -1);
      display.innerText = expression;

      if (display.innerText === "") {
        display.innerText = 0;
      }
      return;
    }

    handleInput(value);
  });
});

window.addEventListener("keydown", (event) => {
  handleInput(event.key);

  // if ("+-*/".includes(event.key)) {
  //   operator = event.key;
  // }

  // display.innerText = firstNumber + " " + operator + " " + secondNumber;

  if (event.key === "Backspace") {
    expression = expression.slice(0, -1);
    display.innerText = expression;

    if (display.innerText === "") {
      display.innerText = 0;
    }
  }

  if (event.key === "Enter" || event.key === "=") {
    // let num1 = Number(firstNumber);
    // let num2 = Number(secondNumber);

    // result = "";

    // if (operator === "+") {
    //   result = num1 + num2;
    // }

    // if (operator === "-") {
    //   result = num1 - num2;
    // }

    // if (operator === "*") {
    //   result = num1 * num2;
    // }

    // if (operator === "/") {
    //   twoDecimal = num1 / num2;
    //   result = twoDecimal.toFixed(2);
    // }

    // clearDisplay();
    // display.innerText = result;

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

  result = eval(expression).toString();

  display.innerText = result;
  justCalculated = true;
  expression = result;
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
