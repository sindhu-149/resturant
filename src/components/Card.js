import React from 'react'
import cards from "../mostPopular.json"

const Card = (props) => {
    
    const num = props.number
  return (
    <div  className='cardsList'>
        {cards.slice(0,num).map(card =>
         (
          /* <h1   className='card'>{card}</h1> */
          <div className='card'>
          <img  src={card.image} className='grid-items img-grid'></img>
          <img  src={card.type} className='grid-items veg-nonveg'></img>
          <div className='grid-items item-name'>{card.name}</div>
          
          </div>
         ))}
        
    </div>
  ) 
}

const totalCards =cards.length

export { Card , totalCards}
