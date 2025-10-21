import PropTypes from "prop-types";
import "./kidultcarousel.css";

/** Primary UI component for user interaction */
export const KidultCarousel = ({
  carouseltitle,
  roundal1image,
  roundal1alt,
  roundal1link,
  roundal1buttontext,
  roundal2image,
  roundal2alt,
  roundal2link,
  roundal2buttontext,
  roundal3image,
  roundal3alt,
  roundal3link,
  roundal3buttontext,
  roundal4image,
  roundal4alt,
  roundal4link,
  roundal4buttontext,
  roundal5image,
  roundal5alt,
  roundal5link,
  roundal5buttontext,
  roundal6image,
  roundal6alt,
  roundal6link,
  roundal6buttontext,
  roundal7image,
  roundal7alt,
  roundal7link,
  roundal7buttontext,
  roundal8image,
  roundal8alt,
  roundal8link,
  roundal8buttontext,
  roundal9image,
  roundal9alt,
  roundal9link,
  roundal9buttontext,
  roundal10image,
  roundal10alt,
  roundal10link,
  roundal10buttontext,
  roundal11image,
  roundal11alt,
  roundal11link,
  roundal11buttontext,
  roundal12image,
  roundal12alt,
  roundal12link,
  roundal12buttontext,
  roundal13image,
  roundal13alt,
  roundal13link,
  roundal13buttontext,
  roundal14image,
  roundal14alt,
  roundal14link,
  roundal14buttontext,
  roundal15image,
  roundal15alt,
  roundal15link,
  roundal15buttontext,
  roundal16image,
  roundal16alt,
  roundal16link,
  roundal16buttontext,
  roundal17image,
  roundal17alt,
  roundal17link,
  roundal17buttontext,
  roundal18image,
  roundal18alt,
  roundal18link,
  roundal18buttontext,
  roundal19image,
  roundal19alt,
  roundal19link,
  roundal19buttontext,
  roundal20image,
  roundal20alt,
  roundal20link,
  roundal20buttontext,
}) => {
  return (
    <>
      <div class="kidult">
        <div class="kidult-content">
          <h2>{carouseltitle}</h2>

          <div
            class="carousel js-flickity flickity-enabled is-draggable"
            data-flickity='{ "autoPlay": true, "wrapAround": true, "cellAlign": "left" }'
          >
            <div class="carousel-cell">
              <div class="roundal">
                <a href={roundal1link} class="outer-link">
                  <div class="roundal-image">
                    <img src={roundal1image} alt={roundal1alt} />
                  </div>
                  <button href={roundal1link} class="roundal-button">
                    {roundal1buttontext}
                  </button>
                </a>
              </div>
            </div>

            {roundal2image && (
              <div class="carousel-cell">
                <div class="roundal">
                  <a href={roundal2link} class="outer-link">
                    <div class="roundal-image">
                      <img src={roundal2image} alt={roundal2alt} />
                    </div>
                    <button href={roundal2link} class="roundal-button">
                      {roundal2buttontext}
                    </button>
                  </a>
                </div>
              </div>
            )}

            {roundal3image && (
              <div class="carousel-cell">
                <div class="roundal">
                  <a href={roundal3link} class="outer-link">
                    <div class="roundal-image">
                      <img src={roundal3image} alt={roundal3alt} />
                    </div>
                    <button href={roundal3link} class="roundal-button">
                      {roundal3buttontext}
                    </button>
                  </a>
                </div>
              </div>
            )}

            {roundal4image && (
              <div class="carousel-cell">
                <div class="roundal">
                  <a href={roundal4link} class="outer-link">
                    <div class="roundal-image">
                      <img src={roundal4image} alt={roundal4alt} />
                    </div>
                    <button href={roundal4link} class="roundal-button">
                      {roundal4buttontext}
                    </button>
                  </a>
                </div>
              </div>
            )}

            {roundal5image && (
              <div class="carousel-cell">
                <div class="roundal">
                  <a href={roundal5link} class="outer-link">
                    <div class="roundal-image">
                      <img src={roundal5image} alt={roundal5alt} />
                    </div>
                    <button href={roundal5link} class="roundal-button">
                      {roundal5buttontext}
                    </button>
                  </a>
                </div>
              </div>
            )}

            {roundal6image && (
              <div class="carousel-cell">
                <div class="roundal">
                  <a href={roundal6link} class="outer-link">
                    <div class="roundal-image">
                      <img src={roundal6image} alt={roundal6alt} />
                    </div>
                    <button href={roundal6link} class="roundal-button">
                      {roundal6buttontext}
                    </button>
                  </a>
                </div>
              </div>
            )}

            {roundal7image && (
              <div class="carousel-cell">
                <div class="roundal">
                  <a href={roundal7link} class="outer-link">
                    <div class="roundal-image">
                      <img src={roundal7image} alt={roundal7alt} />
                    </div>
                    <button href={roundal7link} class="roundal-button">
                      {roundal7buttontext}
                    </button>
                  </a>
                </div>
              </div>
            )}

            {roundal8image && (
              <div class="carousel-cell">
                <div class="roundal">
                  <a href={roundal8link} class="outer-link">
                    <div class="roundal-image">
                      <img src={roundal8image} alt={roundal8alt} />
                    </div>
                    <button href={roundal8link} class="roundal-button">
                      {roundal8buttontext}
                    </button>
                  </a>
                </div>
              </div>
            )}

            {roundal9image && (
              <div class="carousel-cell">
                <div class="roundal">
                  <a href={roundal9link} class="outer-link">
                    <div class="roundal-image">
                      <img src={roundal9image} alt={roundal9alt} />
                    </div>
                    <button href={roundal9link} class="roundal-button">
                      {roundal9buttontext}
                    </button>
                  </a>
                </div>
              </div>
            )}

            {roundal10image && (
              <div class="carousel-cell">
                <div class="roundal">
                  <a href={roundal10link} class="outer-link">
                    <div class="roundal-image">
                      <img src={roundal10image} alt={roundal10alt} />
                    </div>
                    <button href={roundal10link} class="roundal-button">
                      {roundal10buttontext}
                    </button>
                  </a>
                </div>
              </div>
            )}

            {roundal11image && (
              <div class="carousel-cell">
                <div class="roundal">
                  <a href={roundal11link} class="outer-link">
                    <div class="roundal-image">
                      <img src={roundal11image} alt={roundal11alt} />
                    </div>
                    <button href={roundal11link} class="roundal-button">
                      {roundal11buttontext}
                    </button>
                  </a>
                </div>
              </div>
            )}

            {roundal12image && (
              <div class="carousel-cell">
                <div class="roundal">
                  <a href={roundal12link} class="outer-link">
                    <div class="roundal-image">
                      <img src={roundal12image} alt={roundal12alt} />
                    </div>
                    <button href={roundal12link} class="roundal-button">
                      {roundal12buttontext}
                    </button>
                  </a>
                </div>
              </div>
            )}

            {roundal13image && (
              <div class="carousel-cell">
                <div class="roundal">
                  <a href={roundal13link} class="outer-link">
                    <div class="roundal-image">
                      <img src={roundal13image} alt={roundal13alt} />
                    </div>
                    <button href={roundal13link} class="roundal-button">
                      {roundal13buttontext}
                    </button>
                  </a>
                </div>
              </div>
            )}

            {roundal14image && (
              <div class="carousel-cell">
                <div class="roundal">
                  <a href={roundal14link} class="outer-link">
                    <div class="roundal-image">
                      <img src={roundal14image} alt={roundal14alt} />
                    </div>
                    <button href={roundal14link} class="roundal-button">
                      {roundal14buttontext}
                    </button>
                  </a>
                </div>
              </div>
            )}

            {roundal15image && (
              <div class="carousel-cell">
                <div class="roundal">
                  <a href={roundal15link} class="outer-link">
                    <div class="roundal-image">
                      <img src={roundal15image} alt={roundal15alt} />
                    </div>
                    <button href={roundal15link} class="roundal-button">
                      {roundal15buttontext}
                    </button>
                  </a>
                </div>
              </div>
            )}

            {roundal16image && (
              <div class="carousel-cell">
                <div class="roundal">
                  <a href={roundal16link} class="outer-link">
                    <div class="roundal-image">
                      <img src={roundal16image} alt={roundal16alt} />
                    </div>
                    <button href={roundal16link} class="roundal-button">
                      {roundal16buttontext}
                    </button>
                  </a>
                </div>
              </div>
            )}

            {roundal17image && (
              <div class="carousel-cell">
                <div class="roundal">
                  <a href={roundal17link} class="outer-link">
                    <div class="roundal-image">
                      <img src={roundal17image} alt={roundal17alt} />
                    </div>
                    <button href={roundal17link} class="roundal-button">
                      {roundal17buttontext}
                    </button>
                  </a>
                </div>
              </div>
            )}

            {roundal18image && (
              <div class="carousel-cell">
                <div class="roundal">
                  <a href={roundal18link} class="outer-link">
                    <div class="roundal-image">
                      <img src={roundal18image} alt={roundal18alt} />
                    </div>
                    <button href={roundal18link} class="roundal-button">
                      {roundal18buttontext}
                    </button>
                  </a>
                </div>
              </div>
            )}

            {roundal19image && (
              <div class="carousel-cell">
                <div class="roundal">
                  <a href={roundal19link} class="outer-link">
                    <div class="roundal-image">
                      <img src={roundal19image} alt={roundal19alt} />
                    </div>
                    <button href={roundal19link} class="roundal-button">
                      {roundal19buttontext}
                    </button>
                  </a>
                </div>
              </div>
            )}

            {roundal20image && (
              <div class="carousel-cell">
                <div class="roundal">
                  <a href={roundal20link} class="outer-link">
                    <div class="roundal-image">
                      <img src={roundal20image} alt={roundal20alt} />
                    </div>
                    <button href={roundal20link} class="roundal-button">
                      {roundal20buttontext}
                    </button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

KidultCarousel.propTypes = {
  /** Kidult Tab contents */
  carouseltitle: PropTypes.string,
  roundal1image: PropTypes.string.isRequired,
  roundal1alt: PropTypes.string.isRequired,
  roundal1link: PropTypes.string.isRequired,
  roundal1buttontext: PropTypes.string,
  roundal2image: PropTypes.string,
  roundal2alt: PropTypes.string,
  roundal2link: PropTypes.string,
  roundal2buttontext: PropTypes.string,
  roundal3image: PropTypes.string,
  roundal3alt: PropTypes.string,
  roundal3link: PropTypes.string,
  roundal3buttontext: PropTypes.string,
  roundal4image: PropTypes.string,
  roundal4alt: PropTypes.string,
  roundal4link: PropTypes.string,
  roundal4buttontext: PropTypes.string,
  roundal5image: PropTypes.string,
  roundal5alt: PropTypes.string,
  roundal5link: PropTypes.string,
  roundal5buttontext: PropTypes.string,
  roundal6image: PropTypes.string,
  roundal6alt: PropTypes.string,
  roundal6link: PropTypes.string,
  roundal6buttontext: PropTypes.string,
  roundal7image: PropTypes.string,
  roundal7alt: PropTypes.string,
  roundal7link: PropTypes.string,
  roundal7buttontext: PropTypes.string,
  roundal8image: PropTypes.string,
  roundal8alt: PropTypes.string,
  roundal8link: PropTypes.string,
  roundal8buttontext: PropTypes.string,
  roundal9image: PropTypes.string,
  roundal9alt: PropTypes.string,
  roundal9link: PropTypes.string,
  roundal9buttontext: PropTypes.string,
  roundal10image: PropTypes.string,
  roundal10alt: PropTypes.string,
  roundal10link: PropTypes.string,
  roundal10buttontext: PropTypes.string,
  roundal11image: PropTypes.string,
  roundal11alt: PropTypes.string,
  roundal11link: PropTypes.string,
  roundal11buttontext: PropTypes.string,
  roundal12image: PropTypes.string,
  roundal12alt: PropTypes.string,
  roundal12link: PropTypes.string,
  roundal12buttontext: PropTypes.string,
  roundal13image: PropTypes.string,
  roundal13alt: PropTypes.string,
  roundal13link: PropTypes.string,
  roundal13buttontext: PropTypes.string,
  roundal14image: PropTypes.string,
  roundal14alt: PropTypes.string,
  roundal14link: PropTypes.string,
  roundal14buttontext: PropTypes.string,
  roundal15image: PropTypes.string,
  roundal15alt: PropTypes.string,
  roundal15link: PropTypes.string,
  roundal15buttontext: PropTypes.string,
  roundal16image: PropTypes.string,
  roundal16alt: PropTypes.string,
  roundal16link: PropTypes.string,
  roundal16buttontext: PropTypes.string,
  roundal17image: PropTypes.string,
  roundal17alt: PropTypes.string,
  roundal17link: PropTypes.string,
  roundal17buttontext: PropTypes.string,
  roundal18image: PropTypes.string,
  roundal18alt: PropTypes.string,
  roundal18link: PropTypes.string,
  roundal18buttontext: PropTypes.string,
  roundal19image: PropTypes.string,
  roundal19alt: PropTypes.string,
  roundal19link: PropTypes.string,
  roundal19buttontext: PropTypes.string,
  roundal20image: PropTypes.string,
  roundal20alt: PropTypes.string,
  roundal20link: PropTypes.string,
  roundal20buttontext: PropTypes.string,
};
