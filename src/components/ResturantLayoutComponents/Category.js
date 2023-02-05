import React from 'react'
import MenuCards from './MenuCards';
const Items = (props) => {

  const {name,text,data,onAdd,onClick} = props;
  
  return (

    <div className= "category" >

      <div  id={name}  onClick={onClick}  className='sub-cat'> 
        <p className='cat-name'> {name}</p>
        <img  className='bag-img' src='https://cdn-icons-png.flaticon.com/512/7996/7996254.png'></img>
      </div>
  
      <p className='menucards-list'  style={{display: text}}  >
      <MenuCards onAdd={onAdd} data={data} name = {name}/> 
      </p>

    </div>

    
  )
}

export default Items