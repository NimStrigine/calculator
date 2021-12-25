/* MAJOR TO DO:
- ADD LOGIC FOR NUMBER OF PLACES
- ROUNDING TO ACCOMODATE
*/

let num1 = "";
let prevTotal = "";
let currNum = "";
let operator = "";
let resDisplay = document.querySelector("#result");
let inputs = document.querySelector("#inputs");
const numBtns = document.querySelectorAll(".num");
const opBtns = document.querySelectorAll(".op");
const equal = document.querySelector("#eq");
const ac = document.querySelector("#AC");
const c = document.querySelector("#C");
const lol = document.querySelector("#lol");
const del = document.querySelector("#DEL");

console.log();

// delete last char
function delNum() {
  currNum = currNum.substring(0, currNum.length - 1);
  resDisplay.textContent = currNum;
};

// clear current number
function clear() {
  resDisplay.textContent = "";
  prevTotal = "";
};

// All clear
function allClear() {
  num1 = "";
  prevTotal = "";
  currNum = "";
  operator = "";
  resDisplay.textContent = "";
  inputs.textContent = "";
};

// Add number to display
function addNum(num) {
  currNum += num;
  resDisplay.textContent = currNum;
};

// Commit number and chosen operator
function commit(op) {
    // check if trying to operate on previous total
    if (currNum === "" && prevTotal !== "") {
      currNum = prevTotal;
    }

    // allow for continuous operations
    if (num1 !== "") {
      let total = operate(operator, num1, currNum);
      operator = op;
      inputs.textContent = total + " " + operator;
      resDisplay.textContent = "";
      num1 = total;
      currNum = "";
      
    }

    // normal operation. if no other numbers, commit curr num and operator
    if (!(currNum === "")) {
      operator = op;
      num1 = currNum;
      currNum = "";
      inputs.textContent = num1 + " " + operator;
      resDisplay.textContent = "";
    }
};

// Do operation on = press
function equals() {
  if(!(num1 === "" || operator === "" || currNum ==="")) {
    let total = operate(operator, num1, currNum);
    resDisplay.textContent = total;
    inputs.textContent += " " + currNum;
    operator = "";
    currNum = "";
    num1 = "";
    prevTotal = total;
}};

//add event listeners
del.addEventListener("click", delNum);
c.addEventListener("ciick", clear);
ac.addEventListener("click", allClear);
equal.addEventListener("click", equals);
for (const btn of numBtns) {
  btn.addEventListener("click", () => addNum(btn.textContent));
};
for (const btn of opBtns) {
  btn.addEventListener("click", () => commit(btn.textContent));
}


window.addEventListener("keydown", (e) => {
  if (e.key >= 0 && e.key <= 9 || e.key === ".") {addNum(e.key)};
  if (e.key === "=" || e.key === "Enter") {equals()};
  if (e.key === "Backspace") {delNum()};
  if (e.key === "Escape") {allClear()};
  if (e.key === "c") {clear()};
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {commit(e.key)};
  console.log(e.key);
});


// Rounding function
// use as num.round(2);
// let n = 1.8888;
// n.round(3); // 1.889
Number.prototype.round = function(places) {
  return +(Math.round(this + "e+" + places) + "e-" + places);
}

// Addition function
function add(a, b) {
	return a + b;
};

// Subtraction function
function subtract(a, b) {
  return a - b;
};

// Multiplication function
function multiply(a, b) {
  return a * b;
};

// Division function
function divide(a, b) {
  return a / b;
};

// Operate function, take operator and numbers and calls appropriate function
function operate(operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
    default:
      break;
  }
}

lol.addEventListener("click", () => {
  resDisplay.textContent = "8008135";
})