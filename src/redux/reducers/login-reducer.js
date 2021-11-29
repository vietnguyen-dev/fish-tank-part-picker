const defaultState = {
    login_status: false
}

const loginReducer = (state = defaultState, action) =>{
    switch (action.type) {
      case "LOGIN":
        return { login_status: true };
      case "LOGOUT":
        return { login_status: false };
      default:
        return state
    }
}

export default loginReducer