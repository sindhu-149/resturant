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
    <div className='itemsList'>
        {result.map(name =>(
          <div style={{textAlign:"right"}}>
          <button className='item'>{name}</button>
          </div>
           
        ))}
    </div>
  );

}  



export default Items

