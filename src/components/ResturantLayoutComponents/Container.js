import React from 'react'
import SubCart from './SubCart'
import Menu from './Menu'

const Container = (props) => {
  const {data, cartItems, onAdd, onRemove } = props;
  return (
    <div className='container' >



  {/* {data?.map((menuItem, index) => (
        <li key={index}>
        {`${menuItem.Name} ${menuItem.Price}`}
        </li>
      ))} */}


    <Menu  data={data} onAdd={onAdd}/>
    <SubCart  onRemove={onRemove} onAdd={onAdd} cartItems={cartItems}/>
    </div>
  )
}

export default Container