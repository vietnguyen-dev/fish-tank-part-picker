import React from 'react'

const ItemListing = ({name, img, price, dimensions, rating}) => {
    return (
        <div className='item-list'>
            <img src={process.env.PUBLIC_URL + `/img/${img}`} alt={name}/>
            <h4>{name}</h4>
            <p>$ {price}</p>
            <p>{dimensions}</p>
            <p>{rating}</p>
            <button className='add-to-cart'>ADD</button>
        </div>
    )
}

export default ItemListing
