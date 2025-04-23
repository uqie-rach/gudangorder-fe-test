
interface ProductDetailProps {
  params: Promise<
    {
      slug: string
    }
  >
}

const ProductDetail = async ({ params }: ProductDetailProps) => {
  const { slug } = await params

  return (
    <div>ProductDetail {slug}</div>
  )
}

export default ProductDetail
