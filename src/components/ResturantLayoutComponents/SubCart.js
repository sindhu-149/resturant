import React, { useState, useEffect } from 'react';
import  Cart from './Cart'

const SubCart = (props) => {
    const {cartItems, onAdd, onRemove} = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.Price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

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
        <div  className='cart' style={{backgroundColor:"white"}}>
          {windowWidth < 600 ? 
          <div onClick={handleClick} style={{position:"relative"}}>
          <div style={{ padding:"10px",border:"0px solid green",display:showTotal}}>
             <p style={{margin:"0px 0px 8px 0px" ,fontWeight:"bold"}}>Total Cost</p>
               <p style={{margin:"0",}}>{cartItems.length === 0 ? 0 : totalPrice}</p>
            </div> 
            <div style={{
                
                display:show,
                backgroundColor:"white",
                width:"100%",
            //    paddingBottom:"500px",
                margin:"0",
                position: "absolute",
                 bottom: "0px",
                 
                }}>
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