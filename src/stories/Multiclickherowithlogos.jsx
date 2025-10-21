import PropTypes from "prop-types";

/** Primary UI component for user interaction */
export const Multiclickhero = ({
  background,
  mobilelogosimage,
  desktoplogosimage,
  logosalt,
  heading,
  pod1image,
  pod2image,
  pod3image,
  pod4image,
  pod5image,
  pod6image,
  pod1alt,
  pod2alt,
  pod3alt,
  pod4alt,
  pod5alt,
  pod6alt,
  pod1link,
  pod2link,
  pod3link,
  pod4link,
  pod5link,
  pod6link,
  pod1text,
  pod2text,
  pod3text,
  pod4text,
  pod5text,
  pod6text,
  pod1datelementtype,
  pod1datapromotionindex,
  pod1datapromotionname,
  pod2datelementtype,
  pod2datapromotionindex,
  pod2datapromotionname,
  pod3datelementtype,
  pod3datapromotionindex,
  pod3datapromotionname,
  pod4datelementtype,
  pod4datapromotionindex,
  pod4datapromotionname,
  pod5datelementtype,
  pod5datapromotionindex,
  pod5datapromotionname,
  pod6datelementtype,
  pod6datapromotionindex,
  pod6datapromotionname,
  pod1datagtmvisfirstonscreen8511273_2666,
  pod1datagtmvistotalvisibletime8511273_2666,
  pod1datagtmvishasfired8511273_2666,
  pod2datagtmvisfirstonscreen8511273_2666,
  pod2datagtmvistotalvisibletime8511273_2666,
  pod2datagtmvishasfired8511273_2666,
  pod3datagtmvisfirstonscreen8511273_2666,
  pod3datagtmvistotalvisibletime8511273_2666,
  pod3datagtmvishasfired8511273_2666,
  pod4datagtmvisfirstonscreen8511273_2666,
  pod4datagtmvistotalvisibletime8511273_2666,
  pod4datagtmvishasfired8511273_2666,
  pod5datagtmvisfirstonscreen8511273_2666,
  pod5datagtmvistotalvisibletime8511273_2666,
  pod5datagtmvishasfired8511273_2666,
  pod6datagtmvisfirstonscreen8511273_2666,
  pod6datagtmvistotalvisibletime8511273_2666,
  pod6datagtmvishasfired8511273_2666,
}) => {
  return (
    <><style>{`
    .disney-gift-guide.no-logos {
      .carousel {
        padding-top: 50px;
      }
    }
    .disney-gift-guide .carousel {
		padding: 0 0 20px;
		background: ${background};
		background-size: cover;
		max-width: 1400px;
		border: solid 8px #ffffff;
		margin: 0 auto;
		height: 100%;
	}
	
		.disney-gift-guide .flickity-viewport {
			overflow: visible;
			height: 152vw !important;
		}

			.disney-gift-guide .carousel-cell {
				width: 100%;
				height: 100%;
				counter-increment: carousel-cell;
				opacity: 100%;
			}		

				.disney-gift-guide .carousel-cell.is-selected {
					opacity: 100%;
				}

				.disney-gift-guide .carousel-cell:before {
					display: block;
				}
	
		.mixed-hero-area a {
			display: flex;
			flex-wrap: wrap;
			position: relative;
			height: 100%;
		}
	
			.mixed-hero-area .mixed-hero-image {
				margin: 0;
				padding: 0;
			}
	
				.mixed-hero-area .mixed-hero-image img {
					width: 100%;
				}
	
					.mixed-hero-area .mixed-hero-image img.mixed-hero-desktop {
						display: none;
					}

			.mixed-hero-area .mixed-hero-copy {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-content: center;
				position: absolute;
				bottom: 0;
				right: 0;
				margin: 0;
				padding: 20px 20px 50px;
			}

				.mixed-hero-area .mixed-hero-copy h1 {
					margin: 0 0 20px;
					padding: 0;
					font: 32px/100% "Billy Bold", "Tahoma Bold", sans-serif;
					letter-spacing: 0;
				}

				.mixed-hero-area .mixed-hero-copy p {
					margin: 0 0 20px;
					padding: 0;
					font : 16px/140% "Nunito Regular", "Tahoma Bold", sans-serif;
				}

				.mixed-hero-area .mixed-hero-copy span {
					display: inline-block;
					margin: 0;
					padding: 12px 20px;
					font : 16px/140% "Nunito Bold", "Tahoma Bold", sans-serif;
					background: #ffffff;
					border-radius: 8px;
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
	
			.disney-gift-guide .flickity-page-dots {
				bottom: 30px;
			}

				.disney-gift-guide .flickity-page-dots li {
					width: 15px;
					height: 15px;
					background: #ffffff;
				}

					.disney-gift-guide .flickity-prev-next-button, .disney-gift-guide .flickity-page-dots {
						display: none;
					}
	
		.disney-gift-guide {
			height: 100%;
			background: #dbe3ff;
		}
	
			.disney-gift-guide h2 {
				margin: 5px 0;
			}
	
			.disney-gift-guide-logo-mobile {
				display: block;
				margin: 0 auto;
				width: 230px;
			}

			.disney-gift-guide-logo-desktop {
				display: none;
				margin: 30px auto;
				width: 400px;
			}

			.disney-sub-cats {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				margin: 0 auto 0 auto;
				padding: 0 50px;
				list-style: none;
				max-width: 944px;
				gap: 10px;
			}

				.disney-sub-cats li {
					position: relative; 
					margin: 0;
					width: calc(100% / 3 - 10px);
					z-index: 0;
				}

				.disney-sub-cats li img {
					border: 3px solid white;
				}

					.disney-sub-cats li a {
						display: block;
					}

						.disney-sub-cats li a:hover {
							animation: shake 1s;
							animation-iteration-count: infinite;
						}

						.disney-sub-cats li img {
							padding: 0;
							width: 100%;
						}

						.disney-sub-cats li span {
							display: block;
							padding: 10px 0;
							width: 100%;
							font: 12px / 140% "Nunito Bold", "Tahoma Bold", sans-serif;
							color: #ffffff;
							text-align: center;
						}

						@keyframes shake {
							0% { transform: translate(1px, 1px) rotate(0deg); }
							10% { transform: translate(-1px, -2px) rotate(-1deg); }
							20% { transform: translate(-3px, 0px) rotate(1deg); }
							30% { transform: translate(3px, 2px) rotate(0deg); }
							40% { transform: translate(1px, -1px) rotate(1deg); }
							50% { transform: translate(-1px, 2px) rotate(-1deg); }
							60% { transform: translate(-3px, 1px) rotate(0deg); }
							70% { transform: translate(3px, 1px) rotate(-1deg); }
							80% { transform: translate(-1px, -1px) rotate(1deg); }
							90% { transform: translate(1px, 2px) rotate(0deg); }
							100% { transform: translate(1px, -2px) rotate(-1deg); }
						}


    @media (min-width: 430px) {
	
		.disney-gift-guide .flickity-viewport {
			overflow: visible;
			height: 138vw !important;
		}
		
	}
	
	
	@media (min-width: 768px) {
		
		.disney-gift-guide .carousel {
			padding: 0 0 30px;
		}
		
		.disney-gift-guide .flickity-viewport {
			height: 58vw !important
		}
		
			.mixed-hero-area div {
				width: 50%;
			}

				.mixed-hero-area .mixed-hero-copy {
					padding: 30px;
					height: 100%;
				}
		
				.mixed-hero-area .mixed-hero-image img.mixed-hero-mobile {
					display: none;
				}
		
				.mixed-hero-area .mixed-hero-image img.mixed-hero-desktop {
					display: block;
				}

			.hero-banner-mobile {
				display: none;
			}

			.hero-banner-desktop {
				display: block;
			}

			.disney-gift-guide .flickity-prev-next-button.previous {
				left: 20px;
			}

			.disney-gift-guide .flickity-prev-next-button.next {
				right: 20px;
			}
		
		.disney-gift-guide .flickity-page-dots {
			bottom: 50px;
		}
		
		
			.disney-gift-guide h2 {
				margin: 30px 0;
			}

			.disney-sub-cats li {
        ${pod4link && pod5link ? 'width: calc(100% / 6 - 20px)' : 'width: calc(100% / 4 - 20px);'}
			}

    }
	
	
	@media (min-width: 1024px) {

		.disney-gift-guide {
			height: 103%;
		}

		.disney-sub-cats {
			justify-content: space-between;
				padding: 0 20px;
				gap: 0;
			}
		
		.disney-gift-guide .flickity-viewport {
			height: 44vw !important;
			max-height: 500px;
		}

			.disney-sub-cats li span {
							display: block;
							padding: 10px 0;
							width: 100%;
							font: 16px / 140% "Nunito Bold", "Tahoma Bold", sans-serif;
							color: #ffffff;
							text-align: center;
						}
	
	}


    @media (min-width: 1400px) {
		
		.disney-gift-guide .carousel {
			padding: 22px 0;
		}
		
			.mixed-hero-area .mixed-hero-copy {
				padding: 40px;
			}
		
			.flickity-prev-next-button {
				top: 50%;
			}
		
				.disney-gift-guide h2 {
					margin: 30px 0 20px;
				}

					.disney-gift-guide-logo-mobile {
						display: none;
					}

					.disney-gift-guide-logo-desktop {
						display: block;
					}

    }
	
	
	@media (min-width: 1600px) {
		
			.disney-gift-guide .flickity-prev-next-button.previous {
				left: 9vw;
			}

			.disney-gift-guide .flickity-prev-next-button.next {
				right: 9vw;
			}

    }

    
    .multiclick-heading {
        font: 36px / 100% "Nunito Bold";
        color: #fff;
        text-align: center;
        margin: 20px 0;
        width: 100%;
    }
    
    `}</style><div class={`disney-gift-guide ${!mobilelogosimage && 'no-logos'}`}>
      <div class="carousel">
        <div class="carousel-cell">
          {mobilelogosimage &&
          <h2>
            <img
              src={mobilelogosimage}
              alt={logosalt}
              title={logosalt}
              class="disney-gift-guide-logo-mobile" />

            <img
              src={desktoplogosimage}
              alt={logosalt}
              title={logosalt}
              class="disney-gift-guide-logo-desktop" />
          </h2>
          }

          {heading &&
            <div class="multiclick-heading">
              {heading}
            </div>
          }

          <ul class="disney-sub-cats">
            <li>
              <a
                href={pod1link}
                title={pod1alt}
                data-element-type={pod1datelementtype}
                data-promotion-index={pod1datapromotionindex}
                data-promotion-name={pod1datapromotionname}
                data-gtm-vis-first-on-screen8511273_2666={pod1datagtmvisfirstonscreen8511273_2666}
                data-gtm-vis-total-visible-time8511273_2666={pod1datagtmvistotalvisibletime8511273_2666}
                data-gtm-vis-has-fired8511273_2666={pod1datagtmvishasfired8511273_2666}
              >
                <img
                  alt={pod1alt}
                  src={pod1image}
                  title={pod1alt} />

                <span>{pod1text}</span>
              </a>
            </li>

            <li>
              <a
                href={pod2link}
                title={pod2alt}
                data-element-type={pod2datelementtype}
                data-promotion-index={pod2datapromotionindex}
                data-promotion-name={pod2datapromotionname}
                data-gtm-vis-first-on-screen8511273_2666={pod2datagtmvisfirstonscreen8511273_2666}
                data-gtm-vis-total-visible-time8511273_2666={pod2datagtmvistotalvisibletime8511273_2666}
                data-gtm-vis-has-fired8511273_2666={pod2datagtmvishasfired8511273_2666}
              >
                <img
                  src={pod2image}
                  alt={pod2alt}
                  title={pod2alt} />

                <span>{pod2text}</span>
              </a>
            </li>

            <li>
              <a
                href={pod3link}
                title={pod3alt}
                data-element-type={pod3datelementtype}
                data-promotion-index={pod3datapromotionindex}
                data-promotion-name={pod3datapromotionname}
                data-gtm-vis-first-on-screen8511273_2666={pod3datagtmvisfirstonscreen8511273_2666}
                data-gtm-vis-total-visible-time8511273_2666={pod3datagtmvistotalvisibletime8511273_2666}
                data-gtm-vis-has-fired8511273_2666={pod3datagtmvishasfired8511273_2666}
              >
                <img
                  src={pod3image}
                  alt={pod3alt}
                  title={pod3alt} />

                <span>{pod3text}</span>
              </a>
            </li>

            {pod4link && 
            <li>
              <a
                href={pod4link}
                title={pod4alt}
                data-element-type={pod4datelementtype}
                data-promotion-index={pod4datapromotionindex}
                data-promotion-name={pod4datapromotionname}
                data-gtm-vis-first-on-screen8511273_2666={pod4datagtmvisfirstonscreen8511273_2666}
                data-gtm-vis-total-visible-time8511273_2666={pod4datagtmvistotalvisibletime8511273_2666}
                data-gtm-vis-has-fired8511273_2666={pod4datagtmvishasfired8511273_2666}
              >
                <img
                  src={pod4image}
                  alt={pod4alt}
                  title={pod4alt} />

                <span>{pod4text}</span>
              </a>
            </li>
            }

            {pod5link &&
            <li>
              <a
                href={pod5link}
                title={pod5alt}
                data-element-type={pod5datelementtype}
                data-promotion-index={pod5datapromotionindex}
                data-promotion-name={pod5datapromotionname}
                data-gtm-vis-first-on-screen8511273_2666={pod5datagtmvisfirstonscreen8511273_2666}
                data-gtm-vis-total-visible-time8511273_2666={pod5datagtmvistotalvisibletime8511273_2666}
                data-gtm-vis-has-fired8511273_2666={pod5datagtmvishasfired8511273_2666}
              >
                <img
                  src={pod5image}
                  alt={pod5alt}
                  title={pod5alt} />

                <span>{pod5text}</span>
              </a>
            </li>
            }

            {pod6link &&
            <li>
              <a
                href={pod6link}
                title={pod6alt}
                data-element-type={pod6datelementtype}
                data-promotion-index={pod6datapromotionindex}
                data-promotion-name={pod6datapromotionname}
                data-gtm-vis-first-on-screen8511273_2666={pod6datagtmvisfirstonscreen8511273_2666}
                data-gtm-vis-total-visible-time8511273_2666={pod6datagtmvistotalvisibletime8511273_2666}
                data-gtm-vis-has-fired8511273_2666={pod6datagtmvishasfired8511273_2666}
              >
                <img
                  src={pod6image}
                  alt={pod6alt}
                  title={pod6alt} />

                <span>{pod6text}</span>
              </a>
            </li>
            }
          </ul>
        </div>
      </div>
    </div></>
  );
};

