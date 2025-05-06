'use client';

import { Button } from "@/components/ui/button";
import { Review } from "@/lib/types"
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";

interface ProductReviewProps {
  data: Review[]
}

const ProductReview = ({ data }: ProductReviewProps) => {
  return (
    <div className="tab-pane active show" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab" tabIndex={0}>
      <div className="tp-product-details-review-wrapper pt-60">
        <div className="row">
          <div className="col-lg-6">
            <div className="tp-product-details-review-statics">
              {/* <!-- number --> */}
              <div className="tp-product-details-review-number d-inline-block mb-50">
                <h3 className="tp-product-details-review-number-title">Customer reviews</h3>
                <div className="tp-product-details-review-summery d-flex align-items-center">
                  <div className="tp-product-details-review-summery-value">
                    <span>4.5</span>
                  </div>
                  <div className="tp-product-details-review-summery-rating d-flex align-items-center">
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <p>(36 Reviews)</p>
                  </div>
                </div>
                <div className="tp-product-details-review-rating-list">
                  {/* <!-- single item --> */}
                  <div className="tp-product-details-review-rating-item d-flex align-items-center">
                    <span>5 Start</span>
                    <div className="tp-product-details-review-rating-bar">
                      <span className="tp-product-details-review-rating-bar-inner" data-width="82%"></span>
                    </div>
                    <div className="tp-product-details-review-rating-percent">
                      <span>82%</span>
                    </div>
                  </div>
                  {/* <!-- end single item --> */}

                  {/* <!-- single item --> */}
                  <div className="tp-product-details-review-rating-item d-flex align-items-center">
                    <span>4 Start</span>
                    <div className="tp-product-details-review-rating-bar">
                      <span className="tp-product-details-review-rating-bar-inner" data-width="30%"></span>
                    </div>
                    <div className="tp-product-details-review-rating-percent">
                      <span>30%</span>
                    </div>
                  </div>
                  {/* <!-- end single item --> */}

                  {/* <!-- single item --> */}
                  <div className="tp-product-details-review-rating-item d-flex align-items-center">
                    <span>3 Start</span>
                    <div className="tp-product-details-review-rating-bar">
                      <span className="tp-product-details-review-rating-bar-inner" data-width="15%"></span>
                    </div>
                    <div className="tp-product-details-review-rating-percent">
                      <span>15%</span>
                    </div>
                  </div>
                  {/* <!-- end single item --> */}

                  {/* <!-- single item --> */}
                  <div className="tp-product-details-review-rating-item d-flex align-items-center">
                    <span>2 Start</span>
                    <div className="tp-product-details-review-rating-bar">
                      <span className="tp-product-details-review-rating-bar-inner" data-width="6%"></span>
                    </div>
                    <div className="tp-product-details-review-rating-percent">
                      <span>6%</span>
                    </div>
                  </div>
                  {/* <!-- end single item --> */}

                  {/* <!-- single item --> */}
                  <div className="tp-product-details-review-rating-item d-flex align-items-center">
                    <span>1 Start</span>
                    <div className="tp-product-details-review-rating-bar">
                      <span className="tp-product-details-review-rating-bar-inner" data-width="10%"></span>
                    </div>
                    <div className="tp-product-details-review-rating-percent">
                      <span>10%</span>
                    </div>
                  </div>
                  {/* <!-- end single item --> */}
                </div>
              </div>

              {/* <!-- reviews --> */}
              <div className="tp-product-details-review-list pr-110">
                <h3 className="tp-product-details-review-title">Rating & Review</h3>
                <ul>
                  {
                    data.map((review, idx) => {
                      return (
                        <div className="tp-product-details-review-avater d-flex align-items-start" key={idx}>
                          <div className="tp-product-details-review-avater-thumb">
                            <a href="#">
                              <Image src="/assets/img/users/user-3.jpg" alt="" width={60} height={60} />
                            </a>
                          </div>
                          <div className="tp-product-details-review-avater-content">
                            <div className="tp-product-details-review-avater-rating d-flex align-items-center">
                              <Rating
                                value={review.rating}
                                readOnly
                                style={{
                                  maxWidth: 120
                                }}

                              />
                            </div>
                            <h3 className="tp-product-details-review-avater-title">{review.reviewerName}</h3>
                            <span className="tp-product-details-review-avater-meta">06 March, 2023 </span>

                            <div className="tp-product-details-review-avater-comment">
                              <p>
                                {
                                  review.comment
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- end col --> */}
          <div className="col-lg-6">
            <div className="tp-product-details-review-form">
              <h3 className="tp-product-details-review-form-title">Review this product</h3>
              <p>Your email address will not be published. Required fields are marked *</p>
              <form action="#">
                <div className="tp-product-details-review-form-rating d-flex align-items-center">
                  <p>Your Rating :</p>
                  <div className="tp-product-details-review-form-rating-icon d-flex align-items-center">
                    <Rating
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      value={0}
                      style={{
                        maxWidth: 100
                      }}
                      readOnly={false}
                      onChange={(v: number) => {
                        console.log(v);
                      }}
                    />
                  </div>
                </div>
                <div className="tp-product-details-review-input-wrapper">
                  <div className="tp-product-details-review-input-box">
                    <div className="tp-product-details-review-input">
                      <textarea id="msg" name="msg" placeholder="Write your review here..."></textarea>
                    </div>
                    <div className="tp-product-details-review-input-title">
                      <label htmlFor="msg">Your Name</label>
                    </div>
                  </div>
                  <div className="tp-product-details-review-input-box">
                    <div className="tp-product-details-review-input">
                      <input name="name" id="name" type="text" placeholder="Shahnewaz Sakil" />
                    </div>
                    <div className="tp-product-details-review-input-title">
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="tp-product-details-review-input-box">
                    <div className="tp-product-details-review-input">
                      <input name="email" id="email" type="email" placeholder="shofy@mail.com" />
                    </div>
                    <div className="tp-product-details-review-input-title">
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                </div>
                <div className="tp-product-details-review-suggetions mb-20">
                  <div className="tp-product-details-review-remeber">
                    <input id="remeber" type="checkbox" />
                    <label htmlFor="remeber">Save my name, email, and website in this browser for the next time I comment.</label>
                  </div>
                </div>
                <div className="tp-product-details-review-btn-wrapper">
                  <Button className="tp-product-details-review-btn">Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductReview
