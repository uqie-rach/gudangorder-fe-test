'use client';

import { useEffect, useState, useTransition } from "react";

import Breadcrumb from "@/components/breadcrumbs";
import { Pagination } from "@/components/pagination";

import ProductCard, { ProductCardSkeleton } from "./_components/product-card";
import Sidebar from "./_components/sidebar";

import { getProductsAction, QueryParams } from "@/action/product";
import { Product } from "@/lib/types/product";
import { useFilters } from "@/store/use-filters";

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [allProducts, setAllProducts] = useState<Product[] | null>([]);
  const [showing, setShowing] = useState<Product[] | null>([]);
  const itemsPerPage = 5;

  const { category, priceRange } = useFilters();

  const [isPending, startTransition] = useTransition();

  function getProducts(query?: QueryParams[]) {
    startTransition(() => {
      getProductsAction({ query })
        .then((res) => {
          setAllProducts(res.data);
          setShowing(res?.data?.slice(0, itemsPerPage) ?? []);
        })
    })
  };

  // 1) Fetch sekali saja
  useEffect(() => {
    getProducts();
  }, []); // <- kosong

  useEffect(() => {
    getProducts(
      [
        {
          key: "category",
          value: category === "all" ? undefined : category
        },
        {
          key: "minPrice",
          value: priceRange[0] === 0 ? undefined : priceRange[0]
        },
        {
          key: "maxPrice",
          value: priceRange[1] === 0 ? undefined : priceRange[1]
        },
      ]
    );
    console.log(showing);
  }, [priceRange, category]); // <- ketika `priceRange` atau `category` berubah

  // 2) Update `showing` setiap `currentPage` atau `allProducts` berubah
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    setShowing(allProducts?.slice(start, start + itemsPerPage) ?? []);
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-5 my-12 relative">
        <div className="md:sticky top-0">
          <Sidebar />
        </div>

        <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-6">
          {
            isPending ? (
              <>
                {Array.from({ length: itemsPerPage }).map((_, i) => (
                  <ProductCardSkeleton key={i} className="w-full h-[300px]" />
                ))}
              </>
            ) : showing?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          }
          {
            !isPending && showing?.length === 0 && (
              <div className="col-span-2 text-center">
                <p className="text-gray-500">Tidak ada produk yang ditemukan.</p>
              </div>
            )
          }
        </div>
      </div>

      <Pagination
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        data={allProducts ?? []}
      />
    </div>
  );
}
