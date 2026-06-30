import PropTypes from "prop-types";
import { useMemo } from "react";

const tabinit = (instanceId) => {
  setTimeout(function () {
    const wrapper = document.querySelector(
      `[data-tabs-instance="${instanceId}"]`
    );

    if (!wrapper) return;

    const tabButtons =
      wrapper.querySelectorAll(".tabs .tab");

    const tabContents =
      wrapper.querySelectorAll(".tab-content");

    if (tabButtons && tabContents) {
      tabButtons.forEach((tabBtn) => {

        tabBtn.onclick = () => {

          const tabId =
            tabBtn.getAttribute("data-tab");

          tabButtons.forEach((btn) =>
            btn.classList.remove("active")
          );

          tabBtn.classList.add("active");

          tabContents.forEach((content) => {
            content.classList.remove("active");

            if (
              content.id ===
              `${instanceId}-${tabId}`
            ) {
              content.classList.add("active");
            }
          });

        };

      });
    }
  }, 100);
};

/** Primary UI component for user interaction */
export const HubsTabs = ({
  tabareabackgroundcolor,
  tabcontentbackgroundcolor,

  tab1order,
  tab1title,
  tab1titlecolor,
  tab1titlehovercolor,
  tab1titleactivecolor,
  tab1titlebackgroundcolor,
  tab1hoverbackgroundcolor,
  tab1activebackgroundcolor,

  tab2order,
  tab2title,
  tab2titlecolor,
  tab2titlehovercolor,
  tab2titleactivecolor,
  tab2titlebackgroundcolor,
  tab2hoverbackgroundcolor,
  tab2activebackgroundcolor,

  tab3order,
  tab3title,
  tab3titlecolor,
  tab3titlehovercolor,
  tab3titleactivecolor,
  tab3titlebackgroundcolor,
  tab3hoverbackgroundcolor,
  tab3activebackgroundcolor,

  tab4order,
  tab4title,
  tab4titlecolor,
  tab4titlehovercolor,
  tab4titleactivecolor,
  tab4titlebackgroundcolor,
  tab4hoverbackgroundcolor,
  tab4activebackgroundcolor,

  tab1content,
  tab2content,
  tab3content,
  tab4content,
}) => {

  const instanceId = useMemo(
    () => `tabs-${Math.random().toString(36).substr(2,9)}`,
    []
  );

  const tabs = [
  {
    order:tab1order || 1,
    title: tab1title,
    titleColor: tab1titlecolor,
    titleHoverColor: tab1titlehovercolor,
    titleActiveColor: tab1titleactivecolor,
    background: tab1titlebackgroundcolor,
    hoverBackground: tab1hoverbackgroundcolor,
    activeBackground: tab1activebackgroundcolor,
    content: tab1content,
  },
  {
    order:tab2order || 2,
    title: tab2title,
    titleColor: tab2titlecolor,
    titleHoverColor: tab2titlehovercolor,
    titleActiveColor: tab2titleactivecolor,
    background: tab2titlebackgroundcolor,
    hoverBackground: tab2hoverbackgroundcolor,
    activeBackground: tab2activebackgroundcolor,
    content: tab2content,
  },
  {
    order:tab3order || 3,
    title: tab3title,
    titleColor: tab3titlecolor,
    titleHoverColor: tab3titlehovercolor,
    titleActiveColor: tab3titleactivecolor,
    background: tab3titlebackgroundcolor,
    hoverBackground: tab3hoverbackgroundcolor,
    activeBackground: tab3activebackgroundcolor,
    content: tab3content,
  },
  {
    order:tab4order || 4,
    title: tab4title,
    titleColor: tab4titlecolor,
    titleHoverColor: tab4titlehovercolor,
    titleActiveColor: tab4titleactivecolor,
    background: tab4titlebackgroundcolor,
    hoverBackground: tab4hoverbackgroundcolor,
    activeBackground: tab4activebackgroundcolor,
    content: tab4content,
  },
  ].filter(tab => tab.title)
 .sort((a,b)=>a.order-b.order);

  tabinit(instanceId);

  return (
    <>
      <style>
        {`
  .hubtab-content {
    max-width: 1140px;
    padding: 10px 20px;
    margin: 0 auto;
  }

  @media (min-width:1024px){
    .roundal-image img{
      margin:25px;
    }
  }

  .pageType-CategoryPage .map img{
    min-width:unset;
  }

  .tabs{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:7px;
    flex-wrap:wrap;
  }

  .tabs .tab{
    color:var(--tab-text);
    position:relative;
    cursor:pointer;
    padding:5px 10px;
    margin-bottom:10px;
    margin-top:5px;
    transition:all .3s ease-in-out;
    border-radius:30px;
    overflow:hidden;
    background: var(--tab-bg);
  }

  .tabs .tab span{
    width:100%;
    text-align:center;
    font-family:"Nunito Bold","Tahoma Bold",sans-serif;
    font-size:12px;
    line-height:1;
    position:relative;
    z-index:2;
  }

  .tab-content{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    width:100%;
  }

  .tab-content .roundal{
    width:calc(100% / 3);
    padding:5px;
  }

  .tab-content .roundal .roundal-image{
    padding:5px;
  }

  .tab-content .roundal .outer-link button{
    font-size:12px;
    background:transparent;
  }

  @media (min-width:1024px){

    .tab-content .roundal{
      width:calc(100% / 6);
      padding:10px;
    }

    .tab-content .roundal .outer-link button{
      font-size:14px;
    }

    .tabs{
      gap:20px;
    }

    .tabs .tab span{
      font-size:16px;
    }

  }

  .tab-content-container{
    position:relative;
  }

  .tab-content{
    max-height:0;
    overflow:hidden;
    opacity:0;
    transition:all .2s ease-in-out;
  }

  .tab-content-inner{
    padding:0;
    width:100%;
  }

  .tab-content.active{
    padding:5px;
    max-height:2000px;
    opacity:1;
  }

  @media (max-width:374px){

    .tabs{
      gap:3px;
    }

    .tabs .tab{
      padding:5px 3px;
    }

    .tabs .tab span{
      font-size:10px;
      padding:5px;
    }

  }
`}
      </style>

      <div
        className="hubtab"
        data-tabs-instance={instanceId}
      >
        <div className="hubtab-content">

          <div className="tab-content-container">
            <div
              className="tab-content-inner"
              style={{
                background:
                tabareabackgroundcolor
              }}
            >
              <div className="tabs-container">

                <div className="tabs">

                  {tabs.map((tab,index)=>(
                    <>
                    <style>
                    {`
                    [data-tabs-instance="${instanceId}"] .tab-${index}:hover{
                      background:${tab.hoverBackground || tab.background};
                      color:${tab.titleHoverColor || tab.titleColor};
                    }

                    [data-tabs-instance="${instanceId}"] .tab-${index}.active{
                      background:${tab.activeBackground || tab.background};
                      color:${tab.titleActiveColor || tab.titleColor};
                    }

                    [data-tabs-instance="${instanceId}"] .tab-${index}.active::after,
                    [data-tabs-instance="${instanceId}"] .tab-${index}:hover::after{
                      opacity:0;
                    }
                    `}
                    </style>

                    <div
                      key={index}
                      className={`tab tab-${index} ${
                        index===0
                        ? "active"
                        : ""
                      }`}
                      data-tab={`tab${index+1}`}
                      style={{
                        "--tab-bg": tab.background,
                        "--tab-hover-bg": tab.hoverbackground,
                        "--tab-text": tab.titleColor,
                        "--tab-hover-text": tab.titleHoverColor,
                      }}
                    >
                      <span>
                        {tab.title}
                      </span>
                    </div>
                    </>
                    ))}

                </div>

                {tabs.map((tab,index)=>(
                  <div
                    key={index}
                    id={`${instanceId}-tab${index+1}`}
                    className={`tab-content ${
                      index===0
                        ? "active"
                        : ""
                    }`}
                    style={{
                      background:
                      tabcontentbackgroundcolor
                    }}
                    dangerouslySetInnerHTML={{
                      __html: tab.content
                    }}
                  />
                ))}

              </div>
            </div>
          </div>

        </div>
      </div>
      <script>
        {`
  window.onload = function() {
    document.querySelector('.category-title').remove();

    const tabButtons = document.querySelectorAll(".tabs .tab");
    const tabContents = document.querySelectorAll(".tab-content");

  if (tabButtons && tabContents) {
    tabButtons.forEach((tabBtn) => {
      tabBtn.addEventListener("click", () => {
        const tabId = tabBtn.getAttribute("data-tab");

        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabBtn.classList.add("active");

        tabContents.forEach((content) => {
          content.classList.remove("active");

          if (content.id === tabId) {
            content.classList.add("active");
          }
        });
        
      });
    });
  }

  };
`}
      </script>
    </>
  );
};

