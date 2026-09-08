import PropTypes from "prop-types";

/** Primary UI component for user interaction */
export const Christmasmarketingbanners = ({
  modulebackgroundcolor,
  banner1image,
  banner1alt,
  banner1link,
  banner2image,
  banner2alt,
  banner2link,
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
      <div class="christmas-banners" style={{backgroundColor: modulebackgroundcolor}}>
        <ul>
          <li>
            <a
              href={banner1link}
              title={banner1alt}
            >
              <img alt={banner1alt} src={banner1image} title={banner1alt} />
            </a>
          </li>

          <li>
            <a
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

Christmasmarketingbanners.propTypes = {
  /** Button contents */
  modulebackgroundcolor: PropTypes.string,
  banner1image: PropTypes.string.isRequired,
  banner1alt: PropTypes.string.isRequired,
  banner1link: PropTypes.string.isRequired,
  banner2image: PropTypes.string.isRequired,
  banner2alt: PropTypes.string.isRequired,
  banner2link: PropTypes.string.isRequired,
};
