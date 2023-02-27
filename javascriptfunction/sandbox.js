//function expression
/*const speak = function(){
    console.log('good day');
 };
 speak();*/


//function declaration
function greet (){
    console.log('hello there');
}



//greet();  //function call karyu
//greet();
//greet();

//argyuments & parameters

//const speak = function(name, time)
const speak = function(name='luigi', time='night')
{
    console.log(`good ${time} ${name}`);
};
speak();
speak('shaun');
//speak ('mario','morning');
