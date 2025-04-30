"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface BannerSlide {
  id: number
  title: string
  subtitle: string
  price: string
  originalPrice: string
  discount: string
  image: string
  buttonText: string
  buttonLink: string
  bgColor: string
}

const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    title: "Microsoft Surface Pro 8, Wifi Included",
    subtitle: "TABLET COLLECTION 2023",
    price: "1300.00",
    originalPrice: "1249.00",
    discount: "35%",
    image: "/assets/img/banner/banner-slider-1.png",
    buttonText: "Shop now",
    buttonLink: "/shop",
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    title: "Apple iPad Pro 2023, 5G Ready",
    subtitle: "PREMIUM TABLET SERIES",
    price: "1100.00",
    originalPrice: "1299.00",
    discount: "20%",
    image: "/assets/img/banner/banner-slider-1.png",
    buttonText: "Shop now",
    buttonLink: "/shop",
    bgColor: "bg-indigo-600",
  },
]

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"next" | "prev">("next")

  const goToNextSlide = () => {
    if (isAnimating) return
    setDirection("next")
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1))
      setIsAnimating(false)
    }, 500)
  }

  const goToPrevSlide = () => {
    if (isAnimating) return
    setDirection("prev")
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1))
      setIsAnimating(false)
    }, 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide, isAnimating, direction])

  return (
    <div className="relative h-[700px] md:h-[300px] w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
              } ${slide.bgColor}`}
          >
            <div className="container mx-auto h-full px-4">
              <div className="grid h-full grid-cols-1 items-center md:grid-cols-2">
                {/* Left Content */}
                <div
                  className={`space-y-2 transition-all duration-500 ${isAnimating ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"
                    }`}
                >
                  <span className="text-sm font-medium text-white/80">{slide.subtitle}</span>
                  <h2 className="text-3xl font-bold text-white">{slide.title}</h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-white">${slide.price}</span>
                    <span className="text-sm text-white/80 line-through">${slide.originalPrice}</span>
                  </div>
                  <Link
                    href={slide.buttonLink}
                    className="mt-2 inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    {slide.buttonText}
                  </Link>
                </div>

                {/* Right Content */}
                <div
                  className={`relative flex justify-end transition-all duration-500 ${isAnimating
                    ? direction === "next"
                      ? "translate-x-20 opacity-0"
                      : "-translate-x-20 opacity-0"
                    : "translate-x-0 opacity-100"
                    }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={300}
                    height={300}
                    className="object-contain"
                  />

                  {/* Discount Badge */}
                  <div className="absolute right-1/4 top-1/4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white">
                    <div className="text-center">
                      <div className="text-lg font-bold leading-none">-{slide.discount}</div>
                      <div className="text-xs">OFF</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-opacity duration-300 hover:bg-white/30 focus:outline-none md:opacity-0 md:hover:opacity-100"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-opacity duration-300 hover:bg-white/30 focus:outline-none md:opacity-0 md:hover:opacity-100"
        aria-label="Next slide"
      >
        <ArrowRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index > currentSlide) {
                setDirection("next")
              } else if (index < currentSlide) {
                setDirection("prev")
              }
              setCurrentSlide(index)
            }}
            className={`h-2 w-2 rounded-full transition-all ${currentSlide === index ? "bg-white w-4" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
