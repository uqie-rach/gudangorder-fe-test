'use client';

import React, { useEffect, useState, useTransition } from 'react'

import ProductCard, { ProductCardSkeleton } from '@/app/(products)/products/_components/product-card';

import { Product } from '@/lib/types/product';
import { getProductsAction, QueryParams } from '@/action/product';

const TrendingProducts = () => {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [isPending, startTransition] = useTransition();

  function getProducts(query?: QueryParams[]) {
    startTransition(() => {
      getProductsAction({ query })
        .then((res) => {
          setProducts(res?.data ?? []);
        })
    })
  };

  useEffect(() => {
    getProducts();
  }, []); // => initial load

  return (
    <section className="mt-12 container">
      <h2 className="text-2xl font-semibold mb-4">Trending Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {
          isPending ? (
            Array.from({ length: 6 }).map((_, index) => (
              <ProductCardSkeleton key={index} className='w-full h-[300px]' />
            ))
          ) : (
            products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">
                No trending products available.
              </div>
            )
          )
        }
      </div>
    </section>
  )
}

export default TrendingProducts
