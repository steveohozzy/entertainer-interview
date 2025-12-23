import { doc } from "firebase/firestore";
import PropTypes from "prop-types";
import { useLayoutEffect, useRef } from "react";

class Carousel {
    constructor(wrapper) {
      this.wrapper = wrapper;
      this.carousel = wrapper.querySelector(".carousel-right-panel");
      this.leftPanel = wrapper.querySelector(".carousel-left-panel");
      this.slides = wrapper.querySelectorAll(".slide");
      this.leftNav = wrapper.querySelector(".left-nav");
      this.rightNav = wrapper.querySelector(".right-nav");

      this.index = 0;
      this.animating = false;
      this.isDragging = false;
      this.startX = 0;
      this.currentTranslate = 0;
      this.animationID = null;
      this.moved = false;
      this.autoSlideInterval = null;
      this.autoDirection = "next";

      if (this.slides.length === 1) {
        this.slides[0].classList.add("active");
        this.slideIn(this.slides[0], this.autoDirection);
        setTimeout(() => this.adjustHeight(), 50);
        if (this.leftNav) this.leftNav.style.display = "none";
        if (this.rightNav) this.rightNav.style.display = "none";
        this.carousel.style.cursor = "default";
      } else {
        this.initEvents();
        this.slides[0].classList.add("active");
        this.slideIn(this.slides[0], this.autoDirection);
        setTimeout(() => this.adjustHeight(), 50);
      }
      this.updateNavVisibility();
    }

    slideIn(slide, direction) {
      direction = direction || "next";
      const items = slide.querySelectorAll(".masonryItem");
      items.forEach((box, i) => {
        box.style.transition = "none";
        box.style.transform =
          direction === "next"
            ? "translateX(150vw) scale(0.9)"
            : "translateX(-150vw) scale(0.9)";
        box.style.opacity = 0;
        void box.offsetHeight;
        setTimeout(() => {
          box.style.transition =
            "transform 1s cubic-bezier(0.25,1.1,0.35,1), opacity 1s ease";
          box.style.transform = "translateX(0) scale(1)";
          box.style.opacity = 1;
        }, i * 100);
      });
    }

    slideOut(slide, direction) {
      direction = direction || "next";
      const items = slide.querySelectorAll(".masonryItem");
      const total = items.length;
      items.forEach((box, i) => {
        const delay =
          direction === "next" ? i * 70 : (total - 1 - i) * 70;
        setTimeout(() => {
          box.style.transition = "transform 0.8s ease, opacity 0.8s ease";
          box.style.transform =
            direction === "next"
              ? "translateX(-150vw) scale(0.9)"
              : "translateX(150vw) scale(0.9)";
          box.style.opacity = 0;
        }, delay);
      });
    }

    adjustHeight() {
      let maxH = 0;
      this.slides.forEach((slide) => {
        slide.style.opacity = 1;
        slide.style.position = "relative";
        const h = slide.scrollHeight;
        if (h > maxH) maxH = h;
        slide.style.opacity = "";
        slide.style.position = "";
      });

      this.carousel.style.minHeight = maxH + 100 + "px";
      this.leftPanel.style.height = maxH + 100 + "px";

      if (document.documentElement.clientWidth > 900) {
        this.carousel.style.minHeight = maxH + 40 + "px";
        this.leftPanel.style.height = maxH + 40 + "px";
      }
    }

    goTo(next, direction, userInitiated) {
      if (this.animating || next === this.index) return;
      this.animating = true;

      if (!direction) {
        direction = next > this.index ? "next" : "prev";
      }
      if (userInitiated) this.autoDirection = direction;

      const oldSlide = this.slides[this.index];
      const newSlide = this.slides[next];

      newSlide.classList.add("active");
      this.slideIn(newSlide, direction);
      this.slideOut(oldSlide, direction);

      setTimeout(() => {
        oldSlide.classList.remove("active");
        this.index = next;
        this.adjustHeight();
        this.animating = false;
      }, 1200);

      this.resetAutoSlide();
    }

    nextSlide() {
      this.goTo((this.index + 1) % this.slides.length, "next");
    }

    prevSlide() {
      this.goTo(
        (this.index - 1 + this.slides.length) % this.slides.length,
        "prev"
      );
    }

