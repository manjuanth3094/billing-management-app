import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'

import CustomerDetails from './customers/CustomerDetails'
import ProductItem from './products/ProductItem'
import DisplayBill from './Bill/DisplayBill'

const Dashboard = (props) => {
    const customers = useSelector(state => state.customers)
    const lastFiveCustomers = _.takeRight(customers, 5)
    // console.log(lastFiveCustomers)
    
    const products = useSelector(state => state.products)
    const lastFiveProducts = _.takeRight(products, 5)
    // console.log(lastFiveProducts)

    const bills = useSelector(state => state.allBill) 
    // const revArr = bills.reverse().slice(0,5)
    const lastFiveBills = _.takeRight(bills, 5)
    // console.log(lastFiveBills)       
     let totalSales = 0
     bills.map(bill => {
         return totalSales += bill.total
     })
    //  console.log(totalSales)

    
       
    return (
        <div> <br/><br/>
            <div>
                <h4>Last Five Customers :-</h4> 
                <div className="customercard">               
                    {
                        lastFiveCustomers.map((customer) => {
                            return <CustomerDetails key={customer._id} {...customer}  />
                        })
                    }
                </div>
            </div>

            <div>
                <h4>Last Five Products :-</h4> 
                <div className="productcard">
                    
                    {
                        lastFiveProducts.map((product) => {
                            return <ProductItem key={product._id} {...product}  />
                        })
                    }
                </div>
            </div>
            
            <div>
                <h4>Last Five Bills :-</h4>
                <div className="billcard">                 
                {
                    (lastFiveBills.length > 0) && lastFiveBills.map(currentBill => {
                        return (
                            <DisplayBill key={currentBill._id} bill={currentBill}  />
                        )
                    })
                }
                </div>
            </div>

            <div>
                <div className="billcard">
                    <h4>Total Sales :- ₹ {totalSales} </h4>
                </div>
            </div>
        </div>       
    )
}

export default Dashboard
