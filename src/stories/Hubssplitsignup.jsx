import PropTypes from "prop-types";

export const Hubssplitsignup = ({
  flipped,
  title,
  link,
  image,
  imagealt,
  background,
  textColor,
  buttontext,
  buttonBgColor,
  buttonTextColor,
  buttonHoverBgColor,
  buttonHoverTextColor,
  buttonBorderColor,
  buttonHoverBorderColor,
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
                    color: ${textColor};
                    margin: 0x;
                    line-height: 24px;
                }

                .hero-card .hero-tile-info .hero-blurb {
                    color: background,
                    font-size: 14px;
                    font-weight: 200;
                }

                .hero-card .hero-logo {
                    width: auto;
                    max-height: 80px;
                    max-width: 100%;
                }

                .hero-card .hero-tile-info h3 {
                      color: ${textColor};
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

 

  .signup-banner-button {
    position: relative;
    display: inline-block;
    font-size: 16px;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    padding: 12px 30px;
    border-radius: 30px;
    color: ${buttonTextColor};
    background-color: ${buttonBgColor};
    border: 3px solid ${buttonBorderColor};
    text-decoration: none;
    transition: all 0.3s;
    overflow: visible;
    cursor: pointer;
  }

  .signup-banner-button span {
    position: relative;
    z-index: 2;
  }

  .signup-banner-button:hover {
    color: ${buttonHoverTextColor};
    background-color: ${buttonHoverBgColor};
  }
        `}
      </style>
      <div class="hero-card-container">
        <a href="https://www.thetoyshop.com/search?text=LEGO%20Batman%20Legacy%20of%20The%20Dark%20Knight" class={`hero-card ${flipped ? 'is-flipped' : ''}`}>
          <div class="media">
            <img alt="C&amp;C Promo" src="https://www.thetoyshop.com/medias/edited-photo-49-.png?context=bWFzdGVyfHJvb3R8MzQ3NDgxfGltYWdlL3BuZ3xhREl6TDJnNE5TOHhNamMzTXpBd05UZzROVFEzTUM5bFpHbDBaV1F0Y0dodmRHOGdLRFE1S1M1d2JtY3wxNmJkYTc2YTg2ZjQ4Zjg0NjdhZDE0ZDAyMzg3NzZlODE0YTM0MTA3ODc4OTFhMDc0ZTljYjMxMDcwNDIxNjE4" />
          </div>
          <div class="hero-tile-info">
              <h3>{title}</h3>
              <button class="signup-banner-button"><span>{buttontext}</span></button>
          </div>
        </a>
      </div>
    </>
  );
};

Hubssplitsignup.propTypes = {
  flipped: PropTypes.bool,
  title: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  imagealt: PropTypes.string,
  buttontext: PropTypes.string,
  background: PropTypes.string,
  textColor: PropTypes.string,
  buttonBgColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonHoverBgColor: PropTypes.string,
  buttonHoverTextColor: PropTypes.string,
  buttonBorderColor: PropTypes.string,
  buttonHoverBorderColor: PropTypes.string,
};
