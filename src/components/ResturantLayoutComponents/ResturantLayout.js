import React, { useState, useEffect } from 'react';
import Container from './Container'
import Navbar from './Navbar'
import {useParams }  from 'react-router';

import axios from 'axios'

const ResturantLayout = (props) => {
  const {cartItems,onAdd,onRemove} = props;

  const { id } = useParams();
  const [text, setText] = useState({})

  const path = `/restaurants/${id}.json`;


useEffect(() => {
  axios.get(path).then( (res)=>{
    setText(res.data)
  }).catch(err => console.log(err))
}, [id,text]);


  return (
        <div className='layout'>
        <Navbar data={text}/>
        <Container onRemove={onRemove} onAdd={onAdd} cartItems={cartItems}  data={text?.Menu} /> 
        </div>
  )
}

export default ResturantLayout


