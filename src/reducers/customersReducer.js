const intialStateValue = []

const customersReducer = (state= intialStateValue, action) => {
    switch (action.type) {
        case 'ADD-CUSTOMER': return [...state, action.payload]
        case 'GET_ALL_CUSTOMERS': return [...action.payload]       
        case 'DELETE_CUSTOMER': return state.filter(customer => {
            // console.log(action.payload._id)            
           return customer._id !== action.payload._id
        })
        case 'EDIT_CUSTOMER': {
            return state.map(customer => {
                if(customer._id === action.payload._id) {
                    return {...customer, ...action.payload }
                } else {
                    return { ...customer }
                }
            })
        }      
        default: return state        
    }
}
export default customersReducer