    startAutoSlide() {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = setInterval(() => {
        if (this.autoDirection === "next") {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }, 4000);
    }

    resetAutoSlide() {
      this.startAutoSlide();
    }

    touchStart(e) {
      if (this.animating) return;
      this.isDragging = true;
      this.startX = e.type.indexOf("mouse") !== -1 ? e.pageX : e.touches[0].clientX;
      this.moved = false;
      this.animationID = requestAnimationFrame(() => this.animation());
      this.carousel.classList.add("dragging");
    }

    touchMove(e) {
      if (!this.isDragging || this.animating) return;
      const x = e.type.indexOf("mouse") !== -1 ? e.pageX : e.touches[0].clientX;
      const delta = x - this.startX;
      this.currentTranslate = delta;
      if (Math.abs(delta) > 5) this.moved = true;

      const inner = this.slides[this.index].querySelector(".slide-inner");
      if (inner) {
        inner.style.transform = "translateX(" + this.currentTranslate + "px)";
      }
    }

    touchEnd() {
      cancelAnimationFrame(this.animationID);
      this.isDragging = false;
      const movedX = this.currentTranslate;
      this.carousel.classList.remove("dragging");

      const inner = this.slides[this.index].querySelector(".slide-inner");
      if (inner) inner.style.transition = "transform 0.3s ease";

      if (movedX < -50) {
        this.goTo((this.index + 1) % this.slides.length, "next", true);
      } else if (movedX > 50) {
        this.goTo(
          (this.index - 1 + this.slides.length) % this.slides.length,
          "prev",
          true
        );
      } else if (inner) {
        inner.style.transform = "translateX(0)";
        setTimeout(() => {
          inner.style.transition = "";
          inner.style.transform = "";
        }, 300);
      }

      this.currentTranslate = 0;
    }

    animation() {
      this.setSliderPosition();
      if (this.isDragging) {
        requestAnimationFrame(() => this.animation());
      }
    }

    setSliderPosition() {
      const inner = this.slides[this.index].querySelector(".slide-inner");
      if (inner) {
        inner.style.transform = "translateX(" + this.currentTranslate + "px)";
      }
    }

    initEvents() {
      this.carousel.addEventListener("mousedown", (e) => this.touchStart(e));
      this.carousel.addEventListener("mousemove", (e) => this.touchMove(e));
      this.carousel.addEventListener("mouseup", () => this.touchEnd());
      this.carousel.addEventListener("mouseleave", () => {
        if (this.isDragging) this.touchEnd();
      });

      this.carousel.addEventListener("touchstart", (e) => this.touchStart(e));
      this.carousel.addEventListener(
        "touchmove",
        (e) => this.touchMove(e),
        { passive: false }
      );
      this.carousel.addEventListener("touchend", () => this.touchEnd());

      this.carousel.addEventListener(
        "click",
        (e) => {
          if (this.moved) {
            e.preventDefault();
            e.stopPropagation();
          }
        },
        true
      );

      if (this.leftNav) {
        this.leftNav.addEventListener("click", () => {
          this.goTo(
            (this.index - 1 + this.slides.length) % this.slides.length,
            "next",
            true
          );
        });
      }

      if (this.rightNav) {
        this.rightNav.addEventListener("click", () => {
          this.goTo(
            (this.index + 1) % this.slides.length,
            "prev",
            true
          );
        });
      }

      window.addEventListener("resize", () => {
        setTimeout(() => this.adjustHeight(), 100);
      });
    }

    updateNavVisibility() {
  if (!this.leftNav || !this.rightNav) return;

  if (this.slides.length > 1) {
    this.leftNav.style.display = "";
    this.rightNav.style.display = "";
    this.carousel.style.cursor = "grab";
  } else {
    this.leftNav.style.display = "none";
    this.rightNav.style.display = "none";
    this.carousel.style.cursor = "default";
  }
}

  }

  (function normalizeInitialShimmers() {
  const wrapper = document.querySelector(".carousel-wrapper-component");
  if (!wrapper) return;

  const carousel = wrapper.querySelector(".carousel-right-panel");
  const slides = Array.from(carousel.querySelectorAll(".slide"));

  const itemsPerSlide = document.querySelector(".carousel-wrapper-component").getAttribute("data-items-per-slide"); // MUST match loadFromIframe

  slides.forEach((slide, index) => {
    // keep only ONE slide initially
    if (index > 0) {
      slide.remove();
      return;
    }

    const masonry = slide.querySelector(".masonry");
    const items = masonry.querySelectorAll(".masonryItem");

    items.forEach((item, i) => {
      if (i >= itemsPerSlide) item.remove();
    });
  });
})();


