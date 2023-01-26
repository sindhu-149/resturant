import React from 'react'

// import cards from   '../WOTM_TheRedBox_Gajuwaka.json'  

import {Link} from 'react-router-dom'



const Card = (props) => {
    const {data, onAdd} = props;
    const totalCards =data.length
  return (
    <div  className='cardsList'>
        {data.map(card =>
        
         {
          return card.Popular === "TRUE" &&
           <div className='card'>
          <img  src="https://vismaifood.com/storage/app/uploads/public/694/f84/3c2/thumb__700_0_0_0_auto.jpg" className=' img-grid'></img>
          <img  
          
          src= {card.Vegan === 'TRUE' ? "https://img.icons8.com/color/512/vegetarian-food-symbol.png" : (card.Vegan === 'FALSE' ? "https://img.icons8.com/color/512/non-vegetarian-food-symbol.png" :" ")} 
          
          
           className='veg-nonveg'></img>
          <div className=' item-name'>{card.Name}</div>
          <div  style={{ display:"flex"}}>
          <div className=' item-name'>Price: {card.Price}</div>
          <div
           style={{ border:"0px solid  #E5E0FF" ,boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.5)", backgroundColor:"white",margin:"auto",padding:"5px 7px",borderRadius:"50%"}}
           onClick={ () => onAdd(card) }>
            <img   
            style={{ width:"30px"}}
            src='https://cdn-icons-png.flaticon.com/512/2662/2662503.png'></img>
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
