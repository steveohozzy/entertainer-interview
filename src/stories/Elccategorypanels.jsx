import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export const CategoryPanels = ({
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

  const panels = [
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
const validPanels = panels.filter(
  (p) => p.image && p.link && p.title
);
 
  return (
    <>
      <style>
        {`
    .cat-carousel-container {
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 10px;
  }
  .cat-carousel {
    max-width: 1140px;
    margin: 0 auto;
    background-color: #daf2ef;
    padding: 20px 0;
    border-radius: 8px;
  }

.cat-carousel .flickity-viewport {
  height: 100%;
}

.cat-carousel .flickity-slider {
  display: flex;
  align-items: stretch; /* makes cells full height */
}

.cat-carousel .carousel-cell {
  background: #fff;
  margin-right: 20px;
  border-radius: 8px;
  font-size: 16px;
  color: #4F4F4F;
  font-family: "Nunito Bold", "Tahoma Bold", sans-serif;

  display: flex;
  flex-direction: column;
}

.cat-carousel .carousel-cell a {
  text-decoration: none;
  font-size: 16px;
  color: #4F4F4F;
  font-family: "Nunito Bold", "Tahoma Bold", sans-serif;

  display: flex;
  flex-direction: column;
  height: 100%;
}

/* image stays natural height */
.cat-panel-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  overflow: hidden;
}

/* text fills remaining space */
.cat-panel-text {
  flex-grow: 1;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
/* Desktop: 6.5 panels */
@media (min-width: 1024px) {
  .cat-carousel .carousel-cell {
    width: calc((100% - 20px * 6) / 6.5); /* 6 gaps of 10px */
  }
}

/* Mobile: 2.5 panels */
@media (max-width: 1023px) {
  .cat-carousel .carousel-cell {
    width: calc((100% - 20px * 2) / 2.5); /* 2 gaps of 10px */
  }
}

.cat-carousel .flickity-prev-next-button {
  width: 30px;
  height: 30px;
  background-color: #C0DF1A;
  border-radius: 50%;
  color: #009E44;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #fff;
  box-shadow: none;
}

.cat-carousel .flickity-prev-next-button.next {
  right: -10px;
}

.cat-carousel .flickity-prev-next-button.previous {
  left: -10px;
}
        `}
      </style>
      <div class="cat-carousel-container">
  <div class="cat-carousel">
    <div className="cat-carousel">
  {validPanels.map((panel, index) => (
    <div className="carousel-cell" key={index}>
      <a href={panel.link}>
        <div className="cat-panel-image">
          <img src={panel.image} alt={panel.alt || panel.title} />
        </div>
        <div className="cat-panel-text">
          {panel.title}
        </div>
      </a>
    </div>
  ))}
</div>
  </div>
</div>
<script>
  {`
  var flkty = new Flickity('.cat-carousel', {
  cellAlign: 'center',
  contain: true,
  pageDots: false,
  prevNextButtons: true,
  wrapAround: true
});

// wait for images to load
imagesLoaded('.cat-carousel', function() {
  flkty.resize();
  
  // Find max cell height
  let maxHeight = 0;
  const cells = document.querySelectorAll('.cat-carousel .carousel-cell');
  cells.forEach(cell => {
    const h = cell.offsetHeight;
    if(h > maxHeight) maxHeight = h;
  });

  // Apply max height to all cells
  cells.forEach(cell => {
    cell.style.height = maxHeight + 'px';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var carousels = document.querySelectorAll('.cat-carousel');

  carousels.forEach(function (carousel) {
    var flkty = Flickity.data(carousel);

    if (!flkty) return;

    function relayout() {
      flkty.resize();
      flkty.reposition();
    }

    // 1. Run after window load (safe baseline)
    window.addEventListener('load', function () {
      relayout();
    });

    // 2. Watch images inside carousel
    var images = carousel.querySelectorAll('img');
    var loadedCount = 0;

    images.forEach(function (img) {
      // If already cached/complete
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener('load', function () {
          loadedCount++;
          if (loadedCount === images.length) {
            relayout();
          }
        });
      }
    });

    // 3. Fallback safety net (layout settling delay)
    setTimeout(relayout, 800);
  });
});
`}
</script>
    </>
  );
};

CategoryPanels.propTypes = {
  /** Category Panels contents */
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
  pane101title: PropTypes.string,
  panel10link: PropTypes.string,
};
