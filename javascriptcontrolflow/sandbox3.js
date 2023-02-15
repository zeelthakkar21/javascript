//variable & block scope
let age1 = 30;
if (true){
    let age1=40;
    let name ='sujal';
   console.log('inside 1st code block:', age1,name);

   if (true){ //nested loop
    let age1=50;
    console.log('inside 2nd code block', age1);
    //var test ='hello'; var use karishu to loop ni bar pan output apse , let ni jagya e const karishu to pan nai ape

   }
}
   console.log('outside code block', age1,name,test);