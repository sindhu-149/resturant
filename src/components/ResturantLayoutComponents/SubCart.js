import React, { useState, useEffect } from 'react';
import  Cart from './Cart'

const SubCart = (props) => {
    const {cartItems, onAdd, onRemove} = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.Price, 0);
    // const taxPrice = itemsPrice * 0.14;
    // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    // const totalPrice = itemsPrice + taxPrice + shippingPrice;

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
        <div  className='cart' style={{marginTop:"20px",
        // position:"absolute"
        }} >
          {windowWidth < 680 ? 
          <div style={{position:"relative"}}>
          <div style={{ padding:"10px",border:"0px solid green",
          // display:showTotal
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-between"
          }}>
             <div style={{border:"0px solid black"}}>
             <p   style={{margin:"0px 0px 8px 0px" ,fontWeight:"bold"}}>Total Cost</p>
             <p style={{margin:"0",fontSize:"22px",fontWeight:"bold",color:"#434242"}}>{cartItems.length === 0 ? 0 : itemsPrice}  ₹</p>
             </div>
             <div style={{border:"0px solid black"}}>
             <button  onClick={handleClick} style={{ fontSize:"20px",borderRadius:"30px",margin:"10px",fontWeight:"bolder",color:"white",backgroundColor:"#FFC93C",border:"none",padding:"10px 40px"}}>Go to cart</button>
             </div>
            </div> 
            <div style={{
                
                display:show,
                backgroundColor:"white",
                width:"100%",
            //    paddingBottom:"500px",
                margin:"0",
                position: "absolute",
                 bottom: "0px",
                 height:"600px",
                 overflow:"auto"
                 
                }} >
            <img onClick={handleClick} src='https://cdn-icons-png.flaticon.com/512/507/507257.png' style={{width:"30px",padding:"15px 10px"}}></img>
            <Cart onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} />
            {/* <Cart /> */}
            </div>
          </div>
           
            :
            <Cart onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} />
          }
        </div>
      );

        }

export default SubCart