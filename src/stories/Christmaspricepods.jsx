import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const ChristmasPricePods = ({
  modulebackgroundcolor,
  id,
  pod1image,
  pod1alt,
  pod1link,
  pod1dataElementType,
  pod1dataPromotionIndex,
  pod1dataPromotionName,
  pod2image,
  pod2alt,
  pod2link,
  pod2dataElementType,
  pod2dataPromotionIndex,
  pod2dataPromotionName,
  pod3image,
  pod3alt,
  pod3link,
  pod3dataElementType,
  pod3dataPromotionIndex,
  pod3dataPromotionName,
  pod4image,
  pod4alt,
  pod4link,
  pod4dataElementType,
  pod4dataPromotionIndex,
  pod4dataPromotionName,
  pod5image,
  pod5alt,
  pod5link,
  pod5dataElementType,
  pod5dataPromotionIndex,
  pod5dataPromotionName,
}) => {
  return (
     <>
     
  <style>
  {`
  .christmas-hub .price-carousel {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 10px;
  }

  .christmas-hub .price-carousel .carousel-cell {
    width: 33.333%;
    padding: 20px 10px;
    height: auto;
    min-height: 1px;
    display: flex;
    align-items: stretch;
  }

  .christmas-hub .price-carousel .carousel-cell .price-pod {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .christmas-hub .price-carousel .carousel-cell a {
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 0 3px rgba(3, 33, 33, 0.4);
    overflow: hidden;
    transition: all 0.3s;
  }

  .christmas-hub .price-carousel .carousel-cell a:hover {
    transform: scale(1.05);
  }

  .christmas-hub .price-carousel .carousel-cell img {
    display: block;
    width: 100%;
    height: auto;
    min-height: 1px;
  }

  .christmas-hub .price-carousel .flickity-page-dots {
    display: none;
  }

  .christmas-hub .price-carousel .flickity-prev-next-button {
    width: 25px;
    height: 25px;
    transform: translateY(-50%);
  }

  .christmas-hub .price-carousel .flickity-prev-next-button.previous {
    left: 0;
  }

  .christmas-hub .price-carousel .flickity-prev-next-button.next {
    right: 0;
  }

  @media (min-width: 768px) {
    .christmas-hub .price-carousel .carousel-cell {
      width: 25%;
    }

    .christmas-hub .price-carousel:has(.carousel-cell:nth-child(5)) .carousel-cell {
      width: 20%;
    }

    .christmas-hub .price-carousel .flickity-slider {
      transform: none!important;
      display: flex!important;
      position: unset!important;
      align-items: stretch;
    }

    .christmas-hub .price-carousel .flickity-slider .carousel-cell {
      transform: none!important;
      position: unset!important;
      height: auto!important;
    }
  }

  @media screen and (max-width: 767px) {
    .christmas-hub .price-carousel .carousel-cell {
      height: auto!important;
    }
  }

  @media screen and (min-width: 768px) {
    .christmas-hub .price-carousel .flickity-button {
      display: none;
    }
  }
  `}
</style>

<div class="christmas-hub" id={id} style={{ backgroundColor: modulebackgroundcolor }}>
  <div
    class="carousel price-carousel js-flickity flickity-enabled is-draggable"
    data-flickity='{ "autoPlay": true, "wrapAround": true, "cellAlign": "left"}'
  >
    <div class="carousel-cell">
      <div class="price-pod">
        <a
          href={pod1link}
          title={pod1alt}
          {...(
            pod1dataElementType &&
            pod1dataPromotionIndex &&
            pod1dataPromotionName
              ? {
                  "data-element-type": pod1dataElementType,
                  "data-promotion-index": pod1dataPromotionIndex,
                  "data-promotion-name": pod1dataPromotionName,
                }
              : {}
          )}
        >
          <img alt={pod1alt} src={pod1image} title={pod1alt} />
        </a>
      </div>
    </div>

    <div class="carousel-cell">
      <div class="price-pod">
        <a href={pod2link} title={pod2alt}
          {...(
            pod2dataElementType &&
            pod2dataPromotionIndex &&
            pod2dataPromotionName
              ? {
                  "data-element-type": pod2dataElementType,
                  "data-promotion-index": pod2dataPromotionIndex,
                  "data-promotion-name": pod2dataPromotionName,
                }
              : {}
          )}
        >
          <img alt={pod2alt} src={pod2image} title={pod2alt} />
        </a>
      </div>
    </div>

    <div class="carousel-cell">
      <div class="price-pod">
        <a href={pod3link} title={pod3alt}
          {...(
            pod3dataElementType &&
            pod3dataPromotionIndex &&
            pod3dataPromotionName
              ? {
                  "data-element-type": pod3dataElementType,
                  "data-promotion-index": pod3dataPromotionIndex,
                  "data-promotion-name": pod3dataPromotionName,
                }
              : {}
          )}
        >
          <img alt={pod3alt} src={pod3image} title={pod3alt} />
        </a>
      </div>
    </div>

    <div class="carousel-cell">
      <div class="price-pod">
        <a href={pod4link} title={pod4alt}
          {...(
            pod4dataElementType &&
            pod4dataPromotionIndex &&
            pod4dataPromotionName
              ? {
                  "data-element-type": pod4dataElementType,
                  "data-promotion-index": pod4dataPromotionIndex,
                  "data-promotion-name": pod4dataPromotionName,
                }
              : {}
          )}
        >
            <img alt={pod4alt} src={pod4image} title={pod4alt} />
          </a>
      </div>
    </div>

    {pod5image &&
      <div class="carousel-cell">
        <div class="price-pod">
          <a href={pod5link} title={pod5alt}
            {...(
              pod5dataElementType &&
              pod5dataPromotionIndex &&
              pod5dataPromotionName
                ? {
                    "data-element-type": pod5dataElementType,
                    "data-promotion-index": pod5dataPromotionIndex,
                    "data-promotion-name": pod5dataPromotionName,
                  }
                : {}
            )}
          >
              <img alt={pod5alt} src={pod5image} title={pod5alt} />
            </a>
        </div>
      </div>
    }

  </div>
</div>
     <script>
      {`
      document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {

          const sliders = document.querySelectorAll('.price-carousel');

          sliders.forEach(function(slider) {

            var flkty = Flickity.data(slider);

            if (!flkty) {
              flkty = new Flickity(slider);
            }

            flkty.resize();

            var images = slider.querySelectorAll('img');
            var imagesLoaded = 0;

            if (!images.length) {
              flkty.resize();
              return;
            }

            images.forEach(function(img) {

              if (img.complete) {
                imagesLoaded++;

                if (imagesLoaded === images.length) {
                  flkty.resize();
                }

                return;
              }

              img.addEventListener('load', function() {
                imagesLoaded++;

                if (imagesLoaded === images.length) {
                  flkty.resize();
                }
              });

              img.addEventListener('error', function() {
                imagesLoaded++;

                if (imagesLoaded === images.length) {
                  flkty.resize();
                }
              });

            });

          });

        }, 500);
      }, false);
      `}
    </script>
     </>
  );
};

ChristmasPricePods.propTypes = {
  modulebackgroundcolor: PropTypes.string,
  id: PropTypes.string,
  pod1image: PropTypes.string,
  pod1alt: PropTypes.string,
  pod1link: PropTypes.string,
  pod2image: PropTypes.string,
  pod2alt: PropTypes.string,
  pod2link: PropTypes.string,
  pod3image: PropTypes.string,
  pod3alt: PropTypes.string,
  pod3link: PropTypes.string,
  pod4image: PropTypes.string,
  pod4alt: PropTypes.string,
  pod4link: PropTypes.string,
  pod5image: PropTypes.string,
  pod5alt: PropTypes.string,
  pod5link: PropTypes.string,
};
