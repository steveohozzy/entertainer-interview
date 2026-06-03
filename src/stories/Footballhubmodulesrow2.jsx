import PropTypes from "prop-types";

export const FootballHubModulesrow2 = ({
  panel1video,
  panel1image,
  panel1imagealt,
  panel1title,
  panel1link,
  panel1buttontext,
  panel2video,
  panel2image,
  panel2imagealt,
  panel2title,
  panel2link,
  panel2buttontext,
}) => {
 
  return (
    <>
      <style>
        {`
    .story-modules {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    gap: 20px
  }

  @media (min-width: 768px) {
    .story-modules {
      flex-direction: row;
    }
  }

  .game-hub-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    position: relative;
    max-width: 600px;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
  }

  @media (min-width: 768px) {
    .game-hub-container {
      width: calc( 50% - 10px)
    }
  }

  .game-hub-container .media {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 */
  border-radius: 8px;
  overflow: hidden;
}

.game-hub-container .media video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
  .game-hub-container-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 20px 10px;
  }

  .game-hub-container-info .hero-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: #009e44;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
    padding: 10px 10px 10px 0;
    height: 40px;
    box-shadow: 0 0 5px rgba(3, 33, 33, 0.3);
    border: 3px solid #dbe3ff;
    transition: all 0.3s;
    width: 100%;
    max-width: 350px;
  }

  .game-hub-container-info .hero-button:hover {
    background-color: #1f2b91;
    scale: 1.05;
    box-shadow: 0 0 18px rgba(3, 33, 33, 0.3);
    color: #fff;
  }

  .game-hub-container-info .hero-button .basket-icon {
    transition: all 0.3s;
    transform: rotate(15deg);
    margin-left: 5px;
  }

  .game-hub-container-info .hero-button:hover .basket-icon {
    transform: rotate(-10deg);
  }

  .game-hub-container-info .hero-button .star-start {
    position: relative;
    top: -3px;
  }

  .game-hub-container-info .hero-button .swoosh-container {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 5px;
    width: 25px;
  }

  .game-hub-container-info .hero-button .swoosh {
    display: block;
    width: 0;
    height: 3px;
    margin-top: -3px;
    margin-left: -2px;
    transform: rotate(15deg);
    background-color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s;
  }

  .game-hub-container-info .hero-button:hover .swoosh {
    width: 7px;
  }

  .game-hub-container-info .hero-button .star-end {
    position: relative;
    bottom: -5px;
    transition: all 0.3s;
  }

  .game-hub-container-info .hero-button:hover .star-end {
    scale: 1.1;
    transform: rotate(30deg);
  }


  /* comp */
  .comp-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    position: relative;
    max-width: 620px;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    .comp-container {
      width: calc( 50% - 10px)
    }
  }

  .comp-container .media {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.comp-container .media img {
  width: 100%;
  height: auto;
  display: block;
}
  .comp-container-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 20px 10px;
  }
  .comp-container-info .hero-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: #009e44;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
    padding: 10px 10px 10px 0;
    height: 40px;
    box-shadow: 0 0 5px rgba(3, 33, 33, 0.3);
    border: 3px solid #dbe3ff;
    transition: all 0.3s;
    cursor: pointer;
    width: 100%;
    max-width: 350px;
  }

  .comp-container-info .hero-button:hover {
    background-color: #1f2b91;
    scale: 1.05;
    box-shadow: 0 0 18px rgba(3, 33, 33, 0.3);
    color: #fff;
  }

  .comp-container-info .hero-button .basket-icon {
    transition: all 0.3s;
    transform: rotate(15deg);
    margin-left: 5px;
  }

  .comp-container-info .hero-button:hover .basket-icon {
    transform: rotate(-10deg);
  }

  .comp-container-info .hero-button .star-start {
    position: relative;
    top: -3px;
  }

  .comp-container-info .hero-button .swoosh-container {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 5px;
    width: 25px;
  }

  .comp-container-info .hero-button .swoosh {
    display: block;
    width: 0;
    height: 3px;
    margin-top: -3px;
    margin-left: -2px;
    transform: rotate(15deg);
    background-color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s;
  }

  .comp-container-info .hero-button:hover .swoosh {
    width: 7px;
  }

  .comp-container-info .hero-button .star-end {
    position: relative;
    bottom: -5px;
    transition: all 0.3s;
  }

  .comp-container-info .hero-button:hover .star-end {
    scale: 1.1;
    transform: rotate(30deg);
  }

  .comp-container .crayon {
    position: absolute;
    width: 85px;
  }

  .comp-container .crayon.left-crayon {
    left: -10px;
    bottom: 0;
    transform: rotate(10deg);
  }

  .comp-container .crayon.right-crayon {
    right: 30px;
    top: 30px;
    transform: rotate(25deg);
  }

  @media (min-width: 768px) {
    .comp-container .crayon {
      width: 137px;
    }

    .comp-container .crayon.left-crayon {
    left: -10px;
    bottom: 0;
    transform: rotate(0deg);
  }

  .comp-container .crayon.right-crayon {
    right: -5px;
    bottom: 0;
    top: unset;
    transform: rotate(0deg);
  }
  }
        `}
      </style>
      <div class="story-modules">
        <a href={panel1link} class="game-hub-container">
            <div class="media">
              {panel1video && panel1video !== ' ' &&
                <video autoplay="" loop="" playsinline="" muted=""><source src={panel1video} type="video/mp4" /></video>
              }
              {panel1image && panel1image !== ' ' &&
                <img src={panel1image} alt={panel1imagealt} />
              }
            </div>
            <div class="game-hub-container-info">
              <button href={panel1link} target="_blank" class="hero-button">
                <span class="swoosh-container"><span class="star-start"><svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z" fill-opacity="0.5"></path></svg></span><span class="swoosh">&nbsp;</span></span>{panel1buttontext}<span class="basket-icon"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
          <path d="M15.6718 4.97162C16.8487 6.75428 17.2147 8.69523 16.7699 10.7945C16.3251 12.8937 15.2012 14.5296 13.3982 15.7022C11.6198 16.8587 9.68106 17.2145 7.58183 16.7697C5.4826 16.3249 3.84454 15.2112 2.66765 13.4286C1.51547 11.6298 1.16177 9.68086 1.60656 7.58163C2.05134 5.4824 3.16291 3.85453 4.94125 2.69803C6.74429 1.52546 8.69542 1.16157 10.7947 1.60636C12.8939 2.05115 14.5196 3.1729 15.6718 4.97162ZM15.3025 10.4835L14.3651 10.9877L12.8148 8.80648L13.8787 6.3486L14.8987 6.66055C14.337 5.39157 13.4654 4.42959 12.2838 3.77462L12.511 4.81302L9.9461 5.6112L7.92531 3.8414L8.55411 2.98437C7.20845 3.10387 6.0216 3.6297 4.99355 4.56185L6.08298 4.69685L6.02801 7.36848L3.72633 8.73353L3.07398 7.89255C2.78897 9.23769 2.92142 10.5222 3.47135 11.7461L3.93615 10.7585L6.46346 11.6454L7.09583 14.239L6.0621 14.595C7.23935 15.2703 8.50296 15.5381 9.85294 15.3982L9.0524 14.6536L10.6823 12.5393L13.3521 12.7536L13.3764 13.8448C14.3755 12.9491 15.0175 11.8287 15.3025 10.4835ZM7.26739 11.0171L6.94618 8.01023L9.69348 6.80348L11.7153 9.02072L10.2022 11.639L7.26739 11.0171Z" fill="white"></path>
          </svg></span><span class="star-end"><svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z" fill-opacity="0.5"></path></svg></span>
          </button>
        </div>
      </a>

      <a href={panel2link} class="comp-container">
        <div class="media">
          {panel2image && panel2image !== ' ' &&
            <img src={panel2image} alt={panel2imagealt} />
          }
          {panel2video && panel2video !== ' ' &&
            <video autoplay="" loop="" playsinline="" muted=""><source src={panel2video} type="video/mp4" /></video>
          }
        </div>
        <div class="comp-container-info">
          <button href={panel2link} class="hero-button">
            <span class="swoosh-container"><span class="star-start"><svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z" fill-opacity="0.5"></path></svg></span><span class="swoosh">&nbsp;</span></span>{panel2buttontext}<span class="basket-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M17.6953 7.57992L15.9911 8.68824C15.7688 8.8328 15.5956 8.79609 15.4714 8.57812L12.797 4.46571C12.6481 4.26379 12.6848 4.09056 12.9071 3.94599L14.6113 2.83768C14.9571 2.6128 15.3338 2.54355 15.7414 2.62991C16.1491 2.71628 16.4653 2.93236 16.6902 3.27815L18.1358 5.50107C18.3607 5.84686 18.4299 6.22356 18.3436 6.63118C18.2572 7.0388 18.0411 7.35504 17.6953 7.57992ZM11.4251 4.90975C11.6474 4.76518 11.8207 4.80189 11.9448 5.01986L14.6193 9.13228C14.7681 9.33419 14.7314 9.50743 14.5091 9.65199L4.80237 15.9646L0.930163 15.8469C0.676956 15.8358 0.478071 15.7192 0.333508 15.4969C0.188945 15.2746 0.162954 15.0455 0.255536 14.8095L1.71836 11.2223L11.4251 4.90975ZM5.10868 10.599C4.86169 10.7597 4.81851 10.9635 4.97913 11.2105C5.13976 11.4575 5.34357 11.5006 5.59056 11.34L11.2961 7.62956C11.5431 7.46894 11.5862 7.26513 11.4256 7.01814C11.265 6.77115 11.0612 6.72796 10.8142 6.88859L5.10868 10.599ZM3.33446 13.5453L3.64538 12.0778L2.54481 11.8447L1.7634 13.7235L2.5344 14.909L4.56869 14.9568L4.80188 13.8562L3.33446 13.5453Z" fill="white"></path>
      </svg></span><span class="star-end"><svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z" fill-opacity="0.5"></path></svg></span>
          </button>
            </div>
        </a>
      </div>
    </>
  );
};

FootballHubModulesrow2.propTypes = {
  panel1video: PropTypes.string,
  panel1image: PropTypes.string,
  panel1imagealt: PropTypes.string,
  panel1title: PropTypes.string,
  panel1link: PropTypes.string,
  panel1buttontext: PropTypes.string,
  panel2video: PropTypes.string,
  panel2image: PropTypes.string,
  panel2imagealt: PropTypes.string,
  panel2title: PropTypes.string,
  panel2link: PropTypes.string,
  panel2buttontext: PropTypes.string,
};
