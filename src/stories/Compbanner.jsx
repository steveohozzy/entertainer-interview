import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const CompBanner = ({
  image,
  link,
  alt,
  dataElementType,
  datapromotionindex,
  datapromotionname,
}) => {
  return (
    <>
    <style>
      {`
    .banner-container {
        padding: 0 0 30px;
        background-color: #dbe3ff;
    }

    .banner-content {
        max-width: 1200px;
        padding: 0 20px;
        margin: 0 auto;
        display: flex;
        flex-flow: column;
        flex-direction: column;
    }

    .banner-content a {
      display: block;
    }

    .banner-content img {
      display: block;
      width: 100%;
      height: auto;
    }

    @media (min-width: 768px) {
      .banner-content {
        padding: 0;
      }
    }
      `}
 </style>
     <div class="banner-container">
      <div class="banner-content">
        <a href={link} data-element-type={dataElementType} data-promotion-name={datapromotionname} data-promotion-index={datapromotionindex}>
          <img src={image} alt={alt} />
          </a>
      </div>
    </div>
  </>
  );
};

CompBanner.propTypes = {
  /** Button contents */
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  alt: PropTypes.string,
  dataElementType: PropTypes.string,
  datapromotionindex: PropTypes.string,
  datapromotionname: PropTypes.string,
};
