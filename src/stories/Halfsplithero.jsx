import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

/** Primary UI component for user interaction */
export const HalfSplitHero = ({
  image,
  imagealt,
  videosrc,
  background,
  textColor,
  logo,
  logoalt,
  headline,
  tagline,
  link,
  linktext,
  dataElementType,
  datapromotionindex,
  datapromotionname,
  src,
  isMuted
}) => {
  const refVideo = useRef(null);

  useEffect(() => {
    if (videosrc && videosrc !== ' ') {
        refVideo.current.defaultMuted = true;
        refVideo.current.muted = true;

        refVideo.current.srcObject = src;
        refVideo.current?.load();
    }
    }, [isMuted, src, videosrc]);

  return (
    <>
      <style>{`
    .hero-card-container {
        padding: 0 20px 0px 20px;
        background-color: #dbe3ff;
        height: 100%;
    }

    .hero-card {
        max-width: 1400px;
        margin: 0 auto;
        display: flex;
        flex-flow: column;
        flex-direction: column;
        height: 100%;
    }

    .hero-card .media {
        aspect-ratio: 335/188;
        border-radius: 8px;
        overflow: hidden;
    }

    .hero-card .media img,
    .hero-card .media iframe,
    .hero-card .media video {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 2;
    }

    .hero-card .hero-tile-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: ${background};
        border-radius: 8px;
        position: relative;
        margin-top: -20px;
        padding: 40px 20px 20px 20px;
        flex-grow: 1;
    }

    .hero-card .hero-tile-info .brand-logo {
        position: absolute;
        top: -32px;
        height: 40px;
        z-index: 2;
    }

    .hero-card .hero-tile-info .brand-logo img,
    .hero-card .hero-tile-info .brand-logo svg {
        height: 100%;
        width: auto;
    }

    .hero-card .hero-tile-info h2 {
        font-size: 20px;
        font-family: "Nunito Bold","Tahoma Bold",sans-serif;
        font-weight: bold;
        color: ${textColor || '#fff'};
        margin: 0 0 20px;
        line-height: 24px;
    }

    .hero-card .hero-tile-info .hero-blurb {
        color: ${textColor || '#fff'};
        font-size: 14px;
        font-weight: 200;
        margin-bottom: 20px;
    }

    .hero-card .flickity-viewport {
        aspect-ratio: 335/307;
    }

    .hero-card .hero-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        background-color: #009E44;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        padding: 10px 30px 10px 10px;
        height: 40px;
        box-shadow: 0 0 5px rgba(3,33,33,.3);
        border: 3px solid #DBE3FF;
        transition: all 0.3s;
    }

    .hero-card .hero-button:hover {
        background-color: #AFCB17;
        scale: 1.05;
        box-shadow: 0 0 18px rgba(3,33,33,.3);
        color: #fff;
    }

    .hero-card .hero-button .basket-icon {
        transition: all 0.3s;
        transform: rotate(15deg);
        margin-left: 5px;
    }

    .hero-card .hero-button:hover .basket-icon {
        transform: rotate(-10deg)
    }

    .hero-card .hero-button .star-start {
        position: relative;
        top: -3px;
    }

    .hero-card .hero-button .swoosh-container {
        display: flex;
        align-items: center;
        justify-content: end;
        margin-right: 5px;
        width: 25px;
    }

    .hero-card .hero-button .swoosh {
        display: block;
        width: 0;
        height: 3px;
        margin-top: -3px;
        margin-left: -2px;
        transform: rotate(15deg);
        background-color: rgba(255, 255, 255, 0.7);
        transition: all 0.3s;
    }

    .hero-card .hero-button:hover .swoosh {
        width: 7px;
    }

    .hero-card .hero-button .star-end {
        position: relative;
        bottom: -5px;
        transition: all 0.3s;
    }

    .hero-card .hero-button:hover .star-end {
        scale: 1.1;
        transform: rotate(30deg);
    }

    .hero-card .hero-logo {
        width: auto;
        max-height: 80px;
    }

    @media (min-width: 768px) {
        .hero-card {
            flex-flow: row-reverse;
            align-items: stretch;
            height: auto;
        }

        .hero-card .media {
            width: 50%;
            aspect-ratio: 16/9;
        }

        .hero-card .hero-tile-info {
            padding: 20px 30px 20px 20px;
            margin-top: 0;
            margin-right: -20px;
            width: calc(50% + 20px);
        }

        .hero-card .hero-tile-info .brand-logo {
            position: relative;
            top: 0;
            margin-bottom: 20px;
            height: 90px;
        }

        .hero-card .hero-tile-info h2 {
            font-size: 24px;
            margin: 0;
        }

        .hero-card .hero-tile-info .hero-blurb {
            display: block;
            margin: 12px 0;
        }
    }
 `}</style>
      <div class="hero-card-container">
        <a href={link}
             data-element-type={dataElementType} data-promotion-index={datapromotionindex} data-promotion-name={datapromotionname}
             class="hero-card">
          <div class="media">
            {image && image !== ' ' &&
              <img
                src={image}
                alt={imagealt || 'Hero image'}
              />
            }
            {videosrc && videosrc !== ' ' &&
              <video ref={refVideo} autoPlay loop playsInline>
                <source
                  src={videosrc}
                  type="video/mp4"
                />
              </video>
          }
          </div>
          <div class="hero-tile-info" style={{background : background, color: textColor}}>
            {logo && logo !== ' ' &&
              <img
                src={logo}
                alt={logoalt}
                class="hero-logo"
              />
            }
            {headline && headline !== ' ' &&
              <h2 style={{color: textColor}}>{headline}</h2>
            }
            {tagline && tagline !== ' ' &&
              <div class="hero-blurb" style={{color: textColor}}>
                {tagline}
              </div>
            }
            <button
              href={link}
              class="hero-button"
              data-element-type={dataElementType} data-promotion-index={datapromotionindex} data-promotion-name={datapromotionname}
            >
              <span class="swoosh-container">
                <span class="star-start">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                      fill-opacity="0.5"
                    ></path>
                  </svg>
                </span>
                <span class="swoosh">&nbsp;</span>
              </span>
              {linktext}
              <span class="basket-icon">
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"></path>
                </svg>
              </span>
              <span class="star-end">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                    fill-opacity="0.5"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </a>
      </div>
    </>
  );
};

HalfSplitHero.propTypes = {
  /** contents */
  image: PropTypes.string,
  imagealt: PropTypes.string,
  videosrc: PropTypes.string,
  background: PropTypes.string,
  textColor: PropTypes.string,
  logo: PropTypes.string,
  logoalt: PropTypes.string,
  headline: PropTypes.string,
  tagline: PropTypes.string,
  link: PropTypes.string,
  linktext: PropTypes.string,
  dataElementType: PropTypes.string,
  datapromotionindex: PropTypes.string,
  datapromotionname: PropTypes.string,
};
