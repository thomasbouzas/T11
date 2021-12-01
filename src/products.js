const productos = [
    {id:1, name:"Coca cola", precio:"95$", url:"https://www.fullempanadas.cl/wp-content/uploads/2021/07/COCA-COLA-300x300.png", descripcion:"Lata de Coca Cola de 354ml"},
    {id:2, name:"Pepsi", precio:"90$",  url:"https://alfanea.com.ar/wp-content/uploads/2020/09/Pepsi-Black-354-ml-300x300.jpg", descripcion:"Lata de Pepsi de 354ml" },
    {id:3, name:"Sprite", precio:"80$", url:"https://images-na.ssl-images-amazon.com/images/I/41gcm-kFceL._SX300_SY300_QL70_ML2_.jpg", descripcion:"Lata de Sprite de 354ml"}
]


 export const newProducts = () => {
    return new Promise ((resolve, reject) => {
         setTimeout(() => {
                resolve(productos)
         }, 1000)
    })

}