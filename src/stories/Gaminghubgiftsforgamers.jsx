import PropTypes from "prop-types";

export const GaminghubGiftsForGamers= ({
  title,
  panel1image,
  panel1imagealt,
  panel1title,
  panel1link,
  panel2image,
  panel2imagealt,
  pane21title,
  panel2link,
  panel3image,
  panel3imagealt,
  pane31title,
  panel3link,
  panel4image,
  panel4imagealt,
  pane41title,
  panel4link,
  panel5image,
  panel5imagealt,
  pane51title,
  panel5link,
  panel6image,
  panel6imagealt,
  pane61title,
  panel6link,
  panel7image,
  panel7imagealt,
  pane71title,
  panel7link,
  panel8image,
  panel8imagealt,
  pane81title,
  panel8link,
  panel9image,
  panel9imagealt,
  pane91title,
  panel9link,
  panel10image,
  panel10imagealt,
  pane101title,
  panel10link,
}) => {

  const catpanels = [
  {
    image: panel1image,
    alt: panel1imagealt,
    title: panel1title,
    link: panel1link,
  },
  {
    image: panel2image,
    alt: panel2imagealt,
    title: pane21title,
    link: panel2link,
  },
  {
    image: panel3image,
    alt: panel3imagealt,
    title: pane31title,
    link: panel3link,
  },
  {
    image: panel4image,
    alt: panel4imagealt,
    title: pane41title,
    link: panel4link,
  },
  {
    image: panel5image,
    alt: panel5imagealt,
    title: pane51title,
    link: panel5link,
  },
  {
    image: panel6image,
    alt: panel6imagealt,
    title: pane61title,
    link: panel6link,
  },
  {
    image: panel7image,
    alt: panel7imagealt,
    title: pane71title,
    link: panel7link,
  },
  {
    image: panel8image,
    alt: panel8imagealt,
    title: pane81title,
    link: panel8link,
  },
  {
    image: panel9image,
    alt: panel9imagealt,
    title: pane91title,
    link: panel9link,
  },
  {
    image: panel10image,
    alt: panel10imagealt,
    title: pane101title,
    link: panel10link,
  },
];
const validGiftsPanels = catpanels.filter(
  (p) => p.image && p.link && p.title
);
 
  return (
    <>
      <style>
        {`
    #gaming-new-arrivals-area {
    background-color: #fff;
    max-width: 940px;
    padding: 0 20px;
    margin: 0 auto;
  }
  .gaming-new-arrivals-content {
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    padding: 10px 0;
    text-align: center;
  }

  .gaming-new-arrivals-content h2 {
    text-transform: uppercase;
    background: linear-gradient(
        180deg, 
        rgba(80, 80, 80, 0.9) 0%, 
        rgba(60, 60, 60, 0.95) 50%, 
        rgba(40, 40, 40, 1) 100%
    );
    color: #fff;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    font-size: 18px;
    border-radius: 8px;
    margin: 0;
    box-shadow: inset 0 4px 10px rgba(255,255,255,0.1); /* subtle inner highlight */
    backdrop-filter: blur(2px); /* optional slight blur for glass effect */
    -webkit-backdrop-filter: blur(2px);
    padding: 5px 0;
}

/* Carousel */
.new-arrivals-carousel .carousel {
      margin: 0 auto;
      max-width: 900px;
      padding: 0;
    }

    .new-arrivals-carousel .flickity-viewport {
      margin: 0 auto;
    }

    .new-arrivals-carousel .carousel-cell {
      margin: 20px 20px 20px 0;
      text-align: center;
      width: 55%;
      counter-increment: carousel-cell;
    }

    .new-arrivals-carousel .carousel-cell:before {
      display: block;
    }

    .new-arrivals-carousel .carousel-cell img {
      display: block;
      width: auto;
      height: auto;
      max-height: 160px;
      max-width: 100%;
      min-width: unset;
    }

    .new-arrivals-carousel .flickity-page-dots {
      display: none;
    }

    .new-arrivals-carousel .flickity-prev-next-button {
      width: 30px;
      height: 30px;
      background-color: #494949;
      box-shadow: none;
      padding: 5px;
    }

    @media (min-width: 768px) {
      .new-arrivals-carousel .carousel-cell {
        width: 40%;
      }

      .new-arrivals-carousel .flickity-prev-next-button.previous {
        left: 20px;
      }

      .new-arrivals-carousel .flickity-prev-next-button.next {
        right: 20px;
      }
    }

    .new-arrivals-carousel .carousel-cell a {
      display: block;
      border-radius: 8px;
      transition: all 0.3s;
      position: relative;
      overflow: visible;
      z-index: 2;
      background-color: #fff;
      color: #292929;
      padding: 3px;
    }

    .new-arrivals-carousel .carousel-cell a::after {
  content: '';
  display: block;
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(
        180deg, 
        rgba(120, 120, 120, 0.9) 0%,
        rgba(100, 100, 100, 0.95) 50%,
        rgba(80, 80, 80, 1) 100%
    );
}
.new-arrivals-carousel .carousel-cell a:hover::after {
  content: '';
  display: block;
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(
      270deg,
      rgba(255,110,199,0.8),
      rgba(0,255,255,0.8),
      rgba(255,110,199,0.8)
  );
  background-size: 600% 600%;
  z-index: 0;
  animation: shimmer 3s linear infinite;
}

    @keyframes shimmer {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }


    .new-arrivals-carousel .carousel-cell-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }

    .new-arrivals-carousel .carousel-cell-content p {
      line-height: 1.4;
      margin: 20px 5px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;  
      overflow: hidden;
    }

    /* button */
    .new-arrivals-carousel .carousel-cell .hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50px;
          background-color: #009e44;
          color: #fff;
          font-size: 12px;
          font-weight: bold;
          text-decoration: none;
          padding: 10px 20px 10px 10px;
          height: 40px;
          box-shadow: 0 0 5px rgba(3, 33, 33, 0.3);
          border: 3px solid #dbe3ff;
          transition: all 0.3s;
          width: 100%;
          margin-bottom: 20px;
        }

        .new-arrivals-carousel .carousel-cell .hero-button:hover {
          background-color: #afcb17;
          scale: 1.05;
          box-shadow: 0 0 18px rgba(3, 33, 33, 0.3);
          color: #fff;
        }

        .new-arrivals-carousel .carousel-cell .hero-button .basket-icon {
          transition: all 0.3s;
          transform: rotate(15deg);
          margin-left: 5px;
        }

        .new-arrivals-carousel .carousel-cell .hero-button:hover .basket-icon {
          transform: rotate(-10deg);
        }

        .new-arrivals-carousel .carousel-cell .hero-button .star-start {
          position: relative;
          top: -3px;
        }

        .new-arrivals-carousel .carousel-cell .hero-button .swoosh-container {
          display: flex;
          align-items: center;
          justify-content: end;
          margin-right: 5px;
          width: 25px;
        }

        .new-arrivals-carousel .carousel-cell .hero-button .swoosh {
          display: block;
          width: 0;
          height: 3px;
          margin-top: -3px;
          margin-left: -2px;
          transform: rotate(15deg);
          background-color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s;
        }

        .new-arrivals-carousel .carousel-cell .hero-button:hover .swoosh {
          width: 7px;
        }

        .new-arrivals-carousel .carousel-cell .hero-button .star-end {
          position: relative;
          bottom: -5px;
          transition: all 0.3s;
        }

        .new-arrivals-carousel .carousel-cell .hero-button:hover .star-end {
          scale: 1.1;
          transform: rotate(30deg);
        }
        `}
      </style>

<div id="gaming-new-arrivals-area">
  <div class="gaming-new-arrivals-content">
    <h2>Gifts for gamers</h2>
  </div>
  <div class="new-arrivals-carousel">
    <div
      class="carousel js-flickity"
      data-flickity-options='{ "wrapAround": true }'
    >

      {validGiftsPanels.map((panel, index) => (
        <div class="carousel-cell">
          <a
            href={panel.link}
            title={panel.title}
          >
            <span class="carousel-cell-content">
            <img src={panel.image} alt={panel.alt} />
            <p>
              {panel.title}
            </p>

            <div class="cta-button">
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
                    ><span class="swoosh">&nbsp;</span></span
                  >Shop Now<span class="basket-icon"
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
            </span>
          </a>
        </div>

      ))}

  </div>
  </div>
</div>


<script>
  {`
document.addEventListener("DOMContentLoaded", function () {

  function equaliseCarouselHeights() {
    var cells = document.querySelectorAll(
      ".new-arrivals-carousel .carousel-cell"
    );

    var tallest = 0;

    // reset heights first
    cells.forEach(function(cell) {
      cell.style.height = "auto";

      var content = cell.querySelector(".carousel-cell-content");
      if (content) {
        content.style.height = "auto";
      }
    });

    // find tallest
    cells.forEach(function(cell) {
      var content = cell.querySelector(".carousel-cell-content");

      if (content) {
        var height = content.offsetHeight;

        if (height > tallest) {
          tallest = height;
        }
      }
    });

    // apply tallest height to all
    cells.forEach(function(cell) {
      var content = cell.querySelector(".carousel-cell-content");

      cell.style.height = tallest + "px";

      if (content) {
        content.style.height = tallest + "px";
      }
    });

    // refresh flickity sizing if available
    var flickityEl = document.querySelector(".new-arrivals-carousel .js-flickity");

    if (flickityEl && flickityEl.flickityGUID) {
      var flkty = Flickity.data(flickityEl);

      if (flkty) {
        flkty.resize();
      }
    }
  }

  // run after images load
  window.addEventListener("load", equaliseCarouselHeights);

  // rerun on resize
  window.addEventListener("resize", function () {
    clearTimeout(window.equaliseCarouselTimer);

    window.equaliseCarouselTimer = setTimeout(function () {
      equaliseCarouselHeights();
    }, 150);
  });

});
`}
</script>
    </>
  );
};

