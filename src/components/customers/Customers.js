import React from 'react'
import AddCustomer from '../customers/AddCustomer'
import ShowCustomers from '../customers/ShowCustomers'

const Customers = (props) => {
    return (
        <div>
            <br/><br/>
            <AddCustomer/>
            <ShowCustomers/>
        </div>
    )
}

export default Customers
