import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const CompBanner = ({
  image,
  link,
  alt,
  dataElementType,
  datapromotionindex,
  datapromotionname,
  datagtmvisrecentonscreen8511273_2666,
  datagtmvisfirstonscreen8511273_2666,
  datagtmvistotalvisibletime8511273_2666,
  datagtmvishasfired8511273_2666,
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
        <a href={link} data-element-type={dataElementType} data-promotion-name={datapromotionname} data-promotion-index={datapromotionindex} data-gtm-vis-recent-on-screen8511273_2666={datagtmvisrecentonscreen8511273_2666} data-gtm-vis-first-on-screen8511273_2666={datagtmvisfirstonscreen8511273_2666} data-gtm-vis-total-visible-time8511273_2666={datagtmvistotalvisibletime8511273_2666} data-gtm-vis-has-fired8511273_2666={datagtmvishasfired8511273_2666}>
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
  datagtmvisrecentonscreen8511273_2666: PropTypes.string,
  datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  datagtmvishasfired8511273_2666: PropTypes.string, 
};
