import PropTypes from "prop-types";

export const GaminghubCategoryPanels = ({
  panel1image,
  panel1imagealt,
  panel1title,
  panel1link,
  panel2image,
  panel2imagealt,
  pane21title,
  panel2link,
  panel3image,
  panel3imagealt,
  pane31title,
  panel3link,
  panel4image,
  panel4imagealt,
  pane41title,
  panel4link,
  panel5image,
  panel5imagealt,
  pane51title,
  panel5link,
  panel6image,
  panel6imagealt,
  pane61title,
  panel6link,
  panel7image,
  panel7imagealt,
  pane71title,
  panel7link,
  panel8image,
  panel8imagealt,
  pane81title,
  panel8link,
  panel9image,
  panel9imagealt,
  pane91title,
  panel9link,
  panel10image,
  panel10imagealt,
  pane101title,
  panel10link,
}) => {

  const catpanels = [
  {
    image: panel1image,
    alt: panel1imagealt,
    title: panel1title,
    link: panel1link,
  },
  {
    image: panel2image,
    alt: panel2imagealt,
    title: pane21title,
    link: panel2link,
  },
  {
    image: panel3image,
    alt: panel3imagealt,
    title: pane31title,
    link: panel3link,
  },
  {
    image: panel4image,
    alt: panel4imagealt,
    title: pane41title,
    link: panel4link,
  },
  {
    image: panel5image,
    alt: panel5imagealt,
    title: pane51title,
    link: panel5link,
  },
  {
    image: panel6image,
    alt: panel6imagealt,
    title: pane61title,
    link: panel6link,
  },
  {
    image: panel7image,
    alt: panel7imagealt,
    title: pane71title,
    link: panel7link,
  },
  {
    image: panel8image,
    alt: panel8imagealt,
    title: pane81title,
    link: panel8link,
  },
  {
    image: panel9image,
    alt: panel9imagealt,
    title: pane91title,
    link: panel9link,
  },
  {
    image: panel10image,
    alt: panel10imagealt,
    title: pane101title,
    link: panel10link,
  },
];
const validCatPanels = catpanels.filter(
  (p) => p.image && p.link && p.title
);
 
  return (
    <>
      <style>
        {`
    #gaming-shop-by-category-area {
    background-color: #fff;
    max-width: 940px;
    padding: 0 20px;
    margin: 0 auto;
  }
  .gaming-shop-by-category-content {
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    padding: 10px 0;
    text-align: center;
  }

  .gaming-shop-by-category-content h2 {
    text-transform: uppercase;
    background: linear-gradient(
        180deg, 
        rgba(80, 80, 80, 0.9) 0%, 
        rgba(60, 60, 60, 0.95) 50%, 
        rgba(40, 40, 40, 1) 100%
    );
    color: #fff;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    font-size: 18px;
    border-radius: 8px;
    margin: 0;
    box-shadow: inset 0 4px 10px rgba(255,255,255,0.1); /* subtle inner highlight */
    backdrop-filter: blur(2px); /* optional slight blur for glass effect */
    -webkit-backdrop-filter: blur(2px);
    padding: 5px 0;
}
.gaming-shop-by-category-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 900px;
  margin: 10px auto;
  justify-content: center;
}

.gaming-shop-by-category-categories-item {
  text-align: center;
  width: calc(100% / 3 - 20px);
}
@media (min-width: 768px) {
  .gaming-shop-by-category-categories-item {
    width: calc(100% / 4 - 20px);
  }
}
.gaming-shop-by-category-categories-item-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 8px;
  background-color: transparent;
  position: relative;
  overflow: visible;
  transition: all 0.3s;
  box-shadow: 0 0 0 4px rgba(255,255,255,0);
}

.gaming-shop-by-category-categories-item-link::before {
  content: '';
  position: absolute;
  border-radius: 8px;
  border: 3px solid #999999;
  background: linear-gradient(
        180deg, 
        rgba(200, 200, 200, 0.9) 0%, 
        rgba(180, 180, 180, 0.95) 50%, 
        rgba(160, 160, 160, 1) 100%
    );
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
}

.gaming-shop-by-category-categories-item-link:hover::before {
    border-color: transparent;
    margin: 3px;
    border: none;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
}

/* Gradient shimmer overlay */
.gaming-shop-by-category-categories-item-link::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(
      270deg,
      rgba(255,110,199,0.8),
      rgba(0,255,255,0.8),
      rgba(255,110,199,0.8)
  );
  animation: shimmer 3s linear infinite;
  background-size: 600% 600%;
  z-index: 0;
}

/* Make sure your shimmer keyframes exist */
@keyframes shimmer {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gaming-shop-by-category-categories-item-link img {
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  object-fit: contain;
  z-index: 2;
}

.gaming-shop-by-category-categories-item .text-link {
  color: #292929;
  font-size: 14px;
  font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
  text-decoration: none;
  display: block;
  padding: 10px 0;
}
        `}
      </style>
<div id="gaming-shop-by-category-area">
  <div class="gaming-shop-by-category-content">
    <h2>SHOP BY CATEGORY</h2>
  </div>
  <div class="gaming-shop-by-category-categories">
    {validCatPanels.map((panel, index) => (

      <div class="gaming-shop-by-category-categories-item" key={index}>
        <a href={panel.link} class="gaming-shop-by-category-categories-item-link">
          <img alt={panel.alt} src={panel.image} />
        </a>
        <a href={panel.link} class="text-link">{panel.title}</a>
      </div>
    ))}
  </div>
</div>
    </>
  );
};

GaminghubCategoryPanels.propTypes = {
  /** Category Panels contents */
  title: PropTypes.string,
  panel1image: PropTypes.string,
  panel1imagealt: PropTypes.string,
  panel1title: PropTypes.string,
  panel1link: PropTypes.string,
  panel2image: PropTypes.string,
  panel2imagealt: PropTypes.string,
  pane21title: PropTypes.string,
  panel2link: PropTypes.string,
  panel3image: PropTypes.string,
  panel3imagealt: PropTypes.string,
  pane31title: PropTypes.string,
  panel3link: PropTypes.string,
  panel4image: PropTypes.string,
  panel4imagealt: PropTypes.string,
  pane41title: PropTypes.string,
  panel4link: PropTypes.string,
  panel5image: PropTypes.string,
  panel5imagealt: PropTypes.string,
  pane51title: PropTypes.string,
  panel5link: PropTypes.string,
  panel6image: PropTypes.string,
  panel6imagealt: PropTypes.string,
  pane61title: PropTypes.string,
  panel6link: PropTypes.string,
  panel7image: PropTypes.string,
  panel7imagealt: PropTypes.string,
  pane71title: PropTypes.string,
  panel7link: PropTypes.string,
  panel8image: PropTypes.string,
  panel8imagealt: PropTypes.string,
  pane81title: PropTypes.string,
  panel8link: PropTypes.string,
  panel9image: PropTypes.string,
  panel9imagealt: PropTypes.string,
  pane91title: PropTypes.string,
  panel9link: PropTypes.string,
  panel10image: PropTypes.string,
  panel10imagealt: PropTypes.string,
  pane10title: PropTypes.string,
  panel10link: PropTypes.string,
  panel11image: PropTypes.string,
  panel11imagealt: PropTypes.string,
  panel11title: PropTypes.string,
  panel11link: PropTypes.string,
  panel12image: PropTypes.string,
  panel12imagealt: PropTypes.string,
  pane12title: PropTypes.string,
  panel12link: PropTypes.string,
};
