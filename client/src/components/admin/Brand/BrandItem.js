import React from 'react';
import { Link } from 'react-router-dom';
const BrandItem = ({ brand }) => {
    return (
        <div className='brand__item'>
            <div className='brand__item--image' style={{
                backgroundImage:`url(${brand.imageUrl})`
            }} />
            <div className='brand__name'>{brand.name}</div>
            <Link className='button button__details' to={`/dashboard/brands/${brand._id}`}>Details</Link>
        
        </div>
    )
}

export default BrandItem;