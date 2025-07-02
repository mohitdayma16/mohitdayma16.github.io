// //Arrays


// // const score = [2,1,4,2,6,4];
// // // console.log(score);
// // // console.log(score[0]);
// // // score.push(9)
// // // console.log(score);
// // // console.log(score.length);
// // const scores = [5, 7, 8];
// // const newscore = [...scores, ...scores];
// // console.log("Scores:", newscore);

// const products = [
//     { id: 1, name: "Product 1", price: 25 },
//     { id: 2, name: "Product 2", price: 30 },
//     { id: 3, name: "Product 3", price: 35 },
// ];

// let cart = {};

// function getProductById(id) {
//     return products.find(product => product.id === id);
// }

// function addToCart(id) {
//     const product = getProductById(id);
//     if (!product) {
//         console.log(`Product with ID ${id} not found.`);
//         return;
//     }


//     if (cart[id]) {
//         cart[id].quantity += 1;
//     } else {
//         cart[id] = {
//             product: product,
//             quantity: 1
//         };
//         console.log("Product successfully added to cart");
//     }
// }

// addToCart(1);
// addToCart(3);
// addToCart(3); 
// addToCart(4);
// console.log(cart);


const score = [2,1,3,5,7];
// score.forEach((value,index,arr)=>{
//     console.log(`value at index ${index} is ${value}`)
//     // console.log(arr);
    
// });


// const newScore = score.map((value,index,arr)=>{
    // console.log(`value at index ${index} is ${value}`);
    // console.log(arr);
    // return value+5;
//     return value >2;  
// });
// console.log(newScore);

// s
// const newScore2 = score.find((value)=>{
//     return value === 2;
// });
// console.log(newScore2);


const newScore2 = score.reduce((sum,value)=> sum+value,0);
console.log(newScore2);



