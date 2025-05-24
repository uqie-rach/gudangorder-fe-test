"use client"

import { toast } from "sonner"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useState, useTransition } from "react"
import Link from "next/link"

import { DescriptionTab } from "../product-detail-card/description-tab"
import { AnimatedTabs } from "../product-detail-card/animated-tabs"
import { ProductPreview } from "../product-preview"
import ResourceTab from "./resource"

import { Button } from "@/components/ui/button"
import Tooltips from "@/components/tooltips"
import { Skeleton } from "@/components/ui/skeleton"

import { Product } from "@/lib/types/product"
import { formatPriceToRupiah } from "@/lib/utils"

import { useUserStore } from "@/store/use-user"

import { getProductByIdAction } from "@/action/product"

interface ProductDetailProps {
  id: string
}

/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
export default function ProductDetailCard(
  { id }: ProductDetailProps
) {
  const [product, setProduct] = useState<Product | null>(null)

  const { isAuthenticated } = useUserStore();
  const [isPending, startTransition] = useTransition();

  const mayarProductBaseUrl = process.env.NEXT_PUBLIC_MAYAR_BASE_PRODUCT_URL;

  // Initial fetch product data
  useEffect(() => {
    fetchProductById(id)
  }, [id])

  async function fetchProductById(productId: string) {
    startTransition(() => {
      getProductByIdAction(productId)
        .then((res) => {
          if (res.statusCode === 200 && res.data) {
            const originalProduct = res.data;

            // Gabungkan coverImage ke multipleImage (jika ada)
            const multipleImage = [...(originalProduct.multipleImage ?? [])];

            if (originalProduct.coverImage && originalProduct.coverImageId) {
              multipleImage.push({
                url: originalProduct.coverImage,
                id: originalProduct.coverImageId,
                fileType: "jpeg",
                createdAt: Date.now(),
                updatedAt: Date.now(),
              });
            }

            // Update state dengan product baru
            setProduct({ ...originalProduct, multipleImage });

            toast.success("Berhasil mendapatkan data produk!", { richColors: true });
            console.log("Product data fetched successfully", originalProduct);
          } else {
            toast.error("Gagal mendapatkan data produk!", { richColors: true });
          }
        })
        .catch((err) => {
          console.error(err);
          toast.error("Gagal mendapatkan data produk!", { richColors: true });
        });
    });
  }

  function handleSellNow(id: string) {
    console.log("Sell Now clicked", id)

    if (isAuthenticated) {
      toast.success("Berhasil menambah produk ke keranjang jual!", { richColors: true })
    }

    // if unauthenticated
    if (!isAuthenticated) {
      toast.error("Daftar untuk dapat menjual produk ini", { richColors: true })
    }
  }

  if (!product && isPending) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 grid grid-cols-1 gap-20 md:grid-cols-2">
          <div className="space-y-8">
            <Skeleton className="h-96 w-full rounded-lg" />
            <div className="flex gap-3">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <Skeleton className="h-10 w-10 rounded-lg" />
              <Skeleton className="h-10 w-10 rounded-lg" />
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-2">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-8 w-1/4" />
              <Skeleton className="h-10 w-3/5" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-8 w-1/4" />
              <Skeleton className="h-10 w-3/4" />
            </div>
            <div className="flex gap-x-4">
              <div>
                <Skeleton className="h-10 w-20 block mb-2" />
                <Skeleton className="h-10 w-10 block" />
              </div>
              <div>
                <Skeleton className="h-10 w-20 block mb-2" />
                <Skeleton className="h-10 w-10 block" />
              </div>
            </div>
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div>
          <ProductPreview images={product?.multipleImage ?? []}
          />
        </div>
        {/* Product Images */}

        {/* Product Detail */}
        <div className="space-y-8">
          {/* Title & Reviews */}
          <div>
            <h1 className="text-3xl font-bold">{product?.name}</h1>
            <p className="text-gray-400">
              Rekomendasi Harga Jual: <span className="text-red-400 font-bold">{formatPriceToRupiah((product?.amount ?? 0) + ((product?.amount ?? 0) * 0.4))}</span>
            </p>
          </div>
          {/* Title & Reviews */}

          {/* Pricing */}
          <div className="space-y-2">
            {/* Price */}
            <div className="space-y-2">
              <h6 className="text-gray-400 font-semibold">Harga Modal</h6>
              <div>
                <h4 className="text-xl font-bold text-gray-600 block">{formatPriceToRupiah((product?.amount ?? 0))}</h4>
              </div>
            </div>
            {/* Price */}

            {/* Recommended Price */}
            <div>
              <h6 className="text-gray-400 font-semibold">Rekomendasi harga jual</h6>
              <div>
                <h4 className="text-2xl font-bold text-red-400 block">{formatPriceToRupiah((product?.amount ?? 0))} - {formatPriceToRupiah((product?.amount ?? 0) + ((product?.amount ?? 0) * 0.4))}</h4>
              </div>
            </div>
            {/* Recommended Price */}
          </div>
          {/* Pricing */}

          {/* Additional info */}
          <div className="flex gap-x-4">
            {/* Weight */}
            <div className="space-y-2">
              <h6 className="text-gray-400 font-semibold">Berat</h6>
              <p className="font-bold block text-center">{100}gr</p>
            </div>
            {/* Weight */}


            {/* Stock */}
            <div className="space-y-2">
              <h6 className="text-gray-400 font-semibold">Stok Tersedia</h6>
              <p className="font-bold block text-center">{product?.qty}</p>
            </div>
            {/* Stock */}
          </div>
          {/* Additional info */}

          {/* Category */}
          <Tooltips
            description="Klik untuk melihat produk lain di kategori ini"
            side="top"
          >
            <Link href={`/products?search=${product?.category}`} className="px-4 bg-blue-50 rounded-full py-1 w-fit h-fit font-semibold text-blue-400 hover:text-blue-500 inline-flex gap-x-2 group">{product?.category} <ArrowUpRight className="group-hover:scale-125 transition-transform" /></Link>
          </Tooltips>
          {/* Category */}


          {/* Actions */}
          <div className="mb-6 flex space-x-6 items-center">
            <Button
              className="w-full uppercase"
              variant="secondary"
              size="lg"
              onClick={() => handleSellNow((product?.id ?? ""))}>
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
          {
            id: "description",
            label: "Deskripsi Produk",
            content: <DescriptionTab description={product?.description ?? ''} />
          },
          {
            id: "resource",
            label: "Sumber Daya Produk",
            content: <ResourceTab
              assetUrl={'https://www.google.com'}
              buyerUrl={`${mayarProductBaseUrl}/checkout/${product?.link}`}
              productId={product?.id ?? ''} />,
            needAuth: !true
          },
        ]}
      />
    </div>
  )
}
