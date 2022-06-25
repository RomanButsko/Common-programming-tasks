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

// 34. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

function computeSum(a, b) {
  const sum = a + b;
  if (sum >= 50 && sum <= 80) return 65;
  return 80;
}
computeSum(20, 45);

// 35.Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

function checkTwoIntegers(a, b) {
  const maxSum = a + b;
  const minSum = Math.abc(a - b);
  if (a === 8 || b === 8 || maxSum === 8 || minSum === 8) return true;
  return false;
}

checkTwoIntegers(4, 8);

// 36. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

function checkSameNums(a, b, c) {
  if (a === b && b === c) return 30;
  if (a === b || b === c) return 40;
  return 20;
}

checkSameNums(20, 30, 40);

// 37. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

function threeNumscheck(a, b, c) {
  if (a % 10 === b % 10 || a % 10 === c % 10 || b % 10 === c % 10) return true;
  return false;
}
threeNumscheck(30, 20, 10);

// 38. Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.

function integerMultiple(a, b) {
  if (!((a % 7 === 0 || a % 11 === 0) && (b % 7 === 0 || b % 11 === 0))) {
    return (a % 7 === 0 || a % 11 === 0 || b % 7 === 0 || b % 11 === 0);
  }
  return false;
}

integerMultiple(14, 21);

// 39. Write a JavaScript program to reverse a given string.

function reverseStr(str) {
  return str.split('').reverse().join('');
}

reverseStr('Text');

// 40. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

function replaceString(str) {
  str.toLowerCase();
  const chars = [];
  for (let i = 0; i < str.length; i++) {
    chars.push(str.charCodeAt(i) + 1);
  }
  return String.fromCharCode(...chars);
}

replaceString('charCode');

// 41. Write a JavaScript program to capitalize the first letter of each word of a given string

function capitalazeFirstLetter(str) {
  return str.split(' ').map((item) => item[0].toUpperCase() + item.slice(1)).join(' ');
}

capitalazeFirstLetter('hello user');

// 42. Write a JavaScript program to convert a given number to hours and minutes.

function getHoursAndMinuts(n) {
  const date = new Date(0, 0, 0, n, n);
  return `${date.getHours()}hours:${date.getMinutes()}minutes`;
}

getHoursAndMinuts(14);

// 43. Write a JavaScript program to convert the letters of a given string in alphabetical order.

function convertLetters(str) {
  return str.split('').sort().join('');
}

convertLetters('convert');

// 44. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string

function spaceBtwletters(str, a, b, space) {
  const index = str.indexOf(a);
  const indexTwo = str.indexOf(b);
  const result = indexTwo - index;
  if (result > space || result < -space) return true;
  return str;
}

spaceBtwletters('programming', 'p', 'a', 3);

// 45. Write a JavaScript program to count the number of vowels in a given string.

function countVowels(str) {
  const checkStr = str.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < checkStr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (checkStr[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
}

countVowels('admin');

// 46.  Write a JavaScript program to check whether a given string contains equal number of p's and t's

function checkStrcontain(str) {
  const newStr = str.split('');
  let p = 0;
  let t = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === 'p') ++p;
    if (newStr[i] === 't') ++t;
  }
  if (p === t) return true;
  return false;
}

checkStrcontain('temporary');

// 47. Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas

function divideNums(a, b) {
  return Math.round(a / b).toString().split('');
}

divideNums(80, 6);

// 48. Write a JavaScript program to create a new string of specified copies (positive number) of a given string.

function createCopiesStr(str, copies) {
  return copies <= 0 ? false : str.repeat(copies);
}
createCopiesStr('abc', 5);

// 49. Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.

function createNewStrCopies(str) {
  return str.length > 3 ? str.slice(-3).repeat(4) : false;
}

createNewStrCopies('checkFn');

// 50. Write a JavaScript program to extract the first half of a string of even length

function firstHalfOfStr(str) {
  if (str.length % 2 === 0) return str.slice(0, str.length / 2);
  return false;
}

firstHalfOfStr('checkFn');

// 51. Write a JavaScript program to create a new string without the first and last character of a given string.

function firstAndLastCharacter(str) {
  return str.slice(1, str.length - 1);
}

firstAndLastCharacter('check');

// 52.  Write a JavaScript program to concatenate two strings except their first character.

function concatenateTwoString(a, b) {
  return `${a.slice(1)}${b.slice(1)}`;
}

concatenateTwoString('PHP', 'JS');

// 53. Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three

function moveLastThreeCharacter(str) {
  if (str.length > 3) return `${str.slice(-3)}${str.slice(0, str.length - 3)}`;
  return str;
}

