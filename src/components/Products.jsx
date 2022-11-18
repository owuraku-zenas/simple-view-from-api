import React, { useState } from 'react'
import Form from './Form'
import Product from './Product'

const Products = ({ products }) => {
    const [show, setShow] = useState(false)
    return (
        <div className='lg:max-w-[1500px] max-w-[765px] m-auto p-6 flex flex-col gap-6'>
            {products.map((product) => (
                <Product image={product.image} key={product.id} title={product.title} price={product.price} description={product.description} date={product.date} />
            ))}
            <div className='flex flex-col gap-4 items-center justify-center mt-4'>
                {
                    show ?
                        <Form />
                        :
                        null
                }
                <button onClick={() => setShow(!show)} className='bg-green-400 text-white p-2 w-full rounded-lg'>Add Product</button>
            </div>
        </div>
    )
}

export default Products