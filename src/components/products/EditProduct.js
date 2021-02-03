import React from 'react'
import AddProduct from './AddProduct'

const EditProduct = (props) => {
    const { id, name, mobile } = props
    // console.log(id)
    
    return (
        <div>
            <h2> Edit Product </h2>
            <AddProduct 
                id={id}
                name={name}
                mobile={mobile}
            />
        </div>
    )
}

export default EditProduct
