import PropTypes from "prop-types";
import { CTAButton } from "./CTAButton";
import "./consistency.css";



export const singlemodulebanner = ({
  bodyText,
  link,
  image,
  imagealt,
  video,
  buttonStyle,
  background,
  borderColor,
}) => {

  const CTA_STYLES = {
    'shop-now': {
      text: 'Shop Now',
      icon: 'basket',
      className: 'cta-shop-now',
    },
    'pre-order-now': {
      text: 'Pre-Order Now',
      icon: 'basket',
      className: 'cta-pre-order-now',
    },
    'store-events': {
      text: 'Store Events',
      icon: 'house',
      className: 'cta-store-events',
    },
    'store-locator': {
      text: 'Store Locator',
      icon: 'house',
      className: 'cta-store-locator',
    },
    enter: {
      text: 'Enter',
      icon: 'pencil',
      className: 'cta-enter',
    },
    download: {
      text: 'Download',
      icon: 'pencil',
      className: 'cta-download',
    },
    read: {
      text: 'Read',
      icon: 'glasses',
      className: 'cta-read',
    },
    'sign-up': {
      text: 'Sign Up',
      icon: 'plane',
      className: 'cta-sign-up',
    },
  };
 
  return (
    <>
      <style>
        {`
            .single-module-banner-container {
                margin-bottom: 20px;
                max-width: 1140px;
                padding: 0 20px;
                margin: 0 auto;
            }

            .single-module-banner {
                max-width: 1140px;
                margin: 20px auto;
                display: flex;
                flex-flow: column;
                flex-direction: column;
                height: 100%;
                border: 3px solid ${borderColor};
                border-radius: 8px;
                transition: all 0.3s;
            }

            .single-module-banner .media img {
              transition: all 0.3s;
            }

            .single-module-banner:hover {
                transform: scale(1.1);
            }
            
            .single-module-banner:hover .media img {
                transform: scale(1.1);
            }

            .single-module-banner .media {
                aspect-ratio: 335/188;
                border-radius: 8px;
                overflow: hidden;
            }

            .single-module-banner .media img,
            .single-module-banner .media iframe,
            .single-module-banner .media video {
                object-fit: cover;
                width: 100%;
                height: 100%;
                position: relative;
                z-index: 2;
            }

            .single-module-banner .hero-tile-info {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 20px;
                text-align: center;
                background: ${background};
                position: relative;
                margin-top: -20px;
                padding: 40px 20px 20px 20px;
                flex-grow: 1;
            }

            .single-module-banner .hero-tile-info .brand-logo {
                position: absolute;
                top: -32px;
                height: 40px;
                z-index: 2;
            }

            .single-module-banner .hero-tile-info .brand-logo img,
            .single-module-banner .hero-tile-info .brand-logo svg {
                height: 100%;
                width: auto;
            }

            .single-module-banner .hero-tile-info p {
                color: #000,
                font-size: 14px;
                font-weight: normal;
                text-transform: capitalize;
                font-family: "Nunito Regular", Tahoma, sans-serif;
            }

            @media (min-width: 768px) {
                .single-module-banner {
                    flex-flow: row;
                    align-items: stretch;
                    height: auto;
                }

                .single-module-banner .media {
                    width: 50%;
                    aspect-ratio: 16/9;
                }

                .single-module-banner .hero-tile-info {
                    padding: 20px 20px 20px 40px;
                    margin-top: 0;
                    margin-left: -20px;
                    width: calc(50% + 20px);
                }

            }
        `}
      </style>
      <div class="single-module-banner-container">
        <a href={link} class={`single-module-banner`}>
          <div class="media">
            {video && video !== ' ' &&
              <video autoplay="" loop="" playsinline="" muted=""><source src={video} type="video/mp4" /></video>
            }
            {image && image !== ' ' &&
              <img src={image} alt={imagealt} />
            }
          </div>
          <div class="hero-tile-info">
              <p>{bodyText}</p>
              {buttonStyle && buttonStyle !== "none" && (
                <div className="cta-button">
                  <CTAButton
                    buttonStyle={buttonStyle}
                    as="button"
                  />
                </div>
              )}
          </div>
        </a>
      </div>
    </>
  );
};

singlemodulebanner.propTypes = {
  bodyText: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  imagealt: PropTypes.string,
  video: PropTypes.string,
  buttonStyle: PropTypes.string,
  background: PropTypes.string,
  borderColor: PropTypes.string,
};
