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
whic is ${myAgeInDogYears} in Dog Years.`)
