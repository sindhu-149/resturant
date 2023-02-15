import React, { useState, useEffect }  from 'react'
import images from '../../images/shopping-bag.png'

const MenuCards = (props) => {
  
  const {data, onAdd, onRemove,cartItems} = props;
  return (
      <div className='menu-items-container'>
          {data.map(a =>(
              <div>
                  {props.name === a.Category &&
                      <div key={a.id} className='menu-list'>
                          <div className='menu-card'>     
                              <img src= {a.Vegan === 'TRUE' ? "https://img.icons8.com/color/512/vegetarian-food-symbol.png" : (a.Vegan === 'FALSE' ? "https://img.icons8.com/color/512/non-vegetarian-food-symbol.png" :" ")} className='veg-nonveg'></img>
                              <p style={{fontSize: a.Name.length < 20 ? "16px" : "14px"}} className='menu-card-name'>{a.Name}</p>
                              <p style={{fontSize: a.Name.length < 40 ? "14px" : "12px"}} className='menu-card-des menu-card-name'>{a.Description}</p>
                              <p className='menu-price'>₹ {a.Price}</p>
                          </div>
                          <div  className='menu-card menu-image' >
                              {a.Image &&
                                 <img  className=' menu-card-image '  src={a.Image} alt="dish image"></img>
                             }
                          </div>            
                          {cartItems.find((item) => item.id === a.id && item.qty > 0) 
                            ? 
                            (cartItems.filter((item) => item.id === a.id).map((item) => (
                                <div key={item.id} style={{backgroundColor:'#FFC93C' ,margin:"auto ",marginRight:"-22px",borderRadius:"5px"}}>
                                    <div>
                                        <button className='quantity-btn2' onClick={() => onRemove(item)}>
                                            {' '} - {' '}
                                        </button>
                                    </div>
                                    <span className='number'>{item.qty}</span>
                                    <div>
                                        <button className='quantity-btn2' onClick={() => onAdd(item)}>
                                            {' '} + {' '}
                                        </button>
                                    </div>
                                </div>
                            ))) 
                            : 
                            (
                            <div className='menu-card' style={{ position: 'relative' }} onClick={() => onAdd(a)}>
                                <img className='menucard-image' style={{ backgroundColor: '#FFC93C' }} src={images} />
                            </div>
                         )}
                      </div>           
                  } 
              </div>
           ))}     
        </div>
  )}



export default MenuCards