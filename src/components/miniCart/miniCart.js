import { useSelector, useDispatch } from 'react-redux';

import { selectIsCartOpen } from '../../store/cart/cartSelector';
import { setIsCartOpen } from '../../store/cart/cartReducer';
import Button from '../../components/button/Button'
import CartProductTile from '../../components/cartProductTile/CartProductTile'
import Dropdown from '../../components/dropdown/Dropdown'
import HeadingRibbon from '../../components/headingRibbon/headingRibbon';

import { selectCartItems } from '../../store/cart/cartSelector';

import {
  selectCartTotal,
} from '../../store/cart/cartSelector';

const MiniCart = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(false));
  return (
    <>
      {isCartOpen && (
            <div className="fixed h-screen inset-0 bg-black bg-opacity-50 z-40" onClick={() => toggleIsCartOpen(false)} />
        )}
      <div className={`absolute max-w-[90vw] overflow-hidden w-[300px] translate-all ${isCartOpen ? 'h-auto' : 'h-0'} top-full z-[9999] bg-white rounded-xl text-black`}>
         <div className='text-sm text-gray-500 flex items-center justify-center pt-6'>
            <span className='font-bold'>Basket</span>
            <img src='/stars-icon.svg' alt='stars' className='mx-4' />
            <span>Delivery</span>
            <img src='/rocket-icon.svg' alt='stars' className='mx-4' />
            <span>Payment</span>
        </div>
        <div className='mx-auto max-w-[335px] mt-4'>
            <img src='train-icon.svg' alt='train' />
            <div className='flex items-center mt-4 max-w-[335px]'>
                <div className='w-[30%] border-b-4 border-dashed border-brandLightGreen'></div>
                <div className='w-[69%] ml-[1%] border-b-4 border-dashed border-gray-200'></div>
            </div>
        </div>
        <div>
          {cartItems.length ? (
              cartItems.map((item) => <CartProductTile key={item.id} product={item} />)
          ) : (
            <div>Your cart is empty</div>
          )}
        </div>
      </div>
    </>
  )
}

export default MiniCart