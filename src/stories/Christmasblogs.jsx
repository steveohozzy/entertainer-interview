import PropTypes from "prop-types";
import { CTAButton } from "./CTAButton";
import "./consistency.css";

export const ChristmasGuides= ({
  modulebackgroundcolor,
  id,
  title,
  titlelink,
  lozengebackgroundcolor,
  lozengetextcolor,

  panelbordercolor,

  panel1image,
  panel1imagealt,
  panel1title,
  panel1link,
  panel1buttonStyle,
  panel1dataElementType,
  panel1dataPromotionIndex,
  panel1dataPromotionName,

  panel2image,
  panel2imagealt,
  panel2title,
  panel2link,
  panel2buttonStyle,
  panel2dataElementType,
  panel2dataPromotionIndex, 
  panel2dataPromotionName,

  panel3image,
  panel3imagealt,
  panel3title,
  panel3link,
  panel3buttonStyle,
  panel3dataElementType,
  panel3dataPromotionIndex,
  panel3dataPromotionName,

  panel4image,
  panel4imagealt,
  panel4title,
  panel4link,
  panel4buttonStyle,
  panel4dataElementType,
  panel4dataPromotionIndex,
  panel4dataPromotionName,

  panel5image,
  panel5imagealt,
  panel5title,
  panel5link,
  panel5buttonStyle,
  panel5dataElementType,
  panel5dataPromotionIndex,
  panel5dataPromotionName,

  panel6image,
  panel6imagealt,
  panel6title,
  panel6link,
  panel6buttonStyle,
  panel6dataElementType,
  panel6dataPromotionIndex,
  panel6dataPromotionName,
}) => {

  const catpanels = [
  {
    image: panel1image,
    alt: panel1imagealt,
    title: panel1title,
    link: panel1link,
    buttonStyle: panel1buttonStyle,
    dataElementType: panel1dataElementType,
    dataPromotionIndex: panel1dataPromotionIndex,
    dataPromotionName: panel1dataPromotionName,
  },
  {
    image: panel2image,
    alt: panel2imagealt,
    title: panel2title,
    link: panel2link,
    buttonStyle: panel2buttonStyle,
    dataElementType: panel2dataElementType,
    dataPromotionIndex: panel2dataPromotionIndex,
    dataPromotionName: panel2dataPromotionName,
  },
  {
    image: panel3image,
    alt: panel3imagealt,
    title: panel3title,
    link: panel3link,
    buttonStyle: panel3buttonStyle,
    dataElementType: panel3dataElementType,
    dataPromotionIndex: panel3dataPromotionIndex,
    dataPromotionName: panel3dataPromotionName,
  },
  {
    image: panel4image,
    alt: panel4imagealt,
    title: panel4title,
    link: panel4link,
    buttonStyle: panel4buttonStyle,
    dataElementType: panel4dataElementType,
    dataPromotionIndex: panel4dataPromotionIndex,
    dataPromotionName: panel4dataPromotionName,
  },
  {
    image: panel5image,
    alt: panel5imagealt,
    title: panel5title,
    link: panel5link,
    buttonStyle: panel5buttonStyle,
    dataElementType: panel5dataElementType,
    dataPromotionIndex: panel5dataPromotionIndex,
    dataPromotionName: panel5dataPromotionName,
  },
  {
    image: panel6image,
    alt: panel6imagealt,
    title: panel6title,
    link: panel6link,
    buttonStyle: panel6buttonStyle,
    dataElementType: panel6dataElementType,
    dataPromotionIndex: panel6dataPromotionIndex,
    dataPromotionName: panel6dataPromotionName,
  },
];

const CTA_STYLES = {
  "shop-now": { text: "Shop Now", icon: "basket" },
  "pre-order-now": { text: "Pre-Order Now", icon: "basket" },
  "store-events": { text: "Store Events", icon: "house" },
  "store-locator": { text: "Store Locator", icon: "house" },
  enter: { text: "Enter", icon: "pencil" },
  download: { text: "Download", icon: "pencil" },
  read: { text: "Read", icon: "glasses" },
  "sign-up": { text: "Sign Up", icon: "plane" },
  play: { text: "Play", icon: "play" },
};
const validBlogPanels = catpanels.filter(
  (p) => p.image && p.link && p.title
);
 
  return (
    <>
      <style>
        {`
          .consistent-hubs-guides-area.christmas .consistent-hubs-guides-content,
          .consistent-hubs-guides-area.christmas .blog-carousel .carousel {
            padding: 0 20px;
            max-width: 1440px;
          }
        `}
        </style>
<div class="consistent-hubs-guides-area christmas"
id={id}

style={{
"--consistent-guides-module-bg": '#fff',
"--consistent-guides-panel-text-color": '#000',
"--consistent-guides-panel-bg-color": '#fff',
"--consistent-guides-panel-hover-bg": '#fff',
"--consistent-guides-panel-border-color": panelbordercolor,
"--consistent-guides-panel-border-hover-color": panelbordercolor,
"--consistent-guides-panel-hover-color": '#000',
backgroundColor: modulebackgroundcolor,
}}

>
  <div class="consistent-hubs-guides-content">
    {titlelink ? 
      <a href={titlelink}><div className="title" style={{color: lozengetextcolor, background: lozengebackgroundcolor}}>{title}</div></a>
    :
    <div className="title" style={{color: lozengetextcolor, background: lozengebackgroundcolor}}>{title}</div>
    }
    
  </div>
  <div class="blog-carousel">
    <div
      class="carousel js-flickity"
      data-flickity='{ "autoPlay": true, "wrapAround": false, "contain": true, "cellAlign": "left" }'
    >
    {validBlogPanels.map((panel, index) => {
      const cta = CTA_STYLES[panel.buttonStyle || 'read'];

      return (
        <div className="carousel-cell" key={index}>
          <a href={panel.link} title={panel.title}
            {...(
              panel.dataElementType &&
              panel.dataPromotionIndex &&
              panel.dataPromotionName
                ? {
                    "data-element-type": panel.dataElementType,
                    "data-promotion-index": panel.dataPromotionIndex,
                    "data-promotion-name": panel.dataPromotionName,
                  }
                : {}
            )}
          >
            <span className="carousel-cell-content">
              <img src={panel.image} alt={panel.alt} />
              <p>{panel.title}</p>

              <div className="cta-button">
                <CTAButton
                    buttonStyle={panel.buttonStyle || "read"}
                    as="button"
                  />
              </div>
            </span>
          </a>
        </div>
      );
    })}
    
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

ChristmasGuides.propTypes = {
  modulebackgroundcolor: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  titlelink: PropTypes.string,
  lozengebackgroundcolor: PropTypes.string,
  lozengetextcolor: PropTypes.string,

  panelbordercolor: PropTypes.string,

  panel1image: PropTypes.string,
  panel1imagealt: PropTypes.string,
  panel1title: PropTypes.string,
  panel1link: PropTypes.string,
  panel1dataElementType: PropTypes.string,
  panel1dataPromotionIndex: PropTypes.string,
  panel1dataPromotionName: PropTypes.string,

  panel2image: PropTypes.string,
  panel2imagealt: PropTypes.string,
  panel2title: PropTypes.string,
  panel2link: PropTypes.string,
  panel2dataElementType: PropTypes.string,
  panel2dataPromotionIndex: PropTypes.string,
  panel2dataPromotionName: PropTypes.string,

  panel3image: PropTypes.string,
  panel3imagealt: PropTypes.string,
  panel3title: PropTypes.string,
  panel3link: PropTypes.string,
  panel3dataElementType: PropTypes.string,
  panel3dataPromotionIndex: PropTypes.string,
  panel3dataPromotionName: PropTypes.string,

  panel4image: PropTypes.string,
  panel4imagealt: PropTypes.string,
  panel4title: PropTypes.string,
  panel4link: PropTypes.string,
  panel4dataElementType: PropTypes.string,
  panel4dataPromotionIndex: PropTypes.string,
  panel4dataPromotionName: PropTypes.string,

  panel5image: PropTypes.string,
  panel5imagealt: PropTypes.string,
  panel5title: PropTypes.string,
  panel5link: PropTypes.string,
  panel5dataElementType: PropTypes.string,
  panel5dataPromotionIndex: PropTypes.string,
  panel5dataPromotionName: PropTypes.string,

  panel6image: PropTypes.string,
  panel6imagealt: PropTypes.string,
  panel6title: PropTypes.string,
  panel6link: PropTypes.string,
  panel6dataElementType: PropTypes.string,
  panel6dataPromotionIndex: PropTypes.string,
  panel6dataPromotionName: PropTypes.string,

};
