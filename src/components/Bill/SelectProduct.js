import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addLineItems } from '../../actions/billAction'

const SelectProduct = () => {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const [productId, setProductId] = useState('')
  const [quantity, setQuantity] = useState(
    localStorage.getItem('quantity') ? +localStorage.getItem('quantity') : 1
  )

  const handleProduct = (e) => {
    setProductId(e.target.value)
  }
  
  const handleClick = () => {
    if(productId) {
      const data = { product: productId, quantity: quantity }
      dispatch(addLineItems(data))
      setProductId("")
      setQuantity(1)
    } else {
      alert(" select customer and product ")
    }
  }

  return (
    <div >
      <select value={productId} onChange={handleProduct}>
        <option value=""> Select product </option>
        { (products.length !== 0) && products.map((product) => {
          return (
            <option key={product._id} value={product._id}>
              {product.name}
            </option>
          )
        })}
      </select> <br/>
      <div >  <br/>
        <button 
          disabled={quantity === 1} 
          onClick={() => {
            setQuantity( (quantity - 1))
            localStorage.setItem('quantity', quantity - 1) 
          }} className="btn btn-default" 
        > - </button> {' '}
        { quantity }
        <button 
          onClick={() => {
            setQuantity(quantity + 1)
            localStorage.setItem('quantity', quantity + 1)} 
        } className="btn btn-default"  
        > + </button>
        <button onClick={handleClick} className="btn btn-primary"> ADD </button>
      </div>
    </div>
  )
}

export default SelectProduct  