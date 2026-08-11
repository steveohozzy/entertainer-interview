import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";

export const CountdownTimer = ({
  logoImage,
  logoAlt,
  title,
  tagline,
  targetDate,
  targetTime,
  backgroundColor,
  titleColor,
  textColor,
  numberColor,
  labelColor,
  expiredText,
  buttonStyle,
  buttonLink,
}) => {
  const CTA_STYLES = {
  'shop-now': { text: 'Shop Now', icon: 'basket' },
  'pre-order-now': { text: 'Pre-Order Now', icon: 'basket' },
  'store-events': { text: 'Store Events', icon: 'house' },
  'store-locator': { text: 'Store Locator', icon: 'house' },
  enter: { text: 'Enter', icon: 'pencil' },
  download: { text: 'Download', icon: 'pencil' },
  read: { text: 'Read', icon: 'glasses' },
  'sign-up': { text: 'Sign Up', icon: 'plane' },
};

const cta =
  buttonStyle && buttonStyle !== 'none'
    ? CTA_STYLES[buttonStyle]
    : null;

  
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    expired: false,
  });

  useEffect(() => {
    const updateCountdown = () => {
      if (!targetDate || !targetTime) {
        return;
      }

      let target;

      if (typeof targetDate === "number") {
        const d = new Date(targetDate);

        const hours = parseInt(targetTime.split(":")[0], 10);
        const minutes = parseInt(targetTime.split(":")[1], 10);

        target = new Date(
          d.getFullYear(),
          d.getMonth(),
          d.getDate(),
          hours,
          minutes,
          0
        );
      } else {
        target = new Date(targetDate + "T" + targetTime);
      }
      const now = new Date();

      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
          expired: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
          (1000 * 60)
      );
      const seconds = Math.floor(
        (difference % (1000 * 60)) /
          1000
      );

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
        expired: false,
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate, targetTime]);

  return (
    <>
      <style>{`
        :root {
          --countdown-bg: #1f2b91;
          --countdown-title-color: #ffffff;
          --countdown-text-color: #ffffff;
          --countdown-number-color: #1f2b91;
          --countdown-label-color: #444444;
        }

        #countdown-module {
          width: 100%;
          padding: 40px 20px;
          background: var(--countdown-bg);
          text-align: center;
          box-sizing: border-box;
        }

        .countdown-logo {
          margin: 0 auto 20px;
          text-align: center;
          width: 100%;
          max-width: 400px;
        }

        .countdown-logo img {
          width: 100%;
          height: auto;
        }

        .countdown-title {
          font-family: "Nunito Bold","Tahoma Bold",sans-serif;
          font-size: 34px;
          color: var(--countdown-title-color);
          text-transform: uppercase;
          margin-bottom: 15px;
          line-height: 1;
        }

        .countdown-tagline {
          font-family: "Nunito Bold","Tahoma Bold",sans-serif;
          font-size: 16px;
          color: var(--countdown-text-color);
          text-transform: uppercase;
          margin-bottom: 15px;
        }

        .countdown-wrapper {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .countdown-box {
          width: 120px;
          border-radius: 10px;
          background: #fff;
          padding: 20px 10px;
          box-shadow: 0 3px 10px rgba(0,0,0,.15);
        }

        .countdown-number {
          font-family: "Nunito Bold","Tahoma Bold",sans-serif;
          font-size: 52px;
          line-height: 1;
          color: var(--countdown-number-color);
        }

        .countdown-label {
          margin-top: 10px;
          font-family: "Nunito Bold","Tahoma Bold",sans-serif;
          font-size: 15px;
          text-transform: uppercase;
          color: var(--countdown-label-color);
        }

        .countdown-expired {
          font-family: "Nunito Bold","Tahoma Bold",sans-serif;
          font-size: 32px;
          color: var(--countdown-text-color);
        }

        @media (max-width:768px) {
          .countdown-wrapper {
            gap: 10px;
          }

          .countdown-box {
            width: calc((100% / 4) - 10px);
            padding: 10px 5px;
          }

          .countdown-number {
            font-size: 26px;
          }

          .countdown-label {
            font-size: 11px;
            margin-top: 5px;
          }

          .countdown-title {
            font-size: 26px;
          }
        }
          #countdown-module .cta-button {
            margin-top: 20px;
          }
      `}</style>

      <div
        id="countdown-module"
        style={{
          "--countdown-bg": backgroundColor,
          "--countdown-title-color": titleColor,
          "--countdown-text-color": textColor,
          "--countdown-number-color": numberColor,
          "--countdown-label-color": labelColor,
        }}
      >

        {logoImage && (
          <div className="countdown-logo">
            <img src={logoImage} alt={logoAlt} />
          </div>
        )}
        {title && (
          <div className="countdown-title">
            {title}
          </div>
        )}

        {tagline && (
          <div className="countdown-tagline">
            {tagline}
          </div>
        )}

        {timeLeft.expired ? (

          <div className="countdown-expired">
            {expiredText}
          </div>

        ) : (

          <div className="countdown-wrapper">

            <div className="countdown-box">
              <div className="countdown-number">
                {timeLeft.days}
              </div>
              <div className="countdown-label">
                Days
              </div>
            </div>

            <div className="countdown-box">
              <div className="countdown-number">
                {timeLeft.hours}
              </div>
              <div className="countdown-label">
                Hours
              </div>
            </div>

            <div className="countdown-box">
              <div className="countdown-number">
                {timeLeft.minutes}
              </div>
              <div className="countdown-label">
                Minutes
              </div>
            </div>

            <div className="countdown-box">
              <div className="countdown-number">
                {timeLeft.seconds}
              </div>
              <div className="countdown-label">
                Seconds
              </div>
            </div>

          </div>

        )}

        {cta && (
        <div className="cta-button">
                <CTAButton
                    text={cta.text}
                    icon={cta.icon}
                    variant={buttonStyle}
                    href={buttonLink}
                    as="a"
                  />
              </div>
            )}

      </div>
    </>
  );
};

CountdownTimer.propTypes = {
  logoImage: PropTypes.string,
  logoAlt: PropTypes.string,
  title: PropTypes.string,
  tagline: PropTypes.string,
  targetDate: PropTypes.string,
  targetTime: PropTypes.string,
  backgroundColor: PropTypes.string,
  titleColor: PropTypes.string,
  textColor: PropTypes.string,
  numberColor: PropTypes.string,
  labelColor: PropTypes.string,
  expiredText: PropTypes.string,
  buttonStyle: PropTypes.string,
  buttonLink: PropTypes.string,
};

CountdownTimer.defaultProps = {
  title: "Coming Soon",
  targetDate: "2026-12-25",
  targetTime: "09:00",
  backgroundColor: "#1f2b91",
  titleColor: "#ffffff",
  textColor: "#ffffff",
  numberColor: "#1f2b91",
  labelColor: "#444444",
  expiredText: "This event has started!",
};