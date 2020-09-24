import React from 'react';
import CollectionForm from './CollectionForm';
import Layout from '../Layout/Layout';
import axios from 'axios';
const AddBrand = () => {
    return (
        <Layout>
            <CollectionForm
                title='Add Collection'
                submit={async (formData) => {
                    for (let v of formData.keys()) {
                        console.log(v)
                        
                    }
                    const res = await axios.post('/api/collection/new-collection', formData);
                    console.log(res)
                    }
                }
            />
        </Layout>
    )
}
export default AddBrand;