import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  clearItemFromWishlist,
  addItemToWishlist,
  removeItemFromWishlist,
} from "../../store/wishlist/wishlistReducer";

import { setIsCartOpen, addItemToCart } from "../../store/cart/cartReducer";

import Button from "../button/Button";

const WishlistProductTile = ({ product, nocontrols, isMiniCart }) => {
  const { name, price, image, originalPrice, quantity, sku } = product;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToLinkHandler = () => {
    navigate("/product-details/" + product.id);
    document.body.classList.remove("body-noscroll");
  };

  const addProductToCart = () => {
    dispatch(addItemToCart(product));
    dispatch(setIsCartOpen(true));
    dispatch(removeItemFromWishlist(product));
    document.body.classList.add("body-noscroll");
    window.scrollBy(0, -2);
  };

  const clearItemHandler = () => dispatch(clearItemFromWishlist(product));
  const addItemHandler = () => dispatch(addItemToWishlist(product));
  const removeItemHandler = () => dispatch(removeItemFromWishlist(product));

  return (
    <div
      className={`flex items-start flex-wrap w-100 py-6 relative after:w-full after:absolute after:bottom-0 after:left-0 after:border-b-[3px] after:lg:w-[50%] last:after:hidden relative`}
    >
      <div
        className={`w-[30%] border-[4px] border-brandLightBlue rounded-lg lg:w-[20%]`}
      >
        <button className="block" onClick={goToLinkHandler}>
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full block"
          />
        </button>
      </div>
      <div className={`w-[70%] lg:w-[80%]`}>
        <div className="flex flex-wrap py-1 h-full">
          <div
            className={`w-full lg:w-[40%] text-textBlue font-bold px-4 lg:text-lg`}
          >
            <button
              className={`flex flex-wrap text-left `}
              onClick={goToLinkHandler}
            >
              {name}
              <span className={`text-textBlue w-full text-xs mt-3`}>
                Product #{sku}
              </span>
            </button>
          </div>
          <div className={`w-full lg:w-[60%] px-4 lg:px-0`}>
            <div className="flex flex-wrap justify-between items-start">
              <div
                className={`flex justify-start text-sm lg:text-base my-2 lg:justify-start w-full lg:w-[20%] lg:flex-col`}
              >
                <span className="text-brandRed font-bold">{price}</span>
                <span className={`line-through text-gray-400 ml-1 lg:ml-0`}>
                  {originalPrice}
                </span>
              </div>
              <div
                className={`flex justify-between items-start flex-wrap w-full lg:w-[80%] text-gray-500 font-bold`}
              >
                <div className="flex items-center">
                  <div
                    className={`flex items-center border border-gray-400 rounded-lg`}
                  >
                    <button onClick={removeItemHandler} className={`px-2`}>
                      -
                    </button>
                    <span className="px-2 b-l-1 border-gray-400 border-x mt-1 mb-1">
                      {quantity}
                    </span>
                    <button onClick={addItemHandler} className={`px-2`}>
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right mt-3 flex flex-col justify-center h-full w-full lg:w-auto lg:pl-3 lg:mt-0">
                  <Button
                    className="shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold text-sm min-h-[40px] rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-2 transition-all hover:bg-brandLightGreen hover:scale-105 addToBasket"
                    iconpath={
                      <svg
                        width="22"
                        height="18"
                        viewBox="0 0 22 18"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z" />
                      </svg>
                    }
                    onClick={addProductToCart}
                  >
                    Add to Basket
                  </Button>
                  <button
                    onClick={clearItemHandler}
                    className={`text-brandRed underline text-right text-sm mt-2 lg:absolute bottom-2 right-2`}
                  >
                    remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistProductTile;
