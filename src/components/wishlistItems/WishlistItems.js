import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';

import { setIsCartOpen, addItemToCart } from '../../store/cart/cartReducer';

import { selectWishlistItems } from "../../store/wishlist/wishlistSelector";

import {
  clearItemFromWishlist,
  removeItemFromWishlist,
} from "../../store/wishlist/wishlistReducer";


const WishlistItemsList = () => {
  const wishlistItems = useSelector(selectWishlistItems);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    dispatch(addItemToCart(product));
    dispatch(setIsCartOpen(true));
    dispatch(removeItemFromWishlist(product));
    document.body.classList.add("body-noscroll");
    window.scrollBy(0, -2);
  }

  const clearItemHandler = (product) =>
    dispatch(clearItemFromWishlist(product));

  return (
    <div className="grid grid-cols-4 gap-6 mt-6">
      {wishlistItems.length && (
        <>
          {wishlistItems.map((product) => (
            <div className="flex flex-col">
              <div className="border-[3px] border-brandLightblue rounded-lg relative">
                <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                />
                <button
                  name={`remove' ${product.name}`}
                  onClick={() => {clearItemHandler(product)}}
                  className="absolute right-1 top-1 text-textBlue rounded-full border-[2px] border-textBlue z-[2]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x h-5 w-5"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                  <span className="sr-only">Remove</span>
                </button>
              </div>
              <div className="flex flex-col justify-between items-center py-3">
                <div className="price">
                  <div className="flex items-end justify-center">
                      <span className="text-brandRed font-bold text-xs md:text-sm">£{product.price}</span>
                      {product.originalPrice &&
                          <span className="line-through text-gray-400 text-[10px] md:text-xs ml-1">£{product.originalPrice}</span>
                      }
                  </div>
                </div>
                <button
                  className='shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-xs lg:text-sm rounded-[30px] bg-brandGreen text-white py-2 px-4 transition-all hover:bg-brandLightGreen hover:scale-105 mt-2'
                  onClick={() => {addProductToCart(product)}}>
                    Buy
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      {[...Array(8 - wishlistItems.length)].map((e, i) => 
        <div className="flex flex-col">
        <div className="border-[3px] border-gray-200 rounded-lg">
          <img
              src="/placeholder.svg"
              alt="alt"
              className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col justify-between items-center py-3">
          <div className="price">
            <div className="flex items-end justify-center">
                <span className="text-gray-400 font-bold text-xs md:text-sm">£0.00</span>
            </div>
          </div>
          <button
            className='shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-lg rounded-[30px] bg-gray-400 text-white h-[33px] lg:h-[36px] px-4 transition-all hover:bg-gray-500 hover:scale-105 mt-2'
            onClick={() => {navigate('/category')}}>
              +
          </button>
        </div>
      </div>
      )}
    </div>
  )
}

export default WishlistItemsList