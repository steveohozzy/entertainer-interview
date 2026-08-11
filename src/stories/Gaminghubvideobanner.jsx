import PropTypes from "prop-types";

export const GamingHubVideoBanner = ({
  link,
  video,
  image,
  imagealt,
  buttontext,
  bordercolor,
  borderhovercolor,
}) => {

  const hasCustomBorder = bordercolor?.trim();

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

/* Border */
.gaming-video-banner::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 8px;
    padding: 3px;
    pointer-events: none;
    z-index: 2;

    background: var(--banner-border);
    background-size: var(--banner-background-size);
    animation: var(--banner-animation);

    transition: background .3s ease;

    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);

    -webkit-mask-composite: xor;
            mask-composite: exclude;
}

.gaming-video-banner:hover::before {
    background: var(--banner-hover-border, var(--banner-border));
    background-size: var(--banner-hover-background-size, var(--banner-background-size));
    animation: var(--banner-hover-animation, var(--banner-animation));
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

/* ---- BUTTON WITH SHIMMER ---- */
.gaming-video-banner-button {
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
    border: none;
    background: transparent;
}

.gaming-video-banner-button span {
    position: relative;
    z-index: 2;
}

.gaming-video-banner-button::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 30px;
    background-color: #292929;
    z-index: 1;
    transition: all 0.3s;
}

.gaming-video-banner-button::after {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
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

.gaming-video-banner-button:hover {
    color: #292929;
}

.gaming-video-banner-button:hover::before {
    background-color: #fff;
}

@keyframes shimmer {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
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
  className="gaming-video-banner"
  style={{
  "--banner-border": bordercolor?.trim()
    ? bordercolor
    : `linear-gradient(
        270deg,
        rgba(255,110,199,.8),
        rgba(0,255,255,.8),
        rgba(255,110,199,.8)
      )`,

  "--banner-hover-border":
    borderhovercolor?.trim() || undefined,

  "--banner-background-size":
    bordercolor?.trim()
      ? "100% 100%"
      : "600% 600%",

  "--banner-animation":
    bordercolor?.trim()
      ? "none"
      : "shimmer 3s linear infinite",

  "--banner-hover-background-size":
    borderhovercolor?.trim()
      ? "100% 100%"
      : undefined,

  "--banner-hover-animation":
    borderhovercolor?.trim()
      ? "none"
      : undefined,
}}
>
        {image && image !== " " && (
          <img src={image} alt={imagealt} />
        )}

        {video && video !== " " && (
          <video autoPlay muted loop playsInline>
            <source src={video} type="video/mp4" />
          </video>
        )}

        {buttontext && (
          <div className="gaming-video-banner-content">
            <button className="gaming-video-banner-button">
              <span>{buttontext}</span>
            </button>
          </div>
        )}
      </a>
    </>
  );
};

GamingHubVideoBanner.propTypes = {
  link: PropTypes.string,
  video: PropTypes.string,
  image: PropTypes.string,
  imagealt: PropTypes.string,
  buttontext: PropTypes.string,
  bordercolor: PropTypes.string,
  borderhovercolor: PropTypes.string,
};