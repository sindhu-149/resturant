import React from 'react'
import Navbar from './Navbar'
import Container from './Container'

const ResturantLayout = (props) => {
  const {data, res, cartItems,onAdd,onRemove} = props;
  return (
        <div className='layout'>
        <Navbar res={res} />
        <Container onRemove={onRemove} onAdd={onAdd} cartItems={cartItems}  data={data} /> 
        </div>
  )
}

export default ResturantLayout


