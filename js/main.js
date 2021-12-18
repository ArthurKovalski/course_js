// document.querySelector('button').onclick = ()=>{
// console.log(document.querySelector('#one') .value);


// document.querySelector('button').style.backgroundColor =  
// document.querySelector('#one') .value;
// }

// document.querySelector('#one').oninput = () => {
//     console.log(document.querySelector('#one') .value);
//     document.querySelector('span').innerHTML = document.querySelector('#one') .value;

// }

// document.querySelector('.btn1').onclick = () => {
// console.log(document.querySelector('#i2') .value);
// let myCheckBox = document.querySelector('#i2');

// console.log(myCheckBox.checked);
//      if(myCheckBox.checked){
// console.log('push')
//      }else{
// console.log('Not push')
//      }
// }

// document.querySelector('.btn2').onclick = (event) => {
//     event.preventDefault()
// // let text = document.querySelector('#two');
// // console.log(text.value);
// // text.value = 'one'
// let form = document.querySelector('form');
// console.log(form);
// console.log(form.elements.two.value);
// console.log(form.elements.three.value);

// }


// Loops
let div = document.querySelectorAll('.one')

console.log(div)
// div.style.background = 'red'

for(let i = 0; i < div.length; i++){
     console.log(div[i]);
     div[i].style.background = 'red';
     
div[i].onclick = two;
}

function two () {
     console.log('work?')
}

let b = document.getElementsByClassName('one');
let c = document.getElementsByTagName('div');
console.log(b);
console.log(c);

for(i = 0; i < b.length; i++){
     b[i].style.border = '3px solid black'
}






