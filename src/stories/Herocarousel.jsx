import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const HeroCarousel = ({
  carouselfirstslide,
  carouselsecondslide,
  carouselthirdslide
}) => {
  return (
    <>
    <style>{`
	.homepage-hero-carousel .carousel {
		margin: 0 auto;
		padding: 0;
		max-width: 100%;
		background: #dbe3ff;
		overflow: hidden;
	}
	
		.homepage-hero-carousel .flickity-viewport {
			overflow: visible;
			height: 106vw !important;
		}
	
			.homepage-hero-carousel .carousel-cell {
				width: 100%;
				height: 100%;
				counter-increment: carousel-cell;
				opacity: 100%;
			}

      .homepage-hero-carousel .carousel-cell picture,
      .homepage-hero-carousel .carousel-cell picture img {
        width: 100%;
        height: auto;
        max-width: 1400px;
      }
	
				.homepage-hero-carousel .carousel-cell.is-selected {
			  		opacity: 100%;
				}
	
				.homepage-hero-carousel .carousel-cell:before {
			  		display: block;
			  	}
	
					.spotlight-deal-banner {
						display: inline-block;
						position: relative;
					}
	
						.spotlight-deal-banner h2 {
							position: absolute;
							top: 10px;
							left: 20px;
							margin: 0;
							padding: 0;
							width: 56vw;
						}
	
							.spotlight-deal-banner h2 img {
								display: block;
								width: 100%;
							}
	
						.spotlight-deal-banner h3 {
							position: absolute;
							top: 8vw;
							right: 4vw;
							margin: 0;
							padding: 0;
							font: 36px/100% "Nunito Bold";
							color: #ffffff;
							text-align: center;							
							letter-spacing: -1px;
							text-shadow: rgb(46, 33, 103) 2px 0px 0px, rgb(46, 33, 103) 1.75517px 0.958851px 0px, rgb(46, 33, 103) 1.0806px 1.68294px 0px, rgb(46, 33, 103) 0.141474px 1.99499px 0px, rgb(46, 33, 103) -0.832294px 1.81859px 0px, rgb(46, 33, 103) -1.60229px 1.19694px 0px, rgb(46, 33, 103) -1.97998px 0.28224px 0px, rgb(46, 33, 103) -1.87291px -0.701566px 0px, rgb(46, 33, 103) -1.30729px -1.5136px 0px, rgb(46, 33, 103) -0.421592px -1.95506px 0px, rgb(46, 33, 103) 0.567324px -1.91785px 0px, rgb(46, 33, 103) 1.41734px -1.41108px 0px, rgb(46, 33, 103) 1.92034px -0.558831px 0px;
							width: 140px;
						}
	
							.spotlight-deal-banner h3 span.wasPrice {
								font: 18px/100% "Nunito Bold";
								color: #2e2167;
								letter-spacing: 0;
								text-shadow: none;
							}
	
						.spotlight-deal-banner h4 {
							position: absolute;
							top: 16vw;
							left: 20px;
							margin: 0;
							padding: 0;
							font: 16px / 120% "Nunito Bold";
							text-align: left;
							color: #ffffff;
							width: 50vw;
							letter-spacing: 0;
						}
	
						.spotlight-deal-banner h5 {
							display: flex;
							align-items: center;
							position: absolute;
							top: 28vw;
							right: 8vw;
							margin: 0;
							padding: 0;
							font: 24px / 100% "Nunito Bold";
							color: #fff;
							text-transform: uppercase;
							width: 100px;
							height: 100px;
							border-radius: 50px;
							border: solid #ffffff 2px;
							background: #ed2f23;
						}
	
						.spotlight-deal-banner .spotlight-deal-button {
							position: absolute;
							bottom: 20px;
							right: 20px;
							padding: 10px 15px;
							font: 16px / 100% "Nunito Bold";
							letter-spacing: 0;
							color: #ffffff;
							border-radius: 14px;
							background-color: #ed2f23;
							transition: background-color 0.5s;
						}
	
							.spotlight-deal-banner .spotlight-deal-button:hover {
								color: #ffffff;
								background-color: #2e2167;
							}
	
						.spotlight-deal-banner .spotlight-deal-terms {
							position: absolute;
							margin: 0;
							bottom: 10px;
							left: 10px;
							font: 7px / 120% "Nunito Bold";
							color: #666666;
							text-align: left;
							letter-spacing: 0.5px;
							width: 175px;
						}
	
						.spotlight-deal-banner .spotlight-deal-product-original {
							position: absolute;
							top: 38vw;
							left: 18vw;
							width: 64vw;
						}
	
							.spotlight-deal-banner .spotlight-deal-product-original img {
								width: 100%;
							}
	
					.mixed-hero-area a {
						display: flex;
						flex-wrap: wrap;
						position: relative;
						align-items: center;
						margin: 0 auto;
						color: #ffffff;
						max-width: 1400px;
						height: 100%;
						border: solid 8px #ffffff;
						background: #3e94cf;
					}
  
						.mixed-hero-area .mixed-hero-image {
							position: relative;
							margin: 0;
							padding: 0;
						}
  
							.mixed-hero-area .mixed-hero-image img {
								width: 100%;
							}
  
						.mixed-hero-area .mixed-hero-copy {
							margin: 0;
							padding: 20px;
							width: 100%;
							height: 41vw;
						}
  
							.mixed-hero-area .mixed-hero-copy h2 {
								margin: 0;
								padding: 0;
								font: 16px/100% "Nunito Bold";
							}
	
							.mixed-hero-area .mixed-hero-copy h3 {
								margin: 10px 0;
								padding: 0;
								font: 24px/100% "Nunito Bold";
							}
  
					.hero-banner-mobile, .hero-banner-desktop {
						width: 100%;
						border: solid 8px #ffffff;
					}
  
					.hero-banner-desktop {
						display: none;
						width: 100%;
						max-width: 1400px;
						margin: 0 auto;
					}
  
						.flickity-prev-next-button {
							top: 46%;
						}
  
						.homepage-hero-carousel .flickity-page-dots {
							bottom: 15px;
						}
  
							.homepage-hero-carousel .flickity-page-dots li {
								width: 15px;
								height: 15px;
								background: #ffffff;
							}
  
						/*.homepage-hero-carousel .flickity-prev-next-button,
						.homepage-hero-carousel .flickity-page-dots {
						display: none;
						}*/
  
	@media (min-width: 768px) {
 
		.homepage-hero-carousel .carousel {
			padding: 0 0 40px;
		}

			.homepage-hero-carousel .flickity-viewport {
				height: 31vw !important
			}
		
					.mixed-hero-area .mixed-hero-image {
						width: 47%;
					}

					.mixed-hero-area .mixed-hero-copy {
						width: 53%;
						height: auto;
					}

				.hero-banner-mobile {
					display: none;
				}

				.hero-banner-desktop {
					display: block;
				}

					.homepage-hero-carousel .flickity-prev-next-button.previous {
						left: 20px;
					}

					.homepage-hero-carousel .flickity-prev-next-button.next {
						right: 20px;
					}

					.homepage-hero-carousel .flickity-page-dots {
						bottom: 50px;
					}
		
						.spotlight-deal-banner h2 {
							top: 10px;
							left: 80px;
							width: 30vw;
						}
	
						.spotlight-deal-banner h3 {
							top: 12vw;
							left: 80px;
							font: 40px/100% "Nunito Bold";
							text-align: left;
							width: 40vw;
						}
	
							.spotlight-deal-banner h3 span.wasPrice {
								font: 26px / 100% "Nunito Bold";
							}
		
						.spotlight-deal-banner h4 {
							top: 21vw;
							left: 80px;
							width: 40vw;
						}
	
						.spotlight-deal-banner h5 {
							top: 10px;
							right: 10px;
						}
	
						.spotlight-deal-banner .spotlight-deal-button {
							bottom: 20px;
							right: 20px;
							padding: 10px 20px;
							font: 16px / 100% "Nunito Bold";
						}
	
						.spotlight-deal-banner .spotlight-deal-terms {
							bottom: 3vw;
							left: 80px;
							font: 8px / 120% "Nunito Bold";
							color: #ffffff;
							width: 46vw;
						}
	
						.spotlight-deal-banner .spotlight-deal-product-original {
							top: 2vw;
							left: 62vw;
							width: 28vw;
						}
  
	}
	
  
	@media (min-width: 1024px) {

		.homepage-hero-carousel .carousel {
			padding: 0 0 60px;
		}

			.homepage-hero-carousel .flickity-viewport {
				height: 29vw !important;
				max-height: 436px;
			}
	
						.spotlight-deal-banner h2 {
							top: 30px;
							width: 300px;
						}						
	
						.spotlight-deal-banner h3 {
							top: 130px;
							font: 62px/100% "Nunito Bold";
							width: 440px;
						}
	
							.spotlight-deal-banner h3 span.wasPrice {
								font: 34px/100% "Nunito Bold";
							}
		
						.spotlight-deal-banner h4 {
							top: 220px;
							font: 20px/120% "Nunito Bold";
							width: 440px;
						}
	
						.spotlight-deal-banner h5 {
							top: 20px;
							right: 20px;
							font: 28px/100% "Nunito Bold";
							width: 120px;
							height: 120px;
							border-radius: 60px;
						}
	
						.spotlight-deal-banner .spotlight-deal-button {
							bottom: 30px;
							right: 30px;
							font: 18px/100% "Nunito Bold";
						}
		
						.spotlight-deal-banner .spotlight-deal-terms {
							bottom: 40px;
							left: 80px;
							font: 10px / 120% "Nunito Bold";
							color: #ffffff;
							width: 440px;
						}
	
						.spotlight-deal-banner .spotlight-deal-product-original {
							top: 4vw;
							right: 18vw;
							width: 24vw;
							height: 24vw;
						}
		
						.mixed-hero-area a {
							height: 32vw;
						}
		
						.mixed-hero-area .mixed-hero-image {
							width: 50%;
						}
		
						.mixed-hero-area .mixed-hero-copy {
							width: 50%;
						}
		
		
							.mixed-hero-area .mixed-hero-copy h2 {
								font: 20px/100% "Nunito Bold";
							}
	
							.mixed-hero-area .mixed-hero-copy h3 {
								margin: 20px 0;
								padding: 0;
								font: 32px/100% "Nunito Bold";
							}

	}
	
	
	@media (min-width: 1200px) {
		
		.spotlight-deal-banner h2 {
			width: 400px;
		}
	
		.spotlight-deal-banner h3 {
			top: 152px;
			font: 68px/100% "Nunito Bold";
		}
	
			.spotlight-deal-banner h3 span.wasPrice {
				font: 40px / 100% "Nunito Bold";
			}
		
			.spotlight-deal-banner h4 {
				top: 258px;
				font: 22px / 120% "Nunito Bold";
			}
	
			.spotlight-deal-banner h5 {
				font: 36px / 100% "Nunito Bold";
				width: 140px;
				height: 140px;
				border-radius: 70px;
			}
	
			.spotlight-deal-banner .spotlight-deal-button {
				font: 22px / 100% "Nunito Bold";
			}
		
			.spotlight-deal-banner .spotlight-deal-product-original {
				top: 20px;
				left: 740px;
				width: 335px;
			}

	}
  
	
	@media (min-width: 1400px) {

		.homepage-hero-carousel .carousel {
			padding: 40px 0;
			max-width: 100%;
			background: #dbe3ff;
		}

			.mixed-hero-area .mixed-hero-copy {
				padding: 40px;
			}

				.flickity-prev-next-button {
					top: 50%;
				}
		
					    .mixed-hero-area a {
							height: auto;
						}
		
							.mixed-hero-area .mixed-hero-image .spotlight-offer-roundel {
								top: 20px;
								right: 20px;
								font: 34px / 100% "Nunito Bold";
								width: 120px;
								height: 120px;
								border-radius: 60px;								
							}
		
	
						.spotlight-deal-banner h3 {
							top: 170px;
							font: 80px/100% "Nunito Bold";
							width: 560px;
						}
	
							.spotlight-deal-banner h3 span.wasPrice {
								font: 44px/100% "Nunito Bold";
							}
		
						.spotlight-deal-banner h4 {
							top: 300px;
							font: 24px/120% "Nunito Bold";
							width: 560px;
						}
	
						.spotlight-deal-banner h5 {
							top: 30px;
							right: 30px;
							font: 40px / 100% "Nunito Bold";
							width: 160px;
							height: 160px;
							border-radius: 80px;
						}
	
						.spotlight-deal-banner .spotlight-deal-button {
							bottom: 40px;
							right: 40px;
							font: 24px / 120% "Nunito Bold";
						}
	
						.spotlight-deal-banner .spotlight-deal-terms {
							width: 560px;							
						}
	
						.spotlight-deal-banner .spotlight-deal-product-original {
							left: 860px;
							width: 400px;
						}

	}
  
	@media (min-width: 1600px) {

		.homepage-hero-carousel .flickity-prev-next-button.previous {
			left: 9vw;
		}

		.homepage-hero-carousel .flickity-prev-next-button.next {
			right: 9vw;
		}

	}
    `}</style>
     <div class="homepage-hero-carousel">
      <div
        class="carousel js-flickity flickity-enabled is-draggable"
        data-flickity='{ "autoPlay": true, "wrapAround": true, "imagesLoaded": true }'
      >
        <div class="carousel-cell"
        
          dangerouslySetInnerHTML={{__html: carouselfirstslide}}
        
        />

        {carouselsecondslide &&
          <div class="carousel-cell"
        
          dangerouslySetInnerHTML={{__html: carouselsecondslide}}
        
        />

        }

        {carouselthirdslide &&
          <div class="carousel-cell"
        
          dangerouslySetInnerHTML={{__html: carouselthirdslide}}
        
        />
        }
      </div>
    </div>
    </>
  );
};

HeroCarousel.propTypes = {
  /** Button contents */
  carouselfirstslide: PropTypes.string.isRequired,
  carouselsecondslide: PropTypes.string,
  carouselthirdslide: PropTypes.string,
};
