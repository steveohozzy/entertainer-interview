import PropTypes from "prop-types";

export const FootballHubHero = ({
  title,
  text,
}) => {
 
  return (
    <>
      <style>
        {`
    .category-title {
    display: none;
  }
  #world-cup-header-area {
    background-color: #fff;
  }
  .world-cup-header-content {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    text-align: center;
  }

  .world-cup-header-content h2 {
    text-transform: uppercase;
    background-color: #1f2b91;
    color: #fff;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    font-size: 24px;
    border-radius: 8px;
  }

  .world-cup-header-content p {
    font-size: 16px;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    color: #1f2b91;
    margin: 0 0 20px;
  }
        `}
      </style>
      <div id="world-cup-header-area">
        <div class="world-cup-header-content">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
      <script>
        {`
(function () {

    let lastPage = new URL(window.location.href).searchParams.get("page");
    let scrollTimeout = null;

    function waitForHitsAndScroll() {
        const hits = document.getElementById("hits");
        if (!hits) return;

        // Wait until hits actually has content
        if (hits.children.length === 0) return;

        // Debounce to allow layout/images to settle
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            hits.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150); // small delay is key for slow connections
    }

    function handlePageChange() {
        const currentPage = new URL(window.location.href).searchParams.get("page");

        if (currentPage && currentPage !== lastPage) {
            lastPage = currentPage;

            // Keep checking until content appears
            const interval = setInterval(() => {
                const hits = document.getElementById("hits");

                if (hits && hits.children.length > 0) {
                    clearInterval(interval);
                    waitForHitsAndScroll();
                }
            }, 100);

            // Safety: stop checking after 5s
            setTimeout(() => clearInterval(interval), 5000);
        }
    }

    // Patch history
    const pushState = history.pushState;
    const replaceState = history.replaceState;

    history.pushState = function (...args) {
        pushState.apply(this, args);
        handlePageChange();
    };

    history.replaceState = function (...args) {
        replaceState.apply(this, args);
        handlePageChange();
    };

    window.addEventListener("popstate", handlePageChange);

    // Initial load
    document.addEventListener("DOMContentLoaded", () => {
        if (window.location.search.includes("page=")) {
            handlePageChange();
        }
    });

})();
`}
</script>
    </>
  );
};

FootballHubHero.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
