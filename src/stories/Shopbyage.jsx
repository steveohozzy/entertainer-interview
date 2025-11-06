import PropTypes from "prop-types";

/** Primary UI component for user interaction */
export const ShopByAge = ({
  images,
  roundal1image,
  roundal1background,
  roundal1color,
  roundal1alt,
  roundal1age,
  roundal1textunderage,
  roundal1link,
  roundal2image,
  roundal2background,
  roundal2color,
  roundal2alt,
  roundal2age,
  roundal2textunderage,
  roundal2link,
  roundal3image,
  roundal3background,
  roundal3color,
  roundal3alt,
  roundal3age,
  roundal3textunderage,
  roundal3link,
  roundal4image,
  roundal4background,
  roundal4color,
  roundal4alt,
  roundal4age,
  roundal4textunderage,
  roundal4link,
  roundal5image,
  roundal5background,
  roundal5color,
  roundal5alt,
  roundal5age,
  roundal5textunderage,
  roundal5link,
  roundal6image,
  roundal6background,
  roundal6color,
  roundal6alt,
  roundal6age,
  roundal6textunderage,
  roundal6link,
  rounbdal1dataelementtype,
  rounbdal1datapromotionindex,
  roundal1datapromotionname,
  roundal2dataelementtype,
  roundal2datapromotionindex,
  roundal2datapromotionname,
  roundal3dataelementtype,
  roundal3datapromotionindex,
  roundal3datapromotionname,
  roundal4dataelementtype,
  roundal4datapromotionindex,
  roundal4datapromotionname,
  roundal5dataelementtype,
  roundal5datapromotionindex,
  roundal5datapromotionname,
  roundal6dataelementtype,
  roundal6datapromotionindex,
  roundal6datapromotionname,
}) => {
  return (
    <>
      <style>
        {`
    .shop-by-age-container {
        background-color: #dbe3ff;
    }
    .shop-by-age {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 10px;
        padding: 40px 20px 20px;
    }

    .shop-by-age a {
        transition: all 0.3s;
        width: 100%;
    }

    .shop-by-age a:hover {
        transform: translateY(-5px) rotate(5deg);
        scale: 1.05;
    }

    .shop-by-age a img {
      display: block;
      width: 100%;
      height: auto;
    }

    .shop-by-age.not-images a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: 100%;
        background-color: #E5BB07;
        color: #fff;
        aspect-ratio: 1/1;
        text-decoration: none;
        font: 15px/100% "Billy Bold", "Tahoma Bold", sans-serif;
        transition: all 0.3s;
        line-height: 1.1;
        box-shadow: 0 0 3px rgba(3,33,33,.4);
        text-shadow: 0px 0px 4px rgba(0,0,0,0.25);
    }

    @media (min-width: 769px) {
        .shop-by-age {
            gap: 40px;
        }
        .shop-by-age.not-images a {
            font-size: 28px;
        }

        .shop-by-age.not-images span {
            font-size: 20px;
        }
    }

    @media (min-width: 1024x) {
        .shop-by-age.not-images a {
            font-size: 34px;
        }

        .shop-by-age.not-images span {
            font-size: 30px;
        }
    }
        `}
      </style>
      <div class="shop-by-age-container">
        <div class={`shop-by-age ${!images && 'not-images'}`}>
          <a
            href={roundal1link}
            title={roundal1alt}
            data-element-type={rounbdal1dataelementtype}
            data-promotion-index={rounbdal1datapromotionindex}
            data-promotion-name={roundal1datapromotionname}
            style={{background: images ? 'transparent' : roundal1background, color: roundal1color}}
          >
            {images && <img
              src={roundal1image}
              alt={roundal1alt}
            /> }
            {!images &&
            <>
              {roundal1age}
              <span>{roundal1textunderage}</span>
            </>
            }
          </a>

          <a
            href={roundal2link}
            title={roundal2alt}
            data-element-type={roundal2dataelementtype}
            data-promotion-index={roundal2datapromotionindex}
            data-promotion-name={roundal2datapromotionname}
            style={{background: images ? 'transparent' : roundal2background, color: roundal2color}}
          >
             {images && <img
              src={roundal2image}
              alt={roundal2alt}
            /> }
            {!images &&
            <>
              {roundal2age}
              <span>{roundal2textunderage}</span>
            </>
            }
          </a>

          <a
            href={roundal3link}
            title={roundal3alt}
            data-element-type={roundal3dataelementtype}
            data-promotion-index={roundal3datapromotionindex}
            data-promotion-name={roundal3datapromotionname}
            style={{background: images ? 'transparent' : roundal3background, color: roundal3color}}
          >
            {images && <img
              src={roundal3image}
              alt={roundal3alt}
            />
            }
             {!images &&
            <>
              {roundal3age}
              <span>{roundal3textunderage}</span>
            </>
            }
          </a>

          <a
            href={roundal4link}
            title={roundal4alt}
            data-element-type={roundal4dataelementtype}
            data-promotion-index={roundal4datapromotionindex}
            data-promotion-name={roundal4datapromotionname}
            style={{background: images ? 'transparent' : roundal4background, color: roundal4color}}
          >
            {images && <img
              src={roundal4image}
              alt={roundal4alt}
            />}
             {!images &&
            <>
              {roundal4age}
              <span>{roundal4textunderage}</span>
            </>
            }
          </a>

          <a
            href={roundal5link}
            title={roundal5alt}
            data-element-type={roundal5dataelementtype}
            data-promotion-index={roundal5datapromotionindex}
            data-promotion-name={roundal5datapromotionname}
            style={{background: images ? 'transparent' : roundal5background, color: roundal5color}}
          >
            {images && 
              <img
                src={roundal5image}
                alt={roundal5alt}
              />
            }

             {!images &&
            <>
              {roundal5age}
              <span>{roundal5textunderage}</span>
            </>
            }
          </a>

          <a
            href={roundal6link}
            title={roundal6alt}
            data-element-type={roundal6dataelementtype}
            data-promotion-index={roundal6datapromotionindex}
            data-promotion-name={roundal6datapromotionname}
            style={{background: images ? 'transparent' : roundal6background, color: roundal6color}}
          >
            {images && 
              <img
                src={roundal6image}
                alt={roundal6alt}
              />
            }

             {!images &&
            <>
              {roundal6age}
              <span>{roundal6textunderage}</span>
            </>
            }
          </a>
        </div>
      </div>
    </>
  );
};

