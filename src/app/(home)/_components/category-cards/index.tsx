
import React from 'react'
import { CategoryCard } from './category-card'

const CategoryCards = () => {
  return (
    <section className="mt-12 container">
      <h2 className="text-2xl font-semibold mb-4">Product Categories</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <CategoryCard title="Headphones" image="/assets/img/product/category/product-cat-1.png" />
        <CategoryCard title="Mobile Phone" image="/assets/img/product/category/product-cat-2.png" />
        <CategoryCard title="CPU Heat Pipes" image="/assets/img/product/category/product-cat-3.png" />
        <CategoryCard title="Smart Watch" image="/assets/img/product/category/product-cat-4.png" />
        <CategoryCard title="With Bluetooth" image="/assets/img/product/category/product-cat-5.png" />
      </div>
    </section>
  )
}

export default CategoryCards
