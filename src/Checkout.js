import React, { useState } from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
const Checkout = () => {
    const [{basket}]=useStateValue();
    return (
        <div className="checkout">
        
             <img className="checkout__ad" src=" /images/checkout_ad.png" alt=" "></img>
             {basket?.length===0?(<div>
                 <h2>your basket is empty</h2>
             </div>
             ):(
             <div>
                 <h2>your shopping basket</h2>
                 
             </div>
             )}

        </div>
    )
} 

export default Checkout
