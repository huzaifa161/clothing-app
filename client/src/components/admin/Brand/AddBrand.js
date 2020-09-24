import React from 'react';
import BrandForm from './BrandForm';
import Layout from '../Layout/Layout';
import axios from 'axios';
const AddBrand = () => {
    return (
        <Layout>
            <BrandForm
                title='Add Brand'
                submit = {async (formData) => {
                    const res = await axios.post('/api/brand/new-brand', formData);
                    console.log(res)
                    }
                }
            />
        </Layout>
    )
}
export default AddBrand;