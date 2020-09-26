import React from 'react';
import { Link } from 'react-router-dom';
const BrandItem = ({ collection, index }) => {
    return (
        <div className='collection__item'>
            <Link className='collection__name'>
                {index + 1}) {collection.name}
            </Link>
        </div>
    )
}

export default BrandItem;