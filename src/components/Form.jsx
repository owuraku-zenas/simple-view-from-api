import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {

    const postProduct = (event) => {
        event.preventDefault()
        // axios.post("http://localhost:8000/product/", {
        //     "title": title,
        //     "price": price,
        //     "image": image,
        //     "description": description,
        // }).then(res => {
        //     console.log(res.data);
        // })
        const form = document.querySelector("form")
        const formData = new FormData(form)

        axios.post("http://localhost:8000/product/", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then(res => {
            console.log(res);
        })
    }


    return (
        <form onSubmit={postProduct} className='bg- w-full flex flex-col gap-3 p-4 shadow-lg bg-gray-100'>
            <div className="w-full flex gap-5">
                <label className='text-[20px] w-1/5 text-right' htmlFor="title">Title</label>
                <input
                    className='w-full rounded-sm'
                    id='title'
                    type="text"
                    name='title'
                    required
                />
            </div>
            <div className="w-full flex gap-5">
                <label className='text-[20px] w-1/5 text-right' htmlFor="price">Price</label>
                <input
                    className='w-full rounded-sm'
                    id='price'
                    name='price'
                    type="number"
                    required
                />
            </div>
            <div className="w-full flex gap-5">
                <label className='text-[20px] w-1/5 text-right' htmlFor="image">Image</label>
                <input
                    className='w-full'
                    id='image'
                    name='image'
                    accept='image/*'
                    type="file"
                    required
                />
            </div>
            <div className="w-full flex gap-5">
                <label className='text-[20px] w-1/5 text-right' htmlFor="description">Description</label>
                <textarea className='w-full' name='description' id='description' required />
            </div>
            <button className='bg-blue-500 text-white p-2 w-full rounded-lg' type='submit'>Post Product</button>
        </form>
    )
}

export default Form