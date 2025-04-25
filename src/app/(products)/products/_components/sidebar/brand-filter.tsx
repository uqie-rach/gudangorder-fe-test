'use client';

import { useEffect, useState, useTransition } from "react";

import { Skeleton } from "@/components/ui/skeleton";

import { mockBrands } from "@/lib/data/brands";
import { Brand } from "@/lib/types";


const BrandFilter = () => {
  const [brands, setBrands] = useState<Brand[] | []>([]);
  const [isPending, startTransition] = useTransition();

  const fetchBrands = () => {
    startTransition(() => {
      new Promise<Brand[]>(resolve => {
        setTimeout(() => {
          resolve(mockBrands);
        }, 2000);
      }).then(res => {
        setBrands(res);
      })
    })
  }

  useEffect(() => {
    fetchBrands();
  }, [])

  return (
    <div>
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Brands</h3>

        <div className="tp-shop-widget-content">
          <div className="tp-shop-widget-categories">
            <ul>
              {
                !isPending && brands.length > 0 ? brands.map((brand) => (
                  <li key={brand.id}>
                    <button>{brand.name} <span>10</span></button>
                  </li>
                )) : [...Array(8)].map((_, i) => (
                  <li key={i} className='flex justify-between items-center'>
                    <div className='flex gap-x-4'>
                      <Skeleton className='w-5 h-5' />
                      <Skeleton className='w-40 h-5' />
                    </div>
                    <Skeleton className='w-5 h-5' />
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandFilter
