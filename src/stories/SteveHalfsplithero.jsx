import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

/** Primary UI component for user interaction */
export const SteveHalfsplithero = ({
  flipped,
  image,
  imagealt,
  videosrc,
  background,
  textColor,
  logo,
  logoalt,
  headline,
  tagline,
  link,
  linktext,
  linkTextColor,
  linkTextColorHover,
  linkBackground,
  linkBackgroundHover,
  termslink,
  termslinktext,
  patternType,
  patternColor,
  patternOpacity,
  dataElementType,
  datapromotionindex,
  datapromotionname,
  src,
  isMuted,
}) => {

  const refVideo = useRef(null);

  const safeId =
    (headline || "hero")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-_]/g, "");

  useEffect(() => {
    if (videosrc && videosrc !== " ") {
      refVideo.current.defaultMuted = true;
      refVideo.current.muted = true;
      refVideo.current.srcObject = src;
      refVideo.current?.load();
    }
  }, [isMuted, src, videosrc]);

  useEffect(() => {
    if (!termslink) return;

    const handler = (e) => {
      const el = e.target.closest(".terms-link");
      if (!el) return;

      e.preventDefault();
      e.stopPropagation();

      window.open(termslink, "_blank");
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [termslink]);

  // -----------------------------
  // GLOBAL HERO PATTERN (FULL BACKGROUND)
  // -----------------------------
  const pattern =
    patternType === "dots"
      ? `radial-gradient(${patternColor || "rgba(255,255,255,.25)"} 1px, transparent 1px) 0 0 / 24px 24px`
      : patternType === "grid"
      ? `linear-gradient(${patternColor || "rgba(255,255,255,.12)"} 1px, transparent 1px),
         linear-gradient(90deg, ${patternColor || "rgba(255,255,255,.12)"} 1px, transparent 1px)
         0 0 / 28px 28px`
      : patternType === "diagonal"
? `
  repeating-linear-gradient(
    135deg,
    rgba(255,255,255,.06) 0px,
    rgba(255,255,255,.06) 40px,
    transparent 40px,
    transparent 120px
  ),
  repeating-linear-gradient(
    135deg,
    ${patternColor || "rgba(255,255,255,.10)"} 0px,

    transparent 140px
  )
`
      : "none";

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        #${safeId}.hero-card-container {
          padding: 20px;
        }

        /* =========================
           HERO WRAPPER (FULL BACKGROUND)
        ========================== */
        #${safeId} .hero-card {
          position: relative;
          display: flex;
          flex-direction: column;
          max-width: 1400px;
          margin: auto;
          overflow: hidden;
          border-radius: 36px;

          background: ${background || "#111"};

          box-shadow: 0 40px 90px rgba(0,0,0,.25);
          text-decoration: none;

          transition: transform .7s cubic-bezier(.22,1,.36,1);
        }

        #${safeId} .hero-card:hover {
          transform: translateY(-10px);
        }

        /* GLOBAL PATTERN LAYER (NOW FIXED) */
        #${safeId} .hero-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: ${pattern};
          opacity: ${patternOpacity || 0.08};
          pointer-events: none;
          z-index: 1;
        }

        /* FLOATING LIGHT ORBS */
        #${safeId} .hero-card::after {
          content: "";
          position: absolute;
          top: -120px;
          right: -120px;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: linear-gradient(
            45deg,
            rgba(0,255,255,.25),
            rgba(255,0,200,.18)
          );
          filter: blur(110px);
          opacity: .9;
          z-index: 1;
          pointer-events: none;
        }

        /* =========================
           MEDIA (FULL WIDTH TOP)
        ========================== */
        #${safeId} .media {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          z-index: 2;
        }

        #${safeId} .media img,
        #${safeId} .media video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.03);
          filter: brightness(.9) saturate(1.05);
          transition: transform 1s ease, filter 1s ease;
        }

        #${safeId} .hero-card:hover img,
        #${safeId} .hero-card:hover video {
          transform: scale(1.08);
          filter: brightness(.95) saturate(1.15);
        }

        /* =========================
           GLASS PANEL (MORE PREMIUM NOW)
        ========================== */
        #${safeId} .hero-tile-info {
          position: relative;
          z-index: 3;

          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 24px;

          margin: 24px;
          padding: 50px;
          border-radius: 32px;

          backdrop-filter: blur(35px);

          background: rgba(255,255,255,.08);

          border: 1px solid rgba(255,255,255,.15);

          box-shadow:
            0 30px 70px rgba(0,0,0,.25),
            inset 0 1px rgba(255,255,255,.2);

          transform: translateY(0);
          transition: .5s;
        }

        #${safeId} .hero-card:hover .hero-tile-info {
          transform: translateY(-6px);
        }

        #${safeId} .hero-tile-info::before {
  content: "";
  position: absolute;
  inset: -40%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255,255,255,.10),
    transparent 60%
  );
  opacity: .6;
  animation: floatGlow 10s ease-in-out infinite;
}

