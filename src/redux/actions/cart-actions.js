const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (item, amount) =>{
    return {
        type: ADD_TO_CART,
        payload: {...item, amount: amount}
    }
}

export const removeFromCart = item =>{
    return{
        type: REMOVE_FROM_CART,
        payload: item
    }
}