moveLastThreeCharacter('check');

// 54.  Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.

function createStringMiddle(str) {
  const arr = str.split('');
  if (!(arr.length % 2 === 0)) {
    const middle = Math.round(arr.length / 2 - 2);
    return arr.splice(middle, 3).join('');
  }
  return str;
}

createStringMiddle('check');

// 55. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.

function concatenateTwoStr(first, second) {
  if (first.length > second.length) {
    return first.slice(0, second.length) + second;
  }
  if (second.length > first.length) {
    return second.slice(0, first.length) + first;
  }
  return true;
}

concatenateTwoStr('checked', 'check');

// 56. Write a JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6

function includeStr(str, script) {
  if (str.length >= 6) {
    const scriptLength = script.length;
    const index = str.indexOf(script);
    if (index + scriptLength === str.length) {
      return true;
    }
  }
  return false;
}

includeStr('check', 'ck');

// 57. . Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

function displayCityName(city) {
  if (city.slice(0, 3) === 'New' || city.slice(0, 3) === 'Los') return city;
  return false;
}

displayCityName('Los Angeles');

// 58. Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'.
// Return the original string if the condition is not satisfied.

function checkStrIncludeP(str) {
  const firstElem = str.slice(0, 1);
  const lastElem = str.slice(-1);
  if (firstElem === 'P' && lastElem === 'P') return str.slice(1, str.length - 1);
  return true;
}

checkStrIncludeP('PythonP');

// 59. Write a JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n.

function createStrFirstLast(str, n) {
  return str.slice(0, n) + str.slice(-n);
}

createStrFirstLast('JavaScript');

// 60.Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

function sumThree(nums) {
  return nums.reduce((previous, current) => previous + current);
}

sumThree([1, 4, 5]);

// 61.Write a JavaScript program to rotate the elements left of a given array of integers of length 3.

function rotateElements(nums) {
  if (nums.length === 3) return [nums[1], nums[2], nums[0]];
  return 'More then 3 nums';
}

rotateElements([1, 3, 5]);

// 62. Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.

function check1Appears(arr) {
  if (arr.length > 1 && (arr[0] === 1 || arr[arr.length] === 1)) return true;
  return false;
}
check1Appears([12, 3, 53, 321, 1]);

// 63. Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3.

function checkNumsArray(arr) {
  return arr[0] === arr[arr.length - 1];
}

checkNumsArray([1, 24, 5, 2, 1]);

// 64. Write a JavaScript program to reverse the elements of a given array of integers length 3.

function reverseElements(arr) {
  return arr.reverse();
}

reverseElements([1, 2, 4, 3, 2]);

// 65. Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.

function findLargeValue(arr) {
  const max = Math.max.apply(null, arr);
  return arr.map(() => max);
}

findLargeValue([12, 4, 5, 123]);

// 66. Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.

function middleElemInArr(arrOne, arrTwo) {
  return (arrOne.length === 3 && arrTwo.length === 3) ? [arrOne[1], arrTwo[1]] : false;
}

middleElemInArr([1, 2, 4], [1, 5, 6]);

// 67.  Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.

function testArrayLength(arr) {
  const res = arr.filter((item) => (item === 1 || item === 2 || item === 3));
  if (res.length >= 1) return true;
  return false;
}

testArrayLength([1, 2, 5]);

// 68. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.

function integerContainsTwice(num) {
  let count = 0;
  num.map((item) => (((item === 30 && item === 40) || (item === 40 && item === 40) || (item === 30 && item === 30)) ? count++ : 'not'));
  if (count < 2) return 'not enough values';
  return count;
}

integerContainsTwice([12, 4, 5, 40, 30]);

// 69. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

function swapFirstAndLastElem(num) {
  if (num.length > 1) {
    const firstElem = num[0];
    num[0] = num[num.length - 1];
    num[num.length - 1] = firstElem;
  }
  return num;
}

swapFirstAndLastElem([1, 3, 5, 7]);

// 70.  Write a JavaScript program to add two digits of a given positive integer.

function addTwoDigits(num) {
  const newNum = num.toString().split('');
  for (const i of newNum) newNum[newNum.indexOf(i)] = parseInt(i, 10);
  return newNum.reduce((privious, current) => privious + current, 0);
}

addTwoDigits(25);

// 71. Write a JavaScript to add two positive integers without carry.

