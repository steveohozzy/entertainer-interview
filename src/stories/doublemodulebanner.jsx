
import PropTypes from "prop-types";
import { CTAButton } from "./CTAButton";
import "./consistency.css";

const getYouTubeEmbedUrl = (url) => {
  if (!url || typeof url !== "string") return null;

  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );

  return match
    ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=1&loop=1&playlist=${match[1]}&controls=0&rel=0&playsinline=1`
    : null;
};

export const doublemodulebanner = ({
  bordercolor,
  backgroundcolor,
  panel1video,
  panel1image,
  panel1imagealt,
  panel1bodyText,
  panel1bodyTextColor,
  panel1link,
  panel1buttonStyle,

  panel2video,
  panel2image,
  panel2imagealt,
  panel2bodyText,
  panel2bodyTextColor,
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
    play: {
      text: 'Play',
      icon: 'play',
      className: 'cta-play',
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

  const panel1youtube = getYouTubeEmbedUrl(panel1video);
  const panel2youtube = getYouTubeEmbedUrl(panel2video);

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
          .double-module-banner-tile .media video,
          .double-module-banner-tile .media iframe {
            transition: all 0.3s;
          }

          .double-module-banner-tile:hover {
            box-shadow: 0 0 18px rgba(3, 33, 33, 0.3);
            transform: scale(1.05);
          }

          .double-module-banner-tile:hover .media img,
          .double-module-banner-tile:hover .media video,
          .double-module-banner-tile:hover .media iframe {
              transform: scale(1.1);
          }

          .double-module-banner-tile .media {
    aspect-ratio: 335 / 188;
    width: 100%;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    flex-shrink: 0;
}

.double-module-banner-tile .media img,
.double-module-banner-tile .media video,
.double-module-banner-tile .media iframe {
    transition: all 0.3s;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    object-fit: cover;
}

.double-module-banner-tile .media iframe {
    border: 0;
    display: block;
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
              color: #000;
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

        {/* PANEL 1 */}

        <a
          href={panel1link}
          class={`double-module-banner-tile`}
          style={{
            '--double-story-banner-tile-bg': backgroundcolor || '#fff',
            '--double-story-banner-tile-border-color': bordercolor || 'transparent',
          }}
        >
          <div class="media">

            {panel1youtube ? (
              <iframe
                src={panel1youtube}
                title="Panel 1 YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : panel1video && panel1video !== ' ' ? (
              <video
                autoPlay
                loop
                playsInline
                muted
              >
                <source src={panel1video} type="video/mp4" />
              </video>
            ) : panel1image && panel1image !== ' ' ? (
              <img src={panel1image} alt={panel1imagealt} />
            ) : null}

          </div>

          <div class="hero-tile-info">
            <p style={{ color: panel1bodyTextColor || '#000000' }}>
              {panel1bodyText}
            </p>

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

        {/* PANEL 2 */}

        <a
          href={panel2link}
          class={`double-module-banner-tile`}
          style={{
            '--double-story-banner-tile-bg': backgroundcolor || '#fff',
            '--double-story-banner-tile-border-color': bordercolor || 'transparent',
          }}
        >
          <div class="media">

            {panel2youtube ? (
              <iframe
                src={panel2youtube}
                title="Panel 2 YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : panel2video && panel2video !== ' ' ? (
              <video
                autoPlay
                loop
                playsInline
                muted
              >
                <source src={panel2video} type="video/mp4" />
              </video>
            ) : panel2image && panel2image !== ' ' ? (
              <img src={panel2image} alt={panel2imagealt} />
            ) : null}

          </div>

          <div class="hero-tile-info">
            <p style={{ color: panel2bodyTextColor || '#000000' }}>
              {panel2bodyText}
            </p>

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
  bordercolor: PropTypes.string,
  backgroundcolor: PropTypes.string,

  panel1video: PropTypes.string,
  panel1image: PropTypes.string,
  panel1imagealt: PropTypes.string,
  panel1bodyText: PropTypes.string,
  panel1bodyTextColor: PropTypes.string,
  panel1link: PropTypes.string,
  panel1buttonStyle: PropTypes.string,

  panel2video: PropTypes.string,
  panel2image: PropTypes.string,
  panel2imagealt: PropTypes.string,
  panel2bodyText: PropTypes.string,
  panel2bodyTextColor: PropTypes.string,
  panel2link: PropTypes.string,
  panel2buttonStyle: PropTypes.string,
};
