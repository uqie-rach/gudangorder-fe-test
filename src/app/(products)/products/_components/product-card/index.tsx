"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Heart, ShoppingCart, Star } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface ProductCardProps {
  id: string
  title: string
  price: number
  originalPrice?: number
  image: string
  category?: string
  rating: number
  reviews: number
  badge?: {
    text: string
    type: "hot" | "trending" | "sale" | "discount"
  }
  onQuickView?: (id: string) => void
  onAddToCart?: (id: string) => void
  onAddToWishlist?: (id: string) => void
}

export default function ProductCard({
  id,
  title,
  price,
  originalPrice,
  image,
  category,
  rating,
  reviews,
  badge,
  onQuickView,
  onAddToCart,
  onAddToWishlist,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "hot":
        return "bg-red-500"
      case "trending":
        return "bg-green-500"
      case "sale":
        return "bg-blue-500"
      case "discount":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 shadow-none">
      <CardContent className="p-0">
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {badge && (
            <span
              className={`absolute left-3 top-3 z-10 rounded-md ${getBadgeColor(badge.type)} px-2 py-1 text-xs text-white`}
            >
              {badge.text}
            </span>
          )}

          <Link href={`/products/${id}`} className="block">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={image || "/placeholder.svg?height=200&width=200"}
                alt={title}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Product action buttons */}
          <div
            className={`absolute bottom-0 left-0 right-0 flex justify-center space-x-2 bg-white/80 p-2 backdrop-blur-sm transition-all duration-300 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
          >
            <button
              onClick={() => onQuickView?.(id)}
              className="rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100"
              aria-label="Quick view"
            >
              <Eye className="h-4 w-4 text-gray-600" />
            </button>
            <button
              onClick={() => onAddToCart?.(id)}
              className="rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100"
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-4 w-4 text-gray-600" />
            </button>
            <button
              onClick={() => onAddToWishlist?.(id)}
              className="rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100"
              aria-label="Add to wishlist"
            >
              <Heart className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="p-4">
          {category && <div className="mb-1 text-xs text-blue-500">{category}</div>}
          <h3 className="mb-1 text-sm font-medium line-clamp-2">{title}</h3>

          <div className="mb-2 flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              />
            ))}
            <span className="ml-1 text-xs text-gray-500">({reviews})</span>
          </div>

          <div className="flex items-center">
            <span className="text-sm font-medium">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="ml-2 text-xs text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export const ProductCardSkeleton = () => {
  return (
    <div className="w-full p-4">
      <Skeleton className="w-full h-[300px] mb-4" />
      <div className="space-y-2">
        <Skeleton className="w-1/2 h-4" />
        <Skeleton className="w-3/4 h-4" />
        <Skeleton className="w-1/4 h-4 my-3" />
        <Skeleton className="w-2/3 h-4" />
      </div>
    </div>
  )
}
