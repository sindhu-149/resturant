import React from 'react'

const Cart = (props) => { 

    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.Price, 0);
    
  return (
    <div className='sub-cart'>
     <div className='sub-cart-conatiner'>
     <img  className='sub-cart-image' src='https://cdn-icons-png.flaticon.com/512/2662/2662503.png' ></img>
     <h1 className='sub-cart-text'>Cart</h1>
    </div>  
    <div className='empty'>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
    <div className='cart-cards'>
    {cartItems.map((item) => (
         <div  key={item.id} className='cart-list'> 
                <div className='menu-card'>
                  <img src= {item.Vegan === 'TRUE' ? "https://img.icons8.com/color/512/vegetarian-food-symbol.png" : (item.Vegan === 'FALSE' ? "https://img.icons8.com/color/512/non-vegetarian-food-symbol.png" :" ")} 
                  className='veg-nonveg'></img>
                      <div className='sub-cart-menu-text cart-text'>{item.Name}</div>
                      <div className='sub-cart-menu-text'>{item.Description}</div>
                      <div className='sub-cart-menu-text number'> ₹ {item.Price}</div>
                </div>
                <div  className='menu-card total-price number'>
                  {item.qty * item.Price.toFixed(2)}
                </div>
                <div  className='menu-card menu-image' 
                > 
            <div  className='menu-card quantity'>
              <div>
              <button className='quantity-btn' onClick={() => onRemove(item)} > - </button>
              </div>  
              <span >{item.qty}</span> 
              <div>
              <button className='quantity-btn ' onClick={() => onAdd(item)} > + </button>
              </div>
             
            </div>
               </div>
         </div> 
        ))} 
        {cartItems.length !== 0 && (
          <div className='payment'>
             <div  className='payment-text'>
            <div >Total Price</div>
             <div className='number' >{itemsPrice.toFixed(2)}</div>
           </div>
            <div >
              <button  onClick={() => alert(' Checkout!')}
              className='payment-btn'
              >
                Proceed to pay
              </button>
            </div>
          </div>
        )}    
</div>
    </div>
  )
}

export default Cart