import React from 'react'
const cards =[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
const Card = (props) => {
    
    const num = props.number
  return (
    <div className='cardsList'>
        {cards.slice(0,num).map(card =>
         (<h1 className='card'>{card}</h1>
         ))}
        
    </div>
  )
}

const totalCards =cards.length

export { Card , totalCards}
