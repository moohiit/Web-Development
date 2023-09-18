
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
//start video at 5:55:55
