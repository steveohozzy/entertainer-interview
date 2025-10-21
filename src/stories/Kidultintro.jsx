import PropTypes from "prop-types";
import "./kidult.css";

/** Primary UI component for user interaction */
export const KidultIntro = ({
  title,
  blurb
}) => {
  return (
    <>
      <div class="kidult">
        <div class="kidult-content">
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: blurb }} />
        </div>
      </div>
    </>
  );
};

KidultIntro.propTypes = {
  /** Kidult Tabs contents */
  title: PropTypes.string,
  blurb: PropTypes.string,
};
