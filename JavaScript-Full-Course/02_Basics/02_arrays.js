const marvel_heros =["Thor","Ironman","Spideman"]
const DC_heros = ["Superman","Flash","Batman"]

// marvel_heros.push(DC_heros)
// console.log(marvel_heros); 

// const All_heros = marvel_heros.concat(DC_heros)
// console.log(All_heros);

// const All_heros = [...marvel_heros, ...DC_heros]
// console.log(All_heros);

const nestedArr =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const flatArr = nestedArr.flat(Infinity)
// console.log(flatArr); 

// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh")); //convert the sting into array of characters.

// console.log(Array.from({name:"Hitesh"})); //give you an empty Array

//Array from the variable
let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3));