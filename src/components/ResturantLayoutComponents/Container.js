import React from 'react'
import SubCart from './SubCart'
import Menu from './Menu'

const Container = (props) => {
    const {data, cartItems, onAdd, onRemove } = props;
    return (
        <div className='container'>
            <Menu onRemove={onRemove} data={data} onAdd={onAdd} cartItems={cartItems}/>
            <SubCart onRemove={onRemove} onAdd={onAdd} cartItems={cartItems}/>
        </div>
    )
}

export default Container