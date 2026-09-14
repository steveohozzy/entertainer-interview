import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export const ChristmasQuickLinks = ({
  modulebackgroundcolor = "#27579f",

  link1image,
  link1imagealt,
  link1title,
  link1anchor,

  link2image,
  link2imagealt,
  link2title,
  link2anchor,

  link3image,
  link3imagealt,
  link3title,
  link3anchor,

  link4image,
  link4imagealt,
  link4title,
  link4anchor,

  link5image,
  link5imagealt,
  link5title,
  link5anchor,

  link6image,
  link6imagealt,
  link6title,
  link6anchor,

  link7image,
  link7imagealt,
  link7title,
  link7anchor,

  link8image,
  link8imagealt,
  link8title,
  link8anchor,

  link9image,
  link9imagealt,
  link9title,
  link9anchor,

  link10image,
  link10imagealt,
  link10title,
  link10anchor,

  link11image,
  link11imagealt,
  link11title,
  link11anchor,
}) => {

  const links = [
    {
      image: link1image,
      alt: link1imagealt,
      title: link1title,
      anchor: link1anchor,
    },
    {
      image: link2image,
      alt: link2imagealt,
      title: link2title,
      anchor: link2anchor,
    },
    {
      image: link3image,
      alt: link3imagealt,
      title: link3title,
      anchor: link3anchor,
    },
    {
      image: link4image,
      alt: link4imagealt,
      title: link4title,
      anchor: link4anchor,
    },
    {
      image: link5image,
      alt: link5imagealt,
      title: link5title,
      anchor: link5anchor,
    },
    {
      image: link6image,
      alt: link6imagealt,
      title: link6title,
      anchor: link6anchor,
    },
    {
      image: link7image,
      alt: link7imagealt,
      title: link7title,
      anchor: link7anchor,
    },
    {
      image: link8image,
      alt: link8imagealt,
      title: link8title,
      anchor: link8anchor,
    },
    {
      image: link9image,
      alt: link9imagealt,
      title: link9title,
      anchor: link9anchor,
    },
    {
      image: link10image,
      alt: link10imagealt,
      title: link10title,
      anchor: link10anchor,
    },
    {
      image: link11image,
      alt: link11imagealt,
      title: link11title,
      anchor: link11anchor,
    },
  ];

  const validLinks = links.filter(
    (link) => link.image && link.anchor
  );   

  return (
    <>
      <style>
        {`
          .signpost-wrapper {
            width: 100%;
            background: ${modulebackgroundcolor};
            position: relative;
            z-index: 999;
          }

          .signpost-container {
            position: relative;
            width: 100%;
            max-width: 1440px;
            margin: 0 auto;
            padding: 8px 20px;

            display: flex;
            justify-content: flex-start;
            gap: 5px;
            align-items: center;

            box-sizing: border-box;
            background: ${modulebackgroundcolor};

            z-index: 999;

            --signpost-left: 0px;
            --signpost-width: 100%;
            --signpost-top: 0px;
          }

          .signpost-container.signpost-fixed {
            position: fixed;
            top: var(--signpost-top, 0px);
            left: var(--signpost-left);
            width: var(--signpost-width);
            z-index: 9999;
          }

          .signpost-placeholder {
            display: none;
            width: 100%;
            height: 110px;
          }

          .signpost-placeholder.active {
            display: block;
          }

          .sign-link {
            position: relative;
            z-index: 2;

            flex: 1 1 0;
            min-width: 0;

            height: 94px;
            margin: 0;

            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;

            box-sizing: border-box;

            transition:
              transform 0.25s ease,
              filter 0.25s ease;
          }

          .sign-link:hover {
            transform: scale(1.04);
            filter: brightness(1.1);
          }

          .sign-link img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          @media (min-width: 1201px) {
            .signpost-container {
              height: 78px;
              min-height: 78px;
              padding: 6px 20px;
              gap: 5px;
              overflow: hidden;
            }

            .signpost-placeholder {
              height: 78px;
            }

            .sign-link {
              flex: 1 1 0;
              width: auto;
              min-width: 0;
              height: 64px;
            }

            .sign-link img {
              width: 100%;
              height: 64px;
              object-fit: contain;
            }
          }

          @media (max-width: 1200px) {
            .signpost-container {
              flex-wrap: nowrap;
              overflow-x: auto;
              overflow-y: hidden;
              -webkit-overflow-scrolling: touch;

              height: 98px;
              min-height: 98px;

              padding: 4px 10px;
              gap: 8px;
            }

            .signpost-placeholder {
              height: 98px;
            }

            .sign-link {
              flex: 0 0 31%;
              width: auto;
              min-width: 140px;
              height: 84px;
            }

            .sign-link img {
              width: 100%;
              height: 84px;
              object-fit: contain;
            }
          }

          @media (max-width: 768px) {
            .signpost-container {
              height: 84px;
              min-height: 84px;

              padding: 3px 5px;
              gap: 2px;

              overflow-x: auto;
              overflow-y: hidden;
            }

            .signpost-placeholder {
              height: 84px;
            }

            .sign-link {
              flex: 0 0 31%;
              min-width: 120px;
              height: 74px;
            }

            .sign-link img {
              width: 100%;
              height: 74px;
              object-fit: contain;
            }
          }
        `}
      </style>

      <div className="signpost-wrapper">

        <div class="signpost-container" id="signpostContainer">
          {validLinks.map((link, index) => (
            <a
              key={index}
              href={
                link.anchor.startsWith("#")
                  ? link.anchor
                  : `#${link.anchor}`
              }
              className="sign-link"
              aria-label={link.title || link.alt}
            >
              <img
                src={link.image}
                alt={link.alt || link.title || ""}
              />
            </a>
          ))}
        </div>
      </div>
      <script>
        {`
(function () {

  var sidebar = null;
  var placeholder = null;

  var originalTop = 0;
  var originalLeft = 0;
  var originalWidth = 0;
  var signpostTop = 0;

  var ticking = false;


  /* =========================================================
     SETUP
  ========================================================= */

  function setupSignpost() {

    sidebar = document.getElementById('signpostContainer');

    if (!sidebar) {
      return;
    }

    if (!placeholder) {

      placeholder = document.createElement('div');

      placeholder.className = 'signpost-placeholder';

      sidebar.parentNode.insertBefore(
        placeholder,
        sidebar
      );
    }

    calculateSignpostTop();
    calculatePosition();
    updatePosition();

    setupSmoothScroll();
  }


  /* =========================================================
     CALCULATE POSITION
  ========================================================= */

  function calculatePosition() {

    if (!sidebar) {
      return;
    }

    var wasFixed =
      sidebar.classList.contains('signpost-fixed');

    /*
     * Temporarily return the signpost to normal document flow
     * so we can get its real position and dimensions.
     */

    if (wasFixed) {

      sidebar.classList.remove('signpost-fixed');

      sidebar.style.removeProperty('--signpost-left');
      sidebar.style.removeProperty('--signpost-width');
    }

    var rect =
      sidebar.getBoundingClientRect();

    originalTop =
      rect.top + window.pageYOffset;

    originalLeft =
      rect.left;

    originalWidth =
      rect.width;

    /*
     * Restore fixed state if it was already fixed.
     */

    if (wasFixed) {

      sidebar.style.setProperty(
        '--signpost-left',
        originalLeft + 'px'
      );

      sidebar.style.setProperty(
        '--signpost-width',
        originalWidth + 'px'
      );

      sidebar.classList.add('signpost-fixed');
    }
  }


  /* =========================================================
     UPDATE FIXED POSITION
  ========================================================= */

  function updatePosition() {

    if (!sidebar) {
      return;
    }

    var scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      0;

    if (scrollTop >= originalTop) {

      if (!sidebar.classList.contains('signpost-fixed')) {

        /*
         * Capture the current width/position before fixing it.
         */

        var rect =
          sidebar.getBoundingClientRect();

        sidebar.style.setProperty(
          '--signpost-left',
          rect.left + 'px'
        );

        sidebar.style.setProperty(
          '--signpost-width',
          rect.width + 'px'
        );

        sidebar.classList.add('signpost-fixed');

        /*
         * Keep the page layout from jumping when the element
         * leaves normal document flow.
         */

        if (placeholder) {
          placeholder.classList.add('active');
        }
      }

    } else {

      if (sidebar.classList.contains('signpost-fixed')) {

        sidebar.classList.remove('signpost-fixed');

        sidebar.style.removeProperty(
          '--signpost-left'
        );

        sidebar.style.removeProperty(
          '--signpost-width'
        );

        if (placeholder) {
          placeholder.classList.remove('active');
        }
      }
    }
  }


  /* =========================================================
     CALCULATE STICKY TOP
  ========================================================= */

  function calculateSignpostTop() {

    signpostTop = 0;

    /*
     * On tablet/mobile, position the signpost underneath
     * the sticky navigation.
     */

    if (window.innerWidth <= 1200) {

      var nav =
        document.querySelector('.desktop__nav');

      if (nav) {

        var navRect =
          nav.getBoundingClientRect();

        signpostTop =
          navRect.height;
      }
    }

    if (sidebar) {

      sidebar.style.setProperty(
        '--signpost-top',
        signpostTop + 'px'
      );
    }
  }


  /* =========================================================
     SMOOTH ANCHOR SCROLL
  ========================================================= */

  function setupSmoothScroll() {

    if (!sidebar) {
      return;
    }

    var links =
      sidebar.querySelectorAll(
        '.sign-link[href^="#"]'
      );

    for (var i = 0; i < links.length; i++) {

      /*
       * Prevent adding the event more than once.
       */

      if (links[i].getAttribute('data-smooth-scroll') === 'true') {
        continue;
      }

      links[i].setAttribute(
        'data-smooth-scroll',
        'true'
      );

      links[i].addEventListener(
        'click',
        function (e) {

          var href =
            this.getAttribute('href');

          if (!href || href === '#') {
            return;
          }

          var target =
            document.getElementById(
              href.substring(1)
            );

          if (!target) {
            return;
          }

          /*
           * IMPORTANT:
           * Stop the browser's normal anchor jump.
           */

          e.preventDefault();
          e.stopPropagation();

          /*
           * Work out the target's absolute position.
           */

          var targetTop =
            target.getBoundingClientRect().top +
            window.pageYOffset;

          /*
           * Work out how much fixed navigation is
           * currently covering the page.
           */

          var offset = 0;

          /*
           * Desktop has no .desktop__nav offset here,
           * because the signpost itself is the only fixed
           * navigation being accounted for.
           */

          if (window.innerWidth <= 1200) {

            var nav =
              document.querySelector('.desktop__nav');

            if (nav) {

              offset +=
                nav.getBoundingClientRect().height;
            }
          }

          /*
           * If the signpost is currently fixed,
           * account for its height too.
           */

          if (
            sidebar &&
            sidebar.classList.contains('signpost-fixed')
          ) {

            offset +=
              sidebar.getBoundingClientRect().height;
          }

          /*
           * Small breathing room underneath the
           * fixed navigation.
           */

          offset += 10;

          /*
           * Perform the actual animated scroll.
           */

          window.scrollTo({
            top: Math.max(
              0,
              targetTop - offset
            ),
            behavior: 'smooth'
          });

          /*
           * Update the URL without causing the browser
           * to perform its own anchor jump.
           */

          if (
            window.history &&
            window.history.pushState
          ) {

            window.history.pushState(
              null,
              '',
              href
            );
          }

        },
        false
      );
    }
  }


  /* =========================================================
     REQUEST UPDATE
  ========================================================= */

  function requestUpdate() {

    if (!ticking) {

      window.requestAnimationFrame(
        function () {

          updatePosition();

          ticking = false;

        }
      );

      ticking = true;
    }
  }


  /* =========================================================
     EVENTS
  ========================================================= */

  window.addEventListener(
    'scroll',
    requestUpdate,
    {
      passive: true
    }
  );


  window.addEventListener(
    'resize',
    function () {

      calculateSignpostTop();
      calculatePosition();
      updatePosition();

    }
  );


  window.addEventListener(
    'orientationchange',
    function () {

      setTimeout(
        function () {

          calculateSignpostTop();
          calculatePosition();
          updatePosition();

        },
        100
      );

    }
  );


  /* =========================================================
     INITIALISE
  ========================================================= */

  function initialise() {

    setTimeout(
      function () {

        setupSignpost();

      },
      150
    );
  }


  if (
    document.readyState === 'complete' ||
    document.readyState === 'interactive'
  ) {

    initialise();

  } else {

    document.addEventListener(
      'DOMContentLoaded',
      initialise
    );
  }


  window.addEventListener(
    'load',
    function () {

      setTimeout(
        function () {

          calculateSignpostTop();
          calculatePosition();
          updatePosition();

          /*
           * Make absolutely sure the anchor handlers
           * are present after the page has fully loaded.
           */

          setupSmoothScroll();

        },
        300
      );

    }
  );


})();
`}
</script>
    </>
  );
};

