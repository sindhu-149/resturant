import React, {useState} from 'react'

import Category from './Category'

const Menu = (props) => {
  const {data, onAdd} = props
  let result = data.map(a => a.Category)
result = new Set(result) 
result = Array.from(result)
  const [appState, changeState] = useState({
    activeObject : null,
    objects:result
  });


  function toggleActive(index){
  if(appState.objects[index] === appState.activeObject){
    changeState({...appState, activeObject: null});
  }else{
    changeState({...appState, activeObject: appState.objects[index]});
  }
}


  function toggleStyle(index){
    if(appState.objects[index] === appState.activeObject){
      return "block";
    }
    else{
      return "none";
    }
  }
  return(
    // <div>
    //   {appState.objects.map((elements,index) =>(
    //     <div className={toggleStyle(index)} key={index} onClick={ () => toggleActive(index)}>
    //     </div>
    //    ))}

  
    // </div>
    <div className='menu'> 

    <div className='head'>
    
           <p className='head-name'>Menu</p>

         </div>
         {appState.objects.map((elements,index) =>(
          <div>
        {/* <div className={toggleStyle(index)} key={index} onClick={ () => toggleActive(index)}> */}
        <Category className={toggleStyle(index)} key={index} onClick={ () => toggleActive(index)} onAdd={onAdd} data={data} name={elements} />
        </div>
       ))}
         {/* {result.map(cat =>(
           <Category  onAdd={onAdd} data={data} name={cat} />
          
         ))} */}
         </div>
  )
}


export default Menu