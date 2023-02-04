import React from 'react'
import scan from '../../images/scan-image.png'
import adaptable from '../../images/adaptable.png'
import contact from '../../images/contact.png'
import convenient from '../../images/convenient.png'
import customize from '../../images/customize.png'
const Content = () => {

    
  return (
    <div style={{display:"flex",flexDirection:"column", border:"5px solid deeppink"}}>

    <div className='home-content' style={{padding:"3%"}}>

       <div style={{border:"0px solid red",margin:"auto 0",padding:"50px"}}>
        <p style={{fontWeight:"bold",fontSize:"20px"}}>Scan & Savor</p>
        <p style={{border:"0px solid black",width:"100%"}}>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
        <button style={{backgroundColor:"#F2CD6C",borderRadius:"30px",border:"none",fontWeight:"bold",padding:"10px 20px"}}>Call to action</button>
       </div>

       <div style={{border:"0px solid red"}}>
       <div>
       <p  className='contact-img'style={{backgroundColor:"#FFE9A0",borderRadius:"100%",padding:"10px 10px",margin:"auto"}}>
       <img  className='contact-img' style={{paddingBottom:"50px"}}src={scan}></img>
       </p>
       </div>
       </div>
       
    </div>

    <div className='home-content'>

    <div className='content-bg'>
      <div style={{border:"0px solid red",color:"white",fontSize:"40px",padding:"30px"}}>
            <p style={{backgroundColor:"#F7CD5F",display:"inline"}}>Adaptable</p>
            <p style={{margin:"5px"}}>for every Resturant</p>
            <button style={{backgroundColor:"#F2CD6C",borderRadius:"30px",border:"none",fontWeight:"bold",padding:"10px 20px"}}>Call to action</button>
       </div>

       <div style={{border:"0px solid red"}}>
          <img  className='adaptable-img' src={adaptable}></img>
       </div>
    </div>

    </div>
    
    <div style={{border:"0px solid red", textAlign:"center"}}>
    <h1>Why choose us ?</h1>
    <div className='home-content' style={{padding:"3%"}}>

    <div style={{border:"0px solid red",margin:"auto 0",padding:"50px",textAlign:"start"}}>
        <p style={{fontWeight:"bold",fontSize:"20px",}}>Contactless Menu</p>
        <p style={{border:"0px solid black",}}>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
        <button style={{backgroundColor:"#F2CD6C",borderRadius:"30px",border:"none",fontWeight:"bold",padding:"10px 20px"}}>Call to action</button>
       </div>

       <div style={{border:"0px solid red"}}>
       <img className='contact-img' src={contact}></img>
       </div>

    </div>

</div>
    <div className='home-content' style={{padding:"3%",backgroundColor:"#D8CCA3"}}>
    <div style={{border:"0px solid red"}}>
   <img className='contact-img' src={convenient}></img>
   </div>

<div style={{border:"0px solid red",margin:"auto 0",padding:"50px",textAlign:"end"}}>
    <p style={{fontWeight:"bold",fontSize:"20px",}}>Contactless Menu</p>
    <p style={{border:"0px solid black",}}>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
    <button style={{backgroundColor:"#F2CD6C",borderRadius:"30px",border:"none",fontWeight:"bold",padding:"10px 20px"}}>Call to action</button>
   </div>

   

</div>
     <div className='home-content' style={{padding:"3%"}}>

<div style={{border:"0px solid red",margin:"auto 0",padding:"50px",textAlign:"start"}}>
    <p style={{fontWeight:"bold",fontSize:"20px",}}>Contactless Menu</p>
    <p style={{border:"0px solid black",}}>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
    <button style={{backgroundColor:"#F2CD6C",borderRadius:"30px",border:"none",fontWeight:"bold",padding:"10px 20px"}}>Call to action</button>
   </div>

   <div style={{border:"0px solid red"}}>
   <img className='contact-img' src={customize}></img>
   </div>

</div>
    </div>
  )
}

export default Content