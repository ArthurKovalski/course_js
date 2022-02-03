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
console.log(student['dumb key']);
console.log(student.score);
console.log(student['1'])

// const array = [1,'string',{student},['1',2]];
// const value = array[1];
// console.log(value);
const functionA = (a) => a;
student[functionA(12)] = 12
student.newKey = 'newValue';
console.log(student)