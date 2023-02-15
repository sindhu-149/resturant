import React, { useState } from "react";
import Category from './Category'
import MostPopular from "./MostPopular";
import { HashLink as Link } from "react-router-hash-link";

const SideBar = ( props) => {

    const {data,onAdd,onRemove,cartItems} =props

    let result = data?.map(a => a?.Category)
    result = new Set(result) 
    result = Array?.from(result)

    const [appState, changeState] = useState({
      activeObject : null,
      objects:[...result]
    });

    const [display, setDisplay] = useState({});

    const handleClick = (index) => {
      if(appState.objects[index] === appState.activeObject){
          changeState({...appState, activeObject: null});
      }else{
          changeState({...appState, activeObject: appState.objects[index]});
      }
      setDisplay({
      [index]: !display[index]
      });
   }
  return (
    <div className="change" > 
        <div> 
            <h1 className="cat-head">Category</h1>
            <div className='itemsList' >
                {result?.map((val,index) =>(
                    <div>
                        <Link to={`#${val}`}>
                            <button className='item' onClick={() => handleClick(index)}>{val}</button>
                        </Link>
                    </div>   
                ))}  
            </div>
        </div>
        <div className="total">
            <div>
                <MostPopular data={data} onAdd={onAdd}/>
            </div>
            <div className="some"> 
                <div className='head menu-head'>
                  <p className='head-name'>Menu</p>
                </div>
                <div className="some2">
                    {result?.map((t, index) => (
                        <div >
                            <Category onRemove={onRemove} cartItems={cartItems} onClick={()=>handleClick(index)} data={data} onAdd={onAdd} name= {t} text={(display[index] ) ? "block" : "none"}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default SideBar;
