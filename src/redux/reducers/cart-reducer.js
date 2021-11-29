const defaultState = {
    cart: []
}

const cartReducer = (state = defaultState, action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
            let inCart = state.cart.find(item => item.id === action.payload.id)
            
            if (!inCart){
                return { cart: [...state.cart, { ...action.payload }] };
            } else{
                // inCart.amount = inCart.amount + 1
                // return { cart: [...state.cart, {...inCart}] }
            }
        default: 
            return state
    }
}

export default cartReducer