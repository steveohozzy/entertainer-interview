import PropTypes from "prop-types";

export const HubsVideoBanner = ({
  link,
  video,
  image,
  imagealt,
  buttontext,
  buttonbackgroundcolor,
  buttonhoverbackgroundcolor,
  buttontextcolor,
  buttonhovertextcolor,
  buttonbordercolor,
  buttonborderhovercolor,
}) => {
 
  return (
    <>
      <style>
        {`
    .gaming-video-banner {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 920px;
    text-align: center;
    overflow: hidden;
    border-radius: 8px;
    display: block;
}

/* Animated border */
.gaming-video-banner::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 8px;
    padding: 3px;
    background: linear-gradient(
        270deg,
        rgba(255,110,199,0.8),
        rgba(0,255,255,0.8),
        rgba(255,110,199,0.8)
    );
    background-size: 600% 600%;
    animation: shimmer 3s linear infinite;
    pointer-events: none;
    z-index: 2;

    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
}

.gaming-video-banner video,
.gaming-video-banner img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
}

/* Button overlay */
.gaming-video-banner-content {
    position: absolute;
    left: 78%;
    bottom: 30px;
    transform: translateX(-50%);
    z-index: 10;
    width: 100%;
}

@media (max-width: 768px) {
    .gaming-video-banner-content {
        left: 50%;
        transform: translateX(-50%);
    }
}

.gaming-video-banner-button {
    position: relative;
    display: inline-block;
    font-size: 16px;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    padding: 12px 30px;
    border-radius: 30px;
    text-decoration: none;
    transition: all 0.3s;
    overflow: visible;
    cursor: pointer;
    border: 3px solid var(--button-border-color,#dbe3ff);
    background: var(--button-bg,#009e44);
    color: var(--button-text,#fff);
}

.gaming-video-banner-button span {
    position: relative;
    z-index: 2;
}

.gaming-video-banner-button:hover {
    background: var(--button-hover-bg,#1f2b91);
    color: var(--button-hover-text,#fff);
    border-color: var(--button-hover-border-color,#dbe3ff);
}

@media (max-width: 767px) {
    .gaming-video-banner-content {
        bottom: 15px;
    }

    .gaming-video-banner-button {
        padding: 10px 24px;
        font-size: 14px;
    }
}
        `}
      </style>
      <a
        href={link}
        class="gaming-video-banner"
    >
      {image && image !== ' ' &&
        <img src={image} alt={imagealt} />
      }
      {video && video !== ' ' &&
        <video
            autoplay
            muted
            loop
            playsinline
        >
            <source src={video} type="video/mp4" />
        </video>
        }

        {buttontext && (
        <div class="gaming-video-banner-content">
            <button class="gaming-video-banner-button"
                style={{
                  "--button-bg": buttonbackgroundcolor,
                  "--button-hover-bg": buttonhoverbackgroundcolor,
                  "--button-text": buttontextcolor,
                  "--button-hover-text": buttonhovertextcolor,
                  "--button-border-color": buttonbordercolor,
                  "--button-hover-border-color": buttonborderhovercolor
                }}
            >
                <span>{buttontext}</span>
            </button>
        </div>
        )}
      </a>
    </>
  );
};

HubsVideoBanner.propTypes = {
  link: PropTypes.string,
  video: PropTypes.string,
  image: PropTypes.string,
  imagealt: PropTypes.string,
  buttontext: PropTypes.string,
  buttonbackgroundcolor: PropTypes.string,
  buttonhoverbackgroundcolor: PropTypes.string,
  buttontextcolor: PropTypes.string,
  buttonhovertextcolor: PropTypes.string,
  buttonbordercolor: PropTypes.string,
  buttonborderhovercolor: PropTypes.string,
};
