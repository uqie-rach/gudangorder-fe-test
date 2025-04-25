'use client';

import { useEffect, useState, useTransition } from 'react'

import { mockCategories } from '@/lib/data/categories';
import { Category } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

const CategoryFilter = () => {
  const [categories, setCategories] = useState<Category[] | []>([])
  const [isPending, startTransition] = useTransition();

  const fetchCategories = () => {
    startTransition(() => {
      new Promise<Category[]>(resolve => {
        setTimeout(() => {
          resolve(mockCategories);
        }, 2000);
      }).then(res => {
        setCategories(res);
      })
    })
  }

  useEffect(() => {
    fetchCategories();
  }, [])
  return (
    <div>
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Categories</h3>

        <div className="tp-shop-widget-content">
          <div className="tp-shop-widget-categories">
            <ul className='space-y-3'>
              {
                !isPending && categories.length > 0 ? categories.map((category) => (
                  <li key={category.id}>
                    <button>{category.name} <span>10</span></button>
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

export default CategoryFilter

export const CategoryFilterSkeleton = () => {
  return (
    <div>
      loading
    </div>
  )
}
