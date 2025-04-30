import ProductDetailCard from "./_components/product-detail-card";

import { Product } from "@/lib/types";

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

const ProductDetail = async ({ params }: ProductDetailProps) => {
  const { slug } = params; // bukan await params

  const response = await fetch(`https://dummyjson.com/products/search?q=${slug}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = (await response.json()) as { products: Product[] };

  return (
    <div className="container">
      <ProductDetailCard data={data.products[0]} />
    </div>
  )
}

export default ProductDetail
