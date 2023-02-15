//while loop 

/*let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}*/

/*const names =['shaun','sujal','isha'];
let i=0;
while(i<names.length){
    console.log(names[i]);
    i++;
}*/

//do while loop
let i=2;
do{
    console.log('value of i is:',i);
    i++;
}while (i<5);

//if statment

const age=25;
if (age >20);{
console.log('you are over 20 years old');
}

const ninjas=['suman','ramu','tina','maheta'];
if (ninjas.length>3){
    console.log("that's a lot of ninjas");
}

//else if statment
//logical operator OR || and  AND &&
 const password = 'password1234';
if (password.length>=12 && password.includes('@')){
    console.log('that password is might strong');
}
 else if (password.length>=8 || password.includes('@') && password.length>=5){
    console.log('that password is strong enough!');
 }
 else{
    console.log('password is not strong enough');
 }
