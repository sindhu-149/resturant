import React from 'react'
import map from '../../images/map.png'

const ResturantName = (props) => {
    const {data}=props;
    return (
        <div>
            <div className='title-bg' >
                <h1 className='title-name'>{data?.Name}</h1>
                <img className='map-image' src={map}></img>
                <span className='address'>{data?.Address}</span>
                <div  className='title-bg-type'>
                    {data?.Tags?.map(type =>(
                        <span className='title-bg-type-test'>{type}</span>
                    ))}
                </div>   
            </div>
            <div className='resturant-name' >
                <img className='resturant-name-image'  src={data.Logo}></img>
            </div>  
        </div>
    )
}

export default ResturantName