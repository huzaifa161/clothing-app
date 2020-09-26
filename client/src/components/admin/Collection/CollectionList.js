import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Layout from '../Layout/Layout';
import CollectionItem from './CollectionItem';

const CollectionList = () => {
    const [collections, setCollections] = useState([]);

    const fetchCollections = async () => {
        try {
            const result = await axios.get('/api/collection/all-collections');

            setCollections(result.data);
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        fetchCollections();
    }, [])
    

    return (
        <Layout>
            <div className='heading heading--primary'>Collection List</div>
            <div className='collection__list'>
                {collections.length && collections.map((collection, index) => (<CollectionItem key={collection._id} index={index} collection={collection} />))}
            </div>
        </Layout>
    )
};

export default CollectionList;