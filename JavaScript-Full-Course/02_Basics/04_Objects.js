
//singlton object
// const tinderUser = new Object() // sigleton object
// console.log(tinderUser);

// const tinderUser1 = {}
// console.log(tinderUser1); //normal object
// tinderUser1.id = "1212"
// tinderUser1.name = "Sam"
// tinderUser1.islogged = true
// console.log("user 1", tinderUser1)

const regularUser = {
  Department: "Software",
  Users: {
    user1: {
      firstName: "sam",
      lastName: "kumar"
    },
    user2: {
        firstName:"ramu",
        lastName:"saha"
    }
  }
};

//how to access above Users

//full Object
// console.log(regularUser);
// // users of the object
// console.log(regularUser.Users);
// // User1 of the object
// console.log(regularUser.Users.user1);
// console.log(regularUser.Users.user1.firstName);
// console.log(regularUser.Users.user1.lastName);
// // User2 of the Object
// console.log(regularUser.Users.user2);
// console.log(regularUser.Users.user2.firstName);
// console.log(regularUser.Users.user2.lastName);


const obj1 = {
    1:"a",
    2:"b"
}
const obj2 ={
    3:'c',
    4:"d"
}

// const obj3 = { obj1, obj2};
// const obj3 = Object.assign(obj1,obj2) //way1 to merge two objects
// console.log(obj3);
// console.log(obj1); // obj1 is udated with the values of the obj2.
// console.log(obj1===obj3);
// console.log(obj2);// obj2 remains unchanged as it was passed by reference and not copied.

//way2 : spread opoerator
let newObj={...obj1,...obj2}//this will create a copy of both the objects in one go without updating any existing value or creating
console.log(newObj);
let obj4={...obj1,...obj2}//spread operator copies all properties from one object into another.
console.log("Way 2");
console.log(obj4);

const users = [
  {
    id: 1,
    email: "name1@gmail.com",
  },
  {
    id: 2,
    email: "name2@gmail.com",
  },
  {
    id: 3,
    email: "name3@gmail.com",
  },
  {
    id: 4,
    email: "name4@gmail.com",
  },
];

//how to access values of above array of abject
users[0].email; //for accessing the first user

users[1]["id"]; // for accessing second user's ID using bracket notation

const tinderUser = {};
tinderUser.id = "1212";
tinderUser.name = "Sam";
tinderUser.islogged = true;
console.log("Object:",tinderUser); //normal object

console.log("keys:",Object.keys(tinderUser));
console.log("values:", Object.values(tinderUser));
console.log("entries:",Object.entries(tinderUser));



