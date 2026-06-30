import PropTypes from "prop-types";
import { useEffect } from "react";

export const HubStackedCarousel= ({
  title,
  panel1image,
  panel1imagealt,
  panel1bgimage,
  panel1bgimagealt,
  panel1title,
  panel1link,
  panel1buttontext,
  panel1buttonicon,
  panel1backgroundcolor,
  panel1backgroundhovercolor,
  panel1textcolor,
  panel1texthovercolor,
  panel1buttonbackgroundcolor,
  panel1buttonhoverbackgroundcolor,
  panel1buttontextcolor,
  panel1buttonhovercolor,
  panel1buttonbordercolor,
  panel1buttonborderhovercolor,
  panel1bordercolor,
  panel1borderhovercolor,
  panel1borderactivecolor,
  panel2image,
  panel2imagealt,
  panel2bgimage,
  panel2bgimagealt,
  panel2title,
  panel2link,
  panel2buttontext,
  panel2buttonicon,
  panel2backgroundcolor,
  panel2backgroundhovercolor,
  panel2textcolor,
  panel2texthovercolor,
  panel2buttonbackgroundcolor,
  panel2buttonhoverbackgroundcolor,
  panel2buttonbordercolor,
  panel2buttonborderhovercolor,
  panel2buttontextcolor,
  panel2buttonhovercolor,
  panel2bordercolor,
  panel2borderhovercolor,
  panel2borderactivecolor,
  panel3image,
  panel3imagealt,
  panel3bgimage,
  panel3bgimagealt,
  panel3title,
  panel3link,
  panel3buttontext,
  panel3buttonicon,
  panel3backgroundcolor,
  panel3backgroundhovercolor,
  panel3textcolor,
  panel3texthovercolor,
  panel3buttonbackgroundcolor,
  panel3buttonhoverbackgroundcolor,
  panel3buttonbordercolor,
  panel3buttonborderhovercolor,
  panel3buttontextcolor,
  panel3buttonhovercolor,
  panel3bordercolor,
  panel3borderhovercolor,
  panel3borderactivecolor,
  panel4image,
  panel4imagealt,
  panel4bgimage,
  panel4bgimagealt,
  panel4title,
  panel4link,
  panel4buttontext,
  panel4buttonicon,
  panel4backgroundcolor,
  panel4backgroundhovercolor,
  panel4textcolor,
  panel4texthovercolor,
  panel4buttonbackgroundcolor,
  panel4buttonhoverbackgroundcolor,
  panel4buttonbordercolor,
  panel4buttonborderhovercolor,
  panel4buttontextcolor,
  panel4buttonhovercolor,
  panel4bordercolor,
  panel4borderhovercolor,
  panel4borderactivecolor,
  panel5image,
  panel5imagealt,
  panel5bgimage,
  panel5bgimagealt,
  panel5title,
  panel5link,
  panel5buttontext,
  panel5buttonicon,
  panel5backgroundcolor,
  panel5backgroundhovercolor,
  panel5textcolor,
  panel5texthovercolor,
  panel5buttonbackgroundcolor,
  panel5buttonhoverbackgroundcolor,
  panel5buttonbordercolor,
  panel5buttonborderhovercolor,
  panel5buttontextcolor,
  panel5buttonhovercolor,
  panel5bordercolor,
  panel5borderhovercolor,
  panel5borderactivecolor,
}) => {

  const heropanels = [
  {
    image: panel1image,
    alt: panel1imagealt,
    bgimage: panel1bgimage,
    bgimagealt: panel1bgimagealt,
    title: panel1title,
    link: panel1link,
    buttontext: panel1buttontext,
    buttonicon: panel1buttonicon,
    backgroundcolor: panel1backgroundcolor,
    backgroundhovercolor: panel1backgroundhovercolor,
    textcolor: panel1textcolor,
    texthovercolor: panel1texthovercolor,
    buttonbackgroundcolor: panel1buttonbackgroundcolor,
    buttonhoverbackgroundcolor: panel1buttonhoverbackgroundcolor,
    buttonbordercolor: panel1buttonbordercolor,
    buttonborderhovercolor: panel1buttonborderhovercolor,
    buttontextcolor: panel1buttontextcolor,
    buttonhovercolor: panel1buttonhovercolor,
    bordercolor: panel1bordercolor,
    borderhovercolor: panel1borderhovercolor,
    borderactivecolor: panel1borderactivecolor,
  },
  {
    image: panel2image,
    alt: panel2imagealt,
    bgimage: panel2bgimage,
    bgimagealt: panel2bgimagealt,
    title: panel2title,
    link: panel2link,
    buttontext: panel2buttontext,
    buttonicon: panel2buttonicon,
    backgroundcolor: panel2backgroundcolor,
    backgroundhovercolor: panel2backgroundhovercolor,
    textcolor: panel2textcolor,
    texthovercolor: panel2texthovercolor,
    buttonbackgroundcolor: panel2buttonbackgroundcolor,
    buttonhoverbackgroundcolor: panel2buttonhoverbackgroundcolor,
    buttonbordercolor: panel2buttonbordercolor,
    buttonborderhovercolor: panel2buttonborderhovercolor,
    buttontextcolor: panel2buttontextcolor,
    buttonhovercolor: panel2buttonhovercolor,
    bordercolor: panel2bordercolor,
    borderhovercolor: panel2borderhovercolor,
    borderactivecolor: panel2borderactivecolor,
  },
  {
    image: panel3image,
    alt: panel3imagealt,
    bgimage: panel3bgimage,
    bgimagealt: panel3bgimagealt,
    title: panel3title,
    link: panel3link,
    buttontext: panel3buttontext,
    buttonicon: panel3buttonicon,
    backgroundcolor: panel3backgroundcolor,
    backgroundhovercolor: panel3backgroundhovercolor,
    textcolor: panel3textcolor,
    texthovercolor: panel3texthovercolor,
    buttonbackgroundcolor: panel3buttonbackgroundcolor,
    buttonhoverbackgroundcolor: panel3buttonhoverbackgroundcolor,
    buttonbordercolor: panel3buttonbordercolor,
    buttonborderhovercolor: panel3buttonborderhovercolor,
    buttontextcolor: panel3buttontextcolor,
    buttonhovercolor: panel3buttonhovercolor,
    bordercolor: panel3bordercolor,
    borderhovercolor: panel3borderhovercolor,
    borderactivecolor: panel3borderactivecolor,
  },
  {
    image: panel4image,
    alt: panel4imagealt,
    bgimage: panel4bgimage,
    bgimagealt: panel4bgimagealt,
    title: panel4title,
    link: panel4link,
    buttontext: panel4buttontext,
    buttonicon: panel4buttonicon,
    backgroundcolor: panel4backgroundcolor,
    backgroundhovercolor: panel4backgroundhovercolor,
    textcolor: panel4textcolor,
    texthovercolor: panel4texthovercolor,
    buttonbackgroundcolor: panel4buttonbackgroundcolor,
    buttonhoverbackgroundcolor: panel4buttonhoverbackgroundcolor,
    buttonbordercolor: panel4buttonbordercolor,
    buttonborderhovercolor: panel4buttonborderhovercolor,
    buttontextcolor: panel4buttontextcolor,
    buttonhovercolor: panel4buttonhovercolor,
    bordercolor: panel4bordercolor,
    borderhovercolor: panel4borderhovercolor,
    borderactivecolor: panel4borderactivecolor,
  },
  {
    image: panel5image,
    alt: panel5imagealt,
    bgimage: panel5bgimage,
    bgimagealt: panel5bgimagealt,
    title: panel5title,
    link: panel5link,
    buttontext: panel5buttontext,
    buttonicon: panel5buttonicon,
    backgroundcolor: panel5backgroundcolor,
    backgroundhovercolor: panel5backgroundhovercolor,
    textcolor: panel5textcolor,
    texthovercolor: panel5texthovercolor,
    buttonbackgroundcolor: panel5buttonbackgroundcolor,
    buttonhoverbackgroundcolor: panel5buttonhoverbackgroundcolor,
    buttonbordercolor: panel5buttonbordercolor,
    buttonborderhovercolor: panel5buttonborderhovercolor,
    buttontextcolor: panel5buttontextcolor,
    buttonhovercolor: panel5buttonhovercolor,
    bordercolor: panel5bordercolor,
    borderhovercolor: panel5borderhovercolor,
    borderactivecolor: panel5borderactivecolor,
  },
];
const validHeroPanels = heropanels.filter(
  (p) => p.image && p.link && p.title
);
 
useEffect(() => {
  const stack = document.getElementById("carousel-stack");
  if (!stack) return;

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragOffset = 0;
  let resizeTimer;

  const cards = Array.from(document.querySelectorAll(".carousel-card"));
  const cardsElements = document.querySelectorAll(".carousel-card");
  const slides = document.querySelectorAll(".card-content-container");

  // -----------------------------
  // EQUAL HEIGHTS
  // -----------------------------
  function setEqualHeights() {
    let heroHeight = 0;

    slides.forEach((slide) => {
      slide.style.height = "auto";
    });

    slides.forEach((slide) => {
      const h = slide.getBoundingClientRect().height;

      if (h > heroHeight) {
        heroHeight = h;
      }
    });

    slides.forEach((slide) => {
      slide.style.height = `${heroHeight}px`;
    });

    if (stack && heroHeight > 0) {
      stack.style.height = `${heroHeight}px`;
    }
  }

  // -----------------------------
  // TRANSFORMS
  // -----------------------------
  function updateTransforms() {
  const len = cards.length;

  // same width calculation used in CSS
  const cardWidth = Math.max(
    45,
    Math.min(
      100.,
      95 - ((len - 1) * 5)
    )
  );

  // space left after card width
  const availableSpace = 100 - cardWidth;

  cards.forEach((card, index) => {
    const offset = (index - currentIndex + len) % len;
    const isTop = offset === 0;

    // spread cards ONLY inside available area
    const xOffset =
      (availableSpace / Math.max(len - 1, 1)) * offset +
      (isTop ? dragOffset / 3 : 0);

    card.classList.toggle("top", isTop);

    card.style.transform = `
      translateX(${xOffset}%)
      scale(${1 - offset * 0.015})
    `;

    card.style.zIndex = len - offset;
  });
}

  // -----------------------------
  // NAVIGATION
  // -----------------------------
  function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    dragOffset = 0;
    updateTransforms();
  }

  function prevCard() {
    currentIndex =
      (currentIndex - 1 + cards.length) % cards.length;

    dragOffset = 0;
    updateTransforms();
  }

  // -----------------------------
  // BUTTONS
  // -----------------------------
  prevBtn?.addEventListener("click", prevCard);
  nextBtn?.addEventListener("click", nextCard);

  // -----------------------------
  // MOUSE EVENTS
  // -----------------------------
  const onMouseDown = (e) => {
    isDragging = true;
    dragStartX = e.clientX;
  };

  const onMouseMove = (e) => {
    if (!isDragging) {
      stack.classList.remove("dragging");
      return;
    }

    stack.classList.add("dragging");

    dragOffset = Math.max(
      -20,
      Math.min(20, e.clientX - dragStartX)
    );

    updateTransforms();
  };

  const onMouseUp = (e) => {
    if (!isDragging) {
      stack.classList.remove("dragging");
      return;
    }

    isDragging = false;

    stack.classList.remove("dragging");

    const deltaX = e.clientX - dragStartX;

    if (deltaX > 20) {
      prevCard();
    } else if (deltaX < -20) {
      nextCard();
    } else {
      dragOffset = 0;
      updateTransforms();
    }
  };

  const onMouseLeave = () => {
    if (!isDragging) return;

    isDragging = false;
    dragOffset = 0;

    stack.classList.remove("dragging");

    updateTransforms();
  };

  // -----------------------------
  // TOUCH EVENTS
  // -----------------------------
  const onTouchStart = (e) => {
    isDragging = true;
    dragStartX = e.touches[0].clientX;

    stack.classList.add("dragging");
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;

    dragOffset = Math.max(
      -20,
      Math.min(
        20,
        e.touches[0].clientX - dragStartX
      )
    );

    updateTransforms();
  };

  const onTouchEnd = (e) => {
    isDragging = false;

    stack.classList.remove("dragging");

    const deltaX =
      e.changedTouches[0].clientX - dragStartX;

    if (deltaX > 20) {
      prevCard();
    } else if (deltaX < -20) {
      nextCard();
    } else {
      dragOffset = 0;
      updateTransforms();
    }
  };

  // -----------------------------
  // EVENT LISTENERS
  // -----------------------------
  stack.addEventListener("mousedown", onMouseDown);
  stack.addEventListener("mousemove", onMouseMove);
  stack.addEventListener("mouseleave", onMouseLeave);

  window.addEventListener("mouseup", onMouseUp);

  stack.addEventListener("touchstart", onTouchStart, {
    passive: true,
  });

  stack.addEventListener("touchmove", onTouchMove, {
    passive: true,
  });

  stack.addEventListener("touchend", onTouchEnd);

  // -----------------------------
  // CLICK TO ACTIVATE
  // -----------------------------
  cardsElements.forEach((card, index) => {
    card.addEventListener("mousedown", (e) => {
      if (!e.currentTarget.classList.contains("top")) {
        currentIndex = index;
        dragOffset = 0;

        updateTransforms();
      }
    });
  });

  // -----------------------------
  // RESIZE
  // -----------------------------
  const onResize = () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      setEqualHeights();
      updateTransforms();
    }, 150);
  };

  window.addEventListener("resize", onResize);

  // -----------------------------
  // INIT
  // -----------------------------
  function init() {
    updateTransforms();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setEqualHeights();
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

          if (loaded === images.length) {
            init();
          }
        };
      }
    });

    if (loaded === images.length) {
      init();
    }
  }

  const timeout = setTimeout(init, 500);

  // -----------------------------
  // CLEANUP
  // -----------------------------
  return () => {
    clearTimeout(timeout);
    clearTimeout(resizeTimer);

    window.removeEventListener("resize", onResize);
    window.removeEventListener("mouseup", onMouseUp);

    stack.removeEventListener("mousedown", onMouseDown);
    stack.removeEventListener("mousemove", onMouseMove);
    stack.removeEventListener("mouseleave", onMouseLeave);

    stack.removeEventListener("touchstart", onTouchStart);
    stack.removeEventListener("touchmove", onTouchMove);
    stack.removeEventListener("touchend", onTouchEnd);

    prevBtn?.removeEventListener("click", prevCard);
    nextBtn?.removeEventListener("click", nextCard);
  };
}, []);

  
    return (
    <>
      <style>
        {`
        :root {
      --panel-bg-color: #fff;
      --panel-hover-bg: #fff;
      --panel-border-color: #999999;
      --panel-border-hover-color: #ff6ec7;
      --panel-text-color: #3b519a;
      --panel-text-hover-color: #fff;
      --panel-button-bg: #009e44;
      --panel-button-hover-bg: #1f2b91;
      --panel-button-text-color: #fff;
      --panel-button-hover-text-color: #fff;
      --panel-button-border-color: #dbe3ff;
      --panel-button-hover-border-color: #dbe3ff;
    }
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
    max-width: 1440px;
    width: 100%;
    margin: 0 auto 30px;
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
    max-width: 1200px;
    padding: 0 20px;
  }

  .carousel-stack {
    position: relative;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    cursor: grab;
    touch-action: none;
    overflow: visible;
    border-radius: 24px;
    padding-right: 0;
  }

  .carousel-stack:active {
    cursor: grabbing;
  }

  .carousel-card {
    position: absolute;
    width:var(--card-width);
    height: auto;
    transition:
      transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      z-index 0s;
    will-change: transform;
    left: 0;
    user-select: none;
  }

  .carousel-card a {
    pointer-events: none;
    text-decoration: none;
  }

  .carousel-card.top {
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .carousel-card.top a {
    pointer-events: all;
  }

  .card-content {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    border: 3px solid transparent;
    background-color: var(--panel-bg-color);
    padding: 10px;
    text-align: center;
  }

  .top .card-content {
    border: 3px solid  var(--panel-border-color);
  }

  .card-content .card-title {
    font-size: 20px;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    color: var(--panel-text-color);
    margin: 30px 0;
    transform: scale(0.5);
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    .card-content .card-title {
      font-size: 16px;
    }
  }

  .top .card-content .card-title {
    transform: scale(1);
  }

  .card-content .media {
    width: 100%;
    height: auto;
    position: relative;
  }

  .card-content .media img.bg-image {
    width: 100%;
    height: auto;
    display: block;
    filter: blur(2px);
    transition: all 0.3s;
  }

  .top .card-content .media img.bg-image {
    filter: blur(0);
  }

  .card-content .media img.overlay {
    position: absolute;
    right: -20px;
    bottom: 0;
    height: 90%;
    width: auto;
    transition: all 0.3s;
    min-width: unset;
  }

  .top .card-content .media img.overlay {
    right: 50%;
    transform: translateX(50%);
  }

  .card-content .hero-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: var(--panel-button-color);
    color: var(--panel-button-text-color);
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    padding: 10px 10px 10px 0;
    height: 40px;
    box-shadow: 0 0 5px rgba(3, 33, 33, 0.3);
    border: 3px solid var(--panel-button-border-color);
    transition: all 0.3s;
    transform: scale(0.52);
  }

  .top .card-content .hero-button {
    transform: scale(1);
  }

  .card-content .hero-button:hover {
    background-color: var(--panel-button-hover-color);
    scale: 1.05;
    box-shadow: 0 0 18px rgba(3, 33, 33, 0.3);
    color: var(--panel-button-hover-text-color);
    border: 3px solid var(--panel-button-hover-border-color);
  }

  .card-content .hero-button .basket-icon {
    transition: all 0.3s;
    transform: rotate(15deg);
    margin-left: 5px;
  }

  .card-content .hero-button:hover .basket-icon {
    transform: rotate(-10deg);
  }

  .card-content .hero-button .star-start {
    position: relative;
    top: -3px;
  }

  .card-content .hero-button .swoosh-container {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 5px;
    width: 25px;
  }

  .card-content .hero-button .swoosh {
    display: block;
    width: 0;
    height: 3px;
    margin-top: -3px;
    margin-left: -2px;
    transform: rotate(15deg);
    background-color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s;
  }

  .card-content .hero-button:hover .swoosh {
    width: 7px;
  }

  .card-content .hero-button .star-end {
    position: relative;
    bottom: -5px;
    transition: all 0.3s;
  }

  .card-content .hero-button:hover .star-end {
    scale: 1.1;
    transform: rotate(30deg);
  }

  .prev-btn,
  .next-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 10;
    background-color: #407ec9;
    color: #fff;
    border-radius: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
  }
  .prev-btn {
    left: -10px;
    transform: rotate(-90deg);
  }
  .next-btn {
    right: 0;
    transform: rotate(90deg);
  }
  .prev-btn svg,
  .next-btn svg {
    width: 100%;
    height: 100%;
  }

  .hero-tile-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  .card-content-container a .card-title,
  .card-content-container a .card-content {
    transition: all 0.3s;
  }

  .card-content-container a:hover .card-title {
    color: var(--panel-text-hover-color);
  }

  .card-content-container a:hover .card-content {
    background-color: var(--panel-hover-color);
    color: var(--panel-text-hover-color);
    border: 3px solid var(--panel-border-hover-color);
  }
        `}
      </style>

<div class="carousel-wrapper">
  <div class="carousel-container">
    <div class="prev-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chevron-up h-5 w-5"
        aria-hidden="true"
      >
        <path d="m18 15-6-6-6 6"></path>
      </svg>
    </div>
    <div class="next-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chevron-up h-5 w-5"
        aria-hidden="true"
      >
        <path d="m18 15-6-6-6 6"></path>
      </svg>
    </div>
    <div id="carousel-stack" class="carousel-stack"
      style={{
      "--card-width":
    `${Math.max(
      80,
      Math.min(
        95,
        95 - ((validHeroPanels.length - 1) * (validHeroPanels.length * (validHeroPanels.length === 3 ? 1.35 : validHeroPanels.length === 4 ? 0.95 : validHeroPanels.length === 5 ? 0.7 : 2.3)))
      )
    )}%`
      }}
    >

    {validHeroPanels.map((panel, index) => (
      <div class="carousel-card" style={{
        "--panel-background-color": panel.backgroundcolor,
        "--panel-hover-color": panel.backgroundhovercolor,
        "--panel-text-color": panel.textcolor,
        "--panel-text-hover-color": panel.texthovercolor,
        "--panel-border-color": panel.bordercolor,
        "--panel-border-hover-color": panel.borderhovercolor,
        "--panel-button-color": panel.buttonbackgroundcolor,
        "--panel-button-hover-color": panel.buttonhoverbackgroundcolor,
        "--panel-button-text-color": panel.buttontextcolor,
        "--panel-button-hover-text-color": panel.buttonhovercolor,
        "--panel-button-border-color": panel.buttonbordercolor,
        "--panel-button-hover-border-color": panel.buttonborderhovercolor,
      }}>
        <div class="card-content-container">
          <a
            href={panel.link}
            
          >
            <div class="card-content">
              <div class="media">
                <img
                  class="bg-image"
                  alt="pitch"
                  src={panel.bgimage} alt={panel.bgimagealt}
                />
                <img
                  class="overlay"
                  src={panel.image} alt={panel.alt}
                />
              </div>
              <div class="hero-tile-info">
                <div class="card-title">{panel.title}</div>
                <button
                  href={panel.link}
                  class="hero-button"
                  
                >
                  <span class="swoosh-container"
                    ><span class="star-start"
                      ><svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                          fill-opacity="0.5"
                        ></path></svg></span
                    ><span class="swoosh">&nbsp;</span></span>Shop<span class="basket-icon"
                    ><svg
                      width="22"
                      height="18"
                      viewBox="0 0 22 18"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"
                      ></path></svg></span
                  ><span class="star-end"
                    ><svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                        fill-opacity="0.5"
                      ></path></svg></span>
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>
    ))}
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
    const slides = document.querySelectorAll(".card-content-container");

    function setEqualHeights() {
      let heroHeight = 0;

      // reset heights first
      slides.forEach((slide) => {
        slide.style.height = "auto";
      });

      // find tallest
      slides.forEach((slide) => {
        if (slide.clientHeight > heroHeight) {
          heroHeight = slide.clientHeight;
        }
      });

      // apply tallest to all
      slides.forEach((slide) => {
        slide.style.height = heroHeight + "px";
      });

      if (stack) {
        stack.style.height = heroHeight + "px";
      }
    }

    setEqualHeights();

    let currentIndex = 0;
let isDragging = false;
let dragStartX = 0;
let dragOffset = 0;

let resizeTimer;

window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    setEqualHeights();
    updateTransforms();
  },150);
});

    const cards = Array.from(document.querySelectorAll(".carousel-card"));
    const indicatorButtons = Array.from(
      document.querySelectorAll(".indicator"),
    );
    const cardsElements = document.querySelectorAll(".carousel-card");

    function updateTransforms() {
  const len = cards.length;

  // same width calculation used in CSS
  const cardWidth = Math.max(
    80,
    Math.min(
      81,
      95 - ((len - 1) * 1.5)
    )
  );

  // space remaining inside stack
  const availableSpace = 100 - cardWidth;

  cards.forEach((card, index) => {
    const offset = (index - currentIndex + len) % len;
    const isTop = offset === 0;

    const xOffset =
      (availableSpace / Math.max(len - 1, 1)) *
      offset +
      (isTop ? dragOffset / 3 : 0);

    card.classList.toggle("top", isTop);

    card.style.transform =
      "translateX(" +
      xOffset +
      "%) scale(" +
      (1 - offset * 0.015) +
      ")";

    card.style.zIndex = len - offset;
  });
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

    if (nextBtn) nextBtn.addEventListener("click", nextCard);
    if (prevBtn) prevBtn.addEventListener("click", prevCard);

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

    stack.addEventListener("mouseleave", () => {
      if (isDragging) {
        isDragging = false;
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
      if (!isDragging) return;
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

    updateTransforms();
  });
`}
</script>
    </>
  );
};

HubStackedCarousel.propTypes = {
  panel1image: PropTypes.string,
  panel1imagealt: PropTypes.string,
  panel1bgimage: PropTypes.string,
  panel1bgimagealt: PropTypes.string,
  panel1title: PropTypes.string,
  panel1link: PropTypes.string,
  panel1buttontext: PropTypes.string,
  panel1buttonicon: PropTypes.string,
  panel1backgroundcolor: PropTypes.string,
  panel1backgroundhovercolor: PropTypes.string,
  panel1textcolor: PropTypes.string,
  panel1texthovercolor: PropTypes.string,
  panel1buttonbackgroundcolor: PropTypes.string,
  panel1buttonhoverbackgroundcolor: PropTypes.string,
  panel1buttonbordercolor: PropTypes.string,
  panel1buttonborderhovercolor: PropTypes.string,
  panel1buttontextcolor: PropTypes.string,
  panel1buttonhovercolor: PropTypes.string,
  panel1bordercolor: PropTypes.string,
  panel1borderhovercolor: PropTypes.string,
  panel2image: PropTypes.string,
  panel2imagealt: PropTypes.string,
  panel2bgimage: PropTypes.string,
  panel2bgimagealt: PropTypes.string,
  panel2title: PropTypes.string,
  panel2link: PropTypes.string,
  panel2buttontext: PropTypes.string,
  panel2buttonicon: PropTypes.string,
  panel2backgroundcolor: PropTypes.string,
  panel2backgroundhovercolor: PropTypes.string,
  panel2textcolor: PropTypes.string,
  panel2texthovercolor: PropTypes.string,
  panel2buttonbackgroundcolor: PropTypes.string,
  panel2buttonhoverbackgroundcolor: PropTypes.string,
  panel2buttonbordercolor: PropTypes.string,
  panel2buttonborderhovercolor: PropTypes.string,
  panel2buttontextcolor: PropTypes.string,
  panel2buttonhovercolor: PropTypes.string,
  panel2bordercolor: PropTypes.string,
  panel2borderhovercolor: PropTypes.string,
  panel2borderactivecolor: PropTypes.string,
  panel3image: PropTypes.string,
  panel3imagealt: PropTypes.string,
  panel3bgimage: PropTypes.string,
  panel3bgimagealt: PropTypes.string,
  panel3title: PropTypes.string,
  panel3link: PropTypes.string,
  panel3buttontext: PropTypes.string,
  panel3buttonicon: PropTypes.string,
  panel3backgroundcolor: PropTypes.string,
  panel3backgroundhovercolor: PropTypes.string,
  panel3textcolor: PropTypes.string,
  panel3texthovercolor: PropTypes.string,
  panel3buttonbackgroundcolor: PropTypes.string,
  panel3buttonhoverbackgroundcolor: PropTypes.string,
  panel3buttonbordercolor: PropTypes.string,
  panel3buttonborderhovercolor: PropTypes.string,
  panel3buttontextcolor: PropTypes.string,
  panel3buttonhovercolor: PropTypes.string,
  panel3bordercolor: PropTypes.string,
  panel3borderhovercolor: PropTypes.string,
  panel3borderactivecolor: PropTypes.string,
  panel4image: PropTypes.string,
  panel4imagealt: PropTypes.string,
  panel4bgimage: PropTypes.string,
  panel4bgimagealt: PropTypes.string,
  panel4title: PropTypes.string,
  panel4link: PropTypes.string,
  panel4buttontext: PropTypes.string,
  panel4buttonicon: PropTypes.string,
  panel4backgroundcolor: PropTypes.string,
  panel4backgroundhovercolor: PropTypes.string,
  panel4textcolor: PropTypes.string,
  panel4texthovercolor: PropTypes.string,
  panel4buttonbackgroundcolor: PropTypes.string,
  panel4buttonhoverbackgroundcolor: PropTypes.string,
  panel4buttonbordercolor: PropTypes.string,
  panel4buttonborderhovercolor: PropTypes.string,
  panel4buttontextcolor: PropTypes.string,
  panel4buttonhovercolor: PropTypes.string,
  panel4bordercolor: PropTypes.string,
  panel4borderhovercolor: PropTypes.string,
  panel4borderactivecolor: PropTypes.string,
  panel5image: PropTypes.string,
  panel5imagealt: PropTypes.string,
  panel5bgimage: PropTypes.string,
  panel5bgimagealt: PropTypes.string,
  panel5title: PropTypes.string,
  panel5link: PropTypes.string,
  panel5buttontext: PropTypes.string,
  panel5buttonicon: PropTypes.string,
  panel5backgroundcolor: PropTypes.string,
  panel5backgroundhovercolor: PropTypes.string,
  panel5textcolor: PropTypes.string,
  panel5texthovercolor: PropTypes.string,
  panel5buttonbackgroundcolor: PropTypes.string,
  panel5buttonhoverbackgroundcolor: PropTypes.string,
  panel5buttonbordercolor: PropTypes.string,
  panel5buttonborderhovercolor: PropTypes.string,
  panel5buttontextcolor: PropTypes.string,
  panel5buttonhovercolor: PropTypes.string,
  panel5bordercolor: PropTypes.string,
  panel5borderhovercolor: PropTypes.string,
  panel5borderactivecolor: PropTypes.string,
};
