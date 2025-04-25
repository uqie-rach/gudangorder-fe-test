'use client';

import SocialShare from "@/components/social-share";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductPreview } from "./product-preview";
import ProductReview from "./product-review";

interface ProductDetailProps {
  data: Product
}

const ProductDetailCard = (
  { data }: ProductDetailProps
) => {
  return (
    <section className="tp-product-details-area">
      <div className="tp-product-details-top pb-115">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <ProductPreview
                images={data.images}
              />
            </div>
            {/* <!-- col end --> */}
            <div className="col-xl-5 col-lg-6">
              <div className="tp-product-details-wrapper">
                <div className="tp-product-details-category">
                  <span className="capitalize">
                    {
                      data.category
                    }
                  </span>
                </div>
                <h3 className="tp-product-details-title">
                  {
                    data.title
                  }
                </h3>

                {/* <!-- inventory details --> */}
                <div className="tp-product-details-inventory d-flex align-items-center mb-10">
                  <div className="tp-product-details-stock mb-10">
                    <span>
                      {
                        data.stock > 0 ? "In Stock" : "Out of Stock"
                      }
                    </span>
                  </div>
                  <div className="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
                    <div className="tp-product-details-rating">
                      <span><i className="fa-solid fa-star"></i></span>
                      <span><i className="fa-solid fa-star"></i></span>
                      <span><i className="fa-solid fa-star"></i></span>
                      <span><i className="fa-solid fa-star"></i></span>
                      <span><i className="fa-solid fa-star"></i></span>
                    </div>
                    <div className="tp-product-details-reviews">
                      <span>
                        {
                          data.reviews.length
                        }
                      </span>
                    </div>
                  </div>
                </div>
                <p>
                  {
                    data.description
                  }
                  {/* <span>See more</span> */}
                </p>

                {/* <!-- price --> */}
                <div className="tp-product-details-price-wrapper mb-20">
                  <span className="tp-product-details-price old-price">${data.price}</span>
                  <span className="tp-product-details-price new-price">${data.price - .2}</span>
                </div>

                {/* <!-- actions --> */}
                <div className="tp-product-details-action-wrapper">
                  <h3 className="tp-product-details-action-title">Quantity</h3>
                  <div className="tp-product-details-action-item-wrapper d-flex align-items-center">
                    <div className="tp-product-details-quantity">
                      <div className="tp-product-quantity mb-15 mr-15">
                        <span className="tp-cart-minus">
                          <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <input className="tp-cart-input" type="text" value="1" />
                        <span className="tp-cart-plus">
                          <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.5 10.5V1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="tp-product-details-add-to-cart mb-15 w-100">
                      <Button className="tp-product-details-add-to-cart-btn w-100" variant='outline'>Add To Cart</Button>
                    </div>
                  </div>
                  <Button className="tp-product-details-buy-now-btn w-full">Buy Now</Button>
                </div>
                <div className="tp-product-details-action-sm">

                  <button type="button" className="tp-product-details-action-sm-btn flex items-center gap-2">
                    <FontAwesomeIcon icon={faHeart} size="sm" />
                    Add Wishlist
                  </button>
                </div>
                <div className="tp-product-details-query">
                  <div className="tp-product-details-query-item d-flex align-items-center">
                    <span>SKU:  </span>
                    <p>{data.sku}</p>
                  </div>
                  <div className="tp-product-details-query-item d-flex align-items-center">
                    <span>Category:  </span>
                    <p>{data.category}</p>
                  </div>
                  <div className="tp-product-details-query-item d-flex align-items-center">
                    <span>Brand: </span>
                    <p>{data.brand}</p>
                  </div>
                </div>
                <div className="tp-product-details-social">
                  <h4 className="tp-product-details-social-title"></h4>
                  <div className="tp-product-details-social-icon d-flex align-items-center">
                    <SocialShare />
                  </div>
                </div>
                <div className="tp-product-details-msg mb-15">
                  <ul>
                    <li>30 days easy returns</li>
                    <li>Order yours before 2.30pm for same day dispatch</li>
                  </ul>
                </div>
                <div className="tp-product-details-payment d-flex align-items-center flex-wrap justify-content-between">
                  <p>Guaranteed safe <br /> & secure checkout</p>
                  {/* <img src="/assets/img/product/icons/payment-option.png" alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductReview data={data.reviews} />
    </section>
  )
}

export default ProductDetailCard;
