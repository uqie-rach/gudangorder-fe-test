"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Newsletter from "./_components/newsletter"
import { CartItem } from "@/lib/types"
import CartLoading from "./loading"

const productDummy = [
  {
    "id": 1,
    "title": "Essence Mascara Lash Princess",
    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "category": "beauty",
    "price": 9.99,
    "discountPercentage": 7.17,
    "rating": 4.94,
    "stock": 5,
    "tags": [
      "beauty",
      "mascara"
    ],
    "brand": "Essence",
    "sku": "RCH45Q1A",
    "weight": 2,
    "dimensions": {
      "width": 23.17,
      "height": 14.43,
      "depth": 28.01
    },
    "warrantyInformation": "1 month warranty",
    "shippingInformation": "Ships in 1 month",
    "availabilityStatus": "Low Stock",
    "reviews": [
      {
        "rating": 2,
        "comment": "Very unhappy with my purchase!",
        "date": "2024-05-23T08:56:21.618Z",
        "reviewerName": "John Doe",
        "reviewerEmail": "john.doe@x.dummyjson.com"
      },
      {
        "rating": 2,
        "comment": "Not as described!",
        "date": "2024-05-23T08:56:21.618Z",
        "reviewerName": "Nolan Gonzalez",
        "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
      },
      {
        "rating": 5,
        "comment": "Very satisfied!",
        "date": "2024-05-23T08:56:21.618Z",
        "reviewerName": "Scarlett Wright",
        "reviewerEmail": "scarlett.wright@x.dummyjson.com"
      }
    ],
    "returnPolicy": "30 days return policy",
    "minimumOrderQuantity": 24,
    "meta": {
      "createdAt": "2024-05-23T08:56:21.618Z",
      "updatedAt": "2024-05-23T08:56:21.618Z",
      "barcode": "9164035109868",
      "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
    },
    "images": [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
  },
  {
    "id": 2,
    "title": "Eyeshadow Palette with Mirror",
    "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    "category": "beauty",
    "price": 19.99,
    "discountPercentage": 5.5,
    "rating": 3.28,
    "stock": 44,
    "tags": [
      "beauty",
      "eyeshadow"
    ],
    "brand": "Glamour Beauty",
    "sku": "MVCFH27F",
    "weight": 3,
    "dimensions": {
      "width": 12.42,
      "height": 8.63,
      "depth": 29.13
    },
    "warrantyInformation": "1 year warranty",
    "shippingInformation": "Ships in 2 weeks",
    "availabilityStatus": "In Stock",
    "reviews": [
      {
        "rating": 4,
        "comment": "Very satisfied!",
        "date": "2024-05-23T08:56:21.618Z",
        "reviewerName": "Liam Garcia",
        "reviewerEmail": "liam.garcia@x.dummyjson.com"
      },
      {
        "rating": 1,
        "comment": "Very disappointed!",
        "date": "2024-05-23T08:56:21.618Z",
        "reviewerName": "Nora Russell",
        "reviewerEmail": "nora.russell@x.dummyjson.com"
      },
      {
        "rating": 5,
        "comment": "Highly impressed!",
        "date": "2024-05-23T08:56:21.618Z",
        "reviewerName": "Elena Baker",
        "reviewerEmail": "elena.baker@x.dummyjson.com"
      }
    ],
    "returnPolicy": "30 days return policy",
    "minimumOrderQuantity": 32,
    "meta": {
      "createdAt": "2024-05-23T08:56:21.618Z",
      "updatedAt": "2024-05-23T08:56:21.618Z",
      "barcode": "2817839095220",
      "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
    },
    "images": [
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
  const storedCartItems = localStorage.getItem("cart");

  let shouldInitialize = true;

  if (storedCartItems) {
    try {
      const parsedItems = JSON.parse(storedCartItems);
      if (Array.isArray(parsedItems) && parsedItems.length > 0) {
        setCartItems(parsedItems);
        shouldInitialize = false;
      }
    } catch (error) {
      console.error("Failed to parse stored cart items:", error);
    }
  }

  if (shouldInitialize) {
    const formattedCartItems = productDummy.map(product => ({
      id: product.id.toString(),
      name: product.title,
      price: product.price,
      originalPrice: product.price / (1 - product.discountPercentage / 100),
      quantity: 1,
      image: product.thumbnail,
      vendor: product.brand,
      inStock: product.stock > 0,
    }));

    const timer = setTimeout(() => {
      setCartItems(formattedCartItems);
    }, 1500);

    localStorage.setItem("cart", JSON.stringify(formattedCartItems));

    return () => clearTimeout(timer);
  }

  setIsLoading(false);
}, []);


  const [couponCode, setCouponCode] = useState("")

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const applyCoupon = () => {
    // Implement coupon logic here
    console.log("Applying coupon:", couponCode)
  }

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1367 // ~13.67% tax rate to match the example
  const total = subtotal + tax

  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        {!isLoading ?
          <div className="flex flex-col lg:flex-row gap-8 mb-4">
            {/* Left side: Cart items */}
            <div className="lg:w-3/4">
              <Table>
                <TableHeader className="bg-gray-100">
                  <TableRow>
                    <TableHead className="w-[50%]">Product</TableHead>
                    <TableHead className="text-center">Price</TableHead>
                    <TableHead className="text-center">Quantity</TableHead>
                    <TableHead className="text-center">Total</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="flex gap-4">
                          <div className="w-20 h-20 relative">
                            <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-contain" />
                          </div>
                          <div>
                            <h5 className="font-light">{item.name}</h5>
                            <p className="text-green-600 text-sm">In stock</p>
                            <p className="text-sm text-gray-600">Vendor: {item.vendor}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="font-medium">${item.price.toFixed(2)}</div>
                        {item.originalPrice > item.price && (
                          <div className="text-gray-500 line-through text-sm">${item.originalPrice.toFixed(2)}</div>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          <div className="flex border rounded-md">
                            <button
                              className="px-3 py-1 border-r"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              −
                            </button>
                            <span className="px-4 py-1">{item.quantity}</span>
                            <button
                              className="px-3 py-1 border-l"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center font-medium">${(item.price * item.quantity).toFixed(2)}</TableCell>
                      <TableCell>
                        <button onClick={() => removeItem(item.id)} className="text-gray-500 hover:text-red-500">
                          <Trash2 size={20} />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-8">
                <div className="flex flex-col items-start gap-2">
                  <div>Coupon Code:</div>
                  <div className="flex">
                    <Input
                      type="text"
                      placeholder="Enter Coupon Code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="rounded-r-none"
                    />
                    <Button onClick={applyCoupon} className="rounded-l-none h-14 bg-[#001529] hover:bg-[#002a4a]">
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Order summary */}
            <div className="lg:w-1/4">
              <div className="border p-6 rounded-md">
                <div className="flex justify-between text-lg font-medium mb-4">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between mb-4">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-lg font-bold mb-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="text-sm text-gray-500 mb-6">(Shipping fees not included)</div>

                <Button className="w-full py-6 bg-[#001529] hover:bg-[#002a4a] mb-4">Proceed to Checkout</Button>

                <div className="text-center">
                  <Link href="/products" className="text-gray-600 hover:text-gray-900">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div> :
          <CartLoading />
        }
      </div>
      <Newsletter />
    </main>
  )
}
