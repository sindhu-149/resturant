import React from 'react'
import Layout from './ResturantLayoutComponents/Layout'

const ResturantLayout = (props) => {
  const {data, cartItems,onAdd,onRemove} = props;
  return (
    <div className='main'>
        <Layout onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} data={data}/>
    </div>
  )
}

export default ResturantLayout