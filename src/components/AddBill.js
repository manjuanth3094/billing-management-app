import React from 'react'
import { Paper, TextField, Button } from '@material-ui/core'

const AddBill = () => {
    return (
        <div>
            Add Bill
            <form>
                <TextField type="date" /> <br/> <br/>
                
                {/* <label for="customers">Choose a customer:</label> */}
                <select name="customers" id="customers">
                    <option value="customer 1">customer 1</option>
                    <option value="customer 2">customer 2</option>
                    <option value="customer 3">customer 3</option>
                    <option value="customer 4">customer 4</option>
                </select> <br/><br/>

                <button> Generate Bill </button>
                <br></br>
            </form>
        </div>
    )
}

export default AddBill