function addTwoIntegers(a, b) {
  const sumA = [];
  const sumB = [];
  const newA = a.toString().split('');
  const newB = b.toString().split('');
  for (const i of newA) {
    if (parseInt(i, 10) === 9) {
      sumA.push(-1);
    } else {
      sumA.push(parseInt(i, 10));
    }
  }
  for (const i of newB) {
    if (parseInt(i, 10) === 9) {
      sumB.push(-1);
    } else {
      sumB.push(parseInt(i, 10));
    }
  }
  const maxLength = Math.min(sumA.length, sumB.length);
  const result = [];
  for (let i = 0; i < maxLength; i++) {
    result.push(sumA[sumA.length - 1 - i] + sumB[sumB.length - 1 - i]);
  }
  return Number(result.join(''));
}

addTwoIntegers(150, 190);

// 72. Write a JavaScript to find the longest string from a given array of strings

function findLongestStr(arr) {
  let result = 0;
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      result = Math.max(arr[i].length);
    }
  }
  return result;
}

findLongestStr(['aaa', 'aaaa', 'aaaaa', 'aaaa']);

// use map

function findLongestStrTwo(arr) {
  const result = [];
  for (const key of arr) result.push(key.length);
  return Math.max(...result);
}

findLongestStrTwo(['aaa', 'aaaa', 'aaaaa', 'aaaa']);

// 73. Write a JavaScript to replace each character of a given string by the next one in the English alphabet

function replaceCharacter(str) {
  const newStr = str.split('');
  const result = newStr.map((item) => item.charCodeAt());
  return result.map((item) => ((item === 122 || item === 90) ? String.fromCharCode(97) : String.fromCharCode(item + 1)));
}

replaceCharacter('abcdz');

// other way

function replaceCharacterTwo(str) {
  const newStr = str.split('');
  for (let i = 0; i < str.length; i++) {
    newStr[i] = String.fromCharCode(str.charCodeAt(i) + 1);
  }
  return newStr.join('').replace(/{/, 'a');
}

replaceCharacterTwo('abcdz');

// 74. Write a JavaScript code to divide a given array of positive integers into two parts.
// First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.

function divideArray(arr) {
  const rightArr = [];
  const leftArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      rightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }
  return ` RIGHT - ${rightArr}, LEFT - ${leftArr}`;
}

divideArray([1, 2, 3, 4, 5, 6]);

// 75. Write a JavaScript program to check whether two arrays of integers of same length are similar or not.
// The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.

function similarArr(arrOne, arrTwo) {
  let result = 0;
  const maxLength = Math.max(arrOne.length, arrTwo.length);
  for (let i = 0; i < arrOne.length; i++) {
    for (let k = 0; k < arrTwo.length; k++) {
      if (arrOne[i] === arrTwo[k]) result++;
    }
  }
  if (result === maxLength || result === maxLength - 1) return 'arr is correct';
  return 'arr is incorrect';
}

similarArr([1, 2, 4], [1, 4, 6]);

// 76.  Write a JavaScript program to check whether two given integers are similar or not, if a given divisor divides both integers and it does not divide either.

function similarNums(a, b, divisor) {
  return ((a % divisor === 0 && b % divisor === 0) || (a % divisor !== 0 && b % divisor !== 0));
}

similarNums(20, 25, 5);

// 77. Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression

function replaceExpr(x, y, z) {
  let expr = '';
  if ((x * y) === z) expr = '*';
  if ((x / y).toFixed(2) === (z.toFixed(2))) expr = '/';
  if ((x + y) === z) expr = '+';
  if ((x - y) === z) expr = '-';
  if (expr === '') return 'incorrect data';
  return `${x} ${expr} ${y} = ${z}`;
}

replaceExpr(10, 30, 300);

// or
function replaceExprTwo(x, y, z) {
  return x + y === z || x * y === z || x / y === z || x - y === z;
}

replaceExprTwo(10, 30, 300);

// 78. Write a JavaScript program to find the kth greatest element of a given array of integers

function findBiggestElem(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result) result = arr[i];
  }
  return result;
}

findBiggestElem([1, 4, 777, 44, 40]);

// 79. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers.

// !!! very bad decision !!!
// found sum of ordinal elements

function maxConsecutiveNum(arr) {
  const result = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 === arr[i + 1]) result.add(arr[i]).add(arr[i] + 1);
  }
  return [...result].reduce((pr, cu) => pr + cu, 0);
}

maxConsecutiveNum([1, 20, 21, 22, 34]);

// 80. Write a JavaScript program to find the maximal difference among all possible pairs of a given array of integers

function findMaxDifferenceNum(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      result.push(Math.abs(arr[i] - arr[k]));
    }
  }
  const max = Math.max(...result);
  return max;
}
findMaxDifferenceNum([1, 2, 3, 8, 9]);

