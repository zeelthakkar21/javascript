
//logical not (!)

let user=false;
if (!user){
console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);

//break and continue
const scores =[10,25,0,15,25,30,50,100];
for (let i=0;i<scores.length;i++){

    if (scores[i]===0){
        continue;
    }
    console.log('your score:',scores[i]);
    if(scores[i]===100){
        console.log('congrats,you got the top scores!');
        break;
    }
}

//switch statement
const grade='P';

switch(grade){
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got an B!');
        break;
    case 'C':
        console.log('you got an C!');
        break;
    case 'D':
        console.log('you got an D!');
        break;
    case 'E':
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade');
}

