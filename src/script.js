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
    return celsius;
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

// 14. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

function differenceBtwTwoNum(n) {
  return (n < 19) ? 19 - n : (n - 19) * 3;
}
differenceBtwTwoNum(10);

// 15. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function checkTwoNum(a, b) {
  if (a === 50 || b === 50 || (a + b) === 50) alert(true);
  return { a, b };
}
checkTwoNum(40, 10);

// 16. Check whether a given integer is within 20 of 100 or 400

function checkInteger(n) {
  if (Math.abs(100 - n) <= 20 || Math.abs(400 - n) <= 20) return n;
  return console.log('There is a mistake');
}
checkInteger(56);

// 17. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

function checkIntegerPosOrNeg(a, b) {
  if (a > 0 && b < 0) return 'Numbers are different';
  return console.log('There is a mistake');
}
checkIntegerPosOrNeg(10, -1);

// 18.Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string

function createNewString(str) {
  if (str.startsWith('Java')) return str;
  return `Java${str}`;
}
createNewString('Script');

// 19. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

function removeCharacter(str, position) {
  const removePosOne = str.substring(0, position - 1);
  const removePosTwo = str.substring(position, str.length);
  return removePosOne + removePosTwo;
}

removeCharacter('JavaScript', 5);

// 20. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1

function changePosition(str) {
  if (str.length > 1) {
    const body = str.slice(1, str.length - 1);
    return (str[str.length - 1] + body + str[0]);
  }
  return str;
}
changePosition('hello');
// 21.  Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.

function getNewString(str) {
  const firstLetter = str.slice(0, 1);
  return firstLetter + str + firstLetter;
}
getNewString('check');

// 22. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

function checkNum(n) {
  if (n % 3 === 0 || n % 7 === 0) {
    return 'This is correct';
  }
  return n;
}

checkNum(7);

// 23. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.

function createStr(str) {
  if (str.length > 3) {
    const lastThreeLetter = str.slice(-3);
    return lastThreeLetter + str + lastThreeLetter;
  }
  return str;
}
createStr('hello');

// 24. Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.

function checkStartString(str) {
  if (str.startsWith('Java')) return true;
  return false;
}
checkStartString('JavaScript');
// 25. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.

function checkIntegerInRange(a, b) {
  if ((a >= 50 && a <= 99) && (b >= 50 && b <= 99)) {
    return true;
  }
  return { a, b };
}
checkIntegerInRange(50, 99);

// 26. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range

function checkIntegerInRangeTwo(a, b, c) {
  if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99)) {
    return true;
  }
  return [a, b, c];
}

checkIntegerInRangeTwo(10, 20, 90);

// 27. Write a JavaScript program to find the largest of three given integers.

function findLargestNum(a, b, c) {
  return Math.max(a, b, c);
}

findLargestNum(10, 13, 40);

// 28. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values

function numNextToNum(a, b) {
  const newA = Math.abs(a - 100);
  const newB = Math.abs(b - 100);
  if (newA < newB) return a;
  if (newB < newA) return b;
  return 100;
}

numNextToNum(40, 50);

// 29. Check whether two numbers are in range 40..60 or in the range 70..100 inclusive

function checkTwoInInterval(a, b) {
  if (((a > 40 && a < 60) || (a > 70 && a <= 100))
      && ((b > 70 && b <= 100) || (b > 40 && b < 60))) return true;
  return { a, b };
}

checkTwoInInterval(40, 80);

// 30. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

function findLargerNum(a, b) {
  if ((a > 40 && a < 60) && (b > 40 && b < 60)) {
    if (a < b) return b;
    return a;
  }
  return { a, b };
}

findLargerNum(41, 42);

// 31. Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.

// This solution is made for user use
function checkPosition(str, symbol) {
  if (str.length > 4) {
    const newStr = str.slice(1, 4);
    if (newStr.includes(symbol)) return true;
  }
  return str;
}

checkPosition('Hello', 4);

// 32. Write a JavaScript program to check whether the last digit of the three given positive integers is same.

function checkThreeNums(a, b, c) {
  if (a > 10 && b > 10 && c > 10) {
    const lastNum = [a, b, c].map((item) => item.toString().slice(-1));
    for (let i = 0; i < lastNum.length; i++) {
      if (i === lastNum.length - 1) {
        break;
      }
      if (lastNum[i] !== lastNum[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

checkThreeNums(10, 20, 30);
// or

function checkThreeNumsTwo(x, y, z) {
  if ((x > 0) && y > 0 && z > 0) {
    return (x % 10 === y % 10 && y % 10 === z % 10 && x % 10 === z % 10);
  }
  return false;
}

checkThreeNumsTwo(10, 20, 30);

// 33. Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.

function newString(str) {
  let newStr = '';
  if (str.length > 3) {
    for (let j = 0; j < str.length; j++) {
      if (j <= 2) {
        newStr += str[j].toLowerCase();
      } else {
        newStr += str[j];
      }
    }
  }
  if (str.length <= 3) {
    newStr = str.toUpperCase();
  }
  return newStr;
}

newString('verafication');
