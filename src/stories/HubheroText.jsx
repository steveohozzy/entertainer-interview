import PropTypes from "prop-types";

export const HubHeroText = ({
  title,
  text,
  modulebackgroundcolor,
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
  .consistent-hub-header-content {
    margin: 0 auto;
    width: 100%;
    max-width: 1140px;
    padding: 10px 20px;
    text-align: center;
  }

  .consistent-hub-header-content .title {
    text-transform: uppercase;
    background-color: #1f2b91;
    color: #fff;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    font-size: 24px;
    border-radius: 8px;
    magin: 0;
    margin-bottom: 20px;
    padding: 5px 0;
  }

  .consistent-hub-header-content p {
    font-size: 16px;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    color: #1f2b91;
    margin: 0 0 20px;
  }
        `}
      </style>
      <div id="consistent-hub-header-area" style={{backgroundColor: modulebackgroundcolor}}>
        <div class="consistent-hub-header-content">
          <h1 className="title" style={{backgroundColor: stripbackgroundcolor, color: striptextcolor}}>{title}</h1>
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
