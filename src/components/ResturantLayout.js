import React from 'react'
import Layout from './ResturantLayoutComponents/Layout'

const ResturantLayout = (props) => {
  const {data, res, cartItems,onAdd,onRemove} = props;
  return (
    <div className='main'>
        <Layout onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} res={res} data={data}/>
    </div>
  )
}

export default ResturantLayout