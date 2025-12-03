import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const PodsCarousel = ({
  podscarouselfirstslide,
  podscarouselsecondslide,
  podscarouselthirdslide,
	podscarouselfourthslide,
	podscarouselfifthslide,
	podscarouselsixthslide,
	podscarouselsevthslide,
	podscarouseleighthslide,
  podscarouselninethslide,
  podscarouseltenthslide,
}) => {
  return (
    <>
    <style>{`
		#storybook-root .offer-pods .carousel-cell {
		width:100%
	}
  .offer-pods {
    padding: 0 10px 20px;
    background-color: #dbe3ff;
  }

  .offer-pods .carousel {
    padding: 0 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .offer-pods .carousel .item {
    padding: 0;
  }

  .offer-pods .carousel-cell {
    width: 78%;
    padding-top: 10px;
		aspect-ratio: 241/381;
  }

  .offer-pods img {
    width: 100%;
    margin: 0 0 10px !important;
  }

  .offer-pods a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    border-radius: 8px;
    padding: 0 0 20px;
    background-color: #fff;
    color: #00548b;
    text-decoration: none;
    font-size: 18px;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    font-weight: bold;
    color: #00548b;
    margin: 0 20px 0 0;
    box-shadow: 0 0 5px rgba(3, 33, 33, 0.05);
    letter-spacing: 0.5px;
    transition: all 0.3s;
    overflow: hidden;
    height: 100%;
  }

  .offer-pods a:hover {
    box-shadow: 0 0 18px rgba(33, 33, 33, 0.15);
    transform: translateY(-5px);
  }

  .offer-pods a .pod-image-container + span {
    margin: 20px;
  }

  .offer-pods .flickity-button,
  .offer-pods .flickity-page-dots {
    display: none;
  }

  .offer-pods .flickity-viewport {
    --mask: linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) 92%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0) 0) 100% 98% / 100% 100% repeat-x;
    mask: var(--mask);
  }

  @media (min-width: 768px) {
    .offer-pods .carousel {
      padding: 0 10px;
    }
    .offer-pods .carousel-cell {
      width: 37%;
			aspect-ratio: 429/600;
    }

    .offer-pods a {
      font-size: 20px;
    }
  }

  @media (min-width: 1024px) {
    .offer-pods a {
      font-size: 22px;
    }
  }

  .offer-pods .hero-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        margin-bottom: 30px;
        background-color: #009E44;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        padding: 10px 10px 10px 0px;
        height: 40px;
        box-shadow: 0 0 5px rgba(3,33,33,.6);
        border: 3px solid #ffffff;
        transition: all 0.3s;
    }

    .offer-pods .hero-button:hover {
        background-color: #AFCB17;
        scale: 1.05;
        box-shadow: 0 0 18px rgba(3,33,33,.3);
        color: #fff;
    }

    .offer-pods .hero-button .basket-icon {
        transition: all 0.3s;
        transform: rotate(15deg);
        margin-left: 5px;
    }

    .offer-pods .hero-button:hover .basket-icon {
        transform: rotate(-10deg)
    }

    .offer-pods .hero-button .star-start {
        position: relative;
        top: -3px;
    }

    .offer-pods .hero-button .swoosh-container {
        display: flex;
        align-items: center;
        justify-content: end;
        margin-right: 5px;
        width: 25px;
    }

    .offer-pods .hero-button .swoosh {
        display: block;
        width: 0;
        height: 3px;
        margin-top: 0;
        margin-left: -2px;
        transform: rotate(15deg);
        background-color: rgba(255, 255, 255, 0.7);
        transition: all 0.3s;
    }

    .offer-pods .hero-button:hover .swoosh {
        width: 7px;
    }

    .offer-pods .hero-button .star-end {
        position: relative;
        bottom: -5px;
        transition: all 0.3s;
    }

    .offer-pods .hero-button:hover .star-end {
        scale: 1.1;
        transform: rotate(30deg);
    }

		.pod-image-container {
        position: relative;
				width: 100%;
    }

    .pod .logo {
        position: absolute;
        top: 10px;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pod .logo.left {
      justify-content: flex-start;
      padding-left: 10px;
    }

    .pod .logo.right {
      justify-content: flex-end;
      padding-right: 10px;
    }

    .pod .logo img {
      width: auto;
    }

		.pod.has-tagline .hero-button {
        margin-top: 20px;
    }

		.pod.has-tagline img {
			margin: 0 0 20px !important;
		}

    .pod.has-tagline .pod-image-container + span {
      margin: 0 20px;
    }
`}
</style>
<div class="offer-pods">
  <div
    class="carousel offer-pods-carousel js-flickity flickity-enabled is-draggable"
    data-flickity='{ "autoPlay": true, "wrapAround": true, "cellAlign": "left" }'
  >
		<div class="carousel-cell" dangerouslySetInnerHTML={{__html:podscarouselfirstslide}} />
		{podscarouselsecondslide &&
			<div class="carousel-cell" dangerouslySetInnerHTML={{__html:podscarouselsecondslide}} />
		}
		{podscarouselthirdslide &&
			<div class="carousel-cell" dangerouslySetInnerHTML={{__html:podscarouselthirdslide}} />
		}
		{podscarouselfourthslide &&
			<div class="carousel-cell" dangerouslySetInnerHTML={{__html:podscarouselfourthslide}} />
		}
		{podscarouselfifthslide &&
			<div class="carousel-cell" dangerouslySetInnerHTML={{__html:podscarouselfifthslide}} />
		}
		{podscarouselsixthslide &&
			<div class="carousel-cell" dangerouslySetInnerHTML={{__html:podscarouselsixthslide}} />
		}
		{podscarouselsevthslide &&
			<div class="carousel-cell" dangerouslySetInnerHTML={{__html:podscarouselsevthslide}} />
		}
		{podscarouseleighthslide &&
			<div class="carousel-cell" dangerouslySetInnerHTML={{__html:podscarouseleighthslide}} />
		}
    {podscarouselninethslide &&
			<div class="carousel-cell" dangerouslySetInnerHTML={{__html:podscarouselninethslide}} />
		}
    {podscarouseltenthslide &&
			<div class="carousel-cell" dangerouslySetInnerHTML={{__html:podscarouseltenthslide}} />
		}
  </div>
</div>
<script>
  {`
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function(){

      const FLICKITIES = document.querySelectorAll(".offer-pods-carousel");

      FLICKITIES.forEach((slider) => {
        new Flickity(slider);
      });

      var flkty4 = new Flickity(".offer-pods-carousel");

      flkty4.resize();

      const offerPods = document.querySelectorAll('.offer-pods-carousel .carousel-cell');

      offerPods.forEach((slide) => {
        slide.style.height = "100%";
      })
    }, 1000);
  }, false);
  `}
</script>
    </>
  );
};

PodsCarousel.propTypes = {
  /** Button contents */
  podscarouselfirstslide: PropTypes.string.isRequired,
  podscarouselsecondslide: PropTypes.string,
  podscarouselthirdslide: PropTypes.string,
	podscarouselfourthslide: PropTypes.string,
	podscarouselfifthslide: PropTypes.string,
	podscarouselsixthslide: PropTypes.string,
	podscarouselsevthslide: PropTypes.string,
	podscarouseleighthslide: PropTypes.string,
  podscarouselninethslide: PropTypes.string,
  podscarouseltenthslide: PropTypes.string,
};
