import './eventmodule.css';

export const EventModule = ({
  id,
  title,
  image,
  imagealt,
  buttontext,
  buttonlink,
  blurb,
  rows = [],
  updateRows,
  forPreview = false,
}) => {
const stores = [
  { name: "Aberdeen Union Square", link: "https://www.thetoyshop.com/store/aberdeen" },
  { name: "Altrincham", link: "https://www.thetoyshop.com/store/altrincham" },
  { name: "Amersham", link: "https://www.thetoyshop.com/store/amersham" },
  { name: "Antrim", link: "https://www.thetoyshop.com/store/antrim" },
  { name: "Ashford", link: "https://www.thetoyshop.com/store/ashford" },
  { name: "Aylesbury", link: "https://www.thetoyshop.com/store/aylesbury" },
  { name: "Banbury", link: "https://www.thetoyshop.com/store/banbury" },
  { name: "Barnsley", link: "https://www.thetoyshop.com/store/barnsley" },
  { name: "Barnstaple", link: "https://www.thetoyshop.com/store/barnstaple" },
  { name: "Basildon", link: "https://www.thetoyshop.com/store/basildon" },
  { name: "Basingstoke", link: "https://www.thetoyshop.com/store/basingstoke" },
  { name: "Bath", link: "https://www.thetoyshop.com/store/bath" },
  { name: "Belfast", link: "https://www.thetoyshop.com/store/belfast" },
  { name: "Beverley", link: "https://www.thetoyshop.com/store/beverley" },
  { name: "Bexleyheath", link: "https://www.thetoyshop.com/store/bexleyheath" },
  { name: "Birmingham Bullring", link: "https://www.thetoyshop.com/store/birmingham" },
  { name: "Bishop's Stortford", link: "https://www.thetoyshop.com/store/bishop-stortford" },
  { name: "Birkenhead", link: "https://www.thetoyshop.com/store/birkenhead" },
  { name: "Blackburn", link: "https://www.thetoyshop.com/store/blackburn" },
  { name: "Bluewater - Greenhithe", link: "https://www.thetoyshop.com/store/bluewater" },
  { name: "Bolton", link: "https://www.thetoyshop.com/store/bolton" },
  { name: "Bournemouth", link: "https://www.thetoyshop.com/store/bournemouth" },
  { name: "Bradford", link: "https://www.thetoyshop.com/store/bradford" },
  { name: "Bracknell", link: "https://www.thetoyshop.com/store/bracknell" },
  { name: "Braehead", link: "https://www.thetoyshop.com/store/braehead" },
  { name: "Brighton", link: "https://www.thetoyshop.com/store/brighton" },
  { name: "Bristol Cabot Circus", link: "https://www.thetoyshop.com/store/bristol-cabot-circus" },
  { name: "Bristol Cribbs Causeway", link: "https://www.thetoyshop.com/store/cribbs-causeway-bristol" },
  { name: "Bromley Lower Mall", link: "https://www.thetoyshop.com/store/bromley%20lower%20mall" },
  { name: "Bromley Upper Mall", link: "https://www.thetoyshop.com/store/bromley" },
  { name: "Burnley", link: "https://www.thetoyshop.com/store/burnley" },
  { name: "Burton Upon Trent", link: "https://www.thetoyshop.com/store/burton-upon-trent" },
  { name: "Bury", link: "https://www.thetoyshop.com/store/bury" },
  { name: "Camberley", link: "https://www.thetoyshop.com/store/camberley" },
  { name: "Cambridge", link: "https://www.thetoyshop.com/store/cambridge" },
  { name: "Cardiff", link: "https://www.thetoyshop.com/store/cardiff" },
  { name: "Carlisle", link: "https://www.thetoyshop.com/store/carlisle" },
  { name: "Carmarthen", link: "https://www.thetoyshop.com/store/carmarthen" },
  { name: "Chatham", link: "https://www.thetoyshop.com/store/chatham" },
  { name: "Chelmsford", link: "https://www.thetoyshop.com/store/chelmsford" },
  { name: "Cheshire Coliseum", link: "https://www.thetoyshop.com/store/coliseum" },
  { name: "Chester", link: "https://www.thetoyshop.com/store/chester" },
  { name: "Chester Broughton Shopping Park", link: "https://www.thetoyshop.com/store/chester-broughton" },
  { name: "Chesterfield", link: "https://www.thetoyshop.com/store/chesterfield" },
  { name: "Chichester", link: "https://www.thetoyshop.com/store/chichester-184" },
  { name: "Colchester", link: "https://www.thetoyshop.com/store/colchester" },
  { name: "Corby", link: "https://www.thetoyshop.com/store/corby" },
  { name: "Coventry", link: "https://www.thetoyshop.com/store/coventry" },
  { name: "Crawley", link: "https://www.thetoyshop.com/store/crawley" },
  { name: "Cumbernauld", link: "https://www.thetoyshop.com/store/cumbernauld" },
  { name: "Cwmbran", link: "https://www.thetoyshop.com/store/cwmbran" },
  { name: "Dalton Park", link: "https://www.thetoyshop.com/store/dalton-park" },
  { name: "Derby", link: "https://www.thetoyshop.com/store/derby" },
  { name: "Didcot", link: "https://www.thetoyshop.com/store/didcot" },
  { name: "Doncaster", link: "https://www.thetoyshop.com/store/doncaster" },
  { name: "Douglas", link: "https://www.thetoyshop.com/store/douglas" },
  { name: "Dover", link: "https://www.thetoyshop.com/store/dover" },
  { name: "Dunfermline", link: "https://www.thetoyshop.com/store/dunfermline" },
  { name: "East Kilbride", link: "https://www.thetoyshop.com/store/east-kilbride" },
  { name: "Eastleigh", link: "https://www.thetoyshop.com/store/eastleigh" },
  { name: "Edinburgh", link: "https://www.thetoyshop.com/store/edinburgh" },
  { name: "Exeter", link: "https://www.thetoyshop.com/store/exeter" },
  { name: "Glasgow Silverburn", link: "https://www.thetoyshop.com/store/glasgow-silverburn" },
  { name: "Glasgow St Enoch", link: "https://www.thetoyshop.com/store/st-enoch" },
  { name: "Gloucester", link: "https://www.thetoyshop.com/store/gloucester" },
  { name: "Grimsby", link: "https://www.thetoyshop.com/store/grimsby" },
  { name: "Guildford", link: "https://www.thetoyshop.com/store/guildford" },
  { name: "Gunwharf Quays", link: "https://www.thetoyshop.com/store/gunwharf-quays" },
  { name: "Hanley", link: "https://www.thetoyshop.com/store/hanley" },
  { name: "Harlow", link: "https://www.thetoyshop.com/store/harlow" },
  { name: "Hemel Hempstead", link: "https://www.thetoyshop.com/store/hemel-hempstead" },
  { name: "Hereford", link: "https://www.thetoyshop.com/store/hereford" },
  { name: "Huddersfield", link: "https://www.thetoyshop.com/store/huddersfield" },
  { name: "Hull", link: "https://www.thetoyshop.com/store/hull" },
  { name: "Ilford", link: "https://www.thetoyshop.com/store/ilford" },
  { name: "Inverness", link: "https://www.thetoyshop.com/store/inverness" },
  { name: "Ipswich", link: "https://www.thetoyshop.com/store/ipswich" },
  { name: "Jersey", link: "https://www.thetoyshop.com/store/jersey" },
  { name: "King's Lynn Vancouver Quarter", link: "https://www.thetoyshop.com/store/kings-lynn-vancouver" },
  { name: "Kingston Bentalls", link: "https://www.thetoyshop.com/store/kingston-bentalls" },
  { name: "Lakeside", link: "https://www.thetoyshop.com/store/lakeside" },
  { name: "Lancaster", link: "https://www.thetoyshop.com/store/lancaster" },
  { name: "Leamington Spa", link: "https://www.thetoyshop.com/store/leamington-spa" },
  { name: "Leeds Springs", link: "https://www.thetoyshop.com/store/leeds-springs" },
  { name: "Leeds Trinity", link: "https://www.thetoyshop.com/store/leeds-trinity" },
  { name: "Leeds White Rose", link: "https://www.thetoyshop.com/store/leeds" },
  { name: "Leicester", link: "https://www.thetoyshop.com/store/leicester" },
  { name: "Lichfield", link: "https://www.thetoyshop.com/store/lichfield" },
  { name: "Lincoln", link: "https://www.thetoyshop.com/store/lincoln" },
  { name: "Liverpool One", link: "https://www.thetoyshop.com/store/liverpool" },
  { name: "Liverpool St Johns", link: "https://www.thetoyshop.com/store/liverpool-st-johns" },
  { name: "Livingston", link: "https://www.thetoyshop.com/store/livingston" },
  { name: "Llandudno", link: "https://www.thetoyshop.com/store/llandudno" },
  { name: "Macclesfield", link: "https://www.thetoyshop.com/store/macclesfield" },
  { name: "Manchester Arndale", link: "https://www.thetoyshop.com/store/arndale" },
  { name: "Merryhill", link: "https://www.thetoyshop.com/store/merryhill" },
  { name: "Metro Centre - Gateshead", link: "https://www.thetoyshop.com/store/metro-centre" },
  { name: "Middlesbrough", link: "https://www.thetoyshop.com/store/middlesbrough" },
  { name: "Milton Keynes", link: "https://www.thetoyshop.com/store/milton-keynes" },
  { name: "Midsomer Norton", link: "https://www.thetoyshop.com/store/midsomer-norton" },
  { name: "Newbury", link: "https://www.thetoyshop.com/store/newbury" },
  { name: "Newport - Isle of Wight", link: "https://www.thetoyshop.com/store/newport-iow" },
  { name: "Newport - Wales", link: "https://www.thetoyshop.com/store/newport" },
  { name: "Northampton", link: "https://www.thetoyshop.com/store/northampton" },
  { name: "Northwich", link: "https://www.thetoyshop.com/store/northwich" },
  { name: "Norwich", link: "https://www.thetoyshop.com/store/norwich" },
  { name: "Nottingham", link: "https://www.thetoyshop.com/store/nottingham" },
  { name: "Oldham", link: "https://www.thetoyshop.com/store/oldham" },
  { name: "Peterborough", link: "https://www.thetoyshop.com/store/peterborough" },
  { name: "Plymouth", link: "https://www.thetoyshop.com/store/plymouth" },
  { name: "Port Talbot", link: "https://www.thetoyshop.com/store/port-talbot" },
  { name: "Reading", link: "https://www.thetoyshop.com/store/reading" },
  { name: "Redditch", link: "https://www.thetoyshop.com/store/redditch" },
  { name: "Romford Brewery", link: "https://www.thetoyshop.com/store/romford" },
  { name: "Rushden Lakes", link: "https://www.thetoyshop.com/store/rushden-lakes" },
  { name: "Sheffield Meadowhall", link: "https://www.thetoyshop.com/store/sheffield-meadowhall" },
  { name: "Shrewsbury", link: "https://www.thetoyshop.com/store/shrewsbury" },
  { name: "Southport", link: "https://www.thetoyshop.com/store/southport" },
  { name: "Stevenage", link: "https://www.thetoyshop.com/store/stevenage" },
  { name: "Stirling", link: "https://www.thetoyshop.com/store/stirling" },
  { name: "Stockport", link: "https://www.thetoyshop.com/store/stockport" },
  { name: "Stratford - Westfield", link: "https://www.thetoyshop.com/store/stratford" },
  { name: "Sunderland", link: "https://www.thetoyshop.com/store/sunderland" },
  { name: "Sutton Coldfield", link: "https://www.thetoyshop.com/store/sutton-coldfield" },
  { name: "Swindon", link: "https://www.thetoyshop.com/store/swindon" },
  { name: "Taunton", link: "https://www.thetoyshop.com/store/taunton" },
  { name: "Telford", link: "https://www.thetoyshop.com/store/telford" },
  { name: "The O2 London", link: "https://www.thetoyshop.com/store/o2-arena" },
  { name: "Torquay", link: "https://www.thetoyshop.com/store/torquay" },
  { name: "Truro", link: "https://www.thetoyshop.com/store/truro" },
  { name: "Uxbridge", link: "https://www.thetoyshop.com/store/uxbridge" },
  { name: "Walsall", link: "https://www.thetoyshop.com/store/walsall" },
  { name: "Warrington", link: "https://www.thetoyshop.com/store/warrington" },
  { name: "Watford", link: "https://www.thetoyshop.com/store/watford" },
  { name: "Welwyn Garden City", link: "https://www.thetoyshop.com/store/welwyn-garden-city" },
  { name: "West Bromwich", link: "https://www.thetoyshop.com/store/west-bromwich" },
  { name: "White City", link: "https://www.thetoyshop.com/store/white-city" },
  { name: "Whiteley", link: "https://www.thetoyshop.com/store/whiteley" },
  { name: "Winchester", link: "https://www.thetoyshop.com/store/winchester" },
  { name: "Witney", link: "https://www.thetoyshop.com/store/witney" },
  { name: "Woking", link: "https://www.thetoyshop.com/store/woking" },
  { name: "Workington", link: "https://www.thetoyshop.com/store/workington" },
  { name: "Wolverhampton", link: "https://www.thetoyshop.com/store/wolverhampton" },
  { name: "Worcester", link: "https://www.thetoyshop.com/store/worcester" },
  { name: "Yate", link: "https://www.thetoyshop.com/store/yate" },
  { name: "Yeovil", link: "https://www.thetoyshop.com/store/yeovil" },
  { name: "York", link: "https://www.thetoyshop.com/store/york" },
];

  const handleRowChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;

    if (field === 'store') {
      const selectedStore = stores.find((s) => s.name === value);
      newRows[index].storeLink = selectedStore?.link || '';
    }

    updateRows(newRows);
  };

   // Format date for UK display
    const formatUKDate = (isoDate) => {
      if (!isoDate) return '';
      const d = new Date(isoDate);
      if (isNaN(d)) return isoDate;
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    };

  if (forPreview) {
    // HTML Preview mode: show spans instead of inputs/select
    const sortedRows = [...rows].sort((a, b) => {
  const getDate = (row) => {
    if (row.type === 'range') return row.startDate || row.endDate;
    return row.date;
  };

  return new Date(getDate(a)) - new Date(getDate(b));
});
    return (
      <div className="event-container" id={id}>
        <div className="image-container">
          <div className="event-title">{title}</div>
          {image && <img src={image} alt={imagealt} />}
          {buttonlink && 
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
              <span class="basket-icon"><svg width="22" height="18" viewBox="0 0 22 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"></path></svg></span>
              <span class="star-end">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z" fill-opacity="0.5"></path>
                </svg>
              </span>
            </a>
          }
        </div>

        <div className="event-details">
          <div className="character-intro" dangerouslySetInnerHTML={{ __html: blurb }} />
          <ul className="event-dates">
  {sortedRows.map((row, idx) => {
    let dateDisplay = '';

    if (row.type === 'single') {
      dateDisplay = formatUKDate(row.date);
    } else if (row.type === 'times') {
      const formattedDate = formatUKDate(row.date);
      dateDisplay = row.time ? `${formattedDate} ${row.time}` : formattedDate;
    } else if (row.type === 'range') {
      const start = formatUKDate(row.startDate);
      const end = formatUKDate(row.endDate);
      dateDisplay = start && end ? `${start} - ${end}` : start || end || '';
    }

    return (
      <li key={idx}>
        <span><strong>{dateDisplay}</strong></span>
        <span>
          <a href={row.storeLink} target="_blank" title={`The Entertainer in ${row.store}`} rel="noreferrer">
            {row.store}
          </a>
        </span>
        <span className="price">{row.price}</span>
      </li>
    );
  })}
</ul>
        </div>
      </div>
    );
  }

  // Editable mode (normal Storybook editor)
  return (
    <div className="event-container" id={id}>
      <div className="image-container">
        <div className="event-title">{title}</div>
        {image && <img src={image} alt={imagealt} />}
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
        <span class="basket-icon"><svg width="22" height="18" viewBox="0 0 22 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"></path></svg></span>
        <span class="star-end">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z" fill-opacity="0.5"></path>
          </svg>
        </span>
      </a>
      </div>

      <div className="event-details">
        <div className="character-intro" dangerouslySetInnerHTML={{ __html: blurb }} />

        <ul className="event-dates">
  {rows.map((row, index) => (
    <li key={index}>
      {/* Store selector */}
      <select
        value={row.store}
        onChange={(e) => handleRowChange(index, 'store', e.target.value)}
      >
        <option value="">Select Store</option>
        {stores.map((s) => (
          <option key={s.name} value={s.name}>{s.name}</option>
        ))}
      </select>

      {/* Row type selector */}
      <select
        value={row.type || 'single'}
        onChange={(e) => handleRowChange(index, 'type', e.target.value)}
        style={{ marginLeft: 8 }}
      >
        <option value="single">Single Date</option>
        <option value="times">Date & Time</option>
        <option value="range">Date Range</option>
      </select>

      {/* Conditional input rendering */}
      {row.type === 'single' && (
        <input
          type="date"
          value={row.date || ''}
          onChange={(e) => handleRowChange(index, 'date', e.target.value)}
          style={{ marginLeft: 8 }}
        />
      )}

      {row.type === 'times' && (
        <>
          <input
            type="date"
            value={row.date || ''}
            onChange={(e) => handleRowChange(index, 'date', e.target.value)}
            style={{ marginLeft: 8 }}
          />
          <input
            type="text"
            value={row.time || ''}
            onChange={(e) => handleRowChange(index, 'time', e.target.value)}
            style={{ marginLeft: 8 }}
          />
        </>
      )}

      {row.type === 'range' && (
        <>
          <input
            type="date"
            value={row.startDate || ''}
            onChange={(e) => handleRowChange(index, 'startDate', e.target.value)}
            style={{ marginLeft: 8 }}
          />
          <input
            type="date"
            value={row.endDate || ''}
            onChange={(e) => handleRowChange(index, 'endDate', e.target.value)}
            style={{ marginLeft: 8 }}
          />
        </>
      )}

      {/* Price input */}
      <input
        type="text"
        placeholder="Price"
        value={row.price || ''}
        onChange={(e) => handleRowChange(index, 'price', e.target.value)}
        style={{ marginLeft: 8 }}
      />

      {/* Link preview */}
      {row.storeLink && (
        <a href={row.storeLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8 }}>
          Link
        </a>
      )}
    </li>
  ))}
</ul>
      </div>
    </div>
  );
};