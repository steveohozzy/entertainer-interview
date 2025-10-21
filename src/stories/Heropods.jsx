import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const HeroPods = ({
  textcolor,
  backgroundcolor,
  bordercolor,
  buttoncolor,
  buttonbackgroundcolor,
  buttonhovercolor,
  buttonhoverbackcolor,
  pod1image,
  pod1alt,
  pod1title,
  pod1text,
  pod1buttontext,
  pod1link,
  pod1dataelementtype,
  pod1datapromotionindex,
  pod1datapromotionname,
  pod1datagtmvisfirstonscreen8511273_2666,
  pod1datagtmvishasfired8511273_2666,
  pod1datagtmvistotalvisibletime8511273_2666,
  pod2image,
  pod2alt,
  pod2title,
  pod2text,
  pod2buttontext,
  pod2link,
  pod2dataelementtype,
  pod2datapromotionindex,
  pod2datapromotionname,
  pod2datagtmvisfirstonscreen8511273_2666,
  pod2datagtmvishasfired8511273_2666,
  pod2datagtmvistotalvisibletime8511273_2666,
}) => {
  return (
    <>
    <style>
    {`
	
	.hp-half-hero-modules {
		margin: 0;
		padding: 0 20px 20px;
	}
	
		.hp-half-hero-modules ul {
			display: flex;
    		flex-wrap: wrap;
    		justify-content: space-between;
			margin: 0 auto;
			padding: 0;
			list-style: none;
			max-width: 1400px;
		}
	
			.hp-half-hero-modules li {
				margin: 20px 0 0;
				border: solid 8px ${bordercolor};
				background: ${backgroundcolor};
			}
	
				.hp-half-hero-modules li a {
					color: ${textcolor};
				}
	
					.hp-half-hero-modules .half-hero-module-image {
						width: 100%;
					}
	
						.hp-half-hero-modules .half-hero-module-image img {
							width: 100%;
						}
	
						.hp-half-hero-modules .half-hero-module-image iframe {
							display: block;
							width: 100%;
							height: 44vw;
							border-radius: 4px;
						}
	
					.hp-half-hero-modules .half-hero-module-copy {
						margin: 0;
						padding: 20px;
						text-align: center;
						width: 100%;
					}
	
						.hp-half-hero-modules h3 {
							margin: 0 0 10px;
    						padding: 0;
							font-size: 26px;
							line-height: 100%;
							font-weight: bold;
							letter-spacing: 0;
							text-transform: none;
							color: ${textcolor};
						}
	
						.hp-half-hero-modules p {
							margin: 0 0 15px;
							padding: 0;
							font-size: 14px;
							line-height: 140%;
						}
	
						.hp-half-hero-modules .call-to-action {
							display: inline-block;
							margin: 0;
							padding: 10px 30px;
							font-size: 14px;
							line-height: 100%;
							font-weight: bold;
							color: ${buttoncolor};
							background: ${buttonbackgroundcolor};
							border-radius: 6px;
							transition: background-color 0.5s;
						}
	
							.hp-half-hero-modules li:hover .call-to-action {
								color: ${buttonhovercolor};
								background-color: ${buttonhoverbackcolor}
							}
	
	
	@media (min-width: 768px) {
		
		.hp-half-hero-modules {
			padding: 40px;
		}
		
			.hp-half-hero-modules li {
				margin: 0;
				width: calc(100% / 2 - 20px);
			}
		
				.hp-half-hero-modules .half-hero-module-image iframe {
					height: 22vw;
				}
	
	}
	
	
	@media (min-width: 1024px) {
		
		.hp-half-hero-modules .half-hero-module-image iframe {
			height: 240px;
		}
	
	}
	
	
	@media (min-width: 1400px) {
		
		.hp-half-hero-modules .half-hero-module-copy {
			padding: 30px;
		}
	
	}

    `}
    </style>
     <div class="hp-half-hero-modules">
	
	<ul>
		
		
		<li>
			
			<a href={pod1link} title={pod1alt} data-element-type={pod1dataelementtype} data-promotion-index={pod1datapromotionindex} data-promotion-name={pod1datapromotionname} data-gtm-vis-first-on-screen8511273_2666={pod1datagtmvisfirstonscreen8511273_2666} data-gtm-vis-total-visible-time8511273_2666={pod1datagtmvistotalvisibletime8511273_2666} data-gtm-vis-has-fired8511273_2666={pod1datagtmvishasfired8511273_2666}>
				
				<div class="half-hero-module-image">
					
					<img src={pod1image} alt={pod1alt} title={pod1alt} />
				
				</div>
				
				<div class="half-hero-module-copy">
					
					<h3>{pod1title}</h3>
						
					<p>{pod1text}</p>
					
					<span class="call-to-action">{pod1buttontext}</span>
				
				</div>
			
			</a>
		
		</li>


    <li>
			
			<a href={pod2link} title={pod2alt} data-element-type={pod2dataelementtype} data-promotion-index={pod2datapromotionindex} data-promotion-name={pod2datapromotionname} data-gtm-vis-first-on-screen8511273_2666={pod2datagtmvisfirstonscreen8511273_2666} data-gtm-vis-total-visible-time8511273_2666={pod2datagtmvistotalvisibletime8511273_2666} data-gtm-vis-has-fired8511273_2666={pod2datagtmvishasfired8511273_2666}>
				
				<div class="half-hero-module-image">
					
					<img src={pod2image} alt={pod2alt} title={pod2alt} />
				
				</div>
				
				<div class="half-hero-module-copy">
					
					<h3>{pod2title}</h3>
						
					<p>{pod2text}</p>
					
					<span class="call-to-action">{pod2buttontext}</span>
				
				</div>
			
			</a>
		
		</li>
		
	
	</ul>

</div>
</>
  );
};

HeroPods.propTypes = {
  /** Hero Pod contents */
  textcolor: PropTypes.string,
  backgroundcolor: PropTypes.string,
  bordercolor: PropTypes.string,
  buttoncolor: PropTypes.string,
  buttonbackgroundcolor: PropTypes.string,
  buttonhovercolor: PropTypes.string,
  buttonhoverbackcolor: PropTypes.string,
  pod1image: PropTypes.string,
  pod1alt: PropTypes.string,
  pod1title: PropTypes.string,
  pod1text: PropTypes.string,
  pod1buttontext: PropTypes.string,
  pod1link: PropTypes.string,
  pod1dataelementtype: PropTypes.string,
  pod1datapromotionindex: PropTypes.string,
  pod1datapromotionname: PropTypes.string,
  pod1datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  pod1datagtmvishasfired8511273_2666: PropTypes.string,
  pod1datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  pod2image: PropTypes.string,
  pod2alt: PropTypes.string,
  pod2title: PropTypes.string,
  pod2text: PropTypes.string,
  pod2buttontext: PropTypes.string,
  pod2link: PropTypes.string,
  pod2dataelementtype: PropTypes.string,
  pod2datapromotionindex: PropTypes.string,
  pod2datapromotionname: PropTypes.string,
  pod2datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  pod2datagtmvishasfired8511273_2666: PropTypes.string,
  pod2datagtmvistotalvisibletime8511273_2666: PropTypes.string,
};
