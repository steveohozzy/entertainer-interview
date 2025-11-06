import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const ChristmasAgePods = ({
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
}) => {
  return (
     <>
     
  <style>
    {`

  .christmas-hub .age-pods {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
  }

  .christmas-hub .age-pods .age-pod {
    padding: 10px;
    width: 50%;
  }

  .christmas-hub .age-pods .age-pod a {
    display: block;
    border-radius: 10px;
    box-shadow: 0 0 3px rgba(3, 33, 33, 0.4);
    overflow: hidden;
    transition: all 0.3s;
  }

  .christmas-hub .age-pods .age-pod a:hover {
    transform: scale(1.1);
  }

  .christmas-hub .age-pods .age-pod img {
    display: block;
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    .christmas-hub .age-pods .age-pod {
      width: 25%;
    }
  }

  `}

</style>

<div class="christmas-hub">
  <div class="age-pods">
  
    <div class="age-pod">
      <a href={pod1link} title={pod1alt}>
        <img alt={pod1alt} src={pod1image} title={pod1alt} />
      </a>
    </div>

    <div class="age-pod">
      <a href={pod2link} title={pod2alt} >
				<img alt={pod2alt} src={pod2image} title={pod2alt} />
			</a>
    </div>

    <div class="age-pod">
      <a href={pod3link} title={pod3alt}>
				<img alt={pod3alt} src={pod3image} title={pod3alt} />
			</a>
    </div>

    <div class="age-pod">
      <a href={pod4link} title={pod4alt}>
					<img alt={pod4alt} src={pod4image} title={pod4alt} />
				</a>
    </div>

  </div>
</div>
     
     </>
  );
};

ChristmasAgePods.propTypes = {
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
};
