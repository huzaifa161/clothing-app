import React, { useState, useEffect } from 'react';
import axios from 'axios';
const CollectionForm = props => {


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [brand, setBrand] = useState('');
    const [brands, setBrands] = useState([]);     
    const onHandleChange = (e, type) => {
        
        const { value, files } = e.target;
        switch (type) {
            case 'name':
                setName(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'brand':
                setBrand(value);
                break;
            case 'image':
                setImage(files[0])
                break;
            default:
                break;
        }
    }
    const clearInput = () => {
        setName('');
        setDescription('');
        setImage(null);
    }


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

    useEffect(() => {
        console.log('change');
        if (!brand && brands.length) setBrand(brands[0]._id);
    },[brands])
    


    const onSubmit = async e => {
        e.preventDefault();
        if (!name) return;
        const formData = new FormData(e.target);
        try {
            props.submit(formData)
            clearInput();
        } catch (err) {
            console.log(err);
            clearInput();
        }
    }
        const options = brands.length ? 
        brands.map(brand => (<option key={brand._id} value={brand._id}>{brand.name}</option>))
        : <option>Loading</option>


    return (
        <div className='form__wrapper' onSubmit={onSubmit}>
            <form className='form'>
                <h3 className='form__heading'>{props.title}</h3>
                <div className='form__control'>
                    <input type='text' value={name} name='name' onChange={(e) => onHandleChange(e, 'name')} placeholder='Collection Name' className='form__control--input' />
                    <label className='form__control--label'>Collection Name</label>
                </div>
                <div className='form__control'>
                    <select value={brand} name='brand' onChange={e => onHandleChange(e,'brand')} className='form__control--select'>
                        {options}
                    </select>
                </div>
                <div className='form__control'>
                    <textarea placeholder='Collection Description' name='description' value={description} onChange={e => onHandleChange(e, 'description')} className='form__control--textarea'></textarea>
                    <label className='form__control--label'>Collection Description</label>
                </div>
                <div className='form__control'>
                    <div className='form__control--file-wrapper'>
                        Select File
                        <input type='file' name='image' placeholder='Brand Name' className='form__control--file' onChange={e =>onHandleChange(e, 'image')} />
                    </div>
                </div>
                <div className='form__control'>
                    <button type='submit' className='form__control--submit'>Add New Brand</button>
                </div>

            </form>
        </div>
    )
}
export default CollectionForm;
