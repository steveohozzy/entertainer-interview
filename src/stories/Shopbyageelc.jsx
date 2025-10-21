import PropTypes from "prop-types";

/** Primary UI component for user interaction */
export const ShopByAgeElc = ({
  item1age,
  item1textunderage,
  item1link,
  item1dataelementtype,
  item1datapromotionindex,
  item1datapromotionname,
  item1datagtmvispollingid8511273_2666,
  item1datagtmvisfirstonscreen8511273_2666,
  item1datagtmvistotalvisibletime8511273_2666,
  item1datagtmvishasfired8511273_2666,
  item2age,
  item2textunderage,
  item2link,
  item2dataelementtype,
  item2datapromotionindex,
  item2datapromotionname,
  item2datagtmvispollingid8511273_2666,
  item2datagtmvisfirstonscreen8511273_2666,
  item2datagtmvistotalvisibletime8511273_2666,
  item2datagtmvishasfired8511273_2666,
  item3age,
  item3textunderage,
  item3link,
  item3dataelementtype,
  item3datapromotionindex,
  item3datapromotionname,
  item3datagtmvispollingid8511273_2666,
  item3datagtmvisfirstonscreen8511273_2666,
  item3datagtmvistotalvisibletime8511273_2666,
  item3datagtmvishasfired8511273_2666,
  item4age,
  item4textunderage,
  item4link,
  item4dataelementtype,
  item4datapromotionindex,
  item4datapromotionname,
  item4datagtmvispollingid8511273_2666,
  item4datagtmvisfirstonscreen8511273_2666,
  item4datagtmvistotalvisibletime8511273_2666,
  item4datagtmvishasfired8511273_2666,
  item5age,
  item5textunderage,
  item5link,
  item5dataelementtype,
  item5datapromotionindex,
  item5datapromotionname,
  item5datagtmvispollingid8511273_2666,
  item5datagtmvisfirstonscreen8511273_2666,
  item5datagtmvistotalvisibletime8511273_2666,
  item5datagtmvishasfired8511273_2666,
  item6age,
  item6textunderage,
  item6link,
  item6dataelementtype,
  item6datapromotionindex,
  item6datapromotionname,
  item6datagtmvispollingid8511273_2666,
  item6datagtmvisfirstonscreen8511273_2666,
  item6datagtmvistotalvisibletime8511273_2666,
  item6datagtmvishasfired8511273_2666,
}) => {
  return (
    <>
      <style>
        {`
  .hp-shop-age {
    margin: 40px auto 0;
    padding: 0 20px;
    max-width: 944px;
  }

  .hp-shop-age ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px auto 0;
    padding: 0;
  }

  .hp-shop-age ul li {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    margin-top: 4vw;
    padding: 0;
    list-style: none;
    width: calc(100% / 3 - 10px);
    transition: opacity 0.5s;
    -webkit-transition: opacity 0.5s;
    opacity: 1;
  }

  .hp-shop-age ul li.zero-three-months {
    margin: 0;
    background: url(https://www.thetoyshop.com/medias/elc-hp-shop-by-age-train-0-3-months.png?context=bWFzdGVyfHJvb3R8MjY1Nzl8aW1hZ2UvcG5nfGFHRXlMMmcwWVM4eE1qRXpPREU1T0RneU56QXpPQzlsYkdNdGFIQXRjMmh2Y0MxaWVTMWhaMlV0ZEhKaGFXNHRNQzB6TFcxdmJuUm9jeTV3Ym1jfDViMTA3YTQyOTUzM2E4MDcwYjFjMzI3NTE2YzkzM2FjZjhlNTI1ZWYyMTljZDY1ZmNmOWJlMjBlNTFkMzRiYTg)
      no-repeat;
    background-size: contain;
  }

  .hp-shop-age ul li.three-six-months {
    background: url(https://www.thetoyshop.com/medias/elc-hp-shop-by-age-train-3-6-months.png?context=bWFzdGVyfHJvb3R8MTk2Nzh8aW1hZ2UvcG5nfGFEUmlMMmcwWVM4eE1qRXpPREU1T0RnMU9UZ3dOaTlsYkdNdGFIQXRjMmh2Y0MxaWVTMWhaMlV0ZEhKaGFXNHRNeTAyTFcxdmJuUm9jeTV3Ym1jfDI2NjgyZjA2ZWMxMWY0NzZmYmVlNTMyZGY5MDFjMDg1YjQ4OTg2ZGI3MjViYjliZDg5YThjOTI3NTE0M2ZkODY)
      no-repeat;
    background-size: contain;
  }

  .hp-shop-age ul li.six-twelve-months {
    background: url(https://www.thetoyshop.com/medias/elc-hp-shop-by-age-train-6-12-months.png?context=bWFzdGVyfHJvb3R8MTk1NjR8aW1hZ2UvcG5nfGFHUTVMMmd3TXk4eE1qRXpPREU1T1RBeU16WTBOaTlsYkdNdGFIQXRjMmh2Y0MxaWVTMWhaMlV0ZEhKaGFXNHROaTB4TWkxdGIyNTBhSE11Y0c1bnw3YmNlYjQ2ZDQ1MzliNzNlOTU0ZTA3MjBlOGFhM2Q4MGI3MGZiYTljNzNkMTdiM2U0OTFhNGRmMmZlM2U5ZDM5)
      no-repeat;
    background-size: contain;
  }

  .hp-shop-age ul li.one-two-years {
    background: url(https://www.thetoyshop.com/medias/elc-hp-shop-by-age-train-1-2-years.png?context=bWFzdGVyfHJvb3R8MTk3OTR8aW1hZ2UvcG5nfGFETXdMMmd3TkM4eE1qRXpPREU1T1RBMU5qUXhOQzlsYkdNdGFIQXRjMmh2Y0MxaWVTMWhaMlV0ZEhKaGFXNHRNUzB5TFhsbFlYSnpMbkJ1Wnd8ZGNmYTQ5YzBmNGYwMzk1M2UzNzlkZjI3ODQ4YzBmZDEyMGZlZDgxYjQwOWI4ZWFhMmQ1ZmI0NmJlYTA0NjMxNg)
      no-repeat;
    background-size: contain;
  }

  .hp-shop-age ul li.two-three-years {
    background: url(https://www.thetoyshop.com/medias/elc-hp-shop-by-age-train-2-3-years.png?context=bWFzdGVyfHJvb3R8MTk3MTZ8aW1hZ2UvcG5nfGFEZzNMMmd3TkM4eE1qRXpPREU1T1RBNE9URTRNaTlsYkdNdGFIQXRjMmh2Y0MxaWVTMWhaMlV0ZEhKaGFXNHRNaTB6TFhsbFlYSnpMbkJ1Wnd8YWU4M2VhNDRhYjNmZTJjNjA5Yjc0OTlhOGNiZTQ0ODQ2ZWFjY2RkYjU1ZWNjOWRjODExNTZkMjc4N2RhNTJlYw)
      no-repeat;
    background-size: contain;
  }

  .hp-shop-age ul li.three-four-years {
    background: url(https://www.thetoyshop.com/medias/elc-hp-shop-by-age-train-3-4-years.png?context=bWFzdGVyfHJvb3R8MTk1OTV8aW1hZ2UvcG5nfGFEUXdMMmd3Tnk4eE1qRXpPREU1T1RFeU1UazFNQzlsYkdNdGFIQXRjMmh2Y0MxaWVTMWhaMlV0ZEhKaGFXNHRNeTAwTFhsbFlYSnpMbkJ1Wnd8YjhhMzdmNzdlYzQxNzg4OTJiYzU4ZjFjMWRiZDI4YjgzNWU5MWQ3MTRlODAwNzIzZjRjZDJjYWU2MDYyN2FiMQ)
      no-repeat;
    background-size: contain;
  }

  .hp-shop-age ul li a {
    width: 100%;
    color: #fff;
  }

  .hp-shop-age ul li:hover {
    opacity: 0.5;
  }

  .hp-shop-age ul li img {
    display: block;
    width: 100%;
  }

  .hp-shop-age ul h3 {
    display: block;
    margin: 0;
    padding: 3vw 0 10vw;
    font-size: 6vw;
    line-height: 100%;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.5px;
    color: #ffffff;
    text-decoration: none;
    text-transform: none;
    width: 100%;
  }

  .hp-shop-age ul h3 span {
    display: block;
    font-size: 3.5vw;
    line-height: 100%;
    font-weight: bold;
  }

  .hp-shop-age ul li.zero-three-months h3 {
    padding: 1vw 0 0 3vw;
  }

  @media (min-width: 768px) {
    .hp-shop-age ul li {
      margin: 5vw 0 0;
      width: calc(100% / 3 - 10px);
    }

    .hp-shop-age ul li.zero-three-months {
      margin: 0;
      background: url(https://www.thetoyshop.com/medias/elc-hp-shop-by-age-train-0-3-months.png?context=bWFzdGVyfHJvb3R8MjY1Nzl8aW1hZ2UvcG5nfGFHRXlMMmcwWVM4eE1qRXpPREU1T0RneU56QXpPQzlsYkdNdGFIQXRjMmh2Y0MxaWVTMWhaMlV0ZEhKaGFXNHRNQzB6TFcxdmJuUm9jeTV3Ym1jfDViMTA3YTQyOTUzM2E4MDcwYjFjMzI3NTE2YzkzM2FjZjhlNTI1ZWYyMTljZDY1ZmNmOWJlMjBlNTFkMzRiYTg)
        no-repeat;
      background-size: contain;
    }

    .hp-shop-age ul h3 {
      padding: 6vw 0 11vw;
      font-size: 5vw;
      line-height: 100%;
      font-weight: bold;
    }

    .hp-shop-age ul h3 span {
      font-size: 3vw;
      line-height: 100%;
      font-weight: bold;
    }
  }

  @media (min-width: 1024px) {
    .hp-shop-age ul {
      padding: 0 0 20px;
    }

    .hp-shop-age ul li {
      margin: 24px 0 0;
      width: calc(100% / 6 - 20px);
    }

    .hp-shop-age ul h3 {
      padding: 20px 0 50px;
      font-size: 24px;
      line-height: 100%;
      font-weight: bold;
    }

    .hp-shop-age ul h3 span {
      font-size: 16px;
      line-height: 100%;
      font-weight: bold;
    }

    .hp-shop-age ul li.zero-three-months h3 {
      padding: 10px 0 0 15px;
    }
  }
        `}
      </style>
      <div class="hp-shop-age">
  <ul>
    <li class="zero-three-months">
      <a data-element-type={item1dataelementtype} data-promotion-index={item1datapromotionindex} data-promotion-name={item1datapromotionname} href={item1link} data-gtm-vis-polling-id8511273_2666={item1datagtmvispollingid8511273_2666}>
      </a>
      <h3>
        <a data-element-type={item1dataelementtype} data-promotion-index={item1datapromotionindex} data-promotion-name={item1datapromotionname} href={item1link} data-gtm-vis-first-on-screen8511273_2666={item1datagtmvisfirstonscreen8511273_2666} data-gtm-vis-total-visible-time8511273_2666={item1datagtmvistotalvisibletime8511273_2666} data-gtm-vis-has-fired8511273_2666={item1datagtmvishasfired8511273_2666}>{item1age} <span>{item1textunderage}</span></a>
      </h3>
      <a data-element-type={item1dataelementtype}  data-promotion-index={item1datapromotionindex} data-promotion-name={item1datapromotionname} href={item1link} data-gtm-vis-polling-id8511273_2666={item1datagtmvispollingid8511273_2666}>
      </a>
    </li>

    <li class="three-six-months">
      <a data-element-type={item2dataelementtype} data-promotion-index={item2datapromotionindex} data-promotion-name={item2datapromotionname} href={item2link} data-gtm-vis-polling-id8511273_2666={item2datagtmvispollingid8511273_2666}>
      </a>
      <h3>
        <a data-element-type={item2dataelementtype} data-promotion-index={item2datapromotionindex} data-promotion-name={item2datapromotionname} href={item2link} data-gtm-vis-first-on-screen8511273_2666={item2datagtmvisfirstonscreen8511273_2666} data-gtm-vis-total-visible-time8511273_2666={item2datagtmvistotalvisibletime8511273_2666} data-gtm-vis-has-fired8511273_2666={item2datagtmvishasfired8511273_2666}>{item2age} <span>{item2textunderage}</span></a>
      </h3>
      <a data-element-type={item2dataelementtype}  data-promotion-index={item2datapromotionindex} data-promotion-name={item2datapromotionname} href={item2link} data-gtm-vis-polling-id8511273_2666={item2datagtmvispollingid8511273_2666}>
      </a>
    </li>

    <li class="six-twelve-months">
      <a data-element-type={item1dataelementtype} data-promotion-index={item3datapromotionindex} data-promotion-name={item3datapromotionname} href={item3link} data-gtm-vis-polling-id8511273_2666={item3datagtmvispollingid8511273_2666}>
      </a>
      <h3>
        <a data-element-type={item3dataelementtype} data-promotion-index={item3datapromotionindex} data-promotion-name={item3datapromotionname} href={item3link} data-gtm-vis-first-on-screen8511273_2666={item3datagtmvisfirstonscreen8511273_2666} data-gtm-vis-total-visible-time8511273_2666={item3datagtmvistotalvisibletime8511273_2666} data-gtm-vis-has-fired8511273_2666={item3datagtmvishasfired8511273_2666}>{item3age} <span>{item3textunderage}</span></a>
      </h3>
      <a data-element-type={item3dataelementtype}  data-promotion-index={item3datapromotionindex} data-promotion-name={item3datapromotionname} href={item3link} data-gtm-vis-polling-id8511273_2666={item3datagtmvispollingid8511273_2666}>
      </a>
    </li>

    <li class="one-two-years">
      <a data-element-type={item4dataelementtype} data-promotion-index={item4datapromotionindex} data-promotion-name={item4datapromotionname} href={item4link} data-gtm-vis-polling-id8511273_2666={item4datagtmvispollingid8511273_2666}>
      </a>
      <h3>
        <a data-element-type={item4dataelementtype} data-promotion-index={item4datapromotionindex} data-promotion-name={item4datapromotionname} href={item4link} data-gtm-vis-first-on-screen8511273_2666={item4datagtmvisfirstonscreen8511273_2666} data-gtm-vis-total-visible-time8511273_2666={item4datagtmvistotalvisibletime8511273_2666} data-gtm-vis-has-fired8511273_2666={item4datagtmvishasfired8511273_2666}>{item4age} <span>{item4textunderage}</span></a>
      </h3>
      <a data-element-type={item4dataelementtype}  data-promotion-index={item4datapromotionindex} data-promotion-name={item4datapromotionname} href={item4link} data-gtm-vis-polling-id8511273_2666={item4datagtmvispollingid8511273_2666}>
      </a>
    </li>

    <li class="two-three-years">
      <a data-element-type={item5dataelementtype} data-promotion-index={item5datapromotionindex} data-promotion-name={item5datapromotionname} href={item5link} data-gtm-vis-polling-id8511273_2666={item5datagtmvispollingid8511273_2666}>
      </a>
      <h3>
        <a data-element-type={item5dataelementtype} data-promotion-index={item5datapromotionindex} data-promotion-name={item5datapromotionname} href={item5link} data-gtm-vis-first-on-screen8511273_2666={item5datagtmvisfirstonscreen8511273_2666} data-gtm-vis-total-visible-time8511273_2666={item5datagtmvistotalvisibletime8511273_2666} data-gtm-vis-has-fired8511273_2666={item5datagtmvishasfired8511273_2666}>{item5age} <span>{item5textunderage}</span></a>
      </h3>
      <a data-element-type={item5dataelementtype}  data-promotion-index={item5datapromotionindex} data-promotion-name={item5datapromotionname} href={item5link} data-gtm-vis-polling-id8511273_2666={item5datagtmvispollingid8511273_2666}>
      </a>
    </li>

    <li class="three-four-years">
      <a data-element-type={item6dataelementtype} data-promotion-index={item6datapromotionindex} data-promotion-name={item6datapromotionname} href={item6link} data-gtm-vis-polling-id8511273_2666={item6datagtmvispollingid8511273_2666}>
      </a>
      <h3>
        <a data-element-type={item6dataelementtype} data-promotion-index={item6datapromotionindex} data-promotion-name={item6datapromotionname} href={item6link} data-gtm-vis-first-on-screen8511273_2666={item6datagtmvisfirstonscreen8511273_2666} data-gtm-vis-total-visible-time8511273_2666={item6datagtmvistotalvisibletime8511273_2666} data-gtm-vis-has-fired8511273_2666={item6datagtmvishasfired8511273_2666}>{item6age} <span>{item6textunderage}</span></a>
      </h3>
      <a data-element-type={item6dataelementtype}  data-promotion-index={item6datapromotionindex} data-promotion-name={item6datapromotionname} href={item6link} data-gtm-vis-polling-id8511273_2666={item6datagtmvispollingid8511273_2666}>
      </a>
    </li>
  </ul>
</div>
    </>
  );
};

