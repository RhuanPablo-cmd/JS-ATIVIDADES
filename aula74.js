function calculateExpression(expression) {
  const source = String(expression || "")
    .replace(/,/g, ".")
    .replace(/[x×]/gi, "*")
    .replace(/÷/g, "/")
    .replace(/\s+/g, "");

  if (!source) return "0";

  const tokens = source.match(/(?:\d+(?:\.\d*)?|\.\d+)|[()+\-*/]/g);
  if (!tokens || tokens.join("") !== source) return "Erro";

  let position = 0;
  const parsePrimary = () => {
    const token = tokens[position++];
    if (token === "+") return parsePrimary();
    if (token === "-") return -parsePrimary();
    if (token === "(") {
      const value = parseExpression();
      if (tokens[position++] !== ")") throw new Error("Parêntese não fechado");
      return value;
    }
    if (!token || !/^\d|^\./.test(token)) throw new Error("Expressão inválida");
    return Number(token);
  };

  const parseTerm = () => {
    let value = parsePrimary();
    while (tokens[position] === "*" || tokens[position] === "/") {
      const operator = tokens[position++];
      const nextValue = parsePrimary();
      value = operator === "*" ? value * nextValue : value / nextValue;
    }
    return value;
  };

  function parseExpression() {
    let value = parseTerm();
    while (tokens[position] === "+" || tokens[position] === "-") {
      const operator = tokens[position++];
      const nextValue = parseTerm();
      value = operator === "+" ? value + nextValue : value - nextValue;
    }
    return value;
  }

  try {
    const result = parseExpression();
    if (position !== tokens.length || !Number.isFinite(result)) return "Erro";
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
  if (current === "Erro" || current === "0") {
    display.textContent = nextValue === "." ? "0." : nextValue;
    return;
  }

  if (nextValue === ".") {
    const currentNumber = current.split(/[+\-*/()]/).pop();
    if (currentNumber.includes(".")) return;
    display.textContent += currentNumber ? "." : "0.";
    return;
  }
  display.textContent += nextValue;
}

function handleOperator(operator) {
  const display = document.querySelector(".display");
  if (!display) return;
  const current = display.textContent.trim();
  const lastCharacter = current.slice(-1);
  const operators = ["+", "-", "*", "/"];

  if (operator === "-" && (!current || operators.includes(lastCharacter) || lastCharacter === "(")) {
    display.textContent += operator;
    return;
  }
  if (!current || current === "0" || lastCharacter === "(" || lastCharacter === ".") return;
  display.textContent = operators.includes(lastCharacter)
    ? current.slice(0, -1) + operator
    : current + operator;
}

function clearDisplay() {
  const display = document.querySelector(".display");
  if (display) display.textContent = "0";
}

function deleteLastCharacter() {
  const display = document.querySelector(".display");
  if (!display) return;
  const current = display.textContent.trim();
  display.textContent = current.length > 1 && current !== "Erro" ? current.slice(0, -1) : "0";
}

if (typeof document !== "undefined") {
  const calculator = document.querySelector("#calc");
  const display = document.querySelector(".display");
  const powerButton = document.querySelector("#t_ligar");
  let isPoweredOn = true;
  let justEvaluated = false;

  calculator?.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const action = button.dataset.action;
    const value = button.dataset.value;
    if (action === "power") {
      isPoweredOn = !isPoweredOn;
      calculator.classList.toggle("desligada", !isPoweredOn);
      powerButton.textContent = isPoweredOn ? "ON" : "OFF";
      if (!isPoweredOn) clearDisplay();
      return;
    }
    if (!isPoweredOn) return;

    if (action === "clear") {
      clearDisplay();
      justEvaluated = false;
    } else if (action === "delete") {
      deleteLastCharacter();
      justEvaluated = false;
    } else if (action === "equals") {
      const result = calculateExpression(display.textContent);
      display.textContent = result;
      justEvaluated = result !== "Erro";
    } else if (value) {
      if (justEvaluated && /[0-9.(]/.test(value)) clearDisplay();
      justEvaluated = false;
      if (/^[+\-*/]$/.test(value)) handleOperator(value);
      else appendValue(value);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!isPoweredOn || event.ctrlKey || event.altKey || event.metaKey) return;
    const key = event.key;
    if (/^[0-9.]$/.test(key) || key === ",") {
      event.preventDefault();
      if (justEvaluated) clearDisplay();
      justEvaluated = false;
      appendValue(key);
    } else if (["+", "-", "*", "/"].includes(key)) {
      event.preventDefault();
      justEvaluated = false;
      handleOperator(key);
    } else if (key === "(") {
      event.preventDefault();
      appendValue(key);
    } else if (key === ")") {
      event.preventDefault();
      appendValue(key);
    } else if (key === "Enter" || key === "=") {
      event.preventDefault();
      display.textContent = calculateExpression(display.textContent);
      justEvaluated = display.textContent !== "Erro";
    } else if (key === "Backspace") {
      event.preventDefault();
      deleteLastCharacter();
    } else if (key === "Escape" || key === "Delete") {
      clearDisplay();
    }
  });
}

if (typeof module !== "undefined") {
  module.exports = { calculateExpression, appendValue, handleOperator, clearDisplay, deleteLastCharacter };
}