GaminghubGiftsForGamers.propTypes = {
  title: PropTypes.string,
  panel1image: PropTypes.string,
  panel1imagealt: PropTypes.string,
  panel1title: PropTypes.string,
  panel1link: PropTypes.string,
  panel2image: PropTypes.string,
  panel2imagealt: PropTypes.string,
  pane21title: PropTypes.string,
  panel2link: PropTypes.string,
  panel3image: PropTypes.string,
  panel3imagealt: PropTypes.string,
  pane31title: PropTypes.string,
  panel3link: PropTypes.string,
  panel4image: PropTypes.string,
  panel4imagealt: PropTypes.string,
  pane41title: PropTypes.string,
  panel4link: PropTypes.string,
  panel5image: PropTypes.string,
  panel5imagealt: PropTypes.string,
  pane51title: PropTypes.string,
  panel5link: PropTypes.string,
  panel6image: PropTypes.string,
  panel6imagealt: PropTypes.string,
  pane61title: PropTypes.string,
  panel6link: PropTypes.string,
  panel7image: PropTypes.string,
  panel7imagealt: PropTypes.string,
  pane71title: PropTypes.string,
  panel7link: PropTypes.string,
  panel8image: PropTypes.string,
  panel8imagealt: PropTypes.string,
  pane81title: PropTypes.string,
  panel8link: PropTypes.string,
  panel9image: PropTypes.string,
  panel9imagealt: PropTypes.string,
  pane91title: PropTypes.string,
  panel9link: PropTypes.string,
  panel10image: PropTypes.string,
  panel10imagealt: PropTypes.string,
  pane10title: PropTypes.string,
  panel10link: PropTypes.string,
  panel11image: PropTypes.string,
  panel11imagealt: PropTypes.string,
  panel11title: PropTypes.string,
  panel11link: PropTypes.string,
  panel12image: PropTypes.string,
  panel12imagealt: PropTypes.string,
  pane12title: PropTypes.string,
  panel12link: PropTypes.string,
};
