import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const ElcChristmasPods = ({
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

	.elc-hp-christmas-price-pods {
		margin: 0 auto;
		padding: 0 20px;
		max-width: 944px;
	}
	
		.elc-hp-christmas-price-pods ul {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin: 20px auto 0;
			padding: 0;
		}

			.elc-hp-christmas-price-pods ul li {
				display: flex;
				flex-wrap: wrap;
				align-content: center;
				margin: 0 0 20px;
				padding: 0;
				list-style: none;
				width: calc(100% / 2 - 10px);
				transition: opacity 0.5s;
				-webkit-transition: opacity 0.5s;
				opacity: 1;
				
			}
	
				.elc-hp-christmas-price-pods ul li a {
					width: 100%;
				}

				.elc-hp-christmas-price-pods ul li:hover {
					opacity: 0.5;
				}

				.elc-hp-christmas-price-pods ul li img {
					display: block;
					width: 100%;
				}
	
	
	 @media (min-width: 768px) {
		 
		 .elc-hp-christmas-price-pods {
			 margin: 30px auto;
			 padding: 0 30px;
		 }
		 
			 .elc-hp-christmas-price-pods ul {
				 margin: 30px auto;
			 }

				 .elc-hp-christmas-price-pods ul li {
					 margin: 0;
					 width: calc(100% / 4 - 10px);
				 }
	
	}


    @media (min-width: 1024px) {
		
		
			.elc-hp-christmas-price-pods ul li {
				 width: calc(100% / 4 - 20px);
			 }
    }
  `}

</style>

<div class="elc-hp-christmas-price-pods">

	<ul>
		<li>
  	    <a href={pod1link} title={pod1alt}>
					<img alt={pod1alt} src={pod1image} title={pod1alt} />  
			</a>
		</li>
	
    <li>
  	    <a href={pod2link} title={pod2alt}>
					<img alt={pod2alt} src={pod2image} title={pod2alt} />  
			</a>
		</li>

    <li>
  	    <a href={pod3link} title={pod3alt}>
					<img alt={pod3alt} src={pod3image} title={pod3alt} />  
			</a>
		</li>

    <li>
  	    <a href={pod4link} title={pod4alt}>
					<img alt={pod4alt} src={pod4image} title={pod4alt} />  
			</a>
		</li>
		

	</ul>

</div>
     
     </>
  );
};

ElcChristmasPods.propTypes = {
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
