'use client';

import { useEffect, useState } from "react";
import Breadcrumb from "@/components/breadcrumbs";
import { Pagination } from "@/components/pagination";
import ProductCard, { ProductCardSkeleton } from "./_components/product-card";
import Sidebar from "./_components/sidebar";
import { Product } from "@/lib/types";

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [showing, setShowing] = useState<Product[]>([]);
  const itemsPerPage = 10;

  // 1) Fetch sekali saja
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setAllProducts(data.products);
        setShowing(data.products.slice(0, itemsPerPage));
      } catch (e) {
        console.error(e);
      }
    };
    fetchProducts();
  }, []); // <- kosong

  // 2) Update `showing` setiap `currentPage` atau `allProducts` berubah
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    setShowing(allProducts.slice(start, start + itemsPerPage));
  }, [currentPage, allProducts]);

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-5 mt-12">
        <Sidebar />

        {showing.length === 0 && (
          <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {Array.from({ length: itemsPerPage }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        )}

        <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-6">
          {showing.map((product) => (
            <ProductCard
              key={product.id}
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
              onQuickView={() => { }}
              onAddToCart={() => { }}
              onAddToWishlist={() => { }}
            />
          ))}
        </div>
      </div>

      <Pagination
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        data={allProducts}
      />
    </div>
  );
}
