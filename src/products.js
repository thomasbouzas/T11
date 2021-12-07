const productos = [
    {id:1, name:"Coca cola", precio:"95$", url:"https://www.fullempanadas.cl/wp-content/uploads/2021/07/COCA-COLA-300x300.png", descripcion:"Lata de Coca Cola de 354ml"}
    
]

const product = [
    {id:1, name:"Coca cola", precio:"95$", url:"https://www.fullempanadas.cl/wp-content/uploads/2021/07/COCA-COLA-300x300.png", descripcion:"Lata de Coca Cola de 354ml"}
    
]

 export const newProducts = () => {
    return new Promise ((resolve, reject) => {
         setTimeout(() => {
                resolve(productos)
         }, 1000)
    })

}

export const getItem = () => {
    return new Promise ((resolve, reject) => {
         setTimeout(() => {
                resolve(product)
         }, 1000)
    })

}