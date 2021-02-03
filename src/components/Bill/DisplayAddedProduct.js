import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeLineItems } from "../../actions/billAction"

const DisplayAddedProduct = () => {

  const lineItems = useSelector((state) => state.lineItem)
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  let arr = []
  const displayName = (id) => {
    arr = products.filter((product) => product._id === id)
    return arr[0].name
  }
  const removeProduct = (id) => {
    dispatch(removeLineItems(id))
  }
  return (
    <div> <br/>
      {lineItems.length === 0 ? (
        ''
      ) : (
        <table border="2" className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>price</th>
              <th>subTotal</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {lineItems.map((product) => {
              return (
                <tr key={product.product}>
                  <td>{displayName(product.product)}</td>
                  <td>{product.quantity}</td>
                  <td>{arr[0].price}</td>
                  <td>{arr[0].price * +(product.quantity)}</td>
                  <td>
                    <button onClick={() => removeProduct(product.product)} className="btn btn-danger">
                      delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default DisplayAddedProduct
