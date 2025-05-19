'use client';

import ProductCard, { ProductCardSkeleton } from '@/app/(products)/products/_components/product-card';
import { mockProducts } from '@/lib/data/products';
import { Product } from '@/lib/types';
import React, { useEffect, useState } from 'react'

const TrendingProducts = () => {
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
  return (
    <section className="mt-12 container">
      <h2 className="text-2xl font-semibold mb-4">Trending Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.length === 0 &&
          Array.from({ length: 8 }).map((_, i) => (
            <div key={1} className="flex-shrink-0">
              <ProductCardSkeleton className='w-[240px] h-[300px]' />
            </div>
          ))
        }
        {products.slice(0, 8).map((product) => (
          <div key={product.id} className="w-full flex-shrink-0">
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
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrendingProducts
