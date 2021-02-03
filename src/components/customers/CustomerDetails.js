import React from 'react'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'

import { startDeleteCustomer } from '../../actions/customerActions'
import EditCustomer from './EditCustomer'

const CustomerDetails = (props) => {
    const dispatch = useDispatch()

    const { _id, name, mobile, email } = props
    const [edit, setEdit] = React.useState(false)
    //console.log(_id)
    //console.log(name)
    
    const handleEdit = (id) => {
        setEdit(!edit)
    }
    
    const handleDelete = (id) => {
        const confirmDelete = window.confirm('Are you sure!')
        if(confirmDelete) {
            dispatch(startDeleteCustomer(id))
            swal('deleted customer successfully')
        }
    }
    

    return (
        <div>      
            {_id &&                 
                <div>
                    <div className="card" style={{width: '18rem'}}>
                        <img src="/CustomerLogo.png" className="card-img-top" alt="image" />
                        <div className="card-body">
                            <p>Customer Name - {name}</p>
                            <p>Mobile Number - {mobile}</p>
                            <p>Email - {email}</p>

                            <button
                                    onClick={handleEdit} className="btn btn-primary"
                                > Edit </button> {' '}
                                {
                                    edit && <EditCustomer 
                                                id={_id}
                                                name={name}
                                                email={email}
                                                mobile={mobile}
                                            />
                                }

                                <button
                                    onClick={() => handleDelete(_id)}
                                    className="btn btn-danger"
                                > Delete 
                            </button>
        
                        </div>
                    </div>                                                           
                </div>
            }                   
        </div>
    )
}

export default CustomerDetails
