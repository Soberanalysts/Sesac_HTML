"use strict";
const person2 = {
    name: "Alice",
    age: 30,
    isEmployed: true
};
const laptop = {
    id: 1,
    name: 'Lenovo',
};
console.log(`상품 ID: ${laptop.id}, name: ${laptop.name}, price: ${laptop.price}`);
laptop.name = 'Lenovo A5';
laptop.price = 1000;
console.log(`상품 ID: ${laptop.id}, name: ${laptop.name}, price: ${laptop.price}`);
