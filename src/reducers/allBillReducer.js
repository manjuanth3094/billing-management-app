const initialBill = []

export const allBillReducer = (state = initialBill, action) => {
  switch (action.type) {
    case "GET_ALLBILL": {
      return [...action.payload]
    }
    default: {
      return [...state]
    }
  }
}