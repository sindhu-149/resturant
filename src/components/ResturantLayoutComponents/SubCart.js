import React, { useState, useEffect} from 'react';
import  Cart from './Cart'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const SubCart = (props) => {

    const {cartItems, onAdd, onRemove} = props;
    const totalItems = cartItems.reduce((a, c) => a + c.qty , 0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [show, setShow] =useState("none")
    const { id } = useParams();    

    function handleClick(){ 
        if (show === "none") {
           setShow("block")            
        } else {            
            setShow("none")
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
            {windowWidth < 680 
            ?  
                <div >
                    <div className='nope' >
                        <div >
                            <p className='cart-text'>Total Items</p>
                            <p className='cart-text cart-price'>{cartItems.length === 0 ? 0 : totalItems} </p>
                        </div>
                        <div>
                            <Link to={`/restaurant/${id}/cart`}>
                                <button  onClick={handleClick} className='cart-button'>Go to cart</button>
                            </Link>
                        </div>
                    </div> 
                    <div className='cart-bottom'  style={{ display:show}} >
                        <Cart onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} onClick={handleClick}/>
                    </div>
                </div>           
            :
                <Cart onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} />
            }
        </div>
      );
}

export default SubCart