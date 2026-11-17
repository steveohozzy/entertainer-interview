
import PropTypes from "prop-types";
import { CTAButton } from "./CTAButton";

const getYouTubeEmbedUrl = (url) => {
  if (!url || typeof url !== "string") return null;

  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );

  return match
    ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=1&loop=1&playlist=${match[1]}&controls=0&rel=0&playsinline=1`
    : null;
};

export const ChristmasMediaBanner = ({
  modulebackgroundcolor,
  id,
  link,
  video,
  image,
  imagealt,
  buttonStyle,
  buttonLink,
  linkTarget,
  ctaposition,
  dataElementType,
  dataPromotionIndex,
  dataPromotionName,
}) => {
  const youtubeVideo = getYouTubeEmbedUrl(video);

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
          .media-module-banner img,
          .media-module-banner iframe {
            display: block;
            width: 100%;
            height: auto;
            object-fit: cover;
          }

          .media-module-banner iframe {
            aspect-ratio: 16 / 9;
            border: 0;
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

      <div
        className="media-module-banner-wrapper-outer"
        id={id}
        style={{ backgroundColor: modulebackgroundcolor }}
      >
        <div className="media-module-banner-wrapper">

          <a
            href={link}
            className="media-module-banner"
            target={linkTarget}
            {...(
              dataElementType &&
              dataPromotionIndex &&
              dataPromotionName
                ? {
                    "data-element-type": dataElementType,
                    "data-promotion-index": dataPromotionIndex,
                    "data-promotion-name": dataPromotionName,
                  }
                : {}
            )}
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
  id: PropTypes.string,
  link: PropTypes.string,
  video: PropTypes.string,
  image: PropTypes.string,
  imagealt: PropTypes.string,

  buttonStyle: PropTypes.string,
  buttonLink: PropTypes.string,
  linkTarget: PropTypes.string,

  dataElementType: PropTypes.string,
  dataPromotionIndex: PropTypes.string,
  dataPromotionName: PropTypes.string,

  ctaposition: PropTypes.string,
};
