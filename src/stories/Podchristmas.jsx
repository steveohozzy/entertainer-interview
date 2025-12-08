import PropTypes from 'prop-types';

import './pod.css';

/** Primary UI component for user interaction */
export const Podchristmas = ({
  image,
  imagealt,
  backgroundcolor,
  textcolor,
  tagline,
  link,
  linktext,
  buttonbackgroundcolor,
  buttontextcolor,
  logoimage,
  logoimagealt,
  logoheight,
  position,
  dataElementType,
  dataPromotionName,
  dataPromotionIndex,
}) => {
  return (
    <>
    <style>
      {`
      #storybook-root .offer-pods .carousel-cell {
    width: 100%;
  }
  .offer-pods {
    padding: 0 10px 20px;
    background-color: #dbe3ff;
  }

  .offer-pods .carousel {
    padding: 0 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .offer-pods .carousel .item {
    padding: 0;
  }

  .offer-pods .carousel-cell {
    width: 78%;
    padding-top: 10px;
    aspect-ratio: 241/421;
  }

  .offer-pods img {
    width: 100%;
    margin: 0 0 10px !important;
  }

  .offer-pods a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    border-radius: 8px;
    padding: 0 0 20px;
    background-color: #fff;
    color: #00548b;
    text-decoration: none;
    font-size: 18px;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    font-weight: bold;
    color: #00548b;
    margin: 0 20px 0 0;
    box-shadow: 0 0 5px rgba(3, 33, 33, 0.05);
    letter-spacing: 0.5px;
    transition: all 0.3s;
    overflow: hidden;
    height: 100%;
  }

  .offer-pods a span {
    padding: 0 10px;
    line-height: 1.2;
  }

  .offer-pods button span {
    padding: 0;
    line-height: 0;
  }

  .offer-pods a:hover {
    box-shadow: 0 0 18px rgba(33, 33, 33, 0.15);
    transform: translateY(-5px);
  }

  .offer-pods a .pod-image-container + span {
    margin: 20px;
  }

  .offer-pods .flickity-button,
  .offer-pods .flickity-page-dots {
    display: none;
  }

  .offer-pods .flickity-viewport {
    --mask: linear-gradient(
        to right,
        rgba(0, 0, 0, 1) 0,
        rgba(0, 0, 0, 1) 92%,
        rgba(0, 0, 0, 0) 100%,
        rgba(0, 0, 0, 0) 0
      )
      100% 98% / 100% 100% repeat-x;
    mask: var(--mask);
  }

  @media (min-width: 768px) {
    .offer-pods .carousel {
      padding: 0 10px;
    }
    .offer-pods .carousel-cell {
      width: 37%;
      aspect-ratio: 429/650;
    }

    .offer-pods a {
      font-size: 20px;
    }
  }

  @media (min-width: 1024px) {
    .offer-pods a {
      font-size: 22px;
    }
  }

  .offer-pods .hero-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    margin-bottom: 30px;
    background-color: #009e44;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    padding: 10px 10px 10px 0px;
    height: 40px;
    box-shadow: 0 0 5px rgba(3, 33, 33, 0.6);
    border: 3px solid #ffffff;
    transition: all 0.3s;
  }

  .offer-pods .hero-button:hover {
    background-color: #afcb17;
    scale: 1.05;
    box-shadow: 0 0 18px rgba(3, 33, 33, 0.3);
    color: #fff;
  }

  .offer-pods .hero-button .basket-icon {
    transition: all 0.3s;
    transform: rotate(15deg);
    margin-left: 5px;
  }

  .offer-pods .hero-button:hover .basket-icon {
    transform: rotate(-10deg);
  }

  .offer-pods .hero-button .star-start {
    position: relative;
    top: -3px;
  }

  .offer-pods .hero-button .swoosh-container {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 5px;
    width: 25px;
  }

  .offer-pods .hero-button .swoosh {
    display: block;
    width: 0;
    height: 3px;
    margin-top: 0;
    margin-left: -2px;
    transform: rotate(15deg);
    background-color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s;
  }

  .offer-pods .hero-button:hover .swoosh {
    width: 7px;
  }

  .offer-pods .hero-button .star-end {
    position: relative;
    bottom: -5px;
    transition: all 0.3s;
  }

  .offer-pods .hero-button:hover .star-end {
    scale: 1.1;
    transform: rotate(30deg);
  }

  .pod-image-container {
    position: relative;
    width: 100%;
  }

  .pod .logo {
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pod .logo.left {
    justify-content: flex-start;
    padding-left: 10px;
  }

  .pod .logo.right {
    justify-content: flex-end;
    padding-right: 10px;
  }

  .pod .logo img {
    width: auto;
  }

  .pod.has-tagline .hero-button {
    margin-top: 20px;
  }

  .pod.has-tagline img {
    margin: 0 0 20px !important;
  }

  .pod.has-tagline .pod-image-container + span {
    margin: 0 20px;
  }

  .lightrope {
    text-align: center;
    white-space: nowrap;
    margin: -30px 0 0 0;
    padding: 0;
    pointer-events: none;
    width: 100%;
  }
  .lightrope li {
    position: relative;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    list-style: none;
    margin: 0;
    padding: 0;
    display: block;
    width: 12px;
    height: 28px;
    border-radius: 50%;
    margin: 20px;
    display: inline-block;
    background: #AAFF00;
    box-shadow: 0px 4.6666666667px 24px 3px #AAFF00;
    -webkit-animation-name: flash-1;
    animation-name: flash-1;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
  }
  .lightrope li:nth-child(2n + 1) {
    background: #00FFFF;
    box-shadow: 0px 4.6666666667px 24px 3px rgba(0, 255, 255, 0.5);
    -webkit-animation-name: flash-2;
    animation-name: flash-2;
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
  }
  .lightrope li:nth-child(4n + 2) {
    background: #ff1414;
    box-shadow: 0px 4.6666666667px 24px 3px #ff1414;
    -webkit-animation-name: flash-3;
    animation-name: flash-3;
    -webkit-animation-duration: 1.1s;
    animation-duration: 1.1s;
  }
  .lightrope li:nth-child(odd) {
    -webkit-animation-duration: 1.8s;
    animation-duration: 1.8s;
  }
  .lightrope li:nth-child(3n + 1) {
    -webkit-animation-duration: 1.4s;
    animation-duration: 1.4s;
  }
  .lightrope li:before {
    content: "";
    position: absolute;
    background: #222;
    width: 10px;
    height: 9.3333333333px;
    border-radius: 3px;
    top: -4.6666666667px;
    left: 1px;
  }
  .lightrope li:after {
    content: "";
    top: -14px;
    left: 9px;
    position: absolute;
    width: 52px;
    height: 18.6666666667px;
    border-bottom: solid #222 2px;
    border-radius: 50%;
  }
  .lightrope li:last-child:after {
    content: none;
  }
  .lightrope li:first-child {
    margin-left: -40px;
  }

  @-webkit-keyframes flash-1 {
    0%,
    100% {
      background: #AAFF00;
      box-shadow: 0px 4.6666666667px 24px 3px #AAFF00;
    }
    50% {
      background: rgba(175, 225, 175, 0.4);
      box-shadow: 0px 4.6666666667px 24px 3px rgba(175, 225, 175, 0.2);
    }
  }

  @keyframes flash-1 {
    0%,
    100% {
      background: #AAFF00;
      box-shadow: 0px 4.6666666667px 24px 3px #AAFF00;
    }
    50% {
      background: rgba(175, 225, 175, 0.4);
      box-shadow: 0px 4.6666666667px 24px 3px rgba(175, 225, 175, 0.2);
    }
  }
  @-webkit-keyframes flash-2 {
    0%,
    100% {
      background: #00FFFF;
      box-shadow: 0px 4.6666666667px 24px 3px #00FFFF;
    }
    50% {
      background: rgba(0, 255, 255, 0.4);
      box-shadow: 0px 4.6666666667px 24px 3px rgba(21, 148, 148, 0.5);
    }
  }
  @keyframes flash-2 {
    0%,
    100% {
      background: #00FFFF;
      box-shadow: 0px 4.6666666667px 24px 3px #00FFFF;
    }
    50% {
      background: rgba(0, 255, 255, 0.6);
      box-shadow: 0px 4.6666666667px 24px 3px rgba(21, 148, 148, 0.6);
    }
  }
  @-webkit-keyframes flash-3 {
    0%,
    100% {
      background: #ff1414;
      box-shadow: 0px 4.6666666667px 24px 3px #ff1414;
    }
    50% {
      background: rgba(255,20,20, 0.4);
      box-shadow: 0px 4.6666666667px 24px 3px rgba(255,20,20, 0.5);
    }
  }
  @keyframes flash-3 {
    0%,
    100% {
      background: #ff1414;
      box-shadow: 0px 4.6666666667px 24px 3px #ff1414;
    }
    50% {
      background: rgba(255,20,20, 0.4);
      box-shadow: 0px 4.6666666667px 24px 3px rgba(255,20,20, 0.25);
    }
  }
      `}
    </style>
     <a class={`pod ${tagline && 'has-tagline'}`} style={{background: backgroundcolor, color: textcolor}} href={link} data-element-type={dataElementType} data-promotion-name={dataPromotionName} data-promotion-index={dataPromotionIndex}>
        <div className='pod-image-container'>
          <img class="item" src={image} alt={imagealt} title={imagealt} />
          {logoimage &&
          <div class={`logo ${position}`}>
            <img src={logoimage} alt={logoimagealt} title={logoimagealt} style={{height: logoheight}} />
          </div>
          }
        </div>
        <ul class="lightrope">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        {tagline && <span>{tagline}</span> }
        <button class="hero-button" href={link}  style={{background: buttonbackgroundcolor, color: buttontextcolor}} data-element-type={dataElementType} data-promotion-name={dataPromotionName} data-promotion-index={dataPromotionIndex} >
          <span class="swoosh-container">
            <span class="star-start">
              <svg fill="currentColor" height="11" viewBox="0 0 11 11" width="11" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z" fill-opacity="0.5"></path>
              </svg>
            </span>
            <span class="swoosh"> </span>
          </span>
          {linktext}
          <span class="basket-icon">
            <svg fill="currentColor" height="18" viewBox="0 0 22 18" width="22" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"></path>
            </svg>
          </span>
          <span class="star-end">
            <svg fill="currentColor" height="11" viewBox="0 0 11 11" width="11" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z" fill-opacity="0.5"></path>
            </svg>
          </span>
        </button>
      </a>
    </>
  );
};

Podchristmas.propTypes = {
  /** Pod contents */
  backgroundcolor: PropTypes.string, 
  textcolor: PropTypes.string, 
  image: PropTypes.string.isRequired,
  imagealt: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  link: PropTypes.string.isRequired,
  linktext: PropTypes.string.isRequired,
  buttonbackgroundcolor: PropTypes.string,
  buttontextcolor: PropTypes.string,
  logoimage: PropTypes.string,
  logoimagealt: PropTypes.string,
  logoheight: PropTypes.string,
  dataElementType: PropTypes.string,
  dataPromotionName: PropTypes.string,
  dataPromotionIndex: PropTypes.string,
};
