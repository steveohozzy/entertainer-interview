import PropTypes from "prop-types";
import { useEffect } from "react";
import { CTAButton } from "./CTAButton";
import "./consistency.css";

export const TopTenToys = ({
  containerBackground,
  containerTextColor,
  separatorColor,
  textColor,
  lozengeColor,
  lozengeBg,
  footerTextColor,
  oddRankBg,
  evenRankBg,
  oddRankColor,
  evenRankColor,
  panelTitle,
  panelBlurb,
  headerType,
  headerImage,
  headerImageMobile,
  headerImageAlt,
  headerTitle = '',
  headerBlurb = '',
  footerTitle,
  footerBlurb,
  footerSecondTitle,
  footerSecondBlurb,
  ...props
}) => {
  const toys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .map((num) => ({
    id: `toy-${num}`,
    name: props[`toy${num}Title`] || `Toy ${num}`,
    rank: parseInt(props[`toy${num}Rank`], 10) || 999,
    blurb: props[`toy${num}Blurb`] || '',
    love: props[`toy${num}Love`] || '',
    loveCharacter: props[`toy${num}LoveCharacter`] || 'sheep',
    tip: props[`toy${num}Tip`] || '',
    tipCharacter: props[`toy${num}TipCharacter`] || 'fox',
    link: props[`toy${num}Link`] || '#',
    hero: props[`toy${num}Hero`] || '',
    life: props[`toy${num}Life`] || '',
    lifealt: props[`toy${num}Lifealt`] || '',
    life2: props[`toy${num}Life2`] || '',
    life2alt: props[`toy${num}Life2alt`] || '',
    btn: props[`toy${num}Button`] || 'shop-now',
    reviewName: props[`toy${num}ReviewName`] || '',
    reviewText: props[`toy${num}ReviewText`] || '',
  }))
  .filter(t => t.name)
  .sort((a, b) => a.rank - b.rank);

  // Script effect for scrollspy, IntersectionObserver, and smooth scrolling inside iframe
  useEffect(() => {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => { 
        if (e.isIntersecting){ 
          e.target.classList.add("in"); 
          revealObs.unobserve(e.target); 
        } 
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => revealObs.observe(el));

    const links = Array.from(document.querySelectorAll("#tocList a"));
    const linkById = Object.fromEntries(links.map(a => [a.dataset.target, a]));
    let activeId = null;

    // Prevent default anchor jump navigation inside iframe and use smooth scroll instead
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.dataset.target;
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    const spyObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting){
          const id = e.target.id;
          if (id === activeId) return;
          activeId = id;
          links.forEach(a => a.classList.remove("active"));
          const link = linkById[id];
          if (link){
            link.classList.add("active");
            if (window.matchMedia("(max-width: 1200px)").matches){
              link.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
            }
          }
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    const sections = document.querySelectorAll(".toy");
    sections.forEach(s => spyObs.observe(s));

    return () => {
      revealObs.disconnect();
      spyObs.disconnect();
    };
  }, []);

  const formatParagraphs = (text) => {
    if (!text) return '';

    return text
      .split(/\r?\n\s*\r?\n/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean)
      .map((paragraph) => `<p>${paragraph.replace(/\r?\n/g, '<br />')}</p>`)
      .join('');
  };

  const getCharacterTheme = (character, fallback) => {
    const allowedCharacters = ['sheep', 'fox', 'seal', 'robin'];
    const value = String(character || fallback || '').toLowerCase().trim();

    return allowedCharacters.includes(value)
      ? `theme-${value}`
      : `theme-${fallback}`;
  };

  const getCharacterImage = (character, fallback) => {
    const characterImages = {
      sheep: 'https://www.thetoyshop.com/medias/Top-Ten-Toys-Editorial-Characters-245x390px-Sheep-look.png?context=bWFzdGVyfHJvb3R8Njg4MTV8aW1hZ2UvcG5nfGFHUTFMMmhtTXk4eE1qZzBPVE0yTXpNNE5qTTVPQzlVYjNBZ1ZHVnVJRlJ2ZVhNZ1JXUnBkRzl5YVdGc0lFTm9ZWEpoWTNSbGNuTWdNalExZURNNU1IQjRYMU5vWldWd0lHeHZiMnN1Y0c1bnw0YzVkNjNmZDBjNDdjNmZlY2Y2MzZmOWViZGRlMDMzZGU2ZWFmZDAxNGFjMTFlZjQxYzM5ZDU0MmNkNjdiZDI5',
      fox: 'https://www.thetoyshop.com/medias/Fox-Sitting.png?context=bWFzdGVyfHJvb3R8MTE4OTV8aW1hZ2UvcG5nfGFERTNMMmd3WVM4eE1qZ3hOelF4TmpjNE1UZzFOQzlHYjNnZ0xTQlRhWFIwYVc1bkxuQnVad3wwNzJmNjVlYTJkNjQzZmVjOGZkOWYyMWZhYjUyZDA3Zjk2MTMxYzYzMDU2M2FjZTUxOGM5YzRmM2NlNjgyMjE5',
      robin: 'https://www.thetoyshop.com/medias/Robin-game-50px.svg?context=bWFzdGVyfHJvb3R8MTU5MjB8aW1hZ2Uvc3ZnK3htbHxhREEwTDJoaVpTOHhNamd6T0Rjd01qVTNPVGMwTWk5U2IySnBiaTFuWVcxbExUVXdjSGd1YzNabnxiOWUzZTE5ODdmOTUyNWEyMzUzOTM5MmFkNTMwZGJjMjY3ZTE5OWQ0Y2ZkZWM0ZjZlODRmOTk1MjE2MzIwYWQy',
      seal: 'https://www.thetoyshop.com/medias/Seal-of-approval-1.png?context=bWFzdGVyfHJvb3R8MzA1ODV8aW1hZ2UvcG5nfGFEY3dMMmcyWWk4eE1qZ3hOelF6TVRZeU5UYzFPQzlUWldGc0lHOW1JR0Z3Y0hKdmRtRnNJREV1Y0c1bnwyYjJkOGUzODJkZmMzZDViMjBmNzkwMTIzNDEyMzRlMmJhZGVmZDRmMTQwM2EwZTZjMjVjMWE5MTZkZGRhNTNm',
    };

    const value = String(character || fallback || '').toLowerCase().trim();

    return characterImages[value] || characterImages[fallback];
  };

  return (
    <>
      <style>
        {`
          :root {
            --primary: ${containerBackground || '#29527a'};
            --primary-dark: #14324f;
            --yellow: #ffd166;
            --teal: #3b8ea5;
            --cream: #f2f7fc;
            --text-color: ${textColor || '#1b263b'};
            --line: ${separatorColor || '#d6e4f0'};
            --radius: 20px;
            --radius-sm: 12px;
            --shadow: 0 14px 30px -18px rgba(27, 38, 59, 0.35);
            --shadow-lg: 0 30px 60px -30px rgba(27, 38, 59, 0.45);
            --nav-w: 300px;
            --maxw: 1180px;
            --lozenge-color: ${lozengeColor || '#ffffff'};
            --lozenge-bg: ${lozengeBg || '#29527a'};
            --footer-text-color: ${footerTextColor || '#ffffff'};
          }

          /* Forces content to display inside SmartEdit preview mode */
body.smartedit-preview .reveal,
.smartEditComponent .reveal {
  opacity: 1 !important;
  transform: none !important;
}

          .top-ten-wrapper {
            color:#fff;
            background: rgb(39, 87, 159);
            min-height: 100vh;
          }

          .wrap { max-width: var(--maxw); margin: 0 auto; padding: 0 20px; }

          /* --- Full Width Header / Footer Sections --- */
          .full-width-section div.footer-blurb {
            color: var(--footer-text-color);
          }
          .full-width-section {
            padding: 40px 0 20px;
          }
          .full-width-section h2,
          .full-width-section .footer-lozenge-title {
            text-transform: uppercase;
            background: var(--lozenge-bg);
            color: var(--lozenge-color);
            font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
            font-size: 18px;
            border-radius: 8px;
            margin: 0 auto;
            box-shadow: inset 0 4px 10px rgba(255,255,255,0.1); /* subtle inner highlight */
            backdrop-filter: blur(2px); /* optional slight blur for glass effect */
            -webkit-backdrop-filter: blur(2px);
            padding: 5px 0;
            text-align: center;
            margin-bottom: 20px;
            max-width: 1200px;
            font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
          }
          .full-width-section div {
            font-size: 18px;
            line-height: 1.6;
            margin: 0 auto;
            color: #fff;
            max-width: 1200px;
            text-align: center;
          }

          .full-width-section p {
            margin: 0 0 15px;
          }

          .layout-container {
            display: flex;
            flex-direction: column;
            align-items: stretch;
          }

          .layout { display: grid; grid-template-columns: var(--nav-w) 1fr; gap: 44px; align-items: start; padding: 20px 0 80px; }

          .toc-wrapper {
            align-self: start;
            position: sticky;
            top: 30px;
          }

          .toc {
            background: #fff; border-radius: var(--radius); padding: 22px; box-shadow: var(--shadow);
            border: 1px solid var(--line);
          }
          .toc .title { font-family: "Nunito Bold", "Tahoma Bold", sans-serif; font-size: 16px; text-transform: capitalize; color: var(--text-color); margin: 0 0 4px; }
          .toc .sub { font-size: 14px; color: var(--text-color); margin: 0 0 14px; }
          .toc ol { list-style: none; margin: 0; padding: 0; counter-reset: toc; }
          .toc li { margin: 2px 0; }
          .toc a {
            counter-increment: toc; display: flex; align-items: center; gap: 12px;
            font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
            padding: 9px 10px; border-radius: 12px; color: var(--text-color); font-weight: 700; font-size: 15px;
            transition: background .18s, transform .18s, color .18s; position: relative; text-decoration: none;
          }
          .toc a::before {
            content: counter(toc); flex: none; width: 28px; height: 28px; border-radius: 9px;
            background: var(--cream); color: #5c6b82; display: grid; place-items: center;
            font-size: 12px;
          }
          .toc a .t { line-height: 1.2; }
          .toc a:hover { background: var(--cream); transform: translateX(3px); }
          .toc a.active { background: var(--primary); color: #fff; }
          .toc a.active::before { background: var(--yellow); color: #1b263b; }

          /* --- Content --- */
          .content { min-width: 0; }

          .toy { scroll-margin-top: 84px; padding: 26px 0 40px; border-bottom: 2px dashed var(--line); }
          .toy:last-child { border-bottom: 0; }

          .toy-head { display: flex; align-items: center; gap: 16px; margin-bottom: 18px; }
          
          /* --- Star Rank Badge --- */
          .rank {
            flex: none; 
            width: 78px; 
            height: 78px; 
            display: grid; 
            place-items: center;
            font-weight: 800; 
            font-size: 28px; 
            background-image: url("https://www.thetoyshop.com/medias/star-topten-grey.png?context=bWFzdGVyfHJvb3R8ODEzOXxpbWFnZS9wbmd8YURjeEwyZ3lOaTh4TWpnMU1UazJNemMxTmpVM05DOXpkR0Z5TFhSdmNIUmxiaTFuY21WNUxuQnVad3xjNGZjMjUyZDFkYWM1YmE0Y2M4YzNkMjVlODQyYzRkZDQ2ZmY0MWQxMWIyMjJjNTFmOWU3MDMzMzI4NmVhMTFi");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-color: transparent;
            box-shadow: none;
            color: #29527a;
            font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
          }
          
          .toy-head h2 { font-family: "Nunito Bold", "Tahoma Bold", sans-serif; font-size: clamp(26px, 4.4vw, 40px); margin: 0; line-height: 1.1;}

          .showcase { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; align-items: center; }
          .showcase .blurb p { margin: 0 0 16px; font-size: 18px; line-height: 1.5; }

          .photo {
            position: relative; border-radius: var(--radius); overflow: hidden; background: #fff;
            border: 1px solid var(--line); box-shadow: var(--shadow-lg);
          }
          .photo img { width: 100%; height: auto; display: block; }

          .panels { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 26px; }
          .panel { border-radius: var(--radius); padding: 22px 24px; }
          .panel h3 { font-family: "Nunito Bold", "Tahoma Bold", sans-serif; display: flex; align-items: center; gap: 10px; font-size: 20px; margin: 0 0 10px; text-transform: capitalize; }
          .panel .ico { width: 34px; height: 34px; border-radius: 10px; display: grid; place-items: center; flex: none; }
          .love { background: #fff; border: 1px solid var(--line); box-shadow: var(--shadow); }
          .love .ico { background: #e0f0ff; }
          .tip { background: var(--primary); color: #fff; position: relative; overflow: hidden; }
          .tip h3 { font-family: "Nunito Bold", "Tahoma Bold", sans-serif; color: var(--yellow); }
          .tip .ico { background: var(--yellow); color: #1b263b; }
          .tip p { color: #f2f7fc; margin: 0; }
          .tip::after {
            content: "★";
            position: absolute;
            right: -6px;
            bottom: -14px;
            font-size: 90px;
            opacity: .15;
            transform: rotate(-12deg);
          }

          .gallery { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 22px; }
          .gallery figure { margin: 0; position: relative; border-radius: var(--radius-sm); overflow: hidden; border: 1px solid var(--line); box-shadow: var(--shadow); }
          .gallery img { width: 100%; height: auto; }

          .reviews { margin-top: 26px; }
          .rev { background: #fff; border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 16px 18px; box-shadow: var(--shadow); max-width: 600px; color: var(--text-color); }
          .rev .top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
          .rev .name { font-weight: 700; }
          .stars { color: var(--yellow); letter-spacing: 2px; font-size: 20px; }
          .rev p { margin: 0; font-size: 15px; }

          .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
          .reveal.in { opacity: 1; transform: translateY(0); }

          @media (max-width: 1200px) {
            .layout { display: block; gap: 0; padding-top: 0; }
            .toc-wrapper {
              position: sticky; top: 170px; z-index: 55; margin: 0 -20px 22px;
            }
            .toc {
              border-radius: 0;
              padding: 10px 0 10px 20px; box-shadow: 0 8px 16px -12px rgba(0,0,0,.4); border: 0; border-bottom: 1px solid var(--line);
              background: rgba(242,247,252,.94); backdrop-filter: blur(8px); overflow: hidden;
            }
            .toc h2, .toc .sub { display: none; }
            .toc ol { display: flex; gap: 8px; overflow-x: auto; padding: 4px 20px; scroll-snap-type: x proximity; scrollbar-width: none; }
            .toc ol::-webkit-scrollbar { display: none; }
            .toc li { margin: 0; scroll-snap-align: start; }
            .toc a { white-space: nowrap; background: #fff; border: 1px solid var(--line); padding: 8px 14px 8px 8px; gap: 8px; }
            .toc a .t { max-width: 128px; overflow: hidden; text-overflow: ellipsis; font-size: 14px; }
          }

          @media (max-width: 720px) {
            .showcase { grid-template-columns: 1fr; }
            .showcase .photo { order: -1; }
            .panels, .gallery { grid-template-columns: 1fr; }
          }

          /* --- Character Speech Bubbles & Themes --- */
.character-panel {
  display: flex;
  align-items: flex-end;
  gap: 16px;
  position: relative;
  margin-top: 20px;
}

.character-panel.reverse {
  flex-direction: row-reverse;
}

.character-mascot {
  width: 105px;
  height: auto;
  flex: none;
  filter: drop-shadow(0 6px 12px rgba(0,0,0,0.18));
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.character-panel:hover .character-mascot {
  transform: scale(1.08) rotate(-4deg);
}

.speech-bubble {
  position: relative;
  border-radius: var(--radius);
  padding: 20px 24px;
  box-shadow: var(--shadow);
  flex-grow: 1;
  border: none; /* Removes any border */
  height: 100%;
}

/* Speech Bubble Tails */
.speech-bubble::after {
  content: '';
  position: absolute;
  top: 30px;
  left: -10px;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-right-color: rgba(240, 246, 252, 0.75); /* Matches background for seamless look */
  border-left: 0;
}

.character-panel.reverse .speech-bubble::after {
  left: auto;
  right: -10px;
  top: auto;
  top: 30px;
  border-right: 0;
  border-left: 10px solid rgba(240, 246, 252, 0.75); /* Matches background */
}

/* --- Theme 1: Sheep Theme (Cozy Blue / Crafty) --- */
.speech-bubble.theme-sheep {
  background: rgba(240, 246, 252, 0.75); /* Semi-transparent blue */
  border: none;
  color: #1b263b;
}

.speech-bubble.theme-sheep h3 {
  color: #29527a;
}

/* --- Theme 2: Fox Theme (Warm Amber / Clever Tips) --- */
.speech-bubble.theme-fox {
  background: rgba(255, 248, 240, 0.85); /* Semi-transparent warm amber */
  border: none;
  color: #29180b;
}

.speech-bubble.theme-fox::after {
  border-right-color: rgba(255, 248, 240, 0.85); /* Matches background for left-pointing tail */
}

.character-panel.reverse .speech-bubble.theme-fox::after {
  border-left-color: rgba(255, 248, 240, 0.85); /* Matches background for right-pointing tail */
}

.speech-bubble.theme-fox h3 {
  color: #b45309;
}

/* --- Theme 3: Seal Theme (Ice Blue / Official Approval) --- */
.speech-bubble.theme-seal {
  background: #eef8ff;
  border-color: #0284c7;
  color: #0c4a6e;
}
.speech-bubble.theme-seal::after {
  border-right-color: #0284c7;
}
.speech-bubble.theme-seal h3 {
  color: #0369a1;
}

/* --- Theme 4: Robin Theme (Festive Red/Gold / Cheerful) --- */
.speech-bubble.theme-robin {
  background: rgba(255, 241, 242, 0.85); /* Semi-transparent festive red/gold tint */
  border: none;
  color: #4c0519;
}

.speech-bubble.theme-robin::after {
  border-right-color: rgba(255, 241, 242, 0.85); /* Matches background for left-pointing tail */
}

.character-panel.reverse .speech-bubble.theme-robin::after {
  border-left-color: rgba(255, 241, 242, 0.85); /* Matches background for right-pointing tail */
}

.speech-bubble.theme-robin h3 {
  color: #be123c;
}

.speech-bubble h3 {
  font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  margin: 0 0 8px;
  text-transform: capitalize;
}

.speech-bubble p {
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
}

.full-width-section .header-image {
  width: 100%;
  height: auto;
}

.top-full {
  padding: 0;
}
        `}
      </style>

      <div className="top-ten-wrapper">
        {headerType === 'image' && headerImage && (
          <div className="full-width-section top-full">
            <picture>
              {headerImageMobile && (
                <source
                  media="(max-width: 767px)"
                  srcSet={headerImageMobile}
                />
              )}
              <img src={headerImage} className="header-image" alt={headerImageAlt || 'Top Ten Toys'} />
            </picture>

            {headerBlurb && (
              <div
                dangerouslySetInnerHTML={{
                  __html: formatParagraphs(headerBlurb),
                }}
              />
            )}
          </div>
        )}

        {headerType === 'text' && (headerTitle) && (
          <div className="full-width-section">
            {headerTitle && <h2>{headerTitle}</h2>}

            {headerBlurb && (
              <div
                dangerouslySetInnerHTML={{
                  __html: formatParagraphs(headerBlurb),
                }}
              />
            )}
          </div>
        )}
        <div className="wrap">
          <div className="layout-container">
            

            <div className="layout">
              <div className="toc-wrapper">
                <nav className="toc" id="toc" aria-label="Jump to a toy">
                  <div className="title">{panelTitle}</div>
                  <p className="sub">{panelBlurb}</p>
                  <ol id="tocList">
                    {toys.map((t) => (
                      <li key={t.id}>
                        <a href={`#${t.id}`} data-target={t.id}>
                          <span className="t">{t.name}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>

              {/* Dynamic Content Sections */}
              <main className="content" id="content">
                {toys.map((t, index) => {
                  const rank = index + 1;
                  return (
                    <section className="toy" id={t.id} key={t.id} aria-labelledby={`${t.id}-title`}>
                      <div className="toy-head reveal">
                        <div className="rank" aria-hidden="true">{rank}</div>
                        <div>
                          <h2 id={`${t.id}-title`}>{t.name}</h2>
                        </div>
                      </div>

                      <div className="showcase reveal">
                        <div className="blurb">
                          <p>{t.blurb}</p>
                          {t.btn && t.btn !== "none" && (
                            <div style={{ marginTop: '16px' }}>
                              <CTAButton buttonStyle={t.btn} as="a" href={`${t.link}`} />
                            </div>
                          )}
                        </div>
                        <div className="photo">
                          {t.hero && <img src={t.hero} alt={t.heroalt} loading="lazy" width="800" height="600" />}
                        </div>
                      </div>

                      <div className="panels">
                        <div className="character-panel reveal">
                          <img
                            src={getCharacterImage(t.loveCharacter, 'sheep')}
                            alt={`${t.loveCharacter || 'sheep'} mascot`}
                            className="character-mascot"
                            loading="lazy"
                          />

                          <div className={`speech-bubble ${getCharacterTheme(t.loveCharacter, 'sheep')}`}>
                            <h3>
                              <span aria-hidden="true">★</span> Why we love it
                            </h3>
                            <p>{t.love}</p>
                          </div>
                        </div>

                        <div className="character-panel reverse reveal">
                          <img
                            src={getCharacterImage(t.tipCharacter, 'fox')}
                            alt={`${t.tipCharacter || 'fox'} mascot`}
                            className="character-mascot"
                            loading="lazy"
                          />

                          <div className={`speech-bubble ${getCharacterTheme(t.tipCharacter, 'fox')}`}>
                            <h3>
                              <span aria-hidden="true">✦</span> Top tip
                            </h3>
                            <p>{t.tip}</p>
                          </div>
                        </div>
                      </div>

                      {t.life && (
                        <div className="gallery reveal">
                          <figure>
                            <img src={t.life} alt={`${t.lifealt} action view`} loading="lazy" width="640" height="400" />
                          </figure>
                          <figure>
                            <img src={t.life2} alt={`${t.life2alt} detail view`} loading="lazy" width="640" height="400" />
                          </figure>
                        </div>
                      )}

                      {t.reviewName && t.reviewText && ( 
                      <div className="reviews reveal">
                        <div className="rev">
                          <div className="top">
                            <div className="name">{t.reviewName}</div>
                            <div className="stars" aria-label="5 out of 5">★★★★★</div>
                          </div>
                          <p>&ldquo;{t.reviewText}&rdquo;</p>
                        </div>
                      </div>
                      )}
                    </section>
                  );
                })}
              </main>
            </div>

            {(footerTitle || footerBlurb) && (
              <div className="full-width-section" style={{ paddingBottom: '60px' }}>
                {footerTitle && <div className="footer-lozenge-title">{footerTitle}</div>}
                {footerBlurb && 
                
                  <div
                    className="footer-blurb"
                    dangerouslySetInnerHTML={{
                      __html: formatParagraphs(footerBlurb),
                    }}
                  />
                
                }
              </div>
            )}

            {(footerSecondTitle || footerSecondBlurb) && (
              <div className="full-width-section" style={{ paddingBottom: '60px' }}>
                {footerSecondTitle && <div className="footer-lozenge-title">{footerSecondTitle}</div>}
                {footerSecondBlurb && 
                
                  <div
                    className="footer-blurb"
                    dangerouslySetInnerHTML={{
                      __html: formatParagraphs(footerSecondBlurb),
                    }}
                  />

                }
              </div>
            )}
          </div>
        </div>
      </div>
      <script
  dangerouslySetInnerHTML={{
    __html: `
      document.addEventListener("DOMContentLoaded", () => {

        // Bind Smooth Scrolling & Active State Highlighting
        const sections = document.querySelectorAll(".toy");
        const tocLinks = document.querySelectorAll(".toc a");

        tocLinks.forEach(link => {
          link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
              const topPos =
                targetSection.getBoundingClientRect().top +
                window.pageYOffset -
                84;

              window.scrollTo({
                top: topPos,
                behavior: "smooth"
              });
            }
          });
        });

        // Scrollspy
        const observerOptions = {
          root: null,
          rootMargin: "-20% 0px -60% 0px",
          threshold: 0
        };

        const observerCallback = (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {

              const id = entry.target.getAttribute("id");

              tocLinks.forEach(link => {

                if (link.getAttribute("href") === "#" + id) {
                  link.classList.add("active");

                  // On tablet/mobile, keep active item visible
                  if (window.matchMedia("(max-width: 1200px)").matches) {
                    link.scrollIntoView({
                      behavior: "smooth",
                      inline: "center",
                      block: "nearest"
                    });
                  }

                } else {
                  link.classList.remove("active");
                }

              });
            }
          });
        };

        const observer = new IntersectionObserver(
          observerCallback,
          observerOptions
        );

        sections.forEach(section => observer.observe(section));

        // Reveal animations
        const revealObs = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add("in");
                revealObs.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.12,
            rootMargin: "0px 0px -8% 0px"
          }
        );

        document
          .querySelectorAll(".reveal")
          .forEach(el => revealObs.observe(el));

      });
    `
  }}
/>
    </>
  );
};

TopTenToys.propTypes = {
  containerBackground: PropTypes.string,
  containerTextColor: PropTypes.string,
  separatorColor: PropTypes.string,
  textColor: PropTypes.string,
  oddRankBg: PropTypes.string,
  evenRankBg: PropTypes.string,
  oddRankColor: PropTypes.string,
  evenRankColor: PropTypes.string,
  lozengeColor: PropTypes.string,
  lozengeBg: PropTypes.string,
  footerTextColor: PropTypes.string,
  panelTitle: PropTypes.string,
  panelBlurb: PropTypes.string,
  headerTitle: PropTypes.string,
  headerBlurb: PropTypes.string,
  headerType: PropTypes.oneOf(['text', 'image']),
  headerImage: PropTypes.string,
  headerImageMobile: PropTypes.string,
  headerImageAlt: PropTypes.string,
  footerTitle: PropTypes.string,
  footerBlurb: PropTypes.string,
  footerSecondTitle: PropTypes.string,
  footerSecondBlurb: PropTypes.string,
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((acc, num) => {
  acc[`toy${num}Title`] = PropTypes.string;
  acc[`toy${num}Rank`] = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]);
  acc[`toy${num}Blurb`] = PropTypes.string;
  acc[`toy${num}Love`] = PropTypes.string;
  acc[`toy${num}Tip`] = PropTypes.string;
  acc[`toy${num}LoveCharacter`] = PropTypes.string;
  acc[`toy${num}TipCharacter`] = PropTypes.string;
  acc[`toy${num}Link`] = PropTypes.string;
  acc[`toy${num}Hero`] = PropTypes.string;
  acc[`toy${num}Heroalt`] = PropTypes.string;
  acc[`toy${num}Life`] = PropTypes.string;
  acc[`toy${num}Lifealt`] = PropTypes.string;
  acc[`toy${num}Life2`] = PropTypes.string;
  acc[`toy${num}Life2alt`] = PropTypes.string;
  acc[`toy${num}Button`] = PropTypes.string;
  acc[`toy${num}ReviewName`] = PropTypes.string;
  acc[`toy${num}ReviewText`] = PropTypes.string;
  return acc;
}, {})
};