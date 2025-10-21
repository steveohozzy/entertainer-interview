import PropTypes from "prop-types";

/** Primary UI component for user interaction */
export const ChristmasHero = ({
  hero1image,
  hero1alt,
  hero1link,
  hero1title,
  hero1subtitle,
  hero1buttontext,
  hero2image,
  hero2alt,
  hero2link,
  hero2title,
  hero2subtitle,
  hero2buttontext,
}) => {
  return (
    <>
      <style>
        {`
  .christmas-hub {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 20px;
  }

  .christmas-hub .hero {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
  }

  .christmas-hub .hero .hero-panel {
    width: 100%;
    padding: 10px;
  }

  .christmas-hub .hero .hero-panel img {
    width: 100%;
    height: auto;
    display: block;
    transition: all 0.3s;
  }

  .christmas-hub .hero .hero-panel .panel-content {
    background-color: #fff;
    position: relative;
    z-index: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .christmas-hub .hero .hero-panel a {
    text-align: center;
    background-color: #fff;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(3, 33, 33, 0.4);
  }

  .christmas-hub .hero .hero-panel a .title {
    font: 26px/140% "VAG Rounded Std Bold", "Tahoma Bold", sans-serif;
    color: #000;
    margin-top: 10px;
  }

  .christmas-hub .hero .hero-panel a .subtitle {
    font: 18px/140% "VAG Rounded Std Bold", "Tahoma Bold", sans-serif;
    color: #000;
    margin: 10px 0;
  }

  .christmas-hub .hero .hero-panel a .button {
    transition: all 0.3s;
    border-radius: 10px;
    background-color: #991715;
    color: #fff;
    min-height: 45px;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .christmas-hub .hero .hero-panel a:hover img {
    transform: scale(1.1);
  }

  .christmas-hub .hero .hero-panel a:hover .button {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    .christmas-hub .hero .hero-panel {
      width: 50%;
    }
  }
`}
      </style>
      <div class="christmas-hub">
        <div class="hero">
          <div class="hero-panel">
            <a href={hero1link}>
              <img
                src={hero1image}
                alt={hero1alt}
              />
              <div class="panel-content">
                <div class="title">
                  {hero1title}
                </div>
                <div class="subtitle">
                  {hero1subtitle}
                </div>
                <span class="button">{hero1buttontext}</span>
              </div>
            </a>
          </div>

          <div class="hero-panel">
            <a href={hero2link}>
              <img
                src={hero2image}
                alt={hero2alt}
              />
              <div class="panel-content">
                <div class="title">
                  {hero2title}
                </div>
                <div class="subtitle">
                  {hero2subtitle}
                </div>
                <span class="button">{hero2buttontext}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

ChristmasHero.propTypes = {
  /** Button contents */
  hero1image: PropTypes.string.isRequired,
  hero1alt: PropTypes.string,
  hero1link: PropTypes.string.isRequired,
  hero1title: PropTypes.string,
  hero1subtitle: PropTypes.string,
  hero1buttontext: PropTypes.string,
  hero2image: PropTypes.string.isRequired,
  hero2alt: PropTypes.string,
  hero2link: PropTypes.string.isRequired,
  hero2title: PropTypes.string,
  hero2subtitle: PropTypes.string,
  hero2buttontext: PropTypes.string,
};
