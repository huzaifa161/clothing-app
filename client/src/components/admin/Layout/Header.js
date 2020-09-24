import React from 'react';
import { Link } from 'react-router-dom';
import './layout.css';
const Header = props => {
    return (
        <div className='header'>
            <div className='header__logo'></div>
            <div className='navigation'>
                <ul className='navigation__ul'>
                    <li className='navigation__ul--li'><Link className='navigation__ul--li-item'  to='/'>Home</Link></li>        
                    <li className='navigation__ul--li'><Link className='navigation__ul--li-item' to='/'>Dashboard</Link></li>        
                    <li className='navigation__ul--li'><Link className='navigation__ul--li-item' to='/'>Products</Link></li>  
                </ul>
            </div>
        </div>
    )   
}

export default Header;