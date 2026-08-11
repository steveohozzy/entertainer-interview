import PropTypes from 'prop-types';

const buttonIcons = {
  basket: (
    <svg width="22" height="18" viewBox="0 0 22 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"></path>
    </svg>
  ),

  glasses: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
      <path d="M16.4879 10.1012C16.4933 10.2515 16.4809 10.3979 16.4507 10.5406L16.054 12.4131C15.8764 13.2512 15.4202 13.9092 14.6854 14.3871C13.9722 14.8509 13.1876 14.9921 12.3316 14.8108L11.3419 14.601C10.5215 14.4272 9.87568 14.0016 9.40432 13.324C8.92918 12.6644 8.74798 11.9365 8.86074 11.1405L9.00153 10.0803L8.03854 9.87622L7.73724 10.9025C7.51749 11.6758 7.05668 12.2676 6.35483 12.6779C5.6492 13.1061 4.88622 13.2332 4.06589 13.0594L3.07614 12.8497C2.22014 12.6683 1.55133 12.2192 1.06969 11.5022C0.609659 10.7712 0.468441 9.98658 0.646031 9.14841L1.04278 7.27592C1.073 7.13326 1.12107 6.99437 1.18696 6.85926L3.41658 2.27258C3.73849 1.6327 4.22771 1.21461 4.88422 1.0183C5.56234 0.807938 6.19784 0.886686 6.79072 1.25455L7.19038 1.47898C7.28982 1.53732 7.35495 1.62565 7.38578 1.74399C7.41661 1.86232 7.40286 1.97121 7.34452 2.07066L7.12575 2.44357C7.06742 2.54301 6.97908 2.60814 6.86074 2.63897C6.74241 2.6698 6.63352 2.65605 6.53408 2.59771L6.18225 2.41136C5.88392 2.23635 5.58778 2.18292 5.29384 2.25107C4.9745 2.35112 4.74704 2.54516 4.61148 2.83321L2.69539 6.73165C3.4719 6.67257 4.22573 6.72049 4.95689 6.87541C6.00906 7.09835 6.97643 7.54556 7.85902 8.21704L9.83851 8.63646C10.9176 8.38061 11.9832 8.36415 13.0354 8.58709C13.7665 8.74201 14.475 9.00393 15.1608 9.37284L14.9904 5.03232C14.9833 4.71404 14.8541 4.44442 14.6028 4.22346C14.3617 4.04195 14.0694 3.97069 13.7257 4.00968L13.3286 4.03733C13.214 4.05032 13.1089 4.01873 13.0132 3.94256C12.9176 3.86639 12.8632 3.77103 12.8502 3.65647L12.8015 3.22689C12.7885 3.11233 12.8201 3.00722 12.8963 2.91155C12.9724 2.81589 13.0678 2.76156 13.1824 2.74857L13.6387 2.7055C14.3298 2.60969 14.9337 2.79355 15.4504 3.25708C15.9887 3.70655 16.2753 4.289 16.31 5.00445L16.4879 10.1012ZM6.05359 10.406L6.39297 9.3319C5.81792 8.96782 5.21832 8.71966 4.59416 8.58741C3.93433 8.4476 3.25885 8.4256 2.56773 8.52141L2.35802 9.51115C2.27868 9.88565 2.34441 10.235 2.55523 10.5592C2.76983 10.8655 3.06438 11.0584 3.43888 11.1377L4.42863 11.3474C4.78529 11.423 5.12193 11.3732 5.43855 11.198C5.75895 11.005 5.96396 10.741 6.05359 10.406ZM14.342 12.0503L14.5517 11.0606C13.9588 10.6927 13.3325 10.4389 12.6726 10.2991C12.0485 10.1668 11.3997 10.1505 10.7265 10.2501L10.6011 11.3695C10.5471 11.7121 10.6274 12.0366 10.842 12.3429C11.0604 12.6314 11.3479 12.8135 11.7046 12.8891L12.6943 13.0988C13.0688 13.1781 13.4163 13.1213 13.7367 12.9283C14.0609 12.7175 14.2626 12.4248 14.342 12.0503Z" fill="white"></path>
    </svg>
  ),

  football: (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
      <path d="M15.6718 4.97162C16.8487 6.75428 17.2147 8.69523 16.7699 10.7945C16.3251 12.8937 15.2012 14.5296 13.3982 15.7022C11.6198 16.8587 9.68106 17.2145 7.58183 16.7697C5.4826 16.3249 3.84454 15.2112 2.66765 13.4286C1.51547 11.6298 1.16177 9.68086 1.60656 7.58163C2.05134 5.4824 3.16291 3.85453 4.94125 2.69803C6.74429 1.52546 8.69542 1.16157 10.7947 1.60636C12.8939 2.05115 14.5196 3.1729 15.6718 4.97162ZM15.3025 10.4835L14.3651 10.9877L12.8148 8.80648L13.8787 6.3486L14.8987 6.66055C14.337 5.39157 13.4654 4.42959 12.2838 3.77462L12.511 4.81302L9.9461 5.6112L7.92531 3.8414L8.55411 2.98437C7.20845 3.10387 6.0216 3.6297 4.99355 4.56185L6.08298 4.69685L6.02801 7.36848L3.72633 8.73353L3.07398 7.89255C2.78897 9.23769 2.92142 10.5222 3.47135 11.7461L3.93615 10.7585L6.46346 11.6454L7.09583 14.239L6.0621 14.595C7.23935 15.2703 8.50296 15.5381 9.85294 15.3982L9.0524 14.6536L10.6823 12.5393L13.3521 12.7536L13.3764 13.8448C14.3755 12.9491 15.0175 11.8287 15.3025 10.4835ZM7.26739 11.0171L6.94618 8.01023L9.69348 6.80348L11.7153 9.02072L10.2022 11.639L7.26739 11.0171Z" fill="white"></path>
    </svg>
  ),

  pencil: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M17.6953 7.57992L15.9911 8.68824C15.7688 8.8328 15.5956 8.79609 15.4714 8.57812L12.797 4.46571C12.6481 4.26379 12.6848 4.09056 12.9071 3.94599L14.6113 2.83768C14.9571 2.6128 15.3338 2.54355 15.7414 2.62991C16.1491 2.71628 16.4653 2.93236 16.6902 3.27815L18.1358 5.50107C18.3607 5.84686 18.4299 6.22356 18.3436 6.63118C18.2572 7.0388 18.0411 7.35504 17.6953 7.57992ZM11.4251 4.90975C11.6474 4.76518 11.8207 4.80189 11.9448 5.01986L14.6193 9.13228C14.7681 9.33419 14.7314 9.50743 14.5091 9.65199L4.80237 15.9646L0.930163 15.8469C0.676956 15.8358 0.478071 15.7192 0.333508 15.4969C0.188945 15.2746 0.162954 15.0455 0.255536 14.8095L1.71836 11.2223L11.4251 4.90975ZM5.10868 10.599C4.86169 10.7597 4.81851 10.9635 4.97913 11.2105C5.13976 11.4575 5.34357 11.5006 5.59056 11.34L11.2961 7.62956C11.5431 7.46894 11.5862 7.26513 11.4256 7.01814C11.265 6.77115 11.0612 6.72796 10.8142 6.88859L5.10868 10.599ZM3.33446 13.5453L3.64538 12.0778L2.54481 11.8447L1.7634 13.7235L2.5344 14.909L4.56869 14.9568L4.80188 13.8562L3.33446 13.5453Z" fill="white"></path>
    </svg>
  ),

  plane: (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><path d="M18.9028 4.35492C19.4873 4.15932 20.0692 4.72983 19.8174 5.31534L14.818 18.0558C14.6532 18.532 14.0752 18.697 13.686 18.4229L10.2385 15.9994L7.77668 17.9694C7.23857 18.3984 6.44087 17.9419 6.59633 17.2082L7.121 14.7319L16.356 7.32912C16.5477 7.17808 16.3485 6.91226 16.1633 7.03273L5.7505 12.9082L2.77086 10.8394C2.26592 10.5088 2.37319 9.70103 2.98825 9.51191L18.9028 4.35492Z" fill="currentColor"></path></svg>
  ),
};

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
  linktext2,
  buttonbackgroundcolor2,
  buttontextcolor2,
  pod2buttonicon,
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
  linktext4,
  buttonbackgroundcolor4,
  buttontextcolor4,
  pod4buttonicon,
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
  pod5buttonicon,
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
  pod6buttonicon,
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
  pod7buttonicon,
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
  pod8buttonicon,
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
  pod9buttonicon,
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
  pod10buttonicon,
  logoimage10,
  logoimagealt10,
  logoheight10,
  position10,
  dataElementType10,
  dataPromotionName10,
  dataPromotionIndex10,
}) => {
  const slidesData = [
  { image: image1, imagealt: imagealt1, tagline: tagline1, backgroundcolor: backgroundcolor1, textcolor: textcolor1, link: link1, linktext: linktext1, buttonbackgroundcolor: buttonbackgroundcolor1, buttontextcolor: buttontextcolor1, podbuttonicon: pod1buttonicon, logoimage: logoimage1, logoimagealt: logoimagealt1, logoheight: logoheight1, position: position1, dataElementType: dataElementType1, dataPromotionName: dataPromotionName1, dataPromotionIndex: dataPromotionIndex1, positionNumber: positionNumber1 },
  { image: image2, imagealt: imagealt2, tagline: tagline2, backgroundcolor: backgroundcolor2, textcolor: textcolor2, link: link2, linktext: linktext2, buttonbackgroundcolor: buttonbackgroundcolor2, buttontextcolor: buttontextcolor2, podbuttonicon: pod2buttonicon, logoimage: logoimage2, logoimagealt: logoimagealt2, logoheight: logoheight2, position: position2, dataElementType: dataElementType2, dataPromotionName: dataPromotionName2, dataPromotionIndex: dataPromotionIndex2, positionNumber: positionNumber2 },
  { image: image3, imagealt: imagealt3, tagline: tagline3, backgroundcolor: backgroundcolor3, textcolor: textcolor3, link: link3, linktext: linktext3, buttonbackgroundcolor: buttonbackgroundcolor3, buttontextcolor: buttontextcolor3, podbuttonicon: pod3buttonicon, logoimage: logoimage3, logoimagealt: logoimagealt3, logoheight: logoheight3, position: position3, dataElementType: dataElementType3, dataPromotionName: dataPromotionName3, dataPromotionIndex: dataPromotionIndex3, positionNumber: positionNumber3 },
  { image: image4, imagealt: imagealt4, tagline: tagline4, backgroundcolor: backgroundcolor4, textcolor: textcolor4, link: link4, linktext: linktext4, buttonbackgroundcolor: buttonbackgroundcolor4, buttontextcolor: buttontextcolor4, podbuttonicon: pod4buttonicon, logoimage: logoimage4, logoimagealt: logoimagealt4, logoheight: logoheight4, position: position4, dataElementType: dataElementType4, dataPromotionName: dataPromotionName4, dataPromotionIndex: dataPromotionIndex4, positionNumber: positionNumber4 },
  { image: image5, imagealt: imagealt5, tagline: tagline5, backgroundcolor: backgroundcolor5, textcolor: textcolor5, link: link5, linktext: linktext5, buttonbackgroundcolor: buttonbackgroundcolor5, buttontextcolor: buttontextcolor5, podbuttonicon: pod5buttonicon, logoimage: logoimage5, logoimagealt: logoimagealt5, logoheight: logoheight5, position: position5, dataElementType: dataElementType5, dataPromotionName: dataPromotionName5, dataPromotionIndex: dataPromotionIndex5, positionNumber: positionNumber5 },
  { image: image6, imagealt: imagealt6, tagline: tagline6, backgroundcolor: backgroundcolor6, textcolor: textcolor6, link: link6, linktext: linktext6, buttonbackgroundcolor: buttonbackgroundcolor6, buttontextcolor: buttontextcolor6, podbuttonicon: pod6buttonicon, logoimage: logoimage6, logoimagealt: logoimagealt6, logoheight: logoheight6, position: position6, dataElementType: dataElementType6, dataPromotionName: dataPromotionName6, dataPromotionIndex: dataPromotionIndex6, positionNumber: positionNumber6 },
  { image: image7, imagealt: imagealt7, tagline: tagline7, backgroundcolor: backgroundcolor7, textcolor: textcolor7, link: link7, linktext: linktext7, buttonbackgroundcolor: buttonbackgroundcolor7, buttontextcolor: buttontextcolor7, podbuttonicon: pod7buttonicon, logoimage: logoimage7, logoimagealt: logoimagealt7, logoheight: logoheight7, position: position7, dataElementType: dataElementType7, dataPromotionName: dataPromotionName7, dataPromotionIndex: dataPromotionIndex7, positionNumber: positionNumber7 },
  { image: image8, imagealt: imagealt8, tagline: tagline8, backgroundcolor: backgroundcolor8, textcolor: textcolor8, link: link8, linktext: linktext8, buttonbackgroundcolor: buttonbackgroundcolor8, buttontextcolor: buttontextcolor8, podbuttonicon: pod8buttonicon, logoimage: logoimage8, logoimagealt: logoimagealt8, logoheight: logoheight8, position: position8, dataElementType: dataElementType8, dataPromotionName: dataPromotionName8, dataPromotionIndex: dataPromotionIndex8, positionNumber: positionNumber8 },
  { image: image9, imagealt: imagealt9, tagline: tagline9, backgroundcolor: backgroundcolor9, textcolor: textcolor9, link: link9, linktext: linktext9, buttonbackgroundcolor: buttonbackgroundcolor9, buttontextcolor: buttontextcolor9, podbuttonicon: pod9buttonicon, logoimage: logoimage9, logoimagealt: logoimagealt9, logoheight: logoheight9, position: position9, dataElementType: dataElementType9, dataPromotionName: dataPromotionName9, dataPromotionIndex: dataPromotionIndex9, positionNumber: positionNumber9 },
  { image: image10, imagealt: imagealt10, tagline: tagline10, backgroundcolor: backgroundcolor10, textcolor: textcolor10, link: link10, linktext: linktext10, buttonbackgroundcolor: buttonbackgroundcolor10, buttontextcolor: buttontextcolor10, podbuttonicon: pod10buttonicon, logoimage: logoimage10, logoimagealt: logoimagealt10, logoheight: logoheight10, position: position10, dataElementType: dataElementType10, dataPromotionName: dataPromotionName10, dataPromotionIndex: dataPromotionIndex10, positionNumber: positionNumber10 },
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
                {buttonIcons[slide.podbuttonicon] || buttonIcons.basket}
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
  pod1buttonicon: PropTypes.string,
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
