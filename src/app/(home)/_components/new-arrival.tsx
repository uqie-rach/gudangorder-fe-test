"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import ProductCard, { ProductCardSkeleton } from "@/app/(products)/products/_components/product-card"

import { Product } from "@/lib/types"
import { mockProducts } from "@/lib/data/products"
import { Button } from "@/components/ui/button"


export default function NewArrivals() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [products, setProducts] = useState<Product[] | []>([]);


  const fetchProducts = async () => {
    try {
      const response = await new Promise(res => {
        setTimeout(() => {
          res(mockProducts)
        }, 1000)
      })

      setProducts(response as Product[]);
    } catch (e) {
      console.error(e);
    }
  };

  // 1) Fetch sekali saja
  useEffect(() => {

    fetchProducts();
  }, []);
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="relative text-2xl font-bold">
            New Arrivals
            <span className="absolute -bottom-1 left-0 h-1 w-12 bg-red-500"></span>
          </h2>
          <div className="flex space-x-2">
            <Button
              variant='outline'
              size='icon'
              onClick={scrollLeft}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition-colors hover:bg-gray-100"
              aria-label="Previous products"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant='outline'
              size='icon'
              onClick={scrollRight}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition-colors hover:bg-gray-100"
              aria-label="Next products"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="flex space-x-4 overflow-x-auto pb-4 w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.length === 0 &&
            Array.from({ length: 8 }).map((_, i) => (
              <ProductCardSkeleton key={i} className="w-64 h-[300px]" />
            ))
          }
          {products.length !== 0 && products.map((product) => (
            <div key={product.id} className="w-64 flex-shrink-0">
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                originalPrice={product.price}
                image={product.images[0]}
                category={product.category}
                rating={product.rating}
                reviews={product.reviews.length}
                badge={
                  {
                    text: "New",
                    type: "sale"
                  }
                }
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
