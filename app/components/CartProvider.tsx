'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface CartContextType {
  cartCount: number
  addToCart: () => void
  setCartCount: (count: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartCount, setCartCount] = useState(0)

  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1)
  }

  return (
    <CartContext.Provider value={{ cartCount, addToCart, setCartCount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
