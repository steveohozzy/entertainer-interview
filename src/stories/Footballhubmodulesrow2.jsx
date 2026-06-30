import PropTypes from "prop-types";

export const FootballHubModulesrow2 = ({
  panel1video,
  panel1image,
  panel1imagealt,
  panel1title,
  panel1link,
  panel1buttontext,
  panel1buttonIcon,
  panel2video,
  panel2image,
  panel2imagealt,
  panel2title,
  panel2link,
  panel2buttontext,
  panel2buttonIcon,
}) => {

  const buttonIcons = {
  basket: (
    <svg width="22" height="18" viewBox="0 0 22 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"></path>
    </svg>
  ),

  glasses: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
      <path d="M16.4879 10.1012C16.4933 10.2515 16.4809 10.3979 16.4507 10.5406L16.054 12.4131C15.8764 13.2512 15.4202 13.9092 14.6854 14.3871C13.9722 14.8509 13.1876 14.9921 12.3316 14.8108L11.3419 14.601C10.5215 14.4272 9.87568 14.0016 9.40432 13.324C8.92918 12.6644 8.74798 11.9365 8.86074 11.1405L9.00153 10.0803L8.03854 9.87622L7.73724 10.9025C7.51749 11.6758 7.05668 12.2676 6.35483 12.6779C5.6492 13.1061 4.88622 13.2332 4.06589 13.0594L3.07614 12.8497C2.22014 12.6683 1.55133 12.2192 1.06969 11.5022C0.609659 10.7712 0.468441 9.98658 0.646031 9.14841L1.04278 7.27592C1.073 7.13326 1.12107 6.99437 1.18696 6.85926L3.41658 2.27258C3.73849 1.6327 4.22771 1.21461 4.88422 1.0183C5.56234 0.807938 6.19784 0.886686 6.79072 1.25455L7.19038 1.47898C7.28982 1.53732 7.35495 1.62565 7.38578 1.74399C7.41661 1.86232 7.40286 1.97121 7.34452 2.07066L7.12575 2.44357C7.06742 2.54301 6.97908 2.60814 6.86074 2.63897C6.74241 2.6698 6.63352 2.65605 6.53408 2.59771L6.18225 2.41136C5.88392 2.23635 5.58778 2.18292 5.29384 2.25107C4.9745 2.35112 4.74704 2.54516 4.61148 2.83321L2.69539 6.73165C3.4719 6.67257 4.22573 6.72049 4.95689 6.87541C6.00906 7.09835 6.97643 7.54556 7.85902 8.21704L9.83851 8.63646C10.9176 8.38061 11.9832 8.36415 13.0354 8.58709C13.7665 8.74201 14.475 9.00393 15.1608 9.37284L14.9904 5.03232C14.9833 4.71404 14.8541 4.44442 14.6028 4.22346C14.3617 4.04195 14.0694 3.97069 13.7257 4.00968L13.3286 4.03733C13.214 4.05032 13.1089 4.01873 13.0132 3.94256C12.9176 3.86639 12.8632 3.77103 12.8502 3.65647L12.8015 3.22689C12.7885 3.11233 12.8201 3.00722 12.8963 2.91155C12.9724 2.81589 13.0678 2.76156 13.1824 2.74857L13.6387 2.7055C14.3298 2.60969 14.9337 2.79355 15.4504 3.25708C15.9887 3.70655 16.2753 4.289 16.31 5.00445L16.4879 10.1012ZM6.05359 10.406L6.39297 9.3319C5.81792 8.96782 5.21832 8.71966 4.59416 8.58741C3.93433 8.4476 3.25885 8.4256 2.56773 8.52141L2.35802 9.51115C2.27868 9.88565 2.34441 10.235 2.55523 10.5592C2.76983 10.8655 3.06438 11.0584 3.43888 11.1377L4.42863 11.3474C4.78529 11.423 5.12193 11.3732 5.43855 11.198C5.75895 11.005 5.96396 10.741 6.05359 10.406ZM14.342 12.0503L14.5517 11.0606C13.9588 10.6927 13.3325 10.4389 12.6726 10.2991C12.0485 10.1668 11.3997 10.1505 10.7265 10.2501L10.6011 11.3695C10.5471 11.7121 10.6274 12.0366 10.842 12.3429C11.0604 12.6314 11.3479 12.8135 11.7046 12.8891L12.6943 13.0988C13.0688 13.1781 13.4163 13.1213 13.7367 12.9283C14.0609 12.7175 14.2626 12.4248 14.342 12.0503Z" fill="white"></path>
    </svg>
  ),

  football: (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
      <path d="M15.6718 4.97162C16.8487 6.75428 17.2147 8.69523 16.7699 10.7945C16.3251 12.8937 15.2012 14.5296 13.3982 15.7022C11.6198 16.8587 9.68106 17.2145 7.58183 16.7697C5.4826 16.3249 3.84454 15.2112 2.66765 13.4286C1.51547 11.6298 1.16177 9.68086 1.60656 7.58163C2.05134 5.4824 3.16291 3.85453 4.94125 2.69803C6.74429 1.52546 8.69542 1.16157 10.7947 1.60636C12.8939 2.05115 14.5196 3.1729 15.6718 4.97162ZM15.3025 10.4835L14.3651 10.9877L12.8148 8.80648L13.8787 6.3486L14.8987 6.66055C14.337 5.39157 13.4654 4.42959 12.2838 3.77462L12.511 4.81302L9.9461 5.6112L7.92531 3.8414L8.55411 2.98437C7.20845 3.10387 6.0216 3.6297 4.99355 4.56185L6.08298 4.69685L6.02801 7.36848L3.72633 8.73353L3.07398 7.89255C2.78897 9.23769 2.92142 10.5222 3.47135 11.7461L3.93615 10.7585L6.46346 11.6454L7.09583 14.239L6.0621 14.595C7.23935 15.2703 8.50296 15.5381 9.85294 15.3982L9.0524 14.6536L10.6823 12.5393L13.3521 12.7536L13.3764 13.8448C14.3755 12.9491 15.0175 11.8287 15.3025 10.4835ZM7.26739 11.0171L6.94618 8.01023L9.69348 6.80348L11.7153 9.02072L10.2022 11.639L7.26739 11.0171Z" fill="white"></path>
    </svg>
  ),

  pencil: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M17.6953 7.57992L15.9911 8.68824C15.7688 8.8328 15.5956 8.79609 15.4714 8.57812L12.797 4.46571C12.6481 4.26379 12.6848 4.09056 12.9071 3.94599L14.6113 2.83768C14.9571 2.6128 15.3338 2.54355 15.7414 2.62991C16.1491 2.71628 16.4653 2.93236 16.6902 3.27815L18.1358 5.50107C18.3607 5.84686 18.4299 6.22356 18.3436 6.63118C18.2572 7.0388 18.0411 7.35504 17.6953 7.57992ZM11.4251 4.90975C11.6474 4.76518 11.8207 4.80189 11.9448 5.01986L14.6193 9.13228C14.7681 9.33419 14.7314 9.50743 14.5091 9.65199L4.80237 15.9646L0.930163 15.8469C0.676956 15.8358 0.478071 15.7192 0.333508 15.4969C0.188945 15.2746 0.162954 15.0455 0.255536 14.8095L1.71836 11.2223L11.4251 4.90975ZM5.10868 10.599C4.86169 10.7597 4.81851 10.9635 4.97913 11.2105C5.13976 11.4575 5.34357 11.5006 5.59056 11.34L11.2961 7.62956C11.5431 7.46894 11.5862 7.26513 11.4256 7.01814C11.265 6.77115 11.0612 6.72796 10.8142 6.88859L5.10868 10.599ZM3.33446 13.5453L3.64538 12.0778L2.54481 11.8447L1.7634 13.7235L2.5344 14.909L4.56869 14.9568L4.80188 13.8562L3.33446 13.5453Z" fill="white"></path>
    </svg>
  ),
};
 
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
  aspect-ratio: 565 / 317;
  border-radius: 8px;
  overflow: hidden;
}

.game-hub-container .media video,
.comp-container .media video {
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
  aspect-ratio: 565 / 317;
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
                      <path d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z" fill-opacity="0.5"></path></svg></span><span class="swoosh">&nbsp;</span></span>{panel1buttontext}
                      <span class="basket-icon">
                        {buttonIcons[panel1buttonIcon] || buttonIcons.shop}
                      </span>
                      <span class="star-end"><svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                  <path d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z" fill-opacity="0.5"></path></svg></span><span class="swoosh">&nbsp;</span></span>{panel2buttontext}
                  <span class="basket-icon">
                    {buttonIcons[panel2buttonIcon] || buttonIcons.shop}
                  </span>
                  <span class="star-end"><svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
  panel1buttonIcon: PropTypes.string,
  panel2video: PropTypes.string,
  panel2image: PropTypes.string,
  panel2imagealt: PropTypes.string,
  panel2title: PropTypes.string,
  panel2link: PropTypes.string,
  panel2buttontext: PropTypes.string,
  panel2buttonIcon: PropTypes.string,
};
