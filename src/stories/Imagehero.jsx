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
}) => {
  return (
     <a href={link} title={alt} data-element-type={dataElementType} data-promotion-index={datapromotionindex} data-promotion-name={datapromotionname} >
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
};
