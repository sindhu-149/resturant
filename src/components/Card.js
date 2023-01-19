import React from 'react'
// import cards from "../mostPopular.json"
import cards from   '../WOTM_TheRedBox_Gajuwaka.json'  



const Card = (props) => {
    
    // const num = props.number
  return (
    <div  className='cardsList'>
        {cards.map(card =>
        
         {
          return card.Popular === "TRUE" &&
           <div className='card'>
          <img  src="https://vismaifood.com/storage/app/uploads/public/694/f84/3c2/thumb__700_0_0_0_auto.jpg" className=' img-grid'></img>
          <img  
          
          src= {card.Vegan === 'TRUE' ? "https://img.icons8.com/color/512/vegetarian-food-symbol.png" : (card.Vegan === 'FALSE' ? "https://img.icons8.com/color/512/non-vegetarian-food-symbol.png" :" ")} 
          
          
           className='veg-nonveg'></img>
          <div className=' item-name'>{card.Name}</div>
          <div className=' item-name'>Price: {card.Price}</div>
          
          </div>
          
         
        })}
        
    </div>
  ) 
}

const totalCards =cards.length

export { Card , totalCards}
