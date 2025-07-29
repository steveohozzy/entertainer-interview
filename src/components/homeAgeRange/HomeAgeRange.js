import { useNavigate } from "react-router-dom";

const HomeAgeRange = () => {
  const navigate = useNavigate();

  const goToLinkHandler = () => {
      navigate("/category");
      window.scrollTo({top: 0,left: 0,behavior: "smooth",});
  };

  return (
    <div id="age" className="flex gap-2 lg:gap-7 mb-6">
      <button onClick={goToLinkHandler} className="transition-all lg:scale-95 rounded-full w-full aspect-square flex flex-col justify-center items-center bg-yellow-500 shadow-lg font-bold group hover:shadow-xl hover:scale-100 hover:rotate-[20deg] text-shadow-lg">
        <span className="text-sm md:text-2xl lg:text-5xl text-white !leading-[1.2] md:!leading-[1]">0-3</span>
        <span className="text-xs md:text-lg lg:text-3xl text-white leading-[1]">Years</span>
      </button>
      <button onClick={goToLinkHandler} className="transition-all lg:scale-95 rounded-full w-full aspect-square flex flex-col justify-center items-center bg-red-500 shadow-lg font-bold group hover:shadow-xl hover:scale-100 hover:rotate-[20deg] text-shadow-lg">
        <span className="text-sm md:text-2xl lg:text-5xl text-white !leading-[1.2] md:!leading-[1]">3-5</span>
        <span className="text-xs md:text-lg lg:text-3xl text-white leading-[1]">Years</span>
      </button>
      <button onClick={goToLinkHandler} className="transition-all lg:scale-95 rounded-full w-full aspect-square flex flex-col justify-center items-center bg-purple-600 shadow-lg font-bold group hover:shadow-xl hover:scale-100 hover:rotate-[20deg] text-shadow-lg">
        <span className="text-sm md:text-2xl lg:text-5xl text-white !leading-[1.2] md:!leading-[1]">5-8</span>
        <span className="text-xs md:text-lg lg:text-3xl text-white leading-[1]">Years</span>
      </button>
      <button onClick={goToLinkHandler} className="transition-all lg:scale-95 rounded-full w-full aspect-square flex flex-col justify-center items-center bg-cyan-500 shadow-lg font-bold group hover:shadow-xl hover:scale-100 hover:rotate-[20deg] text-shadow-lg">
        <span className="text-sm md:text-2xl lg:text-5xl text-white !leading-[1.2] md:!leading-[1]">8-11</span>
        <span className="text-xs md:text-lg lg:text-3xl text-white leading-[1]">Years</span>
      </button>
      <button onClick={goToLinkHandler} className="transition-all lg:scale-95 rounded-full w-full aspect-square flex flex-col justify-center items-center bg-green-400 shadow-lg font-bold group hover:shadow-xl hover:scale-100 hover:rotate-[20deg] text-shadow-lg">
        <span className="text-sm md:text-2xl lg:text-5xl text-white !leading-[1.2] md:!leading-[1]">11+</span>
        <span className="text-xs md:text-lg lg:text-3xl text-white leading-[1]">Years</span>
      </button>
      <button onClick={goToLinkHandler} className="transition-all lg:scale-95 rounded-full w-full aspect-square flex flex-col justify-center items-center bg-green-700 shadow-lg font-bold group hover:shadow-xl hover:scale-100 hover:rotate-[20deg] text-shadow-lg">
        <span className="text-sm md:text-2xl lg:text-5xl text-white !leading-[1.2] md:!leading-[1]">Big</span>
        <span className="text-xs md:text-lg lg:text-3xl text-white leading-[1]">Kids</span>
      </button>
    </div>
  )
}

export default HomeAgeRange