import React from 'react'
const cards =[1,2,3,4,5]
const MenuCards = (props) => {
    
    const num = props.number
  return (
    <div className='cardsList'>
        {cards.slice(0,num).map(card =>
         (<h1 className='card'>{card}</h1>
         ))}
        
    </div>
  )
}

const totalCards =MenuCards.length

export default MenuCards