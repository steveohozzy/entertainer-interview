import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";
import HeadingRibbon from "../headingRibbon/headingRibbon";
import Button from "../button/Button";

import { products } from "../../data/products";

const HomeTopPicks = () => {
  const navigate = useNavigate();

  return (
    <div id="top-picks" className='w-full text-center mt-5 py-3'>
            <HeadingRibbon fullWidth={true}>
                Top Picks
            </HeadingRibbon>
            <div className='pt-5 rounded-xl'>
                <div className='flex gap-4 justify-center mx-auto'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1.5}
                    autoplay={true}
                    breakpoints={{
                      768: {
                        slidesPerView: 2.5,
                      },
                      1024: {
                        slidesPerView: 3.5,
                      },
                    }}
                    loop
                    >
                {products.slice(0, 6).map((product) => (
                    <SwiperSlide>
                    <div  onClick={() => { navigate(`/product-details/${product.id}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}} className="cursor-pointer flex flex-wrap bg-white shadow-lg mb-5 rounded-lg h-full">
                        <div className="border-[3px] border-brandBlue rounded-lg w-1/2 py-1">
                            <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                            />
                        </div>
                        <div className="w-1/2 flex flex-col justify-between items-center py-1 md:py-3 px-2">
                            <div className="text-xs lg:text-sm xl:text-base text-brandBlue font-bold leading-[1.2] xl:leading-[1.1] line-clamp-2 mb-2 md:mb-0">{product.name}</div>
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
                                    className='shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-xs lg:text-sm rounded-[30px] bg-brandGreen text-white py-2 px-2 lg:px-4 lg:pl-0 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-2 min-h-[44px]'
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
  );
};

export default HomeTopPicks;
