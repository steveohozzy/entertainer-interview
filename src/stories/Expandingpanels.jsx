import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export const ExpandingPanels = ({
  panel1image1,
  panel1imagealt1,
  panel1image2,
  panel1imagealt2,
  panel1image3,
  panel1imagealt3,
  panel1image4,
  panel1imagealt4,
  panel1image5,
  panel1imagealt5,
  panel1title,
  panel1blurb,
  panel1buttontext,
  panel1link,
  panel2image1,
  panel2imagealt1,
  panel2expandedimage,
  panel2iexpandedimagealt,
  panel2title,
  panel2blurb,
  panel2buttontext,
  panel2link,
  panel3image1,
  panel3imagealt1,
  panel3expandedimage,
  panel3iexpandedimagealt,
  panel3title,
  panel3blurb,
  panel3buttontext,
  panel3link,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const panels = Array.from(container.querySelectorAll(".panel"));

    let containerRect = null;

    const waitForImages = () => {
      const imgs = container.querySelectorAll("img");

      return Promise.all(
        [...imgs].map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise((res) => {
            img.onload = res;
            img.onerror = res;
          });
        })
      );
    };

    const measure = () => {
      containerRect = container.getBoundingClientRect();

      panels.forEach((panel) => {
        const rect = panel.getBoundingClientRect();

        panel.dataset.origLeft = rect.left - containerRect.left;
        panel.dataset.origWidth = rect.width;
      });
    };

    const freezeLayout = () => {
      panels.forEach((p) => {
        p.style.flex = `0 0 ${p.offsetWidth}px`;
      });
    };

    const expandPanel = (panel) => {
      const rect = panel.getBoundingClientRect();
      const offsetLeft = rect.left - containerRect.left;

      const button = panel.querySelector(".toggle");

      panel.style.left = offsetLeft + "px";
      panel.style.width = rect.width + "px";

      requestAnimationFrame(() => {
        panel.classList.add("expanded");
        panel.style.left = "0px";
        panel.style.width = `${container.offsetWidth}px`;
        button.textContent = "-";
      });
    };

    const collapsePanel = (panel) => {
      const button = panel.querySelector(".toggle");

      const hiddenImg = panel.querySelector(".hidden-img");
      if (hiddenImg) hiddenImg.style.opacity = 0;

      panel.classList.add("collapsing");

      requestAnimationFrame(() => {
        panel.style.left = panel.dataset.origLeft + "px";
        panel.style.width = panel.dataset.origWidth + "px";

        panel.addEventListener(
          "transitionend",
          () => {
            panel.classList.remove("expanded", "collapsing");
            panel.style.left = "";
            panel.style.width = "";
            button.textContent = "+";

            if (hiddenImg) hiddenImg.style.opacity = "";
          },
          { once: true }
        );
      });
    };

    const attachEvents = () => {
      panels.forEach((panel) => {
        panel.addEventListener("click", (e) => {
          e.stopPropagation();

          const isExpanded = panel.classList.contains("expanded");

          panels.forEach((p) => {
            if (p !== panel && p.classList.contains("expanded")) {
              collapsePanel(p);
            }
          });

          if (isExpanded) collapsePanel(panel);
          else expandPanel(panel);
        });
      });
    };

    const init = async () => {
      await waitForImages();

      // IMPORTANT: freeze layout BEFORE measuring
      freezeLayout();

      requestAnimationFrame(() => {
        measure();
        attachEvents();
      });
    };

    init();

    const handleOutsideClick = () => {
      panels.forEach((p) => {
        if (p.classList.contains("expanded")) collapsePanel(p);
      });
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <>
      <style>
        {`
    .expandingPanelsContainer {
  display: flex;
  gap: 10px;
  height: 250px;
  position: relative;
  max-width: 1160px;
  margin: 20px auto;
  padding: 0 10px;
}

@media (min-width: 768px) {
  .expandingPanelsContainer { 
    height: 150px;
  }
}

.panel {
  flex: 1;
  background: #fff1d7;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  height: 100%;
  margin-bottom: 20px;
  transition: all 0.6s ease;
}

@media (min-width: 768px) {
  .panel {
    flex-direction: row;
  }
}

button.toggle {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  padding: 5px 10px;
  cursor: pointer;
  background-color: #f6d9b9;
  color: #f27023;
  border: none;
}

.panel-image {
  width: 100%;
  height: 45%;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}

@media (min-width: 768px) {
  .panel-image {
    width: 50%;
    height: 100%;
    padding: 0;
  }
}

.panel-image .hidden-img {
  overflow: hidden;
  width: auto;
  height: 85%;
  opacity: 0;
  transition: opacity 0.6s ease; /* fade out slower */
}

.panel.expanded .panel-image .hidden-img {
  opacity: 1;
}

.skills {
  position: relative;
  width: 120%;
  margin-left: -10%;
  height: 100%;
}

/* --- Skill items --- */
.skill-item {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.8s ease;
}

.skill-item img {
  height: 100%;
  width: auto;
  display: block;
}

/* --- Triangle layout (initial) --- */
.skill-item:nth-child(1) { top: 15%; left: 55%; transform: translateX(-50%) scale(1.2); height: 50px; }
.skill-item:nth-child(2) { bottom: 12%; left: 5%; height: 40px; }
.skill-item:nth-child(3) { bottom: 12%; right: -5%; height: 40px; }
.skill-item:nth-child(4),
.skill-item:nth-child(5) { opacity: 0; pointer-events: none; height: 0;}
.skill-item:nth-child(5) { opacity: 0; pointer-events: none;right: -100%;}

@media (min-width: 768px) {
  .skill-item:nth-child(1) { top: 15%; left: 49%; transform: translateX(-50%) scale(1.2); height: 60px; }
  .skill-item:nth-child(2) { bottom: 12%; left: 5%; height: 60px; }
  .skill-item:nth-child(3) { bottom: 12%; right: 7%; height: 60px; }
}

/* --- Only update expanded .skills and .skill-item --- */
.panel.expanded .skills {
  position: relative; /* keep relative to allow absolute children */
  width: 120%;
  height: 100%;
  overflow: hidden;
}

.panel.expanded .skill-item {
  /* keep absolute positioning */
  position: absolute;
  top: 50%;
  transform: translateY(-50%) scale(1);
  height: 70%;
  opacity: 1;
  transition: all 0.8s ease;
}

@media (min-width: 768px) {
  .panel.expanded .skill-item {
    height: 65%;
  }
}

/* First 3 icons: row positions */
.panel.expanded .skill-item:nth-child(1) { left: 25%; z-index: 2; }
.panel.expanded .skill-item:nth-child(2) { left: 45%; z-index: 2; }
.panel.expanded .skill-item:nth-child(3) { left: 45%; z-index: 2; }

@media (min-width: 768px) {
  .panel.expanded .skill-item:nth-child(3) { left: 58%; z-index: 2; }
}

/* 4th and 5th icons: appear at start and end */
.panel.expanded .skill-item:nth-child(4) { left: 3%; opacity: 1; transform: translateY(-50%) scale(1); z-index: 1; }
.panel.expanded .skill-item:nth-child(5) { right: -5%; opacity: 1; transform: translateY(-50%) scale(1); z-index: 1; }

/* --- Panel content fade --- */
.expandingPanelsContent {
  opacity: 0;
  transition: opacity 0.4s ease 0.2s;
}

.panel.expanded {
  position: absolute;
  top: 0;
  height: 100%;
  z-index: 10;
  transition: width 1s ease, left 1s ease;
}

.panel1.expanded { transform-origin: left;}
.panel2.expanded { transform-origin: center;}
.panel3.expanded { transform-origin: right;}

.panel.expanded .expandingPanelsContent { opacity: 1; }

.panel.expanded ~ .panel button.toggle {
  opacity: 0;
  pointer-events: none;
}

.panel-image img {
  max-height: 85%;
  width: auto;
}

/* Restore triangle layout during collapse */
.panel.collapsing .skill-item:nth-child(1) { top: 15%; left: 49%; transform: translateX(-50%) scale(1.2); height: 60px; }
.panel.collapsing .skill-item:nth-child(2) { bottom: 12%; left: 5%; height: 60px; }
.panel.collapsing .skill-item:nth-child(3) { bottom: 12%; right: 7%; height: 60px; }
.panel.collapsing .skill-item:nth-child(4),
.panel.collapsing .skill-item:nth-child(5) { opacity: 0; pointer-events: none; height: 0;}
.panel.collapsing .skill-item:nth-child(5) { opacity: 0; pointer-events: none;right: -100%;}

.text-expandingPanelsContainer {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

@media (min-width: 768px) {
  .text-expandingPanelsContainer {
    width: 50%; 
    height: 100%;
  }
}

.panel-title,
.expandingPanelsContent {
  transition: opacity 0.6s ease;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-self: center;
  text-align: center;
  font-size: 14px;
  font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
  color: #4f4f4f;
}

@media (min-width: 768px) {
  .panel-title,
  .expandingPanelsContent {
    display: grid;
    font-size: 18px;
  }
}

/* initial state */
.panel-title { opacity: 1; }
.expandingPanelsContent { opacity: 0; }

/* when panel expands, swap */
.panel.expanded .panel-title { opacity: 0; }
.panel.expanded .expandingPanelsContent { opacity: 1; }

/* optional: during collapse */
.panel.collapsing .panel-title { opacity: 1; }
.panel.collapsing .expandingPanelsContent { opacity: 0; }

.more-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: #009E44;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    padding: 5px 12px;
    transition: all 0.3s;
  }

  .more-button:hover {
    background-color: #333;
    scale: 1.05;
    color: #ccc;
  }
        `}
      </style>
      <div class="expandingPanelsContainer" ref={containerRef}>
  <div class="panel panel1">
  <button class="toggle">+</button>
  <div class="panel-image">
    <div class="skills">
      <div class="skill-item"><img src={panel1image1} alt={panel1imagealt1} /></div>
      <div class="skill-item"><img alt={panel1imagealt2} src={panel1image2} title={panel1imagealt2} /></div>
      <div class="skill-item"><img alt={panel1imagealt3} src={panel1image3} title={panel1imagealt3} /></div>
      <div class="skill-item"><img alt={panel1imagealt4} src={panel1image4} title={panel1imagealt4} /></div>
      <div class="skill-item"><img alt={panel1imagealt5} src={panel1image5} title={panel1imagealt5} /></div>
    </div>
  </div>
  <div class="text-expandingPanelsContainer">
    <div class="panel-title">
      {panel1title}
    </div>
    <div class="expandingPanelsContent"><p>{panel1blurb}</p>
      <p><a href={panel1link} class="more-button">{panel1buttontext}</a></p>
    </div>
  </div>
  
</div>
  <div class="panel panel2">
    <button class="toggle">+</button>
    <div class="panel-image"><div class="hidden-img"><img src={panel2expandedimage} alt={panel2iexpandedimagealt}/></div><img src={panel2image1} alt={panel2imagealt1} /></div>
    <div class="text-expandingPanelsContainer">
      <div class="panel-title">
        {panel2title}
      </div>
      <div class="expandingPanelsContent"><p>{panel2blurb}</p>
        <p><a href={panel2link} class="more-button">{panel2buttontext}</a></p>
      </div>
    </div>
    
  </div>
  <div class="panel panel3">
    <button class="toggle">+</button>
    <div class="panel-image"><div class="hidden-img"><img src={panel3expandedimage} alt={panel3iexpandedimagealt} /></div><img src={panel3image1} alt={panel3imagealt1} /></div>
    <div class="text-expandingPanelsContainer">
      <div class="panel-title">
        {panel3title}
      </div>
      <div class="expandingPanelsContent"><p>{panel3blurb}</p>
        <p><a href={panel3link} class="more-button">{panel3buttontext}</a></p>
      </div>
    </div>
  </div>
</div>
<script>
  {`
  const panels = document.querySelectorAll(".panel");
const expandingPanelsContainer = document.querySelector(".expandingPanelsContainer");

// Store original rects
panels.forEach(panel => {
  const rect = panel.getBoundingClientRect();
  panel.dataset.origLeft = rect.left - expandingPanelsContainer.getBoundingClientRect().left;
  panel.dataset.origWidth = rect.width;
});

panels.forEach(panel => {
  const button = panel.querySelector(".toggle");

  panel.addEventListener("click", e => {
    e.stopPropagation();
    const isExpanded = panel.classList.contains("expanded");

    // Collapse other panels smoothly
    panels.forEach(p => {
      if (p !== panel && p.classList.contains("expanded")) collapsePanel(p);
    });

    if (isExpanded) collapsePanel(panel);
    else expandPanel(panel);
  });
});

// Expand
function expandPanel(panel) {
  const button = panel.querySelector(".toggle");

  // Get current rect to start animation
  const rect = panel.getBoundingClientRect();
  const offsetLeft = rect.left - expandingPanelsContainer.getBoundingClientRect().left;

  panel.style.left = offsetLeft + "px";
  panel.style.width = rect.width + "px";

  requestAnimationFrame(() => {
    panel.classList.add("expanded");
    panel.style.left = "0px";
    panel.style.width = expandingPanelsContainer.offsetWidth + "px";
    button.textContent = "-";
  });
}

// Collapse
function collapsePanel(panel) {
  const button = panel.querySelector(".toggle");

  const origLeft = panel.dataset.origLeft + "px";
  const origWidth = panel.dataset.origWidth + "px";

  // Start fading out hidden image
  const hiddenImg = panel.querySelector(".hidden-img");
  if (hiddenImg) hiddenImg.style.opacity = 0;

  // Add collapsing class to restore skill positions
  panel.classList.add("collapsing");

  requestAnimationFrame(() => {
    panel.style.left = origLeft;
    panel.style.width = origWidth;

    panel.addEventListener(
      "transitionend",
      () => {
        panel.classList.remove("expanded", "collapsing");
        panel.style.left = "";
        panel.style.width = "";
        button.textContent = "+";

        if (hiddenImg) hiddenImg.style.opacity = "";
      },
      { once: true }
    );
  });
}

// Collapse on clicking outside
document.body.addEventListener("click", () => {
  panels.forEach(panel => {
    if (panel.classList.contains("expanded")) collapsePanel(panel);
  });
});
`}
</script>
    </>
  );
};

