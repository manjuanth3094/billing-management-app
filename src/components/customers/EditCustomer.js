import React from 'react'
import AddCustomer from './AddCustomer'

const EditCustomer = (props) => {
    const { id, name, mobile, email } = props
    return (
        <div>
            <h2>Edit Customer</h2>
            <AddCustomer
                id={id}
                name={name}
                email={email}
                mobile={mobile}
            />
        </div>
    )
}

export default EditCustomer
