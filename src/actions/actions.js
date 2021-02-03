import axios from 'axios'

const token = localStorage.getItem('token')

// //login
// export const loginStatus = () => {
//     return { type: 'TOGGLE-STATE'}
// }

//Add product
// const addProduct = (product) => {
//     return { type: 'ADD-PRODUCT', payload: product }
// }
// export const startAddProduct = (product) => {
//     // const token = localStorage.getItem('token')
//     return (dispatch) => {
//         axios.post('http://dct-billing-app.herokuapp.com/api/products', product, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then(response => {
//             const result = response.data
//             dispatch(addProduct(result))
//         })
//         .catch(error => alert(error.message))
//     }
// }

// // get all products 
// const getAllProducts = (products) => {
//     return {
//         type: 'GET_ALL_PRODUCTS',
//         payload: products
//     }
// }
// export const startGetAllProducts = () => {
//     // const token = localStorage.getItem('token')
//     return (dispatch) => {
//         axios.get('http://dct-billing-app.herokuapp.com/api/products', {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then((response) =>{
//             //console.log(response.data)        
//             const products = response.data
//             dispatch(getAllProducts(products))
//         })
//         .catch((err) => {
//             alert(err.message)
//         })
//     }
// }

// // delete product by id values
// const deleteProduct = (id) => {
//     return { type: 'DELETE_PRODUCT', payload: id }
// }
// export const startDeleteProduct = (id) => {
//     // const token = localStorage.getItem('token')
//     return (dispatch) => {
//         axios.delete(`http://dct-billing-app.herokuapp.com/api/products/${id}`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }          
//         })
//         .then(response => {
//             console.log(response.data)
//             const result = response.data
//             dispatch(deleteProduct(result))
//         })
//         .catch(err => alert(err))
//     }
// }
// // edit product
// const editProduct = (customerData) => {
//     return { type: 'EDIT_CUSTOMER', payload: customerData }
// }
// export const startEditProduct = (customerDetails, id) => {
//     // const token = localStorage.getItem('token')
//     return (dispatch) => {
//         axios.put(`http://dct-billing-app.herokuapp.com/api/products/${id}`, customerDetails, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//             .then(response => {
//                 console.log(response.data)
//                 const result = response.data
//                 dispatch(editProduct(result))
//             })
//             .catch(err => alert(err))
//     }
// }

// //Add Customer
// const addCustomer = (customer) => {
//     return { type: 'ADD-CUSTOMER', payload: customer }
// }

// export const startAddCustomer = (customer) => {
//     // const token = localStorage.getItem('token')
//     return (dispatch) => {
//         axios.post('http://dct-billing-app.herokuapp.com/api/customers', customer, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then(response => {
//             const result = response.data
//             dispatch(addCustomer(result))
//         })
//         .catch(error => alert(error.message))
//     }
// }
// // Delete customer
// const deleteCustomer = (id) => {
//     return { type: 'DELETE_CUSTOMER', payload: id }
// }
// export const startDeleteCustomer = (id) => {
//     // const token = localStorage.getItem('token')
//     return (dispatch) => {
//         axios.delete(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//             .then(response => {
//                 console.log(response.data)
//                 const result = response.data
//                 dispatch(deleteCustomer(result))
//             })
//             .catch(err => alert(err))
//     }
// }
// // edit customer
// const editCustomer = (customerData) => {
//     return { type: 'EDIT_CUSTOMER', payload: customerData }
// }
// export const startEditCustomer = (customerData, id) => {
//     // const token = localStorage.getItem('token')
//     return (dispatch) => {
//         axios.put(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, customerData, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//             .then(response => {
//                 console.log(response.data)
//                 const result = response.data
//                 dispatch(editCustomer(result))
//             })
//             .catch(err => alert(err))
//     }
// }
// // get all customers 
// const getAllCustomers = (products) => {
//     return {
//         type: 'GET_ALL_CUSTOMERS',
//         payload: products
//     }
// }
// export const startGetAllCustomers = () => {
//     // const token = localStorage.getItem('token')
//     return (dispatch) => {
//         axios.get('http://dct-billing-app.herokuapp.com/api/customers', {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then((response) =>{
//             //console.log(response.data)        
//             const products = response.data
//             dispatch(getAllCustomers(products))
//         })
//         .catch((err) => {
//             alert(err.message)
//         })
//     }
// }
