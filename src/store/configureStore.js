import { createStore, combineReducers, applyMiddleware } from 'redux'
import userReducer from '../reducers/userReducer'
import thunk from 'redux-thunk'
import productsReducer from '../reducers/productsReducer'
import costomersReducer from '../reducers/customersReducer'
import { allBillReducer } from "../reducers/allBillReducer";
import { currentBillReducer } from "../reducers/currentBillReducer";
import { lineItems } from "../reducers/lineItemReducer";

const configureStore = () => {
    const store = createStore(combineReducers({ 
        user: userReducer,
        products: productsReducer,
        customers: costomersReducer,
        lineItem: lineItems,
        allBill: allBillReducer,
        currentBill: currentBillReducer
    }), applyMiddleware(thunk))
    return store
}
 export default configureStore