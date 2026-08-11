import PropTypes from "prop-types";

export const HubCategoryPods = ({
  podbackgroundcolor,
  podtextcolor,

  lozengebackgroundcolor,
  lozengetextcolor,
  lozengetitle,
  pod1image,
  pod1imagealt,
  pod1title,
  pod1link,

  pod2image,
  pod2imagealt,
  pod2title,
  pod2link,

  pod3image,
  pod3imagealt,
  pod3title,
  pod3link,

  pod4image,
  pod4imagealt,
  pod4title,
  pod4link,

  pod5image,
  pod5imagealt,
  pod5title,
  pod5link,

  pod6image,
  pod6imagealt,
  pod6title,
  pod6link,

  pod7image,
  pod7imagealt,
  pod7title,
  pod7link,

  pod8image,
  pod8imagealt,
  pod8title,
  pod8link,

  pod9image,
  pod9imagealt,
  pod9title,
  pod9link,

  pod10image,
  pod10imagealt,
  pod10title,
  pod10link,

  pod11image,
  pod11imagealt,
  pod11title,
  pod11link,

  pod12image,
  pod12imagealt,
  pod12title,
  pod12link,

  pod13image,
  pod13imagealt,
  pod13title,
  pod13link,

  pod14image,
  pod14imagealt,
  pod14title,
  pod14link,

  pod15image,
  pod15imagealt,
  pod15title,
  pod15link,

  pod16image,
  pod16imagealt,
  pod16title,
  pod16link,

  pod17image,
  pod17imagealt,
  pod17title,
  pod17link,

  pod18image,
  pod18imagealt,
  pod18title,
  pod18link,

  pod19image,
  pod19imagealt,
  pod19title,
  pod19link,

  pod20image,
  pod20imagealt,
  pod20title,
  pod20link,

  pod21image,
  pod21imagealt,
  pod21title,
  pod21link,

  pod22image,
  pod22imagealt,
  pod22title,
  pod22link,

  pod23image,
  pod23imagealt,
  pod23title,
  pod23link,

  pod24image,
  pod24imagealt,
  pod24title,
  pod24link,
}) => {

const catpods = [
  {
    image: pod1image,
    alt: pod1imagealt,
    title: pod1title,
    link: pod1link,
  },
  {
    image: pod2image,
    alt: pod2imagealt,
    title: pod2title,
    link: pod2link,
  },
  {
    image: pod3image,
    alt: pod3imagealt,
    title: pod3title,
    link: pod3link,
  },
  {
    image: pod4image,
    alt: pod4imagealt,
    title: pod4title,
    link: pod4link,
  },
  {
    image: pod5image,
    alt: pod5imagealt,
    title: pod5title,
    link: pod5link,
  },
  {
    image: pod6image,
    alt: pod6imagealt,
    title: pod6title,
    link: pod6link,
  },
  {
    image: pod7image,
    alt: pod7imagealt,
    title: pod7title,
    link: pod7link,
  },
  {
    image: pod8image,
    alt: pod8imagealt,
    title: pod8title,
    link: pod8link,
  },
  {
    image: pod9image,
    alt: pod9imagealt,
    title: pod9title,
    link: pod9link,
  },
  {
    image: pod10image,
    alt: pod10imagealt,
    title: pod10title,
    link: pod10link,
  },
  {
    image: pod11image,
    alt: pod11imagealt,
    title: pod11title,
    link: pod11link,
  },
  {
    image: pod12image,
    alt: pod12imagealt,
    title: pod12title,
    link: pod12link,
  },
];
const validCatpods = catpods.filter(
  (p) => p.image && p.link
);
 
  return (
    <>
      <div class="consistent-hub-shop-by-category-wrapper"
      
          style={{
            "--shop-by-category-module-bg": '#fff',
            "--shop-by-category-pod-bg": podbackgroundcolor,
            "--shop-by-category-pod-text-color": podtextcolor,
            "--shop-by-category-lozenge-bg": lozengebackgroundcolor,
            "--shop-by-category-lozenge-text-color": lozengetextcolor,
            "--shop-by-category-lozenge-title": lozengetitle,
          }}
      
      >
        <div class="consistent-hub-shop-by-category-area-header">
          <div class="consistent-hub-shop-by-category-area-header-title">
            {lozengetitle}
          </div>
        </div>
        <div class="consistent-hub-shop-by-category-area">
          <div className="consistent-hub-shop-by-category-categories">
            {validCatpods.map((pod, index) => (

              <div
                className="consistent-hub-shop-by-category-categories-item"
                key={index}
              >
                <a
                  href={pod.link}
                  className="consistent-hub-shop-by-category-categories-item-link"
                >
                  <img alt={pod.alt} src={pod.image} />
                </a>

                {pod.title && (
                  <a href={pod.link} className="text-link">
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

HubCategoryPods.propTypes = {
  
  podbackgroundcolor: PropTypes.string,
  podtextcolor: PropTypes.string,

  lozengebackgroundcolor: PropTypes.string,
  lozengetextcolor: PropTypes.string,
  lozengetitle: PropTypes.string,

  pod1image: PropTypes.string,
  pod1imagealt: PropTypes.string,
  pod1title: PropTypes.string,
  pod1link: PropTypes.string,

  pod2image: PropTypes.string,
  pod2imagealt: PropTypes.string,
  pod2title: PropTypes.string,
  pod2link: PropTypes.string,

  pod3image: PropTypes.string,
  pod3imagealt: PropTypes.string,
  pod3title: PropTypes.string,
  pod3link: PropTypes.string,

  pod4image: PropTypes.string,
  pod4imagealt: PropTypes.string,
  pod4title: PropTypes.string,
  pod4link: PropTypes.string,

  pod5image: PropTypes.string,
  pod5imagealt: PropTypes.string,
  pod5title: PropTypes.string,
  pod5link: PropTypes.string,

  pod6image: PropTypes.string,
  pod6imagealt: PropTypes.string,
  pod6title: PropTypes.string,
  pod6link: PropTypes.string,

  pod7image: PropTypes.string,
  pod7imagealt: PropTypes.string,
  pod7title: PropTypes.string,
  pod7link: PropTypes.string,

  pod8image: PropTypes.string,
  pod8imagealt: PropTypes.string,
  pod8title: PropTypes.string,
  pod8link: PropTypes.string,

  pod9image: PropTypes.string,
  pod9imagealt: PropTypes.string,
  pod9title: PropTypes.string,
  pod9link: PropTypes.string,

  pod10image: PropTypes.string,
  pod10imagealt: PropTypes.string,
  pod10title: PropTypes.string,
  pod10link: PropTypes.string,

  pod11image: PropTypes.string,
  pod11imagealt: PropTypes.string,
  pod11title: PropTypes.string,
  pod11link: PropTypes.string,

  pod12image: PropTypes.string,
  pod12imagealt: PropTypes.string,
  pod12title: PropTypes.string,
  pod12link: PropTypes.string,
};
