const products = [
    {
        id: "1",
        name: "Buzo Nike",
        price: 8000,
        category: "Buzos",
        img:"https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwaabc8403/products/NI_CJ4435-010/NI_CJ4435-010-1.JPG",
        stock: 25,
        descrip: "Buzo nike negro",
    },
    {
        id: "2",
        name: "Zapatilla Adidas",
        price: 38000,
        category: "Calzados",
        img:"https://http2.mlstatic.com/D_NQ_NP_645210-MLA47980546815_102021-O.webp",
        stock: 7,
        descrip: "Zapatillas blancas Adidas", 
    },
    {
        id: "3",
        name: "Pantalon Deportivo Nike",
        price: 17000,
        category: "Pantalones",
        img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7350bf32/products/NI_DC7207-010/NI_DC7207-010-1.JPG",
        stock: 15,
        descrip: "PAntalon negro Nike",
    }

];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
};

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
};