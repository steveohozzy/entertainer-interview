
import PropTypes from "prop-types";
import { useEffect, useMemo, useRef, useState } from "react";

const DEFAULT_COLORS = [
  "#ed1c24", "#ffdf00", "#0072ce", "#46c785",
  "#ed1c24", "#ffdf00", "#0072ce", "#d94fc5",
  "#ed1c24", "#0072ce", "#ffdf00", "#46c785",
];

const DEFAULT_SECTIONS = [
  "BIG WIN", "TRY AGAIN", "£50 TO SPEND", "BONUS PRIZE",
  "FREE GIFT", "DOUBLE IT", "£75 TO SPEND", "OH NO!",
  "MYSTERY PRIZE", "JACKPOT", "£10 TO SPEND", "SPIN AGAIN",
];

function insertDangerSliceRandomly(sections, dangerSlice, seed) {
  const random = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  const candidates = [];

  for (let index = 0; index <= sections.length; index++) {
    const previous = sections[index - 1];
    const next = sections[index];

    if (
      (!previous || !previous.isDanger) &&
      (!next || !next.isDanger)
    ) {
      candidates.push(index);
    }
  }

  const insertAt = candidates.length
    ? candidates[Math.floor(random() * candidates.length)]
    : Math.floor(random() * (sections.length + 1));

  sections.splice(insertAt, 0, dangerSlice);
}

function getSections(props, dangerLevel = 0) {
  const count = Math.max(2, Math.min(12, Number(props.numberOfSections) || 12));

  const sections = Array.from({ length: count }, (_, index) => {
    const text = String(
      props["section" + (index + 1) + "Text"] ||
      DEFAULT_SECTIONS[index] ||
      "PRIZE"
    );

    const isRetry = /try again|spin again/i.test(text);

    return {
      text,
      color: String(
        props["section" + (index + 1) + "Color"] ||
        DEFAULT_COLORS[index % DEFAULT_COLORS.length]
      ),
      isLosing: !isRetry && (
        props["section" + (index + 1) + "IsLosing"] === true ||
        /oh no|danger|lose|lost|bad luck|no prize/i.test(text)
      ),
    };
  });

  const dangerSlices =
    (props.enableDangerZone ? 1 : 0) +
    (props.enableDoubleOrNothing ? dangerLevel : 0);

  const seedBase = ((dangerLevel + 1) * 7919 + count * 1049) % 233280;

  for (let index = 0; index < dangerSlices; index++) {
    insertDangerSliceRandomly(
      sections,
      {
        text: "OH NO! YOU LOSE!",
        color: "#b80f18",
        isLosing: true,
        isDanger: true,
      },
      seedBase + index * 137
    );
  }

  return sections;
}

function isRetrySection(section) {
  return Boolean(section && /try again|spin again/i.test(section.text));
}

function isLosingSection(section) {
  return Boolean(
    section &&
    !isRetrySection(section) &&
    section.isLosing
  );
}