ShopByAgeElc.propTypes = {
  /** contents */
  item1age: PropTypes.string,
  item1textunderage: PropTypes.string,
  item1link: PropTypes.string,
  item1dataelementtype: PropTypes.string,
  item1datapromotionindex: PropTypes.string,
  item1datapromotionname: PropTypes.string,
  item1datagtmvispollingid8511273_2666: PropTypes.string,
  item1datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  item1datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  item1datagtmvishasfired8511273_2666: PropTypes.string,
  item2age: PropTypes.string,
  item2textunderage: PropTypes.string,
  item2link: PropTypes.string,
  item2dataelementtype: PropTypes.string,
  item2datapromotionindex: PropTypes.string,
  item2datapromotionname: PropTypes.string,
  item2datagtmvispollingid8511273_2666: PropTypes.string,
  item2datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  item2datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  item2datagtmvishasfired8511273_2666: PropTypes.string,
  item3age: PropTypes.string,
  item3textunderage: PropTypes.string,
  item3link: PropTypes.string,
  item3dataelementtype: PropTypes.string,
  item3datapromotionindex: PropTypes.string,
  item3datapromotionname: PropTypes.string,
  item3datagtmvispollingid8511273_2666: PropTypes.string,
  item3datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  item3datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  item3datagtmvishasfired8511273_2666: PropTypes.string,
  item4age: PropTypes.string,
  item4textunderage: PropTypes.string,
  item4link: PropTypes.string,
  item4dataelementtype: PropTypes.string,
  item4datapromotionindex: PropTypes.string,
  item4datapromotionname: PropTypes.string,
  item4datagtmvispollingid8511273_2666: PropTypes.string,
  item4datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  item4datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  item4datagtmvishasfired8511273_2666: PropTypes.string,
  item5age: PropTypes.string,
  item5textunderage: PropTypes.string,
  item5link: PropTypes.string,
  item5dataelementtype: PropTypes.string,
  item5datapromotionindex: PropTypes.string,
  item5datapromotionname: PropTypes.string,
  item5datagtmvispollingid8511273_2666: PropTypes.string,
  item5datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  item5datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  item5datagtmvishasfired8511273_2666: PropTypes.string,
  item6age: PropTypes.string,
  item6textunderage: PropTypes.string,
  item6link: PropTypes.string,
  item6dataelementtype: PropTypes.string,
  item6datapromotionindex: PropTypes.string,
  item6datapromotionname: PropTypes.string,
  item6datagtmvispollingid8511273_2666: PropTypes.string,
  item6datagtmvisfirstonscreen8511273_2666: PropTypes.string,
  item6datagtmvistotalvisibletime8511273_2666: PropTypes.string,
  item6datagtmvishasfired8511273_2666: PropTypes.string,
};
