import PropTypes from "prop-types";

export const ChristmasHeroText = ({
  title,
  text,
  modulebackgroundcolor,
  stripbackgroundcolor,
  striptextcolor,
  textcolor,
}) => {
  const moduleBackgroundStyle = {
    backgroundColor: modulebackgroundcolor,
  };

  return (
    <>
      <style>
        {`
          .category-title {
            display: none;
          }

          #consistent-hub-header-area {
            width: 100%;
            padding: 0 0 20px;
            position: relative;
            overflow: hidden;
          }

          #consistent-hub-header-area::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 25%;
            background: linear-gradient(
              to bottom,
              transparent 0%,
              ${modulebackgroundcolor || "#fff"} 100%
            );
            pointer-events: none;
          }

          .consistent-hub-header-content {
            margin: 0 auto;
            width: 100%;
            max-width: 1440px;
            padding: 10px 20px;
            text-align: center;
            position: relative;
            z-index: 1;
          }

          .consistent-hub-header-content .title {
            text-transform: uppercase;
            background-color: #1f2b91;
            color: #fff;
            font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
            font-size: 18px;
            border-radius: 8px;
            margin: 0;
            padding: 5px 0;
          }

          .consistent-hub-header-content p {
            font-size: 16px;
            font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
            color: #1f2b91;
            margin: 0 0 20px;
          }

          @media (max-width: 767px) {
            #consistent-hub-header-area {
              padding: 0;
            }

            #consistent-hub-header-area::after {
              height: 30%;
            }
          }
        `}
      </style>

      <div
        id="consistent-hub-header-area"
        style={moduleBackgroundStyle}
      >
        <div className="consistent-hub-header-content">
          <div className="title"
            style={{
              backgroundColor: stripbackgroundcolor,
              color: striptextcolor,
            }}
          >
            {title}
          </div>

          {text && (
            <p style={{ color: textcolor }}>
              {text}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

ChristmasHeroText.propTypes = {
  modulebackgroundcolor: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  stripbackgroundcolor: PropTypes.string,
  striptextcolor: PropTypes.string,
  textcolor: PropTypes.string,
};