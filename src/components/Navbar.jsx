import React from 'react'
import { Home,ShoppingCartPlus } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <header className='sticky top-0 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl shadow-gray-950/70 border-b border-orange-950'>
<div className="container mx-auto px-4 py-4 flex justify-between items-center">
    <Link to={'/'}>
    <div className='flex items-center space-x-3 cursor-pointer'>
        <Home className='text-amber-500' />
        <h1 className='text-2xl font-extrabold tracking-widest uppercase'>Tushar <span className='text-green-600'>Gautam</span></h1>
    </div>
    </Link>
  <Link to={'/cart'} >
   <div> <ShoppingCartPlus className='text-blue-300/30 border-2 p-1 rounded-xs hover:bg-blue-700/50'/></div>
  </Link>
</div>
   </header>
   </>
  )
}

export default Navbar
