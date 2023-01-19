import React from 'react'

const menuItems =[
  {
    "type":"https://img.icons8.com/color/512/vegetarian-food-symbol.png",
    "name":"pizza",
    "discription":"this is combination of onion and chicken this is combination of onion and chicken ",
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
  ,
  {
    "type":"https://img.icons8.com/color/512/vegetarian-food-symbol.png",
    "name":"pizza",
    "discription":"this is combination of onion and chicken",
    "prize":"$350",
    "image":"",
  },
]

const item = [ "Pizza", "Burger", "Sandwitch", "Noodels", "French fries", "Biryani","chicken"]

const MenuCards = (props) => {
 
  return (
   



<div className='menu-items-container'>

{menuItems.map(item =>(
  <div  className='menu-list'>

    <div 
      style={{
        textAlign:"start",
        // border:"4px solid black",
        padding:"0px"
       }} 
      className='menu-card'>

          <img style={{border:"0px solid orange", padding:"5px"}} className='veg-nonveg ' src={item.type}></img>
          <div style={{border:"0px solid red"  ,padding:"0px 5px 15px 20px", fontWeight:"bold"}}>{item.name}</div>
          <div style={{border:"0px solid yellow", padding:"0px 5px 15px 20px"}} >{item.discription}</div>
          <div style={{border:"0px solid pink", padding:"0px 5px 15px 20px"}} >{item.prize}</div>

      {/* <div 
      className='menu-card-text'>
          <img className='veg-nonveg g' src={item.type}></img>
          <div className="g">{item.name}</div>
          <div className="g">{item.discription}</div>
          <div className="g">{item.prize}</div>
      </div> */}
    </div>
  <div 
  style={{
    // width:"80px",
  //  backgroundColor:"orange"
   }}
  className='menu-card'>
  
        <img  className=' menu-card-image '  src={item.image} alt="image"></img>

  </div>
  <div 
  style={{
  
  position:"relative",
     }}
  className='menu-card'>
  <img  
         style = {{
           width:"35px",
           position:"absolute",
           top:"50%",
           left:"50%",
           transform:"translate(-50%, -50%)",
           marginLeft:"15px",
           padding:"6px",
           borderRadius:"10px",
           border:"3px solid black"
         
         }}
        src='https://cdn-icons-png.flaticon.com/128/1656/1656850.png'></img>
  </div>
  </div>
))}

</div>
 
  



  )
 
}

const totalCards = MenuCards.length

export default MenuCards