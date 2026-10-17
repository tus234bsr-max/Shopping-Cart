import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { initialProducts } from '../data/product';
import { useCart } from '../context/CartContext';


const SearchFilter = ({searchTerm,setSearchTerm}) => {
  


  return (
    <>
  <div className=' flex m-4 items-center gap-1 border-2 rounded-xl border-orange-400 text-white'><Search  className='text-gray-500 pl-1'/><input type="text" value={searchTerm}  placeholder='Search Anything ........' onChange={(e)=>{setSearchTerm(e.target.value)}}   className='w-full p-4 outline-none' /></div>

 
    </>
  )
}

export default SearchFilter
