import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
const Layout = props => {
    return <div className='layout'>
        <Header />
        <div className='container'>
            <Sidebar />
            <div className='main--container'>
                {props.children}
            </div>
        </div>
    </div>
}

export default Layout;