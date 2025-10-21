import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const ImageHero = ({
  desktopimage,
  mobileimage,
  link,
  alt,
  dataElementType,
  datapromotionindex,
  datapromotionname,
  datagtmvisfirstonscreen8511273_2666,
  datagtmvistotalvisibletime8511273_2666,
  datagtmvishasfired8511273_2666,
}) => {
  return (
     <a href={link} title={alt} data-element-type={dataElementType} data-promotion-index={datapromotionindex} data-promotion-name={datapromotionname} data-gtm-vis-first-on-screen8511273_2666={datagtmvisfirstonscreen8511273_2666} data-gtm-vis-total-visible-time8511273_2666={datagtmvistotalvisibletime8511273_2666} data-gtm-vis-has-fired8511273_2666={datagtmvishasfired8511273_2666}>
      <picture>
        <source media="(min-width:768px)" srcset={desktopimage} />
        <img src={mobileimage} alt={alt} />
      </picture>
			</a>
  );
};

ImageHero.propTypes = {
  /** Button contents */
  desktopimage: PropTypes.string.isRequired,
  mobileimage: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  alt: PropTypes.string,
  dataElementType: PropTypes.string,
  datapromotionindex: PropTypes.string,
  datapromotionname: PropTypes.string,
  datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  datagtmvishasfired8511273_2666: PropTypes.string, 
};
