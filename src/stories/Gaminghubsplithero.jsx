import PropTypes from "prop-types";

export const GamingHubSplitHero = ({
  title,
  link,
  image,
  imagealt,
  buttontext,
  background,
}) => {
 
  return (
    <>
      <style>
        {`
    .hero-card-container {
                    margin-bottom: 20px;
                    max-width: 940px;
                    padding: 0 20px;
                    margin: 0 auto;
                }

                .hero-card {
                    max-width: 900px;
                    margin: 0 auto;
                    display: flex;
                    flex-flow: column;
                    flex-direction: column;
                    height: 100%;
                }

                .hero-card .media {
                    aspect-ratio: 335/188;
                    border-radius: 8px;
                    overflow: hidden;
                }

                .hero-card .media img,
                .hero-card .media iframe,
                .hero-card .media video {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                    position: relative;
                    z-index: 2;
                }

                .hero-card .hero-tile-info {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                    text-align: center;
                    background: ${background};
                    border-radius: 8px;
                    position: relative;
                    margin-top: -20px;
                    padding: 40px 20px 20px 20px;
                    flex-grow: 1;
                }

                .hero-card .hero-tile-info .brand-logo {
                    position: absolute;
                    top: -32px;
                    height: 40px;
                    z-index: 2;
                }

                .hero-card .hero-tile-info .brand-logo img,
                .hero-card .hero-tile-info .brand-logo svg {
                    height: 100%;
                    width: auto;
                }

                .hero-card .hero-tile-info h3 {
                    font-size: 20px;
                    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
                    font-weight: bold;
                    color: white;
                    margin: 0x;
                    line-height: 24px;
                }

                .hero-card .hero-tile-info .hero-blurb {
                    color: white;
                    font-size: 14px;
                    font-weight: 200;
                }

                .hero-card .hero-logo {
                    width: auto;
                    max-height: 80px;
                    max-width: 100%;
                }

                .hero-card .hero-tile-info h3 {
                      color: rgb(33, 33, 33);
                    }

                @media (min-width: 768px) {
                    .hero-card {
                        flex-flow: row-reverse;
                        align-items: stretch;
                        height: auto;
                    }

                    .hero-card.is-flipped {
                        flex-flow: row;
                    }

                    .hero-card .media {
                        width: 50%;
                        aspect-ratio: 16/9;
                    }

                    .hero-card .hero-tile-info {
                        padding: 20px 30px 20px 20px;
                        margin-top: 0;
                        margin-right: -20px;
                        width: calc(50% + 20px);
                    }

                    .hero-card.is-flipped .hero-tile-info {
                        margin-right: 0px;
                        margin-left: -20px;
                        width: calc(50% + 20px);
                    }

                    .hero-card .hero-tile-info .brand-logo {
                        position: relative;
                        top: 0;
                        margin-bottom: 20px;
                        height: 90px;
                    }

                    .hero-card .hero-tile-info h2 {
                        font-size: 24px;
                        margin: 0;
                    }

                    .hero-card .hero-tile-info .hero-blurb {
                        display: block;
                        margin: 0;
                    }
                }

 

  /* ---- BUTTON WITH SHIMMER ---- */
  .gaming-banner-button {
    position: relative;
    display: inline-block;
    font-size: 16px;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    padding: 12px 30px;
    border-radius: 30px;
    color: #fff;
    text-decoration: none;
    transition: all 0.3s;
    overflow: visible;
    cursor: pointer;
  }

  .gaming-banner-button span {
    position: relative;
    z-index: 2;
  }

  .gaming-banner-button::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    border-radius: 30px;
    background-color: #292929;
    z-index: 1;
    transition: all 0.3s;
  }
  .gaming-banner-button::after {
    content: '';
    position: absolute;
    top: -3px; left: -3px; right: -3px; bottom: -3px;
    border-radius: 34px;
    background: linear-gradient(
        270deg,
        rgba(255,110,199,0.8),
        rgba(0,255,255,0.8),
        rgba(255,110,199,0.8)
    );
    background-size: 600% 600%;
    z-index: 0;
    animation: shimmer 3s linear infinite;
  }

  /* Button hover effect */
  .gaming-banner-button:hover {
    color: #292929;
    background-color: #fff;
  }

  .gaming-banner-button:hover::before {
    background-color: #fff;
  }

  @keyframes shimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
        `}
      </style>
      <div class="hero-card-container">
        <a href="https://www.thetoyshop.com/search?text=LEGO%20Batman%20Legacy%20of%20The%20Dark%20Knight" class="hero-card">
          <div class="media">
            <img alt="C&amp;C Promo" src="https://www.thetoyshop.com/medias/edited-photo-49-.png?context=bWFzdGVyfHJvb3R8MzQ3NDgxfGltYWdlL3BuZ3xhREl6TDJnNE5TOHhNamMzTXpBd05UZzROVFEzTUM5bFpHbDBaV1F0Y0dodmRHOGdLRFE1S1M1d2JtY3wxNmJkYTc2YTg2ZjQ4Zjg0NjdhZDE0ZDAyMzg3NzZlODE0YTM0MTA3ODc4OTFhMDc0ZTljYjMxMDcwNDIxNjE4" />
          </div>
          <div class="hero-tile-info">
              <h3>{title}</h3>
              <button class="gaming-banner-button"><span>{buttontext}</span></button>
          </div>
        </a>
      </div>
    </>
  );
};

GamingHubSplitHero.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  imagealt: PropTypes.string,
  buttontext: PropTypes.string,
  background: PropTypes.string,
};