ExpandingPanels.propTypes = {
  /** Expanding Panels contents */
  panel1image1: PropTypes.string,
  panel1imagealt1: PropTypes.string,
  panel1image2: PropTypes.string,
  panel1imagealt2: PropTypes.string,
  panel1image3: PropTypes.string,
  panel1imagealt3: PropTypes.string,
  panel1image4: PropTypes.string,
  panel1imagealt4: PropTypes.string,
  panel1image5: PropTypes.string,
  panel1imagealt5: PropTypes.string,
  panel1title: PropTypes.string,
  panel1blurb: PropTypes.string,
  panel1buttontext: PropTypes.string,
  panel1link: PropTypes.string,
  panel2image1: PropTypes.string,
  panel2imagealt1: PropTypes.string,
  panel2expandedimage: PropTypes.string,
  panel2iexpandedimagealt: PropTypes.string,
  panel2title: PropTypes.string,
  panel2blurb: PropTypes.string,
  panel2buttontext: PropTypes.string,
  panel2link: PropTypes.string,
  panel3image1: PropTypes.string,
  panel3imagealt1: PropTypes.string,
  panel3expandedimage: PropTypes.string,
  panel3iexpandedimagealt: PropTypes.string,
  panel3title: PropTypes.string,
  panel3blurb: PropTypes.string,
  panel3buttontext: PropTypes.string,
  panel3link: PropTypes.string,
};