  document.addEventListener("DOMContentLoaded", () => {
    document
      .querySelectorAll(".carousel-wrapper-component")
      .forEach((wrapper) => {
        wrapper.carouselInstance = new Carousel(wrapper);
      });

    document
      .querySelectorAll(".masonryItem")
      .forEach((i) => i.classList.add("loading"));

    normalizeShimmers(true);
      loadFromIframe();
  });

  function normalizeShimmers(always = true) {
  const wrapper = document.querySelector(".carousel-wrapper-component");
  if (!wrapper) return;

  const carousel = wrapper.querySelector(".carousel-right-panel");
  if (!carousel) return;

  const isMobile = window.innerWidth <= 767;
  const itemsPerSlide = document.querySelector(".carousel-wrapper-component").getAttribute("data-items-per-slide");

  let slides = Array.from(carousel.querySelectorAll(".slide"));

  // Always keep at least ONE slide
  if (slides.length === 0) return;

  slides.forEach((slide, index) => {
    // Only remove extra slides if explicitly allowed
    if (always && index > 0) {
      slide.remove();
      return;
    }

    const masonry = slide.querySelector(".masonry");
    if (!masonry) return;

    const items = Array.from(masonry.querySelectorAll(".masonryItem"));
    items.forEach((item, i) => {
      if (i >= itemsPerSlide) item.remove();
    });
  });
}


