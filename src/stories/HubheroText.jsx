import PropTypes from "prop-types";

export const HubHeroText = ({
  title,
  text,
  stripbackgroundcolor,
  striptextcolor,
  textcolor,
}) => {
 
  return (
    <>
      <style>
        {`
    .category-title {
    display: none;
  }
  #consistent-hub-header-area {
    background-color: #fff;
  }
  .consistent-hub-header-content {
    margin: 0 auto;
    width: 100%;
    max-width: 1140px;
    padding: 10px 20px;
    text-align: center;
  }

  .consistent-hub-header-content h2 {
    text-transform: uppercase;
    background-color: #1f2b91;
    color: #fff;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    font-size: 24px;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  .consistent-hub-header-content p {
    font-size: 16px;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    color: #1f2b91;
    margin: 0 0 20px;
  }
        `}
      </style>
      <div id="consistent-hub-header-area">
        <div class="consistent-hub-header-content">
          <h2 style={{backgroundColor: stripbackgroundcolor, color: striptextcolor}}>{title}</h2>
          {text && <p style={{color: textcolor}}>{text}</p>}
        </div>
      </div>
    </>
  );
};

HubHeroText.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  stripbackgroundcolor: PropTypes.string,
  striptextcolor: PropTypes.string,
  textcolor: PropTypes.string,
};
