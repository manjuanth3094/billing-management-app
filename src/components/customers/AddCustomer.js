import React, { useState } from 'react'
import { Paper, TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import validator from "validator"
import swal from 'sweetalert'

import { startAddCustomer } from '../../actions/customerActions'
import { startEditCustomer } from '../../actions/customerActions'

const AddCustomer = (props) => {
    const { id, name, email, mobile } = props

    const [customerData, setCustomerData] = useState({
        name: name ? name : '',
        mobile: mobile ? mobile : '',
        email: email ? email : ''
      })
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setCustomerData({ ...customerData, [e.target.name]: e.target.value })
    }

    const handleCancel = () => {
        setCustomerData({
          name: '',
          email: '',
          mobile: ''
        })        
      }

    const runValidation = () => {
        //name validation :-
        if (validator.isEmpty(customerData.name)) {
          errors.name = "name cannot be empty";
        }
        // email validation :-
        if (validator.isEmpty(customerData.email)) {
          errors.email = "email cannot be empty";
        } else if (!validator.isEmail(customerData.email)) {
          errors.email = "invalid email format";
        }
        // mobile validation :-
        if (validator.isEmpty(customerData.mobile)) {
          errors.mobile = "mobile cannot be empty";
        } else if (!/^\d+$/.test(customerData.mobile)) {
          errors.mobile = "mobile number should contain only numbers";
        }
      }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()

        if(Object.keys(errors).length === 0) {
            setFormErrors({})
            if(id) {
                dispatch(startEditCustomer(customerData, id))
            } else {
                dispatch(startAddCustomer(customerData))
                setCustomerData({
                name: '',
                mobile: '',
                email: '',
                })
            } 
        } else {
            setFormErrors(errors)            
        }
    } 
        // e.preventDefault()
        // // const productDetails = {name: name, price: price}
        // const customerDetails = { name, mobile, email}

        // dispatch(startAddCustomer(customerDetails))
        // swal('congrats', 'product added successfully')
        // resetForm()
    
    
    return (
        <div>
            Add Customer
            {/* <Paper elevation={4}> */}
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        label='name'
                        name='name'
                        value={customerData.name}
                        onChange={handleChange}
                    />
                    {formErrors.name && <span style={{color: 'red'}}>{formErrors.name}</span>}<br/>
                    <TextField
                        variant="outlined"
                        label='mobile'
                        name='mobile'
                        value={customerData.mobile}
                        onChange={handleChange}
                    /> 
                    {formErrors.mobile && <span style={{color: 'red'}}>{formErrors.mobile}</span>}<br/><br/> 
                    <TextField
                        variant="outlined"
                        label='email'
                        name='email'
                        value={customerData.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <span style={{color: 'red'}}>{formErrors.email}</span>}<br/><br/> 

                    <Button
                            type="button"
                            variant="outlined"
                            // style={{marginLeft: '10px'}} 
                            color="primary"                            
                            onClick={handleCancel}
                        >
                        Cancel
                    </Button>
                    <Button 
                        type="submit"
                        variant="outlined"
                        // style={{marginLeft: '3px'}}
                        color="primary"
                    >
                        { id ? 'Update Customer' : 'Add Customer' }
                    </Button>
                    
                    {/* <Button
                        type="submit"
                        variant="outlined"
                        style={{marginLeft: '60px'}}
                        color="primary"
                    >Add Customer</Button>                    */}
                </form>
            {/* </Paper> */}
        </div>
    )
}

export default AddCustomer
