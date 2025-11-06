import PropTypes from "prop-types";

/** Primary UI component for user interaction */
export const MarketingBanners = ({
  banner1image,
  banner1alt,
  banner1link,
  banner1dataElementType,
  banner1datapromotionindex,
  banner1datapromotionname,
  banner2image,
  banner2alt,
  banner2link,
  banner2dataElementType,
  banner2datapromotionindex,
  banner2datapromotionname,
}) => {
  return (
    <>
      <style>
        {`
    .hp-small-banners-redesign {
      margin: 0;
      padding: 10px 0 30px;
      width: 100%;
      background: #dbe3ff;
    }
  
    .hp-small-banners-redesign ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 auto;
      padding: 0 20px;
      list-style: none;
      max-width: 1200px;
    }
  
    .hp-small-banners-redesign ul li {
      margin: 0 0 20px;
      padding: 0;
      text-align: center;
      transition: opacity 0.5s;
      -webkit-transition: opacity 0.5s;
      opacity: 1;
    }
  
    .hp-small-banners-redesign ul li:last-child {
      margin: 0;
    }
  
    .hp-small-banners-redesign ul li:hover {
      opacity: 0.5;
    }
  
    .hp-small-banners-redesign ul li a {
      display: block;
    }
  
    .hp-small-banners-redesign ul li a img {
      width: 100%;
      border: solid 2px #ffffff;
      border-radius: 8px;
    }
  
    @media (min-width: 768px) {
      .hp-small-banners-redesign {
        padding: 50px 30px;
      }
  
      .hp-small-banners-redesign ul {
        margin: 0 auto;
        padding: 0 0;
      }
  
      .hp-small-banners-redesign ul li {
        margin: 0 0 20px;
        width: calc(100% / 2 - 10px);
      }
    }
    `}
      </style>
      <div class="hp-small-banners-redesign">
        <ul>
          <li>
            <a
              data-element-type={banner1dataElementType}
              data-promotion-index={banner1datapromotionindex}
              data-promotion-name={banner1datapromotionname}
              href={banner1link}
              title={banner1alt}
            >
              <img alt={banner1alt} src={banner1image} title={banner1alt} />
            </a>
          </li>

          <li>
            <a
              data-element-type={banner2dataElementType}
              data-promotion-index={banner2datapromotionindex}
              data-promotion-name={banner2datapromotionname}
              href={banner2link}
              title={banner2alt}
            >
              <img alt={banner2alt} src={banner2image} title={banner2alt} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

MarketingBanners.propTypes = {
  /** Button contents */
  banner1image: PropTypes.string.isRequired,
  banner1alt: PropTypes.string.isRequired,
  banner1link: PropTypes.string.isRequired,
  banner2image: PropTypes.string.isRequired,
  banner2alt: PropTypes.string.isRequired,
  banner2link: PropTypes.string.isRequired,
  banner1dataElementType: PropTypes.string,
  banner1datapromotionindex: PropTypes.string,
  banner1datapromotionname: PropTypes.string,
  banner2dataElementType: PropTypes.string,
  banner2datapromotionindex: PropTypes.string,
  banner2datapromotionname: PropTypes.string,
};
