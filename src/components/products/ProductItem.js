import React from 'react'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'

import { startDeleteProduct } from '../../actions/productActions'
import EditProduct from './EditProduct'

const ProductItem = (props) => {
    const dispatch = useDispatch()
    const { _id, name, price } = props
    const [edit, setEdit] = React.useState(false)
    // console.log(_id)
    // console.log(name)

    const handleEdit = () => {
        setEdit(!edit)
    }
    
    const handleDelete = (id) => {    
        const confirmDelete = window.confirm('Are you sure!')
        if(confirmDelete) {
            dispatch(startDeleteProduct(id))
            swal('deleted customer successfully')
        }
    }   

    return (
        <div className="customercard">
            {_id && 
                <div>
                    <div className="card" style={{width: '18rem'}}>
                        <img src="/Product-logo-2.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p>Product Name - {name}</p>
                            <p>Product Price - {price}</p>

                            <button onClick={handleEdit} className="btn btn-primary">Edit</button> {' '}
                            {
                                edit && <EditProduct 
                                            id={_id}
                                            name={name}
                                            price={price}
                                            
                                        />
                            }
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn btn-danger"
                            > Delete </button>

                        </div>
                    </div>                                 
                </div>
            }            
        </div>
    )
}

export default ProductItem
