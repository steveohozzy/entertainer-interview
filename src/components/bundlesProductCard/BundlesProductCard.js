import { useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux';

import { setIsCartOpen, addItemToCart } from '../../store/cart/cartReducer';

const BundlesProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToLinkHandler = () => {
    navigate("/product-details/" + product.id);
  };

  const addProductToCart = () => {
    dispatch(addItemToCart(product));
    dispatch(setIsCartOpen(true));
    document.body.classList.add('body-noscroll');
    window.scrollBy(0 , -2)
  }

  return (
    <>
      <div key={product.id} className="flex flex-col">
        <div className="flex flex-col rounded-xl border-[3px] border-gray-200 bg-white shadow-sm hover:border-brandBlue transition-all duration-300 overflow-hidden">
        <div className="relative group">
          <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-l"
          />
          </div>
        </div>
        <div className="flex flex-col justify-between items-center py-2 md:py-3">
          <div className="price">
            <div onClick={() => {goToLinkHandler(product)}} className="cursor-pointer flex items-end justify-center">
                <span className="text-brandRed font-bold text-[10px] md:text-sm">£{product.price}</span>
                {product.originalPrice &&
                    <span className="line-through text-gray-400 text-[8px] md:text-xs ml-1">£{product.originalPrice}</span>
                }
            </div>
          </div>
          <button
            className='sr-only add-to-basket'
            onClick={() => {addProductToCart(product)}}>
              Buy
          </button>
        </div>
      </div>
    </>
  );
};

export default BundlesProductCard;
