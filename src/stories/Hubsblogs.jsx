import PropTypes from "prop-types";
import { CTAButton } from "./CTAButton";
import "./consistency.css";

export const HubsGuides= ({
  title,
  lozengebackgroundcolor,
  lozengetextcolor,

  panelbordercolor,

  panel1image,
  panel1imagealt,
  panel1title,
  panel1link,
  panel1buttonStyle,

  panel2image,
  panel2imagealt,
  panel2title,
  panel2link,
  panel2buttonStyle,

  panel3image,
  panel3imagealt,
  panel3title,
  panel3link,
  panel3buttonStyle,

  panel4image,
  panel4imagealt,
  panel4title,
  panel4link,
  panel4buttonStyle,

  panel5image,
  panel5imagealt,
  panel5title,
  panel5link,
  panel5buttonStyle,

  panel6image,
  panel6imagealt,
  panel6title,
  panel6link,
  panel6buttonStyle,
}) => {

  const catpanels = [
  {
    image: panel1image,
    alt: panel1imagealt,
    title: panel1title,
    link: panel1link,
    buttonStyle: panel1buttonStyle,
  },
  {
    image: panel2image,
    alt: panel2imagealt,
    title: panel2title,
    link: panel2link,
    buttonStyle: panel2buttonStyle,
  },
  {
    image: panel3image,
    alt: panel3imagealt,
    title: panel3title,
    link: panel3link,
    buttonStyle: panel3buttonStyle,
  },
  {
    image: panel4image,
    alt: panel4imagealt,
    title: panel4title,
    link: panel4link,
    buttonStyle: panel4buttonStyle,
  },
  {
    image: panel5image,
    alt: panel5imagealt,
    title: panel5title,
    link: panel5link,
    buttonStyle: panel5buttonStyle,
  },
  {
    image: panel6image,
    alt: panel6imagealt,
    title: panel6title,
    link: panel6link,
    buttonStyle: panel6buttonStyle,
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
};
const validBlogPanels = catpanels.filter(
  (p) => p.image && p.link && p.title
);
 
  return (
    <>
<div class="consistent-hubs-guides-area"

style={{
"--consistent-guides-module-bg": '#fff',
"--consistent-guides-panel-text-color": '#000',
"--consistent-guides-panel-bg-color": '#fff',
"--consistent-guides-panel-hover-bg": '#fff',
"--consistent-guides-panel-border-color": panelbordercolor,
"--consistent-guides-panel-border-hover-color": panelbordercolor,
"--consistent-guides-panel-hover-color": '#000',
}}

>
  <div class="consistent-hubs-guides-content">
    <h2 style={{color: lozengetextcolor, background: lozengebackgroundcolor}}>{title}</h2>
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
          <a href={panel.link} title={panel.title}>
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

HubsGuides.propTypes = {
  title: PropTypes.string,
  lozengebackgroundcolor: PropTypes.string,
  lozengetextcolor: PropTypes.string,

  panelbordercolor: PropTypes.string,

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
  panel6title: PropTypes.string,
  panel6link: PropTypes.string,

};
