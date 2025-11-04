import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const Button = ({
  link,
  label,
  iconpath,
  removeIcons,
  color,
  colorhover,
  background,
  backgroundhover,
}) => {
  return (
    <>
      <style>
        {`
        .hero-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        background-color: ${background};
        color: ${color};
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        ${removeIcons ? 'padding: 10px 30px;' : 'padding: 10px 30px 10px 10px;'}
        height: 40px;
        box-shadow: 0 0 5px rgba(3,33,33,.3);
        border: 3px solid #DBE3FF;
        transition: all 0.3s;
    }

    .hero-button:hover {
        background-color: ${backgroundhover};
        scale: 1.05;
        box-shadow: 0 0 18px rgba(3,33,33,.3);
        color: ${colorhover};
    }

    .hero-button .basket-icon {
        transition: all 0.3s;
        transform: rotate(15deg);
        margin-left: 5px;
    }

    .hero-button:hover .basket-icon {
        transform: rotate(-10deg)
    }

    .hero-button .star-start {
        position: relative;
        top: -3px;
    }

    .hero-button .swoosh-container {
        display: flex;
        align-items: center;
        justify-content: end;
        margin-right: 5px;
        width: 25px;
    }

    .hero-button .swoosh {
        display: block;
        width: 0;
        height: 3px;
        margin-top: -3px;
        margin-left: -2px;
        transform: rotate(15deg);
        background-color: rgba(255, 255, 255, 0.7);
        transition: all 0.3s;
    }

    .hero-button:hover .swoosh {
        width: 7px;
    }

    .hero-button .star-end {
        position: relative;
        bottom: -5px;
        transition: all 0.3s;
    }

    .hero-button:hover .star-end {
        scale: 1.1;
        transform: rotate(30deg);
    }
      `}
      </style>
      <a
        href={link}
        class="hero-button"
      >
        {!removeIcons && (
        <span class="swoosh-container">
          <span class="star-start">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                fill-opacity="0.5"
              ></path>
            </svg>
          </span>
          <span class="swoosh">&nbsp;</span>
        </span>
        )}
        {label}
        <span class="basket-icon" dangerouslySetInnerHTML={{ __html: iconpath }}>
        </span>
        {!removeIcons && (
        <span class="star-end">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
              fill-opacity="0.5"
            ></path>
          </svg>
        </span>
        )}
      </a>
    </>
  );
};

Button.propTypes = {
  /** Button contents */
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  iconpath: PropTypes.string,
  removeIcons: PropTypes.bool,
  color: PropTypes.string,
  colorhover: PropTypes.string,
  background: PropTypes.string,
  backgroundhover: PropTypes.string,
};
