import { useState, useEffect, useRef } from "react";
import ByTypeCarousel from "./byTypeCarousel";
import ByAgeCarousel from "./byAgeCarousel";
import TopSellersCarousel from "./topSellersCarousel";
import { useNavigate } from "react-router-dom";

export const brands = [
  { name: "Marvel"},
  { name: "DC Comics"},
  { name: "Star Wars"},
  { name: "TMNT"},
  { name: "Transformers"},
  { name: "Monster Verse"},
  { name: "The Simpsons"},
  { name: "Collectible Figures"},
  { name: "Pokemon"},
  { name: "Dragon Ball Z"},
  { name: "Naruto"},
  { name: "One Piece"},
]

const SearchBar = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [startedSearch, setStartedSearch] = useState(false);
  const wrapperRef = useRef(null);
  const searchInput = useRef(null);

  const navigate = useNavigate();

  const handleFocus = () => {
    setShowSearchBox(true);
    document.body.classList.add('body-noscroll');
  }


  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowSearchBox(false)
          document.body.classList.remove('body-noscroll');
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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim().length === 0) {
      return
    }
    navigate('/search/'+searchQuery.trim());
    setShowSearchBox(false);
    document.body.classList.remove('body-noscroll');
    searchInput.current.blur();
  }

  const handleSelectSearch = (e) => {
    e.preventDefault();
    navigate('/search/'+e.target.textContent.toLowerCase());
    setShowSearchBox(false);
    document.body.classList.remove('body-noscroll');
    searchInput.current.blur();
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery.trim().length);
    if (searchQuery.trim().length-1 > 0) {
      setStartedSearch(true);
    } else {
      setStartedSearch(false);
    }
  }

  const filteredBrands = brands.filter((brand) => {
      return (
        brand.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    );

  return (
    <div ref={wrapperRef} className="search bg-brandLightBlue pt-5 z-index-2 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <form id="search-form" className="relative" onSubmit={handleSearch}>
              <input ref={searchInput} onFocus={handleFocus} onChange={handleChange} name="search" type="search" placeholder="I'm looking for..." className="relative z-20 outline-0 h-[40px] px-3 rounded-3xl w-full border border-[3px] border-brandBlue font-bold text-textBlue placeholder:text-textBlue" />
              <button onClick={handleSearch} className="shadow-md z-20 group text-white font-bold bg-brandRed rounded-full h-[40px] w-[54px] absolute right-0 top-0 transition-all hover:bg-brandGreen hover:scale-105">
                  <span className="block transition-all group-hover:rotate-[20deg]">
                      <span className="inline-block rotate-[-10deg] text-lg">G</span>
                      <span className="inline-block translate-y-[-2px] rotate-[-10deg] text-sm ml-[1.2px]">O</span>
                      <span className="inline-block translate-y-[-2px] rotate-[5deg] text-[10px] ml-[2px]">!</span>
                  </span>
              </button>
          </form>

            <div className={`absolute z-10 top-2 left-0 w-full px-4 sm:px-6 lg:px-8 opacity-0 h-0 transition-all overflow-hidden max-h-[calc(100vh-200px)] overflow-y-auto no-scrollbar ${showSearchBox && 'opacity-100 h-auto'}`}>
              <div className="w-full bg-white rounded-lg p-4 pt-11 pb-3 text-brandBlue border-b-[3px] border-red-500 shadow-md mb-4">
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col w-full md:w-2/3 max-w-[400px]">
                  {startedSearch ? (
                    <>
                      <div className="text-lg font-bold text-textBlue">
                        Do You Mean?
                      </div>
                      <div className="flex flex-col space-y-1 mt-2">
                        {filteredBrands.map((brand) => {
                          return (
                            <button onClick={handleSelectSearch} id={brand.name} key={brand.name} className="text textBlue text-sm md:text-base flex items-center justify-between">
                              <span className="flex items-center">
                                <span className="w-4 md:w-5 h-4 md:h-5 mr-1 block">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <g id="Interface / External_Link">
                                    <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                  </svg>
                                </span>
                                <span>{brand.name}</span>
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-lg font-bold text-textBlue">
                        Top Searches
                      </div>
                      <div className="flex flex-col space-y-1 mt-2">
                        <button className="text textBlue text-sm md:text-base flex items-center justify-between">
                          <span className="flex items-center">
                            <span className="w-4 md:w-5 h-4 md:h-5 mr-1 block">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <g id="Interface / External_Link">
                                <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                              </svg>
                            </span>
                            <span>LEGO</span>
                          </span>
                        </button>
                        <button className="text textBlue text-sm md:text-base flex items-center justify-between">
                          <span className="flex items-center">
                            <span className="w-4 md:w-5 h-4 md:h-5 mr-1 block">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <g id="Interface / External_Link">
                                <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                              </svg>
                            </span>
                            <span>Squishmallows 7 inch</span>
                          </span>
                          <span className="rounded-lg bg-brandRed px-2 text-white text-[10px] md:text-sm ml-2">
                            <span className="font-bold">10% off</span> code - SQUISH10
                          </span>
                        </button>
                        <button className="text textBlue text-sm md:text-base flex items-center justify-between">
                          <span className="flex items-center">
                            <span className="w-4 md:w-5 h-4 md:h-5 mr-1 block">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <g id="Interface / External_Link">
                                <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                              </svg>
                            </span>
                            <span>Barbie Dreamhouse set</span>
                          </span>
                          <span className="rounded-lg bg-orange-400 px-2 text-white text-[10px] md:text-sm ml-2">
                            <span className="font-bold">HOT TOY</span> code - Trending
                          </span>
                        </button>
                      </div>
                    </>
                  )}
                  </div>
                  <div className="hidden md:block w-1/4">
                    <div className="flex gap-4 pl-4">
                      <div className="w-full lg:w-1/2">
                        <img src="/promo.jpg" alt="New Toys" title="New Toys" />
                      </div>
                      <div className="w-1/2 hidden lg:block">
                        <img src="/promo2.jpg" alt="New Toys" title="New Toys" />
                      </div>
                    </div>
                  </div>
                </div>
                <ByTypeCarousel />
                <ByAgeCarousel />
                <TopSellersCarousel />
              </div>
            </div>
      </div>
  </div>
  )
}

export default SearchBar