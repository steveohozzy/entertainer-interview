import PropTypes from "prop-types";
import { useLayoutEffect, useRef } from "react";
import { CTAButton } from "./CTAButton";
import "./consistency.css";

/** internal helpers */
const MAX_ITEMS = 12;

const buildItems = (props) => {
  const items = [];

  for (let i = 1; i <= MAX_ITEMS; i++) {
    const src = props[`image${i}`];
    if (!src) continue;

    items.push({
      src,
      alt: props[`image${i}alt`] || "",
      link: props[`image${i}link`] || "",
      title: props[`image${i}title`] || "",
    });
  }

  return items;
};

const chunkItems = (items, perSlide) => {
  const slides = [];
  for (let i = 0; i < items.length; i += perSlide) {
    slides.push(items.slice(i, i + perSlide));
  }
  return slides;
};

class Carousel {
  constructor(wrapper) {
  this.wrapper = wrapper;
  this.carousel = wrapper.querySelector('.carousel-right-panel');
  this.leftPanel = wrapper.querySelector('.carousel-left-panel');
  this.slides = wrapper.querySelectorAll('.slide');
  this.leftNav = wrapper.querySelector('.left-nav');
  this.rightNav = wrapper.querySelector('.right-nav');

  this.index = 0;
  this.animating = false;
  this.isDragging = false;
  this.startX = 0;
  this.currentTranslate = 0;
  this.animationID = null;
  this.moved = false;
  this.autoSlideInterval = null;
  this.autoDirection = 'prev';

  this.init();
}


  init() {
    this.slides[0].classList.add('active');
    this.slideIn(this.slides[0], this.autoDirection);

    this.waitForImages(this.slides[0]).then(() => {
      this.adjustHeight();
    });

    if (this.slides.length > 1) {
      this.initEvents();
    } else {
      if (this.leftNav) this.leftNav.style.display = 'none';
      if (this.rightNav) this.rightNav.style.display = 'none';
      this.carousel.style.cursor = 'default';
    }
  }

  waitForImages(slide) {
    const imgs = slide.querySelectorAll('img');
    return Promise.all(
      [...imgs].map(img =>
        img.complete
          ? Promise.resolve()
          : new Promise(res => img.addEventListener('load', res, { once: true }))
      )
    );
  }

  slideIn(slide, direction = 'next') {
    slide.querySelectorAll('.masonryItem').forEach((box, i) => {
      box.style.transition = 'none';
      box.style.opacity = 0;
      box.style.transform =
        direction === 'next'
          ? 'translateX(150vw) scale(0.9)'
          : 'translateX(-150vw) scale(0.9)';

      void box.offsetHeight;

      setTimeout(() => {
        box.style.transition =
          'transform 1s cubic-bezier(0.25,1.1,0.35,1), opacity 1s ease';
        box.style.transform = 'translateX(0) scale(1)';
        box.style.opacity = 1;
      }, i * 100);
    });
  }

  slideOut(slide, direction = 'next') {
    slide.querySelectorAll('.masonryItem').forEach((box, i) => {
      setTimeout(() => {
        box.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
        box.style.transform =
          direction === 'next'
            ? 'translateX(-150vw) scale(0.9)'
            : 'translateX(150vw) scale(0.9)';
        box.style.opacity = 0;
      }, i * 70);
    });
  }

  adjustHeight() {
    const active = this.slides[this.index];
    const height = active.scrollHeight + 40;

    this.carousel.style.minHeight = `${height}px`;
    this.leftPanel.style.height = `${height}px`;
  }

  goTo(next, direction = null, userInitiated = false) {
    if (this.animating || next === this.index) return;
    this.animating = true;

    if (!direction) direction = next > this.index ? 'next' : 'prev';
    if (userInitiated) this.autoDirection = direction;

    const old = this.slides[this.index];
    const newer = this.slides[next];

    newer.classList.add('active');
    this.slideIn(newer, direction);
    this.slideOut(old, direction);

    this.waitForImages(newer).then(() => {
      setTimeout(() => {
        old.classList.remove('active');
        this.index = next;
        this.adjustHeight();
        this.animating = false;
      }, 900);
    });
  }

