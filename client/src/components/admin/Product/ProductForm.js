import React, { useState } from 'react';
import Layout from '../Layout/Layout';
const ProductForm = () => {
    const [colors, setColors] = useState([{
        color: '',
        code: ''
    }]);

    const increaseColorCount = () => {
        let newColor = [...colors, {
            color: '',
            code:''
        }]
        setColors([...newColor]);
    }
    return (
        <Layout>
            <div className='form__wrapper'>
                <form className='form form--large'>
                    <div className='heading heading--primary'>New Product</div>
                    <div className='form__control--inline'>
                        <div className='form__control form__control-1-3'>
                            <input type='text'  name='code'  placeholder='Product Code' className='form__control--input' />
                            <label className='form__control--label'>Product Code</label>
                        </div>
                       <div className='form__control form__control-1-3'>
                            <input type='text'  name='price'  placeholder='Sale Price' className='form__control--input' />
                            <label className='form__control--label'>Sale Price</label>
                        </div>
                       <div className='form__control form__control-1-3'>
                            <input type='text'  name='discount'  placeholder='Discount' className='form__control--input' />
                            <label className='form__control--label'>Discount</label>
                        </div>
                    </div>
                    <div className='form__control--inline'>
                        <div className='form__control form__control-1-2'>
                            <select defaultValue='Collection' name='brand' className='form__control--select'>
                                <option disabled>Collection</option>
                                <option value='1_piece'>1 piece</option>
                                <option value='2_piece'>2 piece</option>
                                <option value='3_piece'>3 piece</option>
                            </select>
                        </div>
                        <div className='form__control form__control-1-2'>
                            <div className='form__control--file-wrapper'>
                                Select Files
                                <input type='file' name='image' placeholder='Brand Name' className='form__control--file' multiple />
                            </div>
                        </div>

                    </div>                    
                    <div className='form__control--inline'>
                        <div className='form__control form__control-1-2'>
                            <select defaultValue='Pieces' name='brand' className='form__control--select'>
                                <option disabled>Pieces</option>
                                <option value='1_piece'>1 piece</option>
                                <option value='2_piece'>2 piece</option>
                                <option value='3_piece'>3 piece</option>
                            </select>
                        </div>
                        <div className='form__control form__control-1-2'>
                            <select defaultValue='Season' name='brand' className='form__control--select'>
                                <option disabled>Season</option>
                                <option>Summer-Spring</option>
                                <option>Mid Summer</option>
                                <option>Fall</option>
                            </select>
                        </div>
                    </div>
                    {colors.map((color, index) => (
                        <div className='form__control--inline'>
                            <div className='form__control form__control-1-2'>
                                <input type='text'  name='code'  placeholder='Color' className='form__control--input' />
                                <label className='form__control--label'> Color</label>                            
                            </div>
                            <div className='form__control form__control-1-2'>
                                <input type='text'  name='code'  placeholder='Color Code' className='form__control--input' />
                                <label className='form__control--label'>Color Code</label>
                            </div>
                            <button type='button' onClick={increaseColorCount} className='button button--add'>+</button>
                        </div>
                        ))}
                    <div className='form__control'>
                        <button type='submit' className='form__control--submit'>Add New Product</button>
                    </div>

                </form>
            </div>    
        </Layout>
    )
};

export default ProductForm;