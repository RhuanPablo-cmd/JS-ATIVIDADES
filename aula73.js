function calculateExpression(expression) {
  if (!expression || expression.trim() === "") {
    return "0";
  }

  const formattedExpression = expression
    .replace(/,/g, ".")
    .replace(/x/gi, "*")
    .replace(/÷/g, "/");

  if (/[+\-*/]$/.test(formattedExpression)) {
    return "0";
  }

  try {
    const result = Function(`"use strict"; return (${formattedExpression});`)();
    if (!Number.isFinite(result)) {
      return "Erro";
    }
    return Number.isInteger(result) ? String(result) : String(Number(result.toFixed(10)));
  } catch (error) {
    return "Erro";
  }
}

function appendValue(value) {
  const display = document.querySelector(".display");
  if (!display) return;

  const current = display.textContent.trim();
  const nextValue = value === "," ? "." : value;

  if (current === "0" && !/[+\-*/.]/.test(nextValue)) {
    display.textContent = nextValue;
    return;
  }

  display.textContent += nextValue;
}

function handleOperator(operator) {
  const display = document.querySelector(".display");
  if (!display) return;

  const current = display.textContent.trim();

  if (!current || current === "0") {
    return;
  }

  const lastCharacter = current.slice(-1);
  const operators = ["+", "-", "*", "/"];

  if (operators.includes(lastCharacter)) {
    display.textContent = current.slice(0, -1) + operator;
    return;
  }

  display.textContent += operator;
}

function clearDisplay() {
  const display = document.querySelector(".display");
  if (!display) return;
  display.textContent = "0";
}

if (typeof document !== "undefined") {
  const teclasnum = [...document.querySelectorAll(".num")];
  const teclaop = [...document.querySelectorAll(".op")];
  const teclares = document.querySelector(".res");
  const display = document.querySelector(".display");
  const tlimpar = document.querySelector("#tlimpar");

  if (display) {
    display.textContent = "0";
  }

  teclasnum.forEach((el) => {
    el.addEventListener("click", (evt) => {
      const value = evt.target.textContent.trim();
      appendValue(value);
    });
  });

  teclaop.forEach((el) => {
    el.addEventListener("click", (evt) => {
      const operator = evt.target.textContent.trim();
      const symbol = operator === "," ? "." : operator === "x" ? "*" : operator;
      handleOperator(symbol);
    });
  });

  if (teclares) {
    teclares.addEventListener("click", () => {
      const expression = display ? display.textContent.trim() : "";
      const result = calculateExpression(expression);
      if (display) {
        display.textContent = result;
      }
    });
  }

  if (tlimpar) {
    tlimpar.addEventListener("click", () => {
      clearDisplay();
    });
  }
}

if (typeof module !== "undefined") {
  module.exports = {
    calculateExpression,
    appendValue,
    handleOperator,
    clearDisplay,
  };
}