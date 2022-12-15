const faker  = require('faker')

let products = ''

for (let i = 0 ; i < 3 ; i++){
    let item = faker.commerce.productName();
    products += `<div>${item}</div>`
}

console.log(products)