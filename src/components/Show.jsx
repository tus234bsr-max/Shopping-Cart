import React from 'react'
import { initialProducts } from '../data/product'
import { Tag } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Show = () => {
 const {Product}=useCart()
    const catege=["All",...new Set(initialProducts.map(p=>p.category))]
  return (
  <>
  <div className='text-white ml-5 flex items-center'>
    <Tag className='text-amber-600' />
   {catege.map((e)=>{
    return <button className='m-1.5 border px-3 rounded-2xl hover:bg-green-400/30' key={e}>{e}</button>
   })}
  </div>
  
  </>
  )
}

export default Show
