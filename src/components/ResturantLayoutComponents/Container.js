import React from 'react'
import SideBar from './SideBar'
import MenuContainer from './MenuContainer'
import Cart from './Cart'

const Container = () => {
  
  return (
    <div className='container' >
    {/* <p>sindhu</p> */}
    <SideBar />
    <MenuContainer />
    <Cart />
    </div>
  )
}

export default Container