const intialStateValue = []

const productsReducer = (state= intialStateValue, action) => {
    switch (action.type) {
        case 'ADD-PRODUCT': return [...state, action.payload]
        case 'GET_ALL_PRODUCTS': return [...action.payload]
        case 'DELETE_PRODUCT': return state.filter(product => {
            return product._id !== action.payload._id
        })
        case 'EDIT_CUSTOMER': {
            return state.map(product => {
                if(product._id !== action.payload._id) {
                    return{ ...product, ...action.payload }
                } else {
                    return { ...product }
                }
            })
        }
        default: return state        
    }
}
export default productsReducer