HubsTabs.propTypes = {
  tabareabackgroundcolor:PropTypes.string,
  tabcontentbackgroundcolor:PropTypes.string,
  tab1title:PropTypes.string,
  tab1titlecolor:PropTypes.string,
  tab1titlehovercolor:PropTypes.string,
  tab1titleactivecolor:PropTypes.string,
  tab1titlebackgroundcolor:PropTypes.string,
  tab1hoverbackgroundcolor:PropTypes.string,
  tab1activebackgroundcolor:PropTypes.string,

  tab2title:PropTypes.string,
  tab2titlecolor:PropTypes.string,
  tab2titlehovercolor:PropTypes.string,
  tab2titleactivecolor:PropTypes.string,
  tab2titlebackgroundcolor:PropTypes.string,
  tab2hoverbackgroundcolor:PropTypes.string,
  tab2activebackgroundcolor:PropTypes.string,

  tab3title:PropTypes.string,
  tab3titlecolor:PropTypes.string,
  tab3titlehovercolor:PropTypes.string,
  tab3titleactivecolor:PropTypes.string,
  tab3titlebackgroundcolor:PropTypes.string,
  tab3hoverbackgroundcolor:PropTypes.string,
  tab3activebackgroundcolor:PropTypes.string,

  tab4title:PropTypes.string,
  tab4titlecolor:PropTypes.string,
  tab4titlehovercolor:PropTypes.string,
  tab4titleactivecolor:PropTypes.string,
  tab4titlebackgroundcolor:PropTypes.string,
  tab4hoverbackgroundcolor:PropTypes.string,
  tab4activebackgroundcolor:PropTypes.string,

  tab1content:PropTypes.string,
  tab2content:PropTypes.string,
  tab3content:PropTypes.string,
  tab4content:PropTypes.string,
};