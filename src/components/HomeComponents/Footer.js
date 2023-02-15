import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-start'>Try the menu</div>
        <div className='footer-text'>
        <div className='footer-text-1'>
            <p className='footer-head'>TRY THE MENU</p>
            <p className='f-text'>Try The Menu is a Product based Startup for Food ordering, Hotel, Restaurant, Bar, Pub, Chai Tapri menu and with some more unique features.</p>
        </div>        
        <div className='footer-text-middle'>
            <div className='footer-text-2'>
              <p className='footer-head'>ENGAGEMENT</p>
                <ul className='footer-list'>
                  <li>All Games</li>
                  <li>Discount Wheel</li>
                  <li>Game of Truth</li>
                </ul>
            </div>
            <div className='footer-text-3'>
              <p className='footer-head'>LINKS</p>
                <ul className='footer-list'>
                  <li>Home</li>
                  <li>About</li>
                  <li>Food Hubs</li>
                </ul>
            </div>
        </div>
        <div className='footer-text-4'>
            <p className='footer-head'>NEWSLETTERS</p>
            <div className='signup'>
              <input placeholder='Your email' className='signup-input'></input>
              <span className='signup-btn' onClick={()=>alert("sign up")}>SIGN UP</span>
            </div>
            <p>Get updates on fun stuff you probably want to know about in your inbox.</p>        
        </div>
        </div>
        <div className='footer-end'>© Copyright <span className='number'>2023</span> By Try The Menu | All right reserved.</div>
  </div>
  )
}

export default Footer