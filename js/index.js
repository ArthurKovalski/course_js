
// Lesson number ONE



// let a = 'Nikita';
// let b = '37';
// let z7 = 'Libra';
// let c = ['Nikita', 37 , 'Libra'];
// let d = [];
// console.log(c[0]);
// console.log(c[1]);
// console.log(c[5]);
// console.log(c);
// console.log(c.length);
// console.log('Hello World');
// console.info('Hello Arthur')

// document.getElementById('out').innerHTML = 'Hello';
// document.getElementById('out').innerHTML = '2021';
// document.getElementById('out').innerHTML = '<b>2021</b>'; 
// document.querySelector('#one').innerHTML = '989898989';
// document.querySelector('.link').innerHTML = '45454545454';

// let  b;
// let a = document.querySelector('#one');
// let c;
// c = document.querySelector('.link');

// a.innerHTML = 'Hello man! You are rock!';
// c.innerHTML = 'I got it'



// lesson NUMBER TWO

document.querySelector('.input__in');// input

let inputIn = document.querySelector('.input__in');

let button = document.querySelector('button');//button

let div = document.querySelector('.out');

button.onclick = function () {
//when will push button
console.log('Hey, everything is good!');
// console.log(inputIn.value); //value is what inside input
let b = +inputIn.value;//+ turns into a number!!!!!!
console.log(b + 10);//'55' + 10 = 5510
div.innerHTML = b;
inputIn.value = ''; // clean input after action
}