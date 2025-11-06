import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const QuickLinksPods = ({
	bordercolor,
	buttontextcolor,
	buttonbackgroundcolor,
  pod1image,
  pod1alt,
  pod1link,
  pod1text,
  pod2image,
	pod2alt,
	pod2link,
	pod2text,
	pod3image,
	pod3alt,
	pod3link,
	pod3text,
	pod4image,
	pod4alt,
	pod4link,
	pod4text,
	pod5image,
	pod5alt,
	pod5link,
	pod5text,
	pod6image,
	pod6alt,
	pod6link,
	pod6text,
}) => {
  return (
    <>
    <style>
      {`
	
	.tonies-quicklinks {
		margin: 15px 0 15px;
		padding: 0;	
		width: 100%;	
		background: #ffffff;
	}
	
		.tonies-quicklinks ul {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin: 30px auto;
			padding: 0;
			max-width: 944px;
		}

			.tonies-quicklinks li {
				margin: 0 auto;
				padding: 0;
				list-style: none;
				text-align: center;
				width: calc(100% / 3 - 10px);
				transition: opacity 0.5s;
				-webkit-transition: opacity 0.3s;
				opacity: 1;
				max-width: 944px;
			}

				.tonies-quicklinks li:hover {
					opacity: 0.5
				}

				.tonies-quicklinks li img {
					display: block;
					width: 100%;
				}

				.tonies-quicklinks h3 {
					mobile
                    white-space: normal;
                    width: 100%;
					height: auto;
            		font: 14px/140% "Nunito Bold", "Tahoma Bold", sans-serif;
                    letter-spacing: 0.5px;
					border: 3px solid ${bordercolor};
                    color: ${buttontextcolor};
                    background: ${buttonbackgroundcolor};
                    margin: 15px 0 10px;
					padding: 15px 0;
                    border-radius: 20px;
                    display: inline-block;
                    text-decoration: none;
                    text-transform: none;
							
                  }
		
				

    @media (min-width: 768px) {
		
		.tonies-quicklinks {
			padding: 30px 0px 0px;
		}

			.tonies-quicklinks ul {
				margin: 0 auto;
				padding: 0;
			}

				.tonies-quicklinks li {
					margin: 0;
					width: calc(50% / 3 - 20px);
				}
		
					.tonies-quicklinks h3 {
                    desktop
			        white-space: normal;
                    width: 100%;
                    font: 14px/140% "Nunito Bold", "Tahoma Bold", sans-serif;
                    letter-spacing: 0.5px;
                    border: 3px solid ${bordercolor};
                    color: ${buttontextcolor};
                    background: ${buttonbackgroundcolor};
                    margin: 15px 0 10px;
					padding: 15px 0;
                    border-radius: 20px;
                    height: auto;
                    display: inline-block;
                    text-decoration: none;
                    text-transform: none;
                   
                  }

    @media (min-width: 1024px) {
	
				.tonies-quicklinks h1 {
			background-size: contain;
		}
		
			.tonies-quicklinks ul.pods li {
				width: calc(100% / 4 - 20px);
			}

    }
      `}
	
</style>

<div class="tonies-quicklinks">

	<ul>
		
		 <li>
            <a href={pod1link} title={pod1alt}>
				
				<img src={pod1image} alt={pod1alt} title={pod1alt} />
				
				<h3>{pod1text}</h3>
				
			</a>
			
		</li>

		{pod2image &&

		<li>
            <a href={pod2link} title={pod2alt}>
				
				<img src={pod2image} alt={pod2alt} title={pod2alt} />
				
				<h3>{pod2text}</h3>
				
			</a>
			
		</li>

		}

		{pod3image &&

		<li>
            <a href={pod3link} title={pod3alt}>
				
				<img src={pod3image} alt={pod3alt} title={pod3alt} />
				
				<h3>{pod3text}</h3>
				
			</a>
			
		</li>

		}

		{pod4image &&

		<li>
            <a href={pod4link} title={pod4alt}>
				
				<img src={pod4image} alt={pod4alt} title={pod4alt} />
				
				<h3>{pod4text}</h3>
				
			</a>
			
		</li>

		}

		{pod5image &&

		<li>
            <a href={pod5link} title={pod5alt}>
				
				<img src={pod5image} alt={pod5alt} title={pod5alt} />
				
				<h3>{pod5text}</h3>
				
			</a>
			
		</li>

		}

		{pod6image &&

		<li>
            <a href={pod6link} title={pod6alt}>
				
				<img src={pod6image} alt={pod6alt} title={pod6alt} />
				
				<h3>{pod6text}</h3>
				
			</a>
			
		</li>

		}


	</ul>
		
</div>
</>
  );
};

QuickLinksPods.propTypes = {
  /** Quick Links Pods contents */
	bordercolor: PropTypes.string,
	buttontextcolor: PropTypes.string,
	buttonbackgroundcolor: PropTypes.string,
  pod1image: PropTypes.string,
	pod1alt: PropTypes.string,
	pod1link: PropTypes.string,
	pod1text: PropTypes.string,
	pod2image: PropTypes.string,
	pod2alt: PropTypes.string,
	pod2link: PropTypes.string,
	pod2text: PropTypes.string,
	pod3image: PropTypes.string,
	pod3alt: PropTypes.string,
	pod3link: PropTypes.string,
	pod3text: PropTypes.string,
	pod4image: PropTypes.string,
	pod4alt: PropTypes.string,
	pod4link: PropTypes.string,
	pod4text: PropTypes.string,
	pod5image: PropTypes.string,
	pod5alt: PropTypes.string,
	pod5link: PropTypes.string,
	pod5text: PropTypes.string,
	pod6image: PropTypes.string,
	pod6alt: PropTypes.string,
	pod6link: PropTypes.string,
	pod6text: PropTypes.string,
};
