import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const PodsCarousel = ({
   positionNumber1,
  image1,
  imagealt1,
  tagline1,
  backgroundcolor1,
  textcolor1,
  link1,
  linktext1,
  buttonbackgroundcolor1,
  buttontextcolor1,
  logoimage1,
  logoimagealt1,
  logoheight1,
  position1,
  dataElementType1,
  dataPromotionName1,
  dataPromotionIndex1,

  positionNumber2,
  image2,
  imagealt2,
  tagline2,
  backgroundcolor2,
  textcolor2,
  link2,
  linktext2,
  buttonbackgroundcolor2,
  buttontextcolor2,
  logoimage2,
  logoimagealt2,
  logoheight2,
  position2,
  dataElementType2,
  dataPromotionName2,
  dataPromotionIndex2,

  positionNumber3,
  image3,
  imagealt3,
  tagline3,
  backgroundcolor3,
  textcolor3,
  link3,
  linktext3,
  buttonbackgroundcolor3,
  buttontextcolor3,
  logoimage3,
  logoimagealt3,
  logoheight3,
  position3,
  dataElementType3,
  dataPromotionName3,
  dataPromotionIndex3,

  positionNumber4,
  image4,
  imagealt4,
  tagline4,
  backgroundcolor4,
  textcolor4,
  link4,
  linktext4,
  buttonbackgroundcolor4,
  buttontextcolor4,
  logoimage4,
  logoimagealt4,
  logoheight4,
  position4,
  dataElementType4,
  dataPromotionName4,
  dataPromotionIndex4,

  positionNumber5,
  image5,
  imagealt5,
  tagline5,
  backgroundcolor5,
  textcolor5,
  link5,
  linktext5,
  buttonbackgroundcolor5,
  buttontextcolor5,
  logoimage5,
  logoimagealt5,
  logoheight5,
  position5,
  dataElementType5,
  dataPromotionName5,
  dataPromotionIndex5,

  positionNumber6,
  image6,
  imagealt6,
  tagline6,
  backgroundcolor6,
  textcolor6,
  link6,
  linktext6,
  buttonbackgroundcolor6,
  buttontextcolor6,
  logoimage6,
  logoimagealt6,
  logoheight6,
  position6,
  dataElementType6,
  dataPromotionName6,
  dataPromotionIndex6,

  positionNumber7,
  image7,
  imagealt7,
  tagline7,
  backgroundcolor7,
  textcolor7,
  link7,
  linktext7,
  buttonbackgroundcolor7,
  buttontextcolor7,
  logoimage7,
  logoimagealt7,
  logoheight7,
  position7,
  dataElementType7,
  dataPromotionName7,
  dataPromotionIndex7,

  positionNumber8,
  image8,
  imagealt8,
  tagline8,
  backgroundcolor8,
  textcolor8,
  link8,
  linktext8,
  buttonbackgroundcolor8,
  buttontextcolor8,
  logoimage8,
  logoimagealt8,
  logoheight8,
  position8,
  dataElementType8,
  dataPromotionName8,
  dataPromotionIndex8,

  positionNumber9,
  image9,
  imagealt9,
  tagline9,
  backgroundcolor9,
  textcolor9,
  link9,
  linktext9,
  buttonbackgroundcolor9,
  buttontextcolor9,
  logoimage9,
  logoimagealt9,
  logoheight9,
  position9,
  dataElementType9,
  dataPromotionName9,
  dataPromotionIndex9,

  positionNumber10,
  image10,
  imagealt10,
  tagline10,
  backgroundcolor10,
  textcolor10,
  link10,
  linktext10,
  buttonbackgroundcolor10,
  buttontextcolor10,
  logoimage10,
  logoimagealt10,
  logoheight10,
  position10,
  dataElementType10,
  dataPromotionName10,
  dataPromotionIndex10,
}) => {
  const slidesData = [
  { image: image1, imagealt: imagealt1, tagline: tagline1, backgroundcolor: backgroundcolor1, textcolor: textcolor1, link: link1, linktext: linktext1, buttonbackgroundcolor: buttonbackgroundcolor1, buttontextcolor: buttontextcolor1, logoimage: logoimage1, logoimagealt: logoimagealt1, logoheight: logoheight1, position: position1, dataElementType: dataElementType1, dataPromotionName: dataPromotionName1, dataPromotionIndex: dataPromotionIndex1, positionNumber: positionNumber1 },
  { image: image2, imagealt: imagealt2, tagline: tagline2, backgroundcolor: backgroundcolor2, textcolor: textcolor2, link: link2, linktext: linktext2, buttonbackgroundcolor: buttonbackgroundcolor2, buttontextcolor: buttontextcolor2, logoimage: logoimage2, logoimagealt: logoimagealt2, logoheight: logoheight2, position: position2, dataElementType: dataElementType2, dataPromotionName: dataPromotionName2, dataPromotionIndex: dataPromotionIndex2, positionNumber: positionNumber2 },
  { image: image3, imagealt: imagealt3, tagline: tagline3, backgroundcolor: backgroundcolor3, textcolor: textcolor3, link: link3, linktext: linktext3, buttonbackgroundcolor: buttonbackgroundcolor3, buttontextcolor: buttontextcolor3, logoimage: logoimage3, logoimagealt: logoimagealt3, logoheight: logoheight3, position: position3, dataElementType: dataElementType3, dataPromotionName: dataPromotionName3, dataPromotionIndex: dataPromotionIndex3, positionNumber: positionNumber3 },
  { image: image4, imagealt: imagealt4, tagline: tagline4, backgroundcolor: backgroundcolor4, textcolor: textcolor4, link: link4, linktext: linktext4, buttonbackgroundcolor: buttonbackgroundcolor4, buttontextcolor: buttontextcolor4, logoimage: logoimage4, logoimagealt: logoimagealt4, logoheight: logoheight4, position: position4, dataElementType: dataElementType4, dataPromotionName: dataPromotionName4, dataPromotionIndex: dataPromotionIndex4, positionNumber: positionNumber4 },
  { image: image5, imagealt: imagealt5, tagline: tagline5, backgroundcolor: backgroundcolor5, textcolor: textcolor5, link: link5, linktext: linktext5, buttonbackgroundcolor: buttonbackgroundcolor5, buttontextcolor: buttontextcolor5, logoimage: logoimage5, logoimagealt: logoimagealt5, logoheight: logoheight5, position: position5, dataElementType: dataElementType5, dataPromotionName: dataPromotionName5, dataPromotionIndex: dataPromotionIndex5, positionNumber: positionNumber5 },
  { image: image6, imagealt: imagealt6, tagline: tagline6, backgroundcolor: backgroundcolor6, textcolor: textcolor6, link: link6, linktext: linktext6, buttonbackgroundcolor: buttonbackgroundcolor6, buttontextcolor: buttontextcolor6, logoimage: logoimage6, logoimagealt: logoimagealt6, logoheight: logoheight6, position: position6, dataElementType: dataElementType6, dataPromotionName: dataPromotionName6, dataPromotionIndex: dataPromotionIndex6, positionNumber: positionNumber6 },
  { image: image7, imagealt: imagealt7, tagline: tagline7, backgroundcolor: backgroundcolor7, textcolor: textcolor7, link: link7, linktext: linktext7, buttonbackgroundcolor: buttonbackgroundcolor7, buttontextcolor: buttontextcolor7, logoimage: logoimage7, logoimagealt: logoimagealt7, logoheight: logoheight7, position: position7, dataElementType: dataElementType7, dataPromotionName: dataPromotionName7, dataPromotionIndex: dataPromotionIndex7, positionNumber: positionNumber7 },
  { image: image8, imagealt: imagealt8, tagline: tagline8, backgroundcolor: backgroundcolor8, textcolor: textcolor8, link: link8, linktext: linktext8, buttonbackgroundcolor: buttonbackgroundcolor8, buttontextcolor: buttontextcolor8, logoimage: logoimage8, logoimagealt: logoimagealt8, logoheight: logoheight8, position: position8, dataElementType: dataElementType8, dataPromotionName: dataPromotionName8, dataPromotionIndex: dataPromotionIndex8, positionNumber: positionNumber8 },
  { image: image9, imagealt: imagealt9, tagline: tagline9, backgroundcolor: backgroundcolor9, textcolor: textcolor9, link: link9, linktext: linktext9, buttonbackgroundcolor: buttonbackgroundcolor9, buttontextcolor: buttontextcolor9, logoimage: logoimage9, logoimagealt: logoimagealt9, logoheight: logoheight9, position: position9, dataElementType: dataElementType9, dataPromotionName: dataPromotionName9, dataPromotionIndex: dataPromotionIndex9, positionNumber: positionNumber9 },
  { image: image10, imagealt: imagealt10, tagline: tagline10, backgroundcolor: backgroundcolor10, textcolor: textcolor10, link: link10, linktext: linktext10, buttonbackgroundcolor: buttonbackgroundcolor10, buttontextcolor: buttontextcolor10, logoimage: logoimage10, logoimagealt: logoimagealt10, logoheight: logoheight10, position: position10, dataElementType: dataElementType10, dataPromotionName: dataPromotionName10, dataPromotionIndex: dataPromotionIndex10, positionNumber: positionNumber10 },
];
  return (
    <>
    <style>{`
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
      aspect-ratio: 429/620;
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
<div class="offer-pods">
  <div className="carousel offer-pods-carousel js-flickity" data-flickity='{ "autoPlay": true, "wrapAround": true, "cellAlign": "left" }'>
    {slidesData
      .filter(slide => slide.image) // only slides with images
      .sort((a, b) => a.positionNumber - b.positionNumber) // sort by manual number
      .map((slide, idx) => (
        <div key={idx} className="carousel-cell">
          <a className={`pod ${slide.tagline && 'has-tagline'}`} 
              style={{ background: slide.backgroundcolor, color: slide.textcolor }} 
              href={slide.link} 
              data-element-type={slide.dataElementType} 
              data-promotion-name={slide.dataPromotionName} 
              data-promotion-index={slide.dataPromotionIndex}>
            <div className='pod-image-container'>
              <img className="item" src={slide.image} alt={slide.imagealt} title={slide.imagealt} />
              {slide.logoimage &&
                <div className={`logo ${slide.position}`}>
                  <img src={slide.logoimage} alt={slide.logoimagealt} title={slide.logoimagealt} style={{ height: slide.logoheight }} />
                </div>
              }
            </div>
            {slide.tagline && <span>{slide.tagline}</span>}
            <button className="hero-button" 
                    style={{ background: slide.buttonbackgroundcolor, color: slide.buttontextcolor }} 
                    data-element-type={slide.dataElementType} 
                    data-promotion-name={slide.dataPromotionName} 
                    data-promotion-index={slide.dataPromotionIndex}>
              <span class="swoosh-container">
                <span class="star-start">
                  <svg fill="currentColor" height="11" viewBox="0 0 11 11" width="11" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z" fill-opacity="0.5"></path>
                  </svg>
                </span>
                <span class="swoosh"> </span>
              </span>
              {slide.linktext}
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
        </div>
    ))}
  </div>
</div>
    </>
  );
};

PodsCarousel.propTypes = {
  // Slide 1
  image1: PropTypes.string,
  imagealt1: PropTypes.string,
  tagline1: PropTypes.string,
  backgroundcolor1: PropTypes.string,
  textcolor1: PropTypes.string,
  link1: PropTypes.string,
  linktext1: PropTypes.string,
  buttonbackgroundcolor1: PropTypes.string,
  buttontextcolor1: PropTypes.string,
  logoimage1: PropTypes.string,
  logoimagealt1: PropTypes.string,
  logoheight1: PropTypes.string,
  position1: PropTypes.string,
  dataElementType1: PropTypes.string,
  dataPromotionName1: PropTypes.string,
  dataPromotionIndex1: PropTypes.string,

  // Slide 2
  image2: PropTypes.string,
  imagealt2: PropTypes.string,
  tagline2: PropTypes.string,
  backgroundcolor2: PropTypes.string,
  textcolor2: PropTypes.string,
  link2: PropTypes.string,
  linktext2: PropTypes.string,
  buttonbackgroundcolor2: PropTypes.string,
  buttontextcolor2: PropTypes.string,
  logoimage2: PropTypes.string,
  logoimagealt2: PropTypes.string,
  logoheight2: PropTypes.string,
  position2: PropTypes.string,
  dataElementType2: PropTypes.string,
  dataPromotionName2: PropTypes.string,
  dataPromotionIndex2: PropTypes.string,

  // Slide 3
  image3: PropTypes.string,
  imagealt3: PropTypes.string,
  tagline3: PropTypes.string,
  backgroundcolor3: PropTypes.string,
  textcolor3: PropTypes.string,
  link3: PropTypes.string,
  linktext3: PropTypes.string,
  buttonbackgroundcolor3: PropTypes.string,
  buttontextcolor3: PropTypes.string,
  logoimage3: PropTypes.string,
  logoimagealt3: PropTypes.string,
  logoheight3: PropTypes.string,
  position3: PropTypes.string,
  dataElementType3: PropTypes.string,
  dataPromotionName3: PropTypes.string,
  dataPromotionIndex3: PropTypes.string,

  // Slide 4
  image4: PropTypes.string,
  imagealt4: PropTypes.string,
  tagline4: PropTypes.string,
  backgroundcolor4: PropTypes.string,
  textcolor4: PropTypes.string,
  link4: PropTypes.string,
  linktext4: PropTypes.string,
  buttonbackgroundcolor4: PropTypes.string,
  buttontextcolor4: PropTypes.string,
  logoimage4: PropTypes.string,
  logoimagealt4: PropTypes.string,
  logoheight4: PropTypes.string,
  position4: PropTypes.string,
  dataElementType4: PropTypes.string,
  dataPromotionName4: PropTypes.string,
  dataPromotionIndex4: PropTypes.string,

  // Slide 5
  image5: PropTypes.string,
  imagealt5: PropTypes.string,
  tagline5: PropTypes.string,
  backgroundcolor5: PropTypes.string,
  textcolor5: PropTypes.string,
  link5: PropTypes.string,
  linktext5: PropTypes.string,
  buttonbackgroundcolor5: PropTypes.string,
  buttontextcolor5: PropTypes.string,
  logoimage5: PropTypes.string,
  logoimagealt5: PropTypes.string,
  logoheight5: PropTypes.string,
  position5: PropTypes.string,
  dataElementType5: PropTypes.string,
  dataPromotionName5: PropTypes.string,
  dataPromotionIndex5: PropTypes.string,

  // Slide 6
  image6: PropTypes.string,
  imagealt6: PropTypes.string,
  tagline6: PropTypes.string,
  backgroundcolor6: PropTypes.string,
  textcolor6: PropTypes.string,
  link6: PropTypes.string,
  linktext6: PropTypes.string,
  buttonbackgroundcolor6: PropTypes.string,
  buttontextcolor6: PropTypes.string,
  logoimage6: PropTypes.string,
  logoimagealt6: PropTypes.string,
  logoheight6: PropTypes.string,
  position6: PropTypes.string,
  dataElementType6: PropTypes.string,
  dataPromotionName6: PropTypes.string,
  dataPromotionIndex6: PropTypes.string,

  // Slide 7
  image7: PropTypes.string,
  imagealt7: PropTypes.string,
  tagline7: PropTypes.string,
  backgroundcolor7: PropTypes.string,
  textcolor7: PropTypes.string,
  link7: PropTypes.string,
  linktext7: PropTypes.string,
  buttonbackgroundcolor7: PropTypes.string,
  buttontextcolor7: PropTypes.string,
  logoimage7: PropTypes.string,
  logoimagealt7: PropTypes.string,
  logoheight7: PropTypes.string,
  position7: PropTypes.string,
  dataElementType7: PropTypes.string,
  dataPromotionName7: PropTypes.string,
  dataPromotionIndex7: PropTypes.string,

  // Slide 8
  image8: PropTypes.string,
  imagealt8: PropTypes.string,
  tagline8: PropTypes.string,
  backgroundcolor8: PropTypes.string,
  textcolor8: PropTypes.string,
  link8: PropTypes.string,
  linktext8: PropTypes.string,
  buttonbackgroundcolor8: PropTypes.string,
  buttontextcolor8: PropTypes.string,
  logoimage8: PropTypes.string,
  logoimagealt8: PropTypes.string,
  logoheight8: PropTypes.string,
  position8: PropTypes.string,
  dataElementType8: PropTypes.string,
  dataPromotionName8: PropTypes.string,
  dataPromotionIndex8: PropTypes.string,

  // Slide 9
  image9: PropTypes.string,
  imagealt9: PropTypes.string,
  tagline9: PropTypes.string,
  backgroundcolor9: PropTypes.string,
  textcolor9: PropTypes.string,
  link9: PropTypes.string,
  linktext9: PropTypes.string,
  buttonbackgroundcolor9: PropTypes.string,
  buttontextcolor9: PropTypes.string,
  logoimage9: PropTypes.string,
  logoimagealt9: PropTypes.string,
  logoheight9: PropTypes.string,
  position9: PropTypes.string,
  dataElementType9: PropTypes.string,
  dataPromotionName9: PropTypes.string,
  dataPromotionIndex9: PropTypes.string,

  // Slide 10
  image10: PropTypes.string,
  imagealt10: PropTypes.string,
  tagline10: PropTypes.string,
  backgroundcolor10: PropTypes.string,
  textcolor10: PropTypes.string,
  link10: PropTypes.string,
  linktext10: PropTypes.string,
  buttonbackgroundcolor10: PropTypes.string,
  buttontextcolor10: PropTypes.string,
  logoimage10: PropTypes.string,
  logoimagealt10: PropTypes.string,
  logoheight10: PropTypes.string,
  position10: PropTypes.string,
  dataElementType10: PropTypes.string,
  dataPromotionName10: PropTypes.string,
  dataPromotionIndex10: PropTypes.string,
};

// eslint-disable-next-line no-lone-blocks
{/* <script>
  {`
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function(){

      const FLICKITIES = document.querySelectorAll(".offer-pods-carousel");

      FLICKITIES.forEach((slider) => {
        new Flickity(slider);
      });

      var flkty4 = new Flickity(".offer-pods-carousel");

      flkty4.resize();

      const offerPods = document.querySelectorAll('.offer-pods-carousel .carousel-cell');

      offerPods.forEach((slide) => {
        slide.style.height = "100%";
      })
    }, 1000);
  }, false);
  `}
</script> */}