ChristmasQuickLinks.propTypes = {
  modulebackgroundcolor: PropTypes.string,

  link1image: PropTypes.string,
  link1imagealt: PropTypes.string,
  link1title: PropTypes.string,
  link1anchor: PropTypes.string,

  link2image: PropTypes.string,
  link2imagealt: PropTypes.string,
  link2title: PropTypes.string,
  link2anchor: PropTypes.string,

  link3image: PropTypes.string,
  link3imagealt: PropTypes.string,
  link3title: PropTypes.string,
  link3anchor: PropTypes.string,

  link4image: PropTypes.string,
  link4imagealt: PropTypes.string,
  link4title: PropTypes.string,
  link4anchor: PropTypes.string,

  link5image: PropTypes.string,
  link5imagealt: PropTypes.string,
  link5title: PropTypes.string,
  link5anchor: PropTypes.string,

  link6image: PropTypes.string,
  link6imagealt: PropTypes.string,
  link6title: PropTypes.string,
  link6anchor: PropTypes.string,

  link7image: PropTypes.string,
  link7imagealt: PropTypes.string,
  link7title: PropTypes.string,
  link7anchor: PropTypes.string,

  link8image: PropTypes.string,
  link8imagealt: PropTypes.string,
  link8title: PropTypes.string,
  link8anchor: PropTypes.string,

  link9image: PropTypes.string,
  link9imagealt: PropTypes.string,
  link9title: PropTypes.string,
  link9anchor: PropTypes.string,

  link10image: PropTypes.string,
  link10imagealt: PropTypes.string,
  link10title: PropTypes.string,
  link10anchor: PropTypes.string,

  link11image: PropTypes.string,
  link11imagealt: PropTypes.string,
  link11title: PropTypes.string,
  link11anchor: PropTypes.string,
};