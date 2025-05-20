"use client"

import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Rating } from "@smastrom/react-rating"
import { useUserStore } from "@/store/use-user"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  id: number
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
  className?: string
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
  className
}: ProductCardProps) {
  const { isAuthenticated } = useUserStore();

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

  function handleSellNow(id: number): void {
    console.log("Sell Now clicked", id)
    if (isAuthenticated) {
      toast.success("Berhasil menambah produk ke keranjang jual!", { richColors: true })
    }

    // if unauthenticated
    toast.error("Daftar untuk menjual produk", { richColors: true })
  }

  return (
    <Card className={
      cn(
        "group relative overflow-hidden transition-all duration-300 shadow-none hover:shadow-lg grid grid-cols-1 h-fit",
        className
      )
    }>
      <CardContent className="p-0">
        {/* Product Image area */}
        <div
          className="relative overflow-hidden"
        >
          {badge && (
            <span
              className={`absolute left-3 top-3 z-10 rounded-md ${getBadgeColor(badge.type)} px-2 py-1 text-xs text-white`}
            >
              {badge.text}
            </span>
          )}

          <Link href={`/products/${title.replaceAll(' ', '-')}`} className="block">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={image || "/placeholder.svg?height=200&width=200"}
                alt={title}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>
        </div>
        {/* Product Image area */}

        {/* Product Info area */}
        <div className="p-4 space-y-4">
          <div className="mb-2">
            {category && <div className="mb-1 text-sm text-blue-500">{category}</div>}
            <h3 className="mb-1 text-sm md:text-base font-medium line-clamp-2">{title}</h3>
            <div className="flex items-center">
              <Rating
                className="h-5 w-5 fill-yellow-400 text-yellow-400"
                value={rating}
                readOnly
                style={{ width: 100 }}
              />
              <span className="ml-1 text-xs md:text-base text-gray-500">({reviews})</span>
            </div>
          </div>

          <div>
            <h6 className="text-gray-400 font-medium text-xs md:text-sm">Harga Modal</h6>
            <div className="flex items-center">
              <span className="text-sm md:text-base font-medium">${price.toFixed(2)}</span>
              {originalPrice && (
                <span className="ml-2 text-xs text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
              )}
            </div>
          </div>

          <div>
            <h6 className="text-gray-400 font-medium text-xs md:text-sm">Rekomendasi harga jual</h6>
            <div className="flex items-center">
              <span className="text-sm md:text-base font-medium text-orange-500">${price.toFixed(2)} - ${price.toFixed(2)}</span>
            </div>
          </div>
        </div>
        {/* Product Info area */}
      </CardContent>
      <CardFooter className="h-fit self-end">
        {/* Action */}
        <Button className="w-full uppercase py-2 border-primary text-primary font-bold hover:bg-blue-500/10" variant="outline" size="lg" onClick={() => handleSellNow(id)}>
          Jual Sekarang
        </Button>
        {/* Action */}
      </CardFooter>
    </Card>
  )
}

export const ProductCardSkeleton = (
  { className: classNames }: { className?: string }
) => {
  return (
    <div className="w-full p-4">
      <Skeleton className={
        cn(
          "mb-4 ",
          classNames
        )
      } />
      <div className="space-y-2">
        <Skeleton className="w-1/2 h-4" />
        <Skeleton className="w-3/4 h-4" />
        <Skeleton className="w-1/4 h-4 my-3" />
        <Skeleton className="w-2/3 h-4" />
      </div>
    </div>
  )
}
