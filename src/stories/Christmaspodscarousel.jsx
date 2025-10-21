import PropTypes from "prop-types";

/** Primary UI component for user interaction */
export const ChristmasPodsCarousel = ({
  pod1image,
  pod1alt,
  pod1link,
  pod2image,
  pod2alt,
  pod2link,
  pod3image,
  pod3alt,
  pod3link,
  pod4image,
  pod4alt,
  pod4link,
  pod5image,
  pod5alt,
  pod5link,
  pod6image,
  pod6alt,
  pod6link,
  pod1dataelementtype,
  pod1datapromotionname,
  pod1datapromotionindex,
  pod1datagtmvisfirstonscreen8511273_2666,
  pod1datagtmvistotalvisibletime8511273_2666,
  pod1datagtmvishasfired8511273_2666,
  pod2dataelementtype,
  pod2datapromotionname,
  pod2datapromotionindex,
  pod2datagtmvisfirstonscreen8511273_2666,
  pod2datagtmvistotalvisibletime8511273_2666,
  pod2datagtmvishasfired8511273_2666,
  pod3dataelementtype,
  pod3datapromotionname,
  pod3datapromotionindex,
  pod3datagtmvisfirstonscreen8511273_2666,
  pod3datagtmvistotalvisibletime8511273_2666,
  pod3datagtmvishasfired8511273_2666,
  pod4dataelementtype,
  pod4datapromotionname,
  pod4datapromotionindex,
  pod4datagtmvisfirstonscreen8511273_2666,
  pod4datagtmvistotalvisibletime8511273_2666,
  pod4datagtmvishasfired8511273_2666,
  pod5dataelementtype,
  pod5datapromotionname,
  pod5datapromotionindex,
  pod5datagtmvisfirstonscreen8511273_2666,
  pod5datagtmvistotalvisibletime8511273_2666,
  pod5datagtmvishasfired8511273_2666,
  pod6dataelementtype,
  pod6datapromotionname,
  pod6datapromotionindex,
  pod6datagtmvisfirstonscreen8511273_2666,
  pod6datagtmvistotalvisibletime8511273_2666,
  pod6datagtmvishasfired8511273_2666,
}) => {
  return (
    <>
      <style>
        {`
  .christmas-hub {
    max-width: 1200px;
    margin: 0 auto;
  }
  .christmas-hub .category-pods-carousel .carousel-cell {
    width: 33.333%;
    padding: 0 10px;
  }

  .christmas-hub .category-pods-carousel .carousel-cell a {
    display: block;
    border-radius: 10px;
    box-shadow: 0 0 3px rgba(3, 33, 33, 0.4);
    overflow: hidden;
    transition: all 0.3s;
  }

  .christmas-hub .category-pods-carousel .carousel-cell a:hover {
    transform: scale(1.1);
  }

  .christmas-hub .category-pods-carousel .carousel-cell img {
    width: 100%;
    height: auto;
  }

  .christmas-hub .category-pods-carousel .flickity-page-dots {
    display: none;
  }

  .christmas-hub .category-pods-carousel .flickity-prev-next-button {
    width: 25px;
    height: 25px;
    transform: translateY(-50%);
  }

  .christmas-hub .category-pods-carousel .flickity-prev-next-button.previous {
    left: 0;
  }

  .christmas-hub .category-pods-carousel .flickity-prev-next-button.next {
    right: 0;
  }

  @media (min-width: 768px) {
    .christmas-hub .category-pods-carousel .carousel-cell {
      width: calc(100% / 6);
    }
  }

  @media screen and ( min-width: 768px ) {
    /* disable Flickity for large devices */
    .category-pods-carousel .flickity-slider {
      transform: none!important;
      display: flex!important;
      position: unset!important;
    }

    .category-pods-carousel .flickity-slider .carousel-cell {
      transform: none!important;
      position: unset!important;
    }

    .christmas-hub .category-pods-carousel .flickity-button {
      display: none;
    }
  }
  `}
      </style>

      <div class="christmas-hub">
        <div
          class="carousel category-pods-carousel js-flickity flickity-enabled is-draggable"
          data-flickity='{ "autoPlay": true, "wrapAround": true, "cellAlign": "left"}'
        >
          <div class="carousel-cell">
            <div class="pod">
              <a
                href={pod1link}
                title={pod1alt}
                data-element-type={pod1dataelementtype}
                data-promotion-name={pod1datapromotionname}
                data-promotion-index={pod1datapromotionindex}
                data-gtm-vis-first-on-screen8511273_2666={
                  pod1datagtmvisfirstonscreen8511273_2666
                }
                data-gtm-vis-total-visible-time8511273_2666={
                  pod1datagtmvistotalvisibletime8511273_2666
                }
                data-gtm-vis-has-fired8511273_2666={
                  pod1datagtmvishasfired8511273_2666
                }
              >
                <img alt={pod1alt} src={pod1image} title={pod1alt} />
              </a>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="pod">
              <a
                href={pod2link}
                title={pod2alt}
                data-element-type={pod2dataelementtype}
                data-promotion-name={pod2datapromotionname}
                data-promotion-index={pod2datapromotionindex}
                data-gtm-vis-first-on-screen8511273_2666={
                  pod2datagtmvisfirstonscreen8511273_2666
                }
                data-gtm-vis-total-visible-time8511273_2666={
                  pod2datagtmvistotalvisibletime8511273_2666
                }
                data-gtm-vis-has-fired8511273_2666={
                  pod2datagtmvishasfired8511273_2666
                }
              >
                <img alt={pod2alt} src={pod2image} title={pod2alt} />
              </a>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="pod">
              <a
                href={pod3link}
                title={pod3alt}
                data-element-type={pod3dataelementtype}
                data-promotion-name={pod3datapromotionname}
                data-promotion-index={pod3datapromotionindex}
                data-gtm-vis-first-on-screen8511273_2666={
                  pod3datagtmvisfirstonscreen8511273_2666
                }
                data-gtm-vis-total-visible-time8511273_2666={
                  pod3datagtmvistotalvisibletime8511273_2666
                }
                data-gtm-vis-has-fired8511273_2666={
                  pod3datagtmvishasfired8511273_2666
                }
              >
                <img alt={pod3alt} src={pod3image} title={pod3alt} />
              </a>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="pod">
              <a
                href={pod4link}
                title={pod4alt}
                data-element-type={pod4dataelementtype}
                data-promotion-name={pod4datapromotionname}
                data-promotion-index={pod4datapromotionindex}
                data-gtm-vis-first-on-screen8511273_2666={
                  pod4datagtmvisfirstonscreen8511273_2666
                }
                data-gtm-vis-total-visible-time8511273_2666={
                  pod4datagtmvistotalvisibletime8511273_2666
                }
                data-gtm-vis-has-fired8511273_2666={
                  pod4datagtmvishasfired8511273_2666
                }
              >
                <img alt={pod4alt} src={pod4image} title={pod4alt} />
              </a>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="pod">
              <a
                href={pod5link}
                title={pod5alt}
                data-element-type={pod5dataelementtype}
                data-promotion-name={pod5datapromotionname}
                data-promotion-index={pod5datapromotionindex}
                data-gtm-vis-first-on-screen8511273_2666={
                  pod5datagtmvisfirstonscreen8511273_2666
                }
                data-gtm-vis-total-visible-time8511273_2666={
                  pod5datagtmvistotalvisibletime8511273_2666
                }
                data-gtm-vis-has-fired8511273_2666={
                  pod5datagtmvishasfired8511273_2666
                }
              >
                <img alt={pod5alt} src={pod5image} title={pod5alt} />
              </a>
            </div>
          </div>

          <div class="carousel-cell">
            <div class="pod">
              <a
                href={pod6link}
                title={pod6alt}
                data-element-type={pod6dataelementtype}
                data-promotion-name={pod6datapromotionname}
                data-promotion-index={pod6datapromotionindex}
                data-gtm-vis-first-on-screen8511273_2666={
                  pod6datagtmvisfirstonscreen8511273_2666
                }
                data-gtm-vis-total-visible-time8511273_2666={
                  pod6datagtmvistotalvisibletime8511273_2666
                }
                data-gtm-vis-has-fired8511273_2666={
                  pod6datagtmvishasfired8511273_2666
                }
              >
                <img alt={pod6alt} src={pod6image} title={pod6alt} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ChristmasPodsCarousel.propTypes = {
  /** Christmas Pods contents */
  pod1image: PropTypes.string.isRequired,
  pod1alt: PropTypes.string,
  pod1link: PropTypes.string.isRequired,
  pod2image: PropTypes.string.isRequired,
  pod2alt: PropTypes.string,
  pod2link: PropTypes.string.isRequired,
  pod3image: PropTypes.string.isRequired,
  pod3alt: PropTypes.string,
  pod3link: PropTypes.string.isRequired,
  pod4image: PropTypes.string.isRequired,
  pod4alt: PropTypes.string,
  pod4link: PropTypes.string.isRequired,
  pod5image: PropTypes.string.isRequired,
  pod5alt: PropTypes.string,
  pod5link: PropTypes.string.isRequired,
  pod6image: PropTypes.string.isRequired,
  pod6alt: PropTypes.string,
  pod6link: PropTypes.string.isRequired,
  pod1dataelementtype: PropTypes.string,
  pod1datapromotionname: PropTypes.string,
  pod1datapromotionindex: PropTypes.string,
  pod1datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  pod1datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  pod1datagtmvishasfired8511273_2666: PropTypes.string,
  pod2dataelementtype: PropTypes.string,
  pod2datapromotionname: PropTypes.string,
  pod2datapromotionindex: PropTypes.string,
  pod2datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  pod2datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  pod2datagtmvishasfired8511273_2666: PropTypes.string,
  pod3dataelementtype: PropTypes.string,
  pod3datapromotionname: PropTypes.string,
  pod3datapromotionindex: PropTypes.string,
  pod3datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  pod3datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  pod3datagtmvishasfired8511273_2666: PropTypes.string,
  pod4dataelementtype: PropTypes.string,
  pod4datapromotionname: PropTypes.string,
  pod4datapromotionindex: PropTypes.string,
  pod4datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  pod4datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  pod4datagtmvishasfired8511273_2666: PropTypes.string,
  pod5dataelementtype: PropTypes.string,
  pod5datapromotionname: PropTypes.string,
  pod5datapromotionindex: PropTypes.string,
  pod5datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  pod5datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  pod5datagtmvishasfired8511273_2666: PropTypes.string,
  pod6dataelementtype: PropTypes.string,
  pod6datapromotionname: PropTypes.string,
  pod6datapromotionindex: PropTypes.string,
  pod6datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  pod6datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  pod6datagtmvishasfired8511273_2666: PropTypes.string,
};
