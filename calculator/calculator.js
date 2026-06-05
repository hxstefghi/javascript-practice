let display = document.getElementById("display");
let calcBtn = document.querySelectorAll(".btn");

let clearBtn = document.getElementById("ac-btn");
let deleteBtn = document.getElementById("del-btn");
let percentBtn = document.getElementById("percent-btn");
let divideBtn = document.getElementById("divide-btn");

let sevenBtn = document.getElementById("seven-btn");
let eightBtn = document.getElementById("eight-btn");
let nineBtn = document.getElementById("nine-btn");
let multiplyBtn = document.getElementById("multiply-btn");

let fourBtn = document.getElementById("four-btn");
let fiveBtn = document.getElementById("five-btn");
let sixBtn = document.getElementById("six-btn");
let minusBtn = document.getElementById("minus-btn");

let oneBtn = document.getElementById("one-btn");
let twoBtn = document.getElementById("two-btn");
let threeBtn = document.getElementById("three-btn");
let plusBtn = document.getElementById("plus-btn");

let zeroBtn = document.getElementById("zero-btn");
let decimalBtn = document.getElementById("decimal-btn");
let equalBtn = document.getElementById("equal-btn");

let expression = "";
let validKeys = "1234567890+-*/";

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

    expression += value;
    display.innerText = expression;
  });
});

window.addEventListener("keydown", (event) => {
  if (validKeys.includes(event.key)) {
    expression += event.key;
    display.innerText = expression;
  }

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

function clearDisplay() {
  firstNumber = "";
  operator = "";
  secondNumber = "";
}

function displayResult() {
  let result = "";

  if (expression.includes("/")) {
    result = eval(expression).toFixed(2);
    display.innerText = result;
    return;
  }

  result = eval(expression).toString();

  display.innerText = result;
  expression = result;
}
