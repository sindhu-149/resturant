import React from 'react'
import SideBar from './SideBar'
import MenuContainer from './MenuContainer'
import Cart from './Cart'
import SubCart from './SubCart'

const Container = (props) => {
  const {data, cartItems, onAdd, onRemove } = props;
  return (
    <div className='container' >

    <SideBar  data={data} onAdd={onAdd}/>

    <SubCart  onRemove={onRemove} onAdd={onAdd} cartItems={cartItems}/>
    </div>
  )
}

export default Container