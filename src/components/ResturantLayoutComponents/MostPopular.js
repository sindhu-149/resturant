import React, { useState,useEffect,useRef } from 'react'
import Card  from './Card'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MostPopular = (props) => {
  const {data, onAdd} = props;
  const ref = useRef(null);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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

 {/* <img src='https://cdn-icons-png.flaticon.com/512/271/271228.png' style={{width:"30px"}}></img> */}
      {/* <Card  data={data} onAdd={onAdd} /> */}