import React from 'react'
import Cart from './Cart';

const CartPage = (props) => {
    const {onAdd,onRemove,cartItems}=props;
    const totalItems = cartItems.reduce((a, c) => a + c.qty , 0);
  return (
     <div>
        <Cart onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} />
        <div className='cart-page'>
        <p >Total Items</p>
        <p>{totalItems}</p>
        </div>
     </div>
  )
}

export default CartPage