ShopByAge.propTypes = {
  /** contents */
  images: PropTypes.bool,
  roundal1image: PropTypes.string,
  roundal1background: PropTypes.string,
  roundal1color: PropTypes.string,
  roundal1alt: PropTypes.string,
  roundal1age: PropTypes.string,
  roundal1textunderage: PropTypes.string,
  roundal1link: PropTypes.string,
  roundal2image: PropTypes.string,
  roundal2background: PropTypes.string,
  roundal2color: PropTypes.string,
  roundal2alt: PropTypes.string,
  roundal2age: PropTypes.string,
  roundal2textunderage: PropTypes.string,
  roundal2link: PropTypes.string,
  roundal3image: PropTypes.string,
  roundal3background: PropTypes.string,
  roundal3color: PropTypes.string,
  roundal3alt: PropTypes.string,
  roundal3age: PropTypes.string,
  roundal3textunderage: PropTypes.string,
  roundal3link: PropTypes.string,
  roundal4image: PropTypes.string,
  roundal4background: PropTypes.string,
  roundal4color: PropTypes.string,
  roundal4alt: PropTypes.string,
  roundal4age: PropTypes.string,
  roundal4textunderage: PropTypes.string,
  roundal4link: PropTypes.string,
  roundal5image: PropTypes.string,
  roundal5background: PropTypes.string,
  roundal5color: PropTypes.string,
  roundal5alt: PropTypes.string,
  roundal5age: PropTypes.string,
  roundal5textunderage: PropTypes.string,
  roundal5link: PropTypes.string,
  roundal6image: PropTypes.string,
  roundal6background: PropTypes.string,
  roundal6color: PropTypes.string,
  roundal6alt: PropTypes.string,
  roundal6age: PropTypes.string,
  roundal6textunderage: PropTypes.string,
  roundal6link: PropTypes.string,
  rounbdal1dataelementtype: PropTypes.string,
  rounbdal1datapromotionindex: PropTypes.string,
  roundal1datapromotionname: PropTypes.string,
  roundal2dataelementtype: PropTypes.string,
  roundal2datapromotionindex: PropTypes.string,
  roundal2datapromotionname: PropTypes.string,
  roundal3dataelementtype: PropTypes.string,
  roundal3datapromotionindex: PropTypes.string,
  roundal3datapromotionname: PropTypes.string,
  roundal4dataelementtype: PropTypes.string,
  roundal4datapromotionindex: PropTypes.string,
  roundal4datapromotionname: PropTypes.string,
  roundal5dataelementtype: PropTypes.string,
  roundal5datapromotionindex: PropTypes.string,
  roundal5datapromotionname: PropTypes.string,
  roundal6dataelementtype: PropTypes.string,
  roundal6datapromotionindex: PropTypes.string,
  roundal6datapromotionname: PropTypes.string,
};
