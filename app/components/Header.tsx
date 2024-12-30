'use client'

import Link from 'next/link'
// import { ShoppingCart } from 'lucide-react'
// import { useCart } from './CartProvider'

export default function Header() {
    //   const { cartCount } = useCart()

    return (
        <header className="font-serif fixed w-full z-50">
            <div className="header py-2">
                <h1 className=' text-center font-black text-5xl text-TextColor '> <span className=''>AW </span></h1>
            </div>
            <div className="mx-[10%]">
                <div className="container mx-auto px-6 flex justify-between items-center shadow-2xl py-3 rounded-full">
                    <Link href="/" className="text-2xl font-black text-TextColor uppercase">AmandasWears</Link>
                    <nav className=''>
                        <ul className="flex space-x-6 font-semibold">
                            <li><Link href="/Products" className="hover:text-gray-600 mx-3 text-TextColor font-semibold uppercase">Products</Link></li>
                            <li><Link href="/about" className="hover:text-gray-600 mx-3 text-TextColor font-semibold uppercase">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-gray-600 mx-3 text-TextColor font-semibold uppercase">Contact</Link></li>
                        </ul>
                    </nav>
                    <li>
                        <Link href="/cart" className="hover:text-gray-600 relative">
                            {/* <ShoppingCart /> */}
                            {/* {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartCount}
                  </span>
                )} */}
                            cart
                        </Link>
                    </li>
                </div>
            </div>
        </header>
    )
}

