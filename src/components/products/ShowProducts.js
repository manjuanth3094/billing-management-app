import React from 'react'
import { Paper } from '@material-ui/core'
import{ useSelector } from 'react-redux'

import ProductItem from './ProductItem'

const ShowProducts = (props) => {
    

    const products = useSelector(state => state.products)
    console.log(products)
    
    return (
        <div>
            <Paper elevation={3}>
                <h2>All Products - { products.length }</h2>                
            </Paper>

            { products.length === 0 ? (           
                <h2> No Products found. Add your First Product </h2>
            ) : (
            <Paper className="customercard">
                {products.map(product => {
                    return <ProductItem key={product._id}  {...product} />
                })}
            </Paper>
            )
            }
        </div>
    )
}

export default ShowProducts
