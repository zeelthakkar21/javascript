const name ='shaun';

//function

const greet = () => 'hello';
let resultOne = greet();
console.log(resultOne);

//method

let resultTwo = name.toUpperCase();
console.log(resultTwo);

//callback & foreach
const myFunc = (callbackFunc)=>{
    let value=50;
    callbackFunc(value);
};
myFunc(value=>{
    console.log(value);
});

/*let people= ['mario','super','ryu'];

const logPerson = (person,index)=>
{
    console.log(`${index}- hello ${person}`);

};
people.forEach(logPerson);*/

/*people.forEach((person,index)=>{
    console.log(index,person);
});*/

//get a refrence to the ul

const ul = document.querySelector('.people');
const people = ['mario','super','rayu','ram'];
let html =``;
people.forEach(person=>{
    //create html templete
    html +=`<li style="color:purple">${person}</li>`;

});
console.log(html);
ul.innerHTML=html;