  function loadFromIframe() {
  const iframe = document.createElement("iframe");
  iframe.src = "${categoryurl}";
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  let attempts = 0;
  const MAX_ATTEMPTS = 80; // 4 seconds @ 50ms

  const fastScan = setInterval(() => {
    attempts++;

    const doc = iframe.contentDocument;
    if (!doc) {
      if (attempts >= MAX_ATTEMPTS) {
        clearInterval(fastScan);
        iframe.remove();
        // shimmer stays, already normalized
      }
      return;
    }

    const items = doc.querySelectorAll(
      ".product__listing.product__grid .product-item"
    );

    const itemsPerSlide = document.querySelector(".carousel-wrapper-component").getAttribute("data-items-per-slide");
    const maxItems = document.querySelector(".carousel-wrapper-component").getAttribute("data-max-items");

    if (items.length < maxItems) return;

    clearInterval(fastScan);
    iframe.remove();


    normalizeShimmers(false);

  }, 50);
}




/** Primary UI component for user interaction */
export const MulticlickCarouselProductFeed = ({
  categoryurl,
  maxItems,
  itemsPerSlide = 6,
  itemsPerRow = 3,
  itemsPerRowMobile = 2,
  background,
  titlecolor,
  textcolor,
  buttonbackground,
  buttontextcolor,
  buttonicon,
  arrowsBackground,
  arrowsColor,
  title,
  blurb,
  buttontext,
  link,
  logo,
  logoalt,
  dataElementType,
  datapromotionindex,
  datapromotionname,
}) => {
  const wrapperRef = useRef(null);
  
    useLayoutEffect(() => {
  if (!wrapperRef.current) return;

  // 🔥 NORMALIZE SHIMMERS FIRST
  const carousel = wrapperRef.current.querySelector(".carousel-right-panel");
  const slides = carousel.querySelectorAll(".slide");

  const itemsPerSlide = document.querySelector(".carousel-wrapper-component").getAttribute("data-items-per-slide");

  slides.forEach((slide, index) => {
    if (index > 0) {
      slide.remove(); // keep only one shimmer slide
      return;
    }

    const masonry = slide.querySelector(".masonry");
    const items = masonry.querySelectorAll(".masonryItem");

    items.forEach((item, i) => {
      if (i >= itemsPerSlide) item.remove();
    });
  });

  // 🔥 NOW INIT CAROUSEL (DOM IS CORRECT)
  const instance = new Carousel(wrapperRef.current);
  wrapperRef.current.carouselInstance = instance;

  // 🔥 LOAD PRODUCTS (optional)
  loadFromIframe();

  return () => {
    clearInterval(instance.autoSlideInterval);
  };
}, []);

  return (
    <>
      <style>
        {`
    .carousel-right-panel,
  .carousel-right-panel * {
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
  }

  .masonry img {
    pointer-events: auto;
  }

  .carousel-wrapper-component h1 {
    font-size: 38px;
  }
  .carousel-wrapper-component p {
    font-size: 18px;
  }

  .carousel-wrapper-component {
    font-family: Inter, sans-serif;
    display: flex;
    gap: 20px;
    align-items: center;
    width: 100%;
    border-radius: 16px;
    background-color: #18499b;
  }

  .carousel-left-panel {
    flex: 1;
    padding: 30px;
    color: #fff;
    border-radius: 16px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1024px) {
    .carousel-left-panel {
      height: auto !important;
      padding: 15px 15px 0;
    }
  }

  .carousel-left-panel .left-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .carousel-left-panel .left-content .panel-logo {
    max-height: 100px;
    width: auto;
  }

  .left-background {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .carousel-right-panel {
    flex: 1.6;
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    width: 100%;
    padding: 20px;
    cursor: grab;
  }

  .carousel-right-panel.dragging {
    cursor: grabbing;
  }

  @media (max-width: 1024px) {
    .carousel-right-panel {
      padding: 0 15px;
    }
  }

  .slide {
    position: absolute;
    top: 10px;
    left: 20px;
    width: calc(100% - 40px);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.25s, transform 0.25s;
  }

  .slide.active {
    opacity: 1;
    pointer-events: auto;
  }

  .slide-inner {
    transition: transform 0.3s ease;
  }

  .masonry {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    padding: 10px;
    align-items: center;
    justify-content: center;
  }

  .masonryItem {
    border-radius: 12px;
    overflow: hidden;
    transform: translateX(150vw) scale(0.9);
    transition: transform 1.25s cubic-bezier(0.25, 1.1, 0.35, 1);
    background-color: #fff;
    width: calc(100% / ${itemsPerRowMobile} - 15px);
  }

  @media (min-width: 1024px) {
    .masonryItem {
      width: calc(100% / ${itemsPerRow} - 15px);
    }
  }

  .masonryItem.tall {
    aspect-ratio: 560/318;
  }
  .masonryItem .rating-wrapper,
  .masonryItem .addtocart,
  .masonryItem .productListerGridImageBadge {
    display: none;
  }

  .masonryItem .product-item-inner {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important; /* equal columns */
    align-items: start;
    gap: 10px;
    width: 100%;
  }

  .masonryItem .product-item-inner img {
    width: 100%;
    height: auto;
  }

  .masonryItem .product-item-inner .details {
    padding: 10px;
  }

  .masonryItem .product-item-inner .grid-pricing {
    display: flex;
    gap: 5px;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    margin-top: 10px;
  }
  .masonryItem .product-item-inner .grid-pricing .price {
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
  }
  .masonryItem .product-item-inner .details .name {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    }
  @media (max-width: 767px) {
    .masonryItem .product-item-inner {
      grid-template-columns: 1fr !important; /* equal columns */
    }
    .masonryItem .product-item-inner .details .name {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .masonryItem.tall {
      aspect-ratio: 318/620;
    }
  }

  @media (max-width: 900px) {
    .masonry {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 1200px) {
    .carousel-wrapper-component {
      flex-direction: column;
    }
  }

  .carousel-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgb(69, 228, 39);
    color: #000;
    font-size: 30px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
    z-index: 10;
    opacity: 0.4;
    transition: opacity 0.3s, color 0.3s;
  }

  .carousel-nav:hover {
    opacity: 0.8;
  }

  .left-nav {
    left: 10px;
  }
  .right-nav {
    right: 10px;
  }

  /* LOADING SHIMMER */
  .masonryItem {
    position: relative;
    background: #fff;
    overflow: hidden;
  }

  .masonryItem.loading::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #e3e3e3 0%, #f5f5f5 50%, #e3e3e3 100%);
    background-size: 200% 100%;
    animation: shimmer 1.2s infinite;
    z-index: 2;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  /* Hide real content while loading */
  .masonryItem.loading > * {
    opacity: 0;
  }

  /* added extra button */
  .masonryItem .details-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: #009e44;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    padding: 10px 20px;
    box-shadow: 0 0 5px rgba(3, 33, 33, 0.3);
    transition: all 0.3s;
    margin-top: 10px;
  }

  .masonryItem .details-link:hover {
    background-color: #afcb17;
    scale: 1.05;
    box-shadow: 0 0 18px rgba(3, 33, 33, 0.3);
    color: #fff;
  }

  .carousel-left-panel .hero-button {
        margin-top: 20px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        background: ${buttonbackground};
        color: ${buttontextcolor};
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        padding: 10px 30px 10px 10px;
        height: 45px;
        box-shadow: 0 0 5px rgba(3,33,33,.3);
        border: 3px solid #DBE3FF;
        border-color: ${buttontextcolor};
        transition: all 0.3s;
    }

    .carousel-left-panel .hero-button:hover {
        scale: 1.05;
        box-shadow: 0 0 18px rgba(3,33,33,.3);
    }

    .carousel-left-panel .hero-button .basket-icon {
        transition: all 0.3s;
        transform: rotate(15deg);
        margin-left: 5px;
    }

    .carousel-left-panel .hero-button:hover .basket-icon {
        transform: rotate(-10deg)
    }

    .carousel-left-panel .hero-button .star-start {
        position: relative;
        top: -3px;
    }

    .carousel-left-panel .hero-button .swoosh-container {
        display: flex;
        align-items: center;
        justify-content: end;
        margin-right: 5px;
        width: 25px;
    }

    .carousel-left-panel .hero-button .swoosh {
        display: block;
        width: 0;
        height: 3px;
        margin-top: -3px;
        margin-left: -2px;
        transform: rotate(15deg);
        background: #fff;
        transition: all 0.3s;
    }

    .carousel-left-panel .hero-button:hover .swoosh {
        width: 7px;
    }

    .carousel-left-panel .hero-button .star-end {
        position: relative;
        bottom: -5px;
        transition: all 0.3s;
    }

    .carousel-left-panel .hero-button:hover .star-end {
        scale: 1.1;
        transform: rotate(30deg);
    }

    .carousel-left panel-logo {
      margin-bottom: 20px;
    }
        `}
      </style>
      <div class="carousel-wrapper-component" ref={wrapperRef} data-items-per-slide={itemsPerSlide} data-max-items={maxItems} style={{background : background}}>

  <div class="carousel-left-panel">
    <div class="left-content">
      {logo && <img src={logo} alt={logoalt} class="panel-logo" />}
      {title && <h1 style={{color: titlecolor}}>{title}</h1>}
      {blurb && <p style={{color: textcolor}}>{blurb}</p>}
      {buttontext && (
        <div class="button-container">
        <a
              href={link}
              class="hero-button"
              data-element-type={dataElementType}
              data-promotion-index={datapromotionindex}
              data-promotion-name={datapromotionname}
              style={{
                background: buttonbackground,
                color: buttontextcolor,
              }}
            >
              <span class="swoosh-container">
                <span class="star-start">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                      fill-opacity="0.5"
                    ></path>
                  </svg>
                </span>
                <span class="swoosh">&nbsp;</span>
              </span>
              {buttontext}
              <span class="basket-icon">
                {buttonicon}
              </span>
              <span class="star-end">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                    fill-opacity="0.5"
                  ></path>
                </svg>
              </span>
            </a>
      </div>)}
    </div>
  </div>

  <div class="carousel-right-panel">

    <div class="slide active">
      <div class="slide-inner">
        <div class="masonry">
          <div class="masonryItem tall loading"></div>
          <div class="masonryItem tall loading"></div>
          <div class="masonryItem tall loading"></div>
          <div class="masonryItem tall loading"></div>
          <div class="masonryItem tall loading"></div>
          <div class="masonryItem tall loading"></div>
        </div>
      </div>
    </div>

    <div class="slide">
      <div class="slide-inner">
        <div class="masonry">
          <div class="masonryItem tall loading"></div>
          <div class="masonryItem tall loading"></div>
          <div class="masonryItem tall loading"></div>
          <div class="masonryItem tall loading"></div>
          <div class="masonryItem tall loading"></div>
          <div class="masonryItem tall loading"></div>
        </div>
      </div>
    </div>

    <div className="carousel-nav left-nav"
    style={{
        background: arrowsBackground,
        color: arrowsColor,
      }}
    >&#10094;</div>
    <div className="carousel-nav right-nav"
    style={{
        background: arrowsBackground,
        color: arrowsColor,
      }}
    >&#10095;</div>
  </div>
</div>
<script>
  {`
  class Carousel {
    constructor(wrapper) {
      this.wrapper = wrapper;
      this.carousel = wrapper.querySelector(".carousel-right-panel");
      this.leftPanel = wrapper.querySelector(".carousel-left-panel");
      this.slides = wrapper.querySelectorAll(".slide");
      this.leftNav = wrapper.querySelector(".left-nav");
      this.rightNav = wrapper.querySelector(".right-nav");

      this.index = 0;
      this.animating = false;
      this.isDragging = false;
      this.startX = 0;
      this.currentTranslate = 0;
      this.animationID = null;
      this.moved = false;
      this.autoSlideInterval = null;
      this.autoDirection = "next";

      if (this.slides.length === 1) {
        this.slides[0].classList.add("active");
        this.slideIn(this.slides[0], this.autoDirection);
        setTimeout(() => this.adjustHeight(), 50);
        if (this.leftNav) this.leftNav.style.display = "none";
        if (this.rightNav) this.rightNav.style.display = "none";
        this.carousel.style.cursor = "default";
      } else {
        this.initEvents();
        this.slides[0].classList.add("active");
        this.slideIn(this.slides[0], this.autoDirection);
        setTimeout(() => this.adjustHeight(), 50);
      }

      this.updateNavVisibility();
    }

    slideIn(slide, direction) {
      direction = direction || "next";
      const items = slide.querySelectorAll(".masonryItem");
      items.forEach((box, i) => {
        box.style.transition = "none";
        box.style.transform =
          direction === "next"
            ? "translateX(150vw) scale(0.9)"
            : "translateX(-150vw) scale(0.9)";
        box.style.opacity = 0;
        box.offsetHeight;
        setTimeout(() => {
          box.style.transition =
            "transform 1s cubic-bezier(0.25,1.1,0.35,1), opacity 1s ease";
          box.style.transform = "translateX(0) scale(1)";
          box.style.opacity = 1;
        }, i * 100);
      });
    }

    slideOut(slide, direction) {
      direction = direction || "next";
      const items = slide.querySelectorAll(".masonryItem");
      const total = items.length;
      items.forEach((box, i) => {
        const delay =
          direction === "next" ? i * 70 : (total - 1 - i) * 70;
        setTimeout(() => {
          box.style.transition = "transform 0.8s ease, opacity 0.8s ease";
          box.style.transform =
            direction === "next"
              ? "translateX(-150vw) scale(0.9)"
              : "translateX(150vw) scale(0.9)";
          box.style.opacity = 0;
        }, delay);
      });
    }

    adjustHeight() {
      let maxH = 0;
      this.slides.forEach((slide) => {
        slide.style.opacity = 1;
        slide.style.position = "relative";
        const h = slide.scrollHeight;
        if (h > maxH) maxH = h;
        slide.style.opacity = "";
        slide.style.position = "";
      });

      this.carousel.style.minHeight = maxH + 100 + "px";
      this.leftPanel.style.height = maxH + 100 + "px";

      if (document.documentElement.clientWidth > 900) {
        this.carousel.style.minHeight = maxH + 40 + "px";
        this.leftPanel.style.height = maxH + 40 + "px";
      }
    }

    goTo(next, direction, userInitiated) {
      if (this.animating || next === this.index) return;
      this.animating = true;

      if (!direction) {
        direction = next > this.index ? "next" : "prev";
      }
      if (userInitiated) this.autoDirection = direction;

      const oldSlide = this.slides[this.index];
      const newSlide = this.slides[next];

      newSlide.classList.add("active");
      this.slideIn(newSlide, direction);
      this.slideOut(oldSlide, direction);

      setTimeout(() => {
        oldSlide.classList.remove("active");
        this.index = next;
        this.adjustHeight();
        this.animating = false;
      }, 1200);

      this.resetAutoSlide();
    }

    nextSlide() {
      this.goTo((this.index + 1) % this.slides.length, "next");
    }

    prevSlide() {
      this.goTo(
        (this.index - 1 + this.slides.length) % this.slides.length,
        "prev"
      );
    }

    startAutoSlide() {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = setInterval(() => {
        if (this.autoDirection === "next") {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }, 4000);
    }

    resetAutoSlide() {
      this.startAutoSlide();
    }

    touchStart(e) {
      if (this.animating) return;
      this.isDragging = true;
      this.startX = e.type.indexOf("mouse") !== -1 ? e.pageX : e.touches[0].clientX;
      this.moved = false;
      this.animationID = requestAnimationFrame(() => this.animation());
      this.carousel.classList.add("dragging");
    }

    touchMove(e) {
      if (!this.isDragging || this.animating) return;
      const x = e.type.indexOf("mouse") !== -1 ? e.pageX : e.touches[0].clientX;
      const delta = x - this.startX;
      this.currentTranslate = delta;
      if (Math.abs(delta) > 5) this.moved = true;

      const inner = this.slides[this.index].querySelector(".slide-inner");
      if (inner) {
        inner.style.transform = "translateX(" + this.currentTranslate + "px)";
      }
    }

    touchEnd() {
      cancelAnimationFrame(this.animationID);
      this.isDragging = false;
      const movedX = this.currentTranslate;
      this.carousel.classList.remove("dragging");

      const inner = this.slides[this.index].querySelector(".slide-inner");
      if (inner) inner.style.transition = "transform 0.3s ease";

      if (movedX < -50) {
        this.goTo((this.index + 1) % this.slides.length, "next", true);
      } else if (movedX > 50) {
        this.goTo(
          (this.index - 1 + this.slides.length) % this.slides.length,
          "prev",
          true
        );
      } else if (inner) {
        inner.style.transform = "translateX(0)";
        setTimeout(() => {
          inner.style.transition = "";
          inner.style.transform = "";
        }, 300);
      }

      this.currentTranslate = 0;
    }

    animation() {
      this.setSliderPosition();
      if (this.isDragging) {
        requestAnimationFrame(() => this.animation());
      }
    }

    setSliderPosition() {
      const inner = this.slides[this.index].querySelector(".slide-inner");
      if (inner) {
        inner.style.transform = "translateX(" + this.currentTranslate + "px)";
      }
    }

    initEvents() {
      this.carousel.addEventListener("mousedown", (e) => this.touchStart(e));
      this.carousel.addEventListener("mousemove", (e) => this.touchMove(e));
      this.carousel.addEventListener("mouseup", () => this.touchEnd());
      this.carousel.addEventListener("mouseleave", () => {
        if (this.isDragging) this.touchEnd();
      });

      this.carousel.addEventListener("touchstart", (e) => this.touchStart(e));
      this.carousel.addEventListener(
        "touchmove",
        (e) => this.touchMove(e),
        { passive: false }
      );
      this.carousel.addEventListener("touchend", () => this.touchEnd());

      this.carousel.addEventListener(
        "click",
        (e) => {
          if (this.moved) {
            e.preventDefault();
            e.stopPropagation();
          }
        },
        true
      );

      if (this.leftNav) {
        this.leftNav.addEventListener("click", () => {
          this.goTo(
            (this.index - 1 + this.slides.length) % this.slides.length,
            "next",
            true
          );
        });
      }

      if (this.rightNav) {
        this.rightNav.addEventListener("click", () => {
          this.goTo(
            (this.index + 1) % this.slides.length,
            "prev",
            true
          );
        });
      }

      window.addEventListener("resize", () => {
        setTimeout(() => this.adjustHeight(), 100);
      });
    }

    updateNavVisibility() {
  if (!this.leftNav || !this.rightNav) return;

  if (this.slides.length > 1) {
    this.leftNav.style.display = "";
    this.rightNav.style.display = "";
    this.carousel.style.cursor = "grab";
  } else {
    this.leftNav.style.display = "none";
    this.rightNav.style.display = "none";
    this.carousel.style.cursor = "default";
  }
}
  }

  (function normalizeInitialShimmers() {
  const wrapper = document.querySelector(".carousel-wrapper-component");
  if (!wrapper) return;

  const carousel = wrapper.querySelector(".carousel-right-panel");
  const slides = Array.from(carousel.querySelectorAll(".slide"));

  const isMobile = window.innerWidth <= 767;
  const itemsPerSlide = ${itemsPerSlide};

  slides.forEach((slide, index) => {
    // keep only ONE slide initially
    if (index > 0) {
      slide.remove();
      return;
    }

    const masonry = slide.querySelector(".masonry");
    const items = masonry.querySelectorAll(".masonryItem");

    items.forEach((item, i) => {
      if (i >= itemsPerSlide) item.remove();
    });
  });
})();


  document.addEventListener("DOMContentLoaded", () => {
    document
      .querySelectorAll(".carousel-wrapper-component")
      .forEach((wrapper) => {
        wrapper.carouselInstance = new Carousel(wrapper);
      });

    document
      .querySelectorAll(".masonryItem")
      .forEach((i) => i.classList.add("loading"));

    loadFromIframe();
  });

  function loadFromIframe() {
  const iframe = document.createElement("iframe");
  iframe.src = "${categoryurl}";
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  const fastScan = setInterval(() => {
    const doc = iframe.contentDocument;
    if (!doc) return;

    const items = doc.querySelectorAll(
      ".product__listing.product__grid .product-item"
    );

    // CONFIG -------------------------
    const isMobile = window.innerWidth <= 767;
    const itemsPerSlide = ${itemsPerSlide};
    const maxItems = ${maxItems};
    // --------------------------------

    if (items.length < maxItems) return;
    clearInterval(fastScan);

    const selectedItems = Array.from(items).slice(0, maxItems);
    const neededSlides = Math.ceil(selectedItems.length / itemsPerSlide);

    const carousel = document.querySelector(".carousel-right-panel");
    let slides = Array.from(carousel.querySelectorAll(".slide"));

    const slideTemplate = slides[0];

    // ADD slides if needed
    while (slides.length < neededSlides) {
      const clone = slideTemplate.cloneNode(true);
      clone.classList.remove("active");
      clone.querySelector(".masonry").innerHTML = "";
      carousel.insertBefore(
        clone,
        carousel.querySelector(".carousel-nav.left-nav")
      );
      slides.push(clone);
    }

    // REMOVE extra slides
    while (slides.length > neededSlides) {
      slides.pop().remove();
    }

    slides = Array.from(carousel.querySelectorAll(".slide"));

    function wrapProduct(node) {
      const wrapper = document.createElement("div");
      wrapper.className = "masonryItem tall product";
      wrapper.appendChild(node.cloneNode(true));

      const features = wrapper.querySelector(".product__grid__features");
      if (features) features.remove();

      return wrapper;
    }

    slides.forEach((slide, index) => {
      const masonry = slide.querySelector(".masonry");
      masonry.innerHTML = "";

      const start = index * itemsPerSlide;
      const end = start + itemsPerSlide;
      const slideItems = selectedItems.slice(start, end);

      slideItems.forEach(item =>
        masonry.appendChild(wrapProduct(item))
      );
    });

    // Details link logic (unchanged)
    document
      .querySelectorAll(".masonryItem .product-item")
      .forEach((item) => {
        const imageLink = item.querySelector("a[href]");
        const price = item.querySelector(".grid-pricing");
        if (!imageLink || !price) return;
        if (item.querySelector(".details-link")) return;

        const detailsLink = document.createElement("a");
        detailsLink.href = imageLink.href;
        detailsLink.textContent = "Details";
        detailsLink.className = "details-link";
        price.after(detailsLink);
      });

    document
      .querySelectorAll(".masonryItem")
      .forEach(m => m.classList.remove("loading"));

    // Re-sync carousel
    // HARD RESET carousel so it knows about new slides
const wrapper = carousel.closest(".carousel-wrapper-component");
const oldInst = wrapper.carouselInstance;

if (oldInst) {
  // stop timers + detach logic
  clearInterval(oldInst.autoSlideInterval);
  wrapper.carouselInstance = null;
}

// Force clean active state
carousel.querySelectorAll(".slide").forEach((s, i) => {
  s.classList.toggle("active", i === 0);
});

// Recreate carousel instance (CRITICAL)
wrapper.carouselInstance = new Carousel(wrapper);
wrapper.carouselInstance.startAutoSlide();


    iframe.remove();
  }, 50);
}

  `}
</script>
    </>
  );
};

MulticlickCarouselProductFeed.propTypes = {
  categoryurl: PropTypes.string,
  maxItems: PropTypes.number,
  itemsPerSlide: PropTypes.number,
  itemsPerRow: PropTypes.number,
  itemsPerRowMobile: PropTypes.number,
  background: PropTypes.string,
  titlecolor: PropTypes.string,
  textcolor: PropTypes.string,
  buttonbackground: PropTypes.string,
  buttontextcolor: PropTypes.string,
  buttonicon: PropTypes.string,
  arrowsBackground: PropTypes.string,
  arrowsColor: PropTypes.string,
  title: PropTypes.string,
  blurb: PropTypes.string,
  buttontext: PropTypes.string,
  link: PropTypes.string,
  logo: PropTypes.string,
  logoalt: PropTypes.string,
  dataElementType: PropTypes.string,
  datapromotionindex: PropTypes.string,
  datapromotionname: PropTypes.string,
};
