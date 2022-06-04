// Tasks
// 1. Getting button for printing 
function createBtnToPrint() {
    let body = document.querySelector('body')
    let btn = document.createElement('button');
  
    btn.innerHTML = 'Print'
  
    btn.onclick = () => {
      window.print();
    }
    body.append(btn)
  }
  // createBtnToPrint() 
  // 2. Getting the current date
  
  function getTimeNow() {
    let body = document.querySelector('body');
    let div = document.createElement('div');
    
    let now = new Date(); 
    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    
    if(date < 10) {
      date = `0${date}`
    }
    if (month < 10) {
      month = `0${month}`
    }
    
    div.innerHTML = `${date}/${month}/${year}`
  
    body.append(div);
  }
  
  // getTimeNow()
  
  //3. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
  
  function findAreaTriangle(a,b,c) { 
     let perimeter = (a + b + c) / 2;
    
     return Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c))
  }
  
  // console.log(findAreaTriangle(5,6,7))
  
  //4.Rotate a string from left to right
  
  let target = document.querySelector('#target');
  let string = [...'w3resource'];
  
  setInterval(() => {
    let popped = string.pop();
    target.textContent = string.join('');
    string.unshift(popped);
  }, 1000);
    
  //5. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 
    function showFullDate(month, year) {
     return new Date(year,month, 0).getDate();
     }
    function  showDateInYear(year) {
      let amountDate = 0;
      for(let i = 1; i <= 12; i++) {
        amountDate += showFullDate(i, year)
      }
      if(amountDate == 365) {
        alert('Year isnt in the Gregorian calendar.')
        return amountDate
      } else {
        alert('Year`s in the Gregorian calendar.')
        return amountDate
      }
    }
    // showDateInYear(2000) 
  
  //6. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
  
  function findDate(start, end) {
    for(start; start <= end; start++){
      let getDate = new Date(start, 0, 1);
      if(getDate.getDay() === 0) {
        console.log(`1st January is in ${start}`)
      }
    }
  }
  
  findDate(2000, 2050) 
  
  //7.  Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". 
  
  //We can change these expressions 
  let start = 1;
  let end = 10;
  
  function randomInteger(min, max) {
    let answerToUser = +prompt('Guess the number between 1 and 10 inclusive');
    let randomNum = Math.floor(Math.random() * (max - min) + min)
    if(answerToUser === randomNum)console.log('You`re right'); else console.log(`No, that's not correct, num was ${randomNum}`);
    }
  randomInteger(start, end)
  
  //8.Write a JavaScript program to calculate days left until next Christmas. 
  function calcDaystillChristms() {
    let nowDate = new Date();
    let christmasDate = new Date(year, 11, 31);
    let difference = christmasDate - nowDate;
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    console.log(days)
    }
  
  //9.  Write a JavaScript program to calculate multiplication and division of two numbers (input from user). 
  let firstNumber = document.getElementById('firstNumber')
  let secondNumber = document.getElementById('secondNumber')
  let mult = document.getElementById('multiplication')
  
  function multi() {
      mult.innerHTML = firstNumber.value * secondNumber.value 
  }
  
  function divide() {
    mult.innerHTML = firstNumber.value / secondNumber.value 
  }
  
  //10.  Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
  // [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
  
  let celsius = 0;
  let fahrenheit = 0;
  
  function temparature(n) {
    let newExrp = n.toString().split('');
    if(newExrp.includes('C')) { 
      let newN = parseInt(newExrp.join(''));
      return fahrenheit = (9 * newN + (32 * 5)) / 5
    } else if (newExrp.includes('F')) {
      let newN = parseInt(newExrp.join(''));
      return celsius = (5 *(newN - 32))/9
    }
  }

  //11. Write a JavaScript program to get the website URL (loading page).

  //in this case there is more options to manage it
  function gettingUrl() { 
    return new URL(document.URL);
  }

