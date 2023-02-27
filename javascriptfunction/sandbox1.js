
//returning values
/*const calcArea = function(radius){
    return 3.14*radius**2;
};*/

// //arrow function
// const calcArea = radius =>
// // const calcArea = radius => 3.14 * radius**2;
// {
//     return 3.14 * radius ** 2;
// };
// const area = calcArea(5);
// console.log('area is: ', area);


// const greet = () => 'hello,world';
// const result = greet();
// console.log(result);


// /*const bill = function(products, tax){
//     let total =0;
//     for (let i=0; i< products.length; i++){
//         total +=products[i] + products[i]*tax;

//     }
//     return total;

// }
// console.log(bill([10,15,20],0.2))*/


// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;

//     }
//     return total;

// }
// console.log(bill([10, 15, 20], 0.2))



// // print 1 - 100
// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }


// // print even

// for (i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " is even");
//     }
// }

// // print odd
// for (i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i + " is odd");
//     }
// }

// // factrotial of 5 using loop
// let n = 5;
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//     factorial *= i;
// }

// console.log(factorial);

// // array of fruits 

// let fruit = ['apple', 'mango', 'grapes'];
// console.log(fruit);
// fruit.push("Banana")
// console.log(fruit);
// let a = fruit.indexOf("apple");
// fruit.splice(a, 1)
// console.log(fruit);


let myPost = [];


// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         let myData = data;

//         console.log("MyData ==>", myData)

//         let dataFilter = myData.filter((data) => data.id < 10);
//         // let allTitles = myData.map((data) => data.id)

//         // console.log("Titles ==>", allTitles)

//         console.log("Data Filter==>", dataFilter)



//     })



let tv = [
    {
        brand: "mi",
        prise: 1000,
        cat: "TV",
    },
    {
        brand: "sony",
        prise: 1020,
        cat: "TV",
    },
    {
        brand: "mi",
        prise: 1500,
        cat: "TV",
    },
    {
        brand: "sony",
        prise: 11000,
        cat: "TV",
    },
    {
        brand: "samsung",
        prise: 1500,
        cat: "TV",
    },
    {
        brand: "sony",
        prise: 11000,
        cat: "TV",
    },
    {
        brand: "samsung",
        prise: 1500,
        cat: "TV",
    },
    {
        brand: "sony",
        prise: 11000,
        cat: "TV",
    },
]


console.log("Tv ==>", tv)

const sonyTv = tv.filter((data) => data.brand === "sony")

console.log("Sony Tv ==>", sonyTv)

const samsungTv = tv.filter((data) => data.brand === "samsung" || data.brand === "sony")

console.log("samsungTv Tv ==>", samsungTv)




let products = [
    {
        title: "Product1",
        subtitle: "hello",
        price: 1500,
        imgUrl: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21054280/2023/2/24/466ea413-af52-4f1d-bac0-453b7acb9ef51677232204701-Stylecast-X-Hersheinbox-Tropical-Print-Cut-Out-Detail-Maxi-D-1.jpg",
        color: "Red",
        size: ["s", "m"]

    },
]













