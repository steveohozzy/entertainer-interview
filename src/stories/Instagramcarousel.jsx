import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

export const InstagramCarousel = ({
  title,
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
    `instagram-tiktok-carousel-${Math.random()
      .toString(36)
      .substr(2, 9)}`
  );

  const posts = [
    {
      platform: post1Platform,
      url: post1,
    },
    {
      platform: post2Platform,
      url: post2,
    },
    {
      platform: post3Platform,
      url: post3,
    },
    {
      platform: post4Platform,
      url: post4,
    },
    {
      platform: post5Platform,
      url: post5,
    },
    {
      platform: post6Platform,
      url: post6,
    },
  ].filter((post) => post.url);


  /*
   * Extract the TikTok video ID from a normal TikTok URL.
   *
   * Example:
   *
   * https://www.tiktok.com/@theentertaineruk/video/7610826783235116310?lang=en-GB
   *
   * becomes:
   *
   * 7610826783235116310
   */
  const getTikTokVideoId = (url) => {
    if (!url) {
      return '';
    }

    const match = url.match(
      /\/video\/(\d+)/
    );

    return match ? match[1] : '';
  };


  /*
   * Load a script once.
   */
  const loadScript = (src, callback) => {
    const existingScript =
      document.querySelector(
        `script[src="${src}"]`
      );

    if (existingScript) {
      callback();
      return;
    }

    const script =
      document.createElement('script');

    script.async = true;
    script.src = src;

    script.onload = callback;

    document.body.appendChild(script);
  };


  /*
   * Process Instagram embeds.
   */
  const processInstagramEmbeds = () => {
    if (
      window.instgrm &&
      window.instgrm.Embeds
    ) {
      window.instgrm.Embeds.process();
    }
  };


  useEffect(() => {
    let flickityTimer;
    let resizeTimer;
    let instagramTimer;

    const initialiseCarousel = () => {
      if (
        typeof window === 'undefined' ||
        !window.jQuery ||
        !window.jQuery.fn ||
        !window.jQuery.fn.flickity
      ) {
        flickityTimer = setTimeout(
          initialiseCarousel,
          300
        );

        return;
      }

      if (!carouselRef.current) {
        return;
      }

      const $ = window.jQuery;

      const carousel =
        $(carouselRef.current);


      /*
       * Destroy an existing Flickity
       * instance before recreating it.
       */
      if (
        carousel.data('flickity')
      ) {
        carousel.flickity(
          'destroy'
        );
      }


      carousel.flickity({
        cellAlign: 'center',
        contain: true,
        wrapAround: false,
        pageDots: true,
        prevNextButtons: true,
        draggable: true,
        adaptiveHeight: true,
        imagesLoaded: true,
      });


      /*
       * Instagram can take a little while
       * to replace the blockquote with
       * its iframe.
       */
      instagramTimer = setTimeout(() => {

        processInstagramEmbeds();


        resizeTimer = setTimeout(() => {

          if (
            carouselRef.current &&
            carousel.data('flickity')
          ) {
            carousel.flickity(
              'resize'
            );
          }

        }, 1500);

      }, 500);
    };


    /*
     * Instagram embed script.
     *
     * TikTok now uses its official
     * player iframe, so no TikTok
     * embed script is required.
     */
    loadScript(
      'https://www.instagram.com/embed.js',
      () => {

        processInstagramEmbeds();

        initialiseCarousel();

      }
    );


    initialiseCarousel();


    return () => {

      clearTimeout(
        flickityTimer
      );

      clearTimeout(
        resizeTimer
      );

      clearTimeout(
        instagramTimer
      );


      if (
        typeof window !== 'undefined' &&
        window.jQuery &&
        window.jQuery.fn &&
        window.jQuery.fn.flickity &&
        carouselRef.current
      ) {

        const carousel =
          window.jQuery(
            carouselRef.current
          );


        if (
          carousel.data('flickity')
        ) {
          carousel.flickity(
            'destroy'
          );
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


  return (
    <>
      <style>
        {`

          .instagram-carousel-section {
            width: 100%;
            position: relative;
            overflow: hidden;
          }


          .instagram-carousel-section
          .instagram-carousel-title {
            text-align: center;
            margin: 0 0 20px;
            font-size: 28px;
            font-weight: 700;
          }


          .instagram-carousel-section
          .instagram-carousel {
            width: 100%;
          }


          .instagram-carousel-section
          .instagram-card {
            width: 326px;
            margin-right: 16px;
            box-sizing: border-box;
          }


          /*
           * Instagram
           */
          .instagram-carousel-section
          .instagram-card
          .instagram-media {
            margin: 0 !important;
            width: 100% !important;
            min-width: 0 !important;
          }


          /*
           * TikTok
           */
          .instagram-carousel-section
          .instagram-card
          .tiktok-player {
            display: block;
            width: 100%;
            height: 575px;
            border: none;
            margin: 0;
            padding: 0;
            background: #000;
          }


          .instagram-carousel-section
          .flickity-viewport {
            overflow: hidden;
          }


          .instagram-carousel-section
          .flickity-slider {
            display: flex;
            align-items: flex-start;
          }


          .instagram-carousel-section
          .flickity-button {
            background: #ffffff;
            box-shadow:
              0 2px 8px rgba(0, 0, 0, 0.2);
          }


          .instagram-carousel-section
          .flickity-button:hover {
            background: #ffffff;
          }


          .instagram-carousel-section
          .flickity-button:disabled {
            opacity: 0.3;
          }


          .instagram-carousel-section
          .flickity-page-dots {
            bottom: -5px;
          }


          .instagram-carousel-section
          .flickity-page-dots
          .dot {
            width: 9px;
            height: 9px;
            margin: 0 5px;
          }


          @media (max-width: 767px) {

            .instagram-carousel-section
            .instagram-card {
              width: 326px;
              margin-right: 12px;
            }


            .instagram-carousel-section
            .flickity-button {
              display: none;
            }


            .instagram-carousel-section
            .instagram-carousel-title {
              font-size: 24px;
            }


            .instagram-carousel-section
            .instagram-card
            .tiktok-player {
              height: 575px;
            }

          }

        `}
      </style>


      <div className="instagram-carousel-section">

        {title && (
          <h2 className="instagram-carousel-title">
            {title}
          </h2>
        )}


        <div
          ref={carouselRef}
          id={carouselIdRef.current}
          className="instagram-carousel"
        >

          {posts.map((post, index) => {

            const platform =
              post.platform === 'tiktok'
                ? 'tiktok'
                : 'instagram';


            /*
             * TikTok
             */
            if (
              platform === 'tiktok'
            ) {

              const videoId =
                getTikTokVideoId(
                  post.url
                );


              /*
               * If the URL does not contain
               * a TikTok video ID, don't
               * create a broken iframe.
               */
              if (!videoId) {

                return (
                  <div
                    className="instagram-card"
                    key={`${post.url}-${index}`}
                  >

                    <div
                      style={{
                        width: '100%',
                        minHeight: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '20px',
                        boxSizing: 'border-box',
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
                  key={`${post.url}-${index}`}
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


            /*
             * Instagram
             */
            return (
              <div
                className="instagram-card"
                key={`${post.url}-${index}`}
              >

                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={
                    post.url
                  }
                  data-instgrm-version="14"
                />

              </div>
            );

          })}

        </div>

      </div>
    </>
  );
};


InstagramCarousel.propTypes = {

  title: PropTypes.string,


  post1Platform: PropTypes.oneOf([
    'instagram',
    'tiktok',
  ]),

  post1: PropTypes.string,


  post2Platform: PropTypes.oneOf([
    'instagram',
    'tiktok',
  ]),

  post2: PropTypes.string,


  post3Platform: PropTypes.oneOf([
    'instagram',
    'tiktok',
  ]),

  post3: PropTypes.string,


  post4Platform: PropTypes.oneOf([
    'instagram',
    'tiktok',
  ]),

  post4: PropTypes.string,


  post5Platform: PropTypes.oneOf([
    'instagram',
    'tiktok',
  ]),

  post5: PropTypes.string,


  post6Platform: PropTypes.oneOf([
    'instagram',
    'tiktok',
  ]),

  post6: PropTypes.string,

};


InstagramCarousel.defaultProps = {

  title: '',

  post1Platform: 'instagram',
  post1: '',

  post2Platform: 'instagram',
  post2: '',

  post3Platform: 'instagram',
  post3: '',

  post4Platform: 'instagram',
  post4: '',

  post5Platform: 'instagram',
  post5: '',

  post6Platform: 'instagram',
  post6: '',

};