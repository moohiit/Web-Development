//1.Ways to print in javascript
// console.log("Hello World");
// alert("Thank You");
document.write("This is written using document.write().")

// 2. javascript console API
// console.log("Test Text");
// console.error("This is sample error.");
// console.warn("This is sample warning.");

// 3. JavaScript Variables

// var num1=100;
// var num2=200;
// console.log(num1+num2);

// 4. Datatypes in javascript

// NUll
var x=null;

// number
var num1=23;
var num2=35.23;

//Bigint
var bint1=BigInt(7895678);
var bint2=BigInt(786545878);

//Boolean
var bol1=true;
var bol2=false;

// String
var str1="This is a string.";
var str2="This is also a string.";

//Symbol
var sym1= "Heat and Cold";
var sym2= 789;

//Undefined
var und;
console.log(und);
//// nn bb ss u - Primitives in Js
let a = null; //null
let b = 345;  //number
let c = true; // boolean: can also be false
let d = BigInt("567") + BigInt("3"); //BigInt
let e = "Harry"; //String
let f = Symbol("I am a nice symbol"); //Symbol
let g; //Undefined
console.log(a, b, c , d, e, f, g)
console.log(typeof c);

// Non Primitive Data Type - Objects in Js
const item = {
  "Harry": true,
  "Shubh": false,
  "Lovish": 67,
  "Rohan": undefined
}
console.log(item["Shubh"])

//Operators in JavaScript
// Arithmetic Operators :+ - * /
// Assignment Operators : =,+=,-=,*=,/=
// Comparision Operators: >,<,==,>=,<=
// Logical Operators    : &&(AND),||(OR),!(NOT)
