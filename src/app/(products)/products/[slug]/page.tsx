import ProductDetailCard from "./_components/product-detail-card";

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

const ProductDetail = async ({ params }: ProductDetailProps) => {
  const { slug } = params;

  return (
    <div className="container">
      <ProductDetailCard id={slug} />
    </div>
  )
}

export default ProductDetail
