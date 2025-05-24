"use client"

import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"

import { useUserStore } from "@/store/use-user"

import { cn, formatPriceToRupiah } from "@/lib/utils"
import { Product } from "@/lib/types/product"
import { useFilters } from "@/store/use-filters"
import { useRouter } from "next/navigation"
import Tooltips from "@/components/tooltips"
import { ArrowUpRight } from "lucide-react"

interface ProductCardProps {
  product: Product
}
export default function ProductCard({ product }: ProductCardProps) {
  const { isAuthenticated } = useUserStore();
  const { setCategory } = useFilters();
  const router = useRouter();

  const image = product?.coverImage ?? product?.multipleImage?.[0]?.url

  function handleSellNow(id: string): void {
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
      )
    }>
      <CardContent className="p-0">
        {/* Product Image area */}
        <div
          className="relative overflow-hidden"
        >
          <Link href={`/products/${product.id}`} className="block">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={image === '' ? "https://placehold.co/600x400" : image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>
        </div>
        {/* Product Image area */}

        {/* Product Info area */}
        <div className="p-4 space-y-4">
          <div className="mb-2">
            <Tooltips
              description="Klik untuk melihat produk serupa"
              side="right"
            >
              <span
                onClick={() => {
                  setCategory(product.category!);
                  router.push(`/products?category=${product.category}`);
                }}
                className="mb-1 text-blue-400 cursor-pointer inline-flex gap-2"
              >
                {product.category} <ArrowUpRight />
              </span>
            </Tooltips>
            <h3 className="mb-1 text-sm md:text-base font-semibold line-clamp-2 capitalize">{product.name}</h3>
          </div>

          <div>
            <h6 className="text-gray-400 font-medium text-xs md:text-sm">Harga Modal</h6>
            <div className="flex items-center">
              <span className="text-sm md:text-base font-medium">{formatPriceToRupiah(product.amount)}</span>
              {formatPriceToRupiah(product.amount) && (
                <span className="ml-2 text-xs text-gray-500 line-through">{formatPriceToRupiah(product.amount)}</span>
              )}
            </div>
          </div>

          <div>
            <h6 className="text-gray-400 font-medium text-xs md:text-sm">Rekomendasi harga jual</h6>
            <div className="flex items-center">
              <span className="text-sm md:text-base font-medium text-orange-500">{formatPriceToRupiah(product.amount)} - {formatPriceToRupiah(product.amount)}</span>
            </div>
          </div>
        </div>
        {/* Product Info area */}
      </CardContent>
      <CardFooter className="h-fit self-end">
        {/* Action */}
        <Button
          variant='secondary'
          className="w-full uppercase"
          size="lg"
          onClick={() => handleSellNow(product?.id)}
        >
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
