import React from 'react'
import {useStateValue} from './StateProvider.js'
const CheckoutProduct = ({id,title,image,price,rating}) => {
    const [{basket},dispatch]=useStateValue();
    return (
        <div className="checkoutProduct">
            <img/>
            <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">
            {title}
            </p>
            <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
            </p>
            </div>
            <div className="checkoutProduct__rating">
            {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
            </div>
            <button onClick={RemoveFromBasket}></button>
        </div>
    )
}

export default CheckoutProduct
