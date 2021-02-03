import axios from "axios"

// Add lineItems
export const addLineItems = (data) => {
  return { type: "ADD_LINEITEMS", payload: data }
}

//Remove lineItems
export const removeLineItems = (id) => {
  return { type: "REMOVE_LINEITEMS", payload: id }
}

// empty lineItems
export const emptyLineItems = () => {
  return { type: "EMPTY_LINEITEMS" }
}

// create a Bill
const addBill = (data) => {
  return { type: "ADD_BILL", payload: data }
}
export const startCreateBill = (data) => {
  return (dispatch) => {
    axios
      .post("http://dct-billing-app.herokuapp.com/api/bills", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const result = response.data
        dispatch(addBill(result))
        dispatch(emptyLineItems())
      })
      .catch((err) => alert(err.message))
  }
}

// Get All Bill
const addAllBills = (data) => {
  return { type: "GET_ALLBILL", payload: data }
}
export const startGetAllBills = () => {
  return (dispatch) => {
    axios
      .get("http://dct-billing-app.herokuapp.com/api/bills", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const result = response.data
        dispatch(addAllBills(result))
      })
      .catch((err) => alert(err.message))
  }
}