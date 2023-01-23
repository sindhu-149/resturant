import React, { useState, useEffect }  from 'react'


import {Link} from 'react-router-dom'




const MenuCards = (props) => {

  const {data, onAdd} = props;



  return (

<div className='menu-items-container'>
       {data.map(a =>(
        <div>

         {props.name === a.Category &&
          <div  key={a.id} className='menu-list'>

                <div 
                    style={{
                    textAlign:"start",
                    padding:"0px"
                    }} 
                  className='menu-card'>

                     
                  <img  style={{border:"0px solid orange", padding:"5px"}}
          
                     src= {a.Vegan === 'TRUE' ? "https://img.icons8.com/color/512/vegetarian-food-symbol.png" : (a.Vegan === 'FALSE' ? "https://img.icons8.com/color/512/non-vegetarian-food-symbol.png" :" ")} 
                  className='veg-nonveg'></img>

                      <div style={{border:"0px solid red"  ,padding:"0px 5px 15px 20px", fontWeight:"bold"}}>{a.Name}</div>
                      <div style={{border:"0px solid yellow", padding:"0px 5px 15px 20px"}} >hello this is the item u have ordered</div>
                      <div style={{border:"0px solid pink", padding:"0px 5px 15px 20px"}} >{a.Price}</div>

                </div>

                <div  className='menu-card'>
                    <img  className=' menu-card-image '  src="https://thissillygirlskitchen.com/wp-content/uploads/2020/02/homemade-french-fries-8-1.jpg" alt="biryani"></img>
                </div>
                
                <Link to={`/${a.id}`} >
                
                <div style={{ position:"relative" }} className='menu-card' 
                onClick={ () =>
                onAdd(a) }
                >
            
                 <img  
                  className='menucard-image'
                   
                  src='https://cdn-icons-png.flaticon.com/128/1656/1656850.png' ></img>
               </div>
               </Link>

            </div>
            
          } 

        </div>
       ))}     
       

</div>
 
 )}



export default MenuCards