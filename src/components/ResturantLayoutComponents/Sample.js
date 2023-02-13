import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Cart from './Cart';

const Sample = (props) => {
    const {onAdd,onRemove,cartItems}=props;
      const { id } = useParams();
  return (
    <div>
            {/* <Link to={`/restaurant/${id}`}>
             <p>back</p>
             </Link> */}
    {/* <div>Sample</div> */}
    <Cart onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} />
    </div>
  )
}

export default Sample


     {/* <img onClick={onClick} src='https://cdn-icons-png.flaticon.com/512/507/507257.png' style={{width:"30px",margin:"0px 0px 50px 0px "}}></img> */}