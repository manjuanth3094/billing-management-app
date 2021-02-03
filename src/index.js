import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter  } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import App from './components/App';
import configureStore from './store/configureStore'
import {loginStatus} from './actions/userAction'
import {startGetAllCustomers} from './actions/customerActions'
import {startGetAllProducts} from './actions/productActions'
import {startGetAllBills} from './actions/billAction'


const store = configureStore()
console.log(store.getState())

store.subscribe(() => {
  console.log(store.getState())
})

if(localStorage.getItem('token')) {
  store.dispatch(loginStatus())
  store.dispatch(startGetAllProducts())
  store.dispatch(startGetAllCustomers())
  store.dispatch(startGetAllBills())
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);


