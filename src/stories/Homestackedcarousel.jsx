import PropTypes from "prop-types";
import { useEffect } from "react";

export const HomeStackedCarousel = (props) => {
	const {
    card1title,
		card1image,
		card1link,
		card2title,
		card2image,
		card2link,
		card3title,
		card3image,
		card3link,
  } = props;
	
  useEffect(() => {
  const stack = document.getElementById("carousel-stack");
  if (!stack) return;

  let currentIndex = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragOffset = 0;
  let multiplier = window.innerWidth < 1024 ? 20 : 50;

  const cards = Array.from(document.querySelectorAll(".carousel-card"));
  const cardsElements = document.querySelectorAll(".carousel-card");

  function updateTransforms() {
    const len = cards.length;

    cards.forEach((card, index) => {
      const offset = (index - currentIndex + len) % len;
      const isTop = offset === 0;
      const xOffset = offset * multiplier + (isTop ? dragOffset / 3 : 0);

      card.classList.toggle("top", isTop);
      card.style.transform =
        `translateX(${xOffset}%) scale(${1 - offset * 0.02})`;

      card.style.zIndex = len - offset;
    });
  }

  function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    dragOffset = 0;
    updateTransforms();
  }

  function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    dragOffset = 0;
    updateTransforms();
  }

  // -----------------------------
  // DRAG (same logic as HTML)
  // -----------------------------
  const onMouseDown = (e) => {
    isDragging = true;
    dragStartX = e.clientX;
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    dragOffset = Math.max(-20, Math.min(20, e.clientX - dragStartX));
    updateTransforms();
  };

  const onMouseUp = (e) => {
    if (!isDragging) return;
    isDragging = false;

    const deltaX = e.clientX - dragStartX;

    if (deltaX > 20) prevCard();
    else if (deltaX < -20) nextCard();
    else {
      dragOffset = 0;
      updateTransforms();
    }
  };

  stack.addEventListener("mousedown", onMouseDown);
  stack.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", onMouseUp);

  // -----------------------------
  // FIX: HEIGHT (this is your bug)
  // -----------------------------
  function recalcHeight() {
    let heroHeight = 0;

    document.querySelectorAll(".hero-card-container").forEach((el) => {
      const h = el.getBoundingClientRect().height;
      if (h > heroHeight) heroHeight = h;
    });

    if (heroHeight > 0) {
      stack.style.height = `${heroHeight}px`;
    }
  }

  // -----------------------------
  // WAIT FOR IMAGES + LAYOUT
  // -----------------------------
  function init() {
    updateTransforms();

    // wait 2 frames for layout to settle (IMPORTANT in React)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        recalcHeight();
      });
    });
  }

  const images = stack.querySelectorAll("img");

  let loaded = 0;
  if (images.length === 0) {
    init();
  } else {
    images.forEach((img) => {
      if (img.complete) {
        loaded++;
      } else {
        img.onload = () => {
          loaded++;
          if (loaded === images.length) init();
        };
      }
    });

    if (loaded === images.length) init();
  }

  // fallback (critical for Storybook + async render)
  const timeout = setTimeout(init, 500);

  // resize
  const onResize = () => {
    multiplier = window.innerWidth < 1024 ? 20 : 50;
    recalcHeight();
    updateTransforms();
  };

  window.addEventListener("resize", onResize);

  // click-to-activate card
  cardsElements.forEach((card, index) => {
    card.addEventListener("mousedown", (e) => {
      if (!e.currentTarget.classList.contains("top")) {
        currentIndex = index;
        dragOffset = 0;
        updateTransforms();
      }
    });
  });

  // initial run
  init();

  return () => {
    clearTimeout(timeout);
    window.removeEventListener("resize", onResize);
    window.removeEventListener("mouseup", onMouseUp);
    stack.removeEventListener("mousedown", onMouseDown);
    stack.removeEventListener("mousemove", onMouseMove);
  };
}, []);

  return (
    <>
    <style>
    {`
	
	.carousel-card.swipe-right {
    transform: translateX(120%) rotate(10deg);
    transition: transform 0.4s ease-in-out;
  }

  .carousel-card.swipe-left {
    transform: translateX(-120%) rotate(-10deg);
    transition: transform 0.4s ease-in-out;
  }
  .carousel-wrapper {
    position: relative;
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
  }
  .dragging a {
    pointer-events: none !important;
    text-decoration: none;
  }
  .carousel-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    position: relative;
    max-width: 100vw;
    overflow: hidden;
  }

  .carousel-stack {
    position: relative;
    width: 100%;
    cursor: grab;
    touch-action: pan-y;
    overflow: visible;
    border-radius: 8px;
    padding-right: 0;
  }

  .carousel-stack:active {
    cursor: grabbing;
  }

  .carousel-card {
    position: absolute;
    width: 72.5%;
    height: 100%;
    transition:
      transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      z-index 0s;
    will-change: transform;
    left: 0;
    user-select: none;
  }

  @media (min-width: 768px) {
    .carousel-card {
      width: 50.5%;
    }
  }

  .carousel-card a {
    pointer-events: none;
  }

  .carousel-card.top {
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .carousel-card.top a {
    pointer-events: all;
  }

  .hero-stack-card-content {
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 30px 0 5px rgba(100, 100, 100, 0.2);
  position: relative;
  overflow: hidden;
  background: #fff;
  border: 4px solid #edf3b2;
  max-height: 100%;
}

  .hero-card-container {
    width: 100%;
    height: 100%;
  }

  .hero-card {
    position: relative;
    height: 100%;
  }

  .hero-card .media {
  width: 100%;
  height: 100%;
}

  .hero-card .media img,
.hero-card .media iframe,
.hero-card .media video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
  .hero-card .overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: linear-gradient(
      to top,
      rgba(0,0,0,.8),
      rgba(0, 0, 0, 0) 30%
    );
    z-index: 2;
    color: #fff;
    padding: 20px 10px;
    text-align: center;
    transition: all 0.3s;
  }

  @media (min-width: 768px) {
    .carousel-card.top .hero-card .overlay {
      background: linear-gradient(
        to top,
        rgba(0,0,0,.8),
        rgba(0, 0, 0, 0) 30%
      );
    }
  }

  .hero-card .overlay h2 {
    font-size: 20px;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    margin: 0;
  }

  .hero-card .overlay p {
    font-size: 10px;
    margin: 0;
  }

    `}
    </style>
     <div class="carousel-wrapper">
  <div class="carousel-container">
    <div id="carousel-stack" class="carousel-stack">
      <div class="carousel-card">
        <div class="hero-stack-card-content">
          <div class="hero-card-container">
            <a
              href={card1link}
            >
              <div class="hero-card">
                <div class="media">
                  <img
                    alt={card1title}
                    src={card1image}
                  />
                </div>
                <div class="overlay">
                  <h2>{card1title}</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
			<div class="carousel-card">
        <div class="hero-stack-card-content">
          <div class="hero-card-container">
            <a
              href={card2link}
            >
              <div class="hero-card">
                <div class="media">
                  <img
                    alt={card2title}
                    src={card2image}
                  />
                </div>
                <div class="overlay">
                  <h2>{card2title}</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
			<div class="carousel-card">
        <div class="hero-stack-card-content">
          <div class="hero-card-container">
            <a
              href={card3link}
            >
              <div class="hero-card">
                <div class="media">
                  <img
                    alt={card3title}
                    src={card3image}
                  />
                </div>
                <div class="overlay">
                  <h2>{card3title}</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
	{`
  document.addEventListener("DOMContentLoaded", () => {
    const stack = document.getElementById("carousel-stack");
    const indicators = document.getElementById("carousel-indicators");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const slides = document.querySelectorAll(".hero-card-container");

    let currentIndex = 0;
    let isDragging = false;
    let dragStartX = 0;
    let dragOffset = 0;
    let multiplier = window.innerWidth < 1024 ? 20 : 50;

    let resizeTimeout;

    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(recalculateLayout, 150);
    });

    // Create cards and indicators once

    const cards = Array.from(document.querySelectorAll(".carousel-card"));
    const indicatorButtons = Array.from(
      document.querySelectorAll(".indicator"),
    );
    const cardsElements = document.querySelectorAll(".carousel-card");

    function updateTransforms() {
      const len = cards.length;
      cards.forEach((card, index) => {
        const offset = (index - currentIndex + len) % len;
        const isTop = offset === 0;
        const xOffset = offset * multiplier + (isTop ? dragOffset / 3 : 0);

        card.classList.toggle("top", isTop);
        card.style.transform =
          "translateX(" + xOffset + "%) scale(" + (1 - offset * 0.02) + ")";
        card.style.zIndex = len - offset;
      });
      indicatorButtons.forEach((btn, i) =>
        btn.classList.toggle("active", i === currentIndex),
      );
    }

    function nextCard() {
      const len = cards.length;
      currentIndex = (currentIndex + 1) % len;
      dragOffset = 0;
      updateTransforms();
    }

    function prevCard() {
      const len = cards.length;
      currentIndex = (currentIndex - 1 + len) % len;
      dragOffset = 0;
      updateTransforms();
    }

    // Mouse + touch events
    stack.addEventListener("mousedown", (e) => {
      isDragging = true;
      dragStartX = e.clientX;
    });
    stack.addEventListener("mousemove", (e) => {
      if (!isDragging) {
        e.currentTarget.classList.remove("dragging");
        return;
      }
      e.currentTarget.classList.add("dragging");
      dragOffset = Math.max(-20, Math.min(20, e.clientX - dragStartX));
      updateTransforms();
    });
    stack.addEventListener("mouseup", (e) => {
      if (!isDragging) {
        e.currentTarget.classList.remove("dragging");
        return;
      }
      isDragging = false;
      e.currentTarget.classList.remove("dragging");
      const deltaX = e.clientX - dragStartX;
      if (deltaX > 20) prevCard();
      else if (deltaX < -20) nextCard();
      else {
        dragOffset = 0;
        updateTransforms();
      }
    });
    stack.addEventListener("mouseleave", (e) => {
      if (isDragging) {
        isDragging = false;
        e.currentTarget.classList.remove("dragging");
        dragOffset = 0;
        updateTransforms();
      }
    });
    stack.addEventListener("touchstart", (e) => {
      isDragging = true;
      dragStartX = e.touches[0].clientX;
      e.currentTarget.classList.add("dragging");
    });
    stack.addEventListener("touchmove", (e) => {
      if (!isDragging) {
        e.currentTarget.classList.remove("dragging");
        return;
      }
      dragOffset = e.touches[0].clientX - dragStartX;
      updateTransforms();
    });
    stack.addEventListener("touchend", (e) => {
      isDragging = false;
      e.currentTarget.classList.remove("dragging");
      const deltaX = e.changedTouches[0].clientX - dragStartX;
      if (deltaX > 20) prevCard();
      else if (deltaX < -20) nextCard();
      else {
        dragOffset = 0;
        updateTransforms();
      }
    });
    cardsElements.forEach((banner, index) => {
      banner.addEventListener("mousedown", (e) => {
        if (!e.currentTarget.classList.contains("top")) {
          currentIndex = index;
          dragOffset = 0;
          updateTransforms();
        }
      });
    });

    function recalculateLayout() {
      let heroHeight = 0;
      const slides = document.querySelectorAll(".hero-card-container");

      slides.forEach((offer) => {
        if (offer.clientHeight > heroHeight) {
          heroHeight = offer.clientHeight;
        }
      });

      stack.style.height = heroHeight + "px";

      // Update multiplier based on breakpoint
      multiplier = window.innerWidth < 1024 ? 20 : 50;

      // Reset drag offset (prevents weird mid-drag states)
      dragOffset = 0;

      // Reapply transforms with new values
      updateTransforms();
    }

    updateTransforms();
    recalculateLayout();
  });
	`}
</script>
</>
  );
};

HomeStackedCarousel.propTypes = {
  card1title: PropTypes.string,
	card1image: PropTypes.string,
	card1link: PropTypes.string,
	card2title: PropTypes.string,
	card2image: PropTypes.string,
	card2link: PropTypes.string,
	card3title: PropTypes.string,
	card3image: PropTypes.string,
	card3link: PropTypes.string,
};