function escapeHTML(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getWheelMarkup(sections) {
  const angle = 360 / sections.length;

  const gradient = sections
    .map((section, index) => {
      return section.color + " " + index * angle + "deg " + (index + 1) * angle + "deg";
    })
    .join(", ");

  const labels = sections
    .map((section, index) => {
      const middle = index * angle + angle / 2;

      return (
        '<div class="wfo-label" style="--label-angle:' + middle + 'deg">' +
          "<span>" + escapeHTML(section.text) + "</span>" +
        "</div>"
      );
    })
    .join("");

  return (
    '<div class="wfo-stage">' +
      '<div class="wfo-camera-frame">' +
        '<div class="wfo-wheel-shadow"></div>' +
        '<div class="wfo-wheel-rim">' +
          '<div class="wfo-rim-lights"></div>' +
          '<div class="wfo-wheel" style="--wfo-sections:' + sections.length + ';--wheel-gradient:conic-gradient(' + gradient + ')">' +
            '<div class="wfo-wheel-gloss"></div>' +
            '<div class="wfo-wheel-lines"></div>' +
            labels +
            '<div class="wfo-hub"><span></span></div>' +
          "</div>" +
        "</div>" +
        '<div class="wfo-pointer-housing"><div class="wfo-pointer"><span></span></div></div>' +
      "</div>" +
    "</div>"
  );
}

const wheelCSS = `
.wfo-root {
  --wfo-gold: #ffdf00;
  --wfo-gold-deep: #c99d00;
  --wfo-red: #ed1c24;
  --wfo-blue: #0072ce;
  --wfo-ink: #fff;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  width: 100%;
  min-height: 720px;
  padding: 46px 20px 54px;
  box-sizing: border-box;
  color: var(--wfo-ink);
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  background:
    radial-gradient(ellipse at 50% 28%, rgba(0, 114, 206, .5), transparent 48%),
    radial-gradient(ellipse at 12% 75%, rgba(237, 28, 36, .24), transparent 36%),
    radial-gradient(ellipse at 90% 85%, rgba(255, 223, 0, .12), transparent 35%),
    linear-gradient(145deg, #071638 0%, #09265a 48%, #06112b 100%);
}
.wfo-root *, .wfo-root *:before, .wfo-root *:after { box-sizing: border-box; }
.wfo-root:before, .wfo-root:after {
  content: "";
  position: absolute;
  z-index: -1;
  pointer-events: none;
  border-radius: 50%;
  filter: blur(1px);
}
.wfo-root:before {
  width: 650px; height: 650px; left: 50%; top: 145px;
  transform: translateX(-50%);
  border: 2px solid rgba(255, 223, 0, .15);
  box-shadow: 0 0 90px rgba(0, 114, 206, .2), inset 0 0 70px rgba(255,255,255,.025);
}
.wfo-root:after {
  width: 440px; height: 440px; left: 50%; top: 250px;
  transform: translateX(-50%);
  border: 1px solid rgba(255,255,255,.08);
}
.wfo-heading { margin: 0 auto 9px; max-width: 800px; }
.wfo-title {
  margin: 0;
  color: #ffdf00;
  font-size: clamp(30px, 5vw, 58px);
  line-height: 1;
  letter-spacing: .055em;
  font-weight: 1000;
  text-transform: uppercase;
  text-shadow: 0 3px 0 #b80f18, 0 6px 0 #7e0a13, 0 9px 22px rgba(0,0,0,.5), 0 0 28px rgba(255,223,0,.24);
}
.wfo-subtitle {
  margin: 15px 0 0;
  color: #fff;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: .24em;
  text-transform: uppercase;
}
.wfo-stage {
  position: relative;
  width: min(100%, 660px);
  margin: 22px auto 0;
  padding: 30px 12px 0;
  perspective: 1100px;
}
.wfo-camera-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  transform: scale(1);
  transform-origin: 50% 8%;
  transition: transform 1.15s cubic-bezier(.2,.75,.2,1), filter 1.15s ease;
  filter: drop-shadow(0 28px 26px rgba(0,0,0,.46));
}
.wfo-root.wfo-zooming .wfo-camera-frame {
  transform: scale(1.3) translateY(3%);
  filter: drop-shadow(0 35px 30px rgba(0,0,0,.58));
}
@media (max-width: 560px) {
  .wfo-root.wfo-zooming .wfo-camera-frame {
    transform: scale(1.16) translateY(2%);
  }
}
.wfo-wheel-shadow {
  position: absolute;
  inset: 6% 5% 3%;
  border-radius: 50%;
  background: #030510;
  box-shadow: 0 22px 30px rgba(0,0,0,.55);
}
.wfo-wheel-rim {
  position: absolute;
  inset: 0;
  padding: 2.7%;
  border-radius: 50%;
  background: linear-gradient(135deg, #fff9b8 0%, #ffdf00 13%, #fff 24%, #e9a900 39%, #ffdf00 53%, #c99d00 70%, #fff9b8 84%, #e09a00 100%);
  box-shadow:
    inset 0 2px 2px rgba(255,255,255,.95),
    inset 0 -8px 10px rgba(34,13,3,.5),
    0 0 0 2px #b80f18,
    0 0 0 5px #ffdf00,
    0 0 24px rgba(255,223,0,.28);
}
.wfo-root.wfo-zooming .wfo-wheel-rim {
  animation: wfo-suspense-glow .55s ease-in-out infinite alternate;
}
@keyframes wfo-suspense-glow {
  from {
    box-shadow:
      inset 0 2px 2px rgba(255,255,255,.95),
      inset 0 -8px 10px rgba(34,13,3,.5),
      0 0 0 2px #b80f18,
      0 0 0 5px #ffdf00,
      0 0 24px rgba(255,223,0,.35);
  }
  to {
    box-shadow:
      inset 0 2px 2px rgba(255,255,255,.95),
      inset 0 -8px 10px rgba(34,13,3,.5),
      0 0 0 3px #ed1c24,
      0 0 0 7px #ffdf00,
      0 0 42px rgba(255,223,0,.85),
      0 0 70px rgba(237,28,36,.35);
  }
}
.wfo-rim-lights {
  position: absolute;
  z-index: 4;
  inset: 1.1%;
  border-radius: 50%;
  border: 3px dotted #fff;
  box-shadow: 0 0 6px #fff, inset 0 0 6px rgba(255,255,255,.8);
  pointer-events: none;
}
.wfo-wheel {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
  background: var(--wheel-gradient);
  border: 2px solid rgba(255,255,255,.9);
  box-shadow: inset 0 0 0 4px rgba(25,16,39,.58), inset 0 0 35px rgba(0,0,0,.28);
  transform: rotate(0deg);
  transition: transform 7.5s cubic-bezier(.08,.72,.06,1);
  container-type: inline-size;
  will-change: transform;
  touch-action: none;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
}
.wfo-wheel:active { cursor: grabbing; }
.wfo-wheel:before {
  content: "";
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 18%, rgba(255,255,255,.25), transparent 32%), radial-gradient(circle, transparent 48%, rgba(0,0,0,.3) 100%);
  pointer-events: none;
}
.wfo-wheel-gloss {
  position: absolute;
  z-index: 2;
  inset: 0;
  border-radius: 50%;
  background: linear-gradient(120deg, rgba(255,255,255,.23), transparent 27%, transparent 60%, rgba(0,0,0,.18));
  pointer-events: none;
}
.wfo-wheel-lines {
  position: absolute;
  z-index: 2;
  inset: 0;
  border-radius: 50%;
  background: repeating-conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent calc((360deg / var(--wfo-sections)) - 0.6deg),
    rgba(255, 255, 255, .85) calc((360deg / var(--wfo-sections)) - 0.6deg),
    rgba(255, 255, 255, .85) calc(360deg / var(--wfo-sections))
  );
  -webkit-mask: radial-gradient(circle, transparent 0 88%, #000 88.5% 100%);
  mask: radial-gradient(circle, transparent 0 88%, #000 88.5% 100%);
  opacity: .5;
  pointer-events: none;
}
.wfo-label {
  position: absolute;
  z-index: 3;
  left: 50%;
  top: 50%;
  width: 29%;
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%) rotate(var(--label-angle)) translateY(-32cqw) rotate(90deg);
  transform-origin: center;
  pointer-events: none;
}
.wfo-label span {
  display: block;
  max-width: 100%;
  color: #fff;
  font-size: clamp(9px, 2.1cqw, 16px);
  font-weight: 1000;
  line-height: 1.05;
  letter-spacing: .015em;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 2px 2px rgba(0,0,0,.5), 0 0 5px rgba(0,0,0,.28);
  overflow-wrap: anywhere;
}
.wfo-hub {
  position: absolute;
  z-index: 5;
  left: 50%;
  top: 50%;
  width: 18%;
  aspect-ratio: 1;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, #fff 0%, #ffdf00 24%, #fff9b8 40%, #e09a00 62%, #fff 80%, #b80f18 100%);
  box-shadow: 0 4px 9px rgba(0,0,0,.5), inset 0 2px 3px rgba(255,255,255,.95), inset 0 -4px 5px rgba(56,21,4,.45);
  display: grid;
  place-items: center;
}
.wfo-hub span {
  width: 63%;
  height: 63%;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 25%, #fff 0, #fff9b8 12%, #ffdf00 38%, #b80f18 72%, #0072ce 100%);
  border: 2px solid rgba(255,255,255,.85);
  box-shadow: inset 0 0 0 3px rgba(82,43,13,.25), 0 0 0 2px rgba(255,255,255,.3);
}
.wfo-pointer-housing {
  position: absolute;
  z-index: 8;
  top: 0;
  left: 50%;
  width: 9%;
  height: 11%;
  transform: translateX(-50%);
  transform-origin: 50% 0;
  filter: drop-shadow(0 3px 3px rgba(0,0,0,.55));
  pointer-events: none;
}
.wfo-pointer {
  position: absolute;
  left: 50%;
  top: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-50%);
  transform-origin: 50% 0;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  background: linear-gradient(90deg, #b80f18 0%, #ed1c24 25%, #fff 50%, #ffdf00 72%, #b80f18 100%);
}
.wfo-pointer span {
  position: absolute;
  left: 50%;
  top: 0;
  width: 38%;
  height: 70%;
  transform: translateX(-50%);
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  background: linear-gradient(90deg, #fff9b8, #fff 50%, #ffdf00);
}
.wfo-pointer-housing.wfo-pointer-ticking .wfo-pointer {
  animation: wfo-pointer-tick 100ms ease-out;
}
@keyframes wfo-pointer-tick {
  0% { transform: translateX(-50%) rotate(0deg); }
  35% { transform: translateX(-50%) rotate(12deg); }
  70% { transform: translateX(-50%) rotate(-5deg); }
  100% { transform: translateX(-50%) rotate(0deg); }
}
.wfo-controls { position: relative; z-index: 10; margin: 12px auto 0; }
.wfo-control-buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.wfo-spin {
  appearance: none;
  min-width: 220px;
  padding: 17px 38px;
  border: 3px solid #fff;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(180deg, #ff4248 0%, #ed1c24 55%, #b80f18 100%);
  box-shadow: 0 5px 0 #820b12, 0 9px 20px rgba(0,0,0,.38), inset 0 2px 2px rgba(255,255,255,.4);
  font-size: 17px;
  font-weight: 1000;
  letter-spacing: .1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform .15s ease, filter .15s ease, box-shadow .15s ease;
}
.wfo-spin:hover:not(:disabled) { transform: translateY(-2px); filter: brightness(1.12); }
.wfo-spin:active:not(:disabled) { transform: translateY(3px); box-shadow: 0 2px 0 #820b12, 0 5px 12px rgba(0,0,0,.3); }
.wfo-spin:disabled { cursor: wait; opacity: .9; }
.wfo-hint {
  margin: 19px 0 0;
  color: #ffdf00;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: .2em;
  text-transform: uppercase;
}
.wfo-modal {
  position: fixed;
  z-index: 999999;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(3,6,19,.84);
  backdrop-filter: blur(9px);
  opacity: 0;
  visibility: hidden;
  transition: opacity .3s ease, visibility .3s ease;
}
.wfo-modal.wfo-open { opacity: 1; visibility: visible; }
.wfo-modal-card {
  position: relative;
  width: min(100%, 450px);
  max-height: 90vh;
  overflow-y: auto;
  padding: 42px 28px 32px;
  border: 3px solid #ffdf00;
  border-radius: 25px;
  color: #fff;
  background:
    radial-gradient(circle at 50% 0, rgba(0,114,206,.8) 0, transparent 55%),
    linear-gradient(145deg, #123b79 0%, #09265a 52%, #071638 100%);
  box-shadow: 0 0 0 6px rgba(237,28,36,.2), 0 25px 80px rgba(0,0,0,.6), inset 0 1px rgba(255,255,255,.3);
  transform: translateY(20px) scale(.94);
  transition: transform .35s cubic-bezier(.2,.8,.2,1);
}
.wfo-open .wfo-modal-card { transform: translateY(0) scale(1); }
.wfo-modal-card:before {
  content: "★  ✦  ★  ✦  ★";
  display: block;
  margin-bottom: 16px;
  color: #ffdf00;
  font-size: 23px;
  letter-spacing: .25em;
}
.wfo-result-kicker {
  margin: 0 0 10px;
  color: #ffdf00;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: .24em;
  text-transform: uppercase;
}
.wfo-result-title {
  margin: 0;
  font-size: clamp(28px, 6vw, 42px);
  line-height: 1.05;
  font-weight: 1000;
  text-transform: uppercase;
  overflow-wrap: anywhere;
  text-shadow: 0 3px 0 rgba(0,0,0,.3);
}
.wfo-result-prize {
  margin: 18px 0 26px;
  color: #ffdf00;
  font-size: 22px;
  font-weight: 900;
}
.wfo-result-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
.wfo-modal-button {
  appearance: none;
  padding: 12px 20px;
  border: 2px solid #fff;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(#ff4248, #ed1c24);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: .08em;
  text-transform: uppercase;
  cursor: pointer;
}
.wfo-modal-button.wfo-secondary {
  color: #fff;
  background: rgba(255,255,255,.08);
  border-color: rgba(255,255,255,.5);
}
.wfo-root button:focus-visible, .wfo-modal button:focus-visible { outline: 3px solid #ffdf00; outline-offset: 4px; }
.wfo-feature-status {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  width: min(100%, 660px);
  margin: 18px auto 0;
}
.wfo-feature-badge {
  padding: 8px 13px;
  border: 1px solid rgba(255,223,0,.5);
  border-radius: 999px;
  color: #ffdf00;
  background: rgba(0,0,0,.24);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: .08em;
  text-transform: uppercase;
}
.wfo-root.wfo-danger-active { animation: wfo-danger-flash .3s ease-in-out 3; }
.wfo-root.wfo-danger-active .wfo-title {
  color: #ff4248;
  text-shadow: 0 0 24px rgba(237,28,36,.8);
}
@keyframes wfo-danger-flash {
  0%, 100% { filter: none; }
  50% { filter: brightness(1.45); }
}
.wfo-risk-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 14px 0 22px;
}
.wfo-risk-button {
  appearance: none;
  padding: 13px 20px;
  border: 2px solid #ffdf00;
  border-radius: 999px;
  color: #071638;
  background: linear-gradient(#fff9b8,#ffdf00);
  font-size: 12px;
  font-weight: 1000;
  letter-spacing: .08em;
  cursor: pointer;
}
.wfo-risk-button.wfo-risk-danger {
  color: #fff;
  border-color: #ff8b91;
  background: linear-gradient(#ff4248,#b80f18);
}
.wfo-risk-button:disabled { opacity: .55; cursor: not-allowed; }
.wfo-prize-collection {
  margin: 20px 0;
  padding: 16px;
  border: 1px solid rgba(255,223,0,.45);
  border-radius: 14px;
  background: rgba(0,0,0,.2);
  text-align: left;
}
.wfo-prize-collection h4 {
  margin: 0 0 10px;
  color: #ffdf00;
  text-align: center;
  text-transform: uppercase;
}
.wfo-prize-collection ul { margin: 0; padding-left: 22px; }
.wfo-prize-collection li { margin: 6px 0; color: #fff; }

@media (max-width: 560px) {
  .wfo-root { min-height: 0; padding: 34px 10px 42px; }
  .wfo-stage { padding: 26px 7px 0; margin-top: 14px; }
  .wfo-wheel-rim { padding: 2.3%; }
  .wfo-label { width: 31%; height: 13%; transform: translate(-50%, -50%) rotate(var(--label-angle)) translateY(-31cqw) rotate(90deg); }
  .wfo-label span { font-size: clamp(8px, 2.35cqw, 13px); }
  .wfo-spin { min-width: 190px; padding: 15px 27px; font-size: 15px; }
  .wfo-subtitle { font-size: 10px; letter-spacing: .16em; }
  .wfo-pointer-housing { width: 9%; height: 11%; }
}
@media (prefers-reduced-motion: reduce) {
  .wfo-wheel, .wfo-camera-frame, .wfo-modal, .wfo-modal-card,
  .wfo-pointer-housing.wfo-pointer-ticking .wfo-pointer,
  .wfo-root.wfo-zooming .wfo-wheel-rim {
    transition-duration: .01ms !important;
    animation-duration: .01ms !important;
  }
}
`;

function getExportHTML(props) {
  const sections = getSections(props);
  const safeSections = JSON.stringify(sections).replace(/</g, "\\u003c");
  const duration = Math.max(3, Math.min(15, Number(props.spinDuration) || 7.5));
  const title = escapeHTML(props.wheelTitle || "THE ENTERTAINER");
  const subtitle = escapeHTML(props.wheelSubtitle || "LET'S PLAY FOR PRIZES!");
  const spinText = escapeHTML(props.spinButtonText || "LET'S PLAY!");
  const resultHeading = escapeHTML(props.resultHeading || "THE MOMENT OF TRUTH");
  const soundEnabled = props.soundEnabled !== false;
  const enableDangerZone = Boolean(props.enableDangerZone);
  const enableJackpotStreak = Boolean(props.enableJackpotStreak);
  const enableDoubleOrNothing = Boolean(props.enableDoubleOrNothing);
  const background = escapeHTML(props.modulebackgroundcolor || "#071638");

  return `
<style>${wheelCSS.replace(/#071638/g, background)}</style>
<div class="wfo-root">
  <header class="wfo-heading">
    <h2 class="wfo-title">${title}</h2>
    <p class="wfo-subtitle">${subtitle}</p>
  </header>
  ${getWheelMarkup(sections)}
  <div class="wfo-controls">
    <div class="wfo-control-buttons">
      <button type="button" class="wfo-spin">${spinText}</button>
    </div>
    <p class="wfo-hint">ONE SPIN. BIG SURPRISE.</p>
  </div>
  <div class="wfo-feature-status">
    ${enableDangerZone ? '<span class="wfo-feature-badge wfo-danger-count">Danger Zone: 1 losing slice</span>' : ""}
    ${enableJackpotStreak ? '<span class="wfo-feature-badge wfo-streak-count">Streak: 0</span>' : ""}
    ${enableDoubleOrNothing ? '<span class="wfo-feature-badge wfo-risk-count">Risk level: 0</span>' : ""}
    <span class="wfo-feature-badge wfo-collection-count">Prizes collected: 0</span>
  </div>
  <div class="wfo-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Your prize">
    <div class="wfo-modal-card">
      <p class="wfo-result-kicker">${resultHeading}</p>
      <h3 class="wfo-result-title"></h3>
      <p class="wfo-result-prize"></p>
      <div class="wfo-prize-collection" hidden>
        <h4>Your prizes so far</h4>
        <ul class="wfo-prize-list"></ul>
      </div>
      <div class="wfo-risk-actions" hidden>
        <button type="button" class="wfo-risk-button wfo-risk-danger wfo-risk-it">RISK IT</button>
      </div>
      <div class="wfo-result-actions">
        <button type="button" class="wfo-modal-button wfo-modal-spin" hidden>SPIN AGAIN</button>
        <button type="button" class="wfo-modal-button wfo-secondary wfo-modal-reset">RESET</button>
      </div>
    </div>
  </div>
</div>
<script>
(function () {
  var script = document.currentScript;
  var root = script && script.previousElementSibling;

  while (root && !root.classList.contains("wfo-root")) {
    root = root.previousElementSibling;
  }

  if (!root || root.getAttribute("data-wfo-ready") === "true") return;
  root.setAttribute("data-wfo-ready", "true");

  var sections = ${safeSections};
  var initialSections = sections.map(function (section) {
    return Object.assign({}, section);
  });
  var duration = ${duration};
  var soundEnabled = ${soundEnabled};
  var enableDangerZone = ${enableDangerZone};
  var enableJackpotStreak = ${enableJackpotStreak};
  var enableDoubleOrNothing = ${enableDoubleOrNothing};
  var wheel = root.querySelector(".wfo-wheel");
  var spinButton = root.querySelector(".wfo-spin");
  var resetButton = root.querySelector(".wfo-reset");
  var modalResetButton = root.querySelector(".wfo-modal-reset");
  var modalSpinButton = root.querySelector(".wfo-modal-spin");
  var pointer = root.querySelector(".wfo-pointer-housing");
  var modal = root.querySelector(".wfo-modal");
  var resultTitle = root.querySelector(".wfo-result-title");
  var resultPrize = root.querySelector(".wfo-result-prize");
  var hint = root.querySelector(".wfo-hint");
  var riskActions = root.querySelector(".wfo-risk-actions");
  var riskButton = root.querySelector(".wfo-risk-it");
  var collectionBox = root.querySelector(".wfo-prize-collection");
  var collectionList = root.querySelector(".wfo-prize-list");
  var collectionCount = root.querySelector(".wfo-collection-count");
  var dangerCount = root.querySelector(".wfo-danger-count");
  var riskCount = root.querySelector(".wfo-risk-count");
  var streakCount = root.querySelector(".wfo-streak-count");
  var rotation = 0;
  var spinning = false;
  var tickTimer = null;
  var pointerFrame = null;
  var spinTimer = null;
  var zoomTimer = null;
  var dangerFlashTimer = null;
  var audioContext = null;
  var dangerLevel = 0;
  var streak = 0;
  var prizes = [];
  var riskPrize = null;
  var riskMode = false;
  var riskPending = false;

  function clearSpinTimers() {
    if (tickTimer) {
      window.clearTimeout(tickTimer);
      tickTimer = null;
    }

    if (pointerFrame) {
      window.cancelAnimationFrame(pointerFrame);
      pointerFrame = null;
    }

    if (spinTimer) {
      window.clearTimeout(spinTimer);
      spinTimer = null;
    }

    if (zoomTimer) {
      window.clearTimeout(zoomTimer);
      zoomTimer = null;
    }

    if (dangerFlashTimer) {
      window.clearTimeout(dangerFlashTimer);
      dangerFlashTimer = null;
    }
  }

  function tick() {
    if (!soundEnabled) return;

    try {
      var AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;

      audioContext = audioContext || new AudioContextClass();
      if (audioContext.state === "suspended") audioContext.resume();

      var now = audioContext.currentTime;
      var osc = audioContext.createOscillator();
      var gain = audioContext.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(1500, now);
      osc.frequency.exponentialRampToValueAtTime(480, now + .025);
      gain.gain.setValueAtTime(.0001, now);
      gain.gain.exponentialRampToValueAtTime(.12, now + .003);
      gain.gain.exponentialRampToValueAtTime(.0001, now + .035);
      osc.connect(gain);
      gain.connect(audioContext.destination);
      osc.start(now);
      osc.stop(now + .04);
    } catch (e) {}
  }

  function runTicks(startTime, totalTime) {
    if (!spinning) return;

    var elapsed = Date.now() - startTime;
    if (elapsed >= totalTime) return;

    tick();

    var progress = elapsed / totalTime;
    var delay = 45 + Math.pow(progress, 2.5) * 340;

    tickTimer = window.setTimeout(function () {
      runTicks(startTime, totalTime);
    }, delay);
  }

  function getRenderedAngle() {
    var transform = window.getComputedStyle(wheel).transform;
    if (!transform || transform === "none") return 0;

    var match = transform.match(/matrix\\(([^)]+)\\)/);
    if (!match) return 0;

    var parts = match[1].split(",");
    return Math.atan2(Number(parts[1]), Number(parts[0])) * 180 / Math.PI;
  }

  function startPointerTicks(startRotation, sectionCount) {
    if (!pointer || !wheel) return;

    if (pointerFrame) {
      window.cancelAnimationFrame(pointerFrame);
      pointerFrame = null;
    }

    var previousAngle = getRenderedAngle();
    var unwrappedAngle = startRotation;
    var slice = 360 / (sectionCount || sections.length);
    var lastBoundary = Math.floor(unwrappedAngle / slice);

    function animatePointer() {
      if (!spinning) {
        pointerFrame = null;
        return;
      }

      var currentAngle = getRenderedAngle();
      var delta = currentAngle - previousAngle;

      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;

      unwrappedAngle += delta;
      previousAngle = currentAngle;

      var currentBoundary = Math.floor(unwrappedAngle / slice);

      while (lastBoundary < currentBoundary) {
        lastBoundary++;

        pointer.classList.remove("wfo-pointer-ticking");
        void pointer.offsetWidth;
        pointer.classList.add("wfo-pointer-ticking");
      }

      pointerFrame = window.requestAnimationFrame(animatePointer);
    }

    pointerFrame = window.requestAnimationFrame(animatePointer);
  }

  function isRetrySection(section) {
    return Boolean(section && /try again|spin again/i.test(section.text));
  }

  function isLosing(section) {
    return Boolean(
      section &&
      !isRetrySection(section) &&
      section.isLosing
    );
  }

  function updateStatus() {
    if (dangerCount) {
      dangerCount.textContent =
        "Danger Zone: " +
        sections.filter(function (section) {
          return section.isDanger;
        }).length +
        " losing slices";
    }

    if (riskCount) riskCount.textContent = "Risk level: " + dangerLevel;
    if (streakCount) streakCount.textContent = "Streak: " + streak;
    if (collectionCount) collectionCount.textContent = "Prizes collected: " + prizes.length;
  }

  function updateCollection() {
    collectionList.innerHTML = "";

    prizes.forEach(function (prize) {
      var item = document.createElement("li");
      item.textContent = prize;
      collectionList.appendChild(item);
    });

    collectionBox.hidden = prizes.length === 0;
    updateStatus();
  }

  function renderWheelSections() {
    var angle = 360 / sections.length;

    var gradient = sections.map(function (section, index) {
      return section.color + " " + index * angle + "deg " + (index + 1) * angle + "deg";
    }).join(", ");

    wheel.style.setProperty("--wfo-sections", sections.length);
    wheel.style.setProperty("--wheel-gradient", "conic-gradient(" + gradient + ")");

    var oldLabels = wheel.querySelectorAll(".wfo-label");

    Array.prototype.forEach.call(oldLabels, function (label) {
      label.remove();
    });

    var hub = wheel.querySelector(".wfo-hub");

    sections.forEach(function (section, index) {
      var label = document.createElement("div");
      var span = document.createElement("span");

      label.className = "wfo-label";
      label.style.setProperty("--label-angle", (index * angle + angle / 2) + "deg");
      span.textContent = section.text;
      label.appendChild(span);
      wheel.insertBefore(label, hub);
    });

    updateStatus();
  }

  function addDangerSlice() {
    dangerLevel++;

    var dangerSlice = {
      text: "OH NO! LOSE ALL PRIZES",
      color: "#b80f18",
      isLosing: true,
      isDanger: true
    };

    var candidates = [];

    for (var index = 0; index <= sections.length; index++) {
      var previous = sections[index - 1];
      var next = sections[index];

      if (
        (!previous || !previous.isDanger) &&
        (!next || !next.isDanger)
      ) {
        candidates.push(index);
      }
    }

    var insertAt = candidates.length
      ? candidates[Math.floor(Math.random() * candidates.length)]
      : Math.floor(Math.random() * (sections.length + 1));

    sections.splice(insertAt, 0, dangerSlice);
    renderWheelSections();
  }

  function showModal() {
    modal.classList.add("wfo-open");
    modal.setAttribute("aria-hidden", "false");
    if (modalResetButton) modalResetButton.focus();
  }

  function closeModal() {
    modal.classList.remove("wfo-open");
    modal.setAttribute("aria-hidden", "true");
  }

  function finishResult(landed) {
    var wasRisk = riskMode;
    var retry = isRetrySection(landed);
    var losing = isLosing(landed);

    if (modalSpinButton) modalSpinButton.hidden = !retry;

    if (retry) {
      resultTitle.textContent = landed.text;
      resultPrize.textContent = wasRisk
        ? "Your prize bank is safe. Spin again to keep risking your prizes!"
        : "Your prize bank is safe. Spin again to win another prize!";

      riskPending = wasRisk;
      riskActions.hidden = true;
      updateCollection();
      showModal();
      return;
    }

    if (losing) {
      streak = 0;

      if (wasRisk || enableDangerZone || enableDoubleOrNothing) {
        prizes = [];
        resultTitle.textContent = "OH NO! YOU LOST EVERYTHING!";
        resultPrize.textContent = "You lose all prizes. Everything you've collected is gone.";
        root.classList.add("wfo-danger-active");

        dangerFlashTimer = window.setTimeout(function () {
          root.classList.remove("wfo-danger-active");
          dangerFlashTimer = null;
        }, 1100);
      } else {
        resultTitle.textContent = landed.text;
        resultPrize.textContent = "No prize this time. Try again!";
      }

      riskMode = false;
      riskPending = false;
      riskPrize = null;
      riskActions.hidden = true;

      updateCollection();
      showModal();
      return;
    }

    resultTitle.textContent = landed.text;
    resultPrize.textContent = wasRisk
      ? "You've won " + landed.text + "! It's been added to your prize bank."
      : "You've won " + landed.text + "!";

    prizes.push(landed.text);
    riskPrize = { text: landed.text };
    riskMode = false;
    riskPending = false;
    riskActions.hidden = !enableDoubleOrNothing;

    if (enableJackpotStreak && !wasRisk) streak++;

    updateCollection();
    showModal();
  }

  function spin() {
    if (spinning) return;

    var isRiskSpin = riskMode;

    spinning = true;
    spinButton.disabled = true;
    if (resetButton) resetButton.disabled = true;
    if (modalResetButton) modalResetButton.disabled = true;
    if (modalSpinButton) modalSpinButton.disabled = true;
    closeModal();

    if (riskActions) riskActions.hidden = true;
    if (hint) hint.textContent = isRiskSpin ? "RISKING YOUR PRIZES..." : "HOLD YOUR NERVE...";

    var targetIndex = Math.floor(Math.random() * sections.length);
    var slice = 360 / sections.length;
    var targetOffset = (360 - (targetIndex * slice + slice / 2) + 360) % 360;
    var currentOffset = ((rotation % 360) + 360) % 360;
    var adjustment = (targetOffset - currentOffset + 360) % 360;
    var turns = 5 + Math.floor(Math.random() * 3);
    var finalRotation = rotation + turns * 360 + adjustment;
    var totalTime = duration * 1000;

    root.classList.remove("wfo-zooming");

    if (zoomTimer) window.clearTimeout(zoomTimer);

    zoomTimer = window.setTimeout(function () {
      zoomTimer = null;
      if (spinning) root.classList.add("wfo-zooming");
    }, totalTime * .66);

    var startTime = Date.now();

    runTicks(startTime, totalTime);
    startPointerTicks(rotation, sections.length);

    wheel.style.transitionDuration = duration + "s";
    void wheel.offsetWidth;
    wheel.style.transform = "rotate(" + finalRotation + "deg)";
    rotation = finalRotation;

    if (spinTimer) window.clearTimeout(spinTimer);

    spinTimer = window.setTimeout(function () {
      spinTimer = null;
      spinning = false;
      spinButton.disabled = false;
      if (resetButton) resetButton.disabled = false;
      if (modalResetButton) modalResetButton.disabled = false;
      if (modalSpinButton) modalSpinButton.disabled = false;
      root.classList.remove("wfo-zooming");

      if (zoomTimer) {
        window.clearTimeout(zoomTimer);
        zoomTimer = null;
      }

      if (tickTimer) {
        window.clearTimeout(tickTimer);
        tickTimer = null;
      }

      if (pointerFrame) {
        window.cancelAnimationFrame(pointerFrame);
        pointerFrame = null;
      }

      if (pointer) pointer.classList.remove("wfo-pointer-ticking");
      if (hint) hint.textContent = "AND THE PRIZE IS...";

      finishResult(sections[targetIndex]);
    }, totalTime + 950);
  }

  function resetGame() {
    if (spinning) return;

    clearSpinTimers();

    spinning = false;
    rotation = 0;
    dangerLevel = 0;
    streak = 0;
    prizes = [];
    riskPrize = null;
    riskMode = false;
    riskPending = false;

    sections = initialSections.map(function (section) {
      return Object.assign({}, section);
    });

    spinButton.disabled = false;
    if (resetButton) resetButton.disabled = false;
    if (modalResetButton) modalResetButton.disabled = false;
    if (modalSpinButton) modalSpinButton.disabled = false;

    root.classList.remove("wfo-zooming", "wfo-danger-active");

    if (pointer) pointer.classList.remove("wfo-pointer-ticking");

    closeModal();

    resultTitle.textContent = "";
    resultPrize.textContent = "";

    if (riskActions) riskActions.hidden = true;
    if (modalSpinButton) modalSpinButton.hidden = true;

    wheel.style.transitionDuration = "0s";
    wheel.style.transform = "rotate(0deg)";
    void wheel.offsetWidth;

    window.requestAnimationFrame(function () {
      wheel.style.transitionDuration = "";
    });

    if (hint) hint.textContent = "ONE SPIN. BIG SURPRISE.";

    updateCollection();
  }

  if (enableDoubleOrNothing && riskButton && riskActions) {
    riskButton.addEventListener("click", function () {
      if (riskPending || riskMode || spinning || !riskPrize) return;

      riskMode = true;
      riskPending = true;
      riskActions.hidden = true;
      closeModal();

      addDangerSlice();

      wheel.style.transitionDuration = duration + "s";
      wheel.style.transform = "rotate(" + rotation + "deg)";
      void wheel.offsetWidth;

      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          if (!spinning && riskMode) spin();
        });
      });
    });
  }

  spinButton.addEventListener("click", spin);

  if (modalSpinButton) {
    modalSpinButton.addEventListener("click", function () {
      closeModal();
      spin();
    });
  }

  if (resetButton) resetButton.addEventListener("click", resetGame);
  if (modalResetButton) modalResetButton.addEventListener("click", resetGame);

  modal.addEventListener("click", function (event) {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("wfo-open")) closeModal();
  });

  updateStatus();
})();
</script>`;
}

export const WheelOfFortune = (props) => {
  const [dangerLevel, setDangerLevel] = useState(0);

  const sections = useMemo(
    () => getSections(props, dangerLevel),
    [
      dangerLevel,
      props.numberOfSections,
      props.enableDangerZone,
      props.enableDoubleOrNothing,
      ...Array.from({ length: 12 }, (_, index) => props["section" + (index + 1) + "Text"]),
      ...Array.from({ length: 12 }, (_, index) => props["section" + (index + 1) + "Color"]),
      ...Array.from({ length: 12 }, (_, index) => props["section" + (index + 1) + "IsLosing"]),
    ]
  );

  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [zooming, setZooming] = useState(false);
  const [winner, setWinner] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [hintText, setHintText] = useState("ONE SPIN. BIG SURPRISE.");
  const [streak, setStreak] = useState(0);
  const [prizeCollection, setPrizeCollection] = useState([]);
  const [prizeMessage, setPrizeMessage] = useState("");
  const [resultTitle, setResultTitle] = useState("");
  const [dangerActive, setDangerActive] = useState(false);
  const [riskPending, setRiskPending] = useState(false);
  const [riskMode, setRiskMode] = useState(false);
  const [riskSpinRequested, setRiskSpinRequested] = useState(false);
  const [dragging, setDragging] = useState(false);

  const wheelRef = useRef(null);
  const pointerRef = useRef(null);
  const tickTimerRef = useRef(null);
  const pointerFrameRef = useRef(null);
  const spinTimerRef = useRef(null);
  const zoomTimerRef = useRef(null);
  const dangerTimerRef = useRef(null);
  const audioRef = useRef(null);
  const reducedMotion = useRef(false);
  const spinningRef = useRef(false);
  const dragStartRef = useRef(null);
  const suppressWheelClickRef = useRef(false);
  const riskModeRef = useRef(false);
  const riskPrizeRef = useRef(null);
  const rotationRef = useRef(0);
  const sectionsRef = useRef(sections);

  sectionsRef.current = sections;
  rotationRef.current = rotation;

  const cmsHTML = useMemo(() => getExportHTML(props), [
    props.numberOfSections,
    ...Array.from({ length: 12 }, (_, index) => props["section" + (index + 1) + "Text"]),
    ...Array.from({ length: 12 }, (_, index) => props["section" + (index + 1) + "Color"]),
    ...Array.from({ length: 12 }, (_, index) => props["section" + (index + 1) + "IsLosing"]),
    props.wheelTitle,
    props.wheelSubtitle,
    props.spinButtonText,
    props.resultHeading,
    props.spinDuration,
    props.soundEnabled,
    props.modulebackgroundcolor,
    props.enableDangerZone,
    props.enableJackpotStreak,
    props.enableDoubleOrNothing,
  ]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    return () => {
      if (tickTimerRef.current) window.clearTimeout(tickTimerRef.current);
      if (pointerFrameRef.current) window.cancelAnimationFrame(pointerFrameRef.current);
      if (spinTimerRef.current) window.clearTimeout(spinTimerRef.current);
      if (zoomTimerRef.current) window.clearTimeout(zoomTimerRef.current);
      if (dangerTimerRef.current) window.clearTimeout(dangerTimerRef.current);
    };
  }, []);

  function playTick() {
    if (props.soundEnabled === false) return;

    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;

      audioRef.current = audioRef.current || new AudioContextClass();
      const context = audioRef.current;

      if (context.state === "suspended") context.resume();

      const now = context.currentTime;
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type = "triangle";
      oscillator.frequency.setValueAtTime(1500, now);
      oscillator.frequency.exponentialRampToValueAtTime(480, now + 0.025);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.12, now + 0.003);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(now);
      oscillator.stop(now + 0.04);
    } catch (error) {}
  }

  function startTicks(startTime, totalTime) {
    const elapsed = Date.now() - startTime;

    if (elapsed >= totalTime || !spinningRef.current) return;

    playTick();

    const progress = elapsed / totalTime;
    const delay = 45 + Math.pow(progress, 2.5) * 340;

    tickTimerRef.current = window.setTimeout(
      () => startTicks(startTime, totalTime),
      delay
    );
  }

  function getRenderedAngle() {
    if (!wheelRef.current) return 0;

    const transform = window.getComputedStyle(wheelRef.current).transform;
    if (!transform || transform === "none") return 0;

    const match = transform.match(/matrix\(([^)]+)\)/);
    if (!match) return 0;

    const parts = match[1].split(",");
    return Math.atan2(Number(parts[1]), Number(parts[0])) * 180 / Math.PI;
  }

  function startPointerTicks(startRotation, sectionCount = sectionsRef.current.length) {
    if (!pointerRef.current || !wheelRef.current) return;

    if (pointerFrameRef.current) {
      window.cancelAnimationFrame(pointerFrameRef.current);
      pointerFrameRef.current = null;
    }

    let previousAngle = getRenderedAngle();
    let unwrappedAngle = startRotation;
    const slice = 360 / sectionCount;
    let lastBoundary = Math.floor(unwrappedAngle / slice);

    function animatePointer() {
      if (!spinningRef.current) {
        pointerFrameRef.current = null;
        return;
      }

      const currentAngle = getRenderedAngle();
      let delta = currentAngle - previousAngle;

      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;

      unwrappedAngle += delta;
      previousAngle = currentAngle;

      const currentBoundary = Math.floor(unwrappedAngle / slice);

      while (lastBoundary < currentBoundary) {
        lastBoundary++;

        const pointer = pointerRef.current;

        if (pointer) {
          pointer.classList.remove("wfo-pointer-ticking");
          void pointer.offsetWidth;
          pointer.classList.add("wfo-pointer-ticking");
        }
      }

      pointerFrameRef.current = window.requestAnimationFrame(animatePointer);
    }

    pointerFrameRef.current = window.requestAnimationFrame(animatePointer);
  }

  function handleWheelPointerDown(event) {
    if (spinningRef.current || event.button === 2) return;

    const wheel = wheelRef.current;
    if (!wheel) return;

    const rect = wheel.getBoundingClientRect();

    dragStartRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      centerX: rect.left + rect.width / 2,
      centerY: rect.top + rect.height / 2,
      startAngle: Math.atan2(
        event.clientY - (rect.top + rect.height / 2),
        event.clientX - (rect.left + rect.width / 2)
      ) * 180 / Math.PI,
      startRotation: rotationRef.current,
      moved: false,
    };

    wheel.setPointerCapture(event.pointerId);
  }

  function handleWheelPointerMove(event) {
    const drag = dragStartRef.current;

    if (!drag || drag.pointerId !== event.pointerId || spinningRef.current) return;

    const distance = Math.hypot(
      event.clientX - drag.startX,
      event.clientY - drag.startY
    );

    if (distance > 5) {
      drag.moved = true;
      setDragging(true);
    }

    if (!drag.moved) return;

    const angle = Math.atan2(
      event.clientY - drag.centerY,
      event.clientX - drag.centerX
    ) * 180 / Math.PI;

    let delta = angle - drag.startAngle;

    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    setRotation(drag.startRotation + delta);
  }

  function handleWheelPointerUp(event) {
    const drag = dragStartRef.current;

    if (!drag || drag.pointerId !== event.pointerId) return;

    dragStartRef.current = null;
    setDragging(false);

    if (drag.moved) {
      suppressWheelClickRef.current = true;

      window.setTimeout(() => {
        suppressWheelClickRef.current = false;
        if (!spinningRef.current) spinWheel();
      }, 0);
    }
  }

  function handleWheelClick() {
    if (suppressWheelClickRef.current || spinningRef.current) return;
    spinWheel();
  }

  function clearSpinTimers() {
    if (tickTimerRef.current) {
      window.clearTimeout(tickTimerRef.current);
      tickTimerRef.current = null;
    }

    if (pointerFrameRef.current) {
      window.cancelAnimationFrame(pointerFrameRef.current);
      pointerFrameRef.current = null;
    }

    if (spinTimerRef.current) {
      window.clearTimeout(spinTimerRef.current);
      spinTimerRef.current = null;
    }

    if (zoomTimerRef.current) {
      window.clearTimeout(zoomTimerRef.current);
      zoomTimerRef.current = null;
    }

    if (dangerTimerRef.current) {
      window.clearTimeout(dangerTimerRef.current);
      dangerTimerRef.current = null;
    }
  }

  function resetGame() {
    if (spinningRef.current) return;

    clearSpinTimers();

    spinningRef.current = false;
    riskModeRef.current = false;
    riskPrizeRef.current = null;
    dragStartRef.current = null;
    suppressWheelClickRef.current = false;
    rotationRef.current = 0;

    setDangerLevel(0);
    setRotation(0);
    setSpinning(false);
    setZooming(false);
    setWinner(null);
    setModalOpen(false);
    setHintText("ONE SPIN. BIG SURPRISE.");
    setStreak(0);
    setPrizeCollection([]);
    setPrizeMessage("");
    setResultTitle("");
    setDangerActive(false);
    setRiskPending(false);
    setRiskMode(false);
    setRiskSpinRequested(false);
    setDragging(false);

    if (pointerRef.current) {
      pointerRef.current.classList.remove("wfo-pointer-ticking");
    }

    if (wheelRef.current) {
      wheelRef.current.style.transitionDuration = "0s";
      wheelRef.current.style.transform = "rotate(0deg)";
      void wheelRef.current.offsetWidth;

      window.requestAnimationFrame(() => {
        if (wheelRef.current) {
          wheelRef.current.style.transitionDuration = "";
        }
      });
    }
  }

  function spinWheel(spinSections = sectionsRef.current, isRiskSpin = riskModeRef.current) {
    if (spinningRef.current || !spinSections.length) return;

    const currentRotation = rotationRef.current;

    if (!isRiskSpin) {
      setRiskPending(false);
      setPrizeMessage("");
      setResultTitle("");
    }

    spinningRef.current = true;
    setSpinning(true);
    setModalOpen(false);
    setWinner(null);
    setZooming(false);
    setDangerActive(false);
    setHintText(isRiskSpin ? "RISKING YOUR PRIZES..." : "HOLD YOUR NERVE...");

    const targetIndex = Math.floor(Math.random() * spinSections.length);
    const slice = 360 / spinSections.length;
    const targetOffset = (360 - (targetIndex * slice + slice / 2) + 360) % 360;
    const currentOffset = ((currentRotation % 360) + 360) % 360;
    const adjustment = (targetOffset - currentOffset + 360) % 360;
    const turns = 5 + Math.floor(Math.random() * 3);
    const finalRotation = currentRotation + turns * 360 + adjustment;
    const duration = reducedMotion.current
      ? 0.05
      : Math.max(3, Math.min(15, Number(props.spinDuration) || 7.5));
    const totalTime = duration * 1000;
    const startTime = Date.now();

    if (zoomTimerRef.current) {
      window.clearTimeout(zoomTimerRef.current);
      zoomTimerRef.current = null;
    }

    if (spinTimerRef.current) {
      window.clearTimeout(spinTimerRef.current);
      spinTimerRef.current = null;
    }

    playTick();
    startTicks(startTime, totalTime);
    startPointerTicks(currentRotation, spinSections.length);

    if (wheelRef.current) {
      wheelRef.current.style.transitionDuration = duration + "s";
      void wheelRef.current.offsetWidth;
    }

    zoomTimerRef.current = window.setTimeout(() => {
      zoomTimerRef.current = null;
      if (spinningRef.current) setZooming(true);
    }, totalTime * 0.66);

    rotationRef.current = finalRotation;
    setRotation(finalRotation);

    spinTimerRef.current = window.setTimeout(() => {
      spinTimerRef.current = null;

      if (tickTimerRef.current) {
        window.clearTimeout(tickTimerRef.current);
        tickTimerRef.current = null;
      }

      if (pointerFrameRef.current) {
        window.cancelAnimationFrame(pointerFrameRef.current);
        pointerFrameRef.current = null;
      }

      if (zoomTimerRef.current) {
        window.clearTimeout(zoomTimerRef.current);
        zoomTimerRef.current = null;
      }

      spinningRef.current = false;
      setSpinning(false);
      setZooming(false);
      setHintText("AND THE PRIZE IS...");

      if (pointerRef.current) {
        pointerRef.current.classList.remove("wfo-pointer-ticking");
      }

      const landed = spinSections[targetIndex];
      const retry = isRetrySection(landed);
      const losing = isLosingSection(landed);

      setWinner(landed);

      if (retry) {
        setResultTitle(landed.text);
        setPrizeMessage(
          isRiskSpin
            ? "Your prize bank is safe. Spin again to keep risking your prizes!"
            : "Your prize bank is safe. Spin again to win another prize!"
        );

        if (isRiskSpin) {
          riskModeRef.current = true;
          setRiskMode(true);
          setRiskPending(true);
        } else {
          riskModeRef.current = false;
          setRiskMode(false);
          setRiskPending(false);
        }

        setModalOpen(true);
        return;
      }

      if (losing) {
        setStreak(0);

        if (isRiskSpin || props.enableDangerZone || props.enableDoubleOrNothing) {
          setPrizeCollection([]);
          setResultTitle("OH NO! YOU LOST EVERYTHING!");
          setPrizeMessage("You lose all prizes. Everything you've collected is gone.");
          setDangerActive(true);

          if (dangerTimerRef.current) {
            window.clearTimeout(dangerTimerRef.current);
          }

          dangerTimerRef.current = window.setTimeout(() => {
            dangerTimerRef.current = null;
            setDangerActive(false);
          }, 1100);
        } else {
          setResultTitle(landed.text);
          setPrizeMessage("No prize this time. Try again!");
        }

        riskModeRef.current = false;
        setRiskMode(false);
        setRiskPending(false);
        riskPrizeRef.current = null;
        setModalOpen(true);
        return;
      }

      setResultTitle(landed.text);
      setPrizeMessage(
        isRiskSpin
          ? "You've won " + landed.text + "! It's been added to your prize bank."
          : "You've won " + landed.text + "!"
      );

      setPrizeCollection((current) => [...current, landed.text]);
      riskPrizeRef.current = { text: landed.text };

      riskModeRef.current = false;
      setRiskMode(false);
      setRiskPending(false);

      if (props.enableJackpotStreak && !isRiskSpin) {
        setStreak((current) => current + 1);
      }

      setModalOpen(true);
    }, totalTime + 950);
  }

  useEffect(() => {
    if (!riskSpinRequested || spinningRef.current) return;

    setRiskSpinRequested(false);

    const nextSections = sectionsRef.current;

    if (wheelRef.current) {
      wheelRef.current.style.transitionDuration = "0s";
      void wheelRef.current.offsetWidth;
      wheelRef.current.style.transitionDuration = "";
    }

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        spinWheel(nextSections, true);
      });
    });
  }, [riskSpinRequested, sections]);

  function closeModal() {
    setModalOpen(false);
    setHintText("ONE SPIN. BIG SURPRISE.");
  }

  const gradient = sections.map((section, index) => {
    const slice = 360 / sections.length;
    return section.color + " " + index * slice + "deg " + (index + 1) * slice + "deg";
  }).join(", ");

  const previewProps = {
    wheelTitle: props.wheelTitle || "THE ENTERTAINER",
    wheelSubtitle: props.wheelSubtitle || "LET'S PLAY FOR PRIZES!",
    spinButtonText: props.spinButtonText || "LET'S PLAY!",
    resultHeading: props.resultHeading || "THE MOMENT OF TRUTH",
  };

  return (
    <div className="wfo-storybook">
      <style>{wheelCSS}</style>

      <div
        className={
          "wfo-root" +
          (zooming ? " wfo-zooming" : "") +
          (dangerActive ? " wfo-danger-active" : "")
        }
        style={{ backgroundColor: props.modulebackgroundcolor || "#071638" }}
      >
        <header className="wfo-heading">
          <h2 className="wfo-title">{previewProps.wheelTitle}</h2>
          <p className="wfo-subtitle">{previewProps.wheelSubtitle}</p>
        </header>

        <div className="wfo-stage">
          <div className="wfo-camera-frame">
            <div className="wfo-wheel-shadow" />

            <div className="wfo-wheel-rim">
              <div className="wfo-rim-lights" />

              <div
                ref={wheelRef}
                className="wfo-wheel"
                onPointerDown={handleWheelPointerDown}
                onPointerMove={handleWheelPointerMove}
                onPointerUp={handleWheelPointerUp}
                onPointerCancel={handleWheelPointerUp}
                onClick={handleWheelClick}
                style={{
                  "--wfo-sections": sections.length,
                  "--wheel-gradient": "conic-gradient(" + gradient + ")",
                  transform: "rotate(" + rotation + "deg)",
                  transitionDuration: dragging
                    ? "0s"
                    : (reducedMotion.current
                        ? "0.05s"
                        : Math.max(3, Math.min(15, Number(props.spinDuration) || 7.5)) + "s"),
                }}
              >
                <div className="wfo-wheel-gloss" />
                <div className="wfo-wheel-lines" />

                {sections.map((section, index) => (
                  <div
                    className="wfo-label"
                    key={index}
                    style={{
                      "--label-angle": (index * 360 / sections.length + 180 / sections.length) + "deg",
                    }}
                  >
                    <span>{section.text}</span>
                  </div>
                ))}

                <div className="wfo-hub"><span /></div>
              </div>
            </div>
          </div>

          <div className="wfo-pointer-housing" ref={pointerRef}>
            <div className="wfo-pointer"><span /></div>
          </div>
        </div>

        <div className="wfo-controls">
          <div className="wfo-control-buttons">
            <button
              type="button"
              className="wfo-spin"
              onClick={() => spinWheel()}
              disabled={spinning}
            >
              {spinning ? "GOOD LUCK..." : previewProps.spinButtonText}
            </button>

            <button
              type="button"
              className="wfo-modal-button wfo-secondary"
              onClick={resetGame}
              disabled={spinning}
            >
              RESET
            </button>
          </div>

          <p className="wfo-hint">{hintText}</p>
        </div>

        {(props.enableDangerZone || props.enableJackpotStreak || props.enableDoubleOrNothing || prizeCollection.length > 0) && (
          <div className="wfo-feature-status">
            {props.enableDangerZone && (
              <span className="wfo-feature-badge">
                Danger Zone: {sections.filter((section) => section.isDanger).length} losing slices
              </span>
            )}

            {props.enableJackpotStreak && (
              <span className="wfo-feature-badge">
                Streak: {streak} · Multiplier: {Math.max(1, streak)}x
              </span>
            )}

            {props.enableDoubleOrNothing && (
              <span className="wfo-feature-badge">
                Risk level: {dangerLevel}
              </span>
            )}

            <span className="wfo-feature-badge">
              Prizes collected: {prizeCollection.length}
            </span>
          </div>
        )}

        <div
          className={"wfo-modal" + (modalOpen ? " wfo-open" : "")}
          aria-hidden={!modalOpen}
          role="dialog"
          aria-modal="true"
          aria-label="Your prize"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div className="wfo-modal-card">
            <p className="wfo-result-kicker">{previewProps.resultHeading}</p>
            <h3 className="wfo-result-title">
              {resultTitle || (winner ? winner.text : "")}
            </h3>
            <p className="wfo-result-prize">{prizeMessage}</p>

            {prizeCollection.length > 0 && (
              <div className="wfo-prize-collection">
                <h4>Your prizes so far</h4>
                <ul>
                  {prizeCollection.map((prize, index) => (
                    <li key={index}>{prize}</li>
                  ))}
                </ul>
              </div>
            )}

            {props.enableDoubleOrNothing &&
              winner &&
              !isRetrySection(winner) &&
              !isLosingSection(winner) &&
              !riskPending &&
              !riskMode && (
                <div className="wfo-risk-actions">
                  <button
                    type="button"
                    className="wfo-risk-button wfo-risk-danger"
                    onClick={() => {
                      if (spinningRef.current || riskPending || riskModeRef.current) return;

                      const currentPrize = riskPrizeRef.current;

                      if (!currentPrize) return;

                      riskModeRef.current = true;
                      setRiskMode(true);
                      setRiskPending(true);
                      setPrizeMessage("");
                      setModalOpen(false);
                      setDangerLevel((level) => level + 1);
                      setRiskSpinRequested(true);
                    }}
                    disabled={spinning}
                  >
                    RISK IT
                  </button>
                </div>
              )}

            <div className="wfo-result-actions">
              {winner && isRetrySection(winner) && (
                <button
                  type="button"
                  className="wfo-modal-button"
                  onClick={() => {
                    setModalOpen(false);
                    spinWheel();
                  }}
                  disabled={spinning}
                >
                  SPIN AGAIN
                </button>
              )}

              <button
                type="button"
                className="wfo-modal-button wfo-secondary"
                onClick={resetGame}
                disabled={spinning}
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="storybook-wheel-of-fortune-export"
        style={{ display: "none" }}
        dangerouslySetInnerHTML={{ __html: cmsHTML }}
      />
    </div>
  );
};

WheelOfFortune.propTypes = {
  numberOfSections: PropTypes.number,
  wheelTitle: PropTypes.string,
  wheelSubtitle: PropTypes.string,
  spinButtonText: PropTypes.string,
  resultHeading: PropTypes.string,
  replayButtonText: PropTypes.string,
  closeButtonText: PropTypes.string,
  spinDuration: PropTypes.number,
  soundEnabled: PropTypes.bool,
  showReplayButton: PropTypes.bool,
  modulebackgroundcolor: PropTypes.string,
  enableDangerZone: PropTypes.bool,
  enableJackpotStreak: PropTypes.bool,
  enableDoubleOrNothing: PropTypes.bool,
  ...Object.fromEntries(
    Array.from({ length: 12 }, (_, index) => [
      "section" + (index + 1) + "Text",
      PropTypes.string,
    ])
  ),
  ...Object.fromEntries(
    Array.from({ length: 12 }, (_, index) => [
      "section" + (index + 1) + "Color",
      PropTypes.string,
    ])
  ),
  ...Object.fromEntries(
    Array.from({ length: 12 }, (_, index) => [
      "section" + (index + 1) + "IsLosing",
      PropTypes.bool,
    ])
  ),
};

export default WheelOfFortune;
