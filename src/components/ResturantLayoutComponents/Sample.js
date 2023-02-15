import React from 'react'
import Cart from './Cart';

const Sample = (props) => {
    const {onAdd,onRemove,cartItems}=props;
  return (
     <div >
        <Cart onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} />
     </div>
  )
}

export default Sample