  touchStart(e) {
  if (this.animating) return;

  this.isDragging = true;
  this.startX = e.type.includes('mouse')
    ? e.pageX
    : e.touches[0].clientX;

  this.currentTranslate = 0;
  this.moved = false;

  this.carousel.classList.add('dragging');
  this.animationID = requestAnimationFrame(() => this.animation());
}

touchMove(e) {
  if (!this.isDragging || this.animating) return;

  const x = e.type.includes('mouse')
    ? e.pageX
    : e.touches[0].clientX;

  const delta = x - this.startX;
  this.currentTranslate = delta;

  if (Math.abs(delta) > 5) this.moved = true;

  const inner = this.slides[this.index].querySelector('.slide-inner');
  if (inner) {
    inner.style.transform = `translateX(${delta}px)`;
  }
}

touchEnd() {
  cancelAnimationFrame(this.animationID);
  this.isDragging = false;
  this.carousel.classList.remove('dragging');

  const movedX = this.currentTranslate;
  const inner = this.slides[this.index].querySelector('.slide-inner');

  if (inner) inner.style.transition = 'transform 0.3s ease';

  if (movedX < -50) {
    this.goTo((this.index + 1) % this.slides.length, 'next', true);
  } else if (movedX > 50) {
    this.goTo(
      (this.index - 1 + this.slides.length) % this.slides.length,
      'prev',
      true
    );
  } else if (inner) {
    inner.style.transform = 'translateX(0)';
    setTimeout(() => {
      inner.style.transition = '';
      inner.style.transform = '';
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
  const inner = this.slides[this.index].querySelector('.slide-inner');
  if (inner) {
    inner.style.transform = `translateX(${this.currentTranslate}px)`;
  }
}


  nextSlide() {
    this.goTo((this.index + 1) % this.slides.length, 'next');
  }

  prevSlide() {
    this.goTo((this.index - 1 + this.slides.length) % this.slides.length, 'prev');
  }

  initEvents() {
  window.addEventListener('resize', () =>
    setTimeout(() => this.adjustHeight(), 150)
  );

  // Drag events
  this.carousel.addEventListener('mousedown', e => this.touchStart(e));
  this.carousel.addEventListener('mousemove', e => this.touchMove(e));
  this.carousel.addEventListener('mouseup', () => this.touchEnd());
  this.carousel.addEventListener('mouseleave', () => {
    if (this.isDragging) this.touchEnd();
  });

  this.carousel.addEventListener('touchstart', e => this.touchStart(e), {
    passive: true
  });
  this.carousel.addEventListener('touchmove', e => this.touchMove(e), {
    passive: false
  });
  this.carousel.addEventListener('touchend', () => this.touchEnd());

  // Prevent clicks when dragging
  this.carousel.addEventListener(
    'click',
    e => {
      if (this.moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    true
  );

  if (this.leftNav) {
  this.leftNav.addEventListener('click', () =>
    this.goTo(
      (this.index - 1 + this.slides.length) % this.slides.length,
      'next',
      true
    )
  );
}

if (this.rightNav) {
  this.rightNav.addEventListener('click', () =>
    this.goTo(
      (this.index + 1) % this.slides.length,
      'prev',
      true
    )
  );
}

}

destroy() {
  cancelAnimationFrame(this.animationID);
  clearInterval(this.autoSlideInterval);
}

}


/** Primary UI component for user interaction */
export const Multiclickcarouselchristmas = (props) => {
  const {
    modulebackgroundcolor,
    itemsPerSlide = 6,
    itemsPerRow = 3,
    itemsPerRowMobile = 2,
    background,
    title,
    blurb,
    mainImage,
    mainImagealt,
    mainImageLink,
    titlecolor,
    textcolor,
    buttonStyle,
    buttonLink,
    arrowsBackground,
    arrowsColor,
  } = props;

  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    if (!wrapperRef.current) return;
    const carousel = new Carousel(wrapperRef.current);
    return () => carousel?.destroy?.();
  }, []);

  const items = buildItems(props);
  const slides = chunkItems(items, itemsPerSlide);

  const CTA_STYLES = {
    'shop-now': {
      text: 'Shop Now',
      icon: 'basket',
      className: 'cta-shop-now',
    },
    'pre-order-now': {
      text: 'Pre-Order Now',
      icon: 'basket',
      className: 'cta-pre-order-now',
    },
    'store-events': {
      text: 'Store Events',
      icon: 'house',
      className: 'cta-store-events',
    },
    'store-locator': {
      text: 'Store Locator',
      icon: 'house',
      className: 'cta-store-locator',
    },
    enter: {
      text: 'Enter',
      icon: 'pencil',
      className: 'cta-enter',
    },
    download: {
      text: 'Download',
      icon: 'pencil',
      className: 'cta-download',
    },
    read: {
      text: 'Read',
      icon: 'glasses',
      className: 'cta-read',
    },
    'sign-up': {
      text: 'Sign Up',
      icon: 'plane',
      className: 'cta-sign-up',
    },
  };

  return (
    <>
      <style>
        {`

        .carousel-wrapper-component {
          max-width: 1440px;
          margin: 0 auto;
        }
    .carousel-right-panel,
  .carousel-right-panel * {
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
  }

  .masonry img {
    pointer-events: auto;
    width: 100%;
    height: auto;
    border-radius: 8px;
    overflow: hidden;
  }

  .carousel-wrapper-component .panel-image-container {
    width: 50%;
  }

  .carousel-wrapper-component .panel-image-container img {
    height: auto;
    width: 100%;
    object-fit: cover;
  }

  .carousel-wrapper-component .panel-text-container {
    width: 50%;
    padding: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .carousel-wrapper-component .panel-title {
    font-size: 38px;
    line-height: 1.1;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    flex-grow: 1;
  }
  
  .carousel-wrapper-component p {
    font-size: 18px;
  }

  .carousel-wrapper-component {
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 8px;
    background-color: #18499b;
  }

  .carousel-left-panel {
    flex: 1;
    padding: 20px 0 20px 20px;
    color: #fff;
    border-radius: 8px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-left-panel .left-content {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    text-align: center;
    width: 100%;
    height: 100%;
  }

  .carousel-left-panel .left-content p {
    margin-bottom: 20px;
  }

  @media (max-width: 1024px) {
    .carousel-left-panel {
      height: auto !important;
      padding: 15px 15px 0;
    }
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
    border-radius: 8px;
    width: 100%;
    padding: 20px 20px 0 20px;
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
    top: 20px;
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
    padding: 0;
    align-items: stretch;
    justify-content: center;
  }
  .masonryItem {
    border-radius: 8px;
    overflow: hidden;
    transform: translateX(150vw) scale(0.9);
    transition: transform 1.25s cubic-bezier(0.25, 1.1, 0.35, 1);
    width: calc(100% / ${itemsPerRowMobile} - 15px);
  }

  @media (min-width: 1024px) {
    .masonryItem {
      width: calc(100% / ${itemsPerRow} - 15px);
    }
  }

  .masonryItem {
    display: flex;
    flex-direction: column;
  }

.masonryLink {
  display: block;
  width: 100%;
  text-decoration: none;
  color: inherit;
}

/* WITH TITLE */
.masonryItem.has-title .tileImage {
  width: 100%;
  aspect-ratio: 560 / 318;
  overflow: hidden;
  border-radius: 8px;
  overflow: hidden;
}

/* WITHOUT TITLE */
.masonryItem.image-only {
  display: flex;
  flex-direction: column;
}

.masonryItem.image-only .tileImage {
  width: 100%;
  height: 100%;
  flex: 1;
  overflow: hidden;
}

.masonryItem.image-only .tileImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.tileText {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.tileText p {
  margin: 0;
  font-size: 16px;
  line-height: 1.2;
  font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
}

@media (min-width: 1024px) {
  .masonryItem {
    width: calc(100% / ${itemsPerRow} - 15px);
  }
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
    background: #009e44
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
    transition: all 0.3s;
  }

  .carousel-nav:hover {
    transform: scale(1.1) translateY(-49%);
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

  .carousel-wrapper-outer .carousel-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 20px;
  }
        `}
      </style>
      <div className="carousel-wrapper-outer" style={{ backgroundColor: modulebackgroundcolor }}>
    <div className="carousel-container">
    <div
      ref={wrapperRef}
      className="carousel-wrapper-component"
      style={{ background }}
    >
      {/* LEFT PANEL */}
      <div className="carousel-left-panel">
        <div className="left-content">
          <div className="panel-image-container">
            {mainImage && (
              mainImageLink ? (
                <a href={mainImageLink}>
                  <img src={mainImage} alt={mainImagealt} className="panel-main-image" />
                </a>
              ) : (
                <img src={mainImage} alt={mainImagealt} className="panel-main-image" />
              )
            )}
          </div>

          <div className="panel-text-container">
            {title && <div class="panel-title" style={{ color: titlecolor }}>{title}</div>}
            {blurb && <p style={{ color: textcolor }}>{blurb}</p>}
            <CTAButton
              buttonStyle={buttonStyle}
              as="a"
              href={buttonLink}
            />
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="carousel-right-panel">
        {slides.map((slideItems, slideIndex) => {

          return (
            <div
              key={slideIndex}
              className={`slide ${slideIndex === 0 ? "active" : ""}`}
            >
              <div className="slide-inner">
                <div className="masonry">
                  {slideItems.map((item, i) => (
                    <div
                        key={i}
                        className={`masonryItem ${item.title ? "has-title" : "image-only"}`}
                      >
                      {item.link ? (
                        <a
                          href={item.link}
                          data-element-type={item.dataElementType}
                          data-promotion-index={item.datapromotionindex}
                          data-promotion-name={item.datapromotionname}
                          className="masonryLink"
                        >
                          <div className="tileImage">
                            <img src={item.src} alt={item.alt} />
                          </div>

                          {item.title && (
                            <div className="tileText">
                              <p style={{ color: textcolor }}>{item.title}</p>
                            </div>
                          )}
                        </a>
                      ) : (
                        <>
                          <div className="tileImage">
                            <img src={item.src} alt={item.alt} />
                          </div>
                          {item.title && (
                            <div className="tileText">
                              <p style={{ color: textcolor }}>{item.title}</p>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {slides.length > 1 && (
          <>
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
          </>
        )}
      </div>
    </div>
    </div>
    </div>
<script>
  {`
  class Carousel {
  constructor(wrapper) {
    this.wrapper = wrapper;
    this.carousel = wrapper.querySelector('.carousel-right-panel');
    this.leftPanel = wrapper.querySelector('.carousel-left-panel');
    this.slides = wrapper.querySelectorAll('.slide');
    this.leftNav = wrapper.querySelector('.left-nav');
    this.rightNav = wrapper.querySelector('.right-nav');

    this.index = 0;
    this.animating = false;
    this.isDragging = false;
    this.startX = 0;
    this.currentTranslate = 0;
    this.animationID = null;
    this.moved = false;
    this.autoSlideInterval = null;
    this.autoDirection = 'prev';

    if (this.slides.length === 1) {
      this.slides[0].classList.add('active');
      this.slideIn(this.slides[0], this.autoDirection);
      setTimeout(() => this.adjustHeight(), 50);
      if (this.leftNav) this.leftNav.style.display = 'none';
      if (this.rightNav) this.rightNav.style.display = 'none';
      this.carousel.style.cursor = 'default';
    } else {
      this.initEvents();
      this.slides[0].classList.add('active');
      this.slideIn(this.slides[0], this.autoDirection);
      setTimeout(() => this.adjustHeight(), 50);
    }
  }

  slideIn(slide, direction = 'next') {
    const items = slide.querySelectorAll('.masonryItem');
    items.forEach((box, i) => {
      box.style.transition = 'none';
      box.style.transform = direction === 'next' ? 'translateX(150vw) scale(0.9)' : 'translateX(-150vw) scale(0.9)';
      box.style.opacity = 0;
      box.offsetHeight;
      setTimeout(() => {
        box.style.transition = 'transform 1s cubic-bezier(0.25,1.1,0.35,1), opacity 1s ease';
        box.style.transform = 'translateX(0) scale(1)';
        box.style.opacity = 1;
      }, i * 100);
    });
  }

  slideOut(slide, direction = 'next') {
    const items = slide.querySelectorAll('.masonryItem');
    const total = items.length;
    items.forEach((box, i) => {
      const delay = direction === 'next' ? i * 70 : (total - 1 - i) * 70;
      setTimeout(() => {
        box.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
        box.style.transform = direction === 'next' ? 'translateX(-150vw) scale(0.9)' : 'translateX(150vw) scale(0.9)';
        box.style.opacity = 0;
      }, delay);
    });
  }

  adjustHeight() {
    let maxH = 0;
    this.slides.forEach(slide => {
      slide.style.opacity = 1;
      slide.style.position = 'relative';
      const h = slide.scrollHeight;
      if (h > maxH) maxH = h;
      slide.style.opacity = '';
      slide.style.position = '';
    });
    this.carousel.style.minHeight = (maxH + 40) + 'px';
    this.leftPanel.style.height = (maxH + 40) + 'px';
  }

  goTo(next, direction = null, userInitiated = false) {
    if (this.animating || next === this.index) return;
    this.animating = true;
    if (!direction) direction = next > this.index ? 'next' : 'prev';
    if (userInitiated) this.autoDirection = direction;

    const old = this.slides[this.index];
    const newer = this.slides[next];

    newer.classList.add('active');
    this.slideIn(newer, direction);
    this.slideOut(old, direction);

    setTimeout(() => {
      old.classList.remove('active');
      this.index = next;
      this.adjustHeight();
      this.animating = false;
    }, 1200);
  }

  nextSlide() { this.goTo((this.index + 1) % this.slides.length, 'next'); }
  prevSlide() { this.goTo((this.index - 1 + this.slides.length) % this.slides.length, 'prev'); }

  touchStart(e) {
    if (this.animating) return;
    this.isDragging = true;
    this.startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    this.moved = false;
    this.animationID = requestAnimationFrame(() => this.animation());
    this.carousel.classList.add('dragging');
  }

  touchMove(e) {
    if (!this.isDragging || this.animating) return;
    const x = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    const delta = x - this.startX;
    this.currentTranslate = delta;
    if (Math.abs(delta) > 5) this.moved = true;

    const inner = this.slides[this.index].querySelector('.slide-inner');
    inner.style.transform = "translateX(" + this.currentTranslate + "px)";
  }

  touchEnd() {
    cancelAnimationFrame(this.animationID);
    this.isDragging = false;
    const movedX = this.currentTranslate;
    this.carousel.classList.remove('dragging');

    const inner = this.slides[this.index].querySelector('.slide-inner');
    if(inner) inner.style.transition = 'transform 0.3s ease';

    if (movedX < -50) this.goTo((this.index + 1) % this.slides.length, 'next', true);
    else if (movedX > 50) this.goTo((this.index - 1 + this.slides.length) % this.slides.length, 'prev', true);
    else if(inner) {
      inner.style.transform = 'translateX(0)';
      setTimeout(() => {
        inner.style.transition = '';
        inner.style.transform = '';
      }, 300);
    }

    this.currentTranslate = 0;
  }

  animation() {
    this.setSliderPosition();
    if (this.isDragging) requestAnimationFrame(() => this.animation());
  }

  setSliderPosition() {
    const inner = this.slides[this.index].querySelector('.slide-inner');
    inner.style.transform = "translateX(" + this.currentTranslate + "px)";
  }

  initEvents() {
    this.carousel.addEventListener('mousedown', (e) => this.touchStart(e));
    this.carousel.addEventListener('mousemove', (e) => this.touchMove(e));
    this.carousel.addEventListener('mouseup', () => this.touchEnd());
    this.carousel.addEventListener('mouseleave', () => { if (this.isDragging) this.touchEnd(); });
    this.carousel.addEventListener('touchstart', (e) => this.touchStart(e));
    this.carousel.addEventListener('touchmove', (e) => this.touchMove(e), { passive: false });
    this.carousel.addEventListener('touchend', () => this.touchEnd());

    this.carousel.addEventListener('click', (e) => {
      if (this.moved) { e.preventDefault(); e.stopPropagation(); }
    }, true);

    if (this.leftNav) this.leftNav.addEventListener('click', () => this.goTo((this.index - 1 + this.slides.length) % this.slides.length, 'next', true));
    if (this.rightNav) this.rightNav.addEventListener('click', () => this.goTo((this.index + 1) % this.slides.length, 'prev', true));

    window.addEventListener('resize', () => setTimeout(() => this.adjustHeight(), 100));
  }
}

// Initialize all carousels
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel-wrapper-component').forEach(wrapper => {
    new Carousel(wrapper);
    console.log('read')
  });
});
  `}
</script>
    </>
  );
};

Multiclickcarouselchristmas.propTypes = {
  modulebackgroundcolor: PropTypes.string,
  
  itemsPerSlide: PropTypes.number,
  itemsPerRow: PropTypes.number,
  itemsPerRowMobile: PropTypes.number,

  /** Images */
  image1: PropTypes.string,
  image1alt: PropTypes.string,
  image1title: PropTypes.string,
  image1link: PropTypes.string,
  image1dataElementType: PropTypes.string,
  image1datapromotionindex: PropTypes.string,
  image1datapromotionname: PropTypes.string,
  image2: PropTypes.string,
  image2alt: PropTypes.string,
  image2title: PropTypes.string,
  image2link: PropTypes.string,
  image2dataElementType: PropTypes.string,
  image2datapromotionindex: PropTypes.string,
  image2datapromotionname: PropTypes.string,
  image3: PropTypes.string,
  image3alt: PropTypes.string,
  image3title: PropTypes.string,
  image3link: PropTypes.string,
  image3dataElementType: PropTypes.string,
  image3datapromotionindex: PropTypes.string,
  image3datapromotionname: PropTypes.string,
  image4: PropTypes.string,
  image4alt: PropTypes.string,
  image4title: PropTypes.string,
  image4link: PropTypes.string,
  image4dataElementType: PropTypes.string,
  image4datapromotionindex: PropTypes.string,
  image4datapromotionname: PropTypes.string,
  image5: PropTypes.string,
  image5alt: PropTypes.string,
  image5title: PropTypes.string,
  image5link: PropTypes.string,
  image5dataElementType: PropTypes.string,
  image5datapromotionindex: PropTypes.string,
  image5datapromotionname: PropTypes.string,
  image6: PropTypes.string,
  image6alt: PropTypes.string,
  image6title: PropTypes.string,
  image6link: PropTypes.string,
  image6dataElementType: PropTypes.string,
  image6datapromotionindex: PropTypes.string,
  image6datapromotionname: PropTypes.string,
  image7: PropTypes.string,
  image7alt: PropTypes.string,
  image7title: PropTypes.string,
  image7link: PropTypes.string,
  image7dataElementType: PropTypes.string,
  image7datapromotionindex: PropTypes.string,
  image7datapromotionname: PropTypes.string,
  image8: PropTypes.string,
  image8alt: PropTypes.string,
  image8title: PropTypes.string,
  image8link: PropTypes.string,
  image8dataElementType: PropTypes.string,
  image8datapromotionindex: PropTypes.string,
  image8datapromotionname: PropTypes.string,
  image9: PropTypes.string,
  image9alt: PropTypes.string,
  image9title: PropTypes.string,
  image9link: PropTypes.string,
  image9dataElementType: PropTypes.string,
  image9datapromotionindex: PropTypes.string,
  image9datapromotionname: PropTypes.string,
  image10: PropTypes.string,
  image10alt: PropTypes.string,
  image10title: PropTypes.string,
  image10link: PropTypes.string,
  image10dataElementType: PropTypes.string,
  image10datapromotionindex: PropTypes.string,
  image10datapromotionname: PropTypes.string,
  image11: PropTypes.string,
  image11alt: PropTypes.string,
  image11title: PropTypes.string,
  image11link: PropTypes.string,
  image11dataElementType: PropTypes.string,
  image11datapromotionindex: PropTypes.string,
  image11datapromotionname: PropTypes.string,
  image12: PropTypes.string,
  image12alt: PropTypes.string,
  image12title: PropTypes.string,
  image12link: PropTypes.string,
  image12dataElementType: PropTypes.string,
  image12datapromotionindex: PropTypes.string,
  image12datapromotionname: PropTypes.string,
  arrowsBackground: PropTypes.string,
  arrowsColor: PropTypes.string,

  /** Left panel */
  background: PropTypes.string,
  titlecolor: PropTypes.string,
  textcolor: PropTypes.string,
  buttonStyle: PropTypes.string,
  buttonLink: PropTypes.string,
  title: PropTypes.string,
  blurb: PropTypes.string,
  mainImage: PropTypes.string,
  mainImagealt: PropTypes.string,
  mainImageLink: PropTypes.string,
};
