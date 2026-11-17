import PropTypes from "prop-types";
import { useLayoutEffect, useRef } from "react";

const getTikTokVideoId = (url) => {
  if (!url) {
    return "";
  }

  const match = url.match(/\/video\/(\d+)/);
  return match ? match[1] : "";
};

const normaliseInstagramUrl = (url) => {
  if (!url) {
    return "";
  }

  return url.replace(
    /^(https?:\/\/(?:www\.)?instagram\.com)\/[^/]+\/(reel|reels|p|tv)\/([^/?#]+)\/?(?:[?#].*)?$/i,
    "$1/$2/$3/"
  );
};

const escapeHTML = (value) => {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};

const getFacebookEmbedType = (url) => {
  if (!url) {
    return "post";
  }

  if (/facebook\.com\/(?:.*\/)?(?:reel|videos?|share\/r)\//i.test(url)) {
    return "video";
  }

  return "post";
};

const getPosts = (props) => {
  return [
    { platform: props.post1Platform, url: props.post1 },
    { platform: props.post2Platform, url: props.post2 },
    { platform: props.post3Platform, url: props.post3 },
    { platform: props.post4Platform, url: props.post4 },
    { platform: props.post5Platform, url: props.post5 },
    { platform: props.post6Platform, url: props.post6 },
  ].filter((post) => post.url);
};

const buildCMSHTML = (props) => {
  const posts = getPosts(props);

  const carouselId =
    "instagram-tiktok-carousel-" +
    Math.random().toString(36).substr(2, 9);

  const sectionId = carouselId + "-section";
  const arrowBackground = props.lozengebackgroundcolor || "#000000";

  const cards = posts
    .map((post) => {
      const platform =
        post.platform === "tiktok"
          ? "tiktok"
          : post.platform === "facebook"
            ? "facebook"
            : "instagram";

      if (platform === "tiktok") {
        const videoId = getTikTokVideoId(post.url);

        if (!videoId) {
          return `
            <div class="instagram-card">
              <div style="width:100%;min-height:200px;display:flex;align-items:center;justify-content:center;text-align:center;padding:20px;box-sizing:border-box;">
                Invalid TikTok video URL
              </div>
            </div>
          `;
        }

        return `
          <div class="instagram-card">
            <iframe
              class="tiktok-player"
              src="https://www.tiktok.com/player/v1/${videoId}"
              title="TikTok video"
              allow="fullscreen"
              scrolling="no"
            ></iframe>
          </div>
        `;
      }

      if (platform === "facebook") {
        const facebookType = getFacebookEmbedType(post.url);
        const facebookEmbedUrl =
          "https://www.facebook.com/plugins/" +
          (facebookType === "video" ? "video.php" : "post.php") +
          "?href=" + encodeURIComponent(post.url) +
          "&show_text=true&width=500";

        return `
          <div class="instagram-card facebook-card">
            <iframe
              class="facebook-embed"
              src="${escapeHTML(facebookEmbedUrl)}"
              title="Facebook post"
              width="500"
              height="600"
              style="width:100%;max-width:500px;border:none;overflow:hidden"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        `;
      }

      return `
        <div class="instagram-card">
          <blockquote
            class="instagram-media"
            data-instgrm-permalink="${escapeHTML(normaliseInstagramUrl(post.url))}"
            data-instgrm-version="14"
          ></blockquote>
        </div>
      `;
    })
    .join("");

  return `
<style>
  #${sectionId} {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    --instagram-arrow-background: ${escapeHTML(arrowBackground)};
  }

  #${sectionId} .instagram-carousel {
    width: 100%;
  }

  #${sectionId} .flickity-viewport {
    overflow: hidden;
    transition: height 0.2s ease;
  }

  #${sectionId} .instagram-card {
    width: calc((100% - 32px) / 3);
    margin-right: 16px;
    box-sizing: border-box;
  }

  #${sectionId} .instagram-card .instagram-media {
    margin: 0 !important;
    width: 100% !important;
    min-width: 0 !important;
  }

  #${sectionId} .instagram-card .tiktok-player {
    display: block;
    width: 100%;
    height: 575px;
    border: none;
    margin: 0;
    padding: 0;
    background: #000;
  }

  #${sectionId} .flickity-button {
    background: var(--instagram-arrow-background, #000000);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    width: 40px;
    height: 40px;
  }

  #${sectionId} .flickity-button:hover {
    background: var(--instagram-arrow-background, #000000);
  }

  #${sectionId} .flickity-button .flickity-button-icon {
    fill: #ffffff;
  }

  #${sectionId} .flickity-button:disabled {
    display: none !important;
  }

  #${sectionId} .flickity-page-dots {
    display: none !important;
  }

  #${sectionId} .instagram-carousel-static .flickity-button {
    display: none !important;
  }

  #${sectionId} .title {
    text-transform: uppercase;
    background: var(--consistent-brand-modules-header-background);
    color: var(--consistent-brand-modules-header-text-color);
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    font-size: 18px;
    border-radius: 8px;
    margin: 0 auto 20px;
    padding: 5px 0;
    width: 100%;
    max-width: 1140px;
  }

  @media (max-width: 767px) {
    #${sectionId} .instagram-card {
      width: 326px;
      margin-right: 12px;
    }

    #${sectionId} .instagram-card .tiktok-player {
      height: 575px;
    }

    #${sectionId} .instagram-carousel-static .flickity-button {
      display: none !important;
    }
  }
</style>

<div
  id="${sectionId}"
  class="instagram-carousel-section"
  style="--instagram-arrow-background:${escapeHTML(arrowBackground)};"
>
  ${
    props.title
      ? `
        <div
          class="title"
          style="text-align:center;background:${escapeHTML(props.lozengebackgroundcolor || "")};color:${escapeHTML(props.lozengetextcolor || "#000000")};"
        >${escapeHTML(props.title)}</div>
      `
      : ""
  }

  <div
    id="${carouselId}"
    class="instagram-carousel js-flickity"
    data-flickity='{
      "cellAlign": "left",
      "contain": true,
      "wrapAround": true,
      "pageDots": false,
      "prevNextButtons": true,
      "draggable": true,
      "adaptiveHeight": false,
      "imagesLoaded": true
    }'
  >
    ${cards}
  </div>
</div>

<script>
(function () {
  var carouselId = "${carouselId}";
  var instagramScript = "https://www.instagram.com/embed.js";
  var checkFlickityTimer = null;
  var resizeScheduleTimer = null;
  var resizeTimers = [];
  var resizeObserver = null;
  var mutationObserver = null;
  var started = false;

  function getCarousel() {
    return document.getElementById(carouselId);
  }

  function getFlickity() {
    var carousel = getCarousel();

    if (!carousel || !window.Flickity || !window.Flickity.data) {
      return null;
    }

    return window.Flickity.data(carousel);
  }

  function clearResizeTimers() {
    if (resizeScheduleTimer) {
      clearTimeout(resizeScheduleTimer);
      resizeScheduleTimer = null;
    }

    for (var i = 0; i < resizeTimers.length; i++) {
      clearTimeout(resizeTimers[i]);
    }

    resizeTimers = [];
  }

  function updateCarouselAlignment() {
    var carousel = getCarousel();
    var flkty = getFlickity();

    if (!carousel || !flkty) {
      return;
    }

    var cells = carousel.querySelectorAll(".instagram-card");
    var viewport = carousel.querySelector(".flickity-viewport");

    if (!cells.length || !viewport) {
      return;
    }

    var containerWidth = carousel.clientWidth;
    var totalCellWidth = 0;
    var tallestCell = 0;

    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var cellStyle = window.getComputedStyle(cell);

      totalCellWidth +=
        cell.getBoundingClientRect().width +
        (parseFloat(cellStyle.marginLeft) || 0) +
        (parseFloat(cellStyle.marginRight) || 0);

      var contentHeight = Math.max(
        cell.scrollHeight,
        cell.offsetHeight,
        cell.getBoundingClientRect().height
      );

      if (contentHeight > tallestCell) {
        tallestCell = contentHeight;
      }
    }

    if (!containerWidth || !totalCellWidth) {
      return;
    }

    var allCellsFit = totalCellWidth <= containerWidth + 1;

    flkty.options.cellAlign = allCellsFit ? "center" : "left";
    flkty.options.contain = true;
    flkty.options.adaptiveHeight = false;

    if (allCellsFit) {
      carousel.classList.add("instagram-carousel-static");
    } else {
      carousel.classList.remove("instagram-carousel-static");
    }

    flkty.resize();

    if (tallestCell > 0) {
      var nextHeight = Math.ceil(tallestCell) + "px";

      if (viewport.style.height !== nextHeight) {
        viewport.style.height = nextHeight;
      }
    }
  }

  function forceCarouselResize() {
    var flkty = getFlickity();

    if (!flkty) {
      return;
    }

    flkty.resize();
    updateCarouselAlignment();
  }

  function scheduleResizes() {
    clearResizeTimers();

    resizeScheduleTimer = setTimeout(function () {
      resizeScheduleTimer = null;

      var delays = [300, 800, 1500, 2500, 4000, 6000];

      for (var i = 0; i < delays.length; i++) {
        (function (delay) {
          var timer = setTimeout(function () {
            forceCarouselResize();
          }, delay);

          resizeTimers.push(timer);
        })(delays[i]);
      }
    }, 150);
  }

  function processInstagram() {
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
      scheduleResizes();
      return true;
    }

    return false;
  }

  function loadInstagramScript(callback) {
    if (window.instgrm && window.instgrm.Embeds) {
      callback();
      return;
    }

    var existingScript = document.querySelector(
      'script[src="' + instagramScript + '"]'
    );

    if (existingScript) {
      var checkTimer = setInterval(function () {
        if (window.instgrm && window.instgrm.Embeds) {
          clearInterval(checkTimer);
          callback();
        }
      }, 100);

      setTimeout(function () {
        clearInterval(checkTimer);
      }, 10000);

      return;
    }

    var script = document.createElement("script");
    script.async = true;
    script.src = instagramScript;
    script.onload = callback;
    document.body.appendChild(script);
  }

  function waitForFlickity() {
    var carousel = getCarousel();
    var flkty = getFlickity();

    if (!carousel || !flkty) {
      return;
    }

    clearInterval(checkFlickityTimer);
    checkFlickityTimer = null;

    forceCarouselResize();
    scheduleResizes();

    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver(function () {
        scheduleResizes();
      });

      resizeObserver.observe(carousel);

      var cards = carousel.querySelectorAll(".instagram-card");

      for (var i = 0; i < cards.length; i++) {
        resizeObserver.observe(cards[i]);
      }
    }

    if (window.MutationObserver) {
      mutationObserver = new MutationObserver(function () {
        scheduleResizes();
      });

      mutationObserver.observe(carousel, {
        childList: true,
        subtree: true
      });
    }
  }

  function start() {
    if (started) {
      return;
    }

    var carousel = getCarousel();

    if (!carousel) {
      return;
    }

    started = true;

    checkFlickityTimer = setInterval(waitForFlickity, 300);

    setTimeout(function () {
      if (checkFlickityTimer) {
        clearInterval(checkFlickityTimer);
        checkFlickityTimer = null;
      }
    }, 10000);

    loadInstagramScript(function () {
      processInstagram();
      scheduleResizes();
    });
  }

  function resizeCarousel() {
    scheduleResizes();
  }

  window.addEventListener("resize", resizeCarousel);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
</script>
`;
};

export const InstagramCarousel = ({
  title,
  lozengebackgroundcolor,
  lozengetextcolor,
  post1Platform,
  post1,
  post2Platform,
  post2,
  post3Platform,
  post3,
  post4Platform,
  post4,
  post5Platform,
  post5,
  post6Platform,
  post6,
}) => {
  const carouselRef = useRef(null);

  const carouselIdRef = useRef(
    "instagram-tiktok-carousel-" +
      Math.random().toString(36).substr(2, 9)
  );

  const sectionIdRef = useRef(carouselIdRef.current + "-section");

  const posts = [
    { platform: post1Platform, url: post1 },
    { platform: post2Platform, url: post2 },
    { platform: post3Platform, url: post3 },
    { platform: post4Platform, url: post4 },
    { platform: post5Platform, url: post5 },
    { platform: post6Platform, url: post6 },
  ].filter((post) => post.url);

  const loadScript = (src, callback) => {
    const existingScript = document.querySelector(
      'script[src="' + src + '"]'
    );

    if (existingScript) {
      if (window.instgrm && window.instgrm.Embeds) {
        callback();
      } else {
        const timer = setInterval(() => {
          if (window.instgrm && window.instgrm.Embeds) {
            clearInterval(timer);
            callback();
          }
        }, 100);

        setTimeout(() => clearInterval(timer), 10000);
      }

      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    script.onload = callback;
    document.body.appendChild(script);
  };

  const processInstagramEmbeds = () => {
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
    }
  };

  useLayoutEffect(() => {
    let flickityTimer;
    let resizeScheduleTimer;
    let resizeTimers = [];
    let resizeObserver;
    let mutationObserver;
    let destroyed = false;

    const clearResizeTimers = () => {
      if (resizeScheduleTimer) {
        clearTimeout(resizeScheduleTimer);
        resizeScheduleTimer = null;
      }

      resizeTimers.forEach((timer) => clearTimeout(timer));
      resizeTimers = [];
    };

    const updateCarouselAlignment = () => {
      if (
        destroyed ||
        !carouselRef.current ||
        !window.jQuery ||
        !window.jQuery.fn ||
        !window.jQuery.fn.flickity
      ) {
        return;
      }

      const $ = window.jQuery;
      const carousel = $(carouselRef.current);
      const flkty = carousel.data("flickity");

      if (!flkty) {
        return;
      }

      const carouselElement = carouselRef.current;
      const viewport = carouselElement.querySelector(".flickity-viewport");
      const cells = carouselElement.querySelectorAll(".instagram-card");

      if (!cells.length || !viewport) {
        return;
      }

      const containerWidth = carouselElement.clientWidth;
      let totalCellWidth = 0;
      let tallestCell = 0;

      cells.forEach((cell) => {
        const cellStyle = window.getComputedStyle(cell);

        totalCellWidth +=
          cell.getBoundingClientRect().width +
          (parseFloat(cellStyle.marginLeft) || 0) +
          (parseFloat(cellStyle.marginRight) || 0);

        const contentHeight = Math.max(
          cell.scrollHeight,
          cell.offsetHeight,
          cell.getBoundingClientRect().height
        );

        tallestCell = Math.max(tallestCell, contentHeight);
      });

      if (!containerWidth || !totalCellWidth) {
        return;
      }

      const allCellsFit = totalCellWidth <= containerWidth + 1;

      flkty.options.cellAlign = allCellsFit ? "center" : "left";
      flkty.options.contain = true;
      flkty.options.adaptiveHeight = false;

      if (allCellsFit) {
        carouselElement.classList.add("instagram-carousel-static");
      } else {
        carouselElement.classList.remove("instagram-carousel-static");
      }

      carousel.flickity("resize");

      if (tallestCell > 0) {
        const nextHeight = `${Math.ceil(tallestCell)}px`;

        if (viewport.style.height !== nextHeight) {
          viewport.style.height = nextHeight;
        }
      }
    };

    const forceCarouselResize = () => {
      if (
        destroyed ||
        !carouselRef.current ||
        !window.jQuery ||
        !window.jQuery.fn ||
        !window.jQuery.fn.flickity
      ) {
        return;
      }

      const carousel = window.jQuery(carouselRef.current);

      if (!carousel.data("flickity")) {
        return;
      }

      carousel.flickity("resize");
      updateCarouselAlignment();
    };

    const scheduleResizes = () => {
      clearResizeTimers();

      resizeScheduleTimer = setTimeout(() => {
        resizeScheduleTimer = null;

        const delays = [300, 800, 1500, 2500, 4000, 6000];

        delays.forEach((delay) => {
          const timer = setTimeout(() => {
            forceCarouselResize();
          }, delay);

          resizeTimers.push(timer);
        });
      }, 150);
    };

    const initialiseCarousel = () => {
      if (destroyed) {
        return;
      }

      if (
        !window.jQuery ||
        !window.jQuery.fn ||
        !window.jQuery.fn.flickity
      ) {
        flickityTimer = setTimeout(initialiseCarousel, 300);
        return;
      }

      if (!carouselRef.current) {
        return;
      }

      const $ = window.jQuery;
      const carousel = $(carouselRef.current);

      if (carousel.data("flickity")) {
        carousel.flickity("destroy");
      }

      carousel.flickity({
        cellAlign: "left",
        contain: true,
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true,
        draggable: true,
        adaptiveHeight: false,
        imagesLoaded: true,
      });

      forceCarouselResize();
      scheduleResizes();

      const carouselElement = carouselRef.current;

      if (window.ResizeObserver) {
        resizeObserver = new ResizeObserver(() => {
          scheduleResizes();
        });

        resizeObserver.observe(carouselElement);

        carouselElement
          .querySelectorAll(".instagram-card")
          .forEach((card) => {
            resizeObserver.observe(card);
          });
      }

      if (window.MutationObserver) {
        mutationObserver = new MutationObserver(() => {
          scheduleResizes();
        });

        mutationObserver.observe(carouselElement, {
          childList: true,
          subtree: true,
        });
      }

      const embedTimer = setTimeout(() => {
        if (destroyed) {
          return;
        }

        processInstagramEmbeds();
        scheduleResizes();

        const reloadTimer = setTimeout(() => {
          if (
            !destroyed &&
            carouselRef.current &&
            carousel.data("flickity")
          ) {
            carousel.flickity("reloadCells");
            forceCarouselResize();
            scheduleResizes();
          }
        }, 1200);

        resizeTimers.push(reloadTimer);
      }, 500);

      resizeTimers.push(embedTimer);
    };

    const resizeHandler = () => {
      scheduleResizes();
    };

    window.addEventListener("resize", resizeHandler);

    loadScript("https://www.instagram.com/embed.js", () => {
      if (destroyed) {
        return;
      }

      processInstagramEmbeds();
      initialiseCarousel();
    });

    return () => {
      destroyed = true;

      clearTimeout(flickityTimer);
      clearResizeTimers();

      if (resizeObserver) {
        resizeObserver.disconnect();
      }

      if (mutationObserver) {
        mutationObserver.disconnect();
      }

      window.removeEventListener("resize", resizeHandler);

      if (
        window.jQuery &&
        window.jQuery.fn &&
        window.jQuery.fn.flickity &&
        carouselRef.current
      ) {
        const carousel = window.jQuery(carouselRef.current);

        if (carousel.data("flickity")) {
          carousel.flickity("destroy");
        }
      }
    };
  }, [
    post1,
    post1Platform,
    post2,
    post2Platform,
    post3,
    post3Platform,
    post4,
    post4Platform,
    post5,
    post5Platform,
    post6,
    post6Platform,
  ]);

  const sectionSelector = `#${sectionIdRef.current}`;

  const exportHTML = buildCMSHTML({
    title,
    lozengebackgroundcolor,
    lozengetextcolor,
    post1Platform,
    post1,
    post2Platform,
    post2,
    post3Platform,
    post3,
    post4Platform,
    post4,
    post5Platform,
    post5,
    post6Platform,
    post6,
  });

  return (
    <>
      <style>
        {`
          ${sectionSelector} {
            width: 100%;
            max-width: 1140px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            overflow: hidden;
            box-sizing: border-box;
            --instagram-arrow-background: ${lozengebackgroundcolor || "#000000"};
          }

          ${sectionSelector} .instagram-carousel {
            width: 100%;
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
          }

          ${sectionSelector} .flickity-viewport {
            overflow: hidden;
            transition: height 0.2s ease;
          }

          ${sectionSelector} .instagram-card {
            width: calc((100% - 32px) / 3);
            margin-right: 16px;
            box-sizing: border-box;
          }

          ${sectionSelector} .instagram-card .instagram-media {
            margin: 0 !important;
            width: 100% !important;
            min-width: 0 !important;
          }

          ${sectionSelector} .instagram-card .tiktok-player {
            display: block;
            width: 100%;
            height: 575px;
            border: none;
            margin: 0;
            padding: 0;
            background: #000;
          }

          ${sectionSelector} .flickity-button {
            background: var(--instagram-arrow-background, #000000);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            width: 40px;
            height: 40px;
          }

          ${sectionSelector} .flickity-button:hover {
            background: var(--instagram-arrow-background, #000000);
          }

          ${sectionSelector} .flickity-button .flickity-button-icon {
            fill: #ffffff;
          }

          ${sectionSelector} .flickity-button:disabled {
            display: none !important;
          }

          ${sectionSelector} .flickity-page-dots {
            display: none !important;
          }

          ${sectionSelector} .instagram-carousel-static .flickity-button {
            display: none !important;
          }

          ${sectionSelector} .title {
            text-transform: uppercase;
            background: var(--consistent-brand-modules-header-background);
            color: var(--consistent-brand-modules-header-text-color);
            font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
            font-size: 18px;
            border-radius: 8px;
            margin: 0 auto 20px;
            padding: 5px 0;
            width: 100%;
            max-width: 1140px;
          }

          @media (max-width: 767px) {
            ${sectionSelector} .instagram-card {
              width: 326px;
              margin-right: 12px;
            }

            ${sectionSelector} .instagram-card .tiktok-player {
              height: 575px;
            }

            ${sectionSelector} .instagram-carousel-static .flickity-button {
              display: none !important;
            }
          }
        `}
      </style>

      <div
        id={sectionIdRef.current}
        className="instagram-carousel-section"
        style={{
          "--instagram-arrow-background":
            lozengebackgroundcolor || "#000000",
        }}
      >
        {title && (
          <div
            className="title"
            style={{
              textAlign: "center",
              background: lozengebackgroundcolor,
              color: lozengetextcolor,
            }}
          >
            {title}
          </div>
        )}

        <div
          ref={carouselRef}
          id={carouselIdRef.current}
          className="instagram-carousel js-flickity"
          data-flickity='{
            "cellAlign": "left",
            "contain": true,
            "wrapAround": true,
            "pageDots": false,
            "prevNextButtons": true,
            "draggable": true,
            "adaptiveHeight": false,
            "imagesLoaded": true
          }'
        >
          {posts.map((post, index) => {
            const platform =
              post.platform === "tiktok"
                ? "tiktok"
                : post.platform === "facebook"
                  ? "facebook"
                  : "instagram";

            if (platform === "tiktok") {
              const videoId = getTikTokVideoId(post.url);

              if (!videoId) {
                return (
                  <div
                    className="instagram-card"
                    key={`${post.platform}-${post.url}-${index}`}
                  >
                    <div
                      style={{
                        width: "100%",
                        minHeight: "200px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        padding: "20px",
                        boxSizing: "border-box",
                      }}
                    >
                      Invalid TikTok video URL
                    </div>
                  </div>
                );
              }

              return (
                <div
                  className="instagram-card"
                  key={`${post.platform}-${post.url}-${index}`}
                >
                  <iframe
                    className="tiktok-player"
                    src={`https://www.tiktok.com/player/v1/${videoId}`}
                    title="TikTok video"
                    allow="fullscreen"
                    scrolling="no"
                  />
                </div>
              );
            }

            if (platform === "facebook") {
              const facebookType = getFacebookEmbedType(post.url);
              const facebookEmbedUrl =
                "https://www.facebook.com/plugins/" +
                (facebookType === "video" ? "video.php" : "post.php") +
                "?href=" + encodeURIComponent(post.url) +
                "&show_text=true&width=500";

              return (
                <div
                  className="instagram-card facebook-card"
                  key={`${post.platform}-${post.url}-${index}`}
                >
                  <iframe
                    className="facebook-embed"
                    src={facebookEmbedUrl}
                    title="Facebook post"
                    width="500"
                    height="600"
                    style={{
                      width: "100%",
                      maxWidth: "500px",
                      border: "none",
                      overflow: "hidden",
                    }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
              );
            }

            return (
              <div
                className="instagram-card"
                key={`${post.platform}-${post.url}-${index}`}
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={normaliseInstagramUrl(post.url)}
                  data-instgrm-version="14"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="storybook-instagram-carousel-export"
        hidden
        data-html={exportHTML}
      />
    </>
  );
};

InstagramCarousel.propTypes = {
  title: PropTypes.string,
  lozengebackgroundcolor: PropTypes.string,
  lozengetextcolor: PropTypes.string,
  post1Platform: PropTypes.oneOf(["instagram", "tiktok", "facebook"]),
  post1: PropTypes.string,
  post2Platform: PropTypes.oneOf(["instagram", "tiktok", "facebook"]),
  post2: PropTypes.string,
  post3Platform: PropTypes.oneOf(["instagram", "tiktok", "facebook"]),
  post3: PropTypes.string,
  post4Platform: PropTypes.oneOf(["instagram", "tiktok", "facebook"]),
  post4: PropTypes.string,
  post5Platform: PropTypes.oneOf(["instagram", "tiktok", "facebook"]),
  post5: PropTypes.string,
  post6Platform: PropTypes.oneOf(["instagram", "tiktok", "facebook"]),
  post6: PropTypes.string,
};

InstagramCarousel.defaultProps = {
  title: "",
  lozengebackgroundcolor: "",
  lozengetextcolor: "#000000",
  post1Platform: "instagram",
  post1: "",
  post2Platform: "instagram",
  post2: "",
  post3Platform: "instagram",
  post3: "",
  post4Platform: "instagram",
  post4: "",
  post5Platform: "instagram",
  post5: "",
  post6Platform: "instagram",
};

export default InstagramCarousel;