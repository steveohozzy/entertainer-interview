import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { useNavigate } from "react-router-dom";

import { products } from "../../data/products";
import Button from "../../components/button/Button";

const Confirmation = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-xl bg-white px-0 py-8 lg:p-8">
          <h1 className="text-5xl text-brandLightGreen font-semibold text-center">
            {/* <span className="inline-block rotate-[-10deg]">W</span>
            <span className="inline-block translate-y-[-6px] rotate-[-10deg] ml-[1.2px]">h</span>
            <span className="inline-block translate-y-[-12px] rotate-[5deg] ml-[2px]">o</span>
            <span className="inline-block translate-y-[-10px] rotate-[5deg] ml-[2px]">o</span>
            <span className="inline-block translate-y-[-12px] ml-4 rotate-[15deg]">h</span>
            <span className="inline-block translate-y-[-2px] rotate-[15deg] ml-[2px]">o</span>
            <span className="inline-block translate-y-[-2px] rotate-[15deg] ml-[2px]">o</span>
            <span className="inline-block translate-y-[-2px] rotate-[15deg] ml-[2px]">!</span> */}
            <span className="inline-block rotate-[-15deg] animate-whoo animate-delay-500" >whoo</span>
            <span className="inline-block rotate-[15deg] ml-3 animate-hoo animate-delay-1000">hoo!</span>
          </h1>
          <div className="flex items-start flex-wrap">
            <div className="w-full lg:w-2/3">
              <div className="w-full lg:w-3/4">
                <div className="text-lg text-textBlue mt-6">
                  Order Confirmation <span className="font-bold text-brandBlue">00587456</span>
                </div>
                <div className="flex text-xl items-center font-bold gap-3 mt-4">
                  <span className="text-textBlue">Total |</span>
                  <span className="text-brandRed font-bold">£56.78</span>
                  <span className="text-textBlue text-sm">- 3 items</span>
                </div>

                <h2 className="text-2xl text-textBlue font-bold mb-8">Order Summary</h2>
                  <div className="flex items-end flex-wrap">
                    <div className="w-full">
                      {products.slice(0,3).map((item) => (
                        <div className={`flex items-start flex-wrap relative after:w-full after:absolute after:bottom-0 after:left-0 after:border-b-[3px] after:md:w-[50%] last:after:hidden pb-6 mb-6`}>
                          <div className={`w-[30%] md:w-[15%] border-[4px] border-brandLightBlue rounded-lg`}>
                            <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="w-full block"
                            />
                          </div>
                          <div className={`w-[70%] md:w-[80%]`}>
                              <div className="flex flex-wrap py-1">
                                  <div className={`w-full md:w-[70%] text-textBlue font-bold px-4 text-lg`}>
                                      <div className="flex flex-wrap">
                                    <div className="inline-flex items-center text-xs text-gray-400">{item.brand}</div>
                                </div>
                                          <div>{item.name}</div>
                                          <span className={`text-textBlue w-full text-xs mt-3`}>Product #{item.sku}</span>
                                  </div>
                                  <div className={`w-full md:w-[30%] px-4 md:px-0`}>
                                      <div className="flex flex-wrap justify-between items-start">
                                          <div className={`flex justify-start my-2 md:my-0 w-full md:w-[30%] md:w-full text-right md:flex-col`}>
                                              <span className="text-brandRed font-bold">£{item.price}</span>
                                              {item.originalPrice &&
                                                <span className={`line-through text-gray-400 ml-1 md:ml-0`}>£{item.originalPrice}</span>
                                              }
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      ))
                    }
                  </div>
                  <div className="w-full border-t-[2px] pt-4 text-right pr-2 md:pr-8">
                    <div className="flex text-lg font-bold mb-3 gap-3 justify-end">
                      <span className="text-textBlue">Delivery</span>
                      <span className="text-lg text-brandRed font-bold w-[80px]">£3.99</span>
                    </div>
                    <div className="flex text-xl font-bold gap-3 justify-end">
                      <span className="text-textBlue">Total</span>
                      <span className="text-brandRed font-bold w-[80px]">£56.78</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 mt-8">
                  <div>
                    <h2 className="text-xl text-textBlue font-bold">Shipping Information</h2>
                    <div className="text-lg text-textBlue mt-6">
                      <span className="font-bold">Shipping To:</span>
                    </div>
                    <div className="text-lg text-textBlue mt-6">
                      42 Lomond Road,<br />
                      Hemel Hempstead,<br />
                      Herts,<br />
                      HP2 6PA
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl text-textBlue font-bold mt-12 md:mt-0">Billing Information</h2>
                    <div className="text-lg text-textBlue mt-6">
                      <span className="font-bold">VISA **** **** **** 1234</span>
                    </div>
                    <div className="text-lg text-textBlue mt-6">
                      42 Lomond Road,<br />
                      Hemel Hempstead,<br />
                      Herts,<br />
                      HP2 6PA
                    </div>
                  </div>
                  <div className="text-lg text-textBlue mt-12 col-span-2">
                    A copy of your order details has been sent to <span className="font-bold text-brandBlue">steve.hoskins@theentertainer.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
              <h3 className="text-brandBlue text-lg font-bold">Save your details for future orders</h3>
              <div
                className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group`}
              >
                <input
                  type="password"
                  placeholder="Password"
                  className="peer text-base m-0 block h-[38px] w-full bg-transparent text-textBlue transition duration-200 ease-linear placeholder:text-gray-400 focus:outline-none pr-[70px]"
                />
                <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    className="w-full h-auto"
                  >
                    <path
                      d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex items-center justify-start mt-6 mb-4">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                    <path d="M34.1152 8.11996C33.6452 9.28645 31.1752 15.0042 30.7952 16.0081C30.8152 16.0272 30.7352 15.9029 30.9752 16.2472L32.9652 19.106C33.5352 19.9474 35.2552 22.3665 35.7952 23.1887C37.2952 25.6173 35.1252 28.5336 32.2352 28.0937C29.6652 27.9216 26.2852 27.6826 23.7252 27.4818C23.8052 27.4818 23.8852 27.4627 23.9352 27.4053C23.6352 27.7591 22.6952 28.8682 22.3852 29.2315C21.0352 30.8283 19.5752 32.5302 18.1852 34.1079C16.5052 35.9819 13.0952 35.3126 12.3152 32.9701C12.1052 32.3294 11.4252 29.3272 11.2352 28.6101C11.0752 27.9503 10.3152 24.8237 10.2252 24.3743C10.2452 24.403 10.2752 24.4222 10.3052 24.4317C9.2052 24.011 3.2052 21.7067 2.0752 21.2765C-0.504797 20.349 -0.744797 16.7826 1.7252 15.5683C3.7752 14.4018 6.6252 12.7955 8.6852 11.629L9.0752 11.4091L9.2352 11.323C9.2352 11.323 9.2852 11.2848 9.2952 11.2561C9.2952 11.237 9.2952 11.2657 9.2952 11.2083L9.3252 10.778C9.4252 9.20996 9.6252 6.37023 9.7252 4.77347C9.7552 4.47707 9.8352 2.82295 9.8852 2.52654C10.1052 0.566455 12.5652 -0.638282 14.3652 0.356104C14.5852 0.461279 14.7852 0.623823 14.9752 0.767244C17.1652 2.6126 19.3852 4.42926 21.5952 6.24593C21.6752 6.31286 21.7452 6.33198 21.8452 6.31286L23.5352 5.87303C25.2652 5.42365 28.7652 4.49619 30.4952 4.04681C32.8952 3.40619 35.1352 5.9304 34.1252 8.10084L34.1152 8.11996Z" fill="#F9EC31"/>
                    <path d="M17.0537 21.4062L13.1396 17.5156C13.0303 17.4062 12.9756 17.2656 12.9756 17.0937C12.9756 16.9218 13.0303 16.7812 13.1396 16.6718L14.0068 15.8281C14.1162 15.7031 14.249 15.6406 14.4053 15.6406C14.5771 15.6406 14.7256 15.7031 14.8506 15.8281L17.4756 18.4531L23.1006 12.8281C23.2256 12.7031 23.3662 12.6406 23.5225 12.6406C23.6943 12.6406 23.835 12.7031 23.9443 12.8281L24.8115 13.6718C24.9209 13.7812 24.9756 13.9218 24.9756 14.0937C24.9756 14.2656 24.9209 14.4062 24.8115 14.5156L17.8975 21.4062C17.7881 21.5312 17.6475 21.5937 17.4756 21.5937C17.3037 21.5937 17.1631 21.5312 17.0537 21.4062Z" fill="#F05C41"/>
                  </svg>
                </span>
                <span className="font-semibold text-lg text-textBlue ml-3 mb-1">
                  Faster Checkout
                </span>
              </div>
              <div className="flex items-center justify-start mb-4">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                    <path d="M34.1152 8.11996C33.6452 9.28645 31.1752 15.0042 30.7952 16.0081C30.8152 16.0272 30.7352 15.9029 30.9752 16.2472L32.9652 19.106C33.5352 19.9474 35.2552 22.3665 35.7952 23.1887C37.2952 25.6173 35.1252 28.5336 32.2352 28.0937C29.6652 27.9216 26.2852 27.6826 23.7252 27.4818C23.8052 27.4818 23.8852 27.4627 23.9352 27.4053C23.6352 27.7591 22.6952 28.8682 22.3852 29.2315C21.0352 30.8283 19.5752 32.5302 18.1852 34.1079C16.5052 35.9819 13.0952 35.3126 12.3152 32.9701C12.1052 32.3294 11.4252 29.3272 11.2352 28.6101C11.0752 27.9503 10.3152 24.8237 10.2252 24.3743C10.2452 24.403 10.2752 24.4222 10.3052 24.4317C9.2052 24.011 3.2052 21.7067 2.0752 21.2765C-0.504797 20.349 -0.744797 16.7826 1.7252 15.5683C3.7752 14.4018 6.6252 12.7955 8.6852 11.629L9.0752 11.4091L9.2352 11.323C9.2352 11.323 9.2852 11.2848 9.2952 11.2561C9.2952 11.237 9.2952 11.2657 9.2952 11.2083L9.3252 10.778C9.4252 9.20996 9.6252 6.37023 9.7252 4.77347C9.7552 4.47707 9.8352 2.82295 9.8852 2.52654C10.1052 0.566455 12.5652 -0.638282 14.3652 0.356104C14.5852 0.461279 14.7852 0.623823 14.9752 0.767244C17.1652 2.6126 19.3852 4.42926 21.5952 6.24593C21.6752 6.31286 21.7452 6.33198 21.8452 6.31286L23.5352 5.87303C25.2652 5.42365 28.7652 4.49619 30.4952 4.04681C32.8952 3.40619 35.1352 5.9304 34.1252 8.10084L34.1152 8.11996Z" fill="#F9EC31"/>
                    <path d="M17.0537 21.4062L13.1396 17.5156C13.0303 17.4062 12.9756 17.2656 12.9756 17.0937C12.9756 16.9218 13.0303 16.7812 13.1396 16.6718L14.0068 15.8281C14.1162 15.7031 14.249 15.6406 14.4053 15.6406C14.5771 15.6406 14.7256 15.7031 14.8506 15.8281L17.4756 18.4531L23.1006 12.8281C23.2256 12.7031 23.3662 12.6406 23.5225 12.6406C23.6943 12.6406 23.835 12.7031 23.9443 12.8281L24.8115 13.6718C24.9209 13.7812 24.9756 13.9218 24.9756 14.0937C24.9756 14.2656 24.9209 14.4062 24.8115 14.5156L17.8975 21.4062C17.7881 21.5312 17.6475 21.5937 17.4756 21.5937C17.3037 21.5937 17.1631 21.5312 17.0537 21.4062Z" fill="#F05C41"/>
                  </svg>
                </span>
                <span className="font-semibold text-lg text-textBlue ml-3 mb-1">
                  Order history & tracking
                </span>
              </div>
              <div className="flex items-center justify-start mb-4">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                    <path d="M34.1152 8.11996C33.6452 9.28645 31.1752 15.0042 30.7952 16.0081C30.8152 16.0272 30.7352 15.9029 30.9752 16.2472L32.9652 19.106C33.5352 19.9474 35.2552 22.3665 35.7952 23.1887C37.2952 25.6173 35.1252 28.5336 32.2352 28.0937C29.6652 27.9216 26.2852 27.6826 23.7252 27.4818C23.8052 27.4818 23.8852 27.4627 23.9352 27.4053C23.6352 27.7591 22.6952 28.8682 22.3852 29.2315C21.0352 30.8283 19.5752 32.5302 18.1852 34.1079C16.5052 35.9819 13.0952 35.3126 12.3152 32.9701C12.1052 32.3294 11.4252 29.3272 11.2352 28.6101C11.0752 27.9503 10.3152 24.8237 10.2252 24.3743C10.2452 24.403 10.2752 24.4222 10.3052 24.4317C9.2052 24.011 3.2052 21.7067 2.0752 21.2765C-0.504797 20.349 -0.744797 16.7826 1.7252 15.5683C3.7752 14.4018 6.6252 12.7955 8.6852 11.629L9.0752 11.4091L9.2352 11.323C9.2352 11.323 9.2852 11.2848 9.2952 11.2561C9.2952 11.237 9.2952 11.2657 9.2952 11.2083L9.3252 10.778C9.4252 9.20996 9.6252 6.37023 9.7252 4.77347C9.7552 4.47707 9.8352 2.82295 9.8852 2.52654C10.1052 0.566455 12.5652 -0.638282 14.3652 0.356104C14.5852 0.461279 14.7852 0.623823 14.9752 0.767244C17.1652 2.6126 19.3852 4.42926 21.5952 6.24593C21.6752 6.31286 21.7452 6.33198 21.8452 6.31286L23.5352 5.87303C25.2652 5.42365 28.7652 4.49619 30.4952 4.04681C32.8952 3.40619 35.1352 5.9304 34.1252 8.10084L34.1152 8.11996Z" fill="#F9EC31"/>
                    <path d="M17.0537 21.4062L13.1396 17.5156C13.0303 17.4062 12.9756 17.2656 12.9756 17.0937C12.9756 16.9218 13.0303 16.7812 13.1396 16.6718L14.0068 15.8281C14.1162 15.7031 14.249 15.6406 14.4053 15.6406C14.5771 15.6406 14.7256 15.7031 14.8506 15.8281L17.4756 18.4531L23.1006 12.8281C23.2256 12.7031 23.3662 12.6406 23.5225 12.6406C23.6943 12.6406 23.835 12.7031 23.9443 12.8281L24.8115 13.6718C24.9209 13.7812 24.9756 13.9218 24.9756 14.0937C24.9756 14.2656 24.9209 14.4062 24.8115 14.5156L17.8975 21.4062C17.7881 21.5312 17.6475 21.5937 17.4756 21.5937C17.3037 21.5937 17.1631 21.5312 17.0537 21.4062Z" fill="#F05C41"/>
                  </svg>
                </span>
                <span className="font-semibold text-lg text-textBlue ml-3 mb-1">
                  Wishlists
                </span>
              </div>
              <div className="flex items-center justify-start mb-6">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                    <path d="M34.1152 8.11996C33.6452 9.28645 31.1752 15.0042 30.7952 16.0081C30.8152 16.0272 30.7352 15.9029 30.9752 16.2472L32.9652 19.106C33.5352 19.9474 35.2552 22.3665 35.7952 23.1887C37.2952 25.6173 35.1252 28.5336 32.2352 28.0937C29.6652 27.9216 26.2852 27.6826 23.7252 27.4818C23.8052 27.4818 23.8852 27.4627 23.9352 27.4053C23.6352 27.7591 22.6952 28.8682 22.3852 29.2315C21.0352 30.8283 19.5752 32.5302 18.1852 34.1079C16.5052 35.9819 13.0952 35.3126 12.3152 32.9701C12.1052 32.3294 11.4252 29.3272 11.2352 28.6101C11.0752 27.9503 10.3152 24.8237 10.2252 24.3743C10.2452 24.403 10.2752 24.4222 10.3052 24.4317C9.2052 24.011 3.2052 21.7067 2.0752 21.2765C-0.504797 20.349 -0.744797 16.7826 1.7252 15.5683C3.7752 14.4018 6.6252 12.7955 8.6852 11.629L9.0752 11.4091L9.2352 11.323C9.2352 11.323 9.2852 11.2848 9.2952 11.2561C9.2952 11.237 9.2952 11.2657 9.2952 11.2083L9.3252 10.778C9.4252 9.20996 9.6252 6.37023 9.7252 4.77347C9.7552 4.47707 9.8352 2.82295 9.8852 2.52654C10.1052 0.566455 12.5652 -0.638282 14.3652 0.356104C14.5852 0.461279 14.7852 0.623823 14.9752 0.767244C17.1652 2.6126 19.3852 4.42926 21.5952 6.24593C21.6752 6.31286 21.7452 6.33198 21.8452 6.31286L23.5352 5.87303C25.2652 5.42365 28.7652 4.49619 30.4952 4.04681C32.8952 3.40619 35.1352 5.9304 34.1252 8.10084L34.1152 8.11996Z" fill="#F9EC31"/>
                    <path d="M17.0537 21.4062L13.1396 17.5156C13.0303 17.4062 12.9756 17.2656 12.9756 17.0937C12.9756 16.9218 13.0303 16.7812 13.1396 16.6718L14.0068 15.8281C14.1162 15.7031 14.249 15.6406 14.4053 15.6406C14.5771 15.6406 14.7256 15.7031 14.8506 15.8281L17.4756 18.4531L23.1006 12.8281C23.2256 12.7031 23.3662 12.6406 23.5225 12.6406C23.6943 12.6406 23.835 12.7031 23.9443 12.8281L24.8115 13.6718C24.9209 13.7812 24.9756 13.9218 24.9756 14.0937C24.9756 14.2656 24.9209 14.4062 24.8115 14.5156L17.8975 21.4062C17.7881 21.5312 17.6475 21.5937 17.4756 21.5937C17.3037 21.5937 17.1631 21.5312 17.0537 21.4062Z" fill="#F05C41"/>
                  </svg>
                </span>
                <span className="font-semibold text-lg text-textBlue ml-3 mb-1">
                  Discounts & previews
                </span>
              </div>
              <Button
                removeIcons={true}
                className="col-span-2 shadow-md hover:shadow-lg w-full h-[44px] group inline-flex items-center justify-center font-bold text-sm md:text-lg rounded-[30px] hover:bg-white hover:text-brandBlue py-1 px-4 pl-0 transition-all border-[3px] border-brandBlue bg-brandBlue text-white hover:scale-105 mx-auto"
                link="/"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full text-center mt-12">
          <picture>
            <source media="(min-width:768px)" srcset="/confrim-footer.svg" />
            <img src="/confirm-footer-mobile.svg" alt="Its on its way!" className="w-full" />
          </picture>
        </div>

        <div className="w-full text-center mt-12">
          <div className='flex justify-center'>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold md:!leading-[1.2] text-transparent text-center mb-3 drop-shadow-md">
              <span className='bg-gradient-to-r from-brandBlue via-textBlue to-brandBlue bg-clip-text md:!leading-[1.2] text-transparent textStroke'>Your Next Purchase?</span>
            </div>
          </div>
          <div className="bg-white pt-8 pb-6 px-3 rounded-xl mt-[-27px] shadow-sm">
            <div className="flex gap-4 justify-center mx-auto [&_.swiper-pagination]:relative [&_.swiper-pagination]:top-[-10px!important] [&_.swiper-pagination]:mt-2 [&_.swiper-pagination-bullet]:size-3 [&_.swiper-pagination-bullet-active]:scale-[1.2] hover:[&_.swiper-pagination-bullet]:scale-[1.2]">
              <Swiper
                className="!pb-5 !px-2.5"
                modules={[Autoplay, Pagination]}
                spaceBetween={10}
                slidesPerView={3}
                pagination={{ clickable: true }}
                autoplay={true}
                loop
              >
                {products.slice(0, 6).map((product) => (
                  <SwiperSlide>
                    <div
                      onClick={() => {
                        navigate(`/product-details/${product.id}`);
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="cursor-pointer flex flex-col md:flex-row h-[calc(100%-20px)] transition-all hover:scale-105 pt-2"
                    >
                      <div className="border-[3px] border-brandLightBlue rounded-lg w-full md:w-1/2 mb-3 md:mb-0 shrink flex items-center">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                        />
                      </div>
                      <div
                        className=" md:py-2 cursor-pointer w-full md:w-1/2 flex flex-col justify-between items-center px-2 grow"
                      >
                        <div className="flex flex-wrap justify-center">
                              <div className="inline-flex items-center text-xs text-gray-400">{product.brand}</div>
                          </div>
                        <div className="text-xs lg:text-sm text-brandBlue font-bold leading-[1.2] xl:leading-[1.1] mb-2 md:mb-0 line-clamp-2">
                          {product.name}
                        </div>
                        <div>
                          <div className="price">
                            <div className="flex items-end justify-center">
                              <span className="text-brandRed font-bold text-xs md:text-sm">
                                £{product.price}
                              </span>
                              {product.originalPrice && (
                                <span className="line-through text-gray-400 text-[10px] md:text-xs ml-1">
                                  £{product.originalPrice}
                                </span>
                              )}
                            </div>
                          </div>
                          <Button
                            className="shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-xs lg:text-sm rounded-[30px] bg-brandGreen text-white py-2 px-2 lg:px-4 lg:pl-0 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-2 min-h-[44px]"
                          >
                            Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
