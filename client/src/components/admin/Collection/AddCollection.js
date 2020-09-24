import React from 'react';
import CollectionForm from './CollectionForm';
import Layout from '../Layout/Layout';
import axios from 'axios';
const AddBrand = () => {
    return (
        <Layout>
            <CollectionForm
                title='Add Collection'
                submit = {async (formData) => {
                    const res = await axios.post('/api/brand/new-collection', formData);
                    console.log(res)
                    }
                }
            />
        </Layout>
    )
}
export default AddBrand;