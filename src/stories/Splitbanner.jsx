import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const SplitBanner = ({
	backgroundcolor = '#dbe3ff',
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
			.split-banner-container {
			width: 100%;
				background-color: #dbe3ff;
			}
	.split-banner {
  max-width: 1200px;
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.split-banner a {
  width: 100%;
  display: block;
  padding: 5px;
}

.split-banner a img {
  width: 100%;
  height: auto;
}

@media (min-width: 768px) {
  .split-banner {
      padding: 0;
      flex-direction: row;
  }

  .split-banner a {
    width: 50%;
  }
}
      `}
	
</style>
<div class="split-banner-container" style={{backgroundColor: backgroundcolor}}>
	<div class="split-banner">
		<a href={banner1link} title={banner1alt} data-element-type={banner1dataElementType} data-promotion-index={banner1datapromotionindex} data-promotion-name={banner1datapromotionname}>
			<img src={banner1image} alt={banner1alt} title={banner1alt} />
		</a>
		<a href={banner2link} title={banner2alt} data-element-type={banner2dataElementType} data-promotion-index={banner2datapromotionindex} data-promotion-name={banner2datapromotionname}>
			<img src={banner2image} alt={banner2alt} title={banner2alt} />
		</a>
	</div>
</div>
</>
  );
};

SplitBanner.propTypes = {
  /** Split Banner contents */
	backgroundcolor: PropTypes.string,
	banner1image: PropTypes.string,
	banner1alt: PropTypes.string,
	banner1link: PropTypes.string,
  banner1dataElementType: PropTypes.string,
  banner1datapromotionindex: PropTypes.string,
  banner1datapromotionname: PropTypes.string,
	banner2image: PropTypes.string,
	banner2alt: PropTypes.string,
	banner2link: PropTypes.string,
  banner2dataElementType: PropTypes.string,
  banner2datapromotionindex: PropTypes.string,
  banner2datapromotionname: PropTypes.string,
};
