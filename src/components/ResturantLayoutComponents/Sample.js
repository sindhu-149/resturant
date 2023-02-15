import React from 'react'
import Cart from './Cart';

const Sample = (props) => {
    const {onAdd,onRemove,cartItems}=props;
  return (
     <div >
        <Cart onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} />
        <h2>hekoooo</h2>
     </div>
  )
}

export default Sample
