// Lesson number ONE
// ________________________



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



// // lesson NUMBER TWO
// ___________________________

// document.querySelector('.input__in');// input

// let inputIn = document.querySelector('.input__in');

// let button = document.querySelector('button');//button

// let div = document.querySelector('.out');

// button.onclick = function () {
// //when will push button
// console.log('Hey, everything is good!');
// // console.log(inputIn.value); //value is what inside input
// let b = +inputIn.value;//+ turns into a number!!!!!!
// console.log(b + 10);//'55' + 10 = 5510
// div.innerHTML = b;
// inputIn.value = ''; // clean input after action
// }


//Lesson NUMBER THREE
// _____________________

// let a = 6;

// if(a == 9){
//     console.log('Yes')
// }else{
//     console.log('No')
// }

// const button = document.querySelector('button');
// const input = document.querySelector('.age');


// () => array functions
// button.onclick = () => {
//     let num = +input.value;
//     if (num >= 16 && num < 60) {
//         console.log('welcome');
//     }else if(num > 60){
//         console.log('Are you sure?')
//     }
//      else {
//         console.log('stop!');
//     }

//     switch (num) {
//         case 14:
//             console.log('You are too young!');
//             break;
//             case 23:
//                 console.log('You are good!');
//                 break;
//                 case 45:
//                     console.log('You need to rush!');
//                     break;
//                     case 57:
//                         console.log('let\'go');
//                         break;
//                         default:
//                             console.log('Ok')
//     }

// }


// let b = 8;

// console.log(b < 7 || b > 9)


document.querySelector('.button__one').onclick = () =>{
console.log(document.querySelector('#one').value);
//style
}

document.querySelector('#one').oninput = () =>{
    console.log(document.querySelector('#one').value);
    document.querySelector('span').innerHTML = document.querySelector('#one').value
}

document.querySelector('.button__two').onclick = () =>{
    console.log(document.querySelector('#i2').value);
    let myCheckBox = document.querySelector('#i2');
    console.log(myCheckBox.checked)
    if(myCheckBox.checked){
console.log('It was pushed')
    }else{
console.log('It was\'nt pushed')
    }
}
