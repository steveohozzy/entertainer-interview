import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import WishlistProductTile from "../../components/wishlistProductTile/WishlistProductTile";
import HeadingRibbon from "../../components/headingRibbon/headingRibbon";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { selectWishlistItems } from "../../store/wishlist/wishlistSelector";

import { selectWishlistTotal } from "../../store/wishlist/wishlistSelector";

import { products } from "../../data/products";

const Wishlist = () => {
  const navigate = useNavigate();
  const wishlistItems = useSelector(selectWishlistItems);
  const wishlistTotal = useSelector(selectWishlistTotal);

  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap py-6">
            <div className="w-full md:w-[66.6666666%] px-1 md:px-3">
              <div className="flex items-end">
                <h1 className="text-base md:text-xl font-bold text-textBlue mr-1 md:mr-2">
                  Wishlist
                </h1>
                {wishlistItems.length && (
                  <>
                    <span className="text-gray-500">{wishlistItems.length} Items</span>
                  </>
                )}
              </div>
              {wishlistItems.length ? (
                wishlistItems.map((item) => (
                  <WishlistProductTile key={item.id} product={item} />
                ))
              ) : (
                <div>Your cart is empty</div>
              )}
            </div>
            <div className="w-full text-center mt-12">
              <HeadingRibbon>You may also like</HeadingRibbon>
              <div className="bg-brandLightBlue pt-12 pb-8 px-4 md:px-8 rounded-xl mt-[-27px] [&_.swiper-pagination]:relative">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={10}
                  slidesPerView={2.25}
                  breakpoints={{
                    768: {
                      slidesPerView: 3,
                    },
                  }}
                  pagination={{ clickable: true }}
                  autoplay={true}
                  loop
                >
                  {products.slice(0, 6).map((product) => (
                    <SwiperSlide className="h-auto">
                      <div
                        onClick={() => {
                          navigate(`/product-details/${product.id}`);
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                        className="cursor-pointer flex flex-wrap bg-white rounded-xl shadow-md h-full"
                      >
                        <div className="border-[3px] border-brandBlue rounded-lg w-full md:w-1/2 mb-3 md:mb-0">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                          />
                        </div>
                        <div
                          onClick={() => {
                            navigate(`/product-details/${product.id}`);
                            window.scrollTo({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                          }}
                          className="cursor-pointer w-full md:w-1/2 flex flex-col justify-between items-center px-2 pb-2 md:py-2"
                        >
                          <div className="text-xs lg:text-sm xl:text-lg text-brandBlue font-bold leading-[1.2] xl:leading-[1.1] mb-2 md:mb-0">
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
                              className="shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-xs lg:text-sm rounded-[30px] bg-brandGreen text-white py-2 px-2 lg:px-4 lg:pl-0 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-2"
                              onClick={() => {
                                navigate(`/product-details/${product.id}`);
                                window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                                });
                              }}
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
            <div className="bg-white p-4 px-0 md:px-4 w-full sticky bottom-0 left-0 md:hidden z-20">
              <Button
                className="h-[40px] shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-sm md:text-lg rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-2 transition-all hover:bg-brandLightGreen hover:scale-105"
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
                link="/checkout"
              >
                Checkout Securely £{wishlistTotal.toFixed(2)}
              </Button>
              <Button
                removeIcons={true}
                className="shadow-md hover:shadow-lg w-full h-[40px] group inline-flex items-center justify-center font-bold text-sm md:text-lg rounded-[30px] bg-white text-brandBlue py-1 px-4 pl-2 transition-all border-[3px] mt-4 border-brandBlue hover:bg-brandBlue hover:text-white hover:scale-105"
                link="/"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
