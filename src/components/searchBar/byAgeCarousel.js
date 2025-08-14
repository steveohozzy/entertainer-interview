import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import { useNavigate } from 'react-router-dom';

const ByAgeCarousel = ({setShowSearchBox}) => {
  const navigate = useNavigate();

  return (
    <div className="mt-2">
      <div className="text-lg text-textBlue font-bold mb-2">
        By Age
      </div>
        <Swiper
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          autoplay={true}
          slidesPerView={3.5}
          spaceBetween={10}
          breakpoints={{
          768: {
            slidesPerView: 7,
          },
        }}
        >
          <SwiperSlide>
            <button className="transition-all flex flex-col rounded-full items-center scale-90 justify-center bg-yellow-600 w-[95px] h-[95px] shadow-sm hover:shadow-md hover:rotate-[20deg] hover:scale-100 text-white font-bold text-shadow-sm" onClick={() => {navigate('/category'); setShowSearchBox(false);}}>
              <div className="text-3xl text-shadow-sm leading-[1]">
                0-3
              </div>
              <div className="text-xl text-shadow-sm leading-[1]">
                years
              </div>
            </button>
        </SwiperSlide>
        <SwiperSlide>
            <button className="transition-all flex flex-col rounded-full items-center scale-90 justify-center bg-brandRed w-[95px] h-[95px] shadow-sm hover:shadow-md hover:rotate-[20deg] hover:scale-100 text-white font-bold text-shadow-sm" onClick={() => {navigate('/category'); setShowSearchBox(false);}}>
              <div className="text-3xl text-shadow-sm leading-[1]">
                3-5
              </div>
              <div className="text-xl text-shadow-sm leading-[1]">
                years
              </div>
            </button>
        </SwiperSlide>
        <SwiperSlide>
            <button className="transition-all flex flex-col rounded-full items-center scale-90 justify-center bg-purple-700 w-[95px] h-[95px] shadow-sm hover:shadow-md hover:rotate-[20deg] hover:scale-100 text-white font-bold text-shadow-sm" onClick={() => {navigate('/category'); setShowSearchBox(false);}}>
              <div className="text-3xl text-shadow-sm leading-[1]">
                5-8
              </div>
              <div className="text-xl text-shadow-sm leading-[1]">
                years
              </div>
            </button>
        </SwiperSlide>
        <SwiperSlide>
            <button className="transition-all flex flex-col rounded-full items-center scale-90 justify-center bg-cyan-500 w-[95px] h-[95px] shadow-sm hover:shadow-md hover:rotate-[20deg] hover:scale-100 text-white font-bold text-shadow-sm" onClick={() => {navigate('/category'); setShowSearchBox(false);}}>
              <div className="text-3xl text-shadow-sm leading-[1]">
                8-11
              </div>
              <div className="text-xl text-shadow-sm leading-[1]">
                years
              </div>
            </button>
        </SwiperSlide>
        <SwiperSlide>
            <button className="transition-all flex flex-col rounded-full items-center scale-90 justify-center bg-green-500 w-[95px] h-[95px] shadow-sm hover:shadow-md hover:rotate-[20deg] hover:scale-100 text-white font-bold text-shadow-sm" onClick={() => {navigate('/category'); setShowSearchBox(false);}}>
              <div className="text-3xl text-shadow-sm leading-[1]">
                11+
              </div>
              <div className="text-xl text-shadow-sm leading-[1]">
                years
              </div>
            </button>
        </SwiperSlide>
        <SwiperSlide>
            <button className="transition-all flex flex-col rounded-full items-center scale-90 justify-center bg-green-900 w-[95px] h-[95px] shadow-sm hover:shadow-md hover:rotate-[20deg] hover:scale-100 text-white font-bold text-shadow-sm" onClick={() => {navigate('/category'); setShowSearchBox(false);}}>
              <div className="text-3xl text-shadow-sm leading-[1]">
                Big
              </div>
              <div className="text-xl text-shadow-sm leading-[1]">
                Kids
              </div>
            </button>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ByAgeCarousel