
//Promise type-1
const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //DB calls, cryptography, network
    
    setTimeout(()=>{
        console.log('Promise 1');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("promise1 is consumed")
})


//Promise type-2
new Promise(function(resolve, reject){
    // do some other work here...
    setTimeout(function(){
        console.log("Promise 2");
        resolve();
    },1000);
}).then(function(){ 
    console.log("promise2 is consumed");
})


//Promise type-3
const promisethree = new Promise(function(resolve,reject){
    // do something else ...
    setTimeout(function(){
        console.log("Promise3");
        resolve({userName: "Mohit Patel", email: "Patel@gmail.com"})
    },1000);
})

promisethree.then(function(user){
    console.log(`User Name: ${user.userName} and Email Id :${user.email}`)
})


//Promise type-4
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({userName:"Mohit Patel",password:"1243"}) 
        }else{
            reject("Error: somthing went wrong")
        }
    }, 1000);
})

promiseFour.then((user) =>{
    console.log(user);
    return user.userName
}).then((userName) => {
    console.log(userName);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise4 is either resolved or rejected");
})

//Promise type-5
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({userName:"Arun Patel",email:"arun@gmail.com"})
        }else{
            reject("Error: Js went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log("Error:",error);
    }
}
consumePromiseFive();



// //Getting response from API : 
// //one way

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error:",error);
//     }
// };

// getAllUsers();

//second way:
fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('Error:',error);
})