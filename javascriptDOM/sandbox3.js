// getting and setting attribute of elements

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk'); //change the attribute
link.innerText= 'the net ninjas website';


const mssg= document.querySelector('p');
console.log(mssg.getAttribute('class'));  
mssg.setAttribute('class','success');

// class css style
mssg.setAttribute('style','color:green');


const title = document.querySelector('h1');
//title.setAttribute('style', 'margin:50px;');
console.log(title.style);
console.log(title.style.color);
title.style.margin= '50px';
title.style.color= 'red';
title.style.margin=''; //remove margin 



