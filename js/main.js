// Functions

// function Sum (a,b){
//     // console.log(a,b);
//  let res =a + b;
//  console.log(res);
//  return res
// }

// let Div2 = function(){
//     console.log('Hello, How are you doing?')
// }

// let res = Sum(12, 14) - Sum(3,6);
// console.log(res)

const bigLetter = (name) =>{
let nameArray = name.split(' ');
let oneName = nameArray[0];
let twoName = nameArray[1];

console.log(oneName.slice(0,1).toUpperCase() + '.' + twoName.slice(0,1).toUpperCase())
}

bigLetter('Jone Malcowich')