import React from 'react'
import image from '../../images/shopping-bag.png'


const Card = (props) => {
    
  const {data, onAdd} = props;
   
  return (
    <div  className='cardsList'>
        {data?.map(card =>    
         {
          return card?.Popular === "TRUE" &&
           <div className='card'>
          <img  src={card?.Image} className=' img-grid'></img>
          <img  
          src= {card?.Vegan === 'TRUE' ? "https://img.icons8.com/color/512/vegetarian-food-symbol.png" : (card?.Vegan === 'FALSE' ? "https://img.icons8.com/color/512/non-vegetarian-food-symbol.png" :" ")} 
           className='veg-nonveg'></img>
          <div className=' item-name' style={{fontSize: card?.Name.length < 30 ? "14px" : "12px"}}>{card?.Name}</div>
          <div className='card-bottom'>
          <div className=' item-name card-price' >₹{card?.Price} </div>
          <div className='card-image' onClick={ () => onAdd(card) }>
            <img className='card-image-bag' src={image}></img>
          </div>
          </div>
           </div>

        })}
        
    </div>
  ) 
}



export { Card }
