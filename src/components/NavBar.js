import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import swal from 'sweetalert'
import {AppBar, IconButton, Button } from '@material-ui/core'
import  MenuIcon  from '@material-ui/core/Menu'
import  ToolBar  from '@material-ui/core/ToolBar'
import {StyledLink} from '../app-styled'

import {loginStatus} from '../actions/userAction'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Account from './Account'
import Products from '../components/products/Products'
import Customers from '../components/customers/Customers'
import BillGenerator from './Bill/BillGenerator'
import Dashboard from './Dashboard'


const NavBar = (props) => {
    const loggedin = useSelector((state) => state.user)
    const dispatch = useDispatch()

    React.useEffect(() => {

    })

    return (
        <div>
            <div>                                                   
                  {  
                    loggedin ? (
                        <>
                        <AppBar >
                            <ToolBar style={{color: 'yellow'}} >
                                <IconButton style={{color: 'yellow'}}>
                                    <StyledLink to="/">Home</StyledLink> &nbsp; &nbsp;
                                    <StyledLink to="/dashboard">Dashboard</StyledLink> &nbsp; &nbsp;
                                    <StyledLink to="/account"> Account  </StyledLink> &nbsp;&nbsp;
                                    <StyledLink to="/products"> Products  </StyledLink> &nbsp;&nbsp;
                                    <StyledLink to="/customers"> Customers  </StyledLink> &nbsp;&nbsp;
                                    <StyledLink to="/billing"> Billing  </StyledLink> &nbsp;&nbsp;
                                    <StyledLink to="/" onClick={() => {
                                        localStorage.removeItem('token')
                                        dispatch(loginStatus)
                                        props.history.push('/')
                                        swal('You are logged-out', 'Good Day')
                                        // console.log(loginStatus)                                
                                    }}> Logout  </StyledLink> 
                                </IconButton>
                            </ToolBar>
                        </AppBar>
                        </>
                    ) : (
                        <>
                        <AppBar >
                            <ToolBar style={{color: 'yellow'}} >
                                <IconButton style={{color: 'yellow'}}>
                                    {/* <MenuIcon/> */}
                                    <StyledLink to="/">Home</StyledLink> || {' '} 
                                    <StyledLink to="/register">Register</StyledLink>  || {' '}
                                    <StyledLink to="/login">Login</StyledLink> 
                                </IconButton>
                            </ToolBar>
                        </AppBar>
                        </> 
                    )
                }
                
            </div>
            
            <Route exact path="/" component={Home} /> 
            <Route  path="/register" component={Register} />  
            <Route  path="/login" render={props => <Login {...props} />} />

            <Route path="/dashboard" component={Dashboard} /> 
            <Route path="/account" component={Account} /> 
            <Route path="/products" component={Products} /> 
            <Route path="/customers" component={Customers} /> 
            <Route path="/billing" component={BillGenerator} /> 
        </div>
    )
}

export default withRouter(NavBar)
