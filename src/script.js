// Tasks
// 1. Getting button for printing
function createBtnToPrint() {
  const body = document.querySelector('body');
  const btn = document.createElement('button');

  btn.innerHTML = 'Print';

  btn.onclick = () => {
    window.print();
  };
  body.append(btn);
}
createBtnToPrint();

// 2. Getting the current date

function getTimeNow() {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  const now = new Date();
  let date = now.getDate();
  let month = now.getMonth();
  const year = now.getFullYear();

  if (date < 10) {
    date = `0${date}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  div.innerHTML = `${date}/${month}/${year}`;

  body.append(div);
}

getTimeNow();

// 3. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

function findAreaTriangle(a, b, c) {
  const perimeter = (a + b + c) / 2;

  return Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c));
}
findAreaTriangle(5, 6, 7);

// 4.Rotate a string from left to right

const target = document.querySelector('#target');
const string = [...'w3resource'];

setInterval(() => {
  const popped = string.pop();
  target.textContent = string.join('');
  string.unshift(popped);
}, 1000);

// 5. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function showFullDate(month, year) {
  return new Date(year, month, 0).getDate();
}
function showDateInYear(year) {
  let amountDate = 0;
  for (let i = 1; i <= 12; i++) {
    amountDate += showFullDate(i, year);
  }
  if (amountDate === 365) {
    alert('Year isnt in the Gregorian calendar.');
    return amountDate;
  }
  alert('Year`s in the Gregorian calendar.');
  return amountDate;
}
showDateInYear(2000);

// 6. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

function findDate(start, end) {
  for (let i = start; i <= end; i++) {
    const getDate = new Date(i, 0, 1);
    if (getDate.getDay() === 0) {
      console.log(`1st January is in ${i}`);
    }
  }
}

findDate(2000, 2050);

// 7.  Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number.
// If the user input matches with guess number, the program will display a message "Good Work"
// otherwise display a message "Not matched".

// We can change these expressions
const start = 1;
const end = 10;

function randomInteger(min, max) {
  const answerToUser = +prompt('Guess the number between 1 and 10 inclusive');
  const randomNum = Math.floor(Math.random() * (max - min) + min);
  if (answerToUser === randomNum) {
    console.log('You`re right');
  } else {
    console.log(`No, that's not correct, num was ${randomNum}`);
  }
}
randomInteger(start, end);

// 8.Write a JavaScript program to calculate days left until next Christmas.
function calcDaystillChristms(year) {
  const nowDate = new Date();
  const christmasDate = new Date(year, 11, 31);
  const difference = christmasDate - nowDate;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  return days;
}
calcDaystillChristms(2000);

// 9.  Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const mult = document.getElementById('multiplication');

function multi() {
  mult.innerHTML = firstNumber.value * secondNumber.value;
}
multi();

function divide() {
  mult.innerHTML = firstNumber.value / secondNumber.value;
}
divide();

// 10.  Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : /5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

function temparature(n) {
  const newExrp = n.toString().split('');
  if (newExrp.includes('C')) {
    const newN = parseInt(newExrp.join(''), 10);
    const fahrenheit = (9 * newN + (32 * 5)) / 5;
    return fahrenheit;
  } if (newExrp.includes('F')) {
    const newN = parseInt(newExrp.join(''), 10);
    const celsius = (5 * (newN - 32)) / 9;
    return celsius
  }
  return n;
}
temparature('60F');
// 11. Write a JavaScript program to get the website URL (loading page).

// in this case there is more options to manage it

function gettingUrl() {
  return new URL(document.URL);
}
gettingUrl();

// 12. Write a JavaScript exercise to get the extension of a filename.

function getFileName(file) {
  return file.split('.').slice(-1); // in this case we can use POP()
}
getFileName('index.html');
// 13. Write a JavaScript exercise to create a variable using a user-defined name.

// first way
function differenceBtwNums(n) {
  if (n < 13) return 13 - n;
  return (n - 13) * 2;
}
differenceBtwNums(20);
// second way
function differgenceBtwNumsTwo(num) {
  const certainNum = 13;
  let resultNum = 0;
  if (num < certainNum) {
    resultNum = certainNum - num;
  } else if (num > certainNum) {
    resultNum = num - certainNum;
  } else {
    return num;
  }
  return resultNum;
}
differgenceBtwNumsTwo(20);
