
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

export const HubsMediaBanner = ({
  link,
  video,
  image,
  imagealt,
  buttonStyle,
  buttonLink,
  ctaposition,
  buttonPosition,
  backgroundColor,

  // Lozenge
  lozengeTitle,
  lozengeBackgroundColor,
  lozengeTextColor,

  // Header logo
  headerLogo,
  headerLogoAlt,
  headerLogoMaxHeight,
  headerLogoBackgroundColor,

  // Blurb
  blurbText,
  blurbTextColor,
  blurbBackgroundColor,
}) => {
  const youtubeVideo = getYouTubeEmbedUrl(video);

  const showButton = buttonStyle && buttonStyle !== "none";
  const buttonBelow = buttonPosition === "below";

  const renderCTAButton = () => (
    <div
      className="cta-button"
      style={{
        marginLeft: ctaposition === "right" ? "auto" : "0",
        marginRight: ctaposition === "left" ? "auto" : "0",
      }}
    >
      <CTAButton
        buttonStyle={buttonStyle}
        href={buttonLink || link}
        as={buttonBelow ? "a" : "button"}
      />
    </div>
  );

  return (
    <>
      <style>
        {`
          .media-module-banner-wrapper-outer {
            width: 100%;
            padding-top: 30px;
          }

          .media-module-banner-wrapper {
            margin: 0 auto;
            max-width: 1140px;
            padding: 20px;
            position: relative;
          }

          /* HEADER / LOZENGE */

          .media-module-banner-header {
            width: 100%;
            padding: 0 20px;
            max-width: 1140px;
            margin: 0 auto;
            text-align: center;
          }

          /* LOGO BACKGROUND */

          .media-module-banner-logo-wrapper {
            width: 100%;
            padding: 40px;
            text-align: center;
            box-sizing: border-box;
          }

          .media-module-banner-header-logo {
            display: block;
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 300px;
            object-fit: contain;
            margin: 0 auto;
          }

          /* MEDIA */

          .media-module-banner {
            position: relative;
            margin: 0 auto;
            width: 100%;
            text-align: center;
            overflow: hidden;
            border-radius: 8px;
            display: block;
          }

          .media-module-banner video,
          .media-module-banner img,
          .media-module-banner iframe {
            display: block;
            width: 100%;
            height: auto;
            object-fit: cover;
          }

          .media-module-banner iframe {
            aspect-ratio: 16 / 9;
            height: auto;
            border: 0;
          }

          /* OVERLAY CTA */

          .media-module-banner-content {
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 10;
            width: 100%;
            padding: 20px 40px;
            display: flex;
            justify-content: center;
          }

          .media-module-banner-content .cta-button {
            margin-top: 0;
            margin-bottom: 0;
          }

          /* CTA BELOW BLURB */

          .media-module-banner-button-below {
            width: 100%;
            display: flex;
            padding: 0 20px 20px;
            box-sizing: border-box;
            justify-content: center;
          }

          .media-module-banner-button-below .cta-button {
            margin-top: 0;
            margin-bottom: 0;
          }

          /* BLURB */

          .media-module-banner-blurb {
            width: 100%;
            padding: 20px;
            text-align: center;
            font-size: 16px;
            line-height: 1.6;
          }

          .media-module-banner-blurb p {
            margin: 0;
          }

          @media (max-width: 767px) {
            .media-module-banner-header {
              padding: 0 10px;
            }

            .media-module-banner-logo-wrapper {
              padding: 20px;
            }

            .media-module-banner-content {
              padding: 15px;
            }

            .media-module-banner-blurb {
              padding: 15px;
            }

            .media-module-banner-button-below {
              padding: 0 15px 15px;
            }
          }
        `}
      </style>

      <div
        className="media-module-banner-wrapper-outer christmas"
        style={{
          backgroundColor: backgroundColor,

          "--shop-by-category-module-bg": "#fff",
          "--shop-by-category-lozenge-bg":
            lozengeBackgroundColor || "#ffffff",
          "--shop-by-category-lozenge-text-color":
            lozengeTextColor || "#000000",
          "--shop-by-category-lozenge-title":
            lozengeTitle || "",
        }}
      >

        {/* HEADER: LOZENGE OR LOGO */}

        {(headerLogo || lozengeTitle) && (
          <div className="consistent-hub-shop-by-category-area-header media-module-banner-header">

            {headerLogo ? (
              <div
                className="media-module-banner-logo-wrapper"
                style={{
                  backgroundColor:
                    headerLogoBackgroundColor || "transparent",
                }}
              >
                <img
                  className="media-module-banner-header-logo"
                  src={headerLogo}
                  alt={headerLogoAlt || ""}
                  style={{
                    maxHeight: `${Math.min(
                      Math.max(headerLogoMaxHeight || 300, 1),
                      300
                    )}px`,
                  }}
                />
              </div>
            ) : (
              <div className="consistent-hub-shop-by-category-area-header-title">
                {lozengeTitle}
              </div>
            )}

          </div>
        )}

        <div className="media-module-banner-wrapper">

          {/* MEDIA BLOCK */}

          <a
            href={link}
            className="media-module-banner"
          >

            {youtubeVideo ? (
              <iframe
                src={youtubeVideo}
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : video && video !== " " ? (
              <video
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src={video}
                  type="video/mp4"
                />
              </video>
            ) : image && image !== " " ? (
              <img
                src={image}
                alt={imagealt}
              />
            ) : null}

            {/* OVERLAY CTA */}

            {showButton && !buttonBelow && (
              <div className="media-module-banner-content">
                {renderCTAButton()}
              </div>
            )}

          </a>

          {/* BLURB BELOW MEDIA */}

          {blurbText && (
            <div
              className="media-module-banner-blurb"
              style={{
                color: blurbTextColor || "#000000",
                backgroundColor:
                  blurbBackgroundColor || "transparent",
              }}
            >
              <p>{blurbText}</p>
            </div>
          )}

          {/* CTA BELOW BLURB */}

          {showButton && buttonBelow && (
            <div className="media-module-banner-button-below">
              {renderCTAButton()}
            </div>
          )}

        </div>

      </div>
    </>
  );
};

HubsMediaBanner.propTypes = {
  link: PropTypes.string,
  video: PropTypes.string,
  image: PropTypes.string,
  imagealt: PropTypes.string,

  buttonStyle: PropTypes.string,
  buttonLink: PropTypes.string,
  ctaposition: PropTypes.string,
  buttonPosition: PropTypes.oneOf(["overlay", "below"]),

  backgroundColor: PropTypes.string,

  // Lozenge
  lozengeTitle: PropTypes.string,
  lozengeBackgroundColor: PropTypes.string,
  lozengeTextColor: PropTypes.string,

  // Logo
  headerLogo: PropTypes.string,
  headerLogoAlt: PropTypes.string,
  headerLogoMaxHeight: PropTypes.number,
  headerLogoBackgroundColor: PropTypes.string,

  // Blurb
  blurbText: PropTypes.string,
  blurbTextColor: PropTypes.string,
  blurbBackgroundColor: PropTypes.string,
};

HubsMediaBanner.defaultProps = {
  headerLogoMaxHeight: 300,
  headerLogoBackgroundColor: "transparent",
  lozengeBackgroundColor: "#ffffff",
  lozengeTextColor: "#000000",
  blurbTextColor: "#000000",
  blurbBackgroundColor: "transparent",
  buttonPosition: "overlay",
};
