import React from 'react'

const menuItems =[
  {
    "type":"https://img.icons8.com/color/512/vegetarian-food-symbol.png",
    "name":"pizza",
    "discription":"this is combination of onion and chicken",
    "prize":"$350",
    "image":"https://thissillygirlskitchen.com/wp-content/uploads/2020/02/homemade-french-fries-8-1.jpg",
  },
  {
    "type":"https://img.icons8.com/color/512/vegetarian-food-symbol.png",
    "name":"pizza",
    "discription":"this is combination of onion and chicken",
    "prize":"$350",
    "image":"https://thissillygirlskitchen.com/wp-content/uploads/2020/02/homemade-french-fries-8-1.jpg",
  },
  {
    "type":"https://img.icons8.com/color/512/vegetarian-food-symbol.png",
    "name":"pizza",
    "discription":"this is combination of onion and chicken",
    "prize":"$350",
    "image":"https://thissillygirlskitchen.com/wp-content/uploads/2020/02/homemade-french-fries-8-1.jpg",
  },
]

const itemsList = [ "Pizza", "Burger", "Sandwitch", "Noodels", "French fries", "Biryani"]

const MenuCards = (props) => {
 
  return (
   
    <div className='menu-card-list'>
    {menuItems.map(item =>(
      <div className='menu-card'>
        <div className='menu-grid-items '>
          <img  className='veg-nonveg' src={item.type}></img>
          <h3 className='menu-text'>{item.name}</h3>
          <p className='menu-text'>{item.discription}</p>
          <h4 className='menu-text'>{item.prize}</h4>
        </div>
        <div className='menu-grid-items '>
        <img   style = {{borderRadius:"50px"}} className=' menu-grid-item-image' src={item.image}></img>
      </div>
      </div>
    ))}
     
</div>


  )
 
}

const totalCards = MenuCards.length

export default MenuCards