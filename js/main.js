
// Object
//______________________________________________________
const student = {
    name:'Valera',
    email:'valer@gmail.com',
    score: {
        task1:90,
        task2:50
    },
    1: 10,
    'dumb key':24,
}
const keys = Object.keys(student);
const values = Object.values(student);
// console.log(student['dumb key']);
// console.log(student.score);
// console.log(student['1']);

const superKey = 'My key';

student[superKey] = 'key'


const functionA = (a) => a;
student[functionA(12)] = 12
student.newKey = 'newValue';
// console.log(student);
// ____________________________________________________
// ARRAY


const array = [1,2,3,4,8,6, {}];
// const value = array[1];
for(let i = 0; i < array.length; i++){
// console.log(array[i])
}
// array.push(' to end of array', 57890-2);// add an element to end of array;
// array.pop() //delete last element of array;
// array.shift(); //delet first element of array;
// array.unshift('add to start of array');// add element to start of array;
// array.forEach((value, index, array) => {
//     console.log(value, index, array);
// })
// console.log(array)
// console.log(value);
let array2 = array.map((value, index, array) => {
    return value + index
})
console.log(array,array2);

const temp = [2,3,4,5,6,7,8,9,9];

let tF = temp.map(item => {
    console.log(item);
    return item * 10;
})
console.log(tF);

let a = [43, 54, 64, 62, 86, 34];
a[10] = 90;
let b = a.map((item, index, array) => {
    return index
});

console.log(b);

const z = [
{'name':'Petya',' order':12,'sum':'123.5'},
{ 'name':'Sergey',   ' order':12,'sum':'123,5'},
{'name':'Devid  ',' order':12,'sum':'123. 5'},
{'name':'Gregor',' order':12,'sum':'123, 50   '},
]

const zBack = z.map(item => {
    item.name = item.name.trim().toLocaleLowerCase();
    item.sum = item.sum.trim();
    return item
})

console.log(zBack);

let arrSum = [3,4,5,6,7,2,4,6,4];
let arrSum2 = [5,3,2,4,5,42,2,4,2];

let arrSum3 = arrSum.map((item,index) =>{
    return item + arrSum2[index]
});

arrSum3 = arrSum2.find((item, index) =>{
    return item > 2
})

arrSum3 = arrSum2.filter((item, index) =>{
    return item > 3;
})

console.log(arrSum3)