// or

function findMaxDifferenceNumTwo(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return Math.abs(max - min);
}

findMaxDifferenceNumTwo([1, 2, 3, 8, 9]);

// 81. Write a JavaScript program to find the number which appears most in a given array of integers

function moreAppearsNum(arr) {
  const elems = [];
  arr.forEach((item) => {
    elems.push(arr.filter((itemTwo) => itemTwo === item));
  });
  const result = elems.map((item) => item.length);
  return Math.max(...result);
}

moreAppearsNum([1, 2, 3, 3, 3, 2, 2]);

// or

function moreAppearsNumTwo(arr) {
  const elems = {};
  arr.forEach((item) => {
    elems[item] = (elems[item] || 0) + 1;
  });
  return elems;
}

moreAppearsNumTwo([1, 2, 3, 3, 3, 2, 2]);

// 82. Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.

function replaceNum(arr, a, num) {
  return arr.map((item) => { if (item === a) item = num; return item; });
}

replaceNum([1, 2, 4, 6, 3, 6], 6, 10);

// 83. Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers.

function sumNums(num) {
  const newarr = [];
  for (let i = 0; i < num.length - 1; i++) {
    newarr.push(Math.abs(num[i + 1] - num[i]));
  }
  return newarr.reduce((pr, cr) => pr + cr);
}

sumNums([1, 2, 3, 2, -5]);

// 84.  Write a JavaScript program to find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it.

function findPalindrome(str) {
  const newStr = str + str.split('').reverse().join('').slice(1);
  return newStr;
}

findPalindrome('JavaSctipt');

// 85. Write a JavaScript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case

function swithLowerAndUpper(str) {
  let low = 0;
  let upper = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      ++upper;
    } else ++low;
  }
  if (low > upper) return str.toLowerCase();
  return str.toUpperCase();
}

swithLowerAndUpper('JavaScript');

// 86. Write a JavaScript program to check whether it is possible to rearrange characters of a given string in such way that it will become equal to another given string.

function rearrangeCharacters(strOne, strTwo) {
  const first = strOne.split('');
  const second = strTwo.split('');
  let result = true;

  first.sort();
  second.sort();

  for (let i = 0; i < Math.max(first.length, second.length); i++) {
    if (first[i] !== second[i]) result = false;
  }
  return result;
}

rearrangeCharacters('abc', 'cab');

// the best solution

function rearrangeCharactersTwo(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

rearrangeCharactersTwo('abc', 'cab');

// 87. Write a JavaScript program to check whether there is at least one element which occurs in two given sorted arrays of integers.

function checkTowArr(arrOne, arrTwo) {
  for (let i = 0; i < arrOne.length; i++) {
    for (let k = 0; k < arrTwo.length; k++) {
      if (arrOne[i] === arrTwo[k]) return true;
    }
  }
  return false;
}

checkTowArr([1, 4, 3], [5, 6, 4]);
// or

// 88. Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.

function checkLatinLetters(str) {
  const result = (/^[a-z].*$/i).test(str);
  const result1 = (/^.*[A-Z][A-Z].*$/).test(str);
  const result2 = (/^.*[a-z][a-z].*$/).test(str);
  if (result && !result1 && !result2) {
    return true;
  }
  return false;
}

checkLatinLetters('ExaMplE');

// 89. Write a JavaScript program to find the number of inversions of a given array of integers

function inversionsArray(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length - 1 - i; k++) {
      if (arr[k + 1] < arr[k]) {
        const expr = arr[k + 1];
        arr[k + 1] = arr[k];
        arr[k] = expr;
        ++result;
      }
    }
  }
  return result;
}

inversionsArray([1, 4, 56, 4, 3, 2]);

// 90. Write a JavaScript program to find the maximal number from a given positive integer by deleting exactly one digit of the given number.

function findExactNumber(num) {
  const newNum = num.toString().split('').map((item) => +item);
  const minNum = Math.min(...newNum);
  const minIndex = newNum.indexOf(minNum);
  newNum.splice(minIndex, 1);
  return +newNum.join('');
}

findExactNumber(3425);

// 91.  Write a JavaScript program to find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer.

function findTwoCloseElem(arr, num) {
  let result = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      const findDifference = [Math.abs(arr[i] - arr[k])];
      if (findDifference === num) return `${arr[i]} и ${arr[k]}`;
      if (findDifference < num && findDifference > result) {
        result = findDifference;
        newArr = [arr[i], arr[k]];
      }
    }
  }
  return newArr;
}

findTwoCloseElem([12, 10, 33, 44], 40);
