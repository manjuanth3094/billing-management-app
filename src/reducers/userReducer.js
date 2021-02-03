const intialUserState = false

const userReducer = (state = intialUserState, action) => {
    switch(action.type) {
        case 'TOGGLE-STATE' : {
            return !state
        }
        default : {
            return state
        }
    }
}

export default userReducer
