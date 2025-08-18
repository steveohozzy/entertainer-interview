import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import { useNavigate } from 'react-router-dom';

const ByTypeCarousel = ({setShowSearchBox}) => {
  const navigate = useNavigate();

  return (
    <div className='md:mt-4'>
      <div className="text-lg text-textBlue font-bold mb-2">
        By Type
      </div>
        <Swiper
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          autoplay={true}
          loop
          slidesPerView={3.8}
          spaceBetween={8}
          breakpoints={{
          768: {
            slidesPerView: 4.8,
          },
        }}
        >
          <SwiperSlide>
            <div className="flex flex-col py-1 text-center border-[3px] border-brandBlue rounded-lg items-center cursor-pointer" onClick={() => {navigate('/category'); setShowSearchBox(false);}}>
              <div className="aspect-square max-w-[60%] md:max-w-[60%] mb-1 mx-auto">
                <img src="/action-toys.jfif" alt="Action Toys" title="Action Toys" />
              </div>
              <div className="text-textBlue font-bold text-[8px] md:text-sm">
                Action Toys
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col py-1 py-1 text-center border-[3px] border-brandBlue rounded-lg items-center cursor-pointer" onClick={() => {navigate('/category'); setShowSearchBox(false);}}>
              <div className="aspect-square max-w-[60%] md:max-w-[60%] mb-1 mx-auto">
                <img className="" src="/construction-toys.jfif" alt="Action Toys" title="Action Toys" />
              </div>
              <div className="text-textBlue font-bold text-[8px] md:text-sm">
                Construction Toys
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col py-1 py-1 text-center border-[3px] border-brandBlue rounded-lg items-center cursor-pointer" onClick={() => {navigate('/category'); setShowSearchBox(false);}}>
              <div className="aspect-square max-w-[60%] md:max-w-[60%] mb-1 mx-auto">
                <img className="" src="/preschool-toys.jfif" alt="Action Toys" title="Action Toys" />
              </div>
              <div className="text-textBlue font-bold text-[8px] md:text-sm">
                Pre-School Toys
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col py-1 py-1 text-center border-[3px] border-brandBlue rounded-lg items-center cursor-pointer" onClick={() => {navigate('/category'); setShowSearchBox(false);}}>
              <div className="aspect-square max-w-[60%] md:max-w-[60%] mb-1 mx-auto">
                <img className="" src="/arts-and-crafts-toys.jpg" alt="Action Toys" title="Action Toys" />
              </div>
              <div className="text-textBlue font-bold text-[8px] md:text-sm">
                Arts & Crafts
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col py-1 py-1 text-center border-[3px] border-brandBlue rounded-lg items-center cursor-pointer" onClick={() => {navigate('/category'); setShowSearchBox(false);}}>
              <div className="aspect-square max-w-[60%] md:max-w-[60%] mb-1 mx-auto">
                <img className="" src="/games-and-puzzles-toys.jpg" alt="Action Toys" title="Action Toys" />
              </div>
              <div className="text-textBlue font-bold text-[8px] md:text-sm">
                Games & Puzzles
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col py-1 py-1 text-center border-[3px] border-brandBlue rounded-lg items-center cursor-pointer" onClick={() => {navigate('/category'); setShowSearchBox(false);}}>
              <div className="aspect-square max-w-[60%] md:max-w-[60%] mb-1 mx-auto">
                <img className="" src="/electronic-toys.jpg" alt="Action Toys" title="Action Toys" />
              </div>
              <div className="text-textBlue font-bold text-[8px] md:text-sm">
                Electronic Toys
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col py-1 py-1 text-center border-[3px] border-brandBlue rounded-lg items-center cursor-pointer" onClick={() => {navigate('/category'); setShowSearchBox(false);}}>
              <div className="aspect-square max-w-[60%] md:max-w-[60%] mb-1 mx-auto">
                <img className="" src="/dolls.jfif" alt="Action Toys" title="Action Toys" />
              </div>
              <div className="text-textBlue font-bold text-[8px] md:text-sm">
                Dolls
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col py-1 py-1 text-center border-[3px] border-brandBlue rounded-lg items-center cursor-pointer" onClick={() => {navigate('/category'); setShowSearchBox(false);}}>
              <div className="aspect-square max-w-[60%] md:max-w-[60%] mb-1 mx-auto">
                <img className="" src="/outdoor-toys.jfif" alt="Action Toys" title="Action Toys" />
              </div>
              <div className="text-textBlue font-bold text-[8px] md:text-sm">
                Outdoor Toys
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col py-1 py-1 text-center border-[3px] border-brandBlue rounded-lg items-center cursor-pointer" onClick={() => {navigate('/category'); setShowSearchBox(false);}}>
              <div className="aspect-square max-w-[60%] md:max-w-[60%] mb-1 mx-auto">
                <img className="" src="/dress-up.png" alt="Action Toys" title="Action Toys" />
              </div>
              <div className="text-textBlue font-bold text-[8px] md:text-sm">
                Dress Up
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col py-1 py-1 text-center border-[3px] border-brandBlue rounded-lg items-center cursor-pointer" onClick={() => {navigate('/category'); setShowSearchBox(false);}}>
              <div className="aspect-square max-w-[60%] md:max-w-[60%] mb-1 mx-auto">
                <img className="" src="/educational-toys.jfif" alt="Action Toys" title="Action Toys" />
              </div>
              <div className="text-textBlue font-bold text-[8px] md:text-sm">
                Educational Toys
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ByTypeCarousel