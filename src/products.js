const productos = [
    { id:1, name:"Coca cola", precio:"95$", url:"https://www.fullempanadas.cl/wp-content/uploads/2021/07/COCA-COLA-300x300.png", descripcion:"Lata de Coca Cola de 354ml"},
    { id:2, name:"Pepsi", precio:"90$", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFuExIQG_gHake0bGPYO2CT_LAguI48UzeTFc_pU0TpFi7F-gu8uaTUqbyN6p5LcFaK8&usqp=CAU", descripcion:"Lata de Pepsi de 354ml"},
    { id:3, name:"Papas", precio:"120$", url:"https://images-na.ssl-images-amazon.com/images/I/51%2B4EuSFCbL._SX300_SY300_QL70_ML2_.jpg", descripcion:"Papas Lays"}
]


 export const newProducts = () => {
    return new Promise ((resolve, reject) => {
         setTimeout(() => {
                resolve(productos)
         }, 1000)
    })

}

export const getProductById = (id) => {  
    return new Promise((resolve, reject) => {
        const product = productos.find(prod => parseInt(prod.id) === parseInt(id))

        setTimeout(() => { 
            resolve(product)}, 1000)
    })
}