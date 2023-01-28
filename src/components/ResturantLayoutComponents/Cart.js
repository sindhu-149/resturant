import React from 'react'
// import { Link, useParams } from 'react-router-dom';

const Cart = (props) => {
    // console.log(useParams());
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.Price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div  style={{
      //  height:"30px"
      // backgroundColor:"pink",
      borderRadius:"20px 20px 0px 0px"
      
      // padding:"18px 0px 0px 18px",
     
      
      }}>
    {/* // <div  className='cart' style={{backgroundColor:"white"}} > */}
     <div style={{
      
      // backgroundColor:"white"
      
      padding:"18px 0px 0px 18px",
     
      
      }}>
     <img  
                  // className='menucard-image'
                  style={{
                    width:"30px",
                    height:"30px"
                    // display:"inline"
                    }} 
                   
                  src='https://cdn-icons-png.flaticon.com/512/2662/2662503.png' ></img>

   
   
     <h1  style={{
                    // width:"30px",
                    paddingLeft:"5px",
                    display:"inline",
                   
                    }} >Cart</h1>
    </div>
    
    <div style={{
                    // width:"30px",
                    padding:"15px 25px",
         
                   
                    }}>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
    <div 
    
       style={{
        border:"0px solid pink",
        padding:"18px",
       
                    }}
    >
    {cartItems.map((item) => (
         <div  key={item.id} className='cart-list' style={{border:"0px solid pink", }}> 

                <div 
                    style={{
                    textAlign:"start",
                    padding:"0px",
                    // border:"6px solid pink"
                   
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
                    padding:"50px 18px 0px 0px",
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
                    border:"0px solid lightgrey",
                    backgroundColor:"#FFC93C",
                    marginRight:"-10px",
                    borderRadius:"5px",
                    padding:"6px"
                    // marginaLeft:"300px"
                    
                    }} 
            >
              <div>
              <button style={{border:"none" ,fontSize:"20px",backgroundColor:"#FFC93C",}} onClick={() => onRemove(item)} > - </button>
              </div>  
              <span >{item.qty}</span> 
              <div>
              <button style={{border:"none" , fontSize:"20px",backgroundColor:"#FFC93C",}} onClick={() => onAdd(item)} className="add"> + </button>
              </div>
             
            </div>

            
               </div>




         </div>
       
        ))}
       
        
        {cartItems.length !== 0 && (
          <div style={{ marginTop:"40px"}}>
         
            {/* <hr></hr> */}
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
            <hr />
            <div  style={{display: "flex",
           
             justifyContent:"end",
             marginBottom:"10px"
             }}>
              {/* <div >
                <strong>Total Price</strong>
              </div> */}
              <div >
                <strong>{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
           
            <div style={{textAlign:"center"}}>
              <button  onClick={() => alert('Implement Checkout!')}
              style={{border:"0px solid deeppink",width:"270px",textAlign:"center",padding:"10px 7px",backgroundColor:"#FFC93C",borderRadius:"30px"}}
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