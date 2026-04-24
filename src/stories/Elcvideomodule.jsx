import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

/** Primary UI component for user interaction */
export const ElcVideoModule = ({
  background,
  titlecolor,
  textcolor,
  buttonbackground,
  buttonbackgroundhover,
  buttontextcolor,
  buttontextcolorhover,
  videosrc,
  title,
  blurb,
  buttontext,
  link,
  src,
  isMuted,
}) => {
  const refVideo = useRef(null);
  useEffect(() => {
    if (videosrc && videosrc !== " ") {
      refVideo.current.defaultMuted = true;
      refVideo.current.muted = true;

      refVideo.current.srcObject = src;
      refVideo.current?.load();
    }
  }, [isMuted, src, videosrc]);
  return (
    <>
      <style>
        {`
    .video-panel {
    display:flex;
    max-width: 1140px;
    margin: 20px auto;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
    text-decoration: none;
    background-color: ${background};
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
  }

  @media (min-width: 768px) {
    .video-panel {
      flex-direction: row;
      align-items: stretch;
    }
  }

  .video-panel a {
    text-decoration: none;
  }

  .video-panel a:hover {
    color: #4f4f4f;
  }

  .video-panel-video-container {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 8px;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .video-panel-video-container {
      width: 66.6666%;
    }
  }

  .video-panel-video-container video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
  }

  .video-info {
    width: 100%;
    padding: 20px;
    background-color: ${background};
    color: ${textcolor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 18px;
  }

  @media (min-width: 768px) {
    .video-info {
      width: 33.3333%;
      padding: 20px;
    }
  }

  .video-info .video-title {
    font-size: 22px;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    margin: 0 0 5px;
    color: ${titlecolor};
  }

  .video-panel .hero-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: ${buttonbackground};
    color: ${buttontextcolor};
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    padding: 10px 30px 10px 10px;
    height: 40px;
    box-shadow: 0 0 5px rgba(3, 33, 33, 0.3);
    transition: all 0.3s;
    margin-top: 20px;
    border: none;
  }

  .video-panel .hero-button:hover {
    background-color: ${buttonbackgroundhover};
    scale: 1.05;
    box-shadow: 0 0 18px rgba(3, 33, 33, 0.3);
    color: ${buttontextcolorhover};
  }

  .video-panel .hero-button .basket-icon {
    transition: all 0.3s;
    transform: rotate(15deg);
    margin-left: 5px;
  }

  .video-panel .hero-button:hover .basket-icon {
    transform: rotate(-10deg);
  }

  .video-panel .hero-button .star-start {
    position: relative;
    top: -3px;
  }

  .video-panel .hero-button .swoosh-container {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 5px;
    width: 25px;
  }

  .video-panel .hero-button .swoosh {
    display: block;
    width: 0;
    height: 3px;
    margin-top: -3px;
    margin-left: -2px;
    transform: rotate(15deg);
    background-color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s;
  }

  .video-panel .hero-button:hover .swoosh {
    width: 7px;
  }

  .video-panel .hero-button .star-end {
    position: relative;
    bottom: -5px;
    transition: all 0.3s;
  }

  .video-panel .hero-button:hover .star-end {
    scale: 1.1;
    transform: rotate(30deg);
  }
        `}
      </style>
      <div class="video-panel">
        <div class="video-panel-video-container">
          <video ref={refVideo} autoPlay loop playsInline>
            <source src={videosrc} type="video/mp4" />
          </video>
        </div>
        <a href={link} class="video-info">
          <div class="video-title">{title}</div>
          <p>{blurb}</p>
          <button href={link} class="hero-button">
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
            {buttontext}
            <span class="basket-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M18.8708 3.71858C19.1543 5.06637 19.1537 6.62352 18.8501 8.05655C17.8056 12.9862 13.7681 16.3533 9.20154 15.7151C6.82538 15.4812 5.33213 13.907 4.65353 12.4455C2.93071 13.3682 2.11896 14.5139 2.03735 14.6164C1.73957 15.0325 1.17509 15.1525 0.730373 14.8486C0.314311 14.5508 0.194334 13.9863 0.498193 13.5416C1.53219 12.0537 5.51147 8.25502 12.7339 9.78532C12.9632 9.8339 13.235 9.68186 13.2897 9.42392C13.3383 9.19463 13.1575 8.91677 12.9283 8.86818C9.17373 8.07267 6.30012 8.63175 4.1865 9.56149C4.20035 9.35479 4.24285 9.15417 4.28536 8.95354C4.92906 5.91552 7.91612 3.97296 10.9541 4.61666L13.247 5.10247C15.0526 5.48504 16.8293 4.87324 18.0457 3.51382C18.3192 3.2124 18.7717 3.33822 18.8708 3.71858Z"
                  fill="white"
                />
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
        </a>
      </div>
    </>
  );
};

ElcVideoModule.propTypes = {
  /** Video module contents */
  videosrc: PropTypes.string,
  background: PropTypes.string,
  titlecolor: PropTypes.string,
  textcolor: PropTypes.string,
  buttonbackground: PropTypes.string,
  buttonbackgroundhover: PropTypes.string,
  buttontextcolor: PropTypes.string,
  buttontextcolorhover: PropTypes.string,
  title: PropTypes.string,
  blurb: PropTypes.string,
  buttontext: PropTypes.string,
  link: PropTypes.string,
};
