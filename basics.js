var button = document.querySelector('button');

button.onclick = function() {
  alert("Hello, World!");
}

//Weather Conversion App:
let kelvin = 0; //Declared a variable for Kelvin (K).
let celsius = kelvin-=273;//Declared a new variable called celsius. Equal to whatever kelvin is, -273.
let fahrenheit = celsius*(9/5)+32;//New Variable Fahrenheit is celsius * 9/5+32
fahrenheit = Math.floor(celsius*(9/5)+32);//Rounding it down
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

//Converting from celcius to Newton:
let Newton = celsius*(33/100);
Newton = Math.floor(celsius*(33/100));
console.log(`The temperature is ${Newton} degrees Newton.`)

//Dog Age Calculation App:
let myAge = 19; //variable for my age.
var earlyYears = 2;//variable called early years.
earlyYears *=10.5;
let laterYears = myAge-2; //new variable laterYears = myage -2
laterYears*=4;
myAgeInDogYears = earlyYears + laterYears;
myName='Kwasi Asante'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years
which is ${myAgeInDogYears} in Dog Years.`)


//Magic Eight Ball:
let userName = 'Aaron';
userName ? console.log(`Hello, ${userName}`) : console.log('Hello');
//The above lines of code take the user's name , and displays it in a greeting.

let userQuestion = 'Will I Fall In Love?';
userQuestion ? console.log(`${userName}, You're Asking: ${userQuestion}`) : console.log("You didn't ask a Question.");
//Takes user input and asks it in a question.

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
// A variable for a random number, and an outcome in a string form.

//Switch statements;
switch(randomNumber){
  case 0:
   eightBall = 'It is certain';
   break;
   case 1:
    eightBall = 'It is decidedly so';
    break;
    case 2:
      eightBall = 'Reply hazy try again';
      break;
      case 3:
        eightBall = 'Cannot predict now';
        break;
        case 4:
          eightBall = 'Do not count on it';
          break;
          case 5:
            eightBall = 'My sources say no';
            break;
            case 6:
              eightBall = 'Outlook not so good';
              break;
              case 7:
                eightBall = 'Signs point to yes';
                break;

                default:
                  eightBall = 'hmmm.. try again';
                  break;
}

console.log(eightBall);

//Race Day :
let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 19;

if(runnerAge >=18 && registeredEarly == true){
  raceNumber+=1000;
}

if(runnerAge>=18 && registeredEarly== true){
      console.log("You will race at 9:30AM. Here's your race number:" + raceNumber);
}
else if(runnerAge>=18 && registeredEarly == false){
  console.log("You will race at 11:30AM. Here's your race number:" + raceNumber);
}

if(runnerAge<18){
  console.log("You will race at 12:30PM.");
}

//Compound Interest:

//State Variable
let amount;
let principalValue = 9990;
let rate = 5;
let nOC = 3;
let time = 5;

amount = principalValue *(Math.pow(1+rate/nOC, nOC*time))
console.log(amount);

if(principalValue>= 1000){
    eiYouHaveMoney();
}
function eiYouHaveMoney(){
  console.log("EI YOU HAVE MONEY O!");
}

//Area of A Circle
const pi = 3.14;

function calculateArea(radius){
  let area = pi*(radius*radius);
  return area;
}

console.log(calculateArea(10));

//Voulme of A Sphere:

function calculateVolume(radius){
  let volume = 4/3 *(Math.pow(pi*radius),3);
  return volume;
}

console.log(calculateVolume(20));