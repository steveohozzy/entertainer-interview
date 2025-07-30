import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  clearItemFromWishlist,
  addItemToWishlist,
  removeItemFromWishlist
} from '../../store/wishlist/wishlistReducer';

const WishlistProductTile = ({product, nocontrols, isMiniCart}) => {
    const { name, price, image, originalPrice, quantity, sku } = product;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const goToLinkHandler = () => {
        navigate('/product-details/' + product.id);
        document.body.classList.remove('body-noscroll');
    };
    
    const clearItemHandler = () =>
    dispatch(clearItemFromWishlist(product));
  const addItemHandler = () => dispatch(addItemToWishlist(product));
  const removeItemHandler = () =>
    dispatch(removeItemFromWishlist(product));
  return (
    <div className={`flex items-start flex-wrap w-100 py-6 relative after:w-full after:absolute after:bottom-0 after:left-0 after:border-b-[3px] after:md:w-[50%] last:after:hidden`}>
        <div className={`w-[30%] border-[4px] border-brandLightBlue rounded-lg ${isMiniCart ? 'md:w-[40%]' : 'md:w-[20%]'}`}>
            <button className='block' onClick={goToLinkHandler}>
                <img
                    src={image || "/placeholder.svg"}
                    alt={name}
                    className="w-full block"
                />
            </button>
        </div>
        <div className={`w-[70%] ${isMiniCart ? 'md:w-[60%]' : 'md:w-[80%]'}`}>
            <div className="flex flex-wrap py-1">
                <div className={`w-full md:w-[50%] text-textBlue font-bold px-4 text-lg`}>
                    <button className={`flex flex-wrap text-left `} onClick={goToLinkHandler}>
                        {name}
                        <span className={`text-textBlue w-full text-xs mt-3`}>Product #{sku}</span>
                    </button>
                </div>
                <div className={`w-full md:w-[50%] px-4 md:px-0`}>
                    <div className="flex flex-wrap justify-between items-start">
                        <div className={`flex justify-center my-2 md:justify-start w-full md:w-[30%] md:flex-col`}>
                            <span className="text-brandRed font-bold">{price}</span>
                            <span className={`line-through text-gray-400 ml-1 md:ml-0`}>{originalPrice}</span>
                        </div>
                        <div className={`flex justify-between items-center w-full md:w-[70%] text-gray-500 font-bold`}>
                            <div className="flex items-center">
                                <div className={`flex items-center border border-gray-400 rounded-lg`}>
                                    <button onClick={removeItemHandler} className={`px-2`}>-</button>
                                    <span className="px-2 b-l-1 border-gray-400 border-x mt-1 mb-1">{quantity}</span>
                                    <button onClick={addItemHandler} className={`px-2`}>+</button>
                                </div>
                            </div>
                            <div>
                                <button onClick={clearItemHandler} className={`text-brandRed underline text-right text-sm`}>remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WishlistProductTile
