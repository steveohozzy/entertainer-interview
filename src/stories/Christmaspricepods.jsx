import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const ChristmasPricePods = ({
  modulebackgroundcolor,
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
}

.christmas-hub .price-carousel .carousel-cell a {
  display: block;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(3, 33, 33, 0.4);
  overflow: hidden;
  transition: all 0.3s;
}

.christmas-hub .price-carousel .carousel-cell a:hover {
  transform: scale(1.05);
}

.christmas-hub .price-carousel .carousel-cell img {
  width: 100%;
  height: auto;
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
}

@media screen and ( min-width: 768px ) {
  /* disable Flickity for large devices */
  .price-carousel .flickity-slider {
    transform: none!important;
    display: flex!important;
    position: unset!important;
  }

  .price-carousel .flickity-slider .carousel-cell {
    transform: none!important;
    position: unset!important;
  }

  .christmas-hub .price-carousel .flickity-button {
    display: none;
  }
}
  `}

</style>

<div class="christmas-hub" style={{ backgroundColor: modulebackgroundcolor }}>
  <div
    class="carousel price-carousel js-flickity flickity-enabled is-draggable"
    data-flickity='{ "autoPlay": true, "wrapAround": true, "cellAlign": "left"}'
  >
    <div class="carousel-cell">
      <div class="price-pod">
        <a href={pod1link} title={pod1alt}>
          <img alt={pod1alt} src={pod1image} title={pod1alt} />
        </a>
      </div>
    </div>

    <div class="carousel-cell">
      <div class="price-pod">
        <a href={pod2link} title={pod2alt} >
          <img alt={pod2alt} src={pod2image} title={pod2alt} />
        </a>
      </div>
    </div>

    <div class="carousel-cell">
      <div class="price-pod">
        <a href={pod3link} title={pod3alt}>
          <img alt={pod3alt} src={pod3image} title={pod3alt} />
        </a>
      </div>
    </div>

    <div class="carousel-cell">
      <div class="price-pod">
        <a href={pod4link} title={pod4alt}>
            <img alt={pod4alt} src={pod4image} title={pod4alt} />
          </a>
      </div>
    </div>

    {pod5image &&
      <div class="carousel-cell">
        <div class="price-pod">
          <a href={pod5link} title={pod5alt}>
              <img alt={pod5alt} src={pod5image} title={pod5alt} />
            </a>
        </div>
      </div>
    }

  </div>
</div>
     
     </>
  );
};

ChristmasPricePods.propTypes = {
  modulebackgroundcolor: PropTypes.string,
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
