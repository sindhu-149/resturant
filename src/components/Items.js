import React from 'react'



const Items = () => {
  const itemsList = ["All", "Pizza", "Burger", "Sandwitch", "Noodels", "French fries", "Biryani"]

  return (
    <div className='itemsList'>
        {itemsList.map(name =>(
            <button className='item'>{name}</button>
        ))}
    </div>
  );

}  



export default Items

