// for(let i = 0; i< 10; i++){
//     console.log(i);
// }

let numbers = [1,2,3,4,5,6,7,8,9,10]
for(let number of numbers){
    // console.log(number);
}

let products = [
    {name: 'miphone', price:1200},
    {name: 'miPhone', price:1200},
    {name: 'mi', price:1200},
    {name: 'mi', price:1200}
]
function matched(products,search){
    for(let product of products){
        console.log(product.name.toLowerCase().includes(search.toLowerCase()));
    }
}
let product = matched(products,'phone');