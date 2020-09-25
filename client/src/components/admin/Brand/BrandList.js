import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Layout from '../Layout/Layout';
import BrandItem from './BrandItem';

const BrandList = () => {
    const [brands, setBrands] = useState([]);

    const fetchBrands = async () => {
        try {
            const result = await axios.get('/api/brand/all-brands');
            setBrands(result.data);
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        fetchBrands();
    }, [])
    

    return (
        <Layout>
            <div className='brand__list'>
                {brands.length && brands.map(brand => (<BrandItem key={brand._id} brand={brand} />))}
            </div>
        </Layout>
    )
};

export default BrandList;