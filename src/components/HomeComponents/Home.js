import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'


const Home = () => {
  return (
    <div  className='home'>
        <Navbar />
        <Content />
        <Footer />
    </div>
  )
}

export default Home