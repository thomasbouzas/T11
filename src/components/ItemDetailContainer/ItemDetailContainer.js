import React from 'react'
import { useState, useEffect } from 'react'
import { getProductById, newProducts } from '../../products'
import ItemListDetail from '../ItemListDetail/ItemListDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [item, setItem] = useState();

    const getId = useParams()

    
    useEffect(() => {
        newProducts(getId).then(list => {
            setItem(list)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setItem()
        })

    }, [getId])



    return (
        <div className="ItemDetailContainer">
                <ItemListDetail item={item}/>
        </div>
    )
}


export default ItemDetailContainer