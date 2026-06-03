import PropTypes from "prop-types";

export const GamingHubStackedCarousels = ({
  carousel1title,
  carousel2title,
}) => {
 
  return (
    <>
      <style>
        {`
    #gaming-coming-soon-area {
    background-color: #fff;
    max-width: 940px;
    padding: 0 20px;
    margin: 0 auto;
  }
  .gaming-coming-soon-content {
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    padding: 10px 0;
    text-align: center;
  }

  .gaming-coming-soon-content h2 {
    text-transform: uppercase;
    background: linear-gradient(
        180deg, 
        rgba(80, 80, 80, 0.9) 0%, 
        rgba(60, 60, 60, 0.95) 50%, 
        rgba(40, 40, 40, 1) 100%
    );
    color: #fff;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    font-size: 18px;
    border-radius: 8px;
    margin: 0;
    box-shadow: inset 0 4px 10px rgba(255,255,255,0.1); /* subtle inner highlight */
    backdrop-filter: blur(2px); /* optional slight blur for glass effect */
    -webkit-backdrop-filter: blur(2px);
    padding: 5px 0;
}

.gaming-coming-soon-carousel {
  margin: 0 auto;
  width: 100%;
  max-width: 565px;
  padding: 10px 20px;
}

#gaming-gifts-for-gamers-area {
    background-color: #fff;
    max-width: 940px;
    padding: 0 20px;
    margin: 0 auto;
  }
  .gaming-gifts-for-gamers-content {
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    padding: 10px 0;
    text-align: center;
  }

  .gaming-gifts-for-gamers-content h2 {
    text-transform: uppercase;
    background: linear-gradient(
        180deg, 
        rgba(80, 80, 80, 0.9) 0%, 
        rgba(60, 60, 60, 0.95) 50%, 
        rgba(40, 40, 40, 1) 100%
    );
    color: #fff;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    font-size: 18px;
    border-radius: 8px;
    margin: 0;
    box-shadow: inset 0 4px 10px rgba(255,255,255,0.1); /* subtle inner highlight */
    backdrop-filter: blur(2px); /* optional slight blur for glass effect */
    -webkit-backdrop-filter: blur(2px);
    padding: 5px 0;
}

.gaming-gifts-for-gamers-carousel {
  margin: 0 auto;
  width: 100%;
  max-width: 565px;
  padding: 10px 20px;
}
        `}
      </style>
      <div id="gaming-gifts-for-gamers-area">
        <div class="gaming-gifts-for-gamers-content">
          <h2>{carousel1title}</h2>
        </div>
        <div class="gaming-gifts-for-gamers-carousel">
          
        </div>
      </div>

      <div id="gaming-coming-soon-area">
        <div class="gaming-coming-soon-content">
          <h2>{carousel2title}</h2>
        </div>
        <div class="gaming-coming-soon-carousel">
        </div>
    </div>
    </>
  );
};

GamingHubStackedCarousels.propTypes = {
  carousel1title: PropTypes.string.isRequired,
  carousel2title: PropTypes.string.isRequired,
};
