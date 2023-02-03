import React, { useState, useEffect }  from 'react'
import images from '../images/shopping-bag.png'
// import images from '../images/bag.png'

// import {Link} from 'react-router-dom'




const MenuCards = (props) => {

  const {data, onAdd} = props;



  return (

<div className='menu-items-container'>
       {data.map(a =>(
        <div 
        className='indhu'
        style={{ 
          // left:"0",
          // right:"0",
          // marginLeft:"auto",
          // marginRight:"auto"
          // marginLeft:"60px"
          // margin:"auto"
          // padding:"30px"
          }}
        >

         {props.name === a.Category &&
          <div  key={a.id} className='menu-list' style={{margin:"20px"}}>

                <div 
                    style={{
                    textAlign:"start",
                    // padding:"0px",
                    border:"0px solid red",
                    // width:"100px",
                    // height:"50px"
                    }} 
                  className='menu-card'
                  >

                     
                  <img  style={{border:"0px solid orange", padding:"8px 10px"}}
          
                     src= {a.Vegan === 'TRUE' ? "https://img.icons8.com/color/512/vegetarian-food-symbol.png" : (a.Vegan === 'FALSE' ? "https://img.icons8.com/color/512/non-vegetarian-food-symbol.png" :" ")} 
                  className='veg-nonveg'></img>
                      <p  style={{margin:"3px 0px",fontWeight:"bold",padding:"0px 20px", fontSize: a.Name.length < 30 ? "17px" : "15px"}}>{a.Name}</p>
                      <p style={{margin:" 3px 0px",padding:"0px 20px",fontWeight:"normal",
                      color:"#434242" 
                       }}>hello this is the item u have ordered</p>
                      <p style={{margin:"20px 0px",padding:"0px 20px"}}>{a.Price}  ₹</p>
                      {/* <div style={{border:"2px solid blue"  ,padding:"0px 5px 15px 20px", fontWeight:"bold"}}>{a.Name}</div>
                      <div style={{border:"2px solid yellow", padding:"0px 5px 15px 20px"}} >hello this is the item u have ordered</div>
                      <div style={{border:"2px solid pink", padding:"0px 5px 15px 20px"}} >{a.Price}</div> */}

                </div>

                <div  className='menu-card' style={{border:"0px solid red",padding:"0",margin:"auto"}}>
                    {/* <img  className=' menu-card-image '  src={a.Image ? a.Image : ""}  alt="biryani"></img> */}
                    {a.Image &&
                      <img  className=' menu-card-image '  src={a.Image} alt="dish image"></img>
                    }
                </div>
                

                <div className='menu-card' 

                style={{ border:"0px solid red",position:"relative"}}
                onClick={ () =>
                onAdd(a) }
                >
                {/* <Link to={`/resturant`} > */}
               
                
            
                 <img  
                  className='menucard-image'

                  style={{
                   backgroundColor:"#FFC93C",
                  //  fontWeight:"5000px"
                  
                    }} 
                   
                  // src='https://cdn-icons-png.flaticon.com/512/2662/2662503.png' 
                    src={images}
                  ></img>
                  
                  {/* </Link> */}
               </div>
              

            </div>
            
          } 

        </div>
       ))}     
       

</div>
 
 )}



export default MenuCards