@keyframes floatGlow {
  0% { transform: translate3d(-5%, -5%, 0); }
  50% { transform: translate3d(15%, 15%, 0); }
  100% { transform: translate3d(-5%, -5%, 0); }
}

        #${safeId} .hero-logo,
        #${safeId} h2,
        #${safeId} .hero-blurb,
        #${safeId} .hero-button,
        #${safeId} .terms-link {
          position: relative;
          z-index: 2;
        }

        #${safeId} h2 {
          font-size: 46px;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -2px;
          margin: 0;
          color: ${textColor || "#fff"};
        }

        #${safeId} .hero-blurb {
          font-size: 18px;
          opacity: .9;
          color: ${textColor || "#fff"};
        }

        /* =========================
           MODERN POD-STYLE BUTTON
        ========================== */
        #${safeId} .hero-button {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 18px;

          width: fit-content;

          padding: 10px 10px 10px 24px;

          border-radius: 999px;

          background: ${linkBackground || "rgba(255,2555,255,.25)"};
          color: ${linkTextColor || "#111"};

          font-weight: 800;
          border: none;
          cursor: pointer;

          transition: .4s;
        }

        #${safeId} .hero-button:hover {
          background: ${linkBackgroundHover || "rgba(255,2555,255,.5)"};
          transform: translateX(6px);
        }

        /* RIGHT CIRCLE */
        #${safeId} .basket-icon {
          width: 48px;
          height: 48px;
          padding: 10px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: rgba(255,255,255,.18);

          transition: .4s;
        }

        #${safeId} .hero-button:hover .basket-icon {
          transform: rotate(-45deg) translateX(6px);
        }

        /* =========================
           RESPONSIVE
        ========================== */
        @media(min-width:768px) {
          #${safeId} .hero-card {
            flex-direction: ${flipped ? "row" : "row-reverse"};
          }

          #${safeId} .hero-tile-info {
            width: 50%;
          }
        }

        @media(max-width:768px) {
          #${safeId} h2 {
            font-size: 30px;
          }

          #${safeId} .hero-tile-info {
            padding: 28px;
          }
        }
      `}</style>

      <div id={safeId} className="hero-card-container">

        <a
          href={link}
          className="hero-card"
          data-element-type={dataElementType}
          data-promotion-index={datapromotionindex}
          data-promotion-name={datapromotionname}
        >

          <div className="media">
            {image && <img src={image} alt={imagealt} />}
            {videosrc && (
              <video ref={refVideo} autoPlay loop playsInline>
                <source src={videosrc} type="video/mp4" />
              </video>
            )}
          </div>

          <div className="hero-tile-info">
            {logo && <img src={logo} alt={logoalt} className="hero-logo" />}

            {headline && <h2>{headline}</h2>}

            {tagline && <div className="hero-blurb">{tagline}</div>}

            <button className="hero-button">
              {linktext}

              <span className="basket-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M6 12H18" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 6L18 12L12 18" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </button>

          </div>

        </a>
      </div>
    </>
  );
};

SteveHalfsplithero.propTypes = {
  flipped: PropTypes.bool,
  image: PropTypes.string,
  imagealt: PropTypes.string,
  videosrc: PropTypes.string,
  background: PropTypes.string,
  textColor: PropTypes.string,

  logo: PropTypes.string,
  logoalt: PropTypes.string,

  headline: PropTypes.string,
  tagline: PropTypes.string,

  link: PropTypes.string,
  linktext: PropTypes.string,

  linkTextColor: PropTypes.string,
  linkTextColorHover: PropTypes.string,
  linkBackground: PropTypes.string,
  linkBackgroundHover: PropTypes.string,

  termslink: PropTypes.string,
  termslinktext: PropTypes.string,

  patternType: PropTypes.oneOf([
    "none",
    "dots",
    "grid",
    "diagonal"
  ]),
  patternColor: PropTypes.string,
  patternOpacity: PropTypes.number,

  dataElementType: PropTypes.string,
  datapromotionindex: PropTypes.string,
  datapromotionname: PropTypes.string,
};

export default SteveHalfsplithero;