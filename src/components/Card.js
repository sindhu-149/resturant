import React from 'react'

// import cards from   '../WOTM_TheRedBox_Gajuwaka.json'  

// import {Link} from 'react-router-dom'

import image from '../images/shopping-bag.png'


const Card = (props) => {
    const {data, onAdd} = props;
    const totalCards =data.length
  return (
    <div  className='cardsList'>
        {data.map(card =>
        
         {
          return card.Popular === "TRUE" &&
           <div className='card' style={{cursor:"pointer"}}>
          <img  src="https://vismaifood.com/storage/app/uploads/public/694/f84/3c2/thumb__700_0_0_0_auto.jpg" className=' img-grid'></img>
          <img  
          
          src= {card.Vegan === 'TRUE' ? "https://img.icons8.com/color/512/vegetarian-food-symbol.png" : (card.Vegan === 'FALSE' ? "https://img.icons8.com/color/512/non-vegetarian-food-symbol.png" :" ")} 
          
          
           className='veg-nonveg'></img>
          <div className=' item-name' style={{fontWeight:"bold",fontSize:"14px" ,height:"40px",padding:"3px 0px 10px 8px"}}>{card.Name}</div>
          <div  style={{ display:"flex"}}>
          <div className=' item-name' style={{fontWeight:"bold"}}>₹{card.Price} </div>
          <div
           style={{  border:"0px solid  #E5E0FF",width:"110px", textAlign:"end" ,marginTop:"-10px"}}
           onClick={ () => onAdd(card) }>
            <img   
            style={{ width:"26px",border:"0px solid  #7B8FA1", backgroundColor:"#FFC93C",padding:" 3px",borderRadius:"35%"}}
            src={image}></img>
          </div>
          </div>
          {/* <div className='menu-card' 

          style={{ border:"0px solid red",position:"relative"}}
          onClick={ () =>
          onAdd(card) }
          >
          <Link to={`resturant/${card.id}`} >



          <img  
           className='menucard-image'

           style={{
            backgroundColor:"#FFC93C",
           //  fontWeight:"5000px"
  
             }} 
   
           src='https://cdn-icons-png.flaticon.com/512/2662/2662503.png' 
            //  src={images}
           ></img>

           </Link>
          </div> */}

          
          </div>
          
         
        })}
        
    </div>
  ) 
}



export { Card }
