import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const HomePods = ({
  textcolor,
  backgroundcolor,
  bordercolor,
  linkhovercolor,
	pod1isblog,
  pod1image,
  pod1alt,
  pod1title,
  pod1text,
  pod1buttontext,
  pod1link,
  pod1dataelementtype,
	pod1datapromotionname,
  pod1datapromotionindex,
  pod1datagtmvisfirstonscreen8511273_2666,
  pod1datagtmvishasfired8511273_2666,
  pod1datagtmvistotalvisibletime8511273_2666,
	pod2isblog,
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
	
	.elc-story-modules {
		margin: 40px 0 0;
		padding: 0;
	}
	
		.elc-story-modules ul {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin: 0 auto;
			padding: 0 20px;
			list-style: none;
			max-width: 944px;
		}
	
			.elc-story-modules li {
				display: flex;
				margin: 0 0 20px;
			}
	
				.elc-story-modules li a {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					margin: 0;
					padding: 0;
					color: ${textcolor};
					text-align: center;
					border: solid 4px ${bordercolor};
					border-radius: 12px;
					background: ${backgroundcolor};
				}
	
					.elc-story-modules li a div {
						width: 100%;
					}
	
						.elc-story-modules li a div:last-child {
							padding: 20px;
						}
	
						.elc-story-modules .story-module-image {
							position: relative;
							width: 100%;
						}
	
							.elc-story-modules li a div img, .elc-story-modules li a div iframe {
								width: 100%;
								border-radius: 8px;
							}
	
							.elc-story-modules li a div iframe {
								height: 49vw;
							}
	
								.elc-story-modules .story-module-image img.blog-frame {
									position: absolute;
									bottom: 0;
								}
	
						.elc-story-modules h3 {
							margin: 0 0 20px;
							padding: 0;
							font-size: 18px;
							line-height: 100%;
							font-weight: bold;
							color: ${textcolor};
						}
	
						.elc-story-modules p {
							margin: 0 0 20px;
							padding: 0;
							font-size: 14px;
							line-height: 140%;
						}
	
						.elc-story-modules .call-to-action {
							margin: 0;
							font-size: 14px;
							line-height: 100%;
							font-weight: bold;
							text-decoration: underline;
							transition: color 0.5s;
						}
	
							.elc-story-modules .call-to-action:hover {
								color: ${linkhovercolor};
							}
	
	
	.elc-story-full-width {
		margin: 0 0 40px;
		padding: 0;
	}
	
		.elc-story-full-width ul {
			margin: 0 auto;
			padding: 0 20px;
			list-style: none;
			max-width: 944px;
		}
	
			.elc-story-full-width li a {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				align-items: center;
				margin: 0;
				padding: 0;
				color: ${textcolor};
				text-align: center;
				border: solid 4px ${bordercolor};
				border-radius: 12px;
				background: ${backgroundcolor};
			}
	
				.elc-story-full-width li a div {
					width: 100%;
				}
	
					.elc-story-full-width li a div:last-child {
						padding: 20px;
					}
	
			.elc-story-full-width iframe, .elc-story-full-width img {
				display: block;
				margin: 0;
				width: 100%;
				height: 49vw;
				border-radius: 8px;
			}
	
			.elc-story-full-width h3 {
				margin: 0 0 20px;
    			padding: 0;
				font-size: 18px;
				line-height: 100%;
				font-weight: bold;
				color: ${textcolor};
			}
	
			.elc-story-full-width p {
				margin: 0 0 20px;
				padding: 0;
				font-size: 14px;
				line-height: 140%;
			}
	
			.elc-story-full-width .call-to-action {
				margin: 0;
				font-size: 14px;
				line-height: 100%;
				font-weight: bold;
				text-decoration: underline;
				transition: color 0.5s;
			}
	
				.elc-story-full-width .call-to-action:hover {
					color: ${linkhovercolor};
				}
  
	@media (min-width: 768px) {
		
		.elc-story-modules {
			margin: 30px 0 0;
		}
		
			.elc-story-modules ul {
				padding: 30px 30px 0;
			}
		
				.elc-story-modules li {
					margin: 0 0 40px;
					width: calc(100% / 2 - 20px);
				}
				
					.elc-story-modules li a div iframe {
						height: 24.5vw;
					}
		
		.elc-story-full-width {
			margin: 0 0 30px;
		}
		
			.elc-story-full-width ul {
				padding: 0 30px 30px;
			}
		
				.elc-story-full-width li a {
					display: flex;
					justify-content: space-between;
				}
		
					.elc-story-full-width li a div {
						width: calc(100% / 2 - 15px);
					}
		
						.elc-story-full-width li a div:last-child {
							padding: 30px 30px 30px 0;
						}
		
						.elc-story-full-width iframe, .elc-story-full-width img {
							height: 236px;
						}
    }
  
    
	@media (min-width: 1024px) {
		
		.elc-story-modules li a div iframe {
			height: 252px;
		}
	
	}

    `}
    </style>
     <div class="elc-story-modules">
	
	<ul>
		
		<li>
			
			<a href={pod1link} title={pod1alt} data-element-type={pod1dataelementtype} data-promotion-name={pod1datapromotionname} data-promotion-index={pod1datapromotionindex} >
				
				<div class="story-module-image">

					{pod1isblog &&
						<img src="https://www.elc.co.uk/medias/elc-blog-frame.png?context=bWFzdGVyfHJvb3R8MTA0ODV8aW1hZ2UvcG5nfGFHUXdMMmcxWWk4eE1qTXlPRFUxTnpnM01URXpOQzlsYkdNdFlteHZaeTFtY21GdFpTNXdibWN8OGQ5ZDljNjUyZDc1MmUyNTZmYmYxODA3ZDJmY2EwZjc0NzE0NWJjZDYxM2I1MjM0NWU3ZjQxMjMzMjBjYjRmZA" alt={pod1alt} title={pod1alt} class="blog-frame" />
					}
					
					<img src={pod1image} alt={pod1alt} title={pod1alt} />
				
				</div>
				
				<div>
					
					<h3>{pod1title}</h3>
					
					<p>{pod1text}</p>
					
					<span class="call-to-action">{pod1buttontext}</span>
				
				</div>
			
			</a>
		
		</li>
		
		<li>
			
			<a href={pod2link} title={pod2alt} data-element-type={pod2dataelementtype} data-promotion-name={pod2datapromotionname} data-promotion-index={pod2datapromotionindex} >
				
		<div class="story-module-image">

			{pod2isblog &&
				<img src="https://www.elc.co.uk/medias/elc-blog-frame.png?context=bWFzdGVyfHJvb3R8MTA0ODV8aW1hZ2UvcG5nfGFHUXdMMmcxWWk4eE1qTXlPRFUxTnpnM01URXpOQzlsYkdNdFlteHZaeTFtY21GdFpTNXdibWN8OGQ5ZDljNjUyZDc1MmUyNTZmYmYxODA3ZDJmY2EwZjc0NzE0NWJjZDYxM2I1MjM0NWU3ZjQxMjMzMjBjYjRmZA" alt={pod2alt} title={pod2alt} class="blog-frame" />
			}
		
					<img src={pod2image} alt={pod2alt} title={pod2alt} />
				
				</div>
				
				<div>
					
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

HomePods.propTypes = {
  /** Home Pod contents */
	pod1isblog: PropTypes.bool,
  textcolor: PropTypes.string,
  backgroundcolor: PropTypes.string,
  bordercolor: PropTypes.string,
  linkhovercolor: PropTypes.string,
  pod1image: PropTypes.string,
  pod1alt: PropTypes.string,
  pod1title: PropTypes.string,
  pod1text: PropTypes.string,
  pod1buttontext: PropTypes.string,
  pod1link: PropTypes.string,
  pod1dataelementtype: PropTypes.string,
  pod1datapromotionindex: PropTypes.string,
  pod1datapromotionname: PropTypes.string,
	pod2isblog: PropTypes.bool,
  pod2image: PropTypes.string,
  pod2alt: PropTypes.string,
  pod2title: PropTypes.string,
  pod2text: PropTypes.string,
  pod2buttontext: PropTypes.string,
  pod2link: PropTypes.string,
  pod2dataelementtype: PropTypes.string,
  pod2datapromotionindex: PropTypes.string,
  pod2datapromotionname: PropTypes.string,
};
