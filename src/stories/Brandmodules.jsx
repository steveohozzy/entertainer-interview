import PropTypes from 'prop-types';
import "./consistency.css";

/** Primary UI component for user interaction */
export const Brandmodules = ({
  modulebackgroundcolor,
  roundelbackgroundcolor,
  roundelborerhovercolor,
  roundeltextcolor,
  lozengetitle,
  lozengebackgroundcolor,
  lozengetextcolor,
  roundel1image,
  roundel1alt,
  roundel1link,
  roundel1text,
  roundel2image,
  roundel2alt,
  roundel2link,
  roundel2text,
  roundel3image,
  roundel3alt,
  roundel3link,
  roundel3text,
  roundel4image,
  roundel4alt,
  roundel4link,
  roundel4text,
  roundel5image,
  roundel5alt,
  roundel5link,
  roundel5text,
  roundel6image,
  roundel6alt,
  roundel6link,
  roundel6text,
  roundel7image,
  roundel7alt,
  roundel7link,
  roundel7text,
  roundel8image,
  roundel8alt,
  roundel8link,
  roundel8text,
  roundel9image,
  roundel9alt,
  roundel9link,
  roundel9text,
  roundel10image,
  roundel10alt,
  roundel10link,
  roundel10text,
  roundel11image,
  roundel11alt,
  roundel11link,
  roundel11text,
  roundel12image,
  roundel12alt,
  roundel12link,
  roundel12text,
  roundel13image,
  roundel13alt,
  roundel13link,
  roundel13text,
  roundel14image,
  roundel14alt,
  roundel14link,
  roundel14text,
  roundel15image,
  roundel15alt,
  roundel15link,
  roundel15text,
  roundel16image,
  roundel16alt,
  roundel16link,
  roundel16text,
  roundel17image,
  roundel17alt,
  roundel17link,
  roundel17text,
  roundel18image,
  roundel18alt,
  roundel18link,
  roundel18text,
  roundel19image,
  roundel19alt,
  roundel19link,
  roundel19text,
  roundel20image,
  roundel20alt,
  roundel20link,
  roundel20text,
  roundel21image,
  roundel21alt,
  roundel21link,
  roundel21text,
  roundel22image,
  roundel22alt,
  roundel22link,
  roundel22text,
  roundel23image,
  roundel23alt,
  roundel23link,
  roundel23text,
  roundel24image,
  roundel24alt,
  roundel24link,
  roundel24text,
  roundel25image,
  roundel25alt,
  roundel25link,
  roundel25text,
  roundel26image,
  roundel26alt,
  roundel26link,
  roundel26text,
}) => {
  const roundels = [
  {
    image: roundel1image,
    alt: roundel1alt,
    link: roundel1link,
    text: roundel1text,
  },
  {
    image: roundel2image,
    alt: roundel2alt,
    link: roundel2link,
    text: roundel2text,
  },
  {
    image: roundel3image,
    alt: roundel3alt,
    link: roundel3link,
    text: roundel3text,
  },

  {
    image: roundel4image,
    alt: roundel4alt,
    link: roundel4link,
    text: roundel4text,
  },
  {
    image: roundel5image,
    alt: roundel5alt,
    link: roundel5link,
    text: roundel5text,
  },
  {
    image: roundel6image,
    alt: roundel6alt,
    link: roundel6link,
    text: roundel6text,
  },
  {
    image: roundel7image,
    alt: roundel7alt,
    link: roundel7link,
    text: roundel7text,
  },
  {
    image: roundel8image,
    alt: roundel8alt,
    link: roundel8link,
    text: roundel8text,
  },
  {
    image: roundel9image,
    alt: roundel9alt,
    link: roundel9link,
    text: roundel9text,
  },
  {
    image: roundel10image,
    alt: roundel10alt,
    link: roundel10link,
    text: roundel10text,
  },
  {
    image: roundel11image,
    alt: roundel11alt,
    link: roundel11link,
    text: roundel11text,
  },
  {
    image: roundel12image,
    alt: roundel12alt,
    link: roundel12link,
    text: roundel12text,
  },
];

const validBrandModules= roundels.filter(
  roundel => roundel.image && roundel.text
);
  return (
     <>
    <div class="consistent-brand-modules-wrapper">
      <div class="consistent-brand-modules-container">
        <div id="consistent-brand-modules-header-area">
            <div class="consistent-brand-modules-header-content">
              <h2 style={{
                "--consistent-brand-modules-header-background": lozengebackgroundcolor,
                "--consistent-brand-modules-header-text-color": lozengetextcolor,
                }}>{lozengetitle}</h2>
            </div>
          </div>
          <div className="roundels-container">
            {validBrandModules.map((roundel, index) => (
              <div
                key={index}
                className="roundel"
                style={{
                  "--consistent-brand-modules-roundel-bg": roundelbackgroundcolor,
                  "--consistent-brand-modules-roundel-text-color": roundeltextcolor,
                  "--consistent-brand-modules-roundel-border-hover-color": roundelborerhovercolor,
                }}
              >
                <a href={roundel.link} className="outer-link">
                  <div className="roundel-image">
                    <img src={roundel.image} alt={roundel.alt} />
                  </div>

                  <div className="roundel-text">
                    {roundel.text}
                  </div>
                </a>
              </div>
            ))}
          </div>
      </div>
    </div>
    </>
  );
};

Brandmodules.propTypes = {
  lozengebackgroundcolor: PropTypes.string,
  lozengetextcolor: PropTypes.string,
  lozengetitle: PropTypes.string,

  roundel1image: PropTypes.string.isRequired,
  roundel1alt: PropTypes.string.isRequired,
  roundel1link: PropTypes.string.isRequired,
  roundel1text: PropTypes.string,
  roundel2image: PropTypes.string,
  roundel2alt: PropTypes.string,
  roundel2link: PropTypes.string,
  roundel2text: PropTypes.string,
  roundel3image: PropTypes.string,
  roundel3alt: PropTypes.string,
  roundel3link: PropTypes.string,
  roundel3text: PropTypes.string,
  roundel4image: PropTypes.string,
  roundel4alt: PropTypes.string,
  roundel4link: PropTypes.string,
  roundel4text: PropTypes.string,
  roundel5image: PropTypes.string,
  roundel5alt: PropTypes.string,
  roundel5link: PropTypes.string,
  roundel5text: PropTypes.string,
  roundel6image: PropTypes.string,
  roundel6alt: PropTypes.string,
  roundel6link: PropTypes.string,
  roundel7image: PropTypes.string,
  roundel7alt: PropTypes.string,
  roundel7link: PropTypes.string,
  roundel7text: PropTypes.string,
  roundel8image: PropTypes.string,
  roundel8alt: PropTypes.string,
  roundel8link: PropTypes.string,
  roundel8text: PropTypes.string,
  roundel9image: PropTypes.string,
  roundel9alt: PropTypes.string,
  roundel9link: PropTypes.string,
  roundel9text: PropTypes.string,
  roundel10image: PropTypes.string,
  roundel10alt: PropTypes.string,
  roundel10link: PropTypes.string,
  roundel10text: PropTypes.string,
  roundel11image: PropTypes.string,
  roundel11alt: PropTypes.string,
  roundel11link: PropTypes.string,
  roundel11text: PropTypes.string,
  roundel12image: PropTypes.string,
  roundel12alt: PropTypes.string,
  roundel12link: PropTypes.string,
  roundel12text: PropTypes.string,
};
