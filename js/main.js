
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
console.log(array,array2)