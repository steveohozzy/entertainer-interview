"use client"

import { useState, useRef, useEffect } from "react"
import { products } from "../../data/products";
import ProductCardStackedCarousel from "../productCardStackedCarousel/productCardStackedCarousel";

export default function StackedCarouselProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [dragOffset, setDragOffset] = useState(0)
  const containerRef = useRef(null)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.slice(0, 5).length)
    setDragOffset(0)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.slice(0, 5).length) % products.slice(0, 5).length)
    setDragOffset(0)
  }

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const deltaX = e.clientX - dragStart.x
    setDragOffset(deltaX)
  }

  const handleMouseUp = (e) => {
    setIsDragging(false)
    const deltaX = e.clientX - dragStart.x
    const threshold = 50

    if (deltaX > threshold) {
      handlePrev()
    } else if (deltaX < -threshold) {
      handleNext()
    } else {
      setDragOffset(0)
    }
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY })
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const deltaX = e.touches[0].clientX - dragStart.x
    setDragOffset(deltaX)
  }

  const handleTouchEnd = (e) => {
    setIsDragging(false)
    const deltaX = e.changedTouches[0].clientX - dragStart.x
    const threshold = 50

    if (deltaX > threshold) {
      handlePrev()
    } else if (deltaX < -threshold) {
      handleNext()
    } else {
      setDragOffset(0)
    }
  }

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [multiplier, setMultiplier] = useState(10);

    useEffect(() => {
      const handleResize = () => {
        setWindowSize(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      if (windowSize < 768) {
        setMultiplier(5);
      } else {
        setMultiplier(10);
      }
    }, [windowSize]);

  return (
    <div className="carousel-container">
      <div
        ref={containerRef}
        className="carousel-stack"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {products.slice(0, 5).map((card, index) => {
          const offset = (index - currentIndex + products.slice(0, 5).length) % products.slice(0, 5).length
          const isTop = offset === 0
          const xOffset = offset * multiplier + (isTop ? dragOffset : 0)

          return (
            <div
              key={card.id}
              className={`carousel-card ${isTop ? "top" : ""}`}
              style={{
                transform: `translateX(${xOffset}%) scale(${1 - offset * 0.02})`,
                opacity: 1,
                zIndex: products.length - offset,
              }}
            >
              <div className="w-full h-auto flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-xl text-textBlue"
              onClick={() => {
                setCurrentIndex(index)
                setDragOffset(0)
              }}
              >
                <ProductCardStackedCarousel product={card} />
              </div>
            </div>
          )
        })}
      </div>

      <div className="carousel-controls">
        <div className="carousel-indicators">
          {products.slice(0, 5).map((_, index) => (
            <button
              key={index}
              className={`indicator number-btn ${index === currentIndex ? "active" : ""}`}
              onClick={() => {
                setCurrentIndex(index)
                setDragOffset(0)
              }}
              aria-label={`Go to card ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
