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
  }

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
      if (items.length < 12) return;

      clearInterval(fastScan);

      const isMobile = window.innerWidth <= 767;
      const perSlide = isMobile ? 4 : 6;
      const totalNeeded = perSlide * 2;

      const selected = Array.prototype.slice.call(items, 0, totalNeeded);
      const slide1Items = selected.slice(0, perSlide);
      const slide2Items = selected.slice(perSlide, perSlide * 2);

      const slide1 = document.querySelector(".slide:nth-of-type(1) .masonry");
      const slide2 = document.querySelector(".slide:nth-of-type(2) .masonry");

      slide1.innerHTML = "";
      slide2.innerHTML = "";

      function wrapProduct(node) {
        const wrapper = document.createElement("div");
        wrapper.className = "masonryItem tall product";
        wrapper.appendChild(node.cloneNode(true));
        const features = wrapper.querySelector(".product__grid__features");
        if (features) features.remove();
        return wrapper;
      }

      slide1Items.forEach((n) => slide1.appendChild(wrapProduct(n)));
      slide2Items.forEach((n) => slide2.appendChild(wrapProduct(n)));

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
        .forEach((m) => m.classList.remove("loading"));

      document
        .querySelectorAll(".carousel-wrapper-component")
        .forEach((wrapper) => {
          const inst = wrapper.carouselInstance;
          if (inst) {
            const active = inst.slides[inst.index];
            inst.slideIn(active, inst.autoDirection);
            inst.adjustHeight();
            inst.startAutoSlide();
          }
        });

      iframe.remove();
    }, 50);
  }

/** Primary UI component for user interaction */
export const MulticlickCarouselProductFeed = ({
  categoryurl,
  background,
  titlecolor,
  textcolor,
  buttonbackground,
  buttontextcolor,
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
  
      const carousel = new Carousel(wrapperRef.current);
  
      return () => carousel.destroy();
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    width: 100%;
    padding: 10px;
  }

  .masonryItem {
    border-radius: 12px;
    overflow: hidden;
    transform: translateX(150vw) scale(0.9);
    transition: transform 1.25s cubic-bezier(0.25, 1.1, 0.35, 1);
    background-color: #fff;
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
      <div class="carousel-wrapper-component" ref={wrapperRef} style={{background : background}}>

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
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"></path>
                </svg>
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
  }

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
      if (items.length < 12) return;

      clearInterval(fastScan);

      const isMobile = window.innerWidth <= 767;
      const perSlide = isMobile ? 4 : 6;
      const totalNeeded = perSlide * 2;

      const selected = Array.prototype.slice.call(items, 0, totalNeeded);
      const slide1Items = selected.slice(0, perSlide);
      const slide2Items = selected.slice(perSlide, perSlide * 2);

      const slide1 = document.querySelector(".slide:nth-of-type(1) .masonry");
      const slide2 = document.querySelector(".slide:nth-of-type(2) .masonry");

      slide1.innerHTML = "";
      slide2.innerHTML = "";

      function wrapProduct(node) {
        const wrapper = document.createElement("div");
        wrapper.className = "masonryItem tall product";
        wrapper.appendChild(node.cloneNode(true));
        const features = wrapper.querySelector(".product__grid__features");
        if (features) features.remove();
        return wrapper;
      }

      slide1Items.forEach((n) => slide1.appendChild(wrapProduct(n)));
      slide2Items.forEach((n) => slide2.appendChild(wrapProduct(n)));

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
        .forEach((m) => m.classList.remove("loading"));

      document
        .querySelectorAll(".carousel-wrapper-component")
        .forEach((wrapper) => {
          const inst = wrapper.carouselInstance;
          if (inst) {
            const active = inst.slides[inst.index];
            inst.slideIn(active, inst.autoDirection);
            inst.adjustHeight();
            inst.startAutoSlide();
          }
        });

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
  background: PropTypes.string,
  titlecolor: PropTypes.string,
  textcolor: PropTypes.string,
  buttonbackground: PropTypes.string,
  buttontextcolor: PropTypes.string,
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
