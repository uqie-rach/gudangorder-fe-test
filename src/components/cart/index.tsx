"use client"

import { useEffect, useState } from "react"
import { X, Minus, Plus, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

import { useCartSidebarStore } from "@/store/useCartSidebarStore"

import { cn } from "@/lib/utils"

export interface CartItem {
  id: string
  name: string
  price: number
  originalPrice?: number
  quantity: number
  image: string
  weight?: string
  boxes?: string
}

export default function CartSidebar() {
  const [items, setItems] = useState<CartItem[]>([])
  const isOpen = useCartSidebarStore((state) => state.isOpen)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.128
  const total = subtotal + tax

  // Fetch cart
  useEffect(() => {
    const stored = localStorage.getItem("cart")
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          setItems(parsed)
        }
      } catch (err) {
        console.error("Invalid cart data", err)
      }
    }
  }, [isOpen])

  const updateLocalStorage = (newItems: ((prevState: CartItem[]) => CartItem[]) | { quantity: number; id: string; name: string; price: number; originalPrice?: number; image: string; weight?: string; boxes?: string }[]) => {
    localStorage.setItem("cart", JSON.stringify(newItems))
    setItems(newItems) // penting!
  }

  const updateQuantity = (id: string, newQty: number) => {
    const updated = items.map(item =>
      item.id === id ? { ...item, quantity: newQty } : item
    )
    updateLocalStorage(updated)
  }

  const removeItem = (id: string) => {
    const updated = items.filter(item => item.id !== id)
    updateLocalStorage(updated)
  }


  // Handle body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold">Shopping cart</h2>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="h-12 w-12 text-gray-400 mb-2" />
                <h3 className="text-lg font-medium">Your cart is empty</h3>
                <p className="text-gray-500 mt-1">Add items to your cart to see them here.</p>
                <Button className="mt-4">Continue Shopping</Button>
              </div>
            ) : (
              items.map((item) => <CartItem key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem} />)
            )}
          </div>

          {/* Summary */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <Button className="w-full bg-black hover:bg-gray-800">Checkout</Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/cart">View Cart</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

function CartItem({ item, updateQuantity, removeItem }: { item: CartItem; updateQuantity: (id: string, qty: number) => void; removeItem: (id: string) => void }) {
  return (
    <div className="flex gap-4 py-4 border-b">
      <div className="relative h-20 w-20 rounded overflow-hidden bg-gray-100">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-medium">{item.name}</h3>
          <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>
        {item.weight && <p className="text-sm text-gray-500">{item.weight}</p>}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border rounded">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 hover:bg-gray-100" disabled={item.quantity <= 1}>
              <Minus className="h-3 w-3" />
            </button>
            <span className="px-3">{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 hover:bg-gray-100">
              <Plus className="h-3 w-3" />
            </button>
          </div>
          <div className="text-right">
            <div className="font-medium">${item.price.toFixed(2)}</div>
            {item.originalPrice && item.originalPrice > item.price && (
              <div className="text-sm text-gray-500 line-through">${item.originalPrice.toFixed(2)}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
