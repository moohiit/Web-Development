// Singleton
// Object.create

// Object literals

const mysym =Symbol("symbolkey")

const JsUser = {
    name: 'John', // property name and value
    "Full Name": "Hitesh Chaudhary",
    age: 18,
    [mysym]:"symbol1",
    location: "jaipur",
    email: "hitesh@gmail.com",
    isLogged: false,
    lastLoginDays: ["Monday","Saturday"]
}

//ways to access the elements of the Object
// console.log(JsUser);
// console.log(JsUser.name); //way1
// console.log(JsUser["Full Name"]); //way2
// console.log(`Name : ${JsUser["name"]} Age:${JsUser['age']}`); // way3
// console.log(JsUser[mysym]);//way4: to access the symbol type key's value  

// console.log(typeof JsUser[mysym]);

//how to update oject's element value
JsUser.email = "newemail@gmail.com"
// console.log("Updated Email:",JsUser.email);

//freeze the object values no updation is possible.
// Object.freeze(JsUser);
// JsUser.name = "Rohan" //trying to update the freezed object
// console.log('After Freeze:',JsUser);//no change in output

JsUser.greeting = function(){
    console.log(`${this.name}, how are you?`);
}

console.log(JsUser.greeting());
