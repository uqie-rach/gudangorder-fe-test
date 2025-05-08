"use client"

import type React from "react"
import { Rating } from "@smastrom/react-rating"
import { useState } from "react"
import { toast } from "sonner"

import { ReviewsTab } from "../product-detail-card/review-tab"
import { AdditionalInfoTab } from "../product-detail-card/additional-info"
import { DescriptionTab } from "../product-detail-card/description-tab"
import { AnimatedTabs } from "../product-detail-card/animated-tabs"
import { FaqTab } from "../product-detail-card/faq-tab"
import { ProductPreview } from "../product-preview"

import { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"

interface ProductDetailProps {
  product: Product
}

export default function ProductDetailCard(
  { product }: ProductDetailProps
) {
  const [productCount, setProductCount] = useState(product.stock > 0 ? 1 : 0)

  const handleIncrement = () => {
    if (productCount < product.stock) {
      setProductCount(productCount + 1)
    }
  }

  const handleDecrement = () => {
    if (productCount > 0 && productCount !== 1) {
      setProductCount(productCount - 1)
    }
  }

  const handleAddToCart = () => {
    if (productCount > 0) {
      // Add to cart logic here
      toast.success(`${product.title} added to cart!`)
    } else {
      toast.error("Please select a quantity before adding to cart.")
    }
  }

  // Mock product data
  const mockProduct = {
    ...product,
    additionalInfo: {
      "Standing screen display size": "Screen display Size 10.4",
      Color: "Gray, Dark gray, Mystic black",
      "Screen Resolution": "1920 x 1200 Pixels",
      "Max Screen Resolution": "2000 x 1200",
      Processor: "2.3 GHz (128 GB)",
      "Graphics Coprocessor": "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)",
      "Wireless Type": "802.11a/b/g/n/ac, Bluetooth",
    },
    faqs: [
      {
        question: "Does this tablet support external storage?",
        answer: "Yes, it supports microSD cards up to 1TB for additional storage.",
      },
      {
        question: "Does it come with a stylus?",
        answer: "Yes, the S Pen is included in the box and doesn't require charging.",
      },
      {
        question: "What is the battery life like?",
        answer: "The battery can last up to 12 hours of continuous use, depending on usage patterns.",
      },
      {
        question: "Is this tablet good for drawing?",
        answer:
          "Yes, with the included S Pen, it's great for drawing and note-taking. The pressure sensitivity provides a natural drawing experience.",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <ProductPreview images={product.images} />
        </div>

        <div>
          <h1 className="mb-2 text-3xl font-bold">{mockProduct.title}</h1>
          <div className="mb-4 flex items-center">
            <div className="flex">
              <Rating
                className="h-5 w-5 fill-yellow-400 text-yellow-400"
                value={mockProduct.rating}
                readOnly
                style={{ maxWidth: 100 }}
              />
            </div>
            <span className="ml-2 text-sm text-gray-600">({mockProduct.reviews.length} Reviews)</span>
          </div>

          <div className="mb-4 flex items-center">
            <span className="text-2xl font-bold text-blue-600">${mockProduct.price.toFixed(2)}</span>
            {mockProduct.price && (
              <span className="ml-2 text-lg text-gray-500 line-through">${mockProduct.price.toFixed(2)}</span>
            )}
            {mockProduct.price && (
              <span className="ml-2 rounded-md bg-red-100 px-2 py-1 text-sm font-medium text-red-600">
                {Math.round(((mockProduct.price - mockProduct.price) / mockProduct.price) * 100)}% Off
              </span>
            )}
          </div>

          <p className="mb-6 text-gray-600">{mockProduct.description.substring(0, 150)}...</p>

          <div className="mb-6 flex space-x-4 items-center">
            <div className="flex h-10 w-32 gap-3 items-center">
              <Button
                className="h-full w-10 rounded-l-md border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200 border-none"
                onClick={handleDecrement}
                variant='outline'
              >
                -
              </Button>
              <div className="flex h-full w-full items-center justify-center bg-white">
                {
                  productCount
                }
              </div>
              <Button
                className="h-full w-10 rounded-r-md border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200 border-none"
                onClick={handleIncrement}
                variant='outline'
              >
                +
              </Button>
            </div>
            <Button
              className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>

          <div className="flex space-x-4">
            <button className="rounded-md border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-100">
              Add to Wishlist
            </button>
            <button className="rounded-md border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-100">
              Compare
            </button>
          </div>
        </div>
      </div>

      <AnimatedTabs
        tabs={[
          { id: "description", label: "Description", content: <DescriptionTab description={mockProduct.description} /> },
          {
            id: "additional-information",
            label: "Additional Information",
            content: <AdditionalInfoTab info={mockProduct.additionalInfo} />,
          },
          {
            id: "reviews",
            label: `Reviews (${mockProduct.reviews.length})`,
            content: <ReviewsTab reviews={mockProduct.reviews} rating={mockProduct.rating} />,
          },
          { id: "faq", label: "FAQ", content: <FaqTab faqs={mockProduct.faqs} /> },
        ]}
      />
    </div>
  )
}
