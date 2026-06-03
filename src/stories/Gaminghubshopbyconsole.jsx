import PropTypes from "prop-types";

export const GamingHubShopByConsole = ({
  logo1image,
  logo1imagealt,
  logo1link,
  logo1background,
  logo2image,
  logo2imagealt,
  logo2link,
  logo2background,
  logo3image,
  logo3imagealt,
  logo3link,
  logo3background,
}) => {
 
  return (
    <>
      <style>
        {`
    #gaming-shop-by-brand-area {
    background-color: #fff;
  }
.gaming-shop-by-brand-brands {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 400px;
  margin: 10px auto;
  box-sizing: border-box; 
}
.gaming-shop-by-brand-brands-item {
  text-align: center;
}
.gaming-shop-by-brand-brands-item-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: transparent;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  box-shadow: 0 0 0 4px rgba(255,255,255,0);
}

.gaming-shop-by-brand-brands-item-link::before {
  content: '';
  position: absolute;
  border-radius: 50%;
  margin: 3px;
  z-index: 1;
  top: 0;
  left: 0;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  transition: all 0.3s;
}

.gaming-shop-by-brand-brands-item:nth-child(1) .gaming-shop-by-brand-brands-item-link:before {
  background: ${logo1background};
}

.gaming-shop-by-brand-brands-item:nth-child(2) .gaming-shop-by-brand-brands-item-link:before {
  background: ${logo2background};
}

.gaming-shop-by-brand-brands-item:nth-child(3) .gaming-shop-by-brand-brands-item-link:before {
  background: ${logo3background};
}

/* Gradient shimmer overlay */
.gaming-shop-by-brand-brands-item-link::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
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

/* Make sure your shimmer keyframes exist */
@keyframes shimmer {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gaming-shop-by-brand-brands-item-link img {
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  object-fit: contain;
  filter: brightness(0) invert(1);
  z-index: 2;
  min-width: unset !important;
}
        `}
      </style>
      <div id="gaming-shop-by-brand-area">
        <div class="gaming-shop-by-brand-brands">
          <div class="gaming-shop-by-brand-brands-item">
            <a href={logo1link} class="gaming-shop-by-brand-brands-item-link">
              <img alt={logo1imagealt} src={logo1image} />
            </a>
          </div>
          <div class="gaming-shop-by-brand-brands-item">
            <a href={logo2link} class="gaming-shop-by-brand-brands-item-link">
              <img alt={logo2imagealt} src={logo2image} />
            </a>
          </div>
          <div class="gaming-shop-by-brand-brands-item">
            <a href={logo3link} class="gaming-shop-by-brand-brands-item-link">
              <img alt={logo3imagealt} src={logo3image} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

GamingHubShopByConsole.propTypes = {
  logo1image: PropTypes.string,
  logo1imagealt: PropTypes.string,
  logo1link: PropTypes.string,
  logo1background: PropTypes.string,
  logo2image: PropTypes.string,
  logo2imagealt: PropTypes.string,
  logo2link: PropTypes.string,
  logo2background: PropTypes.string,
  logo3image: PropTypes.string,
  logo3imagealt: PropTypes.string,
  logo3link: PropTypes.string,
  logo3background: PropTypes.string,
};
