import PropTypes from "prop-types";
import { useEffect } from "react";

const defaultStores = [
  { value: "all", label: "All Stores" },
  { value: "Aberdeen", label: "Aberdeen" },
  { value: "Aberdeen Union Square", label: "Aberdeen Union Square" },
  { value: "Altrincham", label: "Altrincham" },
  { value: "Amersham", label: "Amersham" },
  { value: "Antrim", label: "Antrim" },
  { value: "Ashford", label: "Ashford" },
  { value: "Aylesbury", label: "Aylesbury" },
  { value: "Banbury", label: "Banbury" },
  { value: "Barnsley", label: "Barnsley" },
  { value: "Barnstaple", label: "Barnstaple" },
  { value: "Basildon", label: "Basildon" },
  { value: "Basingstoke", label: "Basingstoke" },
  { value: "Bath", label: "Bath" },
  { value: "Belfast", label: "Belfast" },
  { value: "Bexleyheath", label: "Bexleyheath" },
  { value: "Birmingham Bullring", label: "Birmingham Bullring" },
  { value: "Bluewater", label: "Bluewater" },
  { value: "Bishop's Stortford", label: "Bishop's Stortford" },
  { value: "Birkenhead", label: "Birkenhead" },
  { value: "Blackburn", label: "Blackburn" },
  { value: "Bluewater - Greenhithe", label: "Bluewater - Greenhithe" },
  { value: "Bolton", label: "Bolton" },
  { value: "Bournemouth", label: "Bournemouth" },
  { value: "Bracknell", label: "Bracknell" },
  { value: "Bradford", label: "Bradford" },
  { value: "Braehead", label: "Braehead" },
  { value: "Brighton", label: "Brighton" },
  { value: "Bristol Cabot Circus", label: "Bristol Cabot Circus" },
  { value: "Bristol Cribbs Causeway", label: "Bristol Cribbs Causeway" },
  { value: "Bromley Lower Mall", label: "Bromley Lower Mall" },
  { value: "Bromley Upper Mall", label: "Bromley Upper Mall" },
  { value: "Burnley", label: "Burnley" },
  { value: "Burton Upon Trent", label: "Burton Upon Trent" },
  { value: "Bury", label: "Bury" },
  { value: "Camberley", label: "Camberley" },
  { value: "Cambridge", label: "Cambridge" },
  { value: "Cardiff", label: "Cardiff" },
  { value: "Carlisle", label: "Carlisle" },
  { value: "Carmarthen", label: "Carmarthen" },
  { value: "Chatham", label: "Chatham" },
  { value: "Chelmsford", label: "Chelmsford" },
  { value: "Cheshire Coliseum", label: "Cheshire Coliseum" },
  { value: "Chester", label: "Chester" },
  { value: "Chester Broughton Shopping Park", label: "Chester Broughton Shopping Park" },
  { value: "Chichester", label: "Chichester" },
  { value: "Colchester", label: "Colchester" },
  { value: "Corby", label: "Corby" },
  { value: "Coventry", label: "Coventry" },
  { value: "Crawley", label: "Crawley" },
  { value: "Cumbernauld", label: "Cumbernauld" },
  { value: "Cwmbran", label: "Cwmbran" },
  { value: "Dalton Park", label: "Dalton Park" },
  { value: "Doncaster", label: "Doncaster" },
  { value: "Douglas", label: "Douglas" },
  { value: "Dover", label: "Dover" },
  { value: "Dunfermline", label: "Dunfermline" },
  { value: "East Kilbride", label: "East Kilbride" },
  { value: "Eastleigh", label: "Eastleigh" },
  { value: "Edinburgh", label: "Edinburgh" },
  { value: "Exeter", label: "Exeter" },
  { value: "Gateshead - Metro Centre", label: "Gateshead - Metro Centre" },
  { value: "Glasgow - St Enoch", label: "Glasgow - St Enoch" },
  { value: "Glasgow Silverburn", label: "Glasgow Silverburn" },
  { value: "Gloucester", label: "Gloucester" },
  { value: "Grimsby", label: "Grimsby" },
  { value: "Guildford", label: "Guildford" },
  { value: "Gunwharf Quays", label: "Gunwharf Quays" },
  { value: "Hanley", label: "Hanley" },
  { value: "Harlow", label: "Harlow" },
  { value: "Hatfield", label: "Hatfield" },
  { value: "Hemel Hempstead", label: "Hemel Hempstead" },
  { value: "Hereford", label: "Hereford" },
  { value: "Huddersfield", label: "Huddersfield" },
  { value: "Hull", label: "Hull" },
  { value: "Ilford", label: "Ilford" },
  { value: "Inverness", label: "Inverness" },
  { value: "Ipswich", label: "Ipswich" },
  { value: "Jersey", label: "Jersey" },
  { value: "King's Lynn Vancouver Quarter", label: "King's Lynn Vancouver Quarter" },
  { value: "Kingston Bentalls", label: "Kingston Bentalls" },
  { value: "Lakeside", label: "Lakeside" },
  { value: "Lancaster", label: "Lancaster" },
  { value: "Leamington Spa", label: "Leamington Spa" },
  { value: "Leeds Springs", label: "Leeds Springs" },
  { value: "Leeds Trinity", label: "Leeds Trinity" },
  { value: "Leeds White Rose", label: "Leeds White Rose" },
  { value: "Leicester", label: "Leicester" },
  { value: "Lichfield", label: "Lichfield" },
  { value: "Lincoln", label: "Lincoln" },
  { value: "Liverpool One", label: "Liverpool One" },
  { value: "Liverpool St Johns", label: "Liverpool St Johns" },
  { value: "Livingston", label: "Livingston" },
  { value: "Llandudno", label: "Llandudno" },
  { value: "Macclesfield", label: "Macclesfield" },
  { value: "Manchester Arndale", label: "Manchester Arndale" },
  { value: "Merryhill", label: "Merryhill" },
  { value: "Metro Centre - Gateshead", label: "Metro Centre - Gateshead" },
  { value: "Middlesbrough", label: "Middlesbrough" },
  { value: "Milton Keynes", label: "Milton Keynes" },
  { value: "Midsomer Norton", label: "Midsomer Norton" },
  { value: "Newbury", label: "Newbury" },
  { value: "Newport - Isle of Wight", label: "Newport - Isle of Wight" },
  { value: "Newport - Wales", label: "Newport - Wales" },
  { value: "Northampton", label: "Northampton" },
  { value: "Northwich", label: "Northwich" },
  { value: "Norwich", label: "Norwich" },
  { value: "Nottingham", label: "Nottingham" },
  { value: "Oldham", label: "Oldham" },
  { value: "Peterborough", label: "Peterborough" },
  { value: "Plymouth", label: "Plymouth" },
  { value: "Port Talbot", label: "Port Talbot" },
  { value: "Reading", label: "Reading" },
  { value: "Redditch", label: "Redditch" },
  { value: "Romford Brewery", label: "Romford Brewery" },
  { value: "Rushden Lakes", label: "Rushden Lakes" },
  { value: "Sheffield Meadowhall", label: "Sheffield Meadowhall" },
  { value: "Shrewsbury", label: "Shrewsbury" },
  { value: "Southport", label: "Southport" },
  { value: "Stevenage", label: "Stevenage" },
  { value: "Stirling", label: "Stirling" },
  { value: "Stockport", label: "Stockport" },
  { value: "Stratford - Westfield", label: "Stratford - Westfield" },
  { value: "Sunderland", label: "Sunderland" },
  { value: "Sutton Coldfield", label: "Sutton Coldfield" },
  { value: "Swindon", label: "Swindon" },
  { value: "Taunton", label: "Taunton" },
  { value: "Telford", label: "Telford" },
  { value: "The O2 London", label: "The O2 London" },
  { value: "Torquay", label: "Torquay" },
  { value: "Truro", label: "Truro" },
  { value: "Uxbridge", label: "Uxbridge" },
  { value: "Walsall", label: "Walsall" },
  { value: "Warrington", label: "Warrington" },
  { value: "Watford", label: "Watford" },
  { value: "Welwyn Garden City", label: "Welwyn Garden City" },
  { value: "West Bromwich", label: "West Bromwich" },
  { value: "White City", label: "White City" },
  { value: "Whiteley", label: "Whiteley" },
  { value: "Winchester", label: "Winchester" },
  { value: "Witney", label: "Witney" },
  { value: "Woking", label: "Woking" },
  { value: "Workington", label: "Workington" },
  { value: "Wolverhampton", label: "Wolverhampton" },
  { value: "Worcester", label: "Worcester" },
  { value: "Yate", label: "Yate" },
  { value: "Yeovil", label: "Yeovil" },
  { value: "York", label: "York" },
];

