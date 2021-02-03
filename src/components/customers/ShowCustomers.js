import React from 'react'
import { Paper } from '@material-ui/core'
import{ useSelector } from 'react-redux'

import CustomerDetails from './CustomerDetails'

const ShowCustomers = (props) => {
    // const { _id, email, mobile } = props
    // console.log(props)
    
    const customers = useSelector(state => state.customers)
    // console.log(customers)
    
    return (
        <div>
            <Paper elevation={4}>
                <h2>All customers - {customers.length }</h2>                
            </Paper>

            { customers.length === 0 ? (           
                <h2> No customers found. Add your First Product </h2>
            ) : (
            <Paper className="customercard">
                {customers.map(customer => {
                    return(                      
                        <CustomerDetails key={customer._id}  {...customer} />                  
                    )
                })}
            </Paper>
            )
            }
        </div>
    )
}

export default ShowCustomers
