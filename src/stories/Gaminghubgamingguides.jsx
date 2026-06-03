import PropTypes from "prop-types";

export const GaminghubGamingGuides= ({
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
  panel3title,
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
  panel9title,
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
    title: panel3title,
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
    title: panel9title,
    link: panel9link,
  },
  {
    image: panel10image,
    alt: panel10imagealt,
    title: pane101title,
    link: panel10link,
  },
];
const validBlogPanels = catpanels.filter(
  (p) => p.image && p.link && p.title
);
 
  return (
    <>
      <style>
        {`
    #gaming-blog-area {
    background-color: #fff;
  }
  .gaming-blog-content {
    margin: 0 auto;
    width: 100%;
    max-width: 940px;
    padding: 10px 20px;
    text-align: center;
  }

  .gaming-blog-content h2 {
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
.blog-carousel .carousel {
      margin: 0 auto;
      max-width: 940px;
      padding: 0 20px;
    }

    .blog-carousel .flickity-viewport {
      margin: 0 auto;
    }

    .blog-carousel .carousel-cell {
      margin: 20px 10px 20px 0;
      text-align: center;
      width: calc(50% - 10px);
      counter-increment: carousel-cell;
    }

    .blog-carousel .carousel-cell img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 8px 8px 0 0;
    }

    .blog-carousel .flickity-page-dots {
      display: none;
    }

    .blog-carousel .flickity-prev-next-button {
      width: 30px;
      height: 30px;
      background-color: #494949;
      box-shadow: none;
      padding: 5px;
      display: none;
    }

    @media (min-width: 768px) {
      .blog-carousel .carousel-cell {
        width: calc(25% - 10px)
      }
    }

    .blog-carousel .carousel-cell a {
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

    .blog-carousel .carousel-cell a::after {
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
.blog-carousel .carousel-cell a:hover::after {
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


    .carousel-cell-content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: #fff;
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }

    .carousel-cell-content p {
      line-height: 1.4;
      margin: 20px 5px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;  
      overflow: hidden;
      flex-grow: 1;
    }

    /* button */
    .blog-carousel .carousel-cell .hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50px;
          background-color: #009e44;
          color: #fff;
          font-size: 13px;
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

        .blog-carousel .carousel-cell .hero-button:hover {
          background-color: #afcb17;
          scale: 1.05;
          box-shadow: 0 0 18px rgba(3, 33, 33, 0.3);
          color: #fff;
        }

        .blog-carousel .carousel-cell .hero-button .basket-icon {
          transition: all 0.3s;
          transform: rotate(15deg);
          margin-left: 5px;
        }

        .blog-carousel .carousel-cell .hero-button:hover .basket-icon {
          transform: rotate(-10deg);
        }

        .blog-carousel .carousel-cell .hero-button .star-start {
          position: relative;
          top: -3px;
        }

        .blog-carousel .carousel-cell .hero-button .swoosh-container {
          display: flex;
          align-items: center;
          justify-content: end;
          margin-right: 5px;
          width: 25px;
        }

        .blog-carousel .carousel-cell .hero-button .swoosh {
          display: block;
          width: 0;
          height: 3px;
          margin-top: -3px;
          margin-left: -2px;
          transform: rotate(15deg);
          background-color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s;
        }

        .blog-carousel .carousel-cell .hero-button:hover .swoosh {
          width: 7px;
        }

        .blog-carousel .carousel-cell .hero-button .star-end {
          position: relative;
          bottom: -5px;
          transition: all 0.3s;
        }

        .blog-carousel .carousel-cell .hero-button:hover .star-end {
          scale: 1.1;
          transform: rotate(30deg);
        }
        `}
      </style>

<div id="gaming-blog-area">
  <div class="gaming-blog-content">
    <h2>{title}</h2>
  </div>
  <div class="blog-carousel">
    <div
      class="carousel js-flickity"
      data-flickity='{ "autoPlay": true, "wrapAround": false, "contain": true, "cellAlign": "left" }'
    >
      {validBlogPanels.map((panel, index) => (
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
                      >Read<span class="basket-icon"
                        ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                <path d="M16.4879 10.1012C16.4933 10.2515 16.4809 10.3979 16.4507 10.5406L16.054 12.4131C15.8764 13.2512 15.4202 13.9092 14.6854 14.3871C13.9722 14.8509 13.1876 14.9921 12.3316 14.8108L11.3419 14.601C10.5215 14.4272 9.87568 14.0016 9.40432 13.324C8.92918 12.6644 8.74798 11.9365 8.86074 11.1405L9.00153 10.0803L8.03854 9.87622L7.73724 10.9025C7.51749 11.6758 7.05668 12.2676 6.35483 12.6779C5.6492 13.1061 4.88622 13.2332 4.06589 13.0594L3.07614 12.8497C2.22014 12.6683 1.55133 12.2192 1.06969 11.5022C0.609659 10.7712 0.468441 9.98658 0.646031 9.14841L1.04278 7.27592C1.073 7.13326 1.12107 6.99437 1.18696 6.85926L3.41658 2.27258C3.73849 1.6327 4.22771 1.21461 4.88422 1.0183C5.56234 0.807938 6.19784 0.886686 6.79072 1.25455L7.19038 1.47898C7.28982 1.53732 7.35495 1.62565 7.38578 1.74399C7.41661 1.86232 7.40286 1.97121 7.34452 2.07066L7.12575 2.44357C7.06742 2.54301 6.97908 2.60814 6.86074 2.63897C6.74241 2.6698 6.63352 2.65605 6.53408 2.59771L6.18225 2.41136C5.88392 2.23635 5.58778 2.18292 5.29384 2.25107C4.9745 2.35112 4.74704 2.54516 4.61148 2.83321L2.69539 6.73165C3.4719 6.67257 4.22573 6.72049 4.95689 6.87541C6.00906 7.09835 6.97643 7.54556 7.85902 8.21704L9.83851 8.63646C10.9176 8.38061 11.9832 8.36415 13.0354 8.58709C13.7665 8.74201 14.475 9.00393 15.1608 9.37284L14.9904 5.03232C14.9833 4.71404 14.8541 4.44442 14.6028 4.22346C14.3617 4.04195 14.0694 3.97069 13.7257 4.00968L13.3286 4.03733C13.214 4.05032 13.1089 4.01873 13.0132 3.94256C12.9176 3.86639 12.8632 3.77103 12.8502 3.65647L12.8015 3.22689C12.7885 3.11233 12.8201 3.00722 12.8963 2.91155C12.9724 2.81589 13.0678 2.76156 13.1824 2.74857L13.6387 2.7055C14.3298 2.60969 14.9337 2.79355 15.4504 3.25708C15.9887 3.70655 16.2753 4.289 16.31 5.00445L16.4879 10.1012ZM6.05359 10.406L6.39297 9.3319C5.81792 8.96782 5.21832 8.71966 4.59416 8.58741C3.93433 8.4476 3.25885 8.4256 2.56773 8.52141L2.35802 9.51115C2.27868 9.88565 2.34441 10.235 2.55523 10.5592C2.76983 10.8655 3.06438 11.0584 3.43888 11.1377L4.42863 11.3474C4.78529 11.423 5.12193 11.3732 5.43855 11.198C5.75895 11.005 5.96396 10.741 6.05359 10.406ZM14.342 12.0503L14.5517 11.0606C13.9588 10.6927 13.3325 10.4389 12.6726 10.2991C12.0485 10.1668 11.3997 10.1505 10.7265 10.2501L10.6011 11.3695C10.5471 11.7121 10.6274 12.0366 10.842 12.3429C11.0604 12.6314 11.3479 12.8135 11.7046 12.8891L12.6943 13.0988C13.0688 13.1781 13.4163 13.1213 13.7367 12.9283C14.0609 12.7175 14.2626 12.4248 14.342 12.0503Z" fill="white"/>
                </svg></span
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
  setTimeout(function () {

  function equalizeCarouselHeights() {
    const carousels = document.querySelectorAll(".blog-carousel .js-flickity");

    carousels.forEach((carousel) => {

      const cards = carousel.querySelectorAll(".blog-carousel .carousel-cell .carousel-cell-content");

      if (!cards.length) return;

      // reset heights first
      cards.forEach(card => {
        card.style.height = "auto";
      });

      // find tallest
      let tallest = 0;

      cards.forEach(card => {
        const height = card.offsetHeight;

        if (height > tallest) {
          tallest = height;
        }
      });

      // apply tallest height
      cards.forEach(card => {
        card.style.height = tallest + "px";
      });

      // tell Flickity to recalc sizes
      const flkty = Flickity.data(carousel);

      if (flkty) {
        flkty.resize();
      }
    });
  }

  const carousels = document.querySelectorAll(".js-flickity");

  carousels.forEach((carousel) => {

    const cells = carousel.querySelectorAll(".blog-carousel .carousel-cell .carousel-cell").length;

    const firstCell = carousel.querySelector(".blog-carousel .carousel-cell .carousel-cell");

    if (!firstCell) return;

    const cellWidth = firstCell.offsetWidth;

    const containerWidth = carousel.offsetWidth;

    const slidesFit = Math.floor(containerWidth / cellWidth);

    // init Flickity only if needed
    if (cells > slidesFit) {

      const flkty = new Flickity(carousel, {
        autoPlay: true,
        wrapAround: true,
        contain: true,
        cellAlign: "left"
      });

      // wait for Flickity layout
      flkty.on("ready", function () {
        equalizeCarouselHeights();
      });

      flkty.on("settle", function () {
        equalizeCarouselHeights();
      });

    } else {
      equalizeCarouselHeights();
    }
  });

  // rerun on resize
  window.addEventListener("resize", function () {
    equalizeCarouselHeights();
  });

  equalizeCarouselHeights();

   }, 2000);

});
`}
</script>
    </>
  );
};

GaminghubGamingGuides.propTypes = {
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
  panel3title: PropTypes.string,
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
  panel9title: PropTypes.string,
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
