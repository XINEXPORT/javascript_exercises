////////////////////////////////////////////
//JS VARIABLES//

let carName = "Volvo";
console.log(carName);


let x = 50
console.log(x);


let b = 5;
let c = 10;
document.getElementById("demo").innerHTML = b + c;


let a = 5;
let y = 10;
let z = a + y;
alert(z);
console.log(z);

let firstName = "John", lastName = "Doe", age = 35;
console.log(firstName);

////////////////////////////////////////////
//JS OPERATORS//

alert(10 * 5);

alert(10 / 2);

alert(15 % 9);

//choose the correct operator

x = 10;
y = 5;
x += y;

//choose the correct operator

x = 10;
y = 5;
x *= y;

////////////////////////////////////////////
//JS DATA TYPES//

let length = 16;          // number
let lastName = "Johnson"; //string
const x = {
  firstName: "John",
  lastName: "Doe"
};                        //object

////////////////////////////////////////////

function myFunction() {
    alert("Hello World!");
  }
  myFunction();

////////////////////////////////////////////


function myFunction() {
  alert("Hello World!");
}

////////////////////////////////////////////

function myFunction() {
  return "Hello";
    }
    document.getElementById("demo").innerHTML = myFunction();

////////////////////////////////////////////

const person = {
    firstName: "John",
    lastName: "Doe"
  };
  
  alert(person.firstName );

////////////////////////////////////////////

const person = {
    firstName: "John",
    lastName: "Doe",
    country : "Norway"
    };

////////////////////////////////////////////

const person = {
    name: "John", 
    age: 50
};
alert(person.name + " is " + person.age);

////////////////////////////////////////////

let txt = "Hello World!";
let x = txt.length;
alert(x);

////////////////////////////////////////////
//JS ARRAYS//

let str1 = "Hello ";
let str2 = "World!";
alert(str1+str2);

////////////////////////////////////////////
//STRING METHODS//

//Convert the text into an UPPERCASE text:
let txt = "Hello World!";
txt = txt.toUpperCase();

//Use the slice method to return the word "bananas".//
let txt = "I can eat bananas all day";
let x = txt.slice(10, 17);


//Use the correct String method to replace the word "Hello" with the word "Welcome".//
let txt = "Hello World";
txt = txt.replace ("Hello", "Welcome");

//Convert the value of txt to lower case.//
let txt = "Hello World";
txt = txt.toLowerCase();

////////////////////////////////////////////
//JS ARRAYS//

//Get the value "Volvo" from the cars array.//
const cars = ["Saab", "Volvo", "BMW"];
let x = cars[1];

//Change the first item of cars to "Ford".//
const cars = ["Volvo", "Jeep", "Mercedes"];
cars[0]= "Ford";

//Alert the number of items in an array, using the correct Array property.//
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length)

////////////////////////////////////////////
//JS ARRAY METHODS//

//Use the correct Array method to remove the last item of the fruits array.//
const fruits = ["Banana", "Orange", "Apple"];
fruits.pop();

//Use the correct Array method to add "Kiwi" to the fruits array.//
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi");

//Use the splice() method to remove "Orange" and "Apple" from fruits.//
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.splice(1, 2);

////////////////////////////////////////////
//JS ARRAY SORT//

//Use the correct Array method to sort the fruits array alphabetically.//
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.sort();

////////////////////////////////////////////
//JS Dates//

//Create a Date object and alert the current date and time.//
const d = new Date();
alert(d);

//Use the correct Date method to extract the year (four digits) out of a date object.//
const d = new Date();
year = d.getFullYear();

//Use the correct Date method to get the month (0-11) out of a date object.//
const d = new Date();
month = d.getMonth();

//Use the correct Date method to set the year of a date object to 2020.//





