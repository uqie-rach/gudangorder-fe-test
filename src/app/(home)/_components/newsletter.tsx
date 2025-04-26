'use client';

import React from 'react'

const Newsletter = () => {
  return (
    <section className="tp-subscribe-area pt-70 pb-65 theme-bg p-relative z-index-1">
      <div className="tp-subscribe-shape">
        <img className="tp-subscribe-shape-1" src="assets/img/subscribe/subscribe-shape-1.png" alt="" />
        <img className="tp-subscribe-shape-2" src="assets/img/subscribe/subscribe-shape-2.png" alt="" />
        <img className="tp-subscribe-shape-3" src="assets/img/subscribe/subscribe-shape-3.png" alt="" />
        <img className="tp-subscribe-shape-4" src="assets/img/subscribe/subscribe-shape-4.png" alt="" />
        {/* <!-- plane shape --> */}
        <div className="tp-subscribe-plane">
          <img className="tp-subscribe-plane-shape" src="assets/img/subscribe/plane.png" alt="" />
          <svg width="399" height="110" className="d-none d-sm-block" viewBox="0 0 399 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.499634 1.00049C8.5 20.0005 54.2733 13.6435 60.5 40.0005C65.6128 61.6426 26.4546 130.331 15 90.0005C-9 5.5 176.5 127.5 218.5 106.5C301.051 65.2247 202 -57.9188 344.5 40.0003C364 53.3997 384 22 399 22" stroke="white" strokeOpacity="0.5" strokeDasharray="3 3" />
          </svg>
          <svg className="d-sm-none" width="193" height="110" viewBox="0 0 193 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1C4.85463 20.0046 26.9085 13.6461 29.9086 40.0095C32.372 61.6569 13.5053 130.362 7.98637 90.0217C-3.57698 5.50061 85.7981 127.53 106.034 106.525C145.807 65.2398 98.0842 -57.9337 166.742 40.0093C176.137 53.412 185.773 22.0046 193 22.0046" stroke="white" strokeOpacity="0.5" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7">
            <div className="tp-subscribe-content">
              <span>Sale 20% off all store</span>
              <h3 className="tp-subscribe-title">Subscribe our Newsletter</h3>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="tp-subscribe-form">
              <form action="#">
                <div className="tp-subscribe-input">
                  <input type="email" placeholder="Enter Your Email" />
                  <button type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
