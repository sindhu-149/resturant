import React from 'react'


import MostPopular from './MostPopular'
import Menu from './Menu'

const MenuContainer = (props) => {
  
  const {data, onAdd} = props;

  return (
    <div className='menu-conatiner'>

    <MostPopular data={data} onAdd={onAdd}/>
    <Menu onAdd={onAdd} data={data} />
    </div>
  )
}

export default MenuContainer