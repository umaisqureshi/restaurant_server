import { ProductModel } from "../model/product_model";

let products: ProductModel[] = [
    new ProductModel({
        id: 1,
        name: 'Cheese Burger',
        price: 5.99,
        type: "burger",
        isTopRated: true,
        isFavorite: false,
        rating: 4.5,
        description:
            'Cheese Burger with beef patty, cheese, lettuce, tomato, and mayo',
        imageUrl: 'burger.jpg',
    }),
    new ProductModel({
        id: 2,
        name: 'Pizza',
        price: 7.99,
        type: "pizza",
        isFavorite: false,
        isTopRated: false,
        rating: 4.5,
        description: 'Pizza with tomato sauce, cheese, and pepperoni',
        imageUrl: 'pizza.jpg',
    }),
    new ProductModel({
        name: 'Coke',
        price: 1.99,
        isTopRated: false,
        rating: 4.5,
        type: "drink",
        isFavorite: false,
        description: 'Coke with ice',
        imageUrl: 'drink.jpg',
        id: 3,
    }),
    new ProductModel({
        name: 'Pepsi',
        price: 1.99,
        rating: 4.5,
        isTopRated: true,
        isFavorite: false,
        type: "drink",
        description: 'Pepsi with ice',
        imageUrl: 'drink.jpg',
        id: 4
    }),
    new ProductModel({
        name: 'Italian Pasta',
        price: 2.99,
        type: "pasta",
        isTopRated: false,
        isFavorite: false,
        rating: 4.5,
        description: 'Italian Pasta with tomato sauce and cheese',
        imageUrl: 'pasta.png',
        id: 5
    }),
    new ProductModel({
        name: 'BBQ Chicken',
        price: 3.99,
        type: "burger",
        isTopRated: false,
        isFavorite: false,
        rating: 4.5,
        description: 'BBQ Chicken with lettuce, tomato, and mayo',
        imageUrl: 'burger.jpg',
        id: 6
    }),
    new ProductModel({
        name: 'Water',
        price: 0.99,
        isTopRated: true,
        isFavorite: false,
        rating: 4.5,
        type: "drink",
        description: 'Water with ice',
        imageUrl: 'drink.jpg',
        id: 7
    }),
    new ProductModel({
        name: 'King Pizza',
        price: 9.99,
        type: "pizza",
        isTopRated: false,
        rating: 4.5,
        description: 'King Pizza with tomato sauce, cheese, and pepperoni',
        imageUrl: 'pizza.jpg',
        isFavorite: false,

        id: 8
    }),
    new ProductModel({
        name: 'Coffee',
        price: 2.99,
        type: "drink",
        isTopRated: false,
        isFavorite: false,
        rating: 4.5,
        description: 'Coffee with milk',
        imageUrl: 'drink.jpg',
        id: 9
    }),
    new ProductModel({
        name: 'Spaghetti',
        price: 3.99,
        type: "pasta",
        isTopRated: true,
        isFavorite: false,
        rating: 4.5,
        description: 'Spaghetti with tomato sauce and cheese',
        imageUrl: 'pasta.png',
        id: 10
    }),

]

export { products };