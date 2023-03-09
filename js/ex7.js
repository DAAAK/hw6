const num1 = prompt("Enter the first number:");
const num2 = prompt("Enter the second number:");

const sum = parseInt(num1) + parseInt(num2);

if (isNaN(sum)) {
  document.getElementById(
    "content"
  ).innerHTML = `<span style="color: red; font-weight: bold;">Error!</span> You must enter integers. You entered "${num1}" and "${num2}". Try again."`;
} else if (num1 % 1 !== 0 || num2 % 1 !== 0) {
  document.getElementById(
    "content"
  ).innerHTML = `<span style="color: red; font-weight: bold;">Error!</span> You must enter integers. You entered "${num1}" and "${num2}". Try again."`;
} else {
  document.getElementById(
    "content"
  ).innerHTML = `${num1} + ${num2} = <span style="color: red; font-weight: bold;">${sum}</span>`;
}
