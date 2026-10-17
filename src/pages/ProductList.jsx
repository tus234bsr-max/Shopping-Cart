import React, { useState } from 'react'
import SearchFilter from '../components/SearchFilter'
import Show from '../components/Show'
import { CartProvider, useCart } from '../context/CartContext'

import ProductCart from '../components/ProductCart'


const ProductList = () => {
  const {Product}=useCart()
  const [searchTerm, setSearchTerm] = useState("")
  const filtered=[...Product].filter((item)=>{
    return item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.toLowerCase().includes(searchTerm.toLowerCase()) 
  })
  
  return (
    <>
    <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
   <Show/>
<div className='mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center'>
  {filtered.map((itemm,idx)=>{
    return <ProductCart key={idx} product={itemm} />
  })}
</div>
    </>
  )
}

export default ProductList
