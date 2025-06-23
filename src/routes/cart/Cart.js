import { useState } from 'react'
import Button from '../../components/button/Button'
import CartProductTile from '../../components/cartProductTile/CartProductTile'
import Dropdown from '../../components/dropdown/Dropdown'

const products = [
  {
    id: 1,
    name: "Spider-Man Advanced Suit Figure",
    brand: "Marvel",
    price: 24.99,
    originalPrice: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    description:
      "Bring the web-slinging action home with this highly detailed Spider-Man figure featuring the Advanced Suit from the hit video game. With multiple points of articulation and authentic detailing.",
  },
  {
    id: 2,
    name: "Batman Dark Knight Figure",
    brand: "DC Comics",
    price: 22.99,
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    description:
      "The Dark Knight rises with this incredibly detailed Batman figure. Features authentic movie styling and premium articulation for dynamic posing.",
  },
  {
    id: 3,
    name: "Darth Vader Deluxe Figure",
    brand: "Star Wars",
    price: 34.99,
    originalPrice: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    description:
      "Experience the power of the Dark Side with this premium Darth Vader figure featuring authentic breathing sounds and light-up lightsaber.",
  },
]

const Cart = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <>
        <div className="bg-white">
            <div className='text-sm text-gray-500 flex items-center justify-center pt-6'>
                <span>Basket</span>
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
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-wrap py-6'>
                    <div className='w-full md:w-[66.6666666%] px-3'>
                        <div className='flex items-end'>
                            <h1 className='text-xl font-bold text-textBlue mr-2'>Basket</h1>
                            <span className='text-gray-500'>Delivery | </span>
                            <span className='text-textBlue ml-1'>
                                1 of 1 <span className='text-sm'><span className='text-xs'>({'<'}</span> 3 working days)</span>
                            </span>
                        </div>
                        {products.map((product) => (
                            <CartProductTile product={product} />
                        ))}
                    </div>
                    <div className='w-full md:w-[33.3333333%] px-3'>
                        <div className='fixed bottom-0 left-0 p-3 bg-white shadow-[10px_10px_20px] shadow-gray-500 w-full md:static md:p-0 md:shadow-none'>
                          <Button className='shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-lg rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-2 transition-all hover:bg-brandLightGreen hover:scale-105' iconpath='/cart-button-icon.svg' iconalt='cart' link='/checkout'>
                              Checkout Securely £157.65
                          </Button>
                        </div>

                        <div className='mt-6 bg-gray-200 border-4 border-gray-400 p-6 px-4 rounded-md'>
                          <Dropdown 
                            title="Use a promo code"
                            className="text-brandBlue font-bold flex items-center justify-center w-full"
                            answer={
                              <form className='flex items-center py-4 px-2'>
                                  <input type="search" placeholder="Add a promo code" className="h-[40px] px-3 rounded-3xl w-full border border-[3px] border-brandBlue text-textBlue placeholder:text-gray-200 mr-2" />
                                  <button className="group text-white font-bold bg-brandBlue rounded-[50px] px-5 h-[40px] transition-all hover:bg-blue-500 hover:scale-105"><span className="block transition-all group-hover:rotate-[10deg]">Apply</span></button>
                              </form>
                            }
                          />
                        </div>
                        <div className='flex items-start mt-6 text-center text-brandBlue'>
                          <div className='w-[50%]'>
                            <Button className='shadow-sm hover:shadow-md mr-2 text-sm w-full group inline-flex items-center justify-center font-bold rounded-[30px] bg-white text-brandBlue border-[3px] border-brandBlue py-2 px-3 pl-2 transition-all hover:bg-brandBlue hover:text-white hover:scale-105'
                              iconpath='/delivery-icon.svg'
                              iconalt='cart'
                              link='/checkout'
                            >
                                Home Delivery
                            </Button>

                            <p className='mt-2'>Free delivery on orders over £40</p>
                          </div>
                          <div className='w-[50%]'>
                            <Button className='shadow-sm hover:shadow-md ml-2 text-sm w-full group inline-flex items-center justify-center font-bold rounded-[30px] bg-white text-brandBlue border-[3px] border-brandBlue py-2 px-3 pl-2 transition-all hover:bg-brandBlue hover:text-white hover:scale-105'
                              iconpath='/store-icon.svg'
                              iconalt='cart'
                              link='/checkout'
                            >
                                Click & Collect
                            </Button>
                            <p className='mt-2'>Collect from our stores or other locations</p>
                          </div>
                        </div>
                        <div className='mt-6 bg-brandBeige text-brandBlue bg-opacity-30 font-bold text-center p-6 rounded-2xl'>
                          Your order qualifies for FREE express delivery
                          <span className='block font-normal'>Exclusions apply</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart
