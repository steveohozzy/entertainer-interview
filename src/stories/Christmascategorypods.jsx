import PropTypes from "prop-types";
import "./consistency.css";

export const ChristmasCategoryPods = ({
  id,
  modulebackgroundcolor,

  podbackgroundcolor,
  podtextcolor,

  lozengebackgroundcolor,
  lozengetextcolor,
  lozengetitle,

  desktopcolumns = 3,

  pod1image,
  pod1imagealt,
  pod1title,
  pod1link,
  pod1dataElementType,
  pod1dataPromotionIndex,
  pod1dataPromotionName,

  pod2image,
  pod2imagealt,
  pod2title,
  pod2link,
  pod2dataElementType,
  pod2dataPromotionIndex,
  pod2dataPromotionName,

  pod3image,
  pod3imagealt,
  pod3title,
  pod3link,
  pod3dataElementType,
  pod3dataPromotionIndex,
  pod3dataPromotionName,

  pod4image,
  pod4imagealt,
  pod4title,
  pod4link,
  pod4dataElementType,
  pod4dataPromotionIndex,
  pod4dataPromotionName,

  pod5image,
  pod5imagealt,
  pod5title,
  pod5link,
  pod5dataElementType,
  pod5dataPromotionIndex,
  pod5dataPromotionName,

  pod6image,
  pod6imagealt,
  pod6title,
  pod6link,
  pod6dataElementType,
  pod6dataPromotionIndex,
  pod6dataPromotionName,

  pod7image,
  pod7imagealt,
  pod7title,
  pod7link,
  pod7dataElementType,
  pod7dataPromotionIndex,
  pod7dataPromotionName,

  pod8image,
  pod8imagealt,
  pod8title,
  pod8link,
  pod8dataElementType,
  pod8dataPromotionIndex,
  pod8dataPromotionName,

  pod9image,
  pod9imagealt,
  pod9title,
  pod9link,
  pod9dataElementType,
  pod9dataPromotionIndex,
  pod9dataPromotionName,

  pod10image,
  pod10imagealt,
  pod10title,
  pod10link,
  pod10dataElementType,
  pod10dataPromotionIndex,
  pod10dataPromotionName,

  pod11image,
  pod11imagealt,
  pod11title,
  pod11link,
  pod11dataElementType,
  pod11dataPromotionIndex,
  pod11dataPromotionName,

  pod12image,
  pod12imagealt,
  pod12title,
  pod12link,
  pod12dataElementType,
  pod12dataPromotionIndex,
  pod12dataPromotionName,
}) => {

  const catpods = [
    {
      image: pod1image,
      alt: pod1imagealt,
      title: pod1title,
      link: pod1link,
      dataElementType: pod1dataElementType,
      dataPromotionIndex: pod1dataPromotionIndex,
      dataPromotionName: pod1dataPromotionName,
    },
    {
      image: pod2image,
      alt: pod2imagealt,
      title: pod2title,
      link: pod2link,
      dataElementType: pod2dataElementType,
      dataPromotionIndex: pod2dataPromotionIndex,
      dataPromotionName: pod2dataPromotionName,
    },
    {
      image: pod3image,
      alt: pod3imagealt,
      title: pod3title,
      link: pod3link,
      dataElementType: pod3dataElementType,
      dataPromotionIndex: pod3dataPromotionIndex,
      dataPromotionName: pod3dataPromotionName,
    },
    {
      image: pod4image,
      alt: pod4imagealt,
      title: pod4title,
      link: pod4link,
      dataElementType: pod4dataElementType,
      dataPromotionIndex: pod4dataPromotionIndex,
      dataPromotionName: pod4dataPromotionName,
    },
    {
      image: pod5image,
      alt: pod5imagealt,
      title: pod5title,
      link: pod5link,
      dataElementType: pod5dataElementType,
      dataPromotionIndex: pod5dataPromotionIndex,
      dataPromotionName: pod5dataPromotionName,
    },
    {
      image: pod6image,
      alt: pod6imagealt,
      title: pod6title,
      link: pod6link,
      dataElementType: pod6dataElementType,
      dataPromotionIndex: pod6dataPromotionIndex,
      dataPromotionName: pod6dataPromotionName,
    },
    {
      image: pod7image,
      alt: pod7imagealt,
      title: pod7title,
      link: pod7link,
      dataElementType: pod7dataElementType,
      dataPromotionIndex: pod7dataPromotionIndex,
      dataPromotionName: pod7dataPromotionName,
    },
    {
      image: pod8image,
      alt: pod8imagealt,
      title: pod8title,
      link: pod8link,
      dataElementType: pod8dataElementType,
      dataPromotionIndex: pod8dataPromotionIndex,
      dataPromotionName: pod8dataPromotionName,
    },
    {
      image: pod9image,
      alt: pod9imagealt,
      title: pod9title,
      link: pod9link,
      dataElementType: pod9dataElementType,
      dataPromotionIndex: pod9dataPromotionIndex,
      dataPromotionName: pod9dataPromotionName,
    },
    {
      image: pod10image,
      alt: pod10imagealt,
      title: pod10title,
      link: pod10link,
      dataElementType: pod10dataElementType,
      dataPromotionIndex: pod10dataPromotionIndex,
      dataPromotionName: pod10dataPromotionName,
    },
    {
      image: pod11image,
      alt: pod11imagealt,
      title: pod11title,
      link: pod11link,
      dataElementType: pod11dataElementType,
      dataPromotionIndex: pod11dataPromotionIndex,
      dataPromotionName: pod11dataPromotionName,
    },
    {
      image: pod12image,
      alt: pod12imagealt,
      title: pod12title,
      link: pod12link,
      dataElementType: pod12dataElementType,
      dataPromotionIndex: pod12dataPromotionIndex,
      dataPromotionName: pod12dataPromotionName,
    },
  ];

  const validCatpods = catpods.filter(
    (p) => p.image && p.link 
  );

  return (
    <>
      <style>
        {`
          .consistent-hub-shop-by-category-categories {
            --category-columns: ${desktopcolumns};
          }

          .consistent-hub-shop-by-category-categories-item {
            width: calc(
              (100% / var(--category-columns)) - 20px
            );
          }

          

          .christmas.consistent-hub-shop-by-category-wrapper
          .consistent-hub-shop-by-category-area-header,
          .christmas.consistent-hub-shop-by-category-wrapper
          .consistent-hub-shop-by-category-area,
          .christmas.consistent-hub-shop-by-category-wrapper
          .consistent-hub-shop-by-category-categories {
            padding: 0 20px;
            max-width: 1440px;
          }

          .page-homepage .christmas.consistent-hub-shop-by-category-wrapper
          .consistent-hub-shop-by-category-area-header,
          .page-homepage .christmas.consistent-hub-shop-by-category-wrapper
          .consistent-hub-shop-by-category-area,
          .page-homepage .christmas.consistent-hub-shop-by-category-wrapper
          .consistent-hub-shop-by-category-categories {
            padding: 0 20px;
            max-width: 1240px;
          }

          .christmas.consistent-hub-shop-by-category-wrapper
          .consistent-hub-shop-by-category-categories,
          .page-homepage .christmas.consistent-hub-shop-by-category-wrapper
          .consistent-hub-shop-by-category-categories {
            padding: 0 0 20px;
            max-width: calc(100% + 20px);
            margin: 20px -10px 0;
          }

          @media (max-width: 767px) {
            .consistent-hub-shop-by-category-categories {
              --category-columns: 2;
            }
          }
        `}
      </style>

      <div
        className="consistent-hub-shop-by-category-wrapper christmas"
        id={id}
        style={{
          "--shop-by-category-module-bg": "#fff",
          "--shop-by-category-pod-bg": podbackgroundcolor,
          "--shop-by-category-lozenge-bg": lozengebackgroundcolor,
          "--shop-by-category-lozenge-text-color": lozengetextcolor,
          "--shop-by-category-lozenge-title": lozengetitle,
          backgroundColor: modulebackgroundcolor,
        }}
      >
        <div className="consistent-hub-shop-by-category-area-header">
          <div className="consistent-hub-shop-by-category-area-header-title">
            {lozengetitle}
          </div>
        </div>

        <div className="consistent-hub-shop-by-category-area">
          <div className="consistent-hub-shop-by-category-categories">
            {validCatpods.map((pod, index) => (
              <div
                className="consistent-hub-shop-by-category-categories-item"
                key={index}
              >
                
                <a
                  href={pod.link}
                  className="consistent-hub-shop-by-category-categories-item-link"
                  {...(
                    pod.dataElementType &&
                    pod.dataPromotionIndex &&
                    pod.dataPromotionName
                      ? {
                          "data-element-type": pod.dataElementType,
                          "data-promotion-index": pod.dataPromotionIndex,
                          "data-promotion-name": pod.dataPromotionName,
                        }
                      : {}
                  )}
                >
                  <img
                    alt={pod.alt}
                    src={pod.image}
                  />

                </a>

                {pod.title && (
                  <a
                    href={pod.link}
                    className="text-link"
                    style={{ color: podtextcolor }}
                  >
                    {pod.title}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

ChristmasCategoryPods.propTypes = {
  id: PropTypes.string,
  modulebackgroundcolor: PropTypes.string,

  podbackgroundcolor: PropTypes.string,
  podtextcolor: PropTypes.string,

  lozengebackgroundcolor: PropTypes.string,
  lozengetextcolor: PropTypes.string,
  lozengetitle: PropTypes.string,

  desktopcolumns: PropTypes.oneOf([3, 4]),

  pod1image: PropTypes.string,
  pod1imagealt: PropTypes.string,
  pod1title: PropTypes.string,
  pod1link: PropTypes.string,
  pod1dataElementType: PropTypes.string,
  pod1dataPromotionIndex: PropTypes.string,
  pod1dataPromotionName: PropTypes.string,

  pod2image: PropTypes.string,
  pod2imagealt: PropTypes.string,
  pod2title: PropTypes.string,
  pod2link: PropTypes.string,
  pod2dataElementType: PropTypes.string,
  pod2dataPromotionIndex: PropTypes.string,
  pod2dataPromotionName: PropTypes.string,

  pod3image: PropTypes.string,
  pod3imagealt: PropTypes.string,
  pod3title: PropTypes.string,
  pod3link: PropTypes.string,
  pod3dataElementType: PropTypes.string,
  pod3dataPromotionIndex: PropTypes.string,
  pod3dataPromotionName: PropTypes.string,

  pod4image: PropTypes.string,
  pod4imagealt: PropTypes.string,
  pod4title: PropTypes.string,
  pod4link: PropTypes.string,
  pod4dataElementType: PropTypes.string,
  pod4dataPromotionIndex: PropTypes.string,
  pod4dataPromotionName: PropTypes.string,

  pod5image: PropTypes.string,
  pod5imagealt: PropTypes.string,
  pod5title: PropTypes.string,
  pod5link: PropTypes.string,
  pod5dataElementType: PropTypes.string,
  pod5dataPromotionIndex: PropTypes.string,
  pod5dataPromotionName: PropTypes.string,

  pod6image: PropTypes.string,
  pod6imagealt: PropTypes.string,
  pod6title: PropTypes.string,
  pod6link: PropTypes.string,
  pod6dataElementType: PropTypes.string,
  pod6dataPromotionIndex: PropTypes.string,
  pod6dataPromotionName: PropTypes.string,

  pod7image: PropTypes.string,
  pod7imagealt: PropTypes.string,
  pod7title: PropTypes.string,
  pod7link: PropTypes.string,
  pod7dataElementType: PropTypes.string,
  pod7dataPromotionIndex: PropTypes.string,
  pod7dataPromotionName: PropTypes.string,

  pod8image: PropTypes.string,
  pod8imagealt: PropTypes.string,
  pod8title: PropTypes.string,
  pod8link: PropTypes.string,
  pod8dataElementType: PropTypes.string,
  pod8dataPromotionIndex: PropTypes.string,
  pod8dataPromotionName: PropTypes.string,

  pod9image: PropTypes.string,
  pod9imagealt: PropTypes.string,
  pod9title: PropTypes.string,
  pod9link: PropTypes.string,
  pod9dataElementType: PropTypes.string,
  pod9dataPromotionIndex: PropTypes.string,
  pod9dataPromotionName: PropTypes.string,

  pod10image: PropTypes.string,
  pod10imagealt: PropTypes.string,
  pod10title: PropTypes.string,
  pod10link: PropTypes.string,
  pod10dataElementType: PropTypes.string,
  pod10dataPromotionIndex: PropTypes.string,
  pod10dataPromotionName: PropTypes.string,

  pod11image: PropTypes.string,
  pod11imagealt: PropTypes.string,
  pod11title: PropTypes.string,
  pod11link: PropTypes.string,
  pod11dataElementType: PropTypes.string,
  pod11dataPromotionIndex: PropTypes.string,
  pod11dataPromotionName: PropTypes.string,

  pod12image: PropTypes.string,
  pod12imagealt: PropTypes.string,
  pod12title: PropTypes.string,
  pod12link: PropTypes.string,
  pod12dataElementType: PropTypes.string,
  pod12dataPromotionIndex: PropTypes.string,
  pod12dataPromotionName: PropTypes.string,
};

