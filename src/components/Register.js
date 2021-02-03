import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import { TextField, Button } from '@material-ui/core'
import validator from 'validator'
import axios from 'axios'
import swal from 'sweetalert'

const Register = (props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [address, setAddress] = useState('')

    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const runValidations = () => {
        //username validation :-
        if(username.trim().length === 0) {
            errors.username = 'username cannot be blank'
        } else if(username.trim().length < 5) {
            errors.username = 'username should have more than 6 characters'
        }

        //email
        if(email.trim().length === 0) {
            errors.email = 'email cannot be blank'
        } else if(!validator.isEmail(email)) {
            errors.email = 'invalid email format'
        }

        //password
        if(password.trim().length === 0) {
            errors.password = 'password cannot be blank'
        } else if(!(password.length > 8 && password.length < 128)) {
            errors.password = 'password should be between 8 and 128 characters'
        }

        // Business-name
        if(businessName.trim().length < 0) {
            errors.businessName = 'businessName cannot be blank'
        }

        //address
        if(address.trim().length < 0) {
            errors.address = 'address cannot be blank'
        }
        //console.log('formErrors', errors)
    }

    const handleChange = (e) => {
        const input = e.target.name
        //console.log(input)
        
        if(input === 'username') {
            setUsername(e.target.value)
        } else if(input === 'password') {
            setPassword(e.target.value)
        } else if(input === 'email') {
            setEmail(e.target.value)
        } else if(input === 'businessName') {
            setBusinessName(e.target.value)
        } else {
            setAddress(e.target.value)
        }
    }

    const resetForm = () => {
        setUsername('')
        setEmail('')
        setPassword('')
        setBusinessName('')
        setAddress('')
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidations()

        if(Object.keys(errors).length === 0) {
            setFormErrors({})

            const formData = {
                username: username,
                email: email,
                password: password,
                businessName: businessName,
                address: address
            }

            axios.post('http://dct-billing-app.herokuapp.com/api/users/register', formData)
                .then(response => {
                    //console.log(response.data)
                    const result = response.data

                    if(result.hasOwnProperty("errors")) {
                        alert(result.errors)
                    } else {
                        swal('welcome', "you've registered successfully", 'login now')
                        props.history.push('/login')
                    }
                })
                .catch(error => console.log(error))

                resetForm()
        } else {            
            setFormErrors(errors)
            
        }

        
    }

    return (
        <div align="center">
            {/* <Paper elevation={2}> */}
                <h2> Register </h2>

                <form onSubmit={handleSubmit} >
                    <TextField            
                        type="text"
                        variant="outlined"
                        value={username}
                        placeholder="Username"
                        name="username"
                        onChange={handleChange}
                        error={formErrors.username && <span> {formErrors.username} </span>} 
                    /> <br/>
                    {formErrors.username && <span style={{color: 'red'}}> {formErrors.username} </span>}<br/>
                    
                    <TextField
                        type="email"
                        variant="outlined"
                        value={email}
                        placeholder="email"
                        name="email"
                        onChange={handleChange}
                        error={formErrors.email && <span> {formErrors.email} </span>} 
                    /><br/> 
                    {formErrors.email && <span style={{color: 'red'}}>{formErrors.email}</span>}<br/>

                    <TextField
                        type="password"
                        variant="outlined"
                        value={password}
                        placeholder="password"
                        name="password"
                        onChange={handleChange}
                        error={formErrors.password && <span> {formErrors.password} </span>} 
                    /><br/>
                    {formErrors.password && <span style={{color: 'red'}}> {formErrors.password} </span>}<br/>

                    <TextField
                        variant="outlined"
                        value={businessName}
                        placeholder="businessName"
                        name="businessName"
                        onChange={handleChange}
                        error={formErrors.businessName && <span> {formErrors.businessName} </span>} 
                    /><br/>
                    {formErrors.businessName && <span style={{color: 'red'}}> {formErrors.businessName} </span>}<br/>

                    <TextField
                        variant="outlined"
                        value={address}
                        placeholder="address"
                        name="address"
                        onChange={handleChange}
                        error={formErrors.address && <span> {formErrors.address} </span>} 
                    /><br/>
                    {formErrors.address && <span style={{color: 'red'}}> {formErrors.address} </span>}<br/>

                    <Button 
                        variant="contained" 
                        color="secondary" 
                        style={{'marginRight' :'15px'}} 
                        onClick={resetForm}>cancel
                    </Button>
                    <Button variant="contained" type='submit' color="primary" >
                            Register
                    </Button>
                </form>

            {/* </Paper> */}
        </div>
    )
}

export default Register
