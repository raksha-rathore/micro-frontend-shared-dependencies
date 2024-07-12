import faker from 'faker';

console.log(" cart ")
const content = `<div>Your cart has ${faker.random.number()} products</div>`

document.querySelector("#cart-count").innerHTML = content;