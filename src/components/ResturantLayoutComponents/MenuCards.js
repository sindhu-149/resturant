import React, { useState, useEffect }  from 'react'
import images from '../../images/shopping-bag.png'

const MenuCards = (props) => {

  const {data, onAdd} = props;

  return (

<div className='menu-items-container'>
       {data.map(a =>(
        <div>

         {props.name === a.Category &&
          <div  key={a.id} className='menu-list'>
                <div  className='menu-card'>     
                  <img 
                   src= {a.Vegan === 'TRUE' ? "https://img.icons8.com/color/512/vegetarian-food-symbol.png" : (a.Vegan === 'FALSE' ? "https://img.icons8.com/color/512/non-vegetarian-food-symbol.png" :" ")} 
                  className='veg-nonveg'></img>
                      <p style={{fontSize: a.Name.length < 30 ? "17px" : "15px"}} className='menu-card-name'>{a.Name}</p>
                      <p className='menu-card-des menu-card-name'>hello this is the item u have ordered</p>
                      <p className='menu-price'>₹ {a.Price}</p></div>

                <div  className='menu-card menu-image' >
                    {a.Image &&
                      <img  className=' menu-card-image '  src={a.Image} alt="dish image"></img>
                    }
                </div>
                <div className='menu-card' style={{ position:"relative"}}  onClick={ () =>onAdd(a) } >
                 <img className='menucard-image' style={{ backgroundColor:"#FFC93C" }}  src={images}></img>
               </div>
            </div>           
          } 
        </div>
       ))}     
</div>
 
 )}



export default MenuCards