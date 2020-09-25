import React, {  useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import BrandForm from './BrandForm';
import axios from 'axios';




const EditBrand = (props) => {
    const [brand, setBrand] = useState(null);

    const getBrand = async (id) => {
        const { data } = await axios.get(`/api/brand/${id}`);
        setBrand(data);
    }
    useEffect(() => {
        const { id } = props.match.params;
        getBrand(id);
    },[])
    return (
        <Layout>
            {brand &&
                <BrandForm
                title='Edit Brand'
                brand={brand}
            
            />}
        </Layout>
    )
}
export default EditBrand;