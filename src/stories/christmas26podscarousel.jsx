import PropTypes from 'prop-types';
import { CTAButton } from './CTAButton';
import "./consistency.css";

/** Primary UI component for user interaction */
export const PodsCarousel = ({
   positionNumber1,
  image1,
  imagealt1,
  tagline1,
  backgroundcolor1,
  textcolor1,
  link1,
  buttonStyle1,
  pod1buttonicon,
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
  buttonStyle2,
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
  buttonStyle3,
  pod3buttonicon,
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
  buttonStyle4,
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
  buttonStyle5,
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
  buttonStyle6,
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
  buttonStyle7,
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
  buttonStyle8,
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
  buttonStyle9,
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
  buttonStyle10,
  logoimage10,
  logoimagealt10,
  logoheight10,
  position10,
  dataElementType10,
  dataPromotionName10,
  dataPromotionIndex10,
}) => {
  const slidesData = [
  { image: image1, imagealt: imagealt1, tagline: tagline1, backgroundcolor: backgroundcolor1, textcolor: textcolor1, link: link1, buttonStyle: buttonStyle1, logoimage: logoimage1, logoimagealt: logoimagealt1, logoheight: logoheight1, position: position1, dataElementType: dataElementType1, dataPromotionName: dataPromotionName1, dataPromotionIndex: dataPromotionIndex1, positionNumber: positionNumber1 },
  { image: image2, imagealt: imagealt2, tagline: tagline2, backgroundcolor: backgroundcolor2, textcolor: textcolor2, link: link2, buttonStyle: buttonStyle2, logoimage: logoimage2, logoimagealt: logoimagealt2, logoheight: logoheight2, position: position2, dataElementType: dataElementType2, dataPromotionName: dataPromotionName2, dataPromotionIndex: dataPromotionIndex2, positionNumber: positionNumber2 },
  { image: image3, imagealt: imagealt3, tagline: tagline3, backgroundcolor: backgroundcolor3, textcolor: textcolor3, link: link3, buttonStyle: buttonStyle3, logoimage: logoimage3, logoimagealt: logoimagealt3, logoheight: logoheight3, position: position3, dataElementType: dataElementType3, dataPromotionName: dataPromotionName3, dataPromotionIndex: dataPromotionIndex3, positionNumber: positionNumber3 },
  { image: image4, imagealt: imagealt4, tagline: tagline4, backgroundcolor: backgroundcolor4, textcolor: textcolor4, link: link4, buttonStyle: buttonStyle4, logoimage: logoimage4, logoimagealt: logoimagealt4, logoheight: logoheight4, position: position4, dataElementType: dataElementType4, dataPromotionName: dataPromotionName4, dataPromotionIndex: dataPromotionIndex4, positionNumber: positionNumber4 },
  { image: image5, imagealt: imagealt5, tagline: tagline5, backgroundcolor: backgroundcolor5, textcolor: textcolor5, link: link5, buttonStyle: buttonStyle5, logoimage: logoimage5, logoimagealt: logoimagealt5, logoheight: logoheight5, position: position5, dataElementType: dataElementType5, dataPromotionName: dataPromotionName5, dataPromotionIndex: dataPromotionIndex5, positionNumber: positionNumber5 },
  { image: image6, imagealt: imagealt6, tagline: tagline6, backgroundcolor: backgroundcolor6, textcolor: textcolor6, link: link6, buttonStyle: buttonStyle6, logoimage: logoimage6, logoimagealt: logoimagealt6, logoheight: logoheight6, position: position6, dataElementType: dataElementType6, dataPromotionName: dataPromotionName6, dataPromotionIndex: dataPromotionIndex6, positionNumber: positionNumber6 },
  { image: image7, imagealt: imagealt7, tagline: tagline7, backgroundcolor: backgroundcolor7, textcolor: textcolor7, link: link7, buttonStyle: buttonStyle7, logoimage: logoimage7, logoimagealt: logoimagealt7, logoheight: logoheight7, position: position7, dataElementType: dataElementType7, dataPromotionName: dataPromotionName7, dataPromotionIndex: dataPromotionIndex7, positionNumber: positionNumber7 },
  { image: image8, imagealt: imagealt8, tagline: tagline8, backgroundcolor: backgroundcolor8, textcolor: textcolor8, link: link8, buttonStyle: buttonStyle8, logoimage: logoimage8, logoimagealt: logoimagealt8, logoheight: logoheight8, position: position8, dataElementType: dataElementType8, dataPromotionName: dataPromotionName8, dataPromotionIndex: dataPromotionIndex8, positionNumber: positionNumber8 },  
  { image: image9, imagealt: imagealt9, tagline: tagline9, backgroundcolor: backgroundcolor9, textcolor: textcolor9, link: link9, buttonStyle: buttonStyle9, logoimage: logoimage9, logoimagealt: logoimagealt9, logoheight: logoheight9, position: position9, dataElementType: dataElementType9, dataPromotionName: dataPromotionName9, dataPromotionIndex: dataPromotionIndex9, positionNumber: positionNumber9 },
  { image: image10, imagealt: imagealt10, tagline: tagline10, backgroundcolor: backgroundcolor10, textcolor: textcolor10, link: link10, buttonStyle: buttonStyle10, logoimage: logoimage10, logoimagealt: logoimagealt10, logoheight: logoheight10, position: position10, dataElementType: dataElementType10, dataPromotionName: dataPromotionName10, dataPromotionIndex: dataPromotionIndex10, positionNumber: positionNumber10 },
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

  .christmas-lights {
  position: absolute;
  top: calc(100% - 50px);
  left: 0;
  width: 100%;
  height: 95px;
  overflow: hidden;
  pointer-events: none;
  z-index: 3;
}

/* One continuous curved wire */
.christmas-lights::before {
  content: "";
  position: absolute;
  top: -58px;
  left: -8%;
  width: 116%;
  height: 105px;
  border-bottom: 3px solid #5981A7;
  border-radius: 0 0 30% 30%;
}

/* Bulbs */
.christmas-lights .bulb {
  position: absolute;
  width: 28px;
  height: 28px;
  background: #FAB364;
  border: 2px solid #e6a653;
  border-radius: 50%;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.18),
    inset 3px 3px 5px rgba(255, 255, 255, 0.35);
}

.christmas-lights .bulb::after {
content: '';
display: block;
      border-radius: 100%;
      width: 65%;
      height: 65%;
      position: absolute;
      z-index: 2;
      left: 2px;
      top: 2px;
      background: #fdc985;
       filter: blur(1px);
}

.christmas-lights .bulb-1 {
  left: 0;
  top: 38px;
}

.christmas-lights .bulb-2 {
  left: calc((100% - 28px) * 0.142857);
  top: 45px;
}

.christmas-lights .bulb-3 {
  left: calc((100% - 28px) * 0.285714);
  top: 47px;
}

.christmas-lights .bulb-4 {
  left: calc((100% - 28px) * 0.428571);
  top: 47px;
}

.christmas-lights .bulb-5 {
  left: calc((100% - 28px) * 0.571429);
  top: 47px;
}

.christmas-lights .bulb-6 {
  left: calc((100% - 28px) * 0.714286);
  top: 47px;
}

.christmas-lights .bulb-7 {
  left: calc((100% - 28px) * 0.857143);
  top: 45px;
}

.christmas-lights .bulb-8 {
  left: calc(100% - 28px);
  top: 38px;
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
              <div className="christmas-lights">
                <span className="bulb bulb-1"></span>
                <span className="bulb bulb-2"></span>
                <span className="bulb bulb-3"></span>
                <span className="bulb bulb-4"></span>
                <span className="bulb bulb-5"></span>
                <span className="bulb bulb-6"></span>
                <span className="bulb bulb-7"></span>
                <span className="bulb bulb-8"></span>
              </div>
            </div>
            {slide.tagline && <span>{slide.tagline}</span>}
            {slide.buttonStyle !== 'none' && (
              <CTAButton
                buttonStyle={slide.buttonStyle}
                href={slide.link}
                as="button"
              />
            )}
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
  pod1buttonicon: PropTypes.string,
  link1: PropTypes.string,
  buttonStyle1: PropTypes.string,
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
  buttonStyle2: PropTypes.string,
  pod2buttonicon: PropTypes.string,
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
  pod3buttonicon: PropTypes.string,
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
  pod4buttonicon: PropTypes.string,
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
  pod5buttonicon: PropTypes.string,
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
  pod6buttonicon: PropTypes.string,
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
  pod7buttonicon: PropTypes.string,
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
  pod8buttonicon: PropTypes.string,
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
  pod9buttonicon: PropTypes.string,
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
  pod10buttonicon: PropTypes.string,
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
