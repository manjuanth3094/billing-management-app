import axios from 'axios'

const token = localStorage.getItem('token')

// add products
const addProduct = (product) => {
    return { type: 'ADD-PRODUCT', payload: product }
}
export const startAddProduct = (product) => {
    // const token = localStorage.getItem('token')
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/products', product, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            const result = response.data
            dispatch(addProduct(result))
        })
        .catch(error => alert(error.message))
    }
}

// get all products 
const getAllProducts = (products) => {
    return {
        type: 'GET_ALL_PRODUCTS',
        payload: products
    }
}
export const startGetAllProducts = () => {
    // const token = localStorage.getItem('token')
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/products', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) =>{
            //console.log(response.data)        
            const products = response.data
            dispatch(getAllProducts(products))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

// delete product by id values
const deleteProduct = (id) => {
    return { type: 'DELETE_PRODUCT', payload: id }
}
export const startDeleteProduct = (id) => {
    // const token = localStorage.getItem('token')
    return (dispatch) => {
        axios.delete(`http://dct-billing-app.herokuapp.com/api/products/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }          
        })
        .then(response => {
            console.log(response.data)
            const result = response.data
            dispatch(deleteProduct(result))
        })
        .catch(err => alert(err))
    }
}
// edit product
const editProduct = (customerData) => {
    return { type: 'EDIT_CUSTOMER', payload: customerData }
}
export const startEditProduct = (customerDetails, id) => {
    // const token = localStorage.getItem('token')
    return (dispatch) => {
        axios.put(`http://dct-billing-app.herokuapp.com/api/products/${id}`, customerDetails, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data)
                const result = response.data
                dispatch(editProduct(result))
            })
            .catch(err => alert(err))
    }
}