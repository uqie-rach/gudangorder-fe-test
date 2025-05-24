'use client';

import { useEffect, useState, useTransition } from 'react'

import { Skeleton } from '@/components/ui/skeleton';

import { mockCategories } from '@/lib/data/categories';
import { Category } from '@/lib/types'
;
import { useFilters } from '@/store/use-filters';

const CategoryFilter = () => {
  const [categories, setCategories] = useState<Category[] | []>([])

  const { setCategory } = useFilters();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    fetchCategories();
  }, []) // => fetch once on mount

  const fetchCategories = () => {
    startTransition(() => {
      new Promise<Category[]>(resolve => {
        setTimeout(() => {
          resolve(mockCategories);
        }, 1000);
      }).then(res => {
        setCategories(res);
      })
    })
  } // => simulate fetching categories

  function handleSetCategory(e: React.MouseEvent<HTMLButtonElement>) {
    const category = e.currentTarget.textContent || 'all';
    setCategory(category);
  } // => set category filter

  return (
    <div>
      <div className="tp-shop-widget mb-50">
        <h3 className="text-lg font-semibold">Kategori</h3>

        <div className="tp-shop-widget-content">
          <div className="tp-shop-widget-categories">
            <ul className='space-y-3'>
              {
                !isPending && categories.length > 0 ? categories.map((category) => (
                  <li key={category.id}>
                    <button onClick={handleSetCategory}>{category.name}</button>
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
