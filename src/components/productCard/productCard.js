import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Heart, Eye, Plus, Minus } from "lucide-react";
import { useSelector } from "react-redux";

import { useDispatch } from 'react-redux';

import { setIsCartOpen, addItemToCart } from '../../store/cart/cartReducer';

import { addItemToWishlist, removeItemFromWishlist } from "../../store/wishlist/wishlistReducer";

import { selectWishlistItems } from "../../store/wishlist/wishlistSelector";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import Button from "../button/Button";
import Dropdown from "../../components/dropdown/Dropdown";

const ProductCard = ({ product }) => {
  const {
    name,
    price,
    image,
    originalPrice,
    isNew,
    isBestseller,
    alternateImage,
  } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // swap colours
  const [swatchColor, setSwatchColor] = useState('blue');

  const wrapperRef = useRef(null);

  const goToLinkHandler = () => {
    navigate("/product-details/" + product.id);
  };

  const addProductToCart = () => {
    dispatch(addItemToCart(product));
    closeQuickView();
    dispatch(setIsCartOpen(true));
    document.body.classList.add('body-noscroll');
    window.scrollBy(0 , -2)
  }

  const addProductToWishlist = () => {
    dispatch(addItemToWishlist(product));
  }

  const removeProductFromWishlist = () => {
    dispatch(removeItemFromWishlist(product));
  }

  // Quick view modal state
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Reset modal state when opening
  const openQuickView = (product) => {
    setQuickViewProduct(product);
    setQuantity(1);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);

    setQuantity(1);
  };

  // Add to favourites
  const wishlistItems = useSelector(selectWishlistItems);

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems])

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
         closeQuickView();
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(wrapperRef);

  return (
    <>
      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 bg-brandBlue/60">
          <div ref={wrapperRef} className="fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg sm:rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="relative flex flex-col gap-4">
              {quickViewProduct && (
                <>
                  <button
                    name="Close quick view"
                    onClick={closeQuickView}
                    className="absolute right-[-10px] top-[-15px] text-textBlue rounded-full border-[2px] border-textBlue z-[2]"
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
                    <span className="sr-only">Close</span>
                  </button>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Product Images */}
                    <div className="max-w-[calc(100vw-50px)]">
                      <div className="relative">
                        <Swiper
                          modules={[Autoplay, Pagination]}
                          spaceBetween={20}
                          slidesPerView={1}
                          pagination={{ clickable: true }}
                          autoplay={false}
                          onTransitionEnd={() => {
                            const slides =
                              document.querySelectorAll(".swiper-slide");

                            slides.forEach((slide) => {
                              if (
                                slide.classList.contains("swiper-slide-active")
                              ) {
                                const video = slide.querySelector("video");
                                if (video) {
                                  video.play();
                                }
                              } else {
                                const video = slide.querySelector("video");
                                if (video) {
                                  video.pause();
                                }
                              }
                            });
                          }}
                          loop
                        >
                          {product.video && (
                            <SwiperSlide className="h-auto">
                              <video
                                className="object-cover w-full h-full"
                                autoplay=""
                                loop
                                muted
                              >
                                <source src={product.video} type="video/mp4" />
                              </video>
                            </SwiperSlide>
                          )}
                          {product.images.map((image) => (
                            <SwiperSlide>
                              <img
                                className="object-cover w-full h-full"
                                src={image}
                                alt={product.name}
                              />
                              {swatchColor === 'orange' && <span className="absolute top-1/2 left-1/2 -rotate-45 text-orange-600 font-bold text-[100px] -translate-y-1/2 -translate-x-1/2">ORANGE</span>}
                            </SwiperSlide>
                          ))}
                        </Swiper>
                        <div className="absolute top-3 right-3 z-[1]">
                          <button
                            onClick={wishlistItems.some(item => product.id === item.id) ? removeProductFromWishlist : addProductToWishlist}
                            name="Add to favourites"
                            className={`relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg  h-10  transition-all hover:scale-105 hover:text-brandPink`}
                          >
                            <Heart
                              className={`h-6 md:h-10 w-6 md:w-10 ${
                                wishlistItems.some(item => product.id === item.id)
                                  ? "text-brandPink animate-bigheart"
                                  : "text-brandBlue"
                              }`}
                              fill={
                                wishlistItems.some(item => product.id === item.id) ? "#FF7BAC" : "transparent"
                              }
                            />
                            <Heart
                              className={`absolute bottom-0 left-[-6px] 0 h-[5px] md:h-[10px] w-[5px] md:w-[10px] opacity-0 text-transparent ${
                                wishlistItems.some(item => product.id === item.id)
                                  ? "animate-miniheartleft text-brandPink"
                                  : "text-brandBlue"
                              }`}
                              fill={
                                wishlistItems.some(item => product.id === item.id) ? "#FF7BAC" : "transparent"
                              }
                            />
                            <Heart
                              className={`absolute bottom-0 right-[-4px] h-[5px] md:h-[10px] w-[5px] md:w-[10px] opacity-0 text-transparent ${
                                wishlistItems.some(item => product.id === item.id)
                                  ? "animate-miniheartright text-brandPink"
                                  : "text-brandBlue"
                              }`}
                              fill={
                                wishlistItems.some(item => product.id === item.id) ? "#FF7BAC" : "transparent"
                              }
                            />
                            <span className="sr-only">Add to favourites</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-3 md:space-y-6">
                      <h1 className="text-xl md:text-3xl font-bold text-brandBlue text-left md:mb-4">
                        {product.name} {swatchColor === 'orange' && <span className="text-orange-600">ORANGE</span>}
                      </h1>
                      <div className="flex flex-wrap items-start justify-between mt-0">
                        <div className="flex flex-col items-start w-1/2 md:w-auto justify-between">
                          <div className="rating mb-2">
                            <div className="flex items-end">
                              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs ml-1 text-brandBlue">
                                (3)
                              </span>
                            </div>
                          </div>
                          <div className="price">
                            <div className="flex items-end">
                              <span className="text-brandRed font-bold text-xl md:text-2xl">
                                £{product.price}
                              </span>
                              {product.originalPrice && (
                                <span className="line-through text-gray-400 text-md md:text-lg ml-1">
                                  £{product.originalPrice}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <span className="text-center text-white bg-brandNeonBlue text-xs md:text-sm border border-brandNeonBlue px-2 py-1 rounded-md md:ml-2 :w-auto">
                          FREE UK DELIVERY
                        </span>
                      </div>
                      <div className="flex flex-wrap items-end justify-between pb-6 border-b-[3px] border-gray-300 md:flex-row">
                        <div className="w-full md:w-auto mb-0">
                          <div className="flex flex-wrap items-center notices justify-end">
                            <span className="flex items-center justify-between text-brandNeonBlue border-[2px] border-brandNeonBlue p-2 rounded-md mb-2 md:mb-0 w-full md:w-auto font-bold">
                              <span>Other styles</span>
                              <div className="flex items-center">
                                <button onClick={() => setSwatchColor('blue')} className={`transition-all rounded-full bg-brandNeonBlue w-[20px] md:w-[25px] h-[20px] md:h-[25px] border-[3px] ml-3 hover:border-brandBlue ${swatchColor === 'blue' ? 'border-brandBlue' : 'border-brandNeonBlue'}`}><span className="sr-only">Blue</span></button>
                                <button onClick={() => setSwatchColor('orange')} className={`rounded-full bg-orange-300 w-[20px] md:w-[25px] h-[20px] md:h-[25px] border-[3px]  ml-3 transition-all hover:border-orange-500 ${swatchColor === 'orange' ? 'border-orange-500' : 'border-orange-300'}`}><span className="sr-only">Orange</span></button>
                                <button onClick={() => setSwatchColor('black')}  className={`rounded-full bg-black w-[20px] md:w-[25px] h-[20px] md:h-[25px] border-[3px] ml-3 transition-all hover:border-gray-500 ${swatchColor === 'black' ? 'border-gray-500' : 'border-black'}`}><span className="sr-only">Black</span></button>
                                <button onClick={() => setSwatchColor('red')}  className={`rounded-full bg-red-500 w-[20px] md:w-[25px] h-[20px] md:h-[25px] border-[3px] ml-3 transition-all hover:border-red-700 ${swatchColor === 'red' ? 'border-red-700' : 'border-red-500'}`}><span className="sr-only">red</span></button>
                              </div>
                            </span>
                          </div>
                        </div>
                        <div className="w-full py-4 pt-0 md:pt-4">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <path
                                d="M6.61 0.639062C10.1216 0.639062 13.0134 3.53094 13.0134 7.0425C13.0134 10.5799 10.1216 13.4459 6.61 13.4459C3.07262 13.4459 0.206563 10.5799 0.206563 7.0425C0.206563 3.53094 3.07262 0.639062 6.61 0.639062ZM6.61 1.87844C3.74395 1.87844 1.44594 4.20227 1.44594 7.0425C1.44594 9.90855 3.74395 12.2066 6.61 12.2066C9.45023 12.2066 11.7741 9.90855 11.7741 7.0425C11.7741 4.20227 9.45023 1.87844 6.61 1.87844ZM10.2248 5.2609C10.3281 5.36418 10.3281 5.57074 10.2248 5.69984L5.75793 10.1151C5.62883 10.2442 5.44809 10.2442 5.31898 10.1151L2.96934 7.73965C2.86605 7.63637 2.86605 7.4298 2.96934 7.3007L3.5632 6.73266C3.6923 6.60355 3.87305 6.60355 4.00215 6.73266L5.55137 8.28187L9.19203 4.66703C9.32113 4.53793 9.5277 4.53793 9.63098 4.66703L10.2248 5.2609Z"
                                fill="#328320"
                              />
                            </svg>
                            <span className="font-bold ml-3 text-sm md:text-md text-brandGreen">
                              3 in stock in Amersham
                            </span>
                            <button className="text-xs text-gray-400 underline ml-3">
                              Select another store
                            </button>
                          </div>
                        </div>
                        
                        <Dropdown
                          arrowAgainstWord={true}
                          title="More Details"
                          className="text-brandBlue text-base flex items-center justify-center border-[3px] border-gray-400 rounded-full w-full py-2 [&_.border-r-transparent]:hidden"
                          answer={
                            <div className="py-3 text-textBlue">
                              <p className="mb-3">
                                The Hot Wheels Monster Trucks Big Rigs haul big
                                personalities on six wheels for epic adventures.
                              </p>

                              <p className="mb-3">
                                Each die-cast truck captures the style and
                                personality of a fan-favourite Monster Truck
                                character or creature in 1:64 scale. Add in the
                                six massive wheels and this rig can also transport
                                an additional Hot Wheels Monster Truck (sold
                                separately) with either a tow hook or on the
                                flatbed!
                              </p>

                              <p className="mb-0">Product features:</p>
                              <ul className="list-inside list-disc">
                                <li className="mb-1">
                                  Includes: 1x Hot Wheels Monster Trucks Big Rigs
                                  Vehicle (styles vary) Get the adventures movin'
                                  with a Hot Wheels Monster Trucks Big Rig!
                                </li>
                                <li className="mb-1">
                                  These Big Rigs feature six wheels to go even
                                  bigger on the Monster Truck action
                                </li>
                                <li className="mb-1">
                                  Each 1:64 scale die-cast vehicle captures the
                                  personality of fan-favourite Monster Truck
                                  creatures and characters with the eye-catching
                                  designs that fans love
                                </li>
                                <li className="mb-1">
                                  Kids can haul additional 1:64 scale vehicles on
                                  the flatbed or with a tow hook on the Big Rig
                                  (sold separately)
                                </li>
                                <li className="mb-1">
                                  Suitable for ages 3 years +
                                </li>
                              </ul>
                              <p className="text-lg font-bold mt-2">
                                Specifications
                              </p>
                              <p>
                                Manufacturer:{" "}
                                <span className="font-bold">MATTEL TOYS</span>
                                <br />
                                Manufacturer Number:{" "}
                                <span className="font-bold">HWN86</span>
                                <br />
                                Our Product Number:{" "}
                                <span className="font-bold">566798</span>
                                <br />
                                Safety Information:
                                <br />
                                <span className="font-bold">
                                  WARNING. Not suitable for children under 36
                                  months. Small Parts. Choking Hazard.
                                </span>
                              </p>
                            </div>
                          }
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border-[3px] border-gray-300 rounded-full">
                            <button
                                name="Reduce quanitity"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-3 text-brandBlue"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                disabled={quantity <= 1}
                            >
                                <Minus className="h-4 w-4" />
                                <span className="sr-only">Reduce quantity</span>
                            </button>
                            <span className="px-3 md:px-4 py-1 md:py-2 min-w-[3rem] text-center text-brandBlue text-lg font-bold">{quantity}</span>
                            <button
                                name="Increase quantity"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-3 text-brandBlue"
                                onClick={() => setQuantity(quantity + 1)}
                                disabled={quantity >= 10}
                            >
                                <Plus className="h-4 w-4" />
                                <span className="sr-only">Increase quanitity</span>
                            </button>
                          </div>
                        </div>
                        <Button
                          className="shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-xs min-h-[40px] md:text-lg rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-2 transition-all hover:bg-brandLightGreen hover:scale-105"
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
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col rounded-xl border-[3px] border-gray-200 bg-white shadow-sm group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
        <div className="relative">
          <button className="pt-4" onClick={goToLinkHandler}>
            <img
              src={image || "/placeholder.svg"}
              alt={name}
              className="w-full object-cover transition-transform duration-300"
            />

            {/* Alternate image on hover */}
            <img
              src={alternateImage || "/placeholder-alt.svg"}
              alt={`${name} - alternate view`}
              className="absolute top-4 inset-0 w-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-300"
            />
          </button>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 flex w-full flex justify-center">
            {isNew && (
              <div className="shadow-text-green inline-flex items-center rounded-lg px-2 py-0.5 text-xs md:text-sm font-bold bg-brandGreen text-white">
                NEW TOYS
              </div>
            )}
            {isBestseller && (
              <div className="shadow-text-red inline-flex items-center rounded-lg px-2 py-0.5 text-xs md:text-sm font-bold bg-brandRed text-white">
                33% OFF
              </div>
            )}
          </div>
          <div className="absolute top-2 right-[-5px] md:top-3 md:right-1 flex flex-col md:gap-2 opacity-0 group-hover:opacity-100 opacity-100 md:opacity-0 transition-opacity">
            <button
              onClick={wishlistItems.some(item => product.id === item.id) ? removeProductFromWishlist : addProductToWishlist}
              name="Add to favourites"
              className={`relative inline-flex items-center justify-center md:gap-2 whitespace-nowrap text-lg h-4 md:h-9  transition-all hover:scale-105 hover:text-brandPink`}
            >
              <Heart
                className={`h-5 md:h-8 w-5 md:w-8 ${
                  wishlistItems.some(item => product.id === item.id)
                    ? "text-brandPink animate-bigheart"
                    : "text-brandBlue"
                }`}
                fill={wishlistItems.some(item => product.id === item.id) ? "#FF7BAC" : "transparent"}
              />
              <Heart
                className={`absolute bottom-0 left-1 h-2 w-2 opacity-0 text-transparent ${
                  wishlistItems.some(item => product.id === item.id)
                    ? "animate-miniheartleft text-brandPink"
                    : "text-brandBlue"
                }`}
                fill={wishlistItems.some(item => product.id === item.id) ? "#FF7BAC" : "transparent"}
              />
              <Heart
                className={`absolute bottom-0 right-2 h-2 w-2 opacity-0 text-transparent ${
                  wishlistItems.some(item => product.id === item.id)
                    ? "animate-miniheartright text-brandPink"
                    : "text-brandBlue"
                }`}
                fill={wishlistItems.some(item => product.id === item.id) ? "#FF7BAC" : "transparent"}
              />
              <span className="sr-only">Add to favourites</span>
            </button>
            <button
              name="quick view"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-9 rounded-md px-3 transition-all hover:scale-105"
              onClick={() => openQuickView(product)}
            >
              <Eye className="h-5 md:h-8 w-5 md:w-8 text-textBlue hover:text-brandMediumGreen transition-all" />
              <span className="sr-only">Open quick view</span>
            </button>
          </div>
        </div>
        <div className="p-4 flex flex-col grow">
          <button className="flex flex-col h-full" onClick={goToLinkHandler}>
            <h2 className="text-brandBlue flex-grow font-bold text-sm mb-2 leading-tight line-clamp-2 grow">
              {name}
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-textBlue ml-1">(3)</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 my-2">
              <span className="text-base font-bold text-brandRed">
                £{price}
              </span>
              {originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  £{originalPrice}
                </span>
              )}
            </div>
          </button>
          <div className="flex items-center justify-center">
            <Button
              className="shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-base rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-2 transition-all hover:bg-brandLightGreen hover:scale-105"
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
              Add
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
