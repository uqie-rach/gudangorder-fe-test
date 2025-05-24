import Showcase from "./_components/showcase";

import { mayarProducts } from "@/lib/data/products";
import { ProductsResponse } from "@/lib/types/product";

interface ProductLandingPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProductLandingPage(
  { params }: ProductLandingPageProps
) {
  const { id } = await params;

  // simulate fetch prod by id
  async function fetchProduct(id: string) {
    const res: ProductsResponse = await new Promise((res) => {
      setTimeout(() => {
        const product = mayarProducts.data.filter((product) => product.id === id);
        res({
          ...mayarProducts,
          data: product
        });
      }, 1200);
    })

    return res;
  }
  const product = await fetchProduct(id);
  console.log(product)

  return (
    <div className="container">
      <Showcase data={product} />
    </div>
  )
}
