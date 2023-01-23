import React from 'react'
import Navbar from './Navbar'
import Container from './Container'

const Layout = (props) => {
  const {data, cartItems, onAdd, onRemove} = props;
  return (
    <div className='layout'>
        <Navbar />
        <Container onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} data={data} />
  
    </div>
  )
}

export default Layout