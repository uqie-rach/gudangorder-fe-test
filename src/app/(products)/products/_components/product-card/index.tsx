import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPriceToRupiah } from "@/lib/utils";
import { useUserStore } from "@/store/use-user";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import Image from "next/image";
import Link from "next/link";


interface ProductCardProps {
  title: string;
  rating: number;
  price: number;
  category: string;
  image: string;
  oldPrice?: number;
  slug: string;
}

const ProductCard = (
  { title, slug, rating, price, category, image, oldPrice }: ProductCardProps
) => {

  const { isAuthenticated } = useUserStore();

  return (
    <div className="w-full">
      <div className="tp-product-item-2 h-full">
        <div className="tp-product-thumb-2 p-relative z-index-1 fix w-img">
          <Link href={`products/${slug}`}>
            <Image src={image} alt={title} width={516} height={548} className="aspect-square object-cover" />
          </Link>
          {/* <!-- product action --> */}
          {/* <div className="tp-product-action-2 tp-product-action-blackStyle">
            <div className="tp-product-action-item-2 d-flex flex-column space-y-3">
              <button type="button" className="bg-blue-50 hover:bg-blue-100 transition-colors w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-md">
                <FontAwesomeIcon icon={faShoppingCart} size="sm" className="text-blue-500" />
                <span className="tp-product-tooltip tp-product-tooltip-right">Add to Cart</span>
              </button>
              <button type="button" className="tp-product-action-btn-2 tp-product-quick-view-btn" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                <FontAwesomeIcon icon={faEye} size="sm" />
                <span className="tp-product-tooltip tp-product-tooltip-right">Quick View</span>
              </button>
              <button type="button" className="bg-red-50 hover:bg-red-100 transition-colors w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-md">
                <FontAwesomeIcon icon={faHeart} size="sm" className="text-red-500" />
                <span className="tp-product-tooltip tp-product-tooltip-right">Add To Wishlist</span>
              </button>
            </div>
          </div> */}
        </div>
        <div className="tp-product-content-2 pt-15">
          <div className="tp-product-tag-2">
            <a href="#">{category}</a>
          </div>
          <h3 className="tp-product-title-2">
            <Link href={`/${slug}`}>
              {title}
            </Link>
          </h3>
          <div className="my-2 flex items-center gap-2">
            <Rating
              style={{ maxWidth: 70 }}
              value={rating}
              readOnly
            />
            {rating}
          </div>
          <div className="tp-product-price-wrapper-2 mb-3">
            <span className="tp-product-price-2 new-price">
              {formatPriceToRupiah(price)}
            </span>
            <span className="tp-product-price-2 old-price">
              {oldPrice ? formatPriceToRupiah(oldPrice) : ""}
            </span>
          </div>

          {/* Product action button */}
          {
            isAuthenticated && (
              <div className="flex gap-x-3">
                <Button className="bg-blue-50 hover:bg-blue-100 flex items-center justify-center shadow-md">
                  <FontAwesomeIcon icon={faShoppingCart} size="sm" className="text-blue-500" />
                </Button>
                <Button className="bg-red-50 hover:bg-red-100 flex items-center justify-center shadow-md">
                  <FontAwesomeIcon icon={faHeart} size="sm" className="text-red-500" />
                </Button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ProductCard;

export const ProductCardSkeleton = () => {
  return (
    <div className="w-full p-4">
      <Skeleton className="w-full h-[300px] mb-4" />
      <div className="space-y-2">
        <Skeleton className="w-1/2 h-4" />
        <Skeleton className="w-3/4 h-4" />
        <Skeleton className="w-1/4 h-4 my-3" />
        <Skeleton className="w-2/3 h-4" />
      </div>
    </div>
  )
}
