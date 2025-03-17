"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
var products = [
    {
        id: 1,
        name: 'Cheese Burger',
        price: 5.99,
        type: "burger",
        isTopRated: true,
        rating: 4.5,
        description: 'Cheese Burger with beef patty, cheese, lettuce, tomato, and mayo',
        imageUrl: 'burger.jpg',
    },
    {
        id: 2,
        name: 'Pizza',
        price: 7.99,
        isTopRated: false,
        rating: 4.5,
        type: "pizza",
        description: 'Pizza with tomato sauce, cheese, and pepperoni',
        imageUrl: 'pizza.jpg',
    }
];
exports.products = products;
