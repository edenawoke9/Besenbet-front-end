"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { getCart } from "./cart"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
interface cartItems{
    id:number,
    name:string,
    price:number,
    quantity:number,
    image:string,
}

export default function CartPage() {
    const [cartItems, setCartItems] = useState(getCart())
    


  const updateQuantity = (id:any, newQuantity:any) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id:any) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 5.99
  const total = subtotal + shipping

  return (
    <div className="container px-4 py-10 md:px-6 md:py-12 lg:py-16">
      <div className="flex flex-col gap-2 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#718355]">Your Cart</h1>
        <nav className="flex gap-1 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#718355] transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">Cart</span>
        </nav>
      </div>

      {cartItems.length > 0 ? (
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border shadow-sm">
              <div className="p-6">
                <div className="grid gap-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="grid gap-4 sm:grid-cols-[100px_1fr_auto]">
                      <div className="aspect-square overflow-hidden rounded-md border">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="grid gap-1">
                        <h3 className="font-semibold text-[#718355]">{item.name}</h3>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center rounded-md border">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-r-none h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                              <span className="sr-only">Decrease quantity</span>
                            </Button>
                            <div className="flex w-10 items-center justify-center text-sm font-medium">
                              {item.quantity}
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-l-none h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                              <span className="sr-only">Increase quantity</span>
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2 text-gray-500"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-start justify-end font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#718355]">Order Summary</h3>
                <div className="mt-4 grid gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {shipping === 0 ? (
                      <p>Your order qualifies for free shipping!</p>
                    ) : (
                      <p>Add ${(50 - subtotal).toFixed(2)} more to qualify for free shipping.</p>
                    )}
                  </div>
                </div>
                <div className="mt-6 grid gap-4">
                  <div className="grid gap-2">
                    <div className="relative">
                      <Input placeholder="Promo code" className="pr-20" />
                      <Button
                        className="absolute right-0 top-0 h-full rounded-l-none bg-[#718355] hover:bg-[#87986A]"
                        size="sm"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                  <Button className="bg-[#718355] hover:bg-[#87986A]" size="lg">
                    Proceed to Checkout
                  </Button>
                  <Button variant="outline" className="border-[#718355] text-[#718355]">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="rounded-full bg-[#B5C99A]/20 p-6">
            <ShoppingBag className="h-12 w-12 text-[#718355]" />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-[#718355]">Your cart is empty</h2>
          <p className="mt-2 text-center text-gray-600">Looks like you haven't added any items to your cart yet.</p>
          <Button className="mt-6 bg-[#718355] hover:bg-[#87986A]">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Continue Shopping
          </Button>
        </div>
      )}
    </div>
  )
}
