"use client";

import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { X, Search } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

import {
  products,
  brands,
  ageGroups,
  features,
  sizes,
  types,
} from "../../data/products";

import ProductCard from "../../components/productCard/productCard";
import Dropdown from "../../components/dropdown/Dropdown";
import { useLocation, useNavigate } from "react-router-dom";
import PresentFinderWidget from "../../components/presentFinderWidget/PresentFinderWidget";
import Button from "../../components/button/Button";
import BundlesProductCard from "../../components/bundlesProductCard/BundlesProductCard";
import { setIsCartOpen } from "../../store/cart/cartReducer";

const Plp = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedAgeGroups, setSelectedAgeGroups] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [brandSearch, setBrandSearch] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sortOption, setSortOption] = useState("sortby")
  const [currentPage, setCurrentPage] = useState(1);
  const [directFilterApplied, setDirectFilterApplied] = useState(false)
  const PRODUCTS_PER_PAGE = 10;
  const [bundleItemsCount, setBundleItemsCount] = useState(3);
  const [tabOpen, setTabOpen] = useState(false);
  const dispatch = useDispatch();

    const searchResults = products.filter((product) => {
    return (
      product.brand.includes('Marvel')
    )
  })

  const [bundleTotalPrice, setBundleTotalPrice] = useState('£53')

  const changeBundleHandler = (e) => {
    const bundlePrices = [];
    const bundleItem = e.target.closest(".bundleContainer");
    const bundleItems = e.target.closest("#bundle").querySelectorAll("input:checked");
    bundleItems.forEach((item) => {
      bundlePrices.push(item.closest(".flex.items-center.relative").querySelector(".pricevalue").textContent);
    })

    setBundleItemsCount(bundleItems.length);

    const result  = bundlePrices.map((x) => +x);

    const bundleTotalPriceInit = result.reduce((a, b) => a + b,  0);

    setBundleTotalPrice('£'+bundleTotalPriceInit.toFixed(2));

    bundleItem.classList.toggle('grayscale');
    bundleItem.classList.toggle('opacity-50');
  }

  const changeBundleHandlerClick = (e) => {
    e.target.closest(".bundleContainer").querySelector("input").checked = ! e.target.closest(".bundleContainer").querySelector("input").checked;
    const bundlePrices = [];
    const bundleItem = e.target.closest(".bundleContainer");
    const bundleItems = e.target.closest("#bundle").querySelectorAll("input:checked");
    bundleItems.forEach((item) => {
      bundlePrices.push(item.closest(".flex.items-center.relative").querySelector(".pricevalue").textContent);
    })

    setBundleItemsCount(bundleItems.length);

    const result  = bundlePrices.map((x) => +x);

    const bundleTotalPriceInit = result.reduce((a, b) => a + b,  0);

    setBundleTotalPrice('£'+bundleTotalPriceInit.toFixed(2));

    bundleItem.classList.toggle('grayscale');
    bundleItem.classList.toggle('opacity-50');
  }

  const addBundleToCart = (e) => {
      const bundleItems = e.target.closest("#bundle").querySelectorAll("input");
      bundleItems.forEach((item) => {
        if (item.checked) {
          item
            .closest(".flex.items-center.relative")
            .querySelector(".add-to-basket")
            .click();
        }
      });
      setTimeout(() => {
        dispatch(setIsCartOpen(true));
        setTabOpen(false);
        document.body.classList.add("body-noscroll");
        window.scrollBy(0, -2);
      }, 100);
      };
  const wrapperRef = useRef(null);

  const navigate = useNavigate();

  // Handle scroll for header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setShowHeader(false);
        const filtersBar = document.getElementById("filters-bar");

        if (filtersBar) {
            filtersBar.style.top = "0px";
        }
      } else {
        // Scrolling up or at top
        setShowHeader(true);
        const headerHeight = document.getElementById("site-header").offsetHeight;
        const filtersBar = document.getElementById("filters-bar");

        if (filtersBar) {
            filtersBar.style.top = headerHeight+"px";
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  

   useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(1)
  }, [selectedBrands, selectedAgeGroups, selectedFeatures, selectedSizes, selectedTypes, priceRange, showInStockOnly])

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowFilters(false)
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

  const toggleBrand = (brandName) => {
    setSelectedBrands((prev) =>
      prev.includes(brandName)
        ? prev.filter((b) => b !== brandName)
        : [...prev, brandName]
    );
  };

  const toggleAgeGroup = (ageGroup) => {
    setSelectedAgeGroups((prev) =>
      prev.includes(ageGroup)
        ? prev.filter((a) => a !== ageGroup)
        : [...prev, ageGroup]
    );
  };

  const toggleFeature = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedAgeGroups([]);
    setSelectedFeatures([]);
    setSelectedSizes([]);
    setSelectedTypes([]);
    setPriceRange([0, 100]);
    setShowInStockOnly(false);
    setBrandSearch("");
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => Math.min(prev + 10, filteredProducts.length));
  };

  // Filter brands based on search typing
  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(brandSearch.toLowerCase())
  );

  const filteredProducts = products.filter((product) => {
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesAgeGroup =
      selectedAgeGroups.length === 0 ||
      selectedAgeGroups.includes(product.ageGroup);
    const matchesFeatures =
      selectedFeatures.length === 0 ||
      selectedFeatures.some((feature) => product.features.includes(feature));
    const matchesSize =
      selectedSizes.length === 0 || selectedSizes.includes(product.size);
    const matchesType =
      selectedTypes.length === 0 || selectedTypes.includes(product.type);
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesStock = !showInStockOnly || product.inStock;

    return (
      matchesBrand &&
      matchesAgeGroup &&
      matchesFeatures &&
      matchesSize &&
      matchesType &&
      matchesPrice &&
      matchesStock
    );
  });

  const hasActiveFilters =
    selectedBrands.length > 0 ||
    selectedAgeGroups.length > 0 ||
    selectedFeatures.length > 0 ||
    selectedSizes.length > 0 ||
    selectedTypes.length > 0 ||
    showInStockOnly;

  const goToPage = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const renderPaginationButtons = () => {
    const buttons = []
    const maxVisiblePages = 5

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    // Previous button
    buttons.push(
      <button
        key="prev"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1"
      >
        <img src="/flag.svg" alt="previous page" className="h-[60px] w-auto mt-[25px] mr-2 relative z-[2]" />
      </button>,
    )

    // First page
    if (startPage > 1) {
      if (startPage > 2) {
        buttons.push(
          <span key="ellipsis2" className="px-2 text-brandBlue text-2xl font-bold">
            ...
          </span>,
        )
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button className={`relative px-[2px] md:px-[5px] md:px-[10px] text-white ${currentPage === i ? 'font-bold' : ''}`} key={i} onClick={() => goToPage(i)}>
          {i === endPage ?
            <img src="/train-front.svg" alt="pagination-step" className={`h-[60px] w-auto ${currentPage === startPage ? 'mt-[-25px]' : 'mt-[-23px]'} relative z-[2]`} />
            :
            <img src="/train-cart.svg" alt="pagination-step" className="h-10 w-10 z-[2]" />
          }
          <span className={`absolute z-[2] ${currentPage === i ? '' : 'opacity-[0.6]'} ${i === endPage ? 'left-[28px] md:left-[30px] top-[3px]' : 'left-[16px] md:left-[21px] top-[7px]'}`}>{i}</span>
          <span className={`h-[3px] left-0 z-[1] absolute block bg-brandBlue bottom-[16px] ${i === endPage ? 'w-[calc(100%-15px)] bottom-[14px]' : 'w-full'}`}>&nbsp;</span>
        </button>,
      )
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="ellipsis2" className="px-2 text-brandBlue text-2xl font-bold">
            ...
          </span>,
        )
      }
      // buttons.push(
      //   <button
      //     key={totalPages}
      //     onClick={() => goToPage(totalPages)}
      //   >
      //     {totalPages}
      //   </button>,
      // )
    }

    // Next button
    buttons.push(
      <button
        key="next"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 relative ml-2"
      >
        <img src="/flag.svg" alt="previous page" className="h-[60px] scale-x-[-1] w-auto mt-[25px] relative z-[2]" />
      </button>,
    )

    return buttons
  }

  const location = useLocation();

  // Calculate dynamic counts for each filter option
  const getBrandCount = (brandName) => {
    return products.filter((product) => {
      const matchesBrand = product.brand === brandName
      const matchesAgeGroup = selectedAgeGroups.length === 0 || selectedAgeGroups.includes(product.ageGroup)
      const matchesFeatures =
        selectedFeatures.length === 0 || selectedFeatures.some((feature) => product.features.includes(feature))
      const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(product.size)
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(product.type)
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      const matchesStock = !showInStockOnly || product.inStock

      return (
        matchesBrand &&
        matchesAgeGroup &&
        matchesFeatures &&
        matchesSize &&
        matchesType &&
        matchesPrice &&
        matchesStock 
      )
    }).length
  }

  const getAgeGroupCount = (ageGroup) => {
    return products.filter((product) => {
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
      const matchesAgeGroup = product.ageGroup === ageGroup
      const matchesFeatures =
        selectedFeatures.length === 0 || selectedFeatures.some((feature) => product.features.includes(feature))
      const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(product.size)
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(product.type)
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      const matchesStock = !showInStockOnly || product.inStock

      return (
        matchesBrand &&
        matchesAgeGroup &&
        matchesFeatures &&
        matchesSize &&
        matchesType &&
        matchesPrice &&
        matchesStock 
      )
    }).length
  }

  const getFeatureCount = (featureName) => {
    return products.filter((product) => {
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
      const matchesAgeGroup = selectedAgeGroups.length === 0 || selectedAgeGroups.includes(product.ageGroup)
      const matchesFeatures = product.features.includes(featureName)
      const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(product.size)
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(product.type)
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      const matchesStock = !showInStockOnly || product.inStock

      return (
        matchesBrand &&
        matchesAgeGroup &&
        matchesFeatures &&
        matchesSize &&
        matchesPrice &&
        matchesType &&
        matchesStock 
      )
    }).length
  }

  const getSizeCount = (sizeName) => {
    return products.filter((product) => {
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
      const matchesAgeGroup = selectedAgeGroups.length === 0 || selectedAgeGroups.includes(product.ageGroup)
      const matchesFeatures =
        selectedFeatures.length === 0 || selectedFeatures.some((feature) => product.features.includes(feature))
      const matchesSize = product.size === sizeName
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(product.type)
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      const matchesStock = !showInStockOnly || product.inStock

      return (
        matchesBrand &&
        matchesAgeGroup &&
        matchesFeatures &&
        matchesSize &&
        matchesType &&
        matchesPrice &&
        matchesStock 
      )
    }).length
  }

  const getTypeCount = (typeName) => {
    return products.filter((product) => {
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
      const matchesAgeGroup = selectedAgeGroups.length === 0 || selectedAgeGroups.includes(product.ageGroup)
      const matchesFeatures =
        selectedFeatures.length === 0 || selectedFeatures.some((feature) => product.features.includes(feature))
      const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(product.size)
      const matchesType = product.type === typeName
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      const matchesStock = !showInStockOnly || product.inStock

      return (
        matchesBrand &&
        matchesAgeGroup &&
        matchesFeatures &&
        matchesSize &&
        matchesType &&
        matchesPrice &&
        matchesStock 
      )
    }).length
  }

  const sortProducts = (products, option) => {
    const sortedProducts = [...products]

    switch (option) {
      case "price-low":
        return sortedProducts.sort((a, b) => a.price - b.price)
      case "price-high":
        return sortedProducts.sort((a, b) => b.price - a.price)
      case "rating":
        return sortedProducts.sort((a, b) => b.rating - a.rating)
      case "newest":
        // Assuming newer products have higher IDs or using isNew flag
        return sortedProducts.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1
          if (!a.isNew && b.isNew) return 1
          return b.id - a.id
        })
      case "relevance":
         // For relevance, prioritize bestsellers and new items
        return sortedProducts.sort((a, b) => {
          if (a.isBestseller && !b.isBestseller) return -1
          if (!a.isBestseller && b.isBestseller) return 1
          if (a.isNew && !b.isNew) return -1
          if (!a.isNew && b.isNew) return 1
          return 0
        })
      default:
        return sortedProducts;
    }
  }

  // Apply sorting to filtered products
  const sortedFilteredProducts = sortProducts(filteredProducts, sortOption)

  const totalPages = Math.ceil(sortedFilteredProducts.length / PRODUCTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const endIndex = startIndex + PRODUCTS_PER_PAGE
  const currentProducts = sortedFilteredProducts.slice(startIndex, endIndex)

  // Get the visible subset of filtered products
  const visibleFilteredProducts = sortedFilteredProducts.slice(0, visibleProducts);

  useEffect(() => {
    // Check for URL parameters to apply filters directly
    const urlParams = new URLSearchParams(window.location.search)
    const ageFilter = urlParams.get("age")

    if (ageFilter === "3-5" && !directFilterApplied) {
      setSelectedAgeGroups(["3-5 years"])
      setDirectFilterApplied(true)
    } else if (ageFilter === "0-3" && !directFilterApplied) {
      setSelectedAgeGroups(["0-3 years"])
      setDirectFilterApplied(true)
    } else if (ageFilter === "5-8" && !directFilterApplied) {
      setSelectedAgeGroups(["5-8 years"])
      setDirectFilterApplied(true)
    } else if (ageFilter === "8-11" && !directFilterApplied) {
      setSelectedAgeGroups(["8-11 years"])
      setDirectFilterApplied(true)
    } else if (ageFilter === "11-plus" && !directFilterApplied) {
      setSelectedAgeGroups(["11+ years"])
      setDirectFilterApplied(true)
    } else if (ageFilter === "big-kids" && !directFilterApplied) {
      setSelectedAgeGroups(["Big Kids"])
      setDirectFilterApplied(true)
    }
  }, [directFilterApplied])

  useEffect(() => {
    // Check for URL parameters to apply filters directly
    const urlParams = new URLSearchParams(window.location.search)
    const brandFilter = urlParams.get("brand")

    if (brandFilter === "lego" && !directFilterApplied) {
      setSelectedBrands(["Lego"])
      setDirectFilterApplied(true)
    } else if (brandFilter === "marvel" && !directFilterApplied) {
      setSelectedBrands(["Marvel"])
      setDirectFilterApplied(true)
    }
  }, [directFilterApplied])

  useEffect(() => {
    // Check for URL parameters to apply filters directly
    const urlParams = new URLSearchParams(window.location.search)
    const typeFilter = urlParams.get("type")

    if (typeFilter === "action-figures" && !directFilterApplied) {
      setSelectedTypes(["Action Figures"])
      setDirectFilterApplied(true)
    } else if (typeFilter === "pre-school-toys" && !directFilterApplied) {
      setSelectedTypes(["Pre-school Toys"])
      setDirectFilterApplied(true)
    } else if (typeFilter === "arts-and-crafts" && !directFilterApplied) {
      setSelectedTypes(["Arts and Crafts"])
      setDirectFilterApplied(true)
    } else if (typeFilter === "games-and-puzzles" && !directFilterApplied) {
      setSelectedTypes(["Games and Puzzles"])
      setDirectFilterApplied(true)
    }
  }, [directFilterApplied])

  useEffect(() => {
    // Check for URL parameters to apply filters directly
    const urlParams = new URLSearchParams(window.location.search)
    const priceFilter = urlParams.get("price")

    if (priceFilter === "0-15" && !directFilterApplied) {
      setPriceRange([
        priceRange[0],
        0,
      ])
      setPriceRange([
        priceRange[1],
        15,
      ])
      setDirectFilterApplied(true)
    } else if (priceFilter === "15-30" && !directFilterApplied) {
      setPriceRange([
        15,
        30,
      ])
      setDirectFilterApplied(true)
    } else if (priceFilter === "30-45" && !directFilterApplied) {
      setPriceRange([
        30,
        45,
      ]) 
      setDirectFilterApplied(true)
    } else if (priceFilter === "45-60" && !directFilterApplied) {
      setPriceRange([
        45,
        60,
      ])
      setDirectFilterApplied(true)
    } else if (priceFilter === "60-75" && !directFilterApplied) {
      setPriceRange([
        60,
        75,
      ])
      setDirectFilterApplied(true)
    } else if (priceFilter === "75" && !directFilterApplied) {
      setPriceRange([
        75,
        9999999999,
      ])
      setDirectFilterApplied(true)
    }
  }, [directFilterApplied, priceRange])
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {location.pathname === "/category/action-figures" && (
          <div className="mb-1">
            <div className="text-lg font-bold text-brandBlue textStroke mb-1">
              Top Products
            </div>
            <div className="mt-1 fade-out-right">
                <Swiper
                  modules={[Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={true}
                  loop
                  slidesPerView={2.25}
                  spaceBetween={5}
                  breakpoints={{
                  768: {
                    slidesPerView: 3.5,
                  },
                  1024: {
                    slidesPerView: 5.5,
                  },
                }}
                >
                  <SwiperSlide>
                    <div onClick={() => { navigate(`/product-details/5}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}} className="cursor-pointer rounded-xl p-1">
                      <div className="flex items-stretch shadow-md hover:shadow-lg bg-brandPinkDark rounded-xl overflow-hidden hover:scale-105 transition-all">
                        <div className="w-2/5 rounded-xl">
                          <img
                            src={"https://www.thetoyshop.com/medias/300Wx300H-572796-F9213-Primary?context=bWFzdGVyfGltYWdlc3w1NzE1MnxpbWFnZS9qcGVnfGFESTFMMmc1TlM4eE1qVXdORFE1TkRNM05EazBNaTh6TURCWGVETXdNRWhmTlRjeU56azJYMFk1TWpFelgxQnlhVzFoY25rfGJkZTVhOWU4MjllZmZjNWUyODE3NDIyNGMxM2FiMTY2ODE0OWM3MmI3ZDIzMjY3NjNlNGY2MjVhYmMyYTA1Y2I"}
                            alt="top product"
                            className="rounded-xl object-cover group-hover:scale-105 transition-all"
                          />
                        </div>
                        <div className="w-3/5 text-xs md:text-sm xl:text-base text-white rounded-tr-xl rounded-br-xl font-semibold">
                          <div className="flex items-center h-full px-2 md:px-3 leading-[1.2]">
                            Marvel Spider Man Figure
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div onClick={() => { navigate(`/product-details/5}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}} className="cursor-pointer rounded-xl p-1">
                      <div className="flex items-stretch shadow-md hover:shadow-lg bg-yellow-300 rounded-xl overflow-hidden hover:scale-105 transition-all">
                        <div className="w-2/5 rounded-xl">
                          <img
                            src={"https://www.thetoyshop.com/medias/515Wx515H-577122-577122-2.jpg?context=bWFzdGVyfGltYWdlc3w1NDczM3xpbWFnZS9qcGVnfGFEWTJMMmhtTmk4eE1qVXhOamszTnpnMk9EZ3pNQzgxTVRWWGVEVXhOVWhmTlRjM01USXlYelUzTnpFeU1pMHlMbXB3Wnd8OTNkNTYwOTBhYzk4OGEwYWI4MTAwMmViOGFjNzBhYjg3MGM5YWY0ZDU3ZTM2YmZmNWQ4MDA0NzFjZjBiNmVjNg"}
                            alt="top product"
                            className="rounded-xl object-cover group-hover:scale-105 transition-all "
                          />
                        </div>
                        <div className="w-3/5 text-xs md:text-sm text-brandBlue rounded-tr-xl rounded-br-xl font-semibold">
                          <div className="flex items-center h-full px-2 md:px-3 leading-[1.2]">
                            Pikachu 20" Pop Vinyl
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div onClick={() => { navigate(`/product-details/5}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}} className="cursor-pointer rounded-xl p-1">
                      <div className="flex items-stretch shadow-md hover:shadow-lg bg-green-600 rounded-xl overflow-hidden hover:scale-105 transition-all">
                        <div className="w-2/5 rounded-xl">
                          <img
                            src={"https://www.thetoyshop.com/medias/515Wx515H-577194-577194-2.jpg?context=bWFzdGVyfGltYWdlc3wxMDAxNzJ8aW1hZ2UvanBlZ3xhR1ppTDJobU5TOHhNalV5TXpJek1qY3lNamszTkM4MU1UVlhlRFV4TlVoZk5UYzNNVGswWHpVM056RTVOQzB5TG1wd1p3fDM2ODk2NTUwNWY3NTg1MjBmMTY5NzhjOWE4MWMyNzM0ODBjZjkwOTExNjEyYmNlZDdhOTExNGQ0Nzg4ZjEzMzU"}
                            alt="top product"
                            className="rounded-xl object-cover group-hover:scale-105 transition-all "
                          />
                        </div>
                        <div className="w-3/5 text-xs md:text-sm xl:text-base text-white rounded-tr-xl rounded-br-xl font-semibold">
                          <div className="flex items-center h-full px-2 md:px-3 leading-[1.2]">
                            Marvel Iron Man Lego
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div onClick={() => { navigate(`/product-details/5}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}} className="cursor-pointer rounded-xl p-1">
                      <div className="flex items-stretch shadow-md hover:shadow-lg bg-purple-600 rounded-xl overflow-hidden hover:scale-105 transition-all">
                        <div className="w-2/5 rounded-xl">
                          <img
                            src={"https://www.thetoyshop.com/medias/515Wx515H-572956-BAT-572956-BAT-2.jpg?context=bWFzdGVyfGltYWdlc3wyNTQ5NzR8aW1hZ2UvanBlZ3xhR0prTDJoaE9DOHhNalEyT1RNd01UTTBOak16TkM4MU1UVlhlRFV4TlVoZk5UY3lPVFUyWDBKQlZGODFOekk1TlRaZlFrRlVMVEl1YW5CbnwyNGFmNTJkNmQ1ZTY1ZDg4ZjVjMTQwZjE1M2JmNjlkNTA5NzhiOWMwOGY2OGZhM2IxNDNlNTk2ZjJlYzc5Zjgy"}
                            alt="top product"
                            className="rounded-xl object-cover group-hover:scale-105 transition-all "
                          />
                        </div>
                        <div className="w-3/5 text-xs md:text-sm xl:text-base text-white rounded-tr-xl rounded-br-xl font-semibold">
                          <div className="flex items-center h-full px-2 md:px-3 leading-[1.2]">
                            Batman Armour Force
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div onClick={() => { navigate(`/product-details/5}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}} className="cursor-pointer rounded-xl p-1">
                      <div className="flex items-stretch shadow-md hover:shadow-lg bg-blue-600 rounded-xl overflow-hidden hover:scale-105 transition-all">
                        <div className="w-2/5 rounded-xl">
                          <img
                            src={"https://www.thetoyshop.com/medias/515Wx515H-570887-570887-2-.jpg?context=bWFzdGVyfGltYWdlc3w1NTcxNnxpbWFnZS9qcGVnfGFERTFMMmcyTWk4eE1qTTFPVGt6T0RJM056UXdOaTgxTVRWWGVEVXhOVWhmTlRjd09EZzNYelUzTURnNE55MG9NaWt1YW5CbnxmMDNkOWRhYjk5NDEwNzExZGJjNzRlODNkYzU5Nzc2Mzg5ZjRkNmQ3NDljMGNhMTAzNzgzNWRmZjQ2MmJjOGEx"}
                            alt="top product"
                            className="rounded-xl object-cover group-hover:scale-105 transition-all "
                          />
                        </div>
                        <div className="w-3/5 text-xs md:text-sm xl:text-base text-white rounded-tr-lg rounded-br-xl font-semibold">
                          <div className="flex items-center h-full px-2 md:px-3 leading-[1.2]">
                            Godzilla Deluxe Figure
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div onClick={() => { navigate(`/product-details/5}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}} className="cursor-pointer rounded-xl p-1">
                      <div className="flex items-stretch shadow-md hover:shadow-lg bg-orange-600 rounded-xl overflow-hidden hover:scale-105 transition-all">
                        <div className="w-2/5 rounded-xl">
                          <img
                            src={"https://www.thetoyshop.com/medias/564995-Primary-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMTg1OTR8aW1hZ2UvanBlZ3xhVzFoWjJWekwyaGhZeTlvTURBdk1USXdOak14T1RJd05UVTRNemd1YW5CbnxkNTYwYjBlMDNjYTIyNWI0ZTNjMjg4MDI3ZDFkNDI1MjI1YTlkMGRiMWIxYTFlNGI4ZDIyNTU4OGQ5ZDkyMmEw"}
                            alt="top product"
                            className="rounded-xl object-cover group-hover:scale-105 transition-all "
                          />
                        </div>
                        <div className="w-3/5 text-xs md:text-sm xl:text-base text-white rounded-tr-xl rounded-br-xl font-semibold">
                          <div className="flex items-center h-full px-2 md:px-3 leading-[1.2]">
                            Leonardo Battle Pack
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div onClick={() => { navigate(`/product-details/5}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}} className="cursor-pointer rounded-xl p-1">
                      <div className="flex items-stretch shadow-md hover:shadow-lg bg-cyan-600 rounded-xl overflow-hidden hover:scale-105 transition-all">
                        <div className="w-2/5 rounded-xl">
                          <img
                            src={"https://www.thetoyshop.com/medias/300Wx300H-562150-OPTIMS-Primary?context=bWFzdGVyfGltYWdlc3w3MjIwMXxpbWFnZS9qcGVnfGFHUTJMMmcxWVM4eE1qTTVNVE14T1RVd01qZzNPQzh6TURCWGVETXdNRWhmTlRZeU1UVXdYMDlRVkVsTlUxOVFjbWx0WVhKNXwxODllZDQ2ZWVkNGIwMDIwOTdmZWUzODdlZmMxMmZkNzI3ZmFmYmY3MGYwN2QyZTRkMGE0NjUzZGM5YTlmYzZk"}
                            alt="top product"
                            className="rounded-xl object-cover group-hover:scale-105 transition-all "
                          />
                        </div>
                        <div className="w-3/5 text-xs md:text-sm xl:text-base text-white rounded-tr-xl rounded-br-xl font-semibold">
                          <div className="flex items-center h-full px-2 md:px-3 leading-[1.2]">
                            EarthSpark Warrior Class
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
              </Swiper>
            </div>
          </div>
        )}

        {/* Filter and Sort Header */}
        <div
          id="filters-bar"
          className={`sticky z-40 bg-gradient-to-r from-brandLightBlue via-brandVLightBlue to-brandLightBlue py-2 mb-4 transition-all  ${showHeader && ''} ml-[calc(51%-50vw)] mr-[calc(51%-50vw)] pl-[calc(50%-49vw)] pr-[calc(50%-49vw)] shadow-sm`}
        >
          <div className="flex items-center gap-3 justify-between flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-2 w-full flex-wrap">
              <form id="sort-by-form" className="bg-brandBlue text-white text-sm rounded-tl-full rounded-bl-full block h-full w-full px-3">
                <label htmlFor="sort" className="sr-only">
                  Select an option
                </label>
                <select
                  id="sort"
                  className="bg-brandBlue text-white text-sm rounded-tl-full rounded-bl-full block h-full w-full px-3 outline-0 cursor-pointer"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="Sort">Sort</option>
                  <option value="relevance">Relevance</option>
                  <option value="price-low">
                    Price (lowest first)
                  </option>
                  <option value="price-high">
                    Price (highest first)
                  </option>
                  <option value="rating">Rating</option>
                  <option value="newest">Newest</option>
                </select>
              </form>
              <div ref={wrapperRef} className={`relative z-[2] bg-white border-[3px] border-brandBlue border-b-brandBlue ${showFilters && 'border-b-white'}`}>
                <button
                  name="Show filters"
                  onClick={() => setShowFilters(!showFilters)}
                  className={`relative z-[2] inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm py-3 h-full w-full px-4 transition-all group ${showFilters ? 'bg-white text-brandBlue' : 'bg-brandBlue text-white'}`}
                >
                  <span className="transition-all group-hover:scale-110">Refine</span>
                  <span className={`w-4 h-4 ${showFilters ? 'text-brandBlue' : 'text-white'} transition-all group-hover:rotate-[20deg]`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"><path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"/></svg>
                  </span>
                </button>
                {/* Sliding Filter Panel */}
                <div ref={wrapperRef}
                  className={`absolute overflow-hidden bg-white shadow-xl z-[1] transition-all ease-in-out w-[calc(100vw-60px)] md:w-[calc(100%+40px)] left-[calc(-100%+5px)] md:left-[-20px] no-scrollbar ${
                    showFilters ? "max-h-[calc(100vh-250px)] overflow-y-auto border border-brandBlue border-[3px] rounded-bl-lg rounded-br-lg top-[calc(100%-3px)]" : "max-h-0 top-full "
                  }`}
                >
                  <div className="p-3 h-full overflow-y-auto]">
                    {hasActiveFilters && (
                      <div className="flex flex-wrap gap-2 items-start">
                        {selectedBrands.map((brand) => (
                          <div
                            key={`brand-${brand}`}
                            variant="secondary"
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1"
                          >
                            {brand}
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() => toggleBrand(brand)}
                            />
                          </div>
                        ))}
                        {selectedAgeGroups.map((age) => (
                          <div
                            key={`age-${age}`}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1"
                          >
                            {age}
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() => toggleAgeGroup(age)}
                            />
                          </div>
                        ))}
                        {selectedFeatures.map((feature) => (
                          <div
                            key={`feature-${feature}`}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1"
                          >
                            {feature}
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() => toggleFeature(feature)}
                            />
                          </div>
                        ))}
                        {selectedSizes.map((size) => (
                          <div
                            key={`size-${size}`}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1"
                          >
                            {size}
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() => toggleSize(size)}
                            />
                          </div>
                        ))}
                        {selectedTypes.map((type) => (
                          <div
                            key={`type-${type}`}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1"
                          >
                            {type}
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() => toggleType(type)}
                            />
                          </div>
                        ))}
                        {showInStockOnly && (
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1">
                            In Stock Only
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() => setShowInStockOnly(false)}
                            />
                          </div>
                        )}
                        <div className="mb-4 mt-2 w-full">
                          <button
                            name="Clear filters"
                            onClick={clearFilters}
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm bg-brandGreen hover:bg-brandLightGreen h-9 rounded-full px-3 w-full transition-all hover:scale-105 hover:shadow-md text-white"
                          >
                            Clear all filters
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Brand Filters with Search */}
                    <Dropdown
                      title="Brands"
                      className="w-full text-brandBlue flex items-center border-b-2 border-b-textBlue py-3"
                      answer={
                        <>
                          <div className="relative my-3">
                            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                              id="searchBrands"
                              placeholder="Search brands..."
                              value={brandSearch}
                              onChange={(e) => setBrandSearch(e.target.value)}
                              className="flex h-10 w-full rounded-md border-2 border-brandBlue outline-0 bg-background px-3 py-2 placeholder:text-muted-black text-brandBlue pl-8 text-sm"
                            />
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {filteredBrands.map((brand) => {
                              const count = getBrandCount(brand.name)
                              return (
                                <div
                                  key={brand.name}
                                  className={`inline-flex items-center rounded-full border-[2px] border-brandLightBlue px-2.5 py-0.5 cursor-pointer transition-all hover:scale-105 text-sm hover:bg-brandBlue hover:text-white ${
                                    selectedBrands.includes(brand.name)
                                      ? `bg-brandBlue text-white`
                                      : "hover:bg-brandBlue"
                                  }`}
                                  onClick={() => toggleBrand(brand.name)}
                                >
                                  {brand.name} ({count})
                                </div>
                              )
                            })}
                          </div>
                        </>
                      }
                    />

                    {/* Type Filters */}
                    <Dropdown
                      title="Type"
                      className="w-full text-brandBlue flex items-center border-b-2 border-b-textBlue py-3"
                      answer={
                        <div className="space-y-3 pt-3">
                        {types.map((type) => {
                          const count = getTypeCount(type.name)
                          return (
                            <label
                              key={type.name}
                              className="relative flex items-center space-x-2 cursor-pointer"
                            >
                              <input
                                id={type.name}
                                type="checkbox"
                                checked={selectedTypes.includes(type.name)}
                                onChange={() => toggleType(type.name)}
                                className="relative mt-1 block size-[20px] appearance-none rounded-md border-[3px] border-textBlue bg-white outline-none transition-all checked:bg-textBlue"
                              />
                              <span className="absolute top-[3px] left-[-8px]">
                                <svg viewBox="0 0 24 24" width="20px" height="20px" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                  <g id="SVGRepo_iconCarrier">
                                    {' '}
                                    <path
                                      d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                      stroke="#ffffff"
                                      strokeWidth="2.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>{' '}
                                  </g>
                                </svg>
                              </span>
                              <span className="text-sm text-brandBlue">
                                {type.name} ({count})
                              </span>
                            </label>
                          )
                        })}
                      </div>
                      }
                    />

                    {/* Age Group Filters */}
                    <Dropdown
                      title="Age Groups"
                      className="w-full text-brandBlue flex items-center border-b-2 border-b-textBlue py-3"
                      answer={
                        <div className="space-y-3 pt-3">
                          {ageGroups.map((age) => {
                            const count = getAgeGroupCount(age.name)
                            return (
                              <label
                                key={age.name}
                                className="relative flex items-center space-x-2 cursor-pointer"
                              >
                                <input
                                  id={age.name}
                                  type="checkbox"
                                  checked={selectedAgeGroups.includes(age.name)}
                                  onChange={() => toggleAgeGroup(age.name)}
                                  className="relative mt-1 block size-[20px] appearance-none rounded-md border-[3px] border-textBlue bg-white outline-none transition-all checked:bg-textBlue"
                                />
                                <span className="absolute top-[3px] left-[-8px]">
                                  <svg viewBox="0 0 24 24" width="20px" height="20px" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                      {' '}
                                      <path
                                        d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                        stroke="#ffffff"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>{' '}
                                    </g>
                                  </svg>
                                </span>
                                <span className="text-sm text-brandBlue">
                                  {age.name} ({count})
                                </span>
                              </label>
                            )
                          })}
                        </div>
                      }
                    />
                    {/* Features Filters */}
                    <Dropdown
                      title="Features"
                       className="w-full text-brandBlue flex items-center border-b-2 border-b-textBlue py-3"
                       answer={
                        <div className="space-y-3 pt-3">
                        {features.map((feature) => {
                          const count = getFeatureCount(feature.name)
                          return (
                            <label
                              key={feature.name}
                              className="relative flex items-center space-x-2 cursor-pointer"
                            >
                              <input
                                id={feature.name}
                                type="checkbox"
                                checked={selectedFeatures.includes(feature.name)}
                                onChange={() => toggleFeature(feature.name)}
                                className="relative mt-1 block size-[20px] appearance-none rounded-md border-[3px] border-textBlue bg-white outline-none transition-all checked:bg-textBlue"
                              />
                              <span className="absolute top-[3px] left-[-8px]">
                                <svg viewBox="0 0 24 24" width="20px" height="20px" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                  <g id="SVGRepo_iconCarrier">
                                    {' '}
                                    <path
                                      d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                      stroke="#ffffff"
                                      strokeWidth="2.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>{' '}
                                  </g>
                                </svg>
                              </span>
                              <span className="text-sm text-brandBlue">
                                {feature.name} ({count})
                              </span>
                            </label>
                          )
                       })}
                      </div>
                       }
                      />

                    {/* Size Filters */}
                    <Dropdown
                      title="Size"
                      className="w-full text-brandBlue flex items-center border-b-2 border-b-textBlue py-3"
                      answer={
                        <div className="space-y-3 pt-3">
                        {sizes.map((size) => {
                          const count = getSizeCount(size.name)
                          return (
                            <label
                              key={size.name}
                              className="relative flex items-center space-x-2 cursor-pointer"
                            >
                              <input
                                id={size.name}
                                type="checkbox"
                                checked={selectedSizes.includes(size.name)}
                                onChange={() => toggleSize(size.name)}
                                className="relative mt-1 block size-[20px] appearance-none rounded-md border-[3px] border-textBlue bg-white outline-none transition-all checked:bg-textBlue"
                              />
                              <span className="absolute top-[3px] left-[-8px]">
                                <svg viewBox="0 0 24 24" width="20px" height="20px" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                  <g id="SVGRepo_iconCarrier">
                                    {' '}
                                    <path
                                      d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                      stroke="#ffffff"
                                      strokeWidth="2.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>{' '}
                                  </g>
                                </svg>
                              </span>
                              <span className="text-sm text-brandBlue">
                                {size.name} ({count})
                              </span>
                            </label>
                          )
                        })}
                      </div>
                      }
                    />

                    {/* Price Range */}
                    <Dropdown
                      title="Price Range"
                      className="w-full text-brandBlue flex items-center border-b-2 border-b-textBlue py-3"
                      answer={
                        <div className="space-y-3">
                        <div className="flex items-center space-x-2 mt-3">
                          <input
                            id="minPrice"
                            type="number"
                            placeholder="Min"
                            value={priceRange[0]}
                            onChange={(e) =>
                              setPriceRange([
                                Number(e.target.value),
                                priceRange[1],
                              ])
                            }
                            className="flex h-10 rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-foreground text-brandBlue w-20 text-sm"
                          />
                          <span className="text-brandBlue">-</span>
                          <input
                            id="maxPrice"
                            type="number"
                            placeholder="Max"
                            value={priceRange[1]}
                            onChange={(e) =>
                              setPriceRange([
                                priceRange[0],
                                Number(e.target.value),
                              ])
                            }
                            className="flex h-10 rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-foreground text-brandBlue w-20 text-sm"
                          />
                        </div>
                        <div className="text-sm text-brandBlue">
                          £{priceRange[0]} - £{priceRange[1]}
                        </div>
                      </div>
                      }
                    />

                    {/* Additional Filters */}
                    <Dropdown
                      title="Additional Filters"
                      className="w-full text-brandBlue flex items-center border-b-2 border-b-textBlue py-3"
                      answer={
                        <div className="space-y-3">
                        <label className="relative flex items-center space-x-2 cursor-pointer mt-3">
                          <input
                            id="showInStockOnly"
                            type="checkbox"
                            checked={showInStockOnly}
                            onChange={(e) =>
                              setShowInStockOnly(e.target.checked)
                            }
                           className="relative mt-1 block size-[20px] appearance-none rounded-md border-[3px] border-textBlue bg-white outline-none transition-all checked:bg-textBlue"
                          />
                          <span className="absolute top-[3px] left-[-8px]">
                            <svg viewBox="0 0 24 24" width="20px" height="20px" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                              <g id="SVGRepo_iconCarrier">
                                {' '}
                                <path
                                  d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                  stroke="#ffffff"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>{' '}
                              </g>
                            </svg>
                          </span>
                          <span className="text-sm text-brandBlue">
                            In Stock Only
                          </span>
                        </label>
                      </div>
                      }
                    />
                  </div>
                </div>
              </div>
              <p className="flex items-center justify-center bg-brandBlue text-white text-xs rounded-tr-full rounded-br-full block h-full w-full px-3">
                 {startIndex + 1}-{Math.min(endIndex, sortedFilteredProducts.length)} of{" "}
                  {sortedFilteredProducts.length} <span className="hidden md:block ml-1">products</span>
              </p>
            </div>

            {/* Active Filters Display */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 my-2 w-full">
                <span className="text-sm text-brandBlue font-medium">
                  Active filters:
                </span>
                {selectedBrands.map((brand) => (
                  <div
                    key={`brand-${brand}`}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1"
                  >
                    {brand}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => toggleBrand(brand)}
                    />
                  </div>
                ))}
                {selectedAgeGroups.map((age) => (
                  <div
                    key={`age-${age}`}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1"
                  >
                    {age}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => toggleAgeGroup(age)}
                    />
                  </div>
                ))}
                {selectedFeatures.map((feature) => (
                  <div
                    key={`feature-${feature}`}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1"
                  >
                    {feature}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => toggleFeature(feature)}
                    />
                  </div>
                ))}
                {selectedSizes.map((size) => (
                  <div
                    key={`size-${size}`}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1"
                  >
                    {size}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => toggleSize(size)}
                    />
                  </div>
                ))}
                {selectedTypes.map((type) => (
                  <div
                    key={`size-${type}`}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1"
                  >
                    {type}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => toggleType(type)}
                    />
                  </div>
                ))}
                {showInStockOnly && (
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1">
                    In Stock Only
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => setShowInStockOnly(false)}
                    />
                  </div>
                )}

                <button
                  name="Clear all filters"
                  onClick={clearFilters}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm bg-brandGreen hover:bg-brandLightGreen h-7 rounded-full text-white px-3 transition-all hover:scale-105 hover:shadow-md"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
        {location.pathname !== "/category/pagination" ? 
          <div className="grid gap-2 lg:gap-6 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {visibleFilteredProducts.map((product, index) => {
              if (index === 4) {
                  return (
                    <div key="disruptor-tile" className="rounded-xl bg-yellow-300 flex flex-col rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                      <div className="w-full rounded-xl overflow-hidden">
                                  <video
                                    className="object-cover w-full h-[calc(100%+1px)] rounded-xl aspect-square"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                  >
                                    <source
                                      src="https://www.thetoyshop.com/medias/lego-test-video.mp4?context=bWFzdGVyfHJvb3R8MTg0NTg0MXx2aWRlby9tcDR8YUdVd0wyZ3laUzh4TWpVeU1qWTVNVFE1TXpreE9DOXNaV2R2TFhSbGMzUXRkbWxrWlc4dWJYQTB8MzE5MWY1M2FiYmQ4ODA4NDc4NmYzMDUwOWU5MmZiMzIyNTQxNDYwZTBhMzI3NmUyODNmMDIzYjA1YWMzZTRiYQ"
                                      type="video/mp4" />
                                  </video>
                                </div>
                                <div className="w-full flex flex-col justify-center items-center px-4 pb-4">
                                  <div className="mb-5 -mt-5">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="60"
                                      height="60"
                                      viewBox="0 0 90 90"
                                      fill="none"
                                    >
                                      <g clipPath="url(#clip0_2087_234)">
                                        <path
                                          d="M0.615417 0.602844V89.3971H89.4097V0.602844H0.615417Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M0.615417 89.3971V0.602844H89.4097V89.3971H0.615417ZM81.6983 46.0299C82.477 43.7315 83.3561 40.2777 83.5069 37.5147C83.6199 35.4298 83.331 32.5035 81.3718 30.4312C79.8019 28.7734 77.403 27.9319 74.2381 27.9319C70.2442 27.9319 67.029 29.3385 64.6679 32.1267L64.0525 32.8551L63.638 31.9886C63.2989 31.2852 63.0603 30.9964 62.6961 30.5819C61.0885 28.7608 58.3882 27.844 54.6707 27.844C51.2671 27.844 48.1901 28.8613 46.0173 30.7201L45.4647 31.1848L45.0879 30.5694C44.0581 28.899 41.496 27.8189 38.5571 27.8189C34.3246 27.8189 30.067 28.3966 27.4923 32.5412L26.4248 34.2492L26.3369 32.2272C26.2741 30.6698 26.1234 30.0167 25.4075 29.2506C24.6037 28.4092 23.2724 27.9947 21.3006 27.9947C18.412 27.9947 16.2518 29.2506 14.6693 31.8378C12.2453 35.7187 6.38014 48.4664 6.50573 54.52C6.59365 58.451 9.21854 60.8624 13.5264 60.9629C17.0807 61.0508 19.9065 60.134 21.7025 58.3254L22.1546 57.8607L22.5942 58.338C24.2018 60.0837 26.6634 61.0508 29.5018 61.0508C33.1189 61.0508 36.2085 59.933 37.9919 57.9612L38.4817 57.4212L38.9339 57.9863C40.5917 60.0335 43.1663 61.101 46.369 61.0885C50.5387 61.0759 54.432 59.1543 57.0569 55.8387L57.7477 54.9721L58.137 56.0145C59.7572 60.4103 64.1278 61.0634 66.602 61.0634C74.9791 61.0634 78.6087 55.3112 81.7234 46.0299H81.6983Z"
                                          fill="#FFED00"
                                        ></path>
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M0.615417 89.3971V0.602844H89.4097V89.3971H0.615417ZM82.2509 52.523C83.4064 50.1368 85.5917 44.146 85.9936 40.9182V40.8805C86.496 36.9369 86.9607 33.2068 84.2981 29.4893C82.4016 26.8518 79.1739 25.0809 74.2758 25.0809C70.5708 25.0809 67.2551 26.0857 64.6051 28.2836C62.3319 26.0354 59.079 25.0181 54.7084 25.0181C51.2797 25.0181 48.4036 25.7968 45.9043 27.3039C44.0832 25.8596 41.9481 24.9553 38.5571 24.9553C35.4801 24.9553 31.1471 25.1186 27.8817 27.8817C27.1281 26.3369 25.5959 25.1312 21.3634 25.1312C17.47 25.1312 14.2799 26.9774 12.1951 30.3935C9.40693 34.8395 3.50406 47.6877 3.65477 54.6958C3.7678 59.9832 7.72399 63.6129 13.4636 63.751C16.9048 63.8264 19.8437 63.098 22.0918 61.6034C24.1139 63.0603 26.7011 63.8515 29.5772 63.8515C33.0184 63.8515 36.1206 62.9473 38.4315 61.3271C40.5163 62.9849 43.2543 63.8766 46.3564 63.8766C50.3754 63.8766 54.1055 62.4951 57.1197 59.8451C59.1795 62.47 62.6961 63.8264 66.9788 63.8264C74.9916 63.8264 79.1488 58.9032 82.2635 52.4853L82.2509 52.523Z"
                                          fill="#E3000B"
                                        ></path>
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M0 90V0H90V89.9874H0V90ZM88.7566 88.7566V1.24337H1.24337V88.7566H88.7566Z"
                                          fill="black"
                                        ></path>
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M83.8083 27.1532C83.8083 25.9601 84.7628 24.993 85.9559 24.993C87.149 24.993 88.1161 25.9475 88.1161 27.1407C88.1161 28.3338 87.1616 29.3009 85.9685 29.3009C84.7753 29.3009 83.8208 28.3464 83.8083 27.1532ZM85.9685 25.42C86.923 25.42 87.7017 26.1987 87.7017 27.1532C87.7017 28.1077 86.923 28.8864 85.9685 28.8864C85.014 28.8864 84.2353 28.1077 84.2478 27.1532C84.2478 26.1987 85.014 25.42 85.9685 25.42ZM86.8099 27.8189L87.0737 28.271H86.5211L86.3453 27.9068C86.2699 27.7435 86.1569 27.6054 86.0438 27.4672C85.9559 27.3793 85.8806 27.3542 85.6796 27.3542H85.5917V28.271H85.127V26.0354H86.2448C86.722 26.0354 86.9481 26.2992 86.9481 26.6509C86.9481 26.99 86.722 27.2286 86.3453 27.2788C86.5336 27.3542 86.5964 27.417 86.8225 27.8189H86.8099ZM85.5791 26.3871V27.0025H86.0438C86.3578 27.0025 86.4583 26.8518 86.4583 26.6885C86.4583 26.4876 86.3076 26.3871 85.9936 26.3871H85.5791ZM64.1906 31.7248C66.3634 29.1502 69.5786 27.3039 74.2381 27.3039C82.2886 27.3039 84.3986 32.5663 84.1348 37.5398C83.9841 40.5289 83.017 44.0957 82.3011 46.2183C79.1111 55.688 75.2931 61.6662 66.5895 61.6662C62.6207 61.6662 58.9785 60.1214 57.5468 56.2155C54.9344 59.5311 50.928 61.6913 46.369 61.7039C42.89 61.7164 40.1772 60.4856 38.4566 58.3757C36.4094 60.6363 32.9556 61.6662 29.5144 61.6662C26.4248 61.6662 23.8501 60.5861 22.1546 58.7525C20.2707 60.6615 17.3067 61.6662 13.5264 61.5783C8.69105 61.4653 5.9908 58.5641 5.90288 54.5325C5.76473 48.2905 11.7053 35.4173 14.1543 31.5113C15.8499 28.7357 18.1859 27.3793 21.3132 27.3793C23.0212 27.3793 24.7795 27.6807 25.8722 28.8236C26.7639 29.7656 26.9146 30.607 26.9774 32.2021C29.7153 27.7812 34.3372 27.1909 38.5696 27.1909C41.8099 27.1909 44.4976 28.4092 45.628 30.2428C47.8007 28.3966 50.928 27.2286 54.6832 27.2286C58.5264 27.2286 61.3899 28.1705 63.1733 30.18C63.5627 30.6196 63.8515 30.9587 64.2158 31.7248H64.1906ZM21.803 53.4524C21.9411 51.9453 20.8108 50.3126 16.3145 51.1038C16.7667 50.0991 17.4323 48.7301 18.1859 47.1728C20.6098 42.1742 23.9506 35.2665 24.0134 32.5663C24.0511 31.235 23.511 30.1172 21.3508 30.1298C19.065 30.1298 17.6333 31.0843 16.4653 33.0059C13.9157 37.0625 8.51522 49.3204 8.62825 54.6204C8.69105 57.6472 11.0396 58.8404 13.652 58.9032C17.2439 58.9911 21.3885 57.9738 21.8155 53.465L21.803 53.4524ZM30.9713 46.9341C30.6698 47.7379 30.1047 49.4334 29.6525 51.2169C31.1345 50.8526 32.2397 50.5889 34.1362 50.6391C36.2964 50.6894 37.6905 51.5936 37.6905 53.3771C37.6905 57.71 32.8928 58.9911 29.5772 58.9911C25.9224 58.9911 22.7198 56.9188 22.7198 52.9249C22.7198 48.2403 25.2568 41.1443 27.643 36.4094C30.5694 30.607 33.5585 29.8284 38.7078 29.8284C40.9685 29.8284 43.5808 30.7954 43.5808 32.9305C43.5808 35.8945 41.0815 37.0248 38.5948 37.163C37.5272 37.2258 35.8945 37.2886 34.9149 37.2132C34.9149 37.2132 34.086 38.4817 33.2068 40.7173C37.8161 40.0642 39.7628 41.1192 38.9841 43.7818C37.9291 47.3863 34.8144 47.6123 30.9964 46.9341H30.9713ZM50.9531 37.3765C51.556 36.5225 52.3723 35.7312 53.6157 35.7312C55.1479 35.7312 54.9972 36.535 54.633 37.5775C53.6031 40.5163 56.7178 40.5917 57.4714 40.5289C60.1842 40.3154 61.6788 38.5696 62.043 35.5805C62.5454 31.5113 59.1167 29.954 54.7712 29.954C47.537 29.954 44.686 34.3874 41.9732 40.7173C40.7047 43.6938 39.0971 48.7678 39.0971 52.0081C39.0971 56.5546 41.8602 59.0162 46.3187 59.0162C52.8245 59.0162 57.4212 53.8292 58.7399 47.3612C59.1418 45.3768 59.6442 41.6341 54.5828 41.8476C52.0207 41.9481 50.4633 42.5258 49.6469 45.1382C48.8055 47.8384 51.8574 47.9138 51.8574 47.9138C51.242 50.7019 49.446 52.3974 47.851 52.3974C46.8588 52.3974 45.942 51.9704 46.2434 49.8479C46.6955 46.7583 49.5842 39.2478 50.9154 37.3765H50.9531ZM80.9573 41.0815C80.1912 44.887 78.4706 49.3958 76.5992 52.7617C73.5473 58.2375 69.8549 59.0162 66.6146 58.966C63.3868 58.9283 59.7321 57.7351 59.707 52.7491C59.6818 49.1697 61.2266 44.1083 62.5454 40.8052C64.8312 34.8019 67.1672 29.9037 74.5521 29.9916C83.1552 30.0921 81.6229 37.7533 80.9573 41.0815ZM70.1563 50.8526C71.3494 48.8306 74.7279 39.6246 74.8158 37.3263C74.8409 36.6606 74.7279 35.8819 73.6478 35.8694C72.9068 35.8694 72.2663 36.0075 71.6885 36.8993C70.3824 38.5948 66.5769 48.9939 66.6397 51.0662C66.6648 51.8072 67.0793 52.4602 67.9961 52.4602C69.0511 52.4602 69.6414 51.7318 70.1563 50.8526Z"
                                          fill="black"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_2087_234">
                                          <rect width="90" height="90" fill="white"></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                    <h2 className="text-brandBlue flex-grow font-bold text-sm md:text-base mb-2 leading-tight line-clamp-2 grow">
                                      <button onClick={'#'}>
                                        This is your girl's world. She Built It.
                                      </button>
                                    </h2>
                                  <div className="text-brandBlue mb-3 text-center text-sm">
                                    <button onClick={'#'}>
                                      Unleash her creative potential
                                      with LEGO sets
                                    </button>
                                  </div>
                                  <Button
                                    className='shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-base rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105'
                                    iconpath={<svg width="22" height="18" viewBox="0 0 22 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z" />
                                    </svg>}
                                    onClick={'#'}>
                                    Shop Now
                                  </Button>
                                </div>
                              </div>
                  )
                }
              return <ProductCard key={product.id} product={product} />
})}
          </div>
              :
            <div className="grid gap-2 lg:gap-6 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {currentProducts.map((product, index) => {
                // Insert disruptor tile after 4th product on first page only
                if (index === 4 && currentPage === 1) {
                  return (
                    <div key="disruptor-tile" className="rounded-xl bg-yellow-300 flex flex-col rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                      <div className="w-full rounded-xl overflow-hidden">
                                  <video
                                    className="object-cover w-full h-[calc(100%+1px)] rounded-xl aspect-square"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                  >
                                    <source
                                      src="https://www.thetoyshop.com/medias/lego-test-video.mp4?context=bWFzdGVyfHJvb3R8MTg0NTg0MXx2aWRlby9tcDR8YUdVd0wyZ3laUzh4TWpVeU1qWTVNVFE1TXpreE9DOXNaV2R2TFhSbGMzUXRkbWxrWlc4dWJYQTB8MzE5MWY1M2FiYmQ4ODA4NDc4NmYzMDUwOWU5MmZiMzIyNTQxNDYwZTBhMzI3NmUyODNmMDIzYjA1YWMzZTRiYQ"
                                      type="video/mp4" />
                                  </video>
                                </div>
                                <div className="w-full flex flex-col justify-center items-center px-4 pb-4">
                                  <div className="mb-5 -mt-5">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="60"
                                      height="60"
                                      viewBox="0 0 90 90"
                                      fill="none"
                                    >
                                      <g clipPath="url(#clip0_2087_234)">
                                        <path
                                          d="M0.615417 0.602844V89.3971H89.4097V0.602844H0.615417Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M0.615417 89.3971V0.602844H89.4097V89.3971H0.615417ZM81.6983 46.0299C82.477 43.7315 83.3561 40.2777 83.5069 37.5147C83.6199 35.4298 83.331 32.5035 81.3718 30.4312C79.8019 28.7734 77.403 27.9319 74.2381 27.9319C70.2442 27.9319 67.029 29.3385 64.6679 32.1267L64.0525 32.8551L63.638 31.9886C63.2989 31.2852 63.0603 30.9964 62.6961 30.5819C61.0885 28.7608 58.3882 27.844 54.6707 27.844C51.2671 27.844 48.1901 28.8613 46.0173 30.7201L45.4647 31.1848L45.0879 30.5694C44.0581 28.899 41.496 27.8189 38.5571 27.8189C34.3246 27.8189 30.067 28.3966 27.4923 32.5412L26.4248 34.2492L26.3369 32.2272C26.2741 30.6698 26.1234 30.0167 25.4075 29.2506C24.6037 28.4092 23.2724 27.9947 21.3006 27.9947C18.412 27.9947 16.2518 29.2506 14.6693 31.8378C12.2453 35.7187 6.38014 48.4664 6.50573 54.52C6.59365 58.451 9.21854 60.8624 13.5264 60.9629C17.0807 61.0508 19.9065 60.134 21.7025 58.3254L22.1546 57.8607L22.5942 58.338C24.2018 60.0837 26.6634 61.0508 29.5018 61.0508C33.1189 61.0508 36.2085 59.933 37.9919 57.9612L38.4817 57.4212L38.9339 57.9863C40.5917 60.0335 43.1663 61.101 46.369 61.0885C50.5387 61.0759 54.432 59.1543 57.0569 55.8387L57.7477 54.9721L58.137 56.0145C59.7572 60.4103 64.1278 61.0634 66.602 61.0634C74.9791 61.0634 78.6087 55.3112 81.7234 46.0299H81.6983Z"
                                          fill="#FFED00"
                                        ></path>
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M0.615417 89.3971V0.602844H89.4097V89.3971H0.615417ZM82.2509 52.523C83.4064 50.1368 85.5917 44.146 85.9936 40.9182V40.8805C86.496 36.9369 86.9607 33.2068 84.2981 29.4893C82.4016 26.8518 79.1739 25.0809 74.2758 25.0809C70.5708 25.0809 67.2551 26.0857 64.6051 28.2836C62.3319 26.0354 59.079 25.0181 54.7084 25.0181C51.2797 25.0181 48.4036 25.7968 45.9043 27.3039C44.0832 25.8596 41.9481 24.9553 38.5571 24.9553C35.4801 24.9553 31.1471 25.1186 27.8817 27.8817C27.1281 26.3369 25.5959 25.1312 21.3634 25.1312C17.47 25.1312 14.2799 26.9774 12.1951 30.3935C9.40693 34.8395 3.50406 47.6877 3.65477 54.6958C3.7678 59.9832 7.72399 63.6129 13.4636 63.751C16.9048 63.8264 19.8437 63.098 22.0918 61.6034C24.1139 63.0603 26.7011 63.8515 29.5772 63.8515C33.0184 63.8515 36.1206 62.9473 38.4315 61.3271C40.5163 62.9849 43.2543 63.8766 46.3564 63.8766C50.3754 63.8766 54.1055 62.4951 57.1197 59.8451C59.1795 62.47 62.6961 63.8264 66.9788 63.8264C74.9916 63.8264 79.1488 58.9032 82.2635 52.4853L82.2509 52.523Z"
                                          fill="#E3000B"
                                        ></path>
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M0 90V0H90V89.9874H0V90ZM88.7566 88.7566V1.24337H1.24337V88.7566H88.7566Z"
                                          fill="black"
                                        ></path>
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M83.8083 27.1532C83.8083 25.9601 84.7628 24.993 85.9559 24.993C87.149 24.993 88.1161 25.9475 88.1161 27.1407C88.1161 28.3338 87.1616 29.3009 85.9685 29.3009C84.7753 29.3009 83.8208 28.3464 83.8083 27.1532ZM85.9685 25.42C86.923 25.42 87.7017 26.1987 87.7017 27.1532C87.7017 28.1077 86.923 28.8864 85.9685 28.8864C85.014 28.8864 84.2353 28.1077 84.2478 27.1532C84.2478 26.1987 85.014 25.42 85.9685 25.42ZM86.8099 27.8189L87.0737 28.271H86.5211L86.3453 27.9068C86.2699 27.7435 86.1569 27.6054 86.0438 27.4672C85.9559 27.3793 85.8806 27.3542 85.6796 27.3542H85.5917V28.271H85.127V26.0354H86.2448C86.722 26.0354 86.9481 26.2992 86.9481 26.6509C86.9481 26.99 86.722 27.2286 86.3453 27.2788C86.5336 27.3542 86.5964 27.417 86.8225 27.8189H86.8099ZM85.5791 26.3871V27.0025H86.0438C86.3578 27.0025 86.4583 26.8518 86.4583 26.6885C86.4583 26.4876 86.3076 26.3871 85.9936 26.3871H85.5791ZM64.1906 31.7248C66.3634 29.1502 69.5786 27.3039 74.2381 27.3039C82.2886 27.3039 84.3986 32.5663 84.1348 37.5398C83.9841 40.5289 83.017 44.0957 82.3011 46.2183C79.1111 55.688 75.2931 61.6662 66.5895 61.6662C62.6207 61.6662 58.9785 60.1214 57.5468 56.2155C54.9344 59.5311 50.928 61.6913 46.369 61.7039C42.89 61.7164 40.1772 60.4856 38.4566 58.3757C36.4094 60.6363 32.9556 61.6662 29.5144 61.6662C26.4248 61.6662 23.8501 60.5861 22.1546 58.7525C20.2707 60.6615 17.3067 61.6662 13.5264 61.5783C8.69105 61.4653 5.9908 58.5641 5.90288 54.5325C5.76473 48.2905 11.7053 35.4173 14.1543 31.5113C15.8499 28.7357 18.1859 27.3793 21.3132 27.3793C23.0212 27.3793 24.7795 27.6807 25.8722 28.8236C26.7639 29.7656 26.9146 30.607 26.9774 32.2021C29.7153 27.7812 34.3372 27.1909 38.5696 27.1909C41.8099 27.1909 44.4976 28.4092 45.628 30.2428C47.8007 28.3966 50.928 27.2286 54.6832 27.2286C58.5264 27.2286 61.3899 28.1705 63.1733 30.18C63.5627 30.6196 63.8515 30.9587 64.2158 31.7248H64.1906ZM21.803 53.4524C21.9411 51.9453 20.8108 50.3126 16.3145 51.1038C16.7667 50.0991 17.4323 48.7301 18.1859 47.1728C20.6098 42.1742 23.9506 35.2665 24.0134 32.5663C24.0511 31.235 23.511 30.1172 21.3508 30.1298C19.065 30.1298 17.6333 31.0843 16.4653 33.0059C13.9157 37.0625 8.51522 49.3204 8.62825 54.6204C8.69105 57.6472 11.0396 58.8404 13.652 58.9032C17.2439 58.9911 21.3885 57.9738 21.8155 53.465L21.803 53.4524ZM30.9713 46.9341C30.6698 47.7379 30.1047 49.4334 29.6525 51.2169C31.1345 50.8526 32.2397 50.5889 34.1362 50.6391C36.2964 50.6894 37.6905 51.5936 37.6905 53.3771C37.6905 57.71 32.8928 58.9911 29.5772 58.9911C25.9224 58.9911 22.7198 56.9188 22.7198 52.9249C22.7198 48.2403 25.2568 41.1443 27.643 36.4094C30.5694 30.607 33.5585 29.8284 38.7078 29.8284C40.9685 29.8284 43.5808 30.7954 43.5808 32.9305C43.5808 35.8945 41.0815 37.0248 38.5948 37.163C37.5272 37.2258 35.8945 37.2886 34.9149 37.2132C34.9149 37.2132 34.086 38.4817 33.2068 40.7173C37.8161 40.0642 39.7628 41.1192 38.9841 43.7818C37.9291 47.3863 34.8144 47.6123 30.9964 46.9341H30.9713ZM50.9531 37.3765C51.556 36.5225 52.3723 35.7312 53.6157 35.7312C55.1479 35.7312 54.9972 36.535 54.633 37.5775C53.6031 40.5163 56.7178 40.5917 57.4714 40.5289C60.1842 40.3154 61.6788 38.5696 62.043 35.5805C62.5454 31.5113 59.1167 29.954 54.7712 29.954C47.537 29.954 44.686 34.3874 41.9732 40.7173C40.7047 43.6938 39.0971 48.7678 39.0971 52.0081C39.0971 56.5546 41.8602 59.0162 46.3187 59.0162C52.8245 59.0162 57.4212 53.8292 58.7399 47.3612C59.1418 45.3768 59.6442 41.6341 54.5828 41.8476C52.0207 41.9481 50.4633 42.5258 49.6469 45.1382C48.8055 47.8384 51.8574 47.9138 51.8574 47.9138C51.242 50.7019 49.446 52.3974 47.851 52.3974C46.8588 52.3974 45.942 51.9704 46.2434 49.8479C46.6955 46.7583 49.5842 39.2478 50.9154 37.3765H50.9531ZM80.9573 41.0815C80.1912 44.887 78.4706 49.3958 76.5992 52.7617C73.5473 58.2375 69.8549 59.0162 66.6146 58.966C63.3868 58.9283 59.7321 57.7351 59.707 52.7491C59.6818 49.1697 61.2266 44.1083 62.5454 40.8052C64.8312 34.8019 67.1672 29.9037 74.5521 29.9916C83.1552 30.0921 81.6229 37.7533 80.9573 41.0815ZM70.1563 50.8526C71.3494 48.8306 74.7279 39.6246 74.8158 37.3263C74.8409 36.6606 74.7279 35.8819 73.6478 35.8694C72.9068 35.8694 72.2663 36.0075 71.6885 36.8993C70.3824 38.5948 66.5769 48.9939 66.6397 51.0662C66.6648 51.8072 67.0793 52.4602 67.9961 52.4602C69.0511 52.4602 69.6414 51.7318 70.1563 50.8526Z"
                                          fill="black"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_2087_234">
                                          <rect width="90" height="90" fill="white"></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                    <h2 className="text-brandBlue flex-grow font-bold text-sm md:text-base mb-2 leading-tight line-clamp-2 grow">
                                      <button onClick={'#'}>
                                        This is your girl's world. She Built It.
                                      </button>
                                    </h2>
                                  <div className="text-brandBlue mb-3 text-center text-sm">
                                    <button onClick={'#'}>
                                      Unleash her creative potential
                                      with LEGO sets
                                    </button>
                                  </div>
                                  <Button
                                    className='shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-base rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105'
                                    iconpath={<svg width="22" height="18" viewBox="0 0 22 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z" />
                                    </svg>}
                                    onClick={'#'}>
                                    Shop Now
                                  </Button>
                                </div>
                              </div>
                  )
                }
                return <ProductCard key={product.id} product={product} />
              })}
            </div>
          }

          <button
          onClick={() => setTabOpen(!tabOpen)}
          className={`fixed z-[600] top-1/2 -translate-y-1/2 transition-all -rotate-90 bg-brandRed py-1 md:py-2 px-6 text-sm md:text-base rounded-tr-xl rounded-tl-xl font-bold text-white text shadow-[-5px_-5px_10px_1px_#bbb] ${
            tabOpen ? "right-[72px] md:right-[132px]" : "right-[-60px]"
          }`}
        >
          <span className="shadow-text-red">popular bundle</span>
        </button>
        {(tabOpen) && (
          <div
            onClick={() => {setTabOpen(false)}}
            className="fixed inset-0 z-[500] top-0 left-0 bg-brandBlue/60 w-screen h-screen"
          ></div>
        )}
        <div
          className={`fixed top-0 z-[9999] max-w-[130px] md:max-w-[190px] transition-all h-full ${
            tabOpen ? "right-0" : "right-[-100vw]"
          }`}
        >
          <div className="w-full text-center h-full">
            <div className="bg-white p-4 rounded-tl-lg rounded-bl-lg max-h-screen overflow-auto no-scrollbar h-full flex flex-col justify-center">

          <div
                            id="bundle"
                            className={`grid grid-cols-1 gap-2 md:gap-4 border-brandNeonBlue rounded-xl relative transition-all`}
                          >
                            

                            {searchResults.slice(0, 3).map((product, i) => (
                              <div className="flex items-center relative" key={i}>
                                <div className="relative w-full bundleContainer">
                                  <BundlesProductCard product={product} changeBundleHandlerClick={changeBundleHandlerClick} />
                                  <label className={` flex items-center space-x-3 cursor-pointer mb-6 absolute z-20 top-2 left-2`}>
                                    <input
                                      type="checkbox"
                                      className="relative size-[24px] block appearance-none rounded-md border-[3px] border-brandLightGreen bg-white outline-none transition-all"
                                      defaultChecked
                                      onChange={changeBundleHandler}
                                    />
                                    <span className="absolute top-0 left-[-11px] text-brandGreen">
                                      <svg
                                        viewBox="0 0 24 24"
                                        width="20px"
                                        height="20px"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[22px] h-[22px]"
                                      >
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g
                                          id="SVGRepo_tracerCarrier"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                          <path
                                            d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                        </g>
                                      </svg>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            ))}
                            <div className="flex flex-col items-center py-4 justify-center rounded-lg border-[3px] border-gray-200 bg-white shadow-sm relative">
                              <div>
                                  <div className="text-lg font-semibold text-textBlue text-center mt-2 lg:mt-0 mb-1 leading-[1]">
                                    <div className={`absolute top-2 right-2 ${bundleItemsCount === 0 && 'opacity-30'}`}>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="18" viewBox="0 0 30 18" fill="none">
                                        <g clip-path="url(#clip0_2353_894)">
                                        <g opacity="0.5">
                                        <path d="M28.3784 1.92622L29.8114 2.70233C29.9434 2.76778 30.0094 2.87064 30 3.02025C29.9906 3.16986 29.9246 3.27272 29.7926 3.32882L28.3029 3.99272L28.0107 5.59168C27.9824 5.73194 27.8975 5.81609 27.7561 5.86285C27.6147 5.9096 27.5016 5.86285 27.4073 5.75999L26.3042 4.57246L24.6826 4.77817C24.5412 4.79687 24.428 4.75012 24.3526 4.62856C24.2677 4.507 24.2677 4.38544 24.3337 4.26389L25.1445 2.85194L24.4374 1.39324C24.3715 1.26233 24.3903 1.14077 24.4752 1.01921C24.56 0.907003 24.6826 0.86025 24.824 0.897652L26.4268 1.21557L27.5958 0.102847C27.6995 -9.89516e-06 27.8221 -0.0280618 27.9635 0.028042C28.105 0.0747953 28.1804 0.177652 28.1992 0.317912L28.3784 1.91687V1.92622Z" fill="#407EC9"/>
                                        </g>
                                        <g opacity="0.5">
                                        <path d="M20.6474 8.46231C21.9296 8.92984 22.8535 9.78075 23.4286 11.0337C23.9943 12.2867 24.032 13.5491 23.5418 14.8114C23.0515 16.0737 22.1841 16.9901 20.9491 17.5511C19.714 18.1122 18.4601 18.1496 17.1873 17.6633C15.9334 17.1865 15.0188 16.3262 14.4437 15.1013C13.8686 13.8763 13.8026 12.6327 14.2646 11.3797C14.7548 10.0332 15.6694 9.0888 16.9987 8.52776L16.7724 7.46179L11.8133 11.3423C11.5493 11.548 11.257 11.5854 10.9365 11.4732L9.05089 10.7906C8.40978 11.707 7.56126 12.3335 6.48646 12.6795C5.41167 13.0254 4.3463 13.0067 3.28093 12.6233C1.99872 12.1558 1.06534 11.3143 0.490234 10.0893C-0.0848764 8.86439 -0.141445 7.5927 0.339385 6.30231C0.801359 5.04932 1.64988 4.14231 2.90381 3.57192C4.15774 3.00153 5.41167 2.94543 6.6656 3.40361C7.22185 3.59997 7.71211 3.88984 8.11751 4.25452L9.84284 2.91737L8.06094 2.27218C7.81581 2.18802 7.64611 2.02906 7.53297 1.7953C7.42927 1.57088 7.41984 1.32776 7.50469 1.094C7.58954 0.850881 7.74982 0.68257 7.98552 0.570362C8.21179 0.467505 8.46635 0.458154 8.73033 0.55166L11.8887 1.69244C12.0584 1.75789 12.181 1.86075 12.247 2.00101C12.313 2.15062 12.3224 2.30958 12.2564 2.47789L12.049 3.05763L16.1879 4.55374L15.9616 3.48776L14.1043 2.81452C13.9346 2.74906 13.812 2.64621 13.746 2.50595C13.6801 2.35634 13.6706 2.19737 13.7366 2.02906L13.944 1.44932C14.01 1.28101 14.1137 1.15945 14.2552 1.094C14.406 1.02854 14.5663 1.01919 14.736 1.08465L17.0647 1.92621C17.3758 2.03841 17.5738 2.26283 17.6493 2.58075L18.8278 8.10699C19.4312 8.10699 20.0345 8.21919 20.6379 8.43426L20.6474 8.46231ZM3.90318 10.9122C4.48772 11.1179 5.07226 11.1553 5.67565 11.0244C6.27905 10.8841 6.77873 10.5943 7.19356 10.1454L4.25202 9.07945C3.91261 8.95789 3.71462 8.71478 3.65805 8.3501C3.60148 7.98543 3.71462 7.69556 4.01632 7.48049L6.61845 5.44205C6.43932 5.32049 6.24133 5.22698 6.02449 5.14283C5.22311 4.85296 4.44058 4.89036 3.65805 5.24569C2.88495 5.60101 2.34756 6.18075 2.05529 6.97556C1.76302 7.77036 1.80073 8.54647 2.159 9.32257C2.51726 10.0893 3.1018 10.6223 3.90318 10.9122ZM7.81581 6.854L6.43932 7.91062L8.00438 8.47166C8.09866 7.91062 8.04209 7.36828 7.81581 6.854ZM11.0968 9.58439L15.3771 6.2275L10.7291 4.54439L9.3243 5.67582C9.91827 6.76049 10.0691 7.90127 9.7957 9.1075L11.1062 9.58439H11.0968ZM17.7153 15.8867C18.5166 16.2327 19.3369 16.2233 20.1477 15.868C20.9679 15.5127 21.5242 14.9236 21.8259 14.1101C22.1181 13.3153 22.0804 12.5392 21.7222 11.7631C21.3639 10.9963 20.7794 10.4633 19.978 10.1735C19.7328 10.0893 19.4877 10.0239 19.2237 9.98647L19.9026 13.175C19.9214 13.3433 19.8837 13.5023 19.7894 13.6426C19.6951 13.7828 19.5631 13.867 19.3934 13.8857L18.7995 14.0353C18.6298 14.054 18.4695 14.0166 18.3281 13.9231C18.1867 13.8296 18.1018 13.6987 18.0829 13.5304L17.3853 10.3792C16.6876 10.7813 16.2162 11.361 15.9711 12.1091C15.7259 12.8665 15.7636 13.5958 16.1031 14.3252C16.4425 15.0452 16.9799 15.5688 17.7153 15.8867Z" fill="#407EC9"/>
                                        </g>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_2353_894">
                                        <rect width="30" height="18" fill="white"/>
                                        </clipPath>
                                        </defs>
                                      </svg>
                                    </div>
                                    <div className={`absolute top-2 left-2 ${bundleItemsCount === 0 && 'opacity-30'}`}>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="23" viewBox="0 0 32 23" fill="none">
                                        <g clip-path="url(#clip0_2353_889)">
                                        <g opacity="0.5">
                                        <path d="M4.74978 1.66112L6.87122 1.22193C7.05896 1.17419 7.21854 1.22193 7.33118 1.38424C7.44382 1.54655 7.47199 1.70885 7.3875 1.89026L6.43942 3.87614L7.51892 5.7952C7.61279 5.96705 7.6034 6.12936 7.49076 6.29167C7.37812 6.45398 7.23731 6.52081 7.04957 6.49217L4.89997 6.20574L3.43561 7.82882C3.31358 7.97203 3.154 8.01022 2.96627 7.96249C2.77853 7.9052 2.66588 7.79063 2.63772 7.59968L2.25286 5.42284L0.272221 4.51583C0.0938692 4.4299 0.00938692 4.29623 0 4.09574C0 3.89524 0.0750953 3.75203 0.253447 3.6661L2.15899 2.61587L2.39366 0.429485C2.41244 0.228987 2.51569 0.0953214 2.70343 0.0284887C2.89117 -0.038344 3.05075 -0.000153879 3.19155 0.133512L4.74978 1.65157V1.66112Z" fill="#407EC9"/>
                                        </g>
                                        <g opacity="0.5">
                                        <path d="M7.75356 13.3188L8.9457 12.9942L10.8606 20.2599L9.66849 20.5845C9.34934 20.6704 9.03957 20.6322 8.73919 20.4508C8.43881 20.279 8.25107 20.0212 8.1572 19.6966L6.88058 14.856C6.7961 14.5314 6.83365 14.2163 7.012 13.9108C7.18096 13.6052 7.43441 13.4143 7.75356 13.3188ZM26.3115 6.31093L29.0243 16.6032C29.1933 17.2619 29.1088 17.8921 28.7615 18.4936C28.4142 19.1046 27.926 19.4961 27.2784 19.6679L15.3757 22.9141C14.728 23.0859 14.1085 23 13.5171 22.6467C12.9164 22.2935 12.5315 21.797 12.3625 21.1382L9.64972 10.846C9.43382 10.0154 9.53708 9.22292 9.95949 8.46867C10.3819 7.71441 11.0108 7.22749 11.8275 7.0079L15.9953 5.87174L15.357 3.44667C15.2725 3.12205 15.31 2.80698 15.4884 2.50146C15.6573 2.19594 15.9108 2.00499 16.23 1.90952C16.5491 1.82359 16.8589 1.86178 17.1593 2.04318C17.4596 2.21504 17.6474 2.47282 17.7412 2.79744L18.3796 5.22251L22.5473 4.08635C23.364 3.86676 24.1431 3.97178 24.8847 4.40142C25.6263 4.83106 26.105 5.47074 26.3209 6.30138L26.3115 6.31093ZM16.5491 13.3666C16.7556 13.0037 16.8026 12.6027 16.6899 12.1731C16.5773 11.7435 16.3426 11.4284 15.9765 11.2088C15.6104 10.9988 15.2255 10.951 14.8031 11.0656C14.3807 11.1802 14.0616 11.4189 13.8551 11.7912C13.6485 12.1636 13.6016 12.555 13.7143 12.9847C13.8269 13.4143 14.0616 13.7389 14.4277 13.949C14.7844 14.159 15.1786 14.2067 15.601 14.0922C16.0234 13.9776 16.3332 13.7389 16.5491 13.3666ZM17.6661 17.0901L15.2819 17.7393L15.601 18.9519L17.9853 18.3026L17.6661 17.0901ZM21.2332 16.1162L18.8489 16.7655L19.1681 17.978L21.5523 17.3288L21.2332 16.1162ZM23.6832 11.4189C23.8897 11.056 23.9366 10.6551 23.824 10.2254C23.7113 9.79578 23.4767 9.48071 23.1106 9.26111C22.7445 9.05107 22.3596 9.00333 21.9372 9.1179C21.5148 9.23247 21.1956 9.47116 20.9891 9.84351C20.7826 10.2159 20.7357 10.6073 20.8483 11.037C20.961 11.4666 21.1956 11.7912 21.5617 12.0013C21.9184 12.2113 22.3127 12.259 22.7351 12.1445C23.1575 12.0299 23.4673 11.7912 23.6832 11.4189ZM24.8002 15.1424L22.4159 15.7916L22.7351 17.0042L25.1194 16.3549L24.8002 15.1424ZM30.667 8.3541L31.9436 13.1947C32.0281 13.5193 31.9906 13.8344 31.8122 14.1399C31.6433 14.4454 31.3898 14.6364 31.0707 14.7318L29.8785 15.0565L27.9636 7.79079L29.1557 7.46618C29.4749 7.38025 29.7847 7.41844 30.085 7.59984C30.3854 7.7717 30.5732 8.02948 30.6576 8.3541H30.667Z" fill="#407EC9"/>
                                        </g>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_2353_889">
                                        <rect width="32" height="23" fill="white"/>
                                        </clipPath>
                                        </defs>
                                      </svg>
                                    </div>
                                    {bundleItemsCount > 1 &&
                                      <span><span className="text-xl font-bold block leading-[1]">Buy</span>this bundle</span>
                                    }
                                    {bundleItemsCount === 1 &&
                                      <span><span className="text-xl font-bold block leading-[1]">Buy</span>this item</span>
                                    }
                                    {bundleItemsCount === 0 &&
                                      <span><span className="text-xl font-bold block leading-[1]">Pick</span>Items</span>
                                    }
                                  </div>
                                <div className={`text-lg ${bundleItemsCount === 0 ? 'text-gray-400' : 'text-brandRed'} font-bold text-center mb-2`}>{bundleTotalPrice}</div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button
                                  className={`shadow-md hover:shadow-lg group items-center justify-center text-sm font-bold rounded-full bg-brandGreen text-white p-0 transition-all hover:bg-brandLightGreen hover:scale-105 flex justify-cener items-center p-1.5 pl-0.5 ${bundleItemsCount === 0 && 'pointer-events-none bg-gray-400'}`}
                                  iconpath={
                                    <svg
                                    className="w-full"
                                      width="22"
                                      height="18"
                                      viewBox="0 0 22 18"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z" />
                                    </svg>
                                  }
                                  removeIcons={false}
                                  onClick={addBundleToCart}
                                >
                                  <span className="sr-only">add to basket</span>
                                  {'Add'}
                                </Button>
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>

        {location.pathname !== "/category/pagination" ? 
          <>
             <div className="max-w-[300px] mx-auto mt-8 flex flex-wrap justify-between items-center">
                {(visibleFilteredProducts.length / filteredProducts.length * 100).toFixed() > 99 ?
                  <div className="transition-all" style={{marginLeft: `${(visibleFilteredProducts.length / filteredProducts.length * 100 - 30).toFixed()}%`}}>
                    <img src='/ship-finish.svg' alt='pirate ship indicator finsihed' />
                  </div>
                  :
                  <div style={{marginLeft: `${(visibleFilteredProducts.length / filteredProducts.length * 100 - 10).toFixed()}%`}}>
                    <img src='/ship.svg' alt='pirate ship indicator' />
                  </div>
                }
                <span className={`transition-all ${(visibleFilteredProducts.length / filteredProducts.length * 100).toFixed() > 99 ? 'text-brandLightGreen' : 'text-gray-300 rotate-[10deg]' }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                    <path d="M3.52997 0.660034H6.14996L3.89996 5.89005H0.599976L3.53998 0.660034H3.52997ZM0.589966 6.94003H3.88998L7.90997 15.18C7.90997 15.18 7.90996 15.26 7.85995 15.29C7.80995 15.32 7.76997 15.32 7.74997 15.27L0.589966 6.94003ZM5.42996 6.94003H14.58L10.1 17.33C10.1 17.33 10.05 17.4 9.99997 17.4C9.94997 17.4 9.91996 17.38 9.89996 17.33L5.41998 6.94003H5.42996ZM12.29 0.660034L14.54 5.89005H5.44998L7.69998 0.660034H12.28H12.29ZM12.09 15.17L16.11 6.93002H19.41L12.25 15.26C12.25 15.26 12.19 15.31 12.14 15.28C12.09 15.25 12.07 15.21 12.09 15.17ZM16.47 0.660034L19.41 5.89005H16.11L13.85 0.660034H16.47Z" fill="currentColor"/>
                  </svg>
                </span>
                <div className="bg-gray-300 w-full h-4 rounded-full">
                  <div className="rounded-full h-full bg-brandLightGreen transition-all" style={{width: `${(visibleFilteredProducts.length / filteredProducts.length * 100).toFixed()}%`}}></div>
                </div>
              </div>
              <PresentFinderWidget />
            {/* Load More */}
            {visibleFilteredProducts.length < filteredProducts.length && (
              <div className="text-center mt-4">
                <button
                  name="Load more products"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm text-white font-bold border border-input bg-brandBlue hover:bg-textBlue h-11 rounded-full px-8 transition-all hover:scale-105 hover:shadow-md"
                  onClick={loadMoreProducts}
                >
                  Load More Products ({visibleFilteredProducts.length} of{" "}
                  {filteredProducts.length})
                </button>
              </div>
            )}
          </>
          :
          <>
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center flex-wrap mt-8 relative">{renderPaginationButtons()}<span className="opacity-[0.3] border-dashed border-brandBlue border-b-[5px] w-full absolute bottom-[15px]"></span></div>
            )}
          </>
        }

        {/* Info Sections */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="rounded-lg border shadow-sm p-6 bg-gradient-to-br from-blue-50 to-purple-50">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">
              Explore the Best Action Figure Toys for Kids
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Action figures toys are one of the most popular toys for kids and
              collectors, offering children imaginative play opportunities and
              the ability to enhance their social skills. From superhero battles
              with DC Comics to epic space battles with Star Wars, action
              figures bring our favourite characters to life.
            </p>
          </div>
          <div className="rounded-lg border shadow-sm p-6 bg-gradient-to-br from-purple-50 to-pink-50">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">
              Top Action Figure Brands for All Ages
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Looking for the hottest action figure brands? We have a wide range
              of favourites, including Marvel heroes and WWE for toy
              enthusiasts. For fans of animation, Teenage Mutant Ninja Turtle
              toys are a must-have. No matter the interest, you&apos;ll find the
              perfect action figure for any fan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plp;
