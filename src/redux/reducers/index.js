import { combineReducers } from "redux";

import cartReducer from "./cart-reducer";
import loginReducer from "./login-reducer";

const rootReducer = combineReducers(
    {
        login: loginReducer,
        cart: cartReducer
    }
)

export default rootReducer