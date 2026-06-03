import PropTypes from "prop-types";

export const GamingHubTabbedCarousels = ({
  carousel1title,
  carousel2title,
}) => {
 
  return (
    <>
      <style>
        {`
    #gaming-tabs-area {
    background-color: #fff;
    max-width: 940px;
    padding: 0 20px;
    margin: 0 auto;
  }
  
  .gaming-tabs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    padding: 10px 0;
    text-align: center;
    gap: 20px;
  }

  .gaming-tabs .tab {
    font-size: 18px;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    color: #494949;
    padding: 10px 20px;
    width: calc(50% - 10px);
    border-radius: 30px;
    cursor: pointer;
    border: 3px solid #494949;
    transition: all 0.3s;
  }

  .gaming-tabs .tab:hover {
    background-color: #494949;
    color: #fff;
  }

  .gaming-tabs .tab.active {
    background-color: #494949;
    color: #fff;
  }

  .gaming-tabs-coming-soon-carousel,
  .gaming-tabs-gifts-for-gamers-carousel {
    margin: 0 auto;
    width: 100%;
    max-width: 565px;
    padding: 10px 20px;
  }

  /* Hide panels by default */
  .gaming-tabs-coming-soon-carousel,
  .gaming-tabs-gifts-for-gamers-carousel {
    display: none;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.4s ease, transform 0.4s ease;
  }

  /* Active panel animation */
  .gaming-tab-active {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }
        `}
      </style>
      <div id="gaming-tabs-area">
        <div class="gaming-tabs">
          <div class="tab" id="coming-soon">{carousel1title}</div>
          <div class="tab" id="gifts-for-gamers">{carousel2title}</div>
        </div>
        <div class="gaming-tabs-coming-soon-carousel" data-tabid="coming-soon">

        </div>
        <div class="gaming-tabs-gifts-for-gamers-carousel" data-tabid="gifts-for-gamers">

        </div>
      </div>

    <script>
      {`
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll("#gaming-tabs-area .tab");
  const panels = document.querySelectorAll("#gaming-tabs-area [data-tabid]");

  function refreshCarousel(panel) {
    // Flickity support (most likely your setup)
    if (window.Flickity) {
      const flktyEl = panel.querySelector('.flickity-enabled');
      if (flktyEl && flktyEl.flickity) {
        flktyEl.flickity.resize();
      }
    }

    // Generic fallback (triggers reflow for other sliders)
    window.dispatchEvent(new Event('resize'));
  }

  function activateTab(tabId) {
    tabs.forEach(tab => {
      tab.classList.toggle("active", tab.id === tabId);
    });

    panels.forEach(panel => {
      if (panel.dataset.tabid === tabId) {
        panel.classList.add("gaming-tab-active");

        // Delay refresh slightly so animation/layout settles
        setTimeout(() => {
          refreshCarousel(panel);
        }, 300);

      } else {
        panel.classList.remove("gaming-tab-active");
      }
    });
  }

  // Click events
  tabs.forEach(tab => {
    tab.addEventListener("click", function () {
      activateTab(this.id);
    });
  });

  // Default tab
  if (tabs.length) {
    activateTab(tabs[0].id);
  }
});
`}
</script>
    </>
  );
};

GamingHubTabbedCarousels.propTypes = {
  carousel1title: PropTypes.string.isRequired,
  carousel2title: PropTypes.string.isRequired,
};
