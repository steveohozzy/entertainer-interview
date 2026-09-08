import PropTypes from "prop-types";
import { CTAButton } from "./CTAButton";

export const ChristmasMediaBanner = ({
  modulebackgroundcolor,
  link,
  video,
  image,
  imagealt,
  buttonStyle,
  buttonLink,
  linkTarget,
  ctaposition,
}) => {

  return (
    <>
      <style>
        {`
          .media-module-banner-wrapper {
            margin: 0 auto;
            max-width: 1440px;
            padding: 20px;
            position: relative;
          }

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
          .media-module-banner img {
            display: block;
            width: 100%;
            height: auto;
            object-fit: cover;
          }

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
            margin: 0;
          }
        `}
      </style>
      <div className="media-module-banner-wrapper-outer" style={{ backgroundColor: modulebackgroundcolor }}>
      <div className="media-module-banner-wrapper">

        <a
          href={link}
          className="media-module-banner"
          target={linkTarget}
        >

          {image && image !== " " && (
            <img
              src={image}
              alt={imagealt}
            />
          )}

          {video && video !== " " && (
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
          )}

          {buttonStyle && buttonStyle !== "none" && (
            <div className="media-module-banner-content">

              <div
                className="cta-button"
                style={{
                  marginLeft:
                    ctaposition === "right"
                      ? "auto"
                      : "0",

                  marginRight:
                    ctaposition === "left"
                      ? "auto"
                      : "0",
                }}
              >

                <CTAButton
                  buttonStyle={buttonStyle}
                  href={buttonLink || link}
                  as="button"
                />

              </div>

            </div>
          )}

        </a>

      </div>
      </div>
    </>
  );
};

ChristmasMediaBanner.propTypes = {
  modulebackgroundcolor: PropTypes.string,
  link: PropTypes.string,
  video: PropTypes.string,
  image: PropTypes.string,
  imagealt: PropTypes.string,

  buttonStyle: PropTypes.string,
  buttonLink: PropTypes.string,
  linkTarget: PropTypes.string,

  ctaposition: PropTypes.string,
};