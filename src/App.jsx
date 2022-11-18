import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Products from './components/Products'
import Pagination from './components/Pagination'

function App() {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)


  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("http://localhost:8000/product/")
      setProducts(res.data)
    }

    getProducts()
  }, [])

  const indexOfLastProduct = currentPage * postsPerPage
  const indexOfFirstProduct = indexOfLastProduct - postsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className=" md:pt-10">
      <div className="lg:max-w-[1500px] max-w-[765px] m-auto px-6 flex flex-col">
        <Pagination postsPerPage={postsPerPage} totalProducts={products.length} paginate={paginate} />
      </div>
      <Products products={currentProducts} />
    </div>
  )
}

export default App
