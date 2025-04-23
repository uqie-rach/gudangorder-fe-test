'use client';

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

import { faEye } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons/faEyeSlash";

import Breadcrumb from "@/components/breadcrumbs";

const LoginPage = () => {
  const [showPasswd, setShowPasswd] = useState(false);

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <main>
      {/* <!-- breadcrumb area start --> */}
      <section className="breadcrumb__area include-bg text-center pt-95 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content p-relative z-index-1">
                <h3 className="breadcrumb__title ">My account</h3>
                <Breadcrumb
                  items={[
                    { label: 'Home', href: '/' },
                    { label: 'Log in' },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumb area end --> */}

      {/* <!-- login area start --> */}
      <section className="tp-login-area pb-140 p-relative z-index-1 fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="tp-login-wrapper">
                <div className="tp-login-top text-center mb-30">
                  <h3 className="tp-login-title ">Login to Gudangorder.</h3>
                  <p className="">
                    Don't have an account?
                    <span className="ml-1">
                      <Link href="/register">Create a free account</Link>
                    </span>
                  </p>
                </div>
                <div className="tp-login-option">
                  <div className="tp-login-social mb-10 d-flex flex-wrap items-center justify-center gap-3">
                    <div className="border-[1px] py-3 px-4 border-gray-200 hover:border-blue-400 transition-colors">
                      <Link href="#" className="flex items-center gap-2">
                        <Image
                          src="/assets/img/icon/login/google.svg"
                          alt="google sign in icon"
                          width={22}
                          height={22}
                        />
                        Sign in with google
                      </Link>
                    </div>
                    <div className="border-[1px] py-3 px-4 border-gray-200 hover:border-blue-400 transition-colors">
                      <Link href="#" className="flex items-center justify-center">
                        <Image
                          src="/assets/img/icon/login/facebook.svg"
                          alt="facebook sign in icon"
                          width={26}
                          height={26}
                        />
                      </Link>
                    </div>
                    <div className="border-[1px] py-3 px-4 border-gray-200 hover:border-blue-400 transition-colors">
                      <Link href="#" className="flex items-center justify-center">
                        <Image
                          className="apple" src="/assets/img/icon/login/apple.svg"
                          alt="apple sign in icon"
                          width={22}
                          height={26}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="tp-login-mail text-center mb-40">
                    <p>or Sign in with Email</p>
                  </div>
                  <div className="tp-login-input-wrapper">
                    <div className="tp-login-input-box">
                      <div className="tp-login-input">
                        <input
                          id="email"
                          type="email"
                          placeholder="gudangorder@mail.com"
                        />
                      </div>
                      <div className="tp-login-input-title">
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="tp-login-input-box">
                      <div className="tp-login-input">
                        <input
                          id="tp_password"
                          type={showPasswd ? 'text' : "password"}
                          placeholder="Min. 6 character"
                        />
                      </div>
                      <div className="tp-login-input-eye" id="password-show-toggle">
                        <span className="p-2">
                          <FontAwesomeIcon icon={showPasswd ? faEye : faEyeSlash} size="sm" onClick={() => setShowPasswd(!showPasswd)} />
                        </span>
                      </div>
                      <div className="tp-login-input-title">
                        <label htmlFor="tp_password">Password</label>
                      </div>
                    </div>
                  </div>
                  <div className="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-20">
                    <div className="tp-login-remeber">
                      <input
                        id="remeber"
                        type="checkbox"

                      />
                      <label htmlFor="remeber">Remember me</label>
                    </div>
                    <div className="tp-login-forgot">
                      <Link href="#">Forgot Password?</Link>
                    </div>
                  </div>
                  <div className="tp-login-bottom">
                    <button className="tp-login-btn w-100" onClick={handleSubmit}>Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- login area end --> */}

    </main>
  )
}
export default LoginPage
