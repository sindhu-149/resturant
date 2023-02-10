import React, { useState,useEffect,useRef } from 'react'
import Card  from './Card'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MostPopular = (props) => {
  const {data, onAdd} = props;
  

  return (
    
    <div className='most-popular' >
   
    <div className='head'>
      <p className='head-name'>Most Popular</p>
    </div>
    <div  className='list' >  
     <Card  data={data} onAdd={onAdd} />
</div>
    
    </div>
  
    
  )
}

export default MostPopular 

