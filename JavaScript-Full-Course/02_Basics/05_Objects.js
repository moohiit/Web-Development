const course ={
    courseName:"JavScript",
    price:"999",
    courseInstructor:"Hitesh"
}

//usual way of accessing the object's items
// console.log(course.courseName);
// console.log(course.price);
// console.log(course.courseInstructor);


// *** Object destructuring ***
//new format of the accessing the object's items
// const {courseInstructor} = course; //way1
// console.log(courseInstructor);
// const {courseInstructor:instructor} = course; //way2
// console.log(instructor);
// const {courseName} = course;
// console.log(courseName);
// const {price} = course;
// console.log(price);


//new way to create a object
// const navbar = () => {
// }
// navbar(company = "Oswal" );
// console.log("Company name is : ", company)
// console.log(navbar);


// *** JSON ***

// API format1:
// syntax: {
//     "name":"Hitesh",
//     "Instructor":"Hitesh Choudhary",
//     "price":"Free"
// }

// API Format2
// Syntax: [
//     {},
//     {},
//     {}
// ]

