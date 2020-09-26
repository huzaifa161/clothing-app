import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__list'>
                <Link to='/dashboard' className='sidebar__list--item'>Dashboard</Link>
                <Link to='/dashboard/products' className='sidebar__list--item'>Product</Link>
                <Link to='/dashboard/add-product' className='sidebar__list--item'>Add Product</Link>
                <Link to='/dashboard/collections' className='sidebar__list--item'>Collection</Link>
                <Link to='/dashboard/add-collection' className='sidebar__list--item'>Add Collection</Link>
                <Link to='/dashboard/brands' className='sidebar__list--item'>Brand</Link>
                <Link to='/dashboard/add-brand' className='sidebar__list--item'>Add Brand</Link>
            </div>
        </div>
    )
}
export default Sidebar;