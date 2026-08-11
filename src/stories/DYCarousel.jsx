import PropTypes from "prop-types";

export const DYCarousel = ({
  preview = true,
  lozengebackgroundcolor,
  lozengetextcolor,
  bordercolor,
}) => {


  const dyCSS = `
  .dy-recommendations__title-container {
	  position: relative;
	}

	#dy-recommendations-\${dyVariationId} {
	    position: relative;
	    top: 40px;
		  width: calc(100% - 40px);
		  \${Font};
		  box-sizing: border-box;
		  margin: 0 20px;
		  padding: 40px 0 20px;
		  max-width: 944px;
		  border-radius: 20px;
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendations__title {
      position: absolute;
      left: 0;
      margin: 0px;
      font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
      font-size: 18px;
      border-radius: 8px;
      margin: 0;
      box-shadow: inset 0 4px 10px rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
      padding: 5px 0;
      color: ${lozengetextcolor};
      background: ${lozengebackgroundcolor};
      text-align: center;
      width: 100%;
      max-width: 100%;
      z-index: 1;
      text-transform: uppercase;
      top: -30px;
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendations__slider-conatiner {
		  margin: 0 10px;
		  position: relative;
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendations__slider {
		  padding: 15px 10px;
		  width: 100%;
		  overflow: hidden;
		  position: relative;
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendations__slider-wrapper {
		  display: flex;
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendation-product { 
		  flex-shrink: 0;
		  position: relative;
		  background-color: #fff;
		  box-sizing: border-box;
		  text-decoration: none;
		  color: #000;
		  outline: none;
		  border-radius: 8px;
      overflow: hidden;
      border: 3px solid \${bordercolor};
      transition: all 0.3s ease-in-out;
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendation-product__details {
		  text-align: center;
		  margin: 0;
      position: relative;
      z-index: 2;
      background-color: #fff;
      padding: 10px;
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendation-product__detail {
		  font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
		  margin: 0;
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendation-product__detail--name {
		  font-size: 14px;
		  color: #407ec9;
		  margin-bottom: 5px;
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendation-product__detail--price {
		  float:left;
		  font-size: 14px;
		  color: #ee3224;
		  font-weight: bold;
		  width: 100%;
		}

		#dy-recommendations-\${dyVariationId} .rec_now_price {
		  margin-bottom: 5px;
		}

		#dy-recommendations-\${dyVariationId} .rec_was_price {
		  float:left;
		  color: #9B9B9B;
		font-family: "Nunito Regular", "Tahoma Bold", sans-serif;
		font-weight: normal;
		text-decoration: line-through;
		}

    #dy-recommendations-\${dyVariationId} .dy-recommendation-product__image-container {
      border-radius: 8px;
      overflow: hidden;
    }

		#dy-recommendations-\${dyVariationId} .dy-recommendation-product__image {
		  width: 100%;
		  max-height: 400px;
		  border-radius:8px;
		  margin-bottom:8px;
      transition: all 0.3s;
      overflow: hidden;
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendations-slider-button {
		  background-repeat: no-repeat; 
		  background-size: contain; 
		  position: absolute; 
		  top: 42%; 
		  height: 40px; 
		  width: 40px; 
		  z-index: 9998;
		  cursor: pointer;
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendations-slider-button:focus {
		  outline: none;
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendations-slider-button--prev,
		#dy-recommendations-\${dyVariationId} .dy-recommendations__slider-rtl .dy-recommendations-slider-button--next {
		  right: auto;
		  left: -22px;
		  background-image: url('\${Prev Arrow Img}');
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendations-slider-button--next,
		#dy-recommendations-\${dyVariationId} .dy-recommendations__slider-rtl .dy-recommendations-slider-button--prev {
		  right: -26px;
		  left: auto;
		  background-image: url('\${Next Arrow Img}'); 
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendations-slider-pagination {
		  margin: 4px 0;
		  text-align: \${Dots Position};  
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendations-slider-pagination-bullet {
		  display: inline-block;
		  border: 6px solid #aaa;
		  border-radius: 6px;
		  margin: 0 2px;
		  cursor: pointer;
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendations-slider-pagination-bullet:focus {
		  outline: none;
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendations-slider-pagination-bullet__active {
		  border-color: #333;
		  cursor: auto;
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendations-slider--aria-notification {
		  position: absolute;
		  left: 0;
		  top: 0;
		  pointer-events: none;
		  opacity: 0;
		  z-index: -1000;
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendations-slider-button--disabled {
		  display: none;
		}

		.saved-carts {
		  margin-bottom: 40px!important;
		}

		footer {
		  margin-top: 0!important;
		}

		.dy--hidden {
			display: none !important;
		}
	
		#dy-recommendations-\${dyVariationId} .dy-recommendation-product__detail.dy-recommendation-product__detail--price.rec_now_price.wasPricehalf, #dy-recommendations-\${dyVariationId}  .dy-recommendation-product__detail.dy-recommendation-product__detail--price.rec_was_price.wasPricehalf {
		  max-width: 50%!important;
		  float: left!important;
		  display: block;
		  margin: 0!important;
	  	}

		@media (max-width: 414px) {
		  #dy-recommendations-\${dyVariationId} .dy-hide--m {
			 display: none;
		  }
		}

		@media (min-width: 415px) and (max-width: 769px) {
		  #dy-recommendations-\${dyVariationId} .dy-hide--t {
			 display: none;
		  }
		}

		@media (min-width: 770px) {
		  #dy-recommendations-\${dyVariationId} .dy-hide--d {
			 display: none;
		  }
		}

		@media (min-width: 1024px) {

		  #dy-recommendations-\${dyVariationId} {
		  margin: 0 auto;
		  padding: 40px 0 20px;
		}

		  #dy-recommendations-\${dyVariationId} .dy-recommendation-product { 
			padding: 0;
      transition: all 0.3s;
		}

    #dy-recommendations-\${dyVariationId} .dy-recommendation-product:hover {
      transform: scale(1.05);
    }

    #dy-recommendations-\${dyVariationId} .dy-recommendation-product:hover .dy-recommendation-product__image {
      transform: scale(1.1);
    }

			#dy-recommendations-\${dyVariationId} .dy-recommendations-slider-button--prev,
		#dy-recommendations-\${dyVariationId} .dy-recommendations__slider-rtl .dy-recommendations-slider-button--next {
		  left: -20px;
		}

		#dy-recommendations-\${dyVariationId} .dy-recommendations-slider-button--next,
		#dy-recommendations-\${dyVariationId} .dy-recommendations__slider-rtl .dy-recommendations-slider-button--prev {
		  right: -20px;
		}

		}

	@media (min-width: 768px) {

	  #dy-recommendations-\${dyVariationId} .dy-recommendation-product__detail--price {
		width: 100%;
		}

	}
  `;

return (
<>
<div id="dy-css-output">
  {dyCSS}
</div>
<style>{String.raw`

  #dy-css-output {
    display: none;
  }

  .dy-recommendations__title-container {
	  position: relative;
	}

	#dy-recommendations-TEST {
	    position: relative;
	    top: 40px;
		  width: calc(100% - 40px);
		  \${Font};
		  box-sizing: border-box;
		  margin: 0 20px;
		  padding: 20px 0 20px;
		  max-width: 944px;
		  border-radius: 20px;
		}

		#dy-recommendations-TEST .dy-recommendations__title {
      position: absolute;
      left: 0;
      margin: 0px;
      font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
      font-size: 18px;
      border-radius: 8px;
      margin: 0;
      box-shadow: inset 0 4px 10px rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
      padding: 5px 0;
      color: ${lozengetextcolor};
      background: ${lozengebackgroundcolor};
      text-align: center;
      width: 100%;
      max-width: 100%;
      z-index: 1;
      text-transform: uppercase;
      top: -30px;
		}

		#dy-recommendations-TEST .dy-recommendations__slider-conatiner {
		  margin: 0 10px;
		  position: relative;
		}

		#dy-recommendations-TEST .dy-recommendations__slider {
		  padding: 15px 10px;
		  width: 100%;
		  overflow: hidden;
		  position: relative;
		}

		#dy-recommendations-TEST .dy-recommendations__slider-wrapper {
		  display: flex;
		}

		#dy-recommendations-TEST .dy-recommendation-product {
		  flex-shrink: 0;
		  position: relative;
		  background-color: #fff;
		  box-sizing: border-box;
		  text-decoration: none;
		  color: #000;
		  outline: none;
		  border-radius: 8px;
      overflow: hidden;
      border: 3px solid ${bordercolor};
      transition: all 0.3s ease-in-out;
		}

		#dy-recommendations-TEST .dy-recommendation-product__details {
		  text-align: center;
		  margin: 0;
      position: relative;
      z-index: 2;
      background-color: #fff;
      padding: 10px;
		}

		#dy-recommendations-TEST .dy-recommendation-product__detail {
		  font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
		  margin: 0;
		}

		#dy-recommendations-TEST .dy-recommendation-product__detail--name {
		  font-size: 14px;
		  color: #407ec9;
		  margin-bottom: 5px;
		}

		#dy-recommendations-TEST .dy-recommendation-product__detail--price {
		  float:left;
		  font-size: 14px;
		  color: #ee3224;
		  font-weight: bold;
		  width: 100%;
		}

		#dy-recommendations-TEST .rec_now_price {
		  margin-bottom: 5px;
		}

		#dy-recommendations-TEST .rec_was_price {
		  float:left;
		  color: #9B9B9B;
		font-family: "Nunito Regular", "Tahoma Bold", sans-serif;
		font-weight: normal;
		text-decoration: line-through;
		}

    #dy-recommendations-TEST .dy-recommendation-product__image-container {
      border-radius: 8px;
      overflow: hidden;
    }

		#dy-recommendations-TEST .dy-recommendation-product__image {
		  width: 100%;
		  max-height: 400px;
		  border-radius:8px;
		  margin-bottom:8px;
      transition: all 0.3s;
      overflow: hidden;
		}

		#dy-recommendations-TEST .dy-recommendations-slider-button {
		  background-repeat: no-repeat; 
		  background-size: contain; 
		  position: absolute; 
		  top: 42%; 
		  height: 40px; 
		  width: 40px; 
		  z-index: 9998;
		  cursor: pointer;
		}

		#dy-recommendations-TEST .dy-recommendations-slider-button:focus {
		  outline: none;
		}

		#dy-recommendations-TEST .dy-recommendations-slider-button--prev,
		#dy-recommendations-TEST .dy-recommendations__slider-rtl .dy-recommendations-slider-button--next {
		  right: auto;
		  left: -22px;
		  background-image: url('\${Prev Arrow Img}');
		}

		#dy-recommendations-TEST .dy-recommendations-slider-button--next,
		#dy-recommendations-TEST .dy-recommendations__slider-rtl .dy-recommendations-slider-button--prev {
		  right: -26px;
		  left: auto;
		  background-image: url('\${Next Arrow Img}'); 
		}

		#dy-recommendations-TEST .dy-recommendations-slider-pagination {
		  margin: 4px 0;
		  text-align: \${Dots Position};  
		}

		#dy-recommendations-TEST .dy-recommendations-slider-pagination-bullet {
		  display: inline-block;
		  border: 6px solid #aaa;
		  border-radius: 6px;
		  margin: 0 2px;
		  cursor: pointer;
		}

		#dy-recommendations-TEST .dy-recommendations-slider-pagination-bullet:focus {
		  outline: none;
		}

		#dy-recommendations-TEST .dy-recommendations-slider-pagination-bullet__active {
		  border-color: #333;
		  cursor: auto;
		}

		#dy-recommendations-TEST .dy-recommendations-slider--aria-notification {
		  position: absolute;
		  left: 0;
		  top: 0;
		  pointer-events: none;
		  opacity: 0;
		  z-index: -1000;
		}

		#dy-recommendations-TEST .dy-recommendations-slider-button--disabled {
		  display: none;
		}

		.saved-carts {
		  margin-bottom: 40px!important;
		}

		footer {
		  margin-top: 0!important;
		}

		.dy--hidden {
			display: none !important;
		}
	
		#dy-recommendations-TEST .dy-recommendation-product__detail.dy-recommendation-product__detail--price.rec_now_price.wasPricehalf, #dy-recommendations-TEST  .dy-recommendation-product__detail.dy-recommendation-product__detail--price.rec_was_price.wasPricehalf {
		  max-width: 50%!important;
		  float: left!important;
		  display: block;
		  margin: 0!important;
	  	}

		@media (max-width: 414px) {
		  #dy-recommendations-TEST .dy-hide--m {
			 display: none;
		  }
		}

		@media (min-width: 415px) and (max-width: 769px) {
		  #dy-recommendations-TEST .dy-hide--t {
			 display: none;
		  }
		}

		@media (min-width: 770px) {
		  #dy-recommendations-TEST .dy-hide--d {
			 display: none;
		  }
		}

		@media (min-width: 1024px) {

		  #dy-recommendations-TEST {
		  margin: 0 auto;
		  padding: 20px 0 20px;
		}

		  backgroundcolor
			padding: 0;
      transition: all 0.3s;
		}

    #dy-recommendations-TEST .dy-recommendation-product:hover {
      transform: scale(1.05);
    }

    #dy-recommendations-TEST .dy-recommendation-product:hover .dy-recommendation-product__image {
      transform: scale(1.1);
    }

			#dy-recommendations-TEST .dy-recommendations-slider-button--prev,
		#dy-recommendations-TEST .dy-recommendations__slider-rtl .dy-recommendations-slider-button--next {
		  left: -20px;
		}

		#dy-recommendations-TEST .dy-recommendations-slider-button--next,
		#dy-recommendations-TEST .dy-recommendations__slider-rtl .dy-recommendations-slider-button--prev {
		  right: -20px;
		}

		}

	@media (min-width: 768px) {

	  #dy-recommendations-TEST .dy-recommendation-product__detail--price {
		width: 100%;
		}

	}

`}</style>

<div id="dy-recommendations-TEST">
  <div class="dy-recommendations__title-container">
    <p class="dy-recommendations__title">Title</p>
  </div>
  <div class="dy-recommendations__slider-conatiner">
    <div class="dy-recommendations__slider">
      <div class="dy-recommendations__slider-wrapper">
        <a class="dy-recommendation-product" href="#" data-dy-sku="12345">
          <div class="dy-recommendation-product__image-container">
            <img class="dy-recommendation-product__image" src="https://www.thetoyshop.com/medias/515Wx515H-547386-Primary?context=bWFzdGVyfGltYWdlc3wxNjUwOTN8aW1hZ2UvanBlZ3xhRGxtTDJnNFlpOHhNak16TURReE1UQTJOVE0zTkM4MU1UVlhlRFV4TlVoZk5UUTNNemcyWDFCeWFXMWhjbmt8NTdjYmFkZGRlN2VlMjdmYTYzODM2N2IwNThmOGIzMzA1ZDczYTk3ZTUzNWFmMjIwNTlhM2JhYmI0MTVjNTRiMg" />
          </div>
          <div class="dy-recommendation-product__details">
            <p class="dy-recommendation-product__detail dy-recommendation-product__detail--name">Product Name</p>
            
            <p class="dy-recommendation-product__detail dy-recommendation-product__detail--price rec_now_price" data-is-sale="true">was</p>
            
            <p class="dy-recommendation-product__detail dy-recommendation-product__detail--price rec_was_price dy--hidden">now</p>
            
          </div>
        </a>
      </div>
    </div>
    <div class="dy-recommendations-slider-pagination"></div>
    <div class="dy-recommendations-slider-arrows">
      <div class="dy-recommendations-slider-button dy-recommendations-slider-button--prev">
      </div>
      <div class="dy-recommendations-slider-button dy-recommendations-slider-button--next">
      </div>
    </div>
  </div>
</div>
</>
);

};

DYCarousel.propTypes = {
  preview: PropTypes.bool,
  lozengebackgroundcolor: PropTypes.string,
  lozengetextcolor: PropTypes.string,
  bordercolor: PropTypes.string,
};