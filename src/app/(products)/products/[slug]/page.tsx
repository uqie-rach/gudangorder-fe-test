import { Product } from "@/lib/types";
import ProductDetailCard from "./_components/product-detail-card";

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();

  return data.products.map((product: Product) => ({
    slug: product.title, // atau kalau mau lebih aman pakai ID
  }));
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