Multiclickhero.propTypes = {
  /** contents */
  mobilelogosimage: PropTypes.string,
  desktoplogosimage: PropTypes.string,
  logosalt: PropTypes.string,
  heading: PropTypes.string,
  background: PropTypes.string,
  pod1image: PropTypes.string,
  pod1link: PropTypes.string,
  pod1alt: PropTypes.string,
  pod2image: PropTypes.string,
  pod2link: PropTypes.string,
  pod2alt: PropTypes.string,
  pod3image: PropTypes.string,
  pod3link: PropTypes.string,
  pod3alt: PropTypes.string,
  pod4image: PropTypes.string,
  pod4link: PropTypes.string,
  pod4alt: PropTypes.string,
  pod5image: PropTypes.string,
  pod5link: PropTypes.string,
  pod5alt: PropTypes.string,
  pod6image: PropTypes.string,
  pod6link: PropTypes.string,
  pod6alt: PropTypes.string,
  pod1text: PropTypes.string,
  pod2text: PropTypes.string,
  pod3text: PropTypes.string,
  pod4text: PropTypes.string,
  pod5text: PropTypes.string,
  pod6text: PropTypes.string,
  pod1datelementtype: PropTypes.string,
  pod2datelementtype: PropTypes.string,
  pod3datelementtype: PropTypes.string,
  pod4datelementtype: PropTypes.string,
  pod5datelementtype: PropTypes.string,
  pod1datapromotionindex: PropTypes.string,
  pod2datapromotionindex: PropTypes.string,
  pod3datapromotionindex: PropTypes.string,
  pod4datapromotionindex: PropTypes.string,
  pod5datapromotionindex: PropTypes.string,
  pod1datapromotionname: PropTypes.string,
  pod2datapromotionname: PropTypes.string,
  pod3datapromotionname: PropTypes.string,
  pod4datapromotionname: PropTypes.string,
  pod5datapromotionname: PropTypes.string,
  pod6datapromotionname: PropTypes.string,
  pod1datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  pod2datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  pod3datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  pod4datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  pod5datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  pod1datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  pod2datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  pod3datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  pod4datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  pod5datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  pod6datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  pod1datagtmvishasfired8511273_2666: PropTypes.string,
  pod2datagtmvishasfired8511273_2666: PropTypes.string,
  pod3datagtmvishasfired8511273_2666: PropTypes.string,
  pod4datagtmvishasfired8511273_2666: PropTypes.string,
  pod5datagtmvishasfired8511273_2666: PropTypes.string,
  pod6datagtmvishasfired8511273_2666: PropTypes.string,
};
