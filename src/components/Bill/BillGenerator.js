import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import Select from 'react-select'

import SelectProduct from './SelectProduct'
import DisplayAddedProduct from './DisplayAddedProduct'
import { startCreateBill, startGetAllBills } from '../../actions/billAction'
import DisplayBill from './DisplayBill'

const BillGenerator = () => {
  const [startDate, setStartDate] = useState('')
  const [customerId, setCustomerId] = useState(
    localStorage.getItem('customerID') ? localStorage.getItem('customerID') : ''
  )
  const [displayBill, setDisplayBill] = useState(false)

  const dispatch = useDispatch()
  const customers = useSelector((state) => state.customers)
  const lineItems = useSelector((state) => state.lineItem)
  // console.log(customers)  
  
  const handleDate = (e) => {
    setStartDate(e.target.value)
  }

  const handleCustomer = (e) => {
    setCustomerId(e.target.value)
    localStorage.setItem('customerID', e.target.value)
  }

  const billGenerate = () => {    
    
    if(!startDate){
      swal('Select Date ')
    } else if(!customerId){
      swal('Select Customer')
    } else if(!(lineItems.length > 0)) {
      swal('No line items, Add products now')
    } else {    
      const data = {
        date: startDate,
        customer: customerId,
        lineItems: lineItems
      }
      dispatch(startCreateBill(data))
      // dispatch(startGetAllBill())
      setDisplayBill(true)
      setStartDate('')
      setCustomerId('')
    } 
  }
  return (
    <div>
      <div >
        <p>Bill Generator</p>
      </div>
      <div >        
        <TextField
          id='date'
          type='date'
          value={startDate}
          onChange={handleDate}
        /> Select date
      </div> <br/>
      <div >
        <div>
          <div >
            {/* {(customers.length !== 0) && <Select
                                            value={customerId}
                                            options={customers[0].name}
                                            onChange={handleCustomer}
                                         />

            } */}
            <select
              value={customerId}
              onChange={handleCustomer}              
            >
               <option value=''>select customer</option>
                { (customers.length !== 0) && customers.map((customer) => {
                  return (
                    <option key={customer._id} value={customer._id}>
                      {customer.name}
                    </option>
                )
              })} 
            </select>
          </div><br/>
          <div >
            
            <SelectProduct />
          </div>
          <div>
            <DisplayAddedProduct />
            <button onClick={billGenerate} className="btn btn-primary"> Generate Bill </button>
          </div>
        </div>  <br/>

        <div>
          {
            displayBill && <DisplayBill />
          }
        </div>

      </div>
    </div>
  )
}

export default BillGenerator
