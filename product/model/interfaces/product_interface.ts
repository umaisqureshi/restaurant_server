interface ProductInterface {
    id: string,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    rating: number,
    type: ProductType,
    isTopRated: boolean,
    isFavorite: boolean,
}


type ProductType = "pizza" | "burger" | "pasta" | "dessert" | "drink";

export { ProductType, ProductInterface };
