import PropTypes from "prop-types";

const tabinit = () => {
  setTimeout(function () {
    const tabButtons = document.querySelectorAll(".tabs .tab");
    const tabContents = document.querySelectorAll(".tab-content");

    if (tabButtons && tabContents) {
      tabButtons.forEach((tabBtn) => {
        tabBtn.addEventListener("click", () => {
          const tabId = tabBtn.getAttribute("data-tab");

          tabButtons.forEach((btn) => btn.classList.remove("active"));
          tabBtn.classList.add("active");

          tabContents.forEach((content) => {
            content.classList.remove("active");

            if (content.id === tabId) {
              content.classList.add("active");
            }
          });
        });
      });
    }
  }, 1000);
};

/** Primary UI component for user interaction */
export const KidultTabs = ({
  tabareatitle,
  tab1title,
  tab2title,
  tab3title,
  tab4title,
  tab1content,
  tab2content,
  tab3content,
  tab4content,
}) => {
  tabinit();
  return (
    <>
      <style>
        {`
  :root {
  --kidultroundal1bg: #000;
}
  .category-title {
    display: none !important;
  }

  .kidult-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .kidult p {
    color: rgb(243 244 246);
    text-align: center;
  }

  .kidult .carousel-cell {
    width: 33.333333%;
    padding: 20px 10px;
  }

  @media (min-width: 1024px) {
    .kidult .carousel-cell {
      width: 20%;
    }
  }

  .kidult .carousel-cell .roundal-image img {
    position: relative;
    z-index: 2;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: auto;
    border-radius: 10px;
    overflow: hidden;
    margin: 0;
  }

  .roundal-image {
    border-radius: 100%;
    position: relative;
    padding: 2px;
    overflow: hidden;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kidult .carousel-cell .roundal-image {
    border-radius: 10px;
  }

  .kidult .carousel-cell .outer-link:hover .roundal-image::before {
    transform: rotate(0deg);
  }

  .roundal-image img {
    position: relative;
    z-index: 2;
    width: 95%;
    min-width: unset;
    height: auto;
    overflow: hidden;
    margin: 10px;
  }

  @media (min-width: 1024px) {
    .roundal-image img {
      margin: 25px;
    }
  }

  .pageType-CategoryPage .map img {
    min-width: unset;
  }

  .roundal-image::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    aspect-ratio: 1/1;
    opacity: 0;
    background: linear-gradient(90deg,rgba(43, 200, 209, 1) 0%, rgba(2, 220, 178, 1) 100%);
  }

  .tab-content .roundal-image::after {
    content: '';
    display: block;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    position: absolute;
    top: 2px;
    left: 2px;
    aspect-ratio: 1/1;
    background: #000;
    border-radius: 100%;
  }

  .outer-link {
    display: flex;
    flex-direction: column;
    gap: 15px;
    transition: all 0.3s;
  }

  .outer-link:hover .roundal-image::before {
    transition: all 0.6s;
    opacity: 1;
    transform: rotate(1turn);
  }


  .outer-link button {
    display: block;
    line-height: 1.2;
    color: #fff;
    font-size: 13px;
    background: transparent;
    border: none;
  }

  .tabs {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
  }

  .tabs .tab {
    color: #fff;
    position: relative;
    cursor: pointer;
    padding: 5px 3px;
    margin-bottom: 10px;
    margin-top: 5px;
    transition: all 0.3s ease-in-out;
    border-radius: 30px;
    background-color: #666;
    position: relative;
    overflow: hidden;
  }

  .tabs .tab::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1;
    transition: all 0.3s ease-in-out;
  }
  .tabs .active::after,
  .tabs .tab:hover::after {
    opacity: 1;
    background: linear-gradient(90deg,rgba(43, 200, 209, 1) 0%, rgba(2, 220, 178, 1) 100%);
  }

  .tabs .tab span {
    width: 100%;
    text-align: center;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    font-weight: normal;
    font-size: 10px;
    letter-spacing: 0;
    line-height: 1;
    position: relative;
    bottom: 0;
    z-index: 2;
    color: #fff !important;
  }

  .tabs svg {
    display: none;
  }

  .tab-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .tab-content .roundal {
    width: calc(100% / 3);
    padding: 5px;
  }

  .tab-content .roundal .roundal-image {
    padding: 5px;
  }

  .tab-content .roundal .outer-link button {
    font-size: 12px;
    background: transparent;
  }

  @media (min-width: 1024px) {
    .tab-content .roundal .outer-link button {
      font-size: 14px;
    }
    .tab-content .roundal {
      width: calc(100% / 6);
      padding: 10px;
    }

    .tabs {
      gap: 20px;
    }

    .tabs .tab {
      padding: 5px 10px;
    }

    .tabs .tab span {
      font-size: 16px;
    }

    .tabs .tab svg {
      width: 110px;
    }
  }

  .tab-content-container {
    background: transparent;
    position: relative;
  }

  .tab-content {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }

  .tab-content-inner {
    padding: 0;
    width: 100%;
    background: #383839;
  }

  .tab-content.active {
    padding: 5px;
    max-height: 2000px;
    opacity: 1;
  }

  .flickity-button,
  .carousel-component .js-owl-carousel-reference .owl-buttons .owl-prev, .carousel-component .js-owl-carousel-reference .owl-buttons .owl-next {
    top: 42%;
    transition: all 0.3s;
    box-shadow: none;
    opacity: 1;
    background: #939598;
    border: none;
    width: 40px;
    height: 40px;
  }

  .flickity-button.flickity-prev-next-button.next {
    right: -15px;
  }

  .flickity-button.flickity-prev-next-button.previous {
    left: -15px;
  }

  .flickity-button:hover,
  .carousel-component .js-owl-carousel-reference .owl-buttons .owl-prev:hover, .carousel-component .js-owl-carousel-reference .owl-buttons .owl-next:hover {
    background: #939598;
  }


  @media (max-width: 374px) {
    .kidult h3 {
      font-size: 26px;
    }

    .tabs {
      gap: 3px;
    }

    .tabs .tab span {
      font-size: 10px;
      padding: 5px;
    }

    .tab-content .roundal {
      padding: 5px;
    }

    .kidult h2 {
      font-size: 40px;
    }
  }
`}
      </style>
      <div class="kidult">
        <div class="kidult-content">
          <h3>{tabareatitle}</h3>
          <div class="tab-content-container">
            <div class="tab-content-inner">
              <div class="tabs-container">
                <div class="tabs">
                  <div class="tab tab1 active" data-tab="tab1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="58"
                      height="38"
                      viewBox="0 0 48 28"
                      fill="none"
                    >
                      <path
                        d="M23.6899 20.55C29.2128 20.55 33.6899 16.0729 33.6899 10.55C33.6899 5.02716 29.2128 0.550003 23.6899 0.550003C18.1671 0.550003 13.6899 5.02716 13.6899 10.55C13.6899 16.0729 18.1671 20.55 23.6899 20.55Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M10.1899 7.07001H37.1899C42.7099 7.07001 47.1899 11.55 47.1899 17.07C47.1899 22.59 42.7099 27.07 37.1899 27.07H10.1899C4.66994 27.07 0.189941 22.59 0.189941 17.07C0.189941 11.55 4.66994 7.07001 10.1899 7.07001Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>{tab1title}</span>
                  </div>
                  <div class="tab tab2" data-tab="tab2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="58"
                      height="38"
                      viewBox="0 0 48 28"
                      fill="none"
                    >
                      <path
                        d="M23.6899 20.55C29.2128 20.55 33.6899 16.0729 33.6899 10.55C33.6899 5.02716 29.2128 0.550003 23.6899 0.550003C18.1671 0.550003 13.6899 5.02716 13.6899 10.55C13.6899 16.0729 18.1671 20.55 23.6899 20.55Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M10.1899 7.07001H37.1899C42.7099 7.07001 47.1899 11.55 47.1899 17.07C47.1899 22.59 42.7099 27.07 37.1899 27.07H10.1899C4.66994 27.07 0.189941 22.59 0.189941 17.07C0.189941 11.55 4.66994 7.07001 10.1899 7.07001Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>{tab2title}</span>
                  </div>
                  <div class="tab tab3" data-tab="tab3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="58"
                      height="38"
                      viewBox="0 0 48 28"
                      fill="none"
                    >
                      <path
                        d="M23.6899 20.55C29.2128 20.55 33.6899 16.0729 33.6899 10.55C33.6899 5.02716 29.2128 0.550003 23.6899 0.550003C18.1671 0.550003 13.6899 5.02716 13.6899 10.55C13.6899 16.0729 18.1671 20.55 23.6899 20.55Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M10.1899 7.07001H37.1899C42.7099 7.07001 47.1899 11.55 47.1899 17.07C47.1899 22.59 42.7099 27.07 37.1899 27.07H10.1899C4.66994 27.07 0.189941 22.59 0.189941 17.07C0.189941 11.55 4.66994 7.07001 10.1899 7.07001Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>{tab3title}</span>
                  </div>
                  <div class="tab tab4" data-tab="tab4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="58"
                      height="38"
                      viewBox="0 0 48 28"
                      fill="none"
                    >
                      <path
                        d="M23.6899 20.55C29.2128 20.55 33.6899 16.0729 33.6899 10.55C33.6899 5.02716 29.2128 0.550003 23.6899 0.550003C18.1671 0.550003 13.6899 5.02716 13.6899 10.55C13.6899 16.0729 18.1671 20.55 23.6899 20.55Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M10.1899 7.07001H37.1899C42.7099 7.07001 47.1899 11.55 47.1899 17.07C47.1899 22.59 42.7099 27.07 37.1899 27.07H10.1899C4.66994 27.07 0.189941 22.59 0.189941 17.07C0.189941 11.55 4.66994 7.07001 10.1899 7.07001Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>{tab4title}</span>
                  </div>
                </div>

                <div
                  id="tab1"
                  class="tab-content active"
                  dangerouslySetInnerHTML={{ __html: tab1content }}
                ></div>

                <div
                  id="tab2"
                  class="tab-content"
                  dangerouslySetInnerHTML={{ __html: tab2content }}
                ></div>

                <div
                  id="tab3"
                  class="tab-content"
                  dangerouslySetInnerHTML={{ __html: tab3content }}
                ></div>

                <div
                  id="tab4"
                  class="tab-content"
                  dangerouslySetInnerHTML={{ __html: tab4content }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

KidultTabs.propTypes = {
  /** Kidult Tabs contents */
  tabareatitle: PropTypes.string,
  tab1title: PropTypes.string.isRequired,
  tab2title: PropTypes.string.isRequired,
  tab3title: PropTypes.string.isRequired,
  tab4title: PropTypes.string,
  tab1content: PropTypes.string,
  tab2content: PropTypes.string,
  tab3content: PropTypes.string,
  tab4content: PropTypes.string,
};
