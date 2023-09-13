
// Array

const myarr1 = [0, 1, 2,3,4,5] //type1 declaration
const myarr2 = new Array(1,2,3,4,5)
// console.log(myarr1);
// console.log(myarr2);// print the full Array

// console.log(myarr2[3]); //print the single element of the Array

// Array Methods
// console.log(myarr1.length); //length of the array

// myarr1.push(6)
// console.log(myarr1);

// myarr1.push(7)
// console.log(myarr1);

// myarr1.pop()
// console.log(myarr1);

myarr1.unshift(9) //place the new value to start of the array
// console.log(myarr1);

myarr1.shift()// remove a element from the start
// console.log(myarr1);

// console.log(myarr1.includes(5));
// console.log(myarr1.includes(9));

// console.log(myarr1.indexOf(3));

const newArr = myarr1.join() //it will change the array element to string 
// console.log(myarr1);
// console.log(newArr);
// console.log(typeof newArr);

// Slice Splice
console.log("A",myarr1); //Array

//slice
const slice1 = myarr1.slice(1, 4); 
console.log("B", myarr1);
console.log(slice1);

//splice : will change the original array too.
const slice2 = myarr1.splice(2, 5);
console.log("C", myarr1);
console.log(slice2);
