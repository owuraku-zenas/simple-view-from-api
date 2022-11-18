import React from 'react'

const Pagination = ({ postsPerPage, totalProducts, paginate }) => {
    const pageNumbers = []

    for (let index = 1; index < Math.ceil(totalProducts / postsPerPage); index++) {
        pageNumbers.push(index)

    }

    return (
        <nav>
            <ul className='flex gap-[2px]'>
                {pageNumbers.map(number => (
                    <li key={number} className="px-2 bg-green-400 text-white pointer">
                        <a onClick={(e) => {
                            e.preventDefault()
                            paginate(number)
                        }} href="">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination