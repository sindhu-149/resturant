import React from 'react'
import ResturantName from './ResturantName'
const Fake = (props) => {
    const {data}=props;
    
  return (
    <div className='navbar' style={{ backgroundImage: `url(${data?.Background})` }}
    >Fake 
   {/* {data?.Menu?.map((menuItem, index) => (
        <li key={index}>
        {`${menuItem.Name} ${menuItem.Price}`}
        </li>
      ))} */}
      <ResturantName  data={data}/>
   </div>
  )
}

export default Fake



// {result.map( s =>(
//     <p>{s}</p>
// ))}

// let result = d.map(a => a.Category)
    //  result = new Set(result) 
    //  result = Array.from(result)