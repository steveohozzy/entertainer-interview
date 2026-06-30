import PropTypes from "prop-types";

export const Footballhubugc= ({
  title,
  panel1image,
  panel1imagealt,
  panel1link,
  panel2image,
  panel2imagealt,
  panel2link,
  panel3image,
  panel3imagealt,
  panel3link,
  panel4image,
  panel4imagealt,
  panel4link,
  panel5image,
  panel5imagealt,
  panel5link,
  panel6image,
  panel6imagealt,
  panel6link,
  panel7image,
  panel7imagealt,
  panel7link,
  panel8image,
  panel8imagealt,
  panel8link,
  panel9image,
  panel9imagealt,
  panel9link,
  panel10image,
  panel10imagealt,
  panel10link,
  panel11image,
  panel11imagealt,
  panel11link,
  panel12image,
  panel12imagealt,
  panel12link,
}) => {

  const ugcpanels = [
  {
    image: panel1image,
    alt: panel1imagealt,
    link: panel1link,
  },
  {
    image: panel2image,
    alt: panel2imagealt,
    link: panel2link,
  },
  {
    image: panel3image,
    alt: panel3imagealt,
    link: panel3link,
  },
  {
    image: panel4image,
    alt: panel4imagealt,
    link: panel4link,
  },
  {
    image: panel5image,
    alt: panel5imagealt,
    link: panel5link,
  },
  {
    image: panel6image,
    alt: panel6imagealt,
    link: panel6link,
  },
  {
    image: panel7image,
    alt: panel7imagealt,
    link: panel7link,
  },
  {
    image: panel8image,
    alt: panel8imagealt,
    link: panel8link,
  },
  {
    image: panel9image,
    alt: panel9imagealt,
    link: panel9link,
  },
  {
    image: panel10image,
    alt: panel10imagealt,
    link: panel10link,
  },
  {
    image: panel11image,
    alt: panel11imagealt,
    link: panel11link,
  },
  {
    image: panel12image,
    alt: panel12imagealt,
    link: panel12link,
  },
];
const validugcpanels = ugcpanels.filter(
  (p) => p.image
);

  
    return (
    <>
      <style>
        {`
    .world-cup-ugc-content {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    text-align: center;
  }

  .world-cup-ugc-content h2 {
    text-transform: uppercase;
    background-color: #1f2b91;
    color: #fff;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    font-size: 24px;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    .world-cup-ugc-content h2 {
      font-size: 18px;
    }
  }


  .ugc-pods {
      padding: 0 10px 20px;
    }

    .ugc-pods .carousel {
      padding: 0;
      max-width: 1200px;
      margin: 0 auto;
    }

    .ugc-pods .carousel .item {
      padding: 0;
    }

    .pod-image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 233 / 310; /* square */
  overflow: hidden;
  border-radius: 8px;
}

.ugc-pods img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  margin: 0 10px !important;
}

    .ugc-pods a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      border-radius: 8px;
      padding: 0 0 20px;
      background-color: #fff;
      text-decoration: none;
      font-size: 12px;
      color: #000;
      margin: 0 20px 0 0;
      transition: all 0.3s;
      overflow: hidden;
      height: 100%;
    }


    .ugc-pods .flickity-page-dots {
      display: none;
    }

    .ugc-pods .carousel-cell {
      width: calc(25% - 20px);
      padding: 0 10px;
    }

    @media (max-width: 768px) {
      .ugc-pods .carousel-cell {
        width: calc(50% - 20px);
      }
    }

    .pod-image-container {
      position: relative;
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
    }

    .flickity-button {
      box-shadow: none;
      background-color: #407ec9;
      width: 40px !important;
      height: 40px !important;
      padding: 5px;
    }

    .flickity-button:hover {
      background-color: #407ec9;
    }

    .flickity-prev-next-button .flickity-button-icon {
    position: absolute;
    left: 30%;
    top: 30%;
    width: 40%;
    height: 40%;
}
        `}
      </style>

<div class="world-cup-ugc-content">
  <h2>{title}</h2>
  <div class="ugc-pods">
    <div
      class="carousel ugc-pods-carousel js-flickity"
      data-flickity='{ "autoPlay": true, "wrapAround": true, "cellAlign": "left" }'
    >

    {validugcpanels.map((panel, index) => (
      <div class="carousel-cell">
        <div
          class="pod"
        >
          <div class="pod-image-container">
            <img
              class="item"
              alt={panel.alt}
              title={panel.alt}
              src={panel.image}
            />
          </div>
        </div>
      </div>
    ))}
    </div>
  </div>
</div>

<script>
  {`
  document.addEventListener("DOMContentLoaded", function () {

  var carousel = document.querySelector(".world-cup-ugc-content .carousel");
  var flkty = new Flickity(carousel);

  function setCarouselHeight() {

    var cells = carousel.querySelectorAll(".carousel-cell");
    var maxHeight = 0;

    cells.forEach(function(cell){
      cell.style.height = "auto";
      var h = cell.offsetHeight;
      if (h > maxHeight) maxHeight = h;
    });

    var viewport = carousel.querySelector(".flickity-viewport");
    if (viewport) viewport.style.height = maxHeight + "px";
  }

  // wait for images
  window.addEventListener("load", setCarouselHeight);

  // update when slide changes
  flkty.on("settle", setCarouselHeight);

  // update on resize
  window.addEventListener("resize", function(){
    setCarouselHeight();
    flkty.resize();
  });

  // existing autoplay loop
  flkty.on("settle", function (index) {
    var lastIndex = flkty.slides.length - 1;

    if (index === lastIndex) {
      setTimeout(function () {
        flkty.select(0);
      }, 3000);
    }
  });

});
  `}
</script>

    </>
  );
};

Footballhubugc.propTypes = {
  title: PropTypes.string,
  panel1image: PropTypes.string,
  panel1imagealt: PropTypes.string,
  panel1title: PropTypes.string,
  panel1link: PropTypes.string,
  panel2image: PropTypes.string,
  panel2imagealt: PropTypes.string,
  panel2title: PropTypes.string,
  panel2link: PropTypes.string,
  panel3image: PropTypes.string,
  panel3imagealt: PropTypes.string,
  panel3title: PropTypes.string,
  panel3link: PropTypes.string,
  panel4image: PropTypes.string,
  panel4imagealt: PropTypes.string,
  panel4title: PropTypes.string,
  panel4link: PropTypes.string,
  panel5image: PropTypes.string,
  panel5imagealt: PropTypes.string,
  panel5title: PropTypes.string,
  panel5link: PropTypes.string,
  panel6image: PropTypes.string,
  panel6imagealt: PropTypes.string,
  pane6title: PropTypes.string,
  panel6link: PropTypes.string,
  panel7image: PropTypes.string,
  panel7imagealt: PropTypes.string,
  panel7title: PropTypes.string,
  panel7link: PropTypes.string,
  panel8image: PropTypes.string,
  panel8imagealt: PropTypes.string,
  panel8title: PropTypes.string,
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
