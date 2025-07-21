import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../store/cart/cartReducer';

const CartProductTile = ({product, nocontrols}) => {
    const { name, price, image, originalPrice, quantity } = product;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const goToLinkHandler = () => {
        navigate('/product-details/' + product.id);
    };
    
    const clearItemHandler = () =>
    dispatch(clearItemFromCart(product));
  const addItemHandler = () => dispatch(addItemToCart(product));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(product));
  return (
    <div className="flex items-start flex-wrap w-100 py-6 relative after:w-full after:absolute after:bottom-0 after:left-0 after:border-b-[3px] after:md:w-[50%] last:after:hidden">
        <div className="w-[30%] md:w-[20%] border-[4px] border-brandLightBlue rounded-lg">
            <button className='block' onClick={goToLinkHandler}>
                <img
                    src={image || "/placeholder.svg"}
                    alt={name}
                    className="w-full block"
                />
            </button>
        </div>
        <div className="w-[70%] md:w-[80%]">
            <div className="flex flex-wrap">
                <div className={`w-full ${nocontrols ? 'md:w-[70%]' : 'md:w-[50%]'} px-4 text-textBlue font-bold text-lg`}>
                    <button onClick={goToLinkHandler}>
                        {name}
                    </button>
                </div>
                <div className={`w-full ${nocontrols ? 'md:w-[30%]' : 'md:w-[50%]'} px-4 md:px-0`}>
                    <div className="flex flex-wrap justify-between items-start">
                        <div className={`flex justify-center my-2 md:my-0 md:justify-start md:flex-col w-full md:w-[30%] ${nocontrols && 'md:w-full text-right'}`}>
                            <span className="text-brandRed font-bold">{price}</span>
                            <span className="line-through text-gray-400 ml-1 md:ml-0">{originalPrice}</span>
                        </div>
                        {!nocontrols &&
                            <div className="flex justify-between items-center w-full md:w-[70%] text-gray-500 font-bold">
                                <div className="flex items-center">
                                    <div className="flex items-center border border-gray-400 rounded-lg">
                                        <button onClick={removeItemHandler} className="px-2">-</button>
                                        <span className="px-2 b-l-1 border-gray-400 border-x mt-1 mb-1">{quantity}</span>
                                        <button onClick={addItemHandler} className="px-2">+</button>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={clearItemHandler} className="text-brandRed underline text-sm text-right">remove</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartProductTile
