import React, { useState } from 'react'
import { Paper, TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import validator from 'validator'
import swal from 'sweetalert'

import { startAddProduct, startEditProduct } from '../../actions/productActions'

const AddProduct = (props) => {
    const { id, name, price } = props
    const [productDetails, setProductDetails] = useState({
        name: name ? name : '',
        price: price ? price : ''
      })
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const dispatch = useDispatch()

    // const resetForm = () => {
    //     setName('')
    //     setPrice('')
    // }

    const runValidation = () => {
        //name validation
        if (validator.isEmpty(productDetails.name)) {
          errors.name = 'name cannot be empty'
        }
        // price validation
        if (validator.isEmpty(productDetails.price)) {
          errors.price = 'price cannot be empty'
        } else if (!/^\d+$/.test(productDetails.price)) {
          errors.price = 'price should be in numbers/digits'
        }
      }

    const handleCancel = () => {
        setProductDetails({
          name: '',
          email: '',
          mobile: ''
        })        
      }

    const handleChange = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()

        if(Object.keys(errors).length === 0) {
            setFormErrors({})

            if(id) {
              dispatch(startEditProduct(productDetails, id))
              setProductDetails({
                name: '',
                price: '',
              })
            } else {
              dispatch(startAddProduct(productDetails))
              swal('Product Added')
              setProductDetails({
                name: '',
                price: '',
              })
            }
          } else {
              setFormErrors(errors)
          }        
    }
    
    return (
        <div>
            Add Product
            {/* <Paper elevation={4}> */}
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        label='name'
                        name='name'
                        value={productDetails.name}
                        onChange={handleChange}
                    /> 
                    {formErrors.name && <span style={{color: 'red'}}> {formErrors.name} </span>}<br/>  <br/> <br/>

                    <TextField
                        variant="outlined"
                        label='price'
                        name='price'
                        value={productDetails.price}
                        onChange={handleChange}
                    />
                    {formErrors.price && <span style={{color: 'red'}}> {formErrors.price} </span>}<br/>  <br/> 

                    <button
                        type="button"
                        className="btn cancel"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    <Button
                        type="submit"
                        variant="outlined"
                        style={{marginLeft: '60px'}}
                        color="primary"
                    >{ id ? 'Update' : 'Add Product' }</Button>                   
                </form>
            {/* </Paper> */}
        </div>
    )
}

export default AddProduct
