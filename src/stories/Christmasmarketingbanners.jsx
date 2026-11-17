import PropTypes from "prop-types";

/** Primary UI component for user interaction */
export const Christmasmarketingbanners = ({
  modulebackgroundcolor,
  id,
  banner1image,
  banner1alt,
  banner1link,
  banner1dataElementType,
  banner1dataPromotionIndex,
  banner1dataPromotionName,
  banner2image,
  banner2alt,
  banner2link,
  banner2dataElementType,
  banner2dataPromotionIndex,
  banner2dataPromotionName,
}) => {
  return (
    <>
      <style>
        {`
    .christmas-banners {
      margin: 0;
      padding: 20px 0;
      width: 100%;
      background: #dbe3ff;
    }
  
    .christmas-banners ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 auto;
      padding: 0 20px;
      list-style: none;
      max-width: 1440px;
    }
  
    .christmas-banners ul li {
      margin: 0 0 20px;
      padding: 0;
      text-align: center;
      transition: opacity 0.5s;
      -webkit-transition: opacity 0.5s;
      opacity: 1;
    }
  
    .christmas-banners ul li:last-child {
      margin: 0;
    }
  
    .christmas-banners ul li:hover {
      opacity: 0.5;
    }
  
    .christmas-banners ul li a {
      display: block;
    }
  
    .christmas-banners ul li a img {
      width: 100%;
      border-radius: 8px;
    }
  
    @media (min-width: 768px) {
  
      .christmas-banners ul {
        margin: 0 auto;
        padding: 0 20px;
      }
  
      .christmas-banners ul li {
        margin: 0;
        width: calc(100% / 2 - 10px);
      }
    }
    `}
      </style>
      <div class="christmas-banners" id={id} style={{backgroundColor: modulebackgroundcolor}}>
        <ul>
          <li>
            <a
              href={banner1link}
              title={banner1alt}
              {...(
                banner1dataElementType &&
                banner1dataPromotionIndex &&
                banner1dataPromotionName
                  ? {
                      "data-element-type": banner1dataElementType,
                      "data-promotion-index": banner1dataPromotionIndex,
                      "data-promotion-name": banner1dataPromotionName,
                    }
                  : {}
              )}
            >
              <img alt={banner1alt} src={banner1image} title={banner1alt} />
            </a>
          </li>

          <li>
            <a
              href={banner2link}
              title={banner2alt}
              {...(
                banner2dataElementType &&
                banner2dataPromotionIndex &&
                banner2dataPromotionName
                  ? {
                      "data-element-type": banner2dataElementType,
                      "data-promotion-index": banner2dataPromotionIndex,
                      "data-promotion-name": banner2dataPromotionName,
                    }
                  : {}
              )}
            >
              <img alt={banner2alt} src={banner2image} title={banner2alt} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

Christmasmarketingbanners.propTypes = {
  /** Button contents */
  modulebackgroundcolor: PropTypes.string,
  id: PropTypes.string,
  banner1image: PropTypes.string.isRequired,
  banner1alt: PropTypes.string.isRequired,
  banner1link: PropTypes.string.isRequired,
  banner1dataElementType: PropTypes.string,
  banner1dataPromotionIndex: PropTypes.string,
  banner1dataPromotionName: PropTypes.string,
  banner2image: PropTypes.string.isRequired,
  banner2alt: PropTypes.string.isRequired,
  banner2link: PropTypes.string.isRequired,
  banner2dataElementType: PropTypes.string,
  banner2dataPromotionIndex: PropTypes.string,
  banner2dataPromotionName: PropTypes.string,
};
