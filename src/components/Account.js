import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Paper } from '@material-ui/core'

const Account = (props) => {
    const [user, setUser] = useState({})

    const token = localStorage.getItem('token')
    // console.log(token)

    useEffect(() => {
        axios.get('http://dct-billing-app.herokuapp.com/api/users/account', {
            headers : {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            //console.log(response.data)
            setUser(response.data)
        })
        .catch(err => console.log(err))
    }, [])
    
    return (
        <div>
            {
                Object.entries(user).length > 0 && (      
                    <div align='center'>
                        <div className="card" style={{width: '28rem'}}>
                            <br/><br/>
                            <Paper elevation={5} style={{color: 'blue', backgroundColor:'yellow'}}>
                                <h1>Your Account Details :-</h1>
                                
                                <h3> User_Id - {user._id} </h3>
                                <h3> Username - {user.username} </h3>
                                <h3> Email - {user.email} </h3>
                                <h3> Business-Name - {user.businessName} </h3>
                                <h3> Address - {user.username} </h3>
                                <h3> CreatedAt - {user.createdAt} </h3>
                                <h3> UpdatedAt - {user.updatedAt} </h3>
                            </Paper>
                        </div>
                    </div>
                )    
            }
        </div>
    )
}

export default Account
