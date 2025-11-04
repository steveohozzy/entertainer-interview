import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const ChristmasPods3x2 = ({
  pod1image,
  pod1alt,
  pod1link,
  pod2image,
  pod2alt,
  pod2link,
  pod3image,
  pod3alt,
  pod3link,
  pod4image,
  pod4alt,
  pod4link,
  pod5image,
  pod5alt,
  pod5link,
  pod6image,
  pod6alt,
  pod6link,
  pod1dataelementtype,
  pod1datapromotionname,
  pod1datapromotionindex,
  pod1datagtmvisfirstonscreen8511273_2666,
  pod1datagtmvistotalvisibletime8511273_2666,
  pod1datagtmvishasfired8511273_2666,
  pod2dataelementtype,
  pod2datapromotionname,
  pod2datapromotionindex,
  pod2datagtmvisfirstonscreen8511273_2666,
  pod2datagtmvistotalvisibletime8511273_2666,
  pod2datagtmvishasfired8511273_2666,
  pod3dataelementtype,
  pod3datapromotionname,
  pod3datapromotionindex,
  pod3datagtmvisfirstonscreen8511273_2666,
  pod3datagtmvistotalvisibletime8511273_2666,
  pod3datagtmvishasfired8511273_2666,
  pod4dataelementtype,
  pod4datapromotionname,
  pod4datapromotionindex,
  pod4datagtmvisfirstonscreen8511273_2666,
  pod4datagtmvistotalvisibletime8511273_2666,
  pod4datagtmvishasfired8511273_2666,
  pod5dataelementtype,
  pod5datapromotionname,
  pod5datapromotionindex,
  pod5datagtmvisfirstonscreen8511273_2666,
  pod5datagtmvistotalvisibletime8511273_2666,
  pod5datagtmvishasfired8511273_2666,
  pod6dataelementtype,
  pod6datapromotionname,
  pod6datapromotionindex,
  pod6datagtmvisfirstonscreen8511273_2666,
  pod6datagtmvistotalvisibletime8511273_2666,
  pod6datagtmvishasfired8511273_2666,
}) => {
  return (
     <>
     
  <style>
    {`
  .christmas-homepage {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .christmas-homepage .category-pods {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
  }

  .christmas-homepage .category-pods .pod {
    padding: 10px;
    width: 50%;
  }

  .christmas-homepage .category-pods .pod a {
    display: block;
    border-radius: 10px;
    box-shadow: 0 0 3px rgba(3, 33, 33, 0.4);
    overflow: hidden;
    transition: all 0.3s;
  }

  .christmas-homepage .category-pods .pod a:hover {
    transform: scale(1.1);
  }

  .christmas-homepage .category-pods .pod img {
    display: block;
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    .christmas-homepage .category-pods .pod {
      width: calc(100% / 6);
    }

    .christmas-homepage {
      padding: 0 10px;
    }
  }
  `}

</style>

<div class="christmas-homepage">
  <div class="category-pods">
  
    <div class="pod">
      <a href={pod1link} title={pod1alt} data-element-type={pod1dataelementtype} data-promotion-name={pod1datapromotionname} data-promotion-index={pod1datapromotionindex}>
        <img alt={pod1alt} src={pod1image} title={pod1alt} />
      </a>
    </div>

    <div class="pod">
      <a href={pod2link} title={pod2alt} data-element-type={pod2dataelementtype} data-promotion-name={pod2datapromotionname} data-promotion-index={pod2datapromotionindex} >
				<img alt={pod2alt} src={pod2image} title={pod2alt} />
			</a>
    </div>

    <div class="pod">
      <a href={pod3link} title={pod3alt} data-element-type={pod3dataelementtype} data-promotion-name={pod3datapromotionname} data-promotion-index={pod3datapromotionindex} >
				<img alt={pod3alt} src={pod3image} title={pod3alt} />
			</a>
    </div>

    <div class="pod">
      <a href={pod4link} title={pod4alt} data-element-type={pod4dataelementtype} data-promotion-name={pod4datapromotionname} data-promotion-index={pod4datapromotionindex} >
					<img alt={pod4alt} src={pod4image} title={pod4alt} />
				</a>
    </div>

    <div class="pod">
      <a href={pod5link} title={pod5alt} data-element-type={pod5dataelementtype} data-promotion-name={pod5datapromotionname} data-promotion-index={pod5datapromotionindex}>
					<img alt={pod5alt} src={pod5image} title={pod5alt} />
				</a>
    </div>

    <div class="pod">
      <a href={pod6link} title={pod6alt} data-element-type={pod6dataelementtype} data-promotion-name={pod6datapromotionname} data-promotion-index={pod6datapromotionindex} >
					<img alt={pod6alt} src={pod6image} title={pod6alt} />
				</a>
    </div>

  </div>
</div>
     
     </>
  );
};

ChristmasPods3x2.propTypes = {
  /** Christmas Pods contents */
  pod1image: PropTypes.string.isRequired,
  pod1alt: PropTypes.string,
  pod1link: PropTypes.string.isRequired,
  pod2image: PropTypes.string.isRequired,
  pod2alt: PropTypes.string,
  pod2link: PropTypes.string.isRequired,
  pod3image: PropTypes.string.isRequired,
  pod3alt: PropTypes.string,
  pod3link: PropTypes.string.isRequired,
  pod4image: PropTypes.string.isRequired,
  pod4alt: PropTypes.string,
  pod4link: PropTypes.string.isRequired,
  pod5image: PropTypes.string.isRequired,
  pod5alt: PropTypes.string,
  pod5link: PropTypes.string.isRequired,
  pod6image: PropTypes.string.isRequired,
  pod6alt: PropTypes.string,
  pod6link: PropTypes.string.isRequired,
  pod1dataelementtype: PropTypes.string,
  pod1datapromotionname: PropTypes.string,
  pod1datapromotionindex: PropTypes.string,
  pod2dataelementtype: PropTypes.string,
  pod2datapromotionname: PropTypes.string,
  pod2datapromotionindex: PropTypes.string,
  pod3dataelementtype: PropTypes.string,
  pod3datapromotionname: PropTypes.string,
  pod3datapromotionindex: PropTypes.string,
  pod4dataelementtype: PropTypes.string,
  pod4datapromotionname: PropTypes.string,
  pod4datapromotionindex: PropTypes.string,
  pod5dataelementtype: PropTypes.string,
  pod5datapromotionname: PropTypes.string,
  pod5datapromotionindex: PropTypes.string,
  pod6dataelementtype: PropTypes.string,
  pod6datapromotionname: PropTypes.string,
  pod6datapromotionindex: PropTypes.string,
};
