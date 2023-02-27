//changing text inside html element

//const para = document.querySelector('p');
//console.log(para.innerText);
//para.innerText='ninjas are awesome';  //change inner tetxt

/*const paras = document.querySelectorAll('p');
paras.forEach(para=> {
    console.log(para.innerText);
    para.innerText +=' new text';  //add new text in every p

});*/

//changing html inside element

const content = document.querySelector('.content');
//console.log(content.innerHTML);
//content.innerHTML +='<h2> This is a new H2 </h2>';

const people=['mario','super','joy'];

people.forEach(person=>{
    content.innerHTML +=`<p> ${person} </p>`;
});