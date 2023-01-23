import React from 'react'

const Cart = (props) => {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.Price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div  className='cart' style={{backgroundColor:"white"}} >Cart
    <div>
    {cartItems.length === 0 && <div>Cart is empty</div>}
    {cartItems.map((item) => (
         <div className='cart-list'> 

                <div 
                    style={{
                    textAlign:"start",
                    padding:"0px",
                    border:"6px solid pink"
                    }}       
                  className='menu-card'>

                     
                  <img  style={{border:"0px solid orange", padding:"5px"}}
          
                     src= {item.Vegan === 'TRUE' ? "https://img.icons8.com/color/512/vegetarian-food-symbol.png" : (item.Vegan === 'FALSE' ? "https://img.icons8.com/color/512/non-vegetarian-food-symbol.png" :" ")} 
                  className='veg-nonveg'></img>

                      <div style={{border:"0px solid red"  ,padding:"0px 5px 15px 20px", fontWeight:"bold"}}>{item.Name}</div>
                      <div style={{border:"0px solid yellow", padding:"0px 5px 15px 20px"}} >hello this is the item u have ordered</div>
                      <div style={{border:"0px solid pink", padding:"0px 5px 15px 20px"}} >{item.Price}</div>

                </div>

                {/* <div  className='menu-card'>
                    <img  className=' menu-card-image '  src="https://thissillygirlskitchen.com/wp-content/uploads/2020/02/homemade-french-fries-8-1.jpg" alt="biryani"></img>
                </div> */}


                <div  className='menu-card' 
                style={{
                    textAlign:"start",
                    paddingTop:"5px",
                    // border:"6px solid yellow"
                    }}  
                >
                  {item.qty * item.Price.toFixed(2)}
                </div>
                
                <div  className='menu-card' 
               style={{
                    textAlign:"start",
                    margin:"auto",
                    padding:"0",
                    // border:"6px solid green"
                    }}  
                >
            
            <div  className='menu-card' 
             style={{
                    textAlign:"center",
                    border:"3px solid black",
                    // backgroundColor:"yellow"
                    marginRight:"-18px",
                    // marginaLeft:"300px"
                    
                    }} 
            >
              <div>
              <button style={{border:"none" ,fontSize:"20px"}} onClick={() => onRemove(item)} > - </button>
              </div>  
               {item.qty}
              <div>
              <button style={{border:"none" , fontSize:"20px"}} onClick={() => onAdd(item)} className="add"> + </button>
              </div>
             
            </div>

            
               </div>




         </div>
       
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div
             style={{display: "flex",
             
             justifyContent:"space-between",
            
             marginBottom:"10px"
             }}
             >
              <div  >Items Price</div>
              <div >{itemsPrice.toFixed(2)}</div>
            </div>
            <div  style={{display: "flex",
            
             justifyContent:"space-between",
             marginBottom:"10px"
             }}>
              <div >Tax Price</div>
              <div >{taxPrice.toFixed(2)}</div>
            </div>
            <div  style={{display: "flex",
          
             justifyContent:"space-between",
             marginBottom:"10px"
             }}>
              <div >Shipping Price</div>
              <div >
                {shippingPrice.toFixed(2)}
              </div>
            </div>

            <div  style={{display: "flex",
           
             justifyContent:"space-between",
             marginBottom:"10px"
             }}>
              <div >
                <strong>Total Price</strong>
              </div>
              <div >
                <strong>{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div style={{textAlign:"center"}}>
              <button  onClick={() => alert('Implement Checkout!')}>
                Proceed to pay
              </button>
            </div>
          </>
        )}
     


    </div>
    </div>
    
  )
}

export default Cart

  {/* <div >
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div>
              {item.qty} x ${item.Price}
            </div> */}