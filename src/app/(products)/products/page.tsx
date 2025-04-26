'use client';

import Breadcrumb from "@/components/breadcrumbs";
import { Pagination } from "@/components/pagination";
import { useEffect, useState } from "react";
import ProductCard, { ProductCardSkeleton } from "./_components/product-card";
import Sidebar from "./_components/sidebar";
import { Product } from "@/lib/types";

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState({
    products: [],
    showing: [],
  });
  const itemsPerPage = 10;

  const fetchProducts = async () => {
    try {
      const products = await fetch("https://dummyjson.com/products");
      if (!products.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await products.json();

      setProducts({
        products: data.products,
        showing: data.products.slice(0, itemsPerPage),
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  useEffect(() => {
    setProducts({
      ...products,
      showing: products.products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    })
  }, [currentPage, products])

  return (
    <div className="container">
      <header>
        <h1>Products</h1>
        <Breadcrumb
          xPos="left"
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
          ]}
        />
      </header>

      <div className="grid grid-cols-1 justify-center grid-rows-1 md:grid-cols-3 gap-y-12 md:gap-x-5 mt-12">
        <Sidebar />

        {
          products.showing.length === 0 ? (
            <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {Array.from({ length: itemsPerPage }, (_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
            </div>
          ) : null
        }

        <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-4 lg:gap-y-6">
          {
            products.showing && products.showing.map((product: Product) => {
              return (
                <ProductCard
                  key={product.id}
                  slug={product.title}
                  title={product.title}
                  rating={product.rating}
                  price={product.price}
                  category={product.category}
                  image={product.images[0]}
                />
              )
            })
          }
        </div>
      </div>
      <br /><br />
      <Pagination
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        data={products.products}
      />
    </div>
  );
}
