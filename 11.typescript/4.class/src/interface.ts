interface Person2 {
    name: string;
    age: number;
    isEmployed: boolean;
}

const person2: Person2 = {
    name: "Alice",
    age: 30,
    isEmployed: true
};

interface Product {
    readonly id: number;
    name: string;
    price?: number;
}

const laptop: Product = {
    id: 1,
    name: 'Lenovo',
}

console.log(`상품 ID: ${laptop.id}, name: ${laptop.name}, price: ${laptop.price}`)
laptop.name = 'Lenovo A5';
laptop.price = 1000;

console.log(`상품 ID: ${laptop.id}, name: ${laptop.name}, price: ${laptop.price}`)
