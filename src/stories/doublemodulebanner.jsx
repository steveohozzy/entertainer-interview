import PropTypes from "prop-types";
import { CTAButton } from "./CTAButton";
import "./consistency.css";

export const doublemodulebanner = ({
  bordercolor,
  backgroundcolor,
  panel1video,
  panel1image,
  panel1imagealt,
  panel1bodyText,
  panel1link,
  panel1buttonStyle,

  panel2video,
  panel2image,
  panel2imagealt,
  panel2bodyText,
  panel2link,
  panel2buttonStyle,
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

const panel1cta =
  panel1buttonStyle && panel1buttonStyle !== 'none'
    ? CTA_STYLES[panel1buttonStyle]
    : null;

const panel2cta =
  panel2buttonStyle && panel2buttonStyle !== 'none'
    ? CTA_STYLES[panel2buttonStyle]
    : null;

return (
<>

<style>
  {`

      .double-module-banner {
          max-width: 1140px;
          padding: 0 20px;
          gap: 20px;
          margin: 20px auto;
          display: flex;
          flex-flow: column;
          flex-direction: column;
          height: 100%;
          transition: all 0.3s;
      }

      .double-module-banner-tile {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 0 auto;
        position: relative;
        max-width: 600px;
        border-radius: 8px;
        overflow: hidden;
        background: var(--double-story-banner-tile-bg);
        border: 3px solid var(--double-story-banner-tile-border-color);
        text-decoration: none;
        transition: all 0.3s;
      }

      .double-module-banner-tile .media img,
      .double-module-banner-tile .media video {
        transition: all 0.3s;
      }

      .double-module-banner-tile:hover {
        box-shadow: 0 0 18px rgba(3, 33, 33, 0.3);
        transform: scale(1.05);
      }

      
      .double-module-banner-tile:hover .media img,
      .double-module-banner-tile:hover .media video {
          transform: scale(1.1);
      }

      .double-module-banner-tile .media {
          aspect-ratio: 335/188;
          border-radius: 6px;
          overflow: hidden;
      }

      .double-module-banner-tile .media img,
      .double-module-banner-tile .media iframe,
      .double-module-banner-tile .media video {
          object-fit: cover;
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 2;
      }

      .double-module-banner-tile .hero-tile-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          text-align: center;
          position: relative;
          margin-top: -20px;
          padding: 40px 20px 20px 20px;
          flex-grow: 1;
      }

      .double-module-banner-tile .hero-tile-info p {
          color: #000,
          font-size: 14px;
          font-weight: normal;
          text-transform: capitalize;
          font-family: "Nunito Regular", Tahoma, sans-serif;
      }

      @media (min-width: 768px) {
          .double-module-banner {
              flex-flow: row;
          }
          .double-module-banner-tile {
              height: auto;
              width: calc(50% - 10px);
          }

      }
  `}
</style>

<div class="double-module-banner">
    <a href={panel1link} class={`double-module-banner-tile`} style={{
      '--double-story-banner-tile-bg': backgroundcolor || '#fff',
      '--double-story-banner-tile-border-color': bordercolor || 'transparent',
    }} >
        <div class="media">
          {panel1video && panel1video !== ' ' &&
            <video autoplay="" loop="" playsinline="" muted=""><source src={panel1video} type="video/mp4" /></video>
          }
          {panel1image && panel1image !== ' ' &&
            <img src={panel1image} alt={panel1imagealt} />
          }
        </div>
      <div class="hero-tile-info">
          <p>{panel1bodyText}</p>
          {panel1cta && (
            <div className="cta-button">
              <CTAButton
                buttonStyle={panel1buttonStyle}
                href={panel1link}
                as="button"
              />
            </div>
          )}
      </div>
    </a>

    <a href={panel2link} class={`double-module-banner-tile`}
      style={{
        '--double-story-banner-tile-bg': backgroundcolor || '#fff',
        '--double-story-banner-tile-border-color': bordercolor || 'transparent',
      }}
    >
        <div class="media">
          {panel2video && panel2video !== ' ' &&
            <video autoplay="" loop="" playsinline="" muted=""><source src={panel2video} type="video/mp4" /></video>
          }
          {panel2image && panel2image !== ' ' &&
            <img src={panel2image} alt={panel2imagealt} />
          }
        </div>
      <div class="hero-tile-info">
          <p>{panel2bodyText}</p>
          {panel2cta && (
            <div className="cta-button">
              <CTAButton
                buttonStyle={panel2buttonStyle}
                href={panel2link}
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

doublemodulebanner.propTypes = {
bordercolor:PropTypes.string,
backgroundcolor:PropTypes.string,
panel1video:PropTypes.string,
panel1image:PropTypes.string,
panel1imagealt:PropTypes.string,
panel1bodyText:PropTypes.string,
panel1link:PropTypes.string,
panel1buttonStyle:PropTypes.string,

panel2video:PropTypes.string,
panel2image:PropTypes.string,
panel2imagealt:PropTypes.string,
panel2bodyText:PropTypes.string,
panel2link:PropTypes.string,
panel2buttonStyle:PropTypes.string,
};