const defaultEvents = [
  { value: "all", label: "All Events" },

  { value: "panini", label: "Panini Swap Shop" },

  { value: "ballers", label: "Ballers Swap Shop" },

  { value: "football", label: "Football’s Coming …To The Entertainer" },

  { value: "lego-make", label: "LEGO Make & Take" },

  { value: "star-wars", label: "LEGO Star Wars Make and Take" },

  { value: "lego-dino", label: "LEGO Dino" },

  { value: "lego-unicorn", label: "LEGO Unicorn" },

  { value: "paw-patrol-on-the-road", label: "Paw Patrol On The Road" },

  { value: "chase", label: "Chase From Paw Patrol" },

  { value: "skye", label: "Skye From Paw Patrol" },

  { value: "marshall", label: "Marshall From Paw Patrol" },

  { value: "rubble", label: "Rubble From Paw Patrol" },

  { value: "cocomelon-jj", label: "JJ From Cocomelon" },

  { value: "rc-demo", label: "Remote Control Cars Demo" },

  { value: "paddington", label: "Meet Paddington Bear" },

  { value: "lego-smart-brick-banthas", label: "LEGO Smart Brick & Bantha !" },

  { value: "zuru-slime", label: "Slime Mart by Zuru" }
];

export const EventsHeader = ({ title, intro, searchbytext, stores = defaultStores,
  events = defaultEvents }) => { 
  useEffect(() => {
  const radios = document.querySelectorAll(
    '.search-header__radios input[type="radio"]'
  );

  const labels = document.querySelectorAll(
    ".search-header__radios label"
  );

  const storeContainer =
    document.getElementById("storeContainer");

  const eventContainer =
    document.getElementById("eventContainer");

  const handleChange = (e) => {
    labels.forEach((label) =>
      label.classList.remove("active")
    );

    const activeLabel =
      e.target.closest("label");
      e.target.checked = true;

    activeLabel.classList.add("active");
  };

  radios.forEach((radio) => {
    radio.addEventListener("click", handleChange);
  });

  // default state on load
  storeContainer.classList.remove("active");
}, []);
 
  return (
    <>
      <style>
        {`
    .breadcrumb,
  [data-expired="true"],
  [data-hidden="true"] {
    display: none !important;
  }

  .hero-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: #009e44;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    padding: 10px 30px 10px 10px;
    height: 40px;
    box-shadow: 0 0 5px rgba(3, 33, 33, 0.3);
    transition: all 0.3s;
    margin: 15px 0 0 0;
  }

  .hero-button:hover {
    background-color: #afcb17;
    scale: 1.05;
    box-shadow: 0 0 18px rgba(3, 33, 33, 0.3);
    color: #fff;
  }

  .hero-button .basket-icon {
    transition: all 0.3s;
    transform: rotate(15deg);
    margin-left: 5px;
  }

  .hero-button:hover .basket-icon {
    transform: rotate(-10deg);
  }

  .hero-button .star-start {
    position: relative;
    top: -3px;
  }

  .hero-button .swoosh-container {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 5px;
    width: 25px;
  }

  .hero-button .swoosh {
    display: block;
    width: 0;
    height: 3px;
    margin-top: -3px;
    margin-left: -2px;
    transform: rotate(15deg);
    background-color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s;
  }

  .hero-button:hover .swoosh {
    width: 7px;
  }

  .hero-button .star-end {
    position: relative;
    bottom: -5px;
    transition: all 0.3s;
  }

  .hero-button:hover .star-end {
    scale: 1.1;
    transform: rotate(30deg);
  }

  .events-container {
    max-width: 1160px;
    margin: 0 auto;
    padding: 20px;
  }

  .heading-ribbon-container {
    text-align: center;
    position: relative;
    margin-bottom: 30px;
  }

  .heading-ribbon {
    position: relative;
    padding: 0 23px;
    display: block;
  }

  .heading-ribbon .delivery-panel-title {
    color: #fff;
    font:
      24px/100% "Billy Bold",
      "Tahoma Bold",
      sans-serif;
    background-color: #ee3224;
    height: 48px;
    line-height: 48px;
    padding: 0 40px;
    margin: 0;
    text-transform: none;
  }

  .heading-ribbon .ribbon-start {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .heading-ribbon .ribbon-end {
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
  }

  .heading-ribbon .ribbon-start,
  .heading-ribbon .ribbon-start svg,
  .heading-ribbon .ribbon-end,
  .heading-ribbon .ribbon-end svg {
    height: 100%;
    width: 24px;
  }

  .heading-ribbon .ribbon-end {
    transform: scale(-1, -1);
  }

  .search-header {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 20px;
  }

  .search-header_title {
    font-size: 18px;
    color: #0d5d9c;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    margin-right: 30px;
    flex-shrink: 0;
  }

  .search-header__radios {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .search-header__radios label {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0 20px 0 0;
  }

  .search-header__radios input {
    appearance: none;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    border: 2px solid #0d5d9c;
    border-radius: 100%;
    margin: 0;
    outline: 0;
  }

  .search-header__radios input:checked {
    border-color: #009e44;
  }

  .search-header__radios span.radio {
    position: absolute;
    top: 4px;
    left: 4px;
    z-index: 20;
    width: 12px;
    height: 12px;
    background-color: #009e44;
    border-radius: 100%;
    display: none;
    margin: 0;
  }

  .search-header__radios input:checked ~ span.radio {
    display: block;
  }

  .search-header__radios input:checked,
  .search-header__radios input:focus,
  .search-header__radios input:active {
    outline: 0;
    background-color: #fff;
  }

  #storeContainer,
  #eventContainer {
    display: none;
  }

  .search-header__radios #store.active + label + #storeContainer {
    display: flex;
    width: 100%;
    margin: 20px 0;
  }

  .search-header__radios #event.active + #storeContainer + #eventContainer {
    display: flex;
    width: 100%;
    margin: 20px 0;
  }

  .search-header__radios #store.active + label + #storeContainer select,
  .search-header__radios
    #event.active
    + #storeContainer
    + #eventContainer
    select {
    display: block !important;
  }

  .search-header__radios span.text {
    margin-left: 10px;
    font-size: 14px;
    color: #0d5d9c;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
  }

  .dropdown {
    display: flex;
    flex-grow: 1;
    margin-left: 30px;
    height: 40px;
    padding: 0 15px;
    border-radius: 30px;
    border: 3px solid #0d5d9c;
    position: relative;
  }

  .dropdown__select {
    position: relative;
    width: 100%;
    appearance: none;
    border: none;
    background-color: #fff;
    padding: 0 20px 0 0;
    margin-right: 10px;
    color: #0d5d9c;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    outline: 0;
    visibility: visible;
  }

  .nice-select {
    display: none !important;
  }

  .dropdown__icon {
    position: absolute;
    right: 15px;
    z-index: 2;
    top: 14px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-top: 6px solid rgb(156 163 175);
    transform: rotate(135deg);
    transition: all 0.3s;
  }

  .dropdown__select:focus ~ .dropdown__icon {
    transform: rotate(-45deg);
  }

  .event-container {
    border: 3px solid rgb(219 227 255);
    border-radius: 0.75rem;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    max-width: 1160px;
    margin: 20px auto 0;
  }

  .event-details {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .image-container {
    padding: 20px;
  }

  .event-title {
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    color: rgb(64 126 201);
    font-size: 1.125rem;
    text-align: center;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .image-container img {
    width: 100%;
    height: auto;
  }

  .image-container a {
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
    color: #fff;
    background-color: rgb(0 158 68);
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    font-weight: bold;
  }

  .event-dates {
    margin: 0;
    padding: 0;
  }

  .event-dates li {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: 3px solid rgb(219 227 255);
    padding: 10px;
  }

  .event-dates li span {
    margin: 0.25rem 0;
    border-right: 3px solid rgb(219 227 255);
    text-align: center;
  }

  .event-dates li span:last-child {
    border: none;
    color: rgb(238 50 36);
    font-weight: bold;
    text-transform: uppercase;
  }

  .event-dates li a {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    .search-header {
      flex-direction: row;
      align-items: center;
    }

    .search-header_title {
      font-size: 24px;
      width: 40%;
    }

    .search-header__radios,
    .search-header__radios #store.active + label + #storeContainer,
    .search-header__radios #event.active + #storeContainer + #eventContainer {
      margin: 0;
    }

    .search-header__radios {
      width: 60%;
      flex-wrap: nowrap;
    }

    .event-container {
      flex-wrap: nowrap;
    }

    .image-container {
      width: 33.333%;
      border-right: 3px solid rgb(219 227 255);
    }

    .event-details {
      width: 66.666%;
    }
  }

  @media (max-width: 1160px) {
    .event-container {
      margin: 20px 20px 0 20px;
    }
  }

  #eventSelector {
  display: none;
  }
        `}
      </style>
      <div class="events-container">
  <div class="heading-ribbon-container">
    <div class="heading-ribbon">
      <span class="ribbon-start">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="48" viewBox="0 0 24 48" fill="none">
          <g clip-path="url(#clip0_2260_15)">
            <path d="M5.72687 47.4667C2.87304 47.4667 0.536342 44.9173 0.478882 41.7493L8.84885 24L0.478882 6.25066C0.545918 3.08266 2.87304 0.533325 5.72687 0.533325H329.273C332.127 0.533325 334.464 3.08266 334.521 6.25066L326.151 24L334.521 41.7493C334.464 44.9173 332.127 47.4667 329.273 47.4667H5.72687Z" fill="#EE3224"></path>
            <path d="M329.273 1.06667C331.83 1.06667 333.918 3.31733 334.042 6.13333L325.854 23.5093L325.624 24L325.854 24.4907L334.042 41.8667C333.927 44.6827 331.83 46.9333 329.273 46.9333H5.72682C3.16986 46.9333 1.08216 44.6827 0.957663 41.8667L9.14568 24.4907L9.37552 24L9.14568 23.5093L0.967239 6.13333C1.08216 3.31733 3.17944 1.06667 5.7364 1.06667H329.283M329.283 0H5.72682C2.56654 0 0 2.85867 0 6.37867L8.30294 24L0 41.6213C0 45.1413 2.56654 48 5.72682 48H329.273C332.433 48 335 45.1413 335 41.6213L326.697 24L335 6.37867C335 2.85867 332.433 0 329.273 0L329.283 0Z" fill="#EE3224"></path>
          </g>
          <defs>
            <clipPath id="clip0_2260_15">
              <rect fill="white" height="48" width="335"></rect>
            </clipPath>
          </defs>
        </svg>
      </span>
      <h1 class="delivery-panel-title">{title}</h1>
      <span class="ribbon-end">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="48" viewBox="0 0 24 48" fill="none">
          <g clip-path="url(#clip0_2260_15)">
            <path d="M5.72687 47.4667C2.87304 47.4667 0.536342 44.9173 0.478882 41.7493L8.84885 24L0.478882 6.25066C0.545918 3.08266 2.87304 0.533325 5.72687 0.533325H329.273C332.127 0.533325 334.464 3.08266 334.521 6.25066L326.151 24L334.521 41.7493C334.464 44.9173 332.127 47.4667 329.273 47.4667H5.72687Z" fill="#EE3224"></path>
            <path d="M329.273 1.06667C331.83 1.06667 333.918 3.31733 334.042 6.13333L325.854 23.5093L325.624 24L325.854 24.4907L334.042 41.8667C333.927 44.6827 331.83 46.9333 329.273 46.9333H5.72682C3.16986 46.9333 1.08216 44.6827 0.957663 41.8667L9.14568 24.4907L9.37552 24L9.14568 23.5093L0.967239 6.13333C1.08216 3.31733 3.17944 1.06667 5.7364 1.06667H329.283M329.283 0H5.72682C2.56654 0 0 2.85867 0 6.37867L8.30294 24L0 41.6213C0 45.1413 2.56654 48 5.72682 48H329.273C332.433 48 335 45.1413 335 41.6213L326.697 24L335 6.37867C335 2.85867 332.433 0 329.273 0L329.283 0Z" fill="#EE3224"></path>
          </g>
          <defs>
            <clipPath id="clip0_2260_15">
              <rect fill="white" height="48" width="335"></rect>
            </clipPath>
          </defs>
        </svg>
      </span>
    </div>
  </div>

  <div>
    <p>
      {intro}
    </p>
  </div>

  <div class="search-header">
    <div class="search-header_title">{searchbytext}</div>
    <div class="search-header__radios">
      <label class="active" id="store">
        <input checked="checked" name="option" type="radio" />
        <span class="radio"> &nbsp; </span>
        <span class="text"> Store </span>
      </label>
      <label id="event">
        <input name="option" type="radio" />
        <span class="radio"> &nbsp; </span>
        <span class="text"> Event </span>
      </label>
      <div class="dropdown" id="storeContainer">
        <select id="locationFilter" name="location" class="dropdown__select" style={{ display: "none" }}>
          {stores.map((store) => (
            <option key={store.value} id={store.value} value={store.value}>
              {store.label}
            </option>
          ))}
          </select>
      </div>
      <div class="dropdown" id="eventContainer">
        <select id="eventSelector" class="event-names dropdown__select" style={{ display: "none" }}>
            {events.map((event) => (
              <option key={event.value} id={event.value} value={event.value}>
                {event.label}
              </option>
            ))}
        </select>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

EventsHeader.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  searchbytext: PropTypes.string,
  stores: PropTypes.array,
  events: PropTypes.array,
};
