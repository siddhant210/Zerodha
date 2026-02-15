// // WAYS TO PRINT IN JS
// // console.log("Hello World"); // for printing in console
// // document.write("Hello World"); // for printing in webpage
// // alert("Hello World"); // for printing in alert box


// // console API
// // console.warn("This is a warning"); // for printing warning in console
// // console.error("This is an error"); // for printing error in console

// // // VARIABLES IN JS
// // // what are variables? - containers to store data values
// //  var number1 = 34;
// //  var number2 = 56;
// //  console.log(number1 + number2);


// // // DATA TYPES IN JS

// // 1. number
// // var num1 =34;
// // var num2 =56;
// // console.log(num1 + num2);

// //2. String
// // var str1 = "Hello";
// // var str2 = "sid";
// // console.log(str1 + str2);

// //3. Objects
// //  var marks = {
// //         ravi: 34,  
// //         shubham: 78,
// //         harry: 99.977
// //         }
// //     console.log(marks)  

// //4. Booleans
// // var a = true;
// // var b = false;   
// // console.log(a, b)

// // 5. undefined
// // var und = undefined;
// // console.log(und) 

// // 6. null
// // var n = null;
// // console.log(n) 
 
// // At a very high level, there are two types of data types in JS
// // 1. Primitive data types: undefined, null, number, string, boolean, symbol
// // 2. Reference data types: Arrays and Objects

// // var arr = [1, 2, "babbar", 4, 5]

// // // OPERATORS IN JS

// // // Arithmetic Operators

// // var a = 100;
// // var b = 10;
// // console.log("The value of a + b is", a + b);
// // console.log("The value of a - b is", a - b);
// // console.log("The value of a * b is", a * b);
// // console.log("The value of a / b is", a / b);

// // // Assignment Operators
// // var c = b;
// // console.log(c);

// // // Comparison Operators
// // var x = 34;
// // var y = 34;
// // console.log(x == y);

// // // Logical Operators

// //1. AND Operator
// // console.log(true && true);
// // console.log(true && false);
// // console.log(false && true);
// // console.log(false && false);

//  //2. OR Operator
// // console.log(true || true);
// // console.log(true || false);
// // console.log(false || true);
// // console.log(false || false);

// // 3. NOT Operator
// // console.log(!true);
// // console.log(!false);

// // FUNCTIONS IN JS

// // function avg (a,b) {
// //     c = (a+b)/2;
// //     return c;
// // }

// // c1 = avg(4,6);
// // c2 = avg(14,16);
// // console.log(c1, c2);

// // CONDITIONAL STATEMENTS IN JS
// var age = 18;
// ;if (age >=18){
//     console.log('You can vote');
// }
// else{
//     console.log('You cannot vote');
// }
 
// var age = 8;

// if (age <18 ){
//     console.log('You cannot drink rasna water');
// }
// else if (age == 18){
//     console.log('you can drink rasna water');
// }
// else if (age > 18){
//     console.log('you can drink rasna water');
// }

//  console.log('End of program');

// arr = [1, 2, 3, 4, 5];

// arr.forEach(function(element){
//     console.log(element);
// })

//ARRAYS IN JS

// var myArr = ["Fan", "Camera", 34, null, true];
// // ARRAys METHODS

// console.log(myArr.length);

// myArr.pop();
// console.log(myArr);

// myArr.push("sid");
// console.log(myArr);

// myArr.shift();
// console.log(myArr);

// myArr.unshift("sid");
// console.log(myArr);

// myArr.toString();
// console.log(myArr);

// myArr.sort();
// console.log(myArr);


// // STRING METHODS IN JS

// mystring = "Hello World";
// console.log(mystring.length);
// console.log(mystring.indexOf('o'));
// console.log(mystring.lastIndexOf('o'));
// console.log(mystring.slice(0, 5));
// console.log(mystring.replace("World", "Sid"));

// // DATE IN JS
// let myDate = new Date()
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());


// DOM MANIPULATION IN JS
 
//settime out and setinterval in JS

// function logkaro(){
//     console.log("I am your log");

// }
// setInterval(logkaro, 2000);

//javascript local storage

// localStorage.setItem('name', 'sid');
// localStorage.setItem('name2', 'harry');  

// console.log(localStorage.getItem('name'));
// console.log(localStorage.getItem('name2'));

// //javascript JSON
// obj = {name: "sid", length: 1, a: {this: 'that'}}
// jso = JSON.stringify(obj);
// console.log(jso);
//     parsed = JSON.parse(`{"name":"sid","length":1,"a":{"this":"that"}}`);
//     console.log(parsed);

// //MAP FUNCTION IN JS
//  let arr = [1, 2, 3, 4, 5];
//     let newArr = arr.map(function(element){
//         return element * 2;
//     })
//     console.log(newArr);

// //filter function in JS
// let nums = [1,2,3,4];

// let result = nums.filter(n => n > 2);
// // [3,4]

//