const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof balance.toString());
// console.log(balance.toFixed(2));

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(5))

const hundreds =1000000
// console.log(hundreds.toLocaleString()); //By default international standards 
// console.log(hundreds.toLocaleString('en-IN')); //In Indian standards 

//+++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5)) //give positive 5
// console.log(Math.round(4.6)); // give 5
// console.log(Math.floor(4.99)); // give 4
// console.log(Math.ceil(4.001)); // give 5
// console.log(Math.min(4,5,8,2,1,9)); //minimum value
// console.log(Math.max(4,5,8,2,1,9)); //maximum value

// console.log(Math.random()); // value between 0-1
// console.log(Math.floor(Math.random()*10)); //value 0-9
// console.log(Math.random()*10 + 1); //value between 1-10

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max -min +1)) +min); //value betwen 10-20