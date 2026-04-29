import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export const BlogPanels = ({
  blogsectiontitle,
  blogpanel1link,
  blogpanel1image,
  blogpanel1imagealt,
  blogpanel1readtime,
  blogpanel1title,
  blogpanel1linktext,
  blogpanel2link,
  blogpanel2image,
  blogpanel2imagealt,
  blogpanel2readtime,
  blogpanel2title,
  blogpanel2linktext,
  blogpanel3link,
  blogpanel3image,
  blogpanel3imagealt,
  blogpanel3readtime,
  blogpanel3title,
  blogpanel3linktext,
  blogpanel4link,
  blogpanel4image,
  blogpanel4imagealt,
  blogpanel4readtime,
  blogpanel4title,
  blogpanel4linktext,
}) => {
 
  return (
    <>
      <style>
        {`
    .blog-carousel-container {
    max-width: 1160px;
    margin: 20px auto;
    background-color: #fff;
    padding: 0 10px;
  }

  .blog-carousel-title {
    font-size: 22px;
    background-color: #edf3b2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 8px;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    margin-bottom: 10px;
  }

  .blog-carousel .flickity-viewport {
    height: 100%;
  }

  .blog-carousel .flickity-slider {
    display: flex;
    align-items: stretch; /* makes cells full height */
  }

  .blog-carousel .carousel-cell {
    background: #fff1d7;
    margin-right: 20px;
    border-radius: 8px;
    font-size: 16px;
    color: #4f4f4f;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;

    display: flex;
    flex-direction: column;
  }

  .blog-carousel .carousel-cell a {
    text-decoration: none;
    font-size: 14px;
    color: #4f4f4f;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;

    display: flex;
    flex-direction: column;
    height: 100%;
  }

  @media (min-width: 768px) {
    .blog-carousel .carousel-cell a {
      font-size: 18px;
    }
  }

  /* image stays natural height */
  .blog-panel-image img {
    width: 100%;
    height: auto;
    display: block;
  }

  /* text fills remaining space */
  .blog-panel-text {
    flex-grow: 1;
    padding: 15px 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  /* Desktop: 6.5 panels */
  @media (min-width: 1024px) {
    .blog-carousel .carousel-cell {
      width: calc((100% - 15px * 4) / 4); /* 4 gaps of 10px */
    }
  }

  /* Mobile: 2.5 panels */
  @media (max-width: 1023px) {
    .blog-carousel .carousel-cell {
      width: calc((100% - 20px * 2) / 2.5); /* 2 gaps of 10px */
    }
  }

  .blog-panel-text .hero-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: #009e44;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
    padding: 10px 10px 10px 0;
    height: 40px;
    box-shadow: 0 0 5px rgba(3, 33, 33, 0.3);
    transition: all 0.3s;
    border: none;
    margin-top: 10px;
  }

  .blog-panel-text .hero-button:hover {
    background-color: #333;
    scale: 1.05;
    box-shadow: 0 0 18px rgba(3, 33, 33, 0.3);
    color: #ccc;
  }

  .blog-panel-text .hero-button .basket-icon {
    transition: all 0.3s;
    transform: rotate(15deg);
    margin-left: 5px;
  }

  .blog-panel-text .hero-button:hover .basket-icon {
    transform: rotate(-10deg);
  }

  .blog-panel-text .hero-button .star-start {
    position: relative;
    top: -3px;
  }

  .blog-panel-text .hero-button .swoosh-container {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 5px;
    width: 20px;
  }

  .blog-panel-text .hero-button .swoosh {
    display: block;
    width: 0;
    height: 3px;
    margin-top: -3px;
    margin-left: -2px;
    transform: rotate(15deg);
    background-color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s;
  }

  .blog-panel-text .hero-button:hover .swoosh {
    width: 7px;
  }

  .blog-panel-text .hero-button .star-end {
    position: relative;
    bottom: -5px;
    transition: all 0.3s;
  }

  .blog-panel-text .hero-button:hover .star-end {
    scale: 1.1;
    transform: rotate(30deg);
  }

  .blog-panel-text .read-time {
    font-size: 12px;
    display: flex;
    align-items: center;
  }

  .blog-panel-text .read-time .read-icon {
    margin-right: 5px;
  }

  .blog-panel-text .blog-title {
    flex-grow: 1;
  }
        `}
      </style>
      <div class="blog-carousel-container">
  <div class="blog-carousel-title">
    {blogsectiontitle}
  </div>
  <div class="blog-carousel">
    <div class="carousel-cell">
      <a href={blogpanel1link}>
        <div class="blog-panel-image">
          <img
            src={blogpanel1image}
            alt={blogpanel1imagealt}
            title={blogpanel1title}
          />
        </div>
        <div class="blog-panel-text">
          <span class="read-time"
            ><span class="read-icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M6.40344 -9.78857e-05C9.94082 -9.78857e-05 12.8069 2.86596 12.8069 6.40334C12.8069 9.94072 9.94082 12.8068 6.40344 12.8068C2.86606 12.8068 4.27663e-06 9.94072 4.27663e-06 6.40334C4.27663e-06 2.86596 2.86606 -9.78857e-05 6.40344 -9.78857e-05ZM8.77891 8.08166C8.83055 8.03002 8.88219 7.92674 8.88219 7.82346C8.88219 7.69436 8.80473 7.59107 8.72727 7.51361L7.22969 6.40334V2.68521C7.22969 2.47865 7.02313 2.27209 6.81657 2.27209H5.99032C5.75793 2.27209 5.57719 2.47865 5.57719 2.68521V6.71318C5.57719 7.04885 5.70629 7.33287 5.9645 7.51361L7.69446 8.80463C7.7461 8.85627 7.84938 8.90791 7.92684 8.90791C8.08176 8.90791 8.18504 8.83045 8.2625 8.72717L8.77891 8.08166Z"
                  fill="#4f4f4f"
                />
              </svg>
            </span>
            <span>{blogpanel1readtime}</span>
          </span>
          <span class="blog-title">{blogpanel1title}</span>
          <button href={blogpanel1link} class="hero-button">
            <span class="swoosh-container"
              ><span class="star-start"
                ><svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                    fill-opacity="0.5"
                  ></path></svg></span
              ><span class="swoosh">&nbsp;</span></span
            >{blogpanel1linktext}<span class="basket-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
              >
                <path
                  d="M18.8434 11.5443C18.8496 11.716 18.8355 11.8834 18.8009 12.0464L18.3475 14.1864C18.1446 15.1443 17.6232 15.8963 16.7834 16.4425C15.9683 16.9725 15.0717 17.1339 14.0934 16.9266L12.9622 16.687C12.0247 16.4883 11.2866 16.0019 10.7479 15.2275C10.2049 14.4736 9.99781 13.6418 10.1267 12.7321L10.2876 11.5204L9.18702 11.2872L8.84268 12.46C8.59153 13.3438 8.0649 14.0202 7.26278 14.4891C6.45635 14.9784 5.58437 15.1237 4.64685 14.9251L3.51571 14.6854C2.53743 14.4782 1.77306 13.9648 1.22262 13.1454C0.696873 12.31 0.535481 11.4133 0.738442 10.4554L1.19186 8.3154C1.22641 8.15236 1.28134 7.99363 1.35665 7.83922L3.90478 2.5973C4.27268 1.86601 4.83179 1.38819 5.58208 1.16384C6.35708 0.923422 7.08337 1.01342 7.76094 1.43383L8.21769 1.69033C8.33134 1.757 8.40578 1.85795 8.44102 1.9932C8.47625 2.12844 8.46053 2.25288 8.39386 2.36653L8.14384 2.79271C8.07717 2.90636 7.97621 2.9808 7.84097 3.01603C7.70573 3.05127 7.58129 3.03555 7.46764 2.96887L7.06555 2.7559C6.7246 2.55589 6.38616 2.49483 6.05022 2.57272C5.68526 2.68705 5.42531 2.90882 5.27038 3.23802L3.08057 7.69338C3.968 7.62586 4.82953 7.68063 5.66514 7.85768C6.86761 8.11246 7.97319 8.62356 8.98186 9.39097L11.2441 9.8703C12.4774 9.5779 13.6952 9.5591 14.8977 9.81388C15.7333 9.99093 16.543 10.2903 17.3268 10.7119L17.132 5.75128C17.1239 5.38754 16.9763 5.0794 16.689 4.82688C16.4135 4.61944 16.0794 4.538 15.6867 4.58255L15.2327 4.61415C15.1018 4.629 14.9817 4.5929 14.8724 4.50585C14.763 4.4188 14.7009 4.30981 14.6861 4.17889L14.6304 3.68793C14.6156 3.55701 14.6517 3.43689 14.7387 3.32756C14.8258 3.21822 14.9347 3.15613 15.0657 3.14128L15.5872 3.09206C16.377 2.98257 17.0672 3.1927 17.6577 3.72244C18.273 4.23612 18.6004 4.90178 18.6401 5.71944L18.8434 11.5443ZM6.91851 11.8926L7.30637 10.6651C6.64918 10.249 5.96391 9.96538 5.25058 9.81424C4.49649 9.65447 3.72452 9.62932 2.93467 9.73882L2.69501 10.87C2.60432 11.298 2.67945 11.6972 2.92039 12.0677C3.16564 12.4178 3.50227 12.6382 3.93027 12.7289L5.06141 12.9685C5.46902 13.0549 5.85376 12.998 6.21561 12.7978C6.58178 12.5773 6.81608 12.2755 6.91851 11.8926ZM16.391 13.7719L16.6306 12.6407C15.953 12.2203 15.2372 11.9302 14.4831 11.7704C13.7698 11.6193 13.0284 11.6006 12.2589 11.7144L12.1156 12.9938C12.054 13.3853 12.1458 13.7562 12.391 14.1063C12.6406 14.436 12.9692 14.644 13.3768 14.7304L14.5079 14.9701C14.9359 15.0608 15.333 14.9958 15.6992 14.7753C16.0697 14.5343 16.3003 14.1999 16.391 13.7719Z"
                  fill="white"
                />
              </svg> </span
            ><span class="star-end"
              ><svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                  fill-opacity="0.5"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </a>
    </div>

    <div class="carousel-cell">
      <a href={blogpanel2link}>
        <div class="blog-panel-image">
          <img
            src={blogpanel2image}
            alt={blogpanel2imagealt}
            title={blogpanel2title}
          />
        </div>
        <div class="blog-panel-text">
          <span class="read-time"
            ><span class="read-icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M6.40344 -9.78857e-05C9.94082 -9.78857e-05 12.8069 2.86596 12.8069 6.40334C12.8069 9.94072 9.94082 12.8068 6.40344 12.8068C2.86606 12.8068 4.27663e-06 9.94072 4.27663e-06 6.40334C4.27663e-06 2.86596 2.86606 -9.78857e-05 6.40344 -9.78857e-05ZM8.77891 8.08166C8.83055 8.03002 8.88219 7.92674 8.88219 7.82346C8.88219 7.69436 8.80473 7.59107 8.72727 7.51361L7.22969 6.40334V2.68521C7.22969 2.47865 7.02313 2.27209 6.81657 2.27209H5.99032C5.75793 2.27209 5.57719 2.47865 5.57719 2.68521V6.71318C5.57719 7.04885 5.70629 7.33287 5.9645 7.51361L7.69446 8.80463C7.7461 8.85627 7.84938 8.90791 7.92684 8.90791C8.08176 8.90791 8.18504 8.83045 8.2625 8.72717L8.77891 8.08166Z"
                  fill="#4f4f4f"
                />
              </svg>
            </span>
            <span>{blogpanel2readtime}</span>
          </span>
          <span class="blog-title">{blogpanel2title}</span>
          <button href={blogpanel2link} class="hero-button">
            <span class="swoosh-container"
              ><span class="star-start"
                ><svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                    fill-opacity="0.5"
                  ></path></svg></span
              ><span class="swoosh">&nbsp;</span></span
            >{blogpanel2linktext}<span class="basket-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
              >
                <path
                  d="M18.8434 11.5443C18.8496 11.716 18.8355 11.8834 18.8009 12.0464L18.3475 14.1864C18.1446 15.1443 17.6232 15.8963 16.7834 16.4425C15.9683 16.9725 15.0717 17.1339 14.0934 16.9266L12.9622 16.687C12.0247 16.4883 11.2866 16.0019 10.7479 15.2275C10.2049 14.4736 9.99781 13.6418 10.1267 12.7321L10.2876 11.5204L9.18702 11.2872L8.84268 12.46C8.59153 13.3438 8.0649 14.0202 7.26278 14.4891C6.45635 14.9784 5.58437 15.1237 4.64685 14.9251L3.51571 14.6854C2.53743 14.4782 1.77306 13.9648 1.22262 13.1454C0.696873 12.31 0.535481 11.4133 0.738442 10.4554L1.19186 8.3154C1.22641 8.15236 1.28134 7.99363 1.35665 7.83922L3.90478 2.5973C4.27268 1.86601 4.83179 1.38819 5.58208 1.16384C6.35708 0.923422 7.08337 1.01342 7.76094 1.43383L8.21769 1.69033C8.33134 1.757 8.40578 1.85795 8.44102 1.9932C8.47625 2.12844 8.46053 2.25288 8.39386 2.36653L8.14384 2.79271C8.07717 2.90636 7.97621 2.9808 7.84097 3.01603C7.70573 3.05127 7.58129 3.03555 7.46764 2.96887L7.06555 2.7559C6.7246 2.55589 6.38616 2.49483 6.05022 2.57272C5.68526 2.68705 5.42531 2.90882 5.27038 3.23802L3.08057 7.69338C3.968 7.62586 4.82953 7.68063 5.66514 7.85768C6.86761 8.11246 7.97319 8.62356 8.98186 9.39097L11.2441 9.8703C12.4774 9.5779 13.6952 9.5591 14.8977 9.81388C15.7333 9.99093 16.543 10.2903 17.3268 10.7119L17.132 5.75128C17.1239 5.38754 16.9763 5.0794 16.689 4.82688C16.4135 4.61944 16.0794 4.538 15.6867 4.58255L15.2327 4.61415C15.1018 4.629 14.9817 4.5929 14.8724 4.50585C14.763 4.4188 14.7009 4.30981 14.6861 4.17889L14.6304 3.68793C14.6156 3.55701 14.6517 3.43689 14.7387 3.32756C14.8258 3.21822 14.9347 3.15613 15.0657 3.14128L15.5872 3.09206C16.377 2.98257 17.0672 3.1927 17.6577 3.72244C18.273 4.23612 18.6004 4.90178 18.6401 5.71944L18.8434 11.5443ZM6.91851 11.8926L7.30637 10.6651C6.64918 10.249 5.96391 9.96538 5.25058 9.81424C4.49649 9.65447 3.72452 9.62932 2.93467 9.73882L2.69501 10.87C2.60432 11.298 2.67945 11.6972 2.92039 12.0677C3.16564 12.4178 3.50227 12.6382 3.93027 12.7289L5.06141 12.9685C5.46902 13.0549 5.85376 12.998 6.21561 12.7978C6.58178 12.5773 6.81608 12.2755 6.91851 11.8926ZM16.391 13.7719L16.6306 12.6407C15.953 12.2203 15.2372 11.9302 14.4831 11.7704C13.7698 11.6193 13.0284 11.6006 12.2589 11.7144L12.1156 12.9938C12.054 13.3853 12.1458 13.7562 12.391 14.1063C12.6406 14.436 12.9692 14.644 13.3768 14.7304L14.5079 14.9701C14.9359 15.0608 15.333 14.9958 15.6992 14.7753C16.0697 14.5343 16.3003 14.1999 16.391 13.7719Z"
                  fill="white"
                />
              </svg> </span
            ><span class="star-end"
              ><svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                  fill-opacity="0.5"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </a>
    </div>

    <div class="carousel-cell">
      <a href={blogpanel3link}>
        <div class="blog-panel-image">
          <img
            src={blogpanel3image}
            alt={blogpanel3imagealt}
            title={blogpanel3title}
          />
        </div>
        <div class="blog-panel-text">
          <span class="read-time"
            ><span class="read-icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M6.40344 -9.78857e-05C9.94082 -9.78857e-05 12.8069 2.86596 12.8069 6.40334C12.8069 9.94072 9.94082 12.8068 6.40344 12.8068C2.86606 12.8068 4.27663e-06 9.94072 4.27663e-06 6.40334C4.27663e-06 2.86596 2.86606 -9.78857e-05 6.40344 -9.78857e-05ZM8.77891 8.08166C8.83055 8.03002 8.88219 7.92674 8.88219 7.82346C8.88219 7.69436 8.80473 7.59107 8.72727 7.51361L7.22969 6.40334V2.68521C7.22969 2.47865 7.02313 2.27209 6.81657 2.27209H5.99032C5.75793 2.27209 5.57719 2.47865 5.57719 2.68521V6.71318C5.57719 7.04885 5.70629 7.33287 5.9645 7.51361L7.69446 8.80463C7.7461 8.85627 7.84938 8.90791 7.92684 8.90791C8.08176 8.90791 8.18504 8.83045 8.2625 8.72717L8.77891 8.08166Z"
                  fill="#4f4f4f"
                />
              </svg>
            </span>
            <span>{blogpanel3readtime}</span>
          </span>
          <span class="blog-title">{blogpanel3title}</span>
          <button href={blogpanel3link} class="hero-button">
            <span class="swoosh-container"
              ><span class="star-start"
                ><svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                    fill-opacity="0.5"
                  ></path></svg></span
              ><span class="swoosh">&nbsp;</span></span
            >{blogpanel3linktext}<span class="basket-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
              >
                <path
                  d="M18.8434 11.5443C18.8496 11.716 18.8355 11.8834 18.8009 12.0464L18.3475 14.1864C18.1446 15.1443 17.6232 15.8963 16.7834 16.4425C15.9683 16.9725 15.0717 17.1339 14.0934 16.9266L12.9622 16.687C12.0247 16.4883 11.2866 16.0019 10.7479 15.2275C10.2049 14.4736 9.99781 13.6418 10.1267 12.7321L10.2876 11.5204L9.18702 11.2872L8.84268 12.46C8.59153 13.3438 8.0649 14.0202 7.26278 14.4891C6.45635 14.9784 5.58437 15.1237 4.64685 14.9251L3.51571 14.6854C2.53743 14.4782 1.77306 13.9648 1.22262 13.1454C0.696873 12.31 0.535481 11.4133 0.738442 10.4554L1.19186 8.3154C1.22641 8.15236 1.28134 7.99363 1.35665 7.83922L3.90478 2.5973C4.27268 1.86601 4.83179 1.38819 5.58208 1.16384C6.35708 0.923422 7.08337 1.01342 7.76094 1.43383L8.21769 1.69033C8.33134 1.757 8.40578 1.85795 8.44102 1.9932C8.47625 2.12844 8.46053 2.25288 8.39386 2.36653L8.14384 2.79271C8.07717 2.90636 7.97621 2.9808 7.84097 3.01603C7.70573 3.05127 7.58129 3.03555 7.46764 2.96887L7.06555 2.7559C6.7246 2.55589 6.38616 2.49483 6.05022 2.57272C5.68526 2.68705 5.42531 2.90882 5.27038 3.23802L3.08057 7.69338C3.968 7.62586 4.82953 7.68063 5.66514 7.85768C6.86761 8.11246 7.97319 8.62356 8.98186 9.39097L11.2441 9.8703C12.4774 9.5779 13.6952 9.5591 14.8977 9.81388C15.7333 9.99093 16.543 10.2903 17.3268 10.7119L17.132 5.75128C17.1239 5.38754 16.9763 5.0794 16.689 4.82688C16.4135 4.61944 16.0794 4.538 15.6867 4.58255L15.2327 4.61415C15.1018 4.629 14.9817 4.5929 14.8724 4.50585C14.763 4.4188 14.7009 4.30981 14.6861 4.17889L14.6304 3.68793C14.6156 3.55701 14.6517 3.43689 14.7387 3.32756C14.8258 3.21822 14.9347 3.15613 15.0657 3.14128L15.5872 3.09206C16.377 2.98257 17.0672 3.1927 17.6577 3.72244C18.273 4.23612 18.6004 4.90178 18.6401 5.71944L18.8434 11.5443ZM6.91851 11.8926L7.30637 10.6651C6.64918 10.249 5.96391 9.96538 5.25058 9.81424C4.49649 9.65447 3.72452 9.62932 2.93467 9.73882L2.69501 10.87C2.60432 11.298 2.67945 11.6972 2.92039 12.0677C3.16564 12.4178 3.50227 12.6382 3.93027 12.7289L5.06141 12.9685C5.46902 13.0549 5.85376 12.998 6.21561 12.7978C6.58178 12.5773 6.81608 12.2755 6.91851 11.8926ZM16.391 13.7719L16.6306 12.6407C15.953 12.2203 15.2372 11.9302 14.4831 11.7704C13.7698 11.6193 13.0284 11.6006 12.2589 11.7144L12.1156 12.9938C12.054 13.3853 12.1458 13.7562 12.391 14.1063C12.6406 14.436 12.9692 14.644 13.3768 14.7304L14.5079 14.9701C14.9359 15.0608 15.333 14.9958 15.6992 14.7753C16.0697 14.5343 16.3003 14.1999 16.391 13.7719Z"
                  fill="white"
                />
              </svg> </span
            ><span class="star-end"
              ><svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                  fill-opacity="0.5"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </a>
    </div>

    <div class="carousel-cell">
      <a href={blogpanel4link}>
        <div class="blog-panel-image">
          <img
            src={blogpanel4image}
            alt={blogpanel4imagealt}
            title={blogpanel4title}
          />
        </div>
        <div class="blog-panel-text">
          <span class="read-time"
            ><span class="read-icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M6.40344 -9.78857e-05C9.94082 -9.78857e-05 12.8069 2.86596 12.8069 6.40334C12.8069 9.94072 9.94082 12.8068 6.40344 12.8068C2.86606 12.8068 4.27663e-06 9.94072 4.27663e-06 6.40334C4.27663e-06 2.86596 2.86606 -9.78857e-05 6.40344 -9.78857e-05ZM8.77891 8.08166C8.83055 8.03002 8.88219 7.92674 8.88219 7.82346C8.88219 7.69436 8.80473 7.59107 8.72727 7.51361L7.22969 6.40334V2.68521C7.22969 2.47865 7.02313 2.27209 6.81657 2.27209H5.99032C5.75793 2.27209 5.57719 2.47865 5.57719 2.68521V6.71318C5.57719 7.04885 5.70629 7.33287 5.9645 7.51361L7.69446 8.80463C7.7461 8.85627 7.84938 8.90791 7.92684 8.90791C8.08176 8.90791 8.18504 8.83045 8.2625 8.72717L8.77891 8.08166Z"
                  fill="#4f4f4f"
                />
              </svg>
            </span>
            <span>{blogpanel4readtime}</span>
          </span>
          <span class="blog-title">{blogpanel4title}</span>
          <button href={blogpanel4link} class="hero-button">
            <span class="swoosh-container"
              ><span class="star-start"
                ><svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                    fill-opacity="0.5"
                  ></path></svg></span
              ><span class="swoosh">&nbsp;</span></span
            >{blogpanel4linktext}<span class="basket-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
              >
                <path
                  d="M18.8434 11.5443C18.8496 11.716 18.8355 11.8834 18.8009 12.0464L18.3475 14.1864C18.1446 15.1443 17.6232 15.8963 16.7834 16.4425C15.9683 16.9725 15.0717 17.1339 14.0934 16.9266L12.9622 16.687C12.0247 16.4883 11.2866 16.0019 10.7479 15.2275C10.2049 14.4736 9.99781 13.6418 10.1267 12.7321L10.2876 11.5204L9.18702 11.2872L8.84268 12.46C8.59153 13.3438 8.0649 14.0202 7.26278 14.4891C6.45635 14.9784 5.58437 15.1237 4.64685 14.9251L3.51571 14.6854C2.53743 14.4782 1.77306 13.9648 1.22262 13.1454C0.696873 12.31 0.535481 11.4133 0.738442 10.4554L1.19186 8.3154C1.22641 8.15236 1.28134 7.99363 1.35665 7.83922L3.90478 2.5973C4.27268 1.86601 4.83179 1.38819 5.58208 1.16384C6.35708 0.923422 7.08337 1.01342 7.76094 1.43383L8.21769 1.69033C8.33134 1.757 8.40578 1.85795 8.44102 1.9932C8.47625 2.12844 8.46053 2.25288 8.39386 2.36653L8.14384 2.79271C8.07717 2.90636 7.97621 2.9808 7.84097 3.01603C7.70573 3.05127 7.58129 3.03555 7.46764 2.96887L7.06555 2.7559C6.7246 2.55589 6.38616 2.49483 6.05022 2.57272C5.68526 2.68705 5.42531 2.90882 5.27038 3.23802L3.08057 7.69338C3.968 7.62586 4.82953 7.68063 5.66514 7.85768C6.86761 8.11246 7.97319 8.62356 8.98186 9.39097L11.2441 9.8703C12.4774 9.5779 13.6952 9.5591 14.8977 9.81388C15.7333 9.99093 16.543 10.2903 17.3268 10.7119L17.132 5.75128C17.1239 5.38754 16.9763 5.0794 16.689 4.82688C16.4135 4.61944 16.0794 4.538 15.6867 4.58255L15.2327 4.61415C15.1018 4.629 14.9817 4.5929 14.8724 4.50585C14.763 4.4188 14.7009 4.30981 14.6861 4.17889L14.6304 3.68793C14.6156 3.55701 14.6517 3.43689 14.7387 3.32756C14.8258 3.21822 14.9347 3.15613 15.0657 3.14128L15.5872 3.09206C16.377 2.98257 17.0672 3.1927 17.6577 3.72244C18.273 4.23612 18.6004 4.90178 18.6401 5.71944L18.8434 11.5443ZM6.91851 11.8926L7.30637 10.6651C6.64918 10.249 5.96391 9.96538 5.25058 9.81424C4.49649 9.65447 3.72452 9.62932 2.93467 9.73882L2.69501 10.87C2.60432 11.298 2.67945 11.6972 2.92039 12.0677C3.16564 12.4178 3.50227 12.6382 3.93027 12.7289L5.06141 12.9685C5.46902 13.0549 5.85376 12.998 6.21561 12.7978C6.58178 12.5773 6.81608 12.2755 6.91851 11.8926ZM16.391 13.7719L16.6306 12.6407C15.953 12.2203 15.2372 11.9302 14.4831 11.7704C13.7698 11.6193 13.0284 11.6006 12.2589 11.7144L12.1156 12.9938C12.054 13.3853 12.1458 13.7562 12.391 14.1063C12.6406 14.436 12.9692 14.644 13.3768 14.7304L14.5079 14.9701C14.9359 15.0608 15.333 14.9958 15.6992 14.7753C16.0697 14.5343 16.3003 14.1999 16.391 13.7719Z"
                  fill="white"
                />
              </svg> </span
            ><span class="star-end"
              ><svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z"
                  fill-opacity="0.5"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </a>
    </div>

  </div>
</div>
<script>
  {`
  var flkty = new Flickity(".blog-carousel", {
    cellAlign: "left",
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true,
  });

  function setEqualHeights() {
    const cells = document.querySelectorAll(".blog-carousel .carousel-cell");

    // reset heights first (important for recalculation)
    cells.forEach((cell) => {
      cell.style.height = "auto";
    });

    // find max height
    let maxHeight = 0;
    cells.forEach((cell) => {
      const h = cell.offsetHeight;
      if (h > maxHeight) maxHeight = h;
    });

    // apply max height
    cells.forEach((cell) => {
      cell.style.height = maxHeight + "px";
    });

    // tell Flickity to re-measure layout
    flkty.resize();
  }

  function initCarouselSizing() {
    imagesLoaded(".blog-carousel", function () {
      setEqualHeights();
    });
  }

  initCarouselSizing();

  // debounce resize so it doesn't spam recalcs
  let resizeTimeout;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      setEqualHeights();
    }, 150);
  });
`}
</script>
    </>
  );
};

BlogPanels.propTypes = {
  /** Blog Panels contents */
  blogsectiontitle: PropTypes.string,
  blogpanel1link: PropTypes.string,
  blogpanel1image: PropTypes.string,
  blogpanel1imagealt: PropTypes.string,
  blogpanel1readtime: PropTypes.string,
  blogpanel1title: PropTypes.string,
  blogpanel1linktext: PropTypes.string,
  blogpanel2link: PropTypes.string,
  blogpanel2image: PropTypes.string,
  blogpanel2imagealt: PropTypes.string,
  blogpanel2readtime: PropTypes.string,
  blogpanel2title: PropTypes.string,
  blogpanel2linktext: PropTypes.string,
  blogpanel3link: PropTypes.string,
  blogpanel3image: PropTypes.string,
  blogpanel3imagealt: PropTypes.string,
  blogpanel3readtime: PropTypes.string,
  blogpanel3title: PropTypes.string,
  blogpanel3linktext: PropTypes.string,
  blogpanel4link: PropTypes.string,
  blogpanel4image: PropTypes.string,
  blogpanel4imagealt: PropTypes.string,
  blogpanel4readtime: PropTypes.string,
  blogpanel4title: PropTypes.string,
  blogpanel4linktext: PropTypes.string,
};
