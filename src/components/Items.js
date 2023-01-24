import React from 'react'



const Items = (props) => {
  // const itemsList = ["All", "Pizza", "Burger", "Sandwitch", "Noodels", "French fries", "Biryani"]
  const {data} = props;
 
  let result = data.map(a => a.Category)
  result = new Set(result) 
  result = Array.from(result)
  result= ["All",...result]
  // console.log(result); 

  return (
    // <div className='trail-conatiner'>
    // <div className='trail-flex' style={{backgroundColor:"yellow"}}>sindhu</div>
    // <div className='trail-flex' style={{backgroundColor:"green"}}>sindhu</div>
    // <div className='trail-flex' style={{backgroundColor:"pink"}}>sindhu</div>
    // <div className='trail-flex' style={{backgroundColor:"orange"}}>sindhu is a gggggggg</div>
    // <div className='trail-flex' style={{backgroundColor:"violet"}}>sindhu</div>
    // <div className='trail-flex' style={{backgroundColor:"blue"}}>sindhu</div>
    // <div className='trail-flex' style={{backgroundColor:"grey"}}>sindhu</div>
    // </div>
    


    <div className='itemsList' style={{flexShrink:"0", }}>
        {result.map(name =>(
          <div style={{textAlign:"right"}}>
          <button  className='item'>{name}</button>
          </div>
           
        ))}
    </div>
  );
  
}  



export default Items

