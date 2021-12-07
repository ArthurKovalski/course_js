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

// const bigLetter = (name) =>{
// let nameArray = name.split(' ');
// let oneName = nameArray[0];
// let twoName = nameArray[1];

// console.log(oneName.slice(0,1).toUpperCase() + '.' + twoName.slice(0,1).toUpperCase())
// }

// Objects
//  _____________________________________

let user = {
    name:'Jone',
    age: 30,
    car: 'Toyota',
    'like birds':true,
    beer: 'Corona',
    vodka: 'Stolichnaya'
}

user.name = 'Vasya'
delete user.name
console.log(user)

// // let key = 'like birds';
// // console.log(user[key])

// //  delete user.vodka;
// // user['like birds'] = false
// // user.name = 'Vasya';
// // console.log(user['like birds'])
// // console.log(user);

// //This variable to get property from object. 
// let key = prompt('What do you want to know?', ); 

// alert(user[key]);


// let fruit = prompt('What kind fruit to buy?', 'apple');

// let bag = {
// //     [fruit]: 5,
// // };

// // alert(bag.apple)

// for(let key in user){
// // console.log('women' in user);
// // console.log('name' in user);

// // console.log(key);
// console.log(user[key]);
// }


let salaries = {
    Jonh: 100,
    Vasya: 200,
    Kolya: 50,
    Sanek: 50,
}

// let sum = salaries.Jonh + salaries.Vasya + salaries.Kolya + salaries.Sanek;
// console.log(sum)

let sum = 0;
for(let key in salaries){
    sum += salaries[key]
}
console.log(sum)