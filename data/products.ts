import { ProductData } from "../core/interfaces/product_interface";

const products: ProductData[] = [
    new ProductData({
        id: 1,
        name: 'Cheese Burger',
        price: 5.99,
        type: "burger",
        isTopRated: true,
        rating: 4.5,
        description:
            'Cheese Burger with beef patty, cheese, lettuce, tomato, and mayo',
        imageUrl: 'burger.jpg',
    }),
    new ProductData({
        id: 2,
        name: 'Pizza',
        price: 7.99,
        type: "pizza",
        isTopRated: false,
        rating: 4.5,
        description: 'Pizza with tomato sauce, cheese, and pepperoni',
        imageUrl: 'pizza.jpg',
    }),
    new ProductData({
        name: 'Coke',
        price: 1.99,
        isTopRated: false,
        rating: 4.5,
        type: "drink",
        description: 'Coke with ice',
        imageUrl: 'drink.jpg',
        id: 3,
    }),
    new ProductData({
        name: 'Pepsi',
        price: 1.99,
        rating: 4.5,
        isTopRated: true,
        type: "drink",
        description: 'Pepsi with ice',
        imageUrl: 'drink.jpg',
        id: 4
    }),
    new ProductData({
        name: 'Italian Pasta',
        price: 2.99,
        type: "pasta",
        isTopRated: false,
        rating: 4.5,
        description: 'Italian Pasta with tomato sauce and cheese',
        imageUrl: 'pasta.png',
        id: 5
    }),
    new ProductData({
        name: 'BBQ Chicken',
        price: 3.99,
        type: "burger",
        isTopRated: false,
        rating: 4.5,
        description: 'BBQ Chicken with lettuce, tomato, and mayo',
        imageUrl: 'burger.jpg',
        id: 6
    }),
    new ProductData({
        name: 'Water',
        price: 0.99,
        isTopRated: true,
        rating: 4.5,
        type: "drink",
        description: 'Water with ice',
        imageUrl: 'drink.jpg',
        id: 7
    }),
    new ProductData({
        name: 'King Pizza',
        price: 9.99,
        type: "pizza",
        isTopRated: false,
        rating: 4.5,
        description: 'King Pizza with tomato sauce, cheese, and pepperoni',
        imageUrl: 'pizza.jpg',
        id: 8
    }),
    new ProductData({
        name: 'Coffee',
        price: 2.99,
        type: "drink",
        isTopRated: false,
        rating: 4.5,
        description: 'Coffee with milk',
        imageUrl: 'drink.jpg',
        id: 9
    }),
    new ProductData({
        name: 'Spaghetti',
        price: 3.99,
        type: "pasta",
        isTopRated: true,
        rating: 4.5,
        description: 'Spaghetti with tomato sauce and cheese',
        imageUrl: 'pasta.png',
        id: 10
    }),

]

export { products };