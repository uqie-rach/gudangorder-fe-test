"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Rating } from "@smastrom/react-rating"

import { DescriptionTab } from "../product-detail-card/description-tab"
import { AnimatedTabs } from "../product-detail-card/animated-tabs"
import { ProductPreview } from "../product-preview"

import { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import ResourceTab from "./resource"
import { useUserStore } from "@/store/use-user"
// import { Minus, Plus } from "lucide-react"

interface ProductDetailProps {
  product: Product
}

export default function ProductDetailCard(
  { product }: ProductDetailProps
) {
  const { isAuthenticated } = useUserStore();

  const fullProduct = {
    ...product,
    buyerUrl: product?.buyerUrl ?? "https://ekata.myr.id/checkout/pipe-flower"
  };

  const handleSellNow = (id: number) => {
    if (isAuthenticated) {
      toast.success("Berhasil menambah produk ke keranjang jual!", { richColors: true })
    }

    // if unauthenticated
    if (!isAuthenticated) {
      toast.error("Daftar untuk dapat menjual produk ini", { richColors: true })
    }
  }


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div>
          <ProductPreview images={fullProduct?.images} />
        </div>
        {/* Product Images */}

        {/* Product Detail */}
        <div className="space-y-5">
          {/* Title & Reviews */}
          <div className="mb-4">
            <h1 className="text-3xl font-bold">{fullProduct?.title}</h1>
            <div className="flex items-center">
              <Rating
                className="h-5 w-5 fill-yellow-400 text-yellow-400"
                value={fullProduct?.rating}
                readOnly
                style={{ width: 100 }}
              />
              <span className="ml-2 text-sm text-gray-600">({fullProduct?.reviews?.length} Reviews)</span>
            </div>
          </div>
          {/* Title & Reviews */}

          {/* Price */}
          <div className="space-y-2">
            <h6 className="text-gray-400 font-semibold">Harga Modal</h6>
            <div>
              <span className="text-2xl font-bold text-blue-600 block">${fullProduct?.price?.toFixed(2)}</span>
              {fullProduct?.price && (
                <span className="text-lg text-gray-500 line-through">${fullProduct?.price?.toFixed(2)}</span>
              )}
              {fullProduct?.price && (
                <span className="ml-2 rounded-md bg-red-100 px-2 py-1 text-sm font-medium text-red-600">
                  {Math.round(((fullProduct?.price - fullProduct?.price) / fullProduct?.price) * 100)}% Off
                </span>
              )}
            </div>
          </div>
          {/* Price */}

          {/* Recommended Price */}
          <div className="">
            <h6 className="text-gray-400 font-semibold">Rekomendasi harga jual</h6>
            <div>
              <span className="text-xl font-bold text-orange-500 block">${fullProduct?.price?.toFixed(2)} - ${fullProduct?.price?.toFixed(2)}</span>
              {fullProduct?.price && (
                <span className="text-base text-gray-500 line-through">${fullProduct?.price?.toFixed(2)}</span>
              )}
              {fullProduct?.price && (
                <span className="ml-2 rounded-md bg-red-100 px-2 py-1 text-sm font-medium text-red-600">
                  {Math.round(((fullProduct?.price - fullProduct?.price) / fullProduct?.price) * 100)}% Off
                </span>
              )}
            </div>
          </div>
          {/* Recommended Price */}

          {/* Description */}
          <p className="mb-6 text-gray-600">{fullProduct?.description?.substring(0, 200)}...</p>
          {/* Description */}

          {/* Actions */}
          <div className="mb-6 flex space-x-6 items-center">
            <Button className="w-full uppercase py-2 border-primary text-primary font-bold hover:bg-blue-500/10" variant="outline" size="lg" onClick={() => handleSellNow(fullProduct.id)}>
              Jual Sekarang
            </Button>
          </div>
          {/* Actions */}
        </div>
        {/* Product Detail */}
      </div>

      {/* Tabs */}
      <AnimatedTabs
        tabs={[
          { id: "description", label: "Description", content: <DescriptionTab description={fullProduct?.description} /> },
          { id: "resource", label: "Resource", content: <ResourceTab assetUrl={'https://www.google.com'} buyerUrl={fullProduct?.buyerUrl} />, needAuth: true },
        ]}
      />
    </div>
  )
}
