import React, { useState } from 'react'
import {TextField, Button, Paper, Grid } from '@material-ui/core'
import validator from 'validator'
import axios from 'axios'
import swal from 'sweetalert'
import  {useDispatch } from 'react-redux'

import { loginStatus } from '../actions/userAction'

const Login = (props) => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const runValidations = () => {
        // console.log('validation')
        
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
        // console.log(errors)
        
    }

    const resetForm = () => {
        setEmail('')
        setPassword('')
    }
    

    const handleChange = (e) => {
        const input = e.target.name
        // console.log(input)
        
        if(input === 'email') {
            setEmail(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        runValidations()

        if(Object.keys(errors).length === 0) {
            setFormErrors({})
            const formData = {
                email: email,
                password: password
            }

            axios.post('http://dct-billing-app.herokuapp.com/api/users/login', formData)
                .then(response => {
                    console.log(response.data)
                    const result = response.data
                   
                    if(result.hasOwnProperty('errors')) {
                        alert(result.errors)
                    } else {
                        localStorage.setItem('token', result.token)
                        swal('welcome', "You've successfully logged in")
                        props.history.push('/')
                        dispatch(loginStatus())
                    }
                })
                .catch(err => console.log(err))

                resetForm()
        } else {
            setFormErrors(errors)
        }
    }
    

    return (
        <div align="center">
            <Grid item>
                <Paper elevation={3} style={{height: 250, width: 500}}>
                    <h2> Login to Account </h2>

                    <form onSubmit={handleSubmit} >                                       
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
                        
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            style={{'marginRight' :'15px'}} 
                            onClick={resetForm}>cancel
                        </Button>
                        <Button variant="contained" type='submit' color="primary" >
                                Login
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default Login
