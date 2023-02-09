import React, { useState, useEffect } from 'react';
import scan from '../../images/scan-image.png'
import adaptable from '../../images/adaptable.png'
import contact from '../../images/contact.png'
import convenient from '../../images/convenient.png'
import customize from '../../images/customize.png'
const Content = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return (
        <div
        className='content'>

            <div
                className='home-content'
                style={{
                padding: "3%"
            }}>

                <div className='box1'>
                    <p className='box1-text'>Scan & Savor </p>
                    <p className='box1-text2'>Scan the QR code to know what’s on the menu?</p>
                    <button className='btn'>Call to action</button>
                </div>

                <div >
                    <div>
                        <p 
                            className='contact-img box1-img'>
                            <img
                                className='contact-img'
                              src={scan}></img>
                        </p>
                    </div>
                </div>

            </div>

            <div className='home-content'>

                <div className='content-bg'>
                    <div
                     className='box2'>
                        <p className='box2-text'><span className='box2-text-sub'>Adaptable</span></p>
                        <p className='box2-text2'>for every Resturant</p>
                        <p className='box2-btn'> <button className='btn'>Call to action</button></p>
                    </div>

                    <div className='adaptable'>
                        <img className='adaptable-img' src={adaptable}></img>
                    </div>
                </div>

            </div>

            <div
             className='text-center'>
                <h1>Why choose us ?</h1>
                <div
                    className='home-content'
                    style={{
                    padding: "3%"
                }}>

                    <div
                     className='box3'>
                        <p className='box3-text'>Contactless Menu</p>
                        <p className='box1-text2'>QR code based menus eliminate the need for customers to physically handle menus.</p>
                        <button className='btn'>Call to action</button>
                    </div>

                    <div className='contact'>
                        <img className='contact-img' src={contact}></img>
                    </div>

                </div>

            </div>
            <div>
                {windowWidth < 680 ?
                
                <div className='home-content box4'>

                <div className='box4-text'>
                    <p className='box3-text'>convenient for customers</p>
                    <p className='box1-text2'>Customers can easily access the menu with their smartphones by scanning the QR code.</p>
                    <button className='btn'>Call to action</button>
                </div>

                <div className='convenient'>
                    <img className='contact-img' src={convenient}></img>
                </div>

                </div>
                 : 

                  <div className='home-content box4'>
                <div className='convenient'>
                    <img className='contact-img' src={convenient}></img>
                </div>

                <div className='box4-text'>
                    <p className='box3-text'>convenient for customers</p>
                    <p className='box1-text2'>Digital menus can be easily updated and customized, allowing restaurants to quickly make changes.</p>
                    <button className='btn'>Call to action</button>
                </div>

            </div>

                }
            </div>
            
            <div
                className='home-content'
                style={{
                padding: "3%"
            }}>

                <div className='box3'>
                    <p className='box3-text'>Contactless Menu</p>
                    <p className='box1-text2'>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                    <button className='btn'>Call to action</button>
                </div>

                <div className='convenient'>
                    <img className='contact-img' src={customize}></img>
                </div>

            </div>
        </div>
    )
}

export default Content