import PropTypes from 'prop-types';


import './eventmodule.css';

/** Primary UI component for user interaction */
export const EventModule = ({
  id,
  title,
  image,
  imagealt,
  buttontext,
  buttonlink,
  blurb,
  row1date,
  row1location,
  row1locationlink,
  row1price,
  row2date,
  row2location,
  row2locationlink,
  row2price,
  row3date,
  row3location,
  row3locationlink,
  row3price,
  row4date,
  row4location,
  row4locationlink,
  row4price,
  row5date,
  row5location,
  row5locationlink,
  row5price,
  row6date,
  row6location,
  row6locationlink,
  row6price,
  row7date,
  row7location,
  row7locationlink,
  row7price,
  row8date,
  row8location,
  row8locationlink,
  row8price,
  row9date,
  row9location,
  row9locationlink,
  row9price,
  row10date,
  row10location,
  row10locationlink,
  row10price,
}) => {
  return (
     <>
      <div class="event-container" id={id}>
    <div class="image-container">
      <div class="event-title">
        {title}
      </div>
      <img src={image} alt={imagealt} title={imagealt} />
      <a href={buttonlink} class="hero-button">
        <span class="swoosh-container">
          <span class="star-start">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z" fill-opacity="0.5"></path>
            </svg>
          </span>
          <span class="swoosh">&nbsp;</span>
        </span>
        {buttontext}
        <span class="basket-icon">
          <svg width="22" height="18" viewBox="0 0 22 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"></path>
          </svg>
        </span>
        <span class="star-end">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z" fill-opacity="0.5"></path>
          </svg>
        </span>
      </a>
    </div>
    <div class="event-details">
      
      <div class="character-intro"dangerouslySetInnerHTML={{__html:blurb}} />

      <ul class="event-dates">
        <li>
          <span>
            <strong>{row1date}</strong>
          </span>
          <span>
            <a href={row1locationlink} target="_blank" title={`The Entertainer in
              ${row1location}`} rel="noreferrer">{row1location}</a>
          </span>
          <span class="price"> {row1price} </span>
        </li>

        {row2date &&
        <li>
          <span>
            <strong>{row2date}</strong>
          </span>
          <span>
            <a href={row2locationlink} target="_blank" title={`The Entertainer in
              ${row2location}`} rel="noreferrer">{row2location}</a>
          </span>
          <span class="price"> {row2price} </span>
        </li>
        }

        {row3date &&
        <li>
          <span>
            <strong>{row3date}</strong>
          </span>
          <span>
            <a href={row3locationlink} target="_blank" title={`The Entertainer in
              ${row3location}`} rel="noreferrer">{row3location}</a>
          </span>
          <span class="price"> {row3price} </span>
        </li>
        }

        {row4date &&
        <li>
          <span>
            <strong>{row4date}</strong>
          </span>
          <span>
            <a href={row4locationlink} target="_blank" title={`The Entertainer in
              ${row4location}`} rel="noreferrer">{row4location}</a>
          </span>
          <span class="price"> {row4price} </span>
        </li>
        }

        {row5date &&
        <li>
          <span>
            <strong>{row5date}</strong>
          </span>
          <span>
            <a href={row5locationlink} target="_blank" title={`The Entertainer in
              ${row5location}`} rel="noreferrer">{row5location}</a>
          </span>
          <span class="price"> {row5price} </span>
        </li>
        }

        {row6date &&
        <li>
          <span>
            <strong>{row6date}</strong>
          </span>
          <span>
            <a href={row6locationlink} target="_blank" title={`The Entertainer in
              ${row6location}`} rel="noreferrer">{row6location}</a>
          </span>
          <span class="price"> {row6price} </span>
        </li>
        }

        {row7date &&
        <li>
          <span>
            <strong>{row7date}</strong>
          </span>
          <span>
            <a href={row7locationlink} target="_blank" title={`The Entertainer in
              ${row7location}`} rel="noreferrer">{row7location}</a>
          </span>
          <span class="price"> {row7price} </span>
        </li>
        }

        {row8date &&
        <li>
          <span>
            <strong>{row8date}</strong>
          </span>
          <span>
            <a href={row8locationlink} target="_blank" title={`The Entertainer in
              ${row8location}`} rel="noreferrer">{row8location}</a>
          </span>
          <span class="price"> {row8price} </span>
        </li>
        }

        {row9date &&
        <li>
          <span>
            <strong>{row9date}</strong>
          </span>
          <span>
            <a href={row9locationlink} target="_blank" title={`The Entertainer in
              ${row9location}`} rel="noreferrer">{row9location}</a>
          </span>
          <span class="price"> {row9price} </span>
        </li>
        }

        {row10date &&
        <li>
          <span>
            <strong>{row10date}</strong>
          </span>
          <span>
            <a href={row10locationlink} target="_blank" title={`The Entertainer in
              ${row10location}`} rel="noreferrer">{row10location}</a>
          </span>
          <span class="price"> {row10price} </span>
        </li>
        }
        
      </ul>
    </div>
  </div>
     </>
  );
};

EventModule.propTypes = {
  /** Event contents */
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  imagealt: PropTypes.string,
  buttontext: PropTypes.string,
  buttonlink: PropTypes.string,
  blurb: PropTypes.string,
  row1date: PropTypes.string,
  row1location: PropTypes.string,
  row1locationlink: PropTypes.string,
  row1price: PropTypes.string,
  row2date: PropTypes.string,
  row2location: PropTypes.string,
  row2locationlink: PropTypes.string,
  row2price: PropTypes.string,
  row3date: PropTypes.string,
  row3location: PropTypes.string,
  row3locationlink: PropTypes.string,
  row3price: PropTypes.string,
  row4date: PropTypes.string,
  row4location: PropTypes.string,
  row4locationlink: PropTypes.string,
  row4price: PropTypes.string,
  row5date: PropTypes.string,
  row5location: PropTypes.string,
  row5locationlink: PropTypes.string,
  row5price: PropTypes.string,
  row6date: PropTypes.string,
  row6location: PropTypes.string,
  row6locationlink: PropTypes.string,
  row6price: PropTypes.string,
  row7date: PropTypes.string,
  row7location: PropTypes.string,
  row7locationlink: PropTypes.string,
  row7price: PropTypes.string,
  row8date: PropTypes.string,
  row8location: PropTypes.string,
  row8locationlink: PropTypes.string,
  row8price: PropTypes.string,
  row9date: PropTypes.string,
  row9location: PropTypes.string,
  row9locationlink: PropTypes.string,
  row9price: PropTypes.string,
  row10date: PropTypes.string,
  row10location: PropTypes.string,
  row10locationlink: PropTypes.string,
  row10price: PropTypes.string,
};
