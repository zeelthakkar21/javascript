//primitive values

let scoreOne=50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);

scoreOne=100;
console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);



//refrence values

const userOne= {name: 'zeel', age:26};
const userTwo =userOne;
console.log(userOne, userTwo);
userOne.age=30;
console.log(userOne, userTwo);


