
// // Object
// //______________________________________________________
// const student = {
//     name:'Valera',
//     email:'valer@gmail.com',
//     score: {
//         task1:90,
//         task2:50
//     },
//     1: 10,
//     'dumb key':24,
// }
// // const keys = Object.keys(student);
// // const values = Object.values(student);
// // console.log(student['dumb key']);
// // console.log(student.score);
// // console.log(student['1']);

// // const superKey = 'My key';

// // student[superKey] = 'key'


// // const functionA = (a) => a;
// // student[functionA(12)] = 12
// // student.newKey = 'newValue';
// // // console.log(student);
// // // ____________________________________________________
// // // ARRAY


// // const array = [1,2,3,4,8,6, {}];
// // // const value = array[1];
// // for(let i = 0; i < array.length; i++){
// // // console.log(array[i])
// // }
// // // array.push(' to end of array', 57890-2);// add an element to end of array;
// // // array.pop() //delete last element of array;
// // // array.shift(); //delet first element of array;
// // // array.unshift('add to start of array');// add element to start of array;
// // // array.forEach((value, index, array) => {
// // //     console.log(value, index, array);
// // // })
// // // console.log(array)
// // // console.log(value);
// // let array2 = array.map((value, index, array) => {
// //     return value + index
// // })
// // console.log(array,array2);

// // const temp = [2,3,4,5,6,7,8,9,9];

// // let tF = temp.map(item => {
// //     console.log(item);
// //     return item * 10;
// // })
// // console.log(tF);

// // let a = [43, 54, 64, 62, 86, 34];
// // a[10] = 90;
// // let b = a.map((item, index, array) => {
// //     return index
// // });

// // console.log(b);

// // const z = [
// // {'name':'Petya',' order':12,'sum':'123.5'},
// // { 'name':'Sergey',   ' order':12,'sum':'123,5'},
// // {'name':'Devid  ',' order':12,'sum':'123. 5'},
// // {'name':'Gregor',' order':12,'sum':'123, 50   '},
// // ]

// // const zBack = z.map(item => {
// //     item.name = item.name.trim().toLocaleLowerCase();
// //     item.sum = item.sum.trim();
// //     return item
// // })

// // console.log(zBack);

// // let arrSum = [3,4,5,6,7,2,4,6,4];
// // let arrSum2 = [5,3,2,4,5,42,2,4,2];

// // let arrSum3 = arrSum.map((item,index) =>{
// //     return item + arrSum2[index]
// // });

// // arrSum3 = arrSum2.find((item, index) =>{
// //     return item > 2
// // })
// // console.log(arrSum3);

// // arrSum3 = arrSum.filter((item, index) =>{
// //     return item > 5;
// // })

// // console.log(arrSum3);

// // arrSum3 = arrSum.slice(1, 5);


// // console.log(arrSum3);


// // arrSum3 = arrSum.concat(arrSum, arrSum2);

// // console.log(arrSum3);

// // arrSum3 = arrSum.splice(0, 4, 10)

// // console.log(arrSum3);

// // console.log(arrSum);


// // const arr4 = [4,63,642,664,22,-42,4,6,11,64,-343,643,5];

// // const sortArr = arr4.sort((a, b) => b -a  );

// // console.log(sortArr);


// let address = {
//         street: 'Decature street',
//         house: 1145,
//         appartment: ['3f', '1f','2f'],
//         roomate: ['vasya', 'petya', 'jone'],
//         animals: {
//             cat: 'givi',
//             dog: 'alma',
//             snake: 'yana'
//         },
//         people: {
//             women: 37,
//             men: 23,
//         }
// }

// // const addressKey = Object.keys(address);

// // addressKey.forEach((value) =>{
// //     console.log(value)
// // });


// // const address2 = [address];

// // const addressWithTotal = address2.map((value) =>{
// //     return {
// //         ...value,
// //         totalScore: value.people.men + value.people.women,
// //     }
// // });

// // console.log(addressWithTotal)


// // const k = [
// //     {b: 'hello'},
// //     {c:'privet'},
// //     {d:'shalom'}

// // ]

// // k.forEach((value) => {
// // value + 5;
// // });

// // console.log(k);


// // spread

// // const ar = [ 4,4,6,7,3,56];
// // const br = ['s', 'g', 'e','r'];

// // // merge

// // const c = [...ar, ...br];

// // console.log(c);


// // const g = [...br];

// // console.log(g)


// let address4 = {
//     street: 'Willougby avenu',
//     house: 1393,
//     appartment: ['3f', '1f','2f'],
//     roomate: ['vasya', 'petya', 'jone'],
//     animals: {
//         cat: 'givi',
//         dog: 'alma',
//         snake: 'gera'
//     },
//     people: {
//         women: 30,
//         men: 43,
//     }
// }

// let address3 = {
//     street: '5th street',
//     house: 1490,
//     appartment: ['3f', '1f','2f'],
//     roomate: ['vasya', 'petya', 'jone'],
//     animals: {
//         cat: 'jonatan',
//         dog: 'fashic',
//         snake: 'sher'
//     },
//     people: {
//         women: 79,
//         men: 76,
//     }
// }

// const allAddress = [address, address4, address3];

// console.log(allAddress);

// allAddress.sort((a,b) => {  
//     return a.street > b.street ? 1 : -1;
// });

// console.log(allAddress);



const container = document.querySelector('.container');
container.classList.add('container__styles');

const button = document.createElement('button');
button.textContent = 'Click me';
button.classList.add('button');

[1,2].forEach((value) => {
    const button = document.createElement('button');
    button.textContent = 'Click me';
    button.classList.add('button');
    

button.addEventListener('mouseenter', () => {
button.classList.toggle('background_green')
});

button.addEventListener('mouseleave', () => {
 button.classList.toggle('add')   
});

button.addEventListener('click', () => {
 button.classList.toggle('new')  
});

document.body.append(button);
});
// const colors = ['green', 'blue', 'red', 'pink']

// const blockWithDiffrentColor = colors.map(color => {
//     const block = document.createElement('div');
//     block.classList.add('block');
//     block.style.backgroundColor = color;
//     return block;
// });
// container.append(...blockWithDiffrentColor);
// console.log(blockWithDiffrentColor, ...blockWithDiffrentColor);


// colors.forEach(color => {
//     const block = document.createElement('div');
//     block.classList.add('block');
//     block.style.backgroundColor = color;
//     container.append(block)
// })






// console.log(container.classList);

// const block  = document.createElement('div');

// block.classList.add('block');

// container.append(block)


