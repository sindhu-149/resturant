import React, { useState, useEffect } from 'react';
import  Cart from './Cart'

const SubCart = (props) => {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.Price, 0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [show, setShow] =useState("none")
    const [showTotal, setShowTotal] =useState("block")
   

    function handleClick(){
        if (show === "none") {
           setShow("block")
           setShowTotal("none")
            
        } else {
            
            setShow("none")
            setShowTotal("block")
        }
    }
    

    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  
    return (
        <div  className='cart' >
          {windowWidth < 680 ? 
          <div style={{position:"relative"}}>
          <div className='nope'>
             <div >
             <p className='cart-text'>Total Cost</p>
             <p className='cart-text cart-price'>{cartItems.length === 0 ? 0 : itemsPrice}  ₹</p>
             </div>
             <div >
             <button  onClick={handleClick} className='cart-button'>Go to cart</button>
             </div>
            </div> 
            <div className='cart-bottom'  style={{ display:show,
                             
                }} >
            <img onClick={handleClick} src='https://cdn-icons-png.flaticon.com/512/507/507257.png' style={{width:"30px",padding:"15px 10px"}}></img>
            <Cart onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} />
            </div>
          </div>
           
            :
            <Cart onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} />
          }
        </div>
      );

        }

export default SubCart