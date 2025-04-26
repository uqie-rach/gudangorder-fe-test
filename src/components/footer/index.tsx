
import React from 'react'
import Logo from '../logo'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className="tp-footer-area tp-footer-style-2 tp-footer-style-primary tp-footer-style-6" data-bg-color="#F4F7F9">
        <div className="tp-footer-top pt-95 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-1 mb-50">
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-logo">
                      <Link href="/">
                        <Logo />
                      </Link>
                    </div>
                    <p className="tp-footer-desc">
                      Mencari produk berkualitas dengan harga terjangkau? <br /> Kami hadir untuk memenuhi kebutuhan Anda.
                    </p>
                    <div className="tp-footer-social">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-vimeo-v"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-2 mb-50">
                  <h4 className="tp-footer-widget-title">My Account</h4>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li><a href="#">Track Orders</a></li>
                      <li><a href="#">Shipping</a></li>
                      <li><a href="#">Wishlist</a></li>
                      <li><a href="#">My Account</a></li>
                      <li><a href="#">Order History</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-3 mb-50">
                  <h4 className="tp-footer-widget-title">Infomation</h4>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li><a href="#">Our Story</a></li>
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Terms & Conditions</a></li>
                      <li><a href="#">Latest News</a></li>
                      <li><a href="#">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="tp-footer-widget footer-col-4 mb-50">
                  <h4 className="tp-footer-widget-title">Talk To Us</h4>
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-talk mb-20">
                      <span>Got Questions? Call us</span>
                      <h4><a href="tel:670-413-90-762">+670 413 90 762</a></h4>
                    </div>
                    <div className="tp-footer-contact">
                      <div className="tp-footer-contact-item d-flex align-items-start">
                        <div className="tp-footer-contact-icon">
                          <span>
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6H5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M13 5.40039L10.496 7.40039C9.672 8.05639 8.32 8.05639 7.496 7.40039L5 5.40039" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M1 11.4004H5.8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M1 8.19922H3.4" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </div>
                        <div className="tp-footer-contact-content">
                          <p><a href="mailto:gudangorder.id@gmail.com">gudangorder.id@gmail.com</a></p>
                        </div>
                      </div>
                      <div className="tp-footer-contact-item d-flex align-items-start">
                        <div className="tp-footer-contact-icon">
                          <span>
                            <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.50001 10.9417C9.99877 10.9417 11.2138 9.72668 11.2138 8.22791C11.2138 6.72915 9.99877 5.51416 8.50001 5.51416C7.00124 5.51416 5.78625 6.72915 5.78625 8.22791C5.78625 9.72668 7.00124 10.9417 8.50001 10.9417Z" stroke="currentColor" strokeWidth="1.5" />
                              <path d="M1.21115 6.64496C2.92464 -0.887449 14.0841 -0.878751 15.7889 6.65366C16.7891 11.0722 14.0406 14.8123 11.6313 17.126C9.88298 18.8134 7.11704 18.8134 5.36006 17.126C2.95943 14.8123 0.210885 11.0635 1.21115 6.64496Z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                          </span>
                        </div>
                        <div className="tp-footer-contact-content">
                          <p><a href="https://www.google.com/maps/place/Sleepy+Hollow+Rd,+Gouverneur,+NY+13642,+USA/@44.3304966,-75.4552367,17z/data=!3m1!4b1!4m6!3m5!1s0x4cccddac8972c5eb:0x56286024afff537a!8m2!3d44.3304928!4d-75.453048!16s%2Fg%2F1tdsjdj4" target="_blank">Perum Bumiayu Indah, Bumiayu, Kec. Kedungkandang, Kota Malang, Jawa Timur, 65135</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-footer-bottom">
          <div className="container">
            <div className="tp-footer-bottom-wrapper">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="tp-footer-copyright">
                    <p>© 2023 All Rights Reserved  |  HTML Template by <a href="index.html">Themepure</a>.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tp-footer-payment text-md-end">
                    <p>
                      {/* <img src="assets/img/footer/footer-pay.png" alt="" /> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
