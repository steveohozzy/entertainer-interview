import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../store/cart/cartReducer';

import { selectWishlistItems } from "../../store/wishlist/wishlistSelector";

import { addItemToWishlist, removeItemFromWishlist } from "../../store/wishlist/wishlistReducer";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import { products } from "../../data/products";
import { Star, Heart } from "lucide-react";
import Button from "../../components/button/Button";
import Dropdown from "../../components/dropdown/Dropdown";
import HeadingRibbon from "../../components/headingRibbon/headingRibbon";
import { setIsCartOpen } from '../../store/cart/cartReducer';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(item => item.id === parseInt(id));

    const addProductToCart = () => {
        dispatch(addItemToCart(product));
        dispatch(setIsCartOpen(true));
        document.body.classList.add('body-noscroll');
        window.scrollBy(0 , -2)
    }

    // Add to favourites
    const addProductToWishlist = () => {
        dispatch(addItemToWishlist(product));
    }

    // Remove from favourites
    const removeProductFromWishlist = () => {
        dispatch(removeItemFromWishlist(product));
      }
    
    const wishlistItems = useSelector(selectWishlistItems);

    useEffect(() => {
        localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    }, [wishlistItems])

    // slide out tab
    const [tabOpen, setTabOpen] = useState(false);

     // swap colours
    const [swatchColor, setSwatchColor] = useState('blue');

    //show stores
    const [storesOpen, setStoresOpen] = useState(false);
    

  return (
    <>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className="rounded-xl flex flex-wrap bg-white items-start shadow-sm">
            <div className="relative w-full md:w-2/5 p-4 border-[3px] border-brandNeonBlue rounded-xl [&_.swiper-pagination]:relative">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={false}
                    onTransitionEnd={() => {
                        const slides = document.querySelectorAll('.swiper-slide');

                        slides.forEach(slide => {
                            if (slide.classList.contains('swiper-slide-active')) {
                                const video = slide.querySelector('video');
                                if (video) {
                                    video.play();
                                }
                            } else {
                                const video = slide.querySelector('video');
                                if (video) {
                                    video.pause();
                                }
                            }

                        });
                    }}
                    loop
                    >
                        {product.video &&
                            <SwiperSlide className="h-auto">
                                <video className="object-cover w-full h-full" autoplay="" playsInline loop muted>
                                    <source src={product.video} type="video/mp4" />
                                </video>
                            </SwiperSlide>
                        }
                        {product.images.map((image) => (
                            <SwiperSlide><img className="object-cover w-full h-full" src={image} alt={product.name} />{swatchColor === 'orange' && <span className="absolute top-1/2 left-1/2 -rotate-45 text-orange-600 font-bold text-[100px] -translate-y-1/2 -translate-x-1/2">ORANGE</span>}</SwiperSlide>
                        ))}
                    </Swiper>
                <div className="absolute top-3 right-3 z-[1]">
                    <button onClick={wishlistItems.some(item => product.id === item.id) ? removeProductFromWishlist : addProductToWishlist} name="Add to favourites" className={`relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg  h-10  transition-all hover:scale-105 hover:text-brandPink`}>
                        <Heart className={`h-10 w-10 ${wishlistItems.some(item => product.id === item.id) ? 'text-brandPink animate-bigheart' : 'text-brandBlue'}`} fill={wishlistItems.some(item => product.id === item.id) ? "#FF7BAC" : "transparent"} />
                        <Heart className={`absolute bottom-0 left-[-6px] 0 h-[10px] w-[10px] opacity-0 text-transparent ${wishlistItems.some(item => product.id === item.id) ? 'animate-miniheartleft text-brandPink' : 'text-brandBlue'}`} fill={wishlistItems.some(item => product.id === item.id) ? "#FF7BAC" : "transparent"} />
                        <Heart className={`absolute bottom-0 right-[-4px] h-[10px] w-[10px] opacity-0 text-transparent ${wishlistItems.some(item => product.id === item.id) ? 'animate-miniheartright text-brandPink' : 'text-brandBlue'}`} fill={wishlistItems.some(item => product.id === item.id) ? "#FF7BAC" : "transparent"} />
                        <span className="sr-only">Add to favourites</span>
                    </button>
                </div>
            </div>
            <div className="w-full md:w-3/5 p-4 px-6">
                <h1 className="text-xl md:text-3xl font-bold text-brandBlue text-center mb-4 md:mb-10">{product.name} {swatchColor === 'orange' && <span className="text-orange-600">ORANGE</span>}</h1>
                <Button 
                    className='shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-lg rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-2 transition-all hover:bg-brandLightGreen hover:scale-105'
                    iconpath={
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"/>
                        </svg>
                    }
                    onClick={addProductToCart}>
                        Add to Basket
                </Button>
                <div className="flex flex-wrap items-end justify-between py-6 border-b-[3px] border-gray-300">
                    <div className="flex flex-wrap items-end w-1/2 md:w-auto justify-between">
                        <div className="price">
                            <div className="flex items-end">
                                <span className="text-brandRed font-bold text-xl md:text-2xl">£{product.price}</span>
                                {product.originalPrice &&
                                    <span className="line-through text-gray-400 text-md md:text-lg ml-1">£{product.originalPrice}</span>
                                }
                            </div>
                        </div>
                        <div className="rating mt-2 md:mt-0 md:mb-1 md:ml-2 xl:ml-8">
                            <div className="flex items-end">
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <span className="text-xs ml-1 text-brandBlue">(3)</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 md:w-auto">
                        <div className="flex flex-wrap items-center notices justify-end">
                            <span className="text-center text-brandNeonBlue text-xs md:text-sm border border-brandNeonBlue px-2 py-1 rounded-md mb-2 md:mb-0 w-full md:w-auto">
                                3 OTHER STYLES
                            </span>
                            <span className="text-center text-white bg-brandNeonBlue text-xs md:text-sm border border-brandNeonBlue px-2 py-1 rounded-md md:ml-2 w-full md:w-auto">
                                FREE UK DELIVERY
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-end justify-between py-6 border-b-[3px] border-gray-300 flex-col-reverse md:flex-row">
                    <div className="flex flex-wrap items-end w-full md:w-auto justify-between">
                        <div className="price">
                            <div className="flex items-center">
                                <img src="/klarna-logo.svg" alt="Klarna" />
                                <p className="text-sm leading-[1.2] ml-2">
                                    Make 3 payments of £00.00.<br />
                                    <span className="text-xs"><a href="/" className="underline">Learn more</a> Interest-free payments.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-auto mb-4 md:mb-0">
                        <div className="flex flex-wrap items-center notices justify-end">
                            <span className="flex items-center justify-between text-brandNeonBlue border-[2px] border-brandNeonBlue p-2 rounded-md mb-2 md:mb-0 w-full md:w-auto font-bold">
                                <span>
                                    Other styles
                                </span>
                                <div className="flex items-center">
                                    <button onClick={() => setSwatchColor('blue')} className={`transition-all rounded-full bg-brandNeonBlue w-[20px] md:w-[25px] h-[20px] md:h-[25px] border-[3px] ml-3 hover:border-brandBlue ${swatchColor === 'blue' ? 'border-brandBlue' : 'border-brandNeonBlue'}`}><span className="sr-only">Blue</span></button>
                                    <button onClick={() => setSwatchColor('orange')} className={`rounded-full bg-orange-300 w-[20px] md:w-[25px] h-[20px] md:h-[25px] border-[3px]  ml-3 transition-all hover:border-orange-500 ${swatchColor === 'orange' ? 'border-orange-500' : 'border-orange-300'}`}><span className="sr-only">Orange</span></button>
                                    <button onClick={() => setSwatchColor('black')}  className={`rounded-full bg-black w-[20px] md:w-[25px] h-[20px] md:h-[25px] border-[3px] ml-3 transition-all hover:border-gray-500 ${swatchColor === 'black' ? 'border-gray-500' : 'border-black'}`}><span className="sr-only">Black</span></button>
                                    <button onClick={() => setSwatchColor('red')}  className={`rounded-full bg-red-500 w-[20px] md:w-[25px] h-[20px] md:h-[25px] border-[3px] ml-3 transition-all hover:border-red-700 ${swatchColor === 'red' ? 'border-red-700' : 'border-red-500'}`}><span className="sr-only">red</span></button>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="w-full py-4 pt-0 md:pt-8">
                        <div className="flex items-center flex-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M6.61 0.639062C10.1216 0.639062 13.0134 3.53094 13.0134 7.0425C13.0134 10.5799 10.1216 13.4459 6.61 13.4459C3.07262 13.4459 0.206563 10.5799 0.206563 7.0425C0.206563 3.53094 3.07262 0.639062 6.61 0.639062ZM6.61 1.87844C3.74395 1.87844 1.44594 4.20227 1.44594 7.0425C1.44594 9.90855 3.74395 12.2066 6.61 12.2066C9.45023 12.2066 11.7741 9.90855 11.7741 7.0425C11.7741 4.20227 9.45023 1.87844 6.61 1.87844ZM10.2248 5.2609C10.3281 5.36418 10.3281 5.57074 10.2248 5.69984L5.75793 10.1151C5.62883 10.2442 5.44809 10.2442 5.31898 10.1151L2.96934 7.73965C2.86605 7.63637 2.86605 7.4298 2.96934 7.3007L3.5632 6.73266C3.6923 6.60355 3.87305 6.60355 4.00215 6.73266L5.55137 8.28187L9.19203 4.66703C9.32113 4.53793 9.5277 4.53793 9.63098 4.66703L10.2248 5.2609Z" fill="#328320"/>
                            </svg>
                            <span className="font-bold ml-3 text-sm md:text-md text-brandGreen">
                                3 in stock in Amersham
                            </span>
                            <button onClick={() => setStoresOpen(!storesOpen)} className="text-xs text-gray-400 underline ml-3">
                                Select another store
                            </button>
                            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out w-full ${
                            storesOpen
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }`}>
                                <div className="w-full md:w-1/2 overflow-hidden">
                                    <div className='mt-4'>
                                        <form id="pickup-form" className='flex'>
                                        <label className='text-sm text-textBlue mr-6'>
                                            <input type="radio" name="option" id="option1" className='accent-brandGreen mr-2' defaultChecked />
                                            Entertainer stores
                                        </label>
                                        <label className='text-sm text-textBlue'>
                                            <input type="radio" name="option" id="option1" className='accent-brandGreen mr-2' />
                                            Tesco stores
                                        </label>
                                        </form>
                                        <div className='flex justify-between py-3 border-b-[3px] border-gray-300'>
                                        <div>
                                            <button className='text-sm text-gray-400 mr-3'>
                                            List view
                                            </button>
                                            <button className='text-sm text-gray-400'>
                                            map view
                                            </button>
                                        </div>
                                        <span className='text-sm text-gray-400'>
                                            Results
                                        </span>
                                        </div>
                                        <div className='text-sm text-brandBlue py-4'>
                                        The Entertainer Amersham<br />
                                        2 Sycamore Road, Amersham HP^ 5DR
                                        <div className='text-gray-400'>
                                            Collect withi 30 minutes for fREE
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Dropdown 
                    arrowAgainstWord={true}
                    title="Description"
                    className="text-brandBlue font-bold flex items-center justify-center w-full pt-6"
                    answer={
                        <div className="py-3 text-textBlue">
                            <p className="mb-3">The Hot Wheels Monster Trucks Big Rigs haul big personalities on six wheels for epic adventures.</p>

                            <p className="mb-3">Each die-cast truck captures the style and personality of a fan-favourite Monster Truck character or creature in 1:64 scale. Add in the six massive wheels and this rig can also transport an additional Hot Wheels Monster Truck (sold separately) with either a tow hook or on the flatbed!</p>

                            <p className="mb-0">Product features:</p>
                            <ul className="list-inside list-disc">
                                <li className="mb-1">Includes: 1x Hot Wheels Monster Trucks Big Rigs Vehicle (styles vary) Get the adventures movin' with a Hot Wheels Monster Trucks Big Rig!</li>
                                <li className="mb-1">These Big Rigs feature six wheels to go even bigger on the Monster Truck action</li>
                                <li className="mb-1">Each 1:64 scale die-cast vehicle captures the personality of fan-favourite Monster Truck creatures and characters with the eye-catching designs that fans love</li>
                                <li className="mb-1">Kids can haul additional 1:64 scale vehicles on the flatbed or with a tow hook on the Big Rig (sold separately)</li>
                                <li className="mb-1">Suitable for ages 3 years +</li>
                            </ul>
                            <p className="text-lg font-bold mt-2">Specifications</p>
                            <p>
                                Manufacturer: <span className="font-bold">MATTEL TOYS</span><br />
                                Manufacturer Number: <span className="font-bold">HWN86</span><br />
                                Our Product Number: <span className="font-bold">566798</span><br />
                                Safety Information:<br />
                               <span className="font-bold">WARNING. Not suitable for children under 36 months. Small Parts. Choking Hazard.</span>
                            </p>
                        </div>
                    }
                />
            </div>
        </div>

        <div className='w-full text-center mt-12'>
            <HeadingRibbon>
                Top Picks
            </HeadingRibbon>
            <div className='bg-white pt-12 pb-8 px-8 rounded-xl mt-[-27px] shadow-sm'>
                <div className='flex gap-4 justify-center mx-auto [&_.swiper-pagination]:relative [&_.swiper-pagination]:top-[-20px!important]'>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={10}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    autoplay={true}
                    loop
                    >
                {products.slice(0, 6).map((product) => (
                    <SwiperSlide>
                    <div onClick={() => { navigate(`/product-details/${product.id}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}} className="cursor-pointer flex flex-wrap">
                        <div className="border-[3px] border-brandLightBlue rounded-lg w-full md:w-1/2 mb-3 md:mb-0">
                            <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                            />
                        </div>
                        <div onClick={() => { navigate(`/product-details/${product.id}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}} className=" md:py-2 cursor-pointer w-full md:w-1/2 flex flex-col justify-between items-center px-2">
                            <div className="text-xs lg:text-sm xl:text-lg text-brandBlue font-bold leading-[1.2] xl:leading-[1.1] mb-2 md:mb-0">{product.name}</div>
                            <div>
                                <div className="price">
                                    <div className="flex items-end justify-center">
                                        <span className="text-brandRed font-bold text-xs md:text-sm">£{product.price}</span>
                                        {product.originalPrice &&
                                            <span className="line-through text-gray-400 text-[10px] md:text-xs ml-1">£{product.originalPrice}</span>
                                        }
                                    </div>
                                </div>
                                <Button 
                                    className='shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-xs lg:text-sm rounded-[30px] bg-brandGreen text-white py-2 px-2 lg:px-4 lg:pl-0 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-2'
                                    onClick={() => { navigate(`/product-details/${product.id}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}}>
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

        <button onClick={() => setTabOpen(!tabOpen)} className={`fixed z-[600] top-1/2 -translate-y-1/2 transition-all -rotate-90 bg-brandRed py-2 px-6 text-lg rounded-tr-xl rounded-tl-xl font-bold text-white shadow-[-5px_-5px_10px_1px_#bbb] ${tabOpen ? 'right-[138px]' : 'right-[-52px]'}`}>
            you may like
        </button>
        {tabOpen &&
            <div onClick={() => setTabOpen(false)} className="fixed inset-0 z-50 top-0 left-0 bg-brandBlue/60 w-screen h-screen"></div>
        }
        <div className={`fixed top-0 z-[9999] max-w-[190px] transition-all ${tabOpen ? 'right-0' : 'right-[-100vw]'}`}>
            <div className='w-full text-center'>
                <div className='bg-white p-5 rounded-tl-lg rounded-bl-lg max-h-screen overflow-auto no-scrollbar'>
                    <div className='flex flex-col gap-4 justify-start'>
                    {products.slice(0, 6).map((product) => (
                        <div key={product.id} onClick={() => { navigate(`/product-details/${product.id}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",}); setTabOpen(false)}} className="cursor-pointer flex flex-col w-full border-[2px] border-brandLightBlue rounded-xl">
                            <div className="w-full">
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl"
                                />
                            </div>
                            <div className="w-full flex flex-col justify-between items-center p-2">
                                <div className="text-xs lg:text-sm xl:text-base text-brandBlue font-bold leading-[1.2] xl:leading-[1.1] mb-2 md:mb-0">{product.name}</div>
                                <div>
                                    <div className="price">
                                        <div className="flex items-end justify-center">
                                            <span className="text-brandRed font-bold text-xs md:text-sm">£{product.price}</span>
                                            {product.originalPrice &&
                                                <span className="line-through text-gray-400 text-[10px] md:text-xs ml-1">£{product.originalPrice}</span>
                                            }
                                        </div>
                                    </div>
                                    <Button 
                                        className='shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-xs lg:text-sm rounded-[30px] bg-brandGreen text-white py-2 px-2 lg:px-4 lg:pl-0 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-2'
                                        onClick={() => { navigate(`/product-details/${product.id}`); setTabOpen(false)}}>
                                            Details
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full text-center mt-12'>
            <HeadingRibbon fullWidth={true}>
                Reviews
            </HeadingRibbon>
            <div className='bg-white pt-12 pb-8 px-8 rounded-xl mt-[-27px] shadow-sm'>
                <div className='flex justify-between flex-wrap'>
                    <div className="w-[260px]">
                        <div className="rating mb-4">
                            <div className="flex items-end">
                                <Star className="h-7 w-7 fill-yellow-400 text-yellow-400" />
                                <Star className="h-7 w-7 fill-yellow-400 text-yellow-400" />
                                <Star className="h-7 w-7 fill-yellow-400 text-yellow-400" />
                                <Star className="h-7 w-7 fill-yellow-400 text-yellow-400" />
                                <Star className="h-7 w-7 fill-yellow-400 text-yellow-400" />
                                <span className="text-lg ml-2 text-textBlue"><span className="font-bold">5</span> out of 5</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex text-textBlue w-full items-center text-xs">
                                <span className="w-[37px] text-left">
                                    5 stars
                                </span>
                                <div className="h-[5px] bg-brandBlue rounded-lg grow mx-2">&nbsp;</div>
                                <span className="w-[5%]">
                                    0
                                </span>
                            </div>
                            <div className="flex text-gray-300 w-full items-center text-xs mt-2">
                                <span className="w-[37px] text-left">
                                    4 stars
                                </span>
                                <div className="h-[5px] bg-gray-300 rounded-lg grow mx-2">&nbsp;</div>
                                <span className="w-[5%]">
                                    
                                </span>
                            </div>
                            <div className="flex text-gray-300 w-full items-center text-xs mt-2">
                                <span className="w-[37px] text-left">
                                    3 stars
                                </span>
                                <div className="h-[5px] bg-gray-300 rounded-lg grow mx-2">&nbsp;</div>
                                <span className="w-[5%]">
                                    
                                </span>
                            </div>
                            <div className="flex text-gray-300 w-full items-center text-xs mt-2">
                                <span className="w-[37px] text-left">
                                    2 stars
                                </span>
                                <div className="h-[5px] bg-gray-300 rounded-lg grow mx-2">&nbsp;</div>
                                <span className="w-[5%]">
                                    
                                </span>
                            </div>
                            <div className="flex text-gray-300 w-full items-center text-xs mt-2">
                                <span className="w-[37px] text-left">
                                    1 star
                                </span>
                                <div className="h-[5px] bg-gray-300 rounded-lg grow mx-2">&nbsp;</div>
                                <span className="w-[5%]">
                                    
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-auto">
                        <div className="flex md:flex-col justify-between h-full items-end mt-3 md:mt-0">
                            <Button 
                                className='shadow-md hover:shadow-lg group inline-flex items-center justify-center text-md rounded-[30px] bg-brandRed text-white py-2 px-6 transition-all hover:bg-brandLightRed hover:scale-105'
                                removeIcons={true}
                                iconpath={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <path d="M9.66017 3.57666L13.6602 7.57666L4.97267 16.2642L1.41017 16.6392C0.941421 16.7017 0.535171 16.2954 0.597671 15.8267L0.972671 12.2642L9.66017 3.57666ZM16.1289 2.98291C16.7227 3.54541 16.7227 4.51416 16.1289 5.10791L14.3789 6.85791L10.3789 2.85791L12.1289 1.10791C12.7227 0.51416 13.6914 0.51416 14.2539 1.10791L16.1289 2.98291Z" fill="white"/>
                                    </svg>
                                }
                                onClick={addProductToCart}>
                                    Write a review
                            </Button>
                            <img src="/authentic-reviews-logo.svg" alt="Authentic Reviews Logo" width="70px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetails