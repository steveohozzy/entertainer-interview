import PropTypes from "prop-types";

import "./discountcode.css";

const epxanding = () => {
  setTimeout(function(){
  const termsButtons = document.querySelectorAll(".terms-button");

  termsButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.target.classList.toggle("active");
      e.target
        .closest(".code-box")
        .querySelector(".terms")
        .classList.toggle("active");
    });
});
}, 1000);
}

/** Primary UI component for user interaction */
export const DiscountCode = ({
  title,
  blurb,
  link,
  linktext,
  terms,
  termslink,
  expanding,
}) => {
  epxanding();
  return (
    <div class="container discount-code-container">
      <div class={`code-box ${!expanding && "non-expanding"}`}>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: blurb }} />
        <div class="buttons">
          {expanding ? (
            <button class="terms-button expander">
              Read Terms &amp; Conditions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
                  fill="#0D5D9C"
                ></path>
              </svg>
            </button>
          ) : (
            <a class="terms-button" href={termslink}>
              Read Terms & Conditions
              <svg
                fill="none"
                height="15px"
                viewbox="0 0 24 24"
                width="15px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
                  fill="#0D5D9C"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
          )}
          <a class="link" href={link}>
            {linktext}
          </a>
        </div>
        <div class="terms">
          <div
            class="terms-inner"
            dangerouslySetInnerHTML={{ __html: terms }}
          />
        </div>
      </div>
    </div>
  );
};

DiscountCode.propTypes = {
  /** Discount Code Module contents */
  expanding: PropTypes.bool,
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linktext: PropTypes.string.isRequired,
  terms: PropTypes.string,
  termslink: PropTypes.string,
};
