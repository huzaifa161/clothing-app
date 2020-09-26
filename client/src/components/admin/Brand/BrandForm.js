import React,{ useState } from 'react';
const BrandForm = props => {

    const form = new FormData();    
    const [name, setName] = useState(props.brand?.name || '');
    const [description, setDescription] = useState(props.brand?.description || '');
    const [image, setImage] = useState(null);

    
    const onHandleChange = (e, type) => {
        
        const { value, files } = e.target;
        if (type === 'image') {
            form.set(type, files[0])
        } else {
            form.set(type, value);
        }
        switch (type) {
            case 'name':
                setName(value);
                break;
            case 'description':
                setDescription(value);
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

    return (
        <div className='form__wrapper' >
            <form className='form' onSubmit={onSubmit}>
                <h3 className='form__heading'>{props.title}</h3>
                <div className='form__control'>
                    <input type='text' value={name} name='name'  onChange={(e) => onHandleChange(e, 'name')} placeholder='Brand Name' className='form__control--input' />
                    <label className='form__control--label'>Brand Name</label>
                </div>
                <div className='form__control'>
                    <textarea placeholder='Brand Description' name='description' value={description} onChange={e => onHandleChange(e, 'description')} className='form__control--textarea'></textarea>
                    <label className='form__control--label'>Brand Description</label>
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
export default BrandForm;
