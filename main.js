var x = 5;
var y = 6;
var z = x + y;
console .log(z)

let student1="tolu"
let student2="bunmi"
console.log(student1, student2)


let carName ='volvo';
document.getElementById('demo').innerHTML= carName;
// // WRITE A PROGRAM THAT AS ASK A USER OF HIS OR HER NAME, 
// AGE , ADDRESS AND PHONE NUMBER THEN UR  PROGRAM TO DISPLAY D 
// VALUES ON UR HTML PAGE 
 
var question = prompt('Enter your Name');
var age =prompt('Enter your age');
var address =prompt('Enter your home address bossteeh');
var phoneNumber =prompt('Enter your phoneNumber bossteeh');
document.getElementById('demo').innerHTML= question;
document.getElementById('age').innerHTML=age;

document.getElementById('address').innerHTML=address;
document.getElementById('phoneNumber').innerHTML= phoneNumber;

let myname = "simeon"
alert ('welcome to ATC' + question)
// write a program to calculate the number 
// of seconds in a week and display ur answer on d html webpage.
var seconds= 60;
var minute=60;
var p =24;
var d =7;
var hour= minute * seconds;
var day = hour * p;
var week = day *d;
console.log(week)
document.getElementById('week').innerHTML= week;