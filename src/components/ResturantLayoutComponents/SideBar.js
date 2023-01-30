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
             
          >
            <h1>Category</h1>
            {/* <p className="head-name">Category</p> */}
            <div style={{width:"100%"}}  className='itemsList' >
              <div ><button className='item'    onClick={handleAllClick}>All</button> </div>
           

              {appState.objects.map(val =>(
                
                <div >
            
               <button  className='item'    onClick={() => filterResult(val)}>{val}</button>
             </div>   
             ))}
         
            </div>


        
          </div>

         <div className="total" style={{height:"auto",border:"0px solid blue",flex:"85%", display:"row"}}>
         <div  >
          <MostPopular data={data} onAdd={onAdd}/>
          </div>
          <div  style={{width:"97%",padding:"10px"}} > 
          <div className='head'>
                  <p className='head-name'>Menu</p>
          </div>
              <div style={{ width:"97%",marginLeft:"auto",marginRight:"auto",left:"0",right:"0"}}>

                
           

                {appState.objects.map((t, index) => (
                  <div >
                                   <Items onClick={()=>handleClick(index)} data={data} onAdd={onAdd} name= {t} text={(display[index] || showAll || t === selectedCategory) ? "block" : "none"}/>
                   
                  {/* <Items name= {t} text={(display[index] || showAll || t === selectedCategory) ? "block" : "none"}/> */}
                
                </div>
              ))}
       </div>
            </div>
          </div>
        </div>
  );
};

export default SideBar;
