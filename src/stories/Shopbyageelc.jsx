import PropTypes from "prop-types";

/** Primary UI component for user interaction */
export const ShopByAgeElc = ({
  item1age,
  item1textunderage,
  item1image,
  item1imagealt,
  item1link,
  item1dataelementtype,
  item1datapromotionindex,
  item1datapromotionname,
  item2age,
  item2textunderage,
  item2image,
  item2imagealt,
  item2link,
  item2dataelementtype,
  item2datapromotionindex,
  item2datapromotionname,
  item3age,
  item3textunderage,
  item3image,
  item3imagealt,
  item3link,
  item3dataelementtype,
  item3datapromotionindex,
  item3datapromotionname,
  item4age,
  item4textunderage,
  item4image,
  item4imagealt,
  item4link,
  item4dataelementtype,
  item4datapromotionindex,
  item4datapromotionname,
}) => {
  return (
    <>
      <style>
        {`
  .shop-by-age-container {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    width: 100%;
    margin: 20px auto 20px;
    gap: 5px;
    max-width: 640px;
    padding: 0 10px;
  }

  @media (min-width: 768px) {
    .shop-by-age-container {
      gap: 20px;
    }
  }

  .shop-by-age-container a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    font-size: 12px;
    padding: 5px;
    border-radius: 8px;
    background-color: #a3c46b;
    text-align: center;
    aspect-ratio: 1/1;
    width: 25%;
    transition: all 0.3s;
  }

  @media (min-width: 768px) {
    .shop-by-age-container a {
      font-size: 18px;
      padding: 10px;
    }
  }

  .shop-by-age-container a:nth-child(1) {
    background-color: #a3c46b;
  }

  .shop-by-age-container a:nth-child(2) {
    background-color: #6470b4;
  }

  .shop-by-age-container a:nth-child(3) {
    background-color: #f58c28;
  }

  .shop-by-age-container a:nth-child(4) {
    background-color: #ef4d79
  }

  .shop-by-age-container a:hover {
    transform: scale(1.1);
  }

  .shop-by-age-container a span {
    font-size: 10px;
    font-family: "Nunito Bold", "Tahoma Bold", sans-serif;
    display: block;
    width: 100%;
    text-align: center;
  }

  @media (min-width: 768px) {
    .shop-by-age-container a span {
      font-size: 14px;
    }
  }

  .shop-by-age-container a span img {
    width: 100%;
    max-width: 100px;
    margin: 0 auto;
  }
        `}
      </style>
      <div class="shop-by-age-container">
        <a data-element-type={item1dataelementtype} data-promotion-index={item1datapromotionindex} data-promotion-name={item1datapromotionname} href={item1link}>{item1age} <span>{item1textunderage}
        {item1image && 
        <>
          <br />
          <img src={item1image} alt={item1imagealt} />
        </>
        }
        </span>
        </a>
        <a data-element-type={item2dataelementtype} data-promotion-index={item2datapromotionindex} data-promotion-name={item2datapromotionname} href={item2link}>{item2age} <span>{item2textunderage}
        {item2image && 
        <>
          <br />
          <img src={item2image} alt={item2imagealt} />
        </>
        }
        </span>
        </a>
        <a data-element-type={item3dataelementtype} data-promotion-index={item3datapromotionindex} data-promotion-name={item3datapromotionname} href={item3link}>{item3age} <span>{item3textunderage}
        {item3image && 
        <>
          <br />
          <img src={item3image} alt={item3imagealt} />
        </>
        }
        </span>
        </a>
        <a data-element-type={item4dataelementtype} data-promotion-index={item4datapromotionindex} data-promotion-name={item4datapromotionname} href={item4link}>{item4age} <span>{item4textunderage}
        {item4image && 
        <>
          <br />
          <img src={item4image} alt={item4imagealt} />
        </>
        }
        </span>
        </a>
    </div>
      
    </>
  );
};

ShopByAgeElc.propTypes = {
  /** contents */
  item1age: PropTypes.string,
  item1textunderage: PropTypes.string,
  item1image: PropTypes.string,
  item1imagealt: PropTypes.string,
  item1link: PropTypes.string,
  item1dataelementtype: PropTypes.string,
  item1datapromotionindex: PropTypes.string,
  item1datapromotionname: PropTypes.string,
  item2age: PropTypes.string,
  item2textunderage: PropTypes.string,
  item2image: PropTypes.string,
  item2imagealt: PropTypes.string,
  item2link: PropTypes.string,
  item2dataelementtype: PropTypes.string,
  item2datapromotionindex: PropTypes.string,
  item2datapromotionname: PropTypes.string,
  item3age: PropTypes.string,
  item3textunderage: PropTypes.string,
  item3image: PropTypes.string,
  item3imagealt: PropTypes.string,
  item3link: PropTypes.string,
  item3dataelementtype: PropTypes.string,
  item3datapromotionindex: PropTypes.string,
  item3datapromotionname: PropTypes.string,
  item4age: PropTypes.string,
  item4textunderage: PropTypes.string,
  item4image: PropTypes.string,
  item4imagealt: PropTypes.string,
  item4link: PropTypes.string,
  item4dataelementtype: PropTypes.string,
  item4datapromotionindex: PropTypes.string,
  item4datapromotionname: PropTypes.string,
};
