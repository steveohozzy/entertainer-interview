import PropTypes from "prop-types";

export const GamingHubHero = ({
  title,
  desktopBanner,
  desktopBannerAlt,
  mobileBanner,
  mobileBannerAlt,
  bannerLink,
  introText,
}) => {
 
  return (
    <>
      <style>
        {`
    .category-title {
    display: none;
  }

  #gaming-header-area {
    background-color: #fff;
    width: 100%;
    max-width: 940px;
    padding: 20px;
    margin: 0 auto;
  }

  .gaming-header-content {
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    padding: 20px 0;
    text-align: center;
  }

  .gaming-header-content h2 {
    text-transform: uppercase;
    background: linear-gradient(
      180deg,
      rgba(60, 60, 60, 0.9) 0%,
      rgba(40, 40, 40, 0.95) 50%,
      rgba(30, 30, 30, 1) 100%
    );
    color: #fff;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    font-size: 24px;
    border-radius: 8px;
    margin: 0;
    box-shadow: inset 0 4px 10px rgba(255,255,255,0.1);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    padding: 5px 0;
  }

  #gaming-header-area p {
    font-size: 12px;
    color: #292929;
    margin: 20px auto 0;
    width: 100%;
    max-width: 900px;
    text-align: center;
    line-height: 1.4;
  }

  .gaming-header-sign-up {
    position: relative;
    z-index: 1;
    border-radius: 16px;
    max-width: 900px;
    margin: 0 auto;
    overflow: visible;
    display: block;
    background-color: rgba(40, 40, 40, 0.95);
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  }

  .gaming-header-sign-up picture,
  .gaming-header-sign-up img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 16px;
  }

  /* Dark panel base */
  .gaming-header-sign-up::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(40,40,40,0.95);
    border-radius: 16px;
    z-index: -1;
  }

  /* Shimmer border around panel */
  .gaming-header-sign-up::after {
    content: '';
    position: absolute;
    top: -4px; left: -4px; right: -4px; bottom: -4px;
    border-radius: 16px;
    background: linear-gradient(
      270deg,
      rgba(255,110,199,0.8),
      rgba(0,255,255,0.8),
      rgba(255,110,199,0.8)
    );
    background-size: 600% 600%;
    z-index: -2;
    animation: shimmer 3s linear infinite;
  }

  @keyframes shimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
        `}
      </style>
      <div id="gaming-header-area">
        <div class="gaming-header-content">
          <h2>GAMING</h2>
        </div>
        <a href={bannerLink} class="gaming-header-sign-up">
          <picture>
            <source
              media="(max-width: 605px)"
              srcset={mobileBanner}
              alt={mobileBannerAlt} 
            />

            <img
              src={desktopBanner}
              alt={desktopBannerAlt}
            />
          </picture>
        </a>
        <p>{introText}</p>
      </div>
    </>
  );
};

GamingHubHero.propTypes = {
  title: PropTypes.string,
  desktopBanner: PropTypes.string,
  mobileBanner: PropTypes.string,
  bannerLink: PropTypes.string,
  introText: PropTypes.string,
};
