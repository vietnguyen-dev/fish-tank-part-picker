import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions/cart-actions'

const ItemListing = (props) => {
    const dispatch = useDispatch()


    const addItem = () =>{
        dispatch(addToCart(props, 1))
    }

    return (
      <div className="item-list">
        <img
          src={process.env.PUBLIC_URL + `/img/${props.img}`}
          alt={props.name}
        />
        <h4>{props.name}</h4>
        <p>$ {props.price}</p>
        <p>{props.dimensions}</p>
        <p>{props.rating}</p>
        <button onClick={addItem} className="add-to-cart">
          ADD
        </button>
      </div>
    );
}

export default ItemListing
