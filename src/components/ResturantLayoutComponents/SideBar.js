// import React from 'react'
// import Items from '../Items'


// const SideBar = ( props) => {
//   const {data} =props;
//   return (
//     <div>
//     <h1 >Category</h1>
//     <div className='sidebar' style={{display:"flex",flexShrink:"0"}}>

//     <Items  data={data}/>
//     </div>
//     </div>
//   )
// }

// export default SideBar


import React, { useState } from "react";
import Items from "../Items";
import MostPopular from "./MostPopular";

import { HashLink as Link } from "react-router-hash-link";
const SideBar = ( props) => {
  const {data,onAdd} =props
  let result = data.map(a => a.Category)
     result = new Set(result) 
     result = Array.from(result)

const [appState, changeState] = useState({
  activeObject : null,
  objects:result
});

const [selectedCategory, setSelectedCategory] = useState("");
const [showAll, setShowAll] = useState(false);
const [display, setDisplay] = useState({});

const filterResult = (cat) => {
    setSelectedCategory(selectedCategory === cat ? "" : cat);
  };
  const handleAllClick = () => {
    if (showAll=== false){
        setSelectedCategory("");
        setShowAll(true);
    }
    if (showAll=== true){
        setSelectedCategory("");
        setShowAll(false);
    }
    
  }

  const handleClick = (index) => {
    if(appState.objects[index] === appState.activeObject){
      changeState({...appState, activeObject: null});
    }else{
      changeState({...appState, activeObject: appState.objects[index]});
    }
    setDisplay({
      // ...display,
      [index]: !display[index]
    });
  

  }
  return (
    <div  className="change" >

          <div
             style={{border:"0px solid red "}}
          >
            <h1>Category</h1>
            {/* <p className="head-name">Category</p> */}
            <div style={{border:"0px solid pink ",width:"100%",}}  className='itemsList' >
              {/* <div ><button className='item'    onClick={handleAllClick}>All</button> </div> */}
           

              {appState.objects.map((val,index) =>(
                
                <div >
            
              {/* <Link  to='#Soups'><button className='item' onClick={()=>handleClick(index)}>{val}</button> 
              </Link> */}

              <Link to={`#${val}`}><button className='item' onClick={() => handleClick(index)}>{val}</button></Link>


             </div>   
             ))}
         
            </div>

          </div>

         <div className="total" style={{height:"auto",border:"0px solid blue",flex:"85%", display:"row"}}>
         <div  >
          <MostPopular data={data} onAdd={onAdd}/>
          </div>
          <div  style={{width:"97%",padding:" 0px 10px",}} > 
          <div  style={{padding:"20px 0px"}} className='head'>
                  <p className='head-name'>Menu</p>
          </div>
              <div style={{width:"97%",marginLeft:"auto",marginRight:"auto",left:"0",right:"0",padding:"5px 0px 0px 0px"}}>

                {appState.objects.map((t, index) => (
                  <div >
                  <Items  
                  // onClick={(e) =>  console.log(e.target)} 
                  onClick={()=>handleClick(index)} 
                  data={data} onAdd={onAdd} name= {t} text={(display[index] || showAll || t === selectedCategory) ? "block" : "none"}/>
                </div>
              ))}
       </div>
            </div>
          </div>
        </div>
  );
};

export default SideBar;
