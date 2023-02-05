import React from 'react'
import scan from '../../images/scan-image.png'
import adaptable from '../../images/adaptable.png'
import contact from '../../images/contact.png'
import convenient from '../../images/convenient.png'
import customize from '../../images/customize.png'
const Content = () => {

    return (
        <div
        className='content'>

            <div
                className='home-content'
                style={{
                padding: "3%"
            }}>

                <div className='box1'
                >
                    <p className='box1-text'
                      >Scan & Savor</p>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
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
                        <p className='box2-text'>Adaptable</p>
                        <p className='box2-text2'>for every Resturant</p>
                        <button
                          className='btn'>Call to action</button>
                    </div>

                    <div
                      >
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
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                        <button className='btn'>Call to action</button>
                    </div>

                    <div>
                        <img className='contact-img' src={contact}></img>
                    </div>

                </div>

            </div>
            <div
                className='home-content box4'
              >
                <div >
                    <img className='contact-img' src={convenient}></img>
                </div>

                <div className='box4-text'>
                    <p
                        className='box3-text'>convenient for customers</p>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    <button className='btn'>Call to action</button>
                </div>

            </div>
            <div
                className='home-content'
                style={{
                padding: "3%"
            }}>

                <div className='box3'>
                    <p className='box3-text'>Contactless Menu</p>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    <button className='btn'>Call to action</button>
                </div>

                <div >
                    <img className='contact-img' src={customize}></img>
                </div>

            </div>
        </div>
    )
}

export default Content