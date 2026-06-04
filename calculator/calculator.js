let display = document.getElementById("display");

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

let firstNumber = "";
let operator = "";
let secondNumber = "";

window.addEventListener("keydown", (event) => {
  if ("0123456789".includes(event.key)) {
    if (operator === "") {
      firstNumber += event.key;
    } else {
      secondNumber += event.key;
    }
  }

  if ("+-*/".includes(event.key)) {
    operator = event.key;
  }

  display.innerText = firstNumber + " " + operator + " " + secondNumber;

  if (event.key === "c" || event.key === "C" || event.key === "Backspace") {
    clearDisplay();
    display.innerText = 0;
  }

  if (event.key === "Enter" || event.key === "=") {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

    result = "";

    if (operator === "+") {
      result = num1 + num2;
    }

    if (operator === "-") {
      result = num1 - num2;
    }

    if (operator === "*") {
      result = num1 * num2;
    }

    if (operator === "/") {
      result = num1 / num2;
    }

    clearDisplay();
    display.innerText = result;
  }
});

function clearDisplay() {
  firstNumber = "";
  operator = "";
  secondNumber = "";
}
