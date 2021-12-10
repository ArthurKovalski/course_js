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

// let user = {
//     name:'Jone',
//     age: 30,
//     car: 'Toyota',
//     'like birds':true,
//     beer: 'Corona',
//     vodka: 'Stolichnaya'
// }

// user.name = 'Vasya'
// delete user.name
// console.log(user)

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


// let salaries = {
//     Jonh: 100,
//     Vasya: 200,
//     Kolya: 50,
//     Sanek: 50,
// }

// // let sum = salaries.Jonh + salaries.Vasya + salaries.Kolya + salaries.Sanek;
// // console.log(sum)

// let sum = 0;
// for(let key in salaries){
//     sum += salaries[key]
// }
// console.log(sum)



// let menu = {
//     width: 600,
//     height: 400,
//     amount: 40,
//     title: 'property',
// }

// for(let key in menu){
// if(typeof key == 'number'){
//     key * 2;
// }
// }
//     console.log(menu)
    

// let user = {
//     name: 'Vasya',

// }
    
// let admin = user;

// admin.name = 'Petr'

// let a = {
//     name: 'Petr'
// }


// console.log(user)
// console.log(admin === user === a);


// copy object
let user = {
    name:'Artur',
car:false,
age:43,
wife: true,
}

let clone = {};          

for(let key in user){
    clone[key] = user[key]
}

clone.name = 'Artur is web-developer'
console.log(clone)
//copy object

// method assign

let cat = {
    eyes: 'Blue',
    wool_color:' black',
    character: 'Angry',
}

let dog = {
    eyes: 'broun',
    color: 'ginger',
    age: 3,
}

let animals = {

}

console.log(Object.assign(animals, cat , dog));

console.log(animals);


// ------------------------------------------------------


let women = {
arms: 2,
tits: true,
legs:2,
brain:{
fuck: 'brain',
fuck:'chocha',
fuck: 'ass'
}
}

let clone2 = Object.assign({}, women);

console.log( women.brain == clone2.brain)

// ------------------------------------------------------------------

let a3 = {
    number:533,
    str:'Hello man',
    bool: true,
}


a3.husban = 'man'

console.log(a3)














