import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const DisplayBill  = (props) => {
  const { bill } = props
  const currBill = bill ? bill : {}
    // console.log(bill)
    
  const customers = useSelector((state) => state.customers)
  const products = useSelector((state) => state.products)
  const currentBill = useSelector((state) => state.currentBill)
  // console.log(bill[0])
  
  const displayCustomerName = (customerId) => {
    const customerName = customers.filter(customer => customer._id === customerId) 
    return customerName[0]?.name
  }
  
  const productDetails = []
  const displayProductName = (productID) => {
    const productDetails = products.filter(product => product._id === productID)
    return productDetails[0]?.name
  }
  
  return (
    <div>
      { 
        // Object.entries(bill).length > 0 ? (
        Object.entries(currBill).length > 0 ? (
          <div class="card" style={{width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">INVOICE</h5>
                <p>Customer Name :-
                  { displayCustomerName(bill?.customer)}
                </p>
                <p>Date created :-
                  {
                    bill?.date.split('T').splice(0, 1)
                  }
                </p>
                  {
                    bill?.lineItems.map(product => {
                      return (
                        <div>
                          <p>Product :- {displayProductName(product.product)}</p> 
                          <p>Product Quantity :- {product.quantity} </p>
                          <p>Product price :-{productDetails[0]?.price} {product.price} </p>
                        </div>
                      )
                    })
                  }             
                </div>
          </div> ) : (

          <div class="card" style={{width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">INVOICE</h5>
                <p>Customer Name :-
                  {
                    displayCustomerName(currentBill[0]?.customer)
                  }
                </p>
                <p>Date created :-
                  {
                    currentBill[0]?.date.split('T').splice(0, 1)
                  }
                </p>
                  {
                    currentBill[0]?.lineItems.map(product => {
                      return (
                        <div>
                          <p>Product :- {displayProductName(product.product)}</p> 
                          <p>Product Quantity :- {product.quantity} </p>
                          <p>Product price :-{productDetails[0]?.price} {product.price} </p>
                        </div>
                      )
                    })
                  }             
                </div>
          </div> )
      }
    </div>
  )
}

export default DisplayBill  