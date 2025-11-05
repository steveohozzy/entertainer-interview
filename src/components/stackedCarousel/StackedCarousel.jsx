"use client"

import { useState, useRef } from "react"

export default function StackedCarousel({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [dragOffset, setDragOffset] = useState(0)
  const containerRef = useRef(null)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
    setDragOffset(0)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
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

  return (
    <div className="carousel-container">
      <div
        ref={containerRef}
        className="carousel-stack"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {cards.map((card, index) => {
          const offset = (index - currentIndex + cards.length) % cards.length
          const isTop = offset === 0
          const xOffset = offset * 10 + (isTop ? dragOffset : 0)

          return (
            <div
              key={card.id}
              className={`carousel-card ${isTop ? "top" : ""}`}
              style={{
                transform: `translateX(${xOffset}%) scale(${1 - offset * 0.02})`,
                opacity: 1,
                zIndex: cards.length - offset,
              }}
            >
              <div className={`card-content ${card.color}`}>
                <div className="card-emoji">{card.emoji}</div>
                <h2 className="card-title">{card.title}</h2>
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="carousel-controls">
        <button className="control-btn prev-btn" onClick={handlePrev} aria-label="Previous card">
          ←
        </button>

        <div className="carousel-indicators">
          {cards.map((_, index) => (
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

        <button className="control-btn next-btn" onClick={handleNext} aria-label="Next card">
          →
        </button>
      </div>

      <div className="carousel-info">
        <p>
          Card <span className="current-card">{currentIndex + 1}</span> of{" "}
          <span className="total-cards">{cards.length}</span>
        </p>
      </div>
    </div>
  )
}
