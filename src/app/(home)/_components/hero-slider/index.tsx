"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface SlideContent {
  id: number
  title: string
  subtitle: string
  price: string
  discount: string
  image: string
  buttonText: string
  buttonLink: string
}

const slides: SlideContent[] = [
  {
    id: 1,
    title: "The best tablet Collection 2023",
    subtitle: "Exclusive offer -35% off this week",
    price: "274.00",
    discount: "35%",
    image: "/assets/img/banner/banner-slider-1.png,",
    buttonText: "Shop Now",
    buttonLink: "/shop",
  },
  {
    id: 2,
    title: "The best note book collection 2023",
    subtitle: "Exclusive offer -10% off this week",
    price: "999.00",
    discount: "10%",
    image: "/assets/img/banner/banner-slider-1.png,",
    buttonText: "Shop Now",
    buttonLink: "/shop",
  },
  {
    id: 3,
    title: "The best smartphone deals 2023",
    subtitle: "Exclusive offer -25% off this week",
    price: "499.00",
    discount: "25%",
    image: "/assets/img/banner/banner-slider-1.png,",
    buttonText: "Shop Now",
    buttonLink: "/shop",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"next" | "prev">("next")

  const goToNextSlide = () => {
    if (isAnimating) return
    setDirection("next")
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      setIsAnimating(false)
    }, 500)
  }

  const goToPrevSlide = () => {
    if (isAnimating) return
    setDirection("prev")
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
      setIsAnimating(false)
    }, 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide, isAnimating])

  return (
    <div className="relative h-[800px] md:h-[500px] w-full overflow-hidden bg-[#0a4b5c]">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
          >
            <div className="container mx-auto h-full px-4">
              <div className="grid h-full grid-cols-1 items-center md:grid-cols-2">
                {/* Left Content */}
                <div
                  className={`space-y-4 transition-all duration-500 ${isAnimating ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"
                    }`}
                >
                  <span className="text-primary font-semibold text-white">Starting at ${slide.price}</span>
                  <h1 className="text-4xl font-bold text-white">{slide.title}</h1>
                  <p className="text-white">{slide.subtitle}</p>
                  <Link
                    href={slide.buttonLink}
                    className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#0a4b5c] shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    {slide.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
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
                    src='/assets/img/banner/banner-slider-1.png'
                    alt={slide.title}
                    width={500}
                    height={300}
                    className="object-contain"
                  />

                  {/* Discount Badge */}
                  <div className="absolute right-1/4 top-1/4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 text-white">
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
        className="group absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-opacity duration-300 hover:bg-white/30 focus:outline-none md:opacity-0 md:hover:opacity-100"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNextSlide}
        className="group absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-opacity duration-300 hover:bg-white/30 focus:outline-none md:opacity-0 md:hover:opacity-100"
        aria-label="Next slide"
      >
        <ArrowRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
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
