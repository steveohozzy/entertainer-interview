"use client";

import { useState, useEffect } from "react";
import { X, Search } from "lucide-react";
import {
  products,
  brands,
  ageGroups,
  features,
  sizes,
} from "../../data/products";

import ProductCard from "../../components/productCard/productCard";
import Dropdown from "../../components/dropdown/Dropdown";
import { useLocation } from "react-router-dom";

const Plp = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedAgeGroups, setSelectedAgeGroups] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [brandSearch, setBrandSearch] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 10

  // Handle scroll for header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setShowHeader(false);
      } else {
        // Scrolling up or at top
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

   useEffect(() => {
    setCurrentPage(1)
  }, [selectedBrands, selectedAgeGroups, selectedFeatures, selectedSizes, priceRange, showInStockOnly])

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

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedAgeGroups([]);
    setSelectedFeatures([]);
    setSelectedSizes([]);
    setPriceRange([0, 100]);
    setShowInStockOnly(false);
    setBrandSearch("");
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => Math.min(prev + 8, filteredProducts.length));
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
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesStock = !showInStockOnly || product.inStock;

    return (
      matchesBrand &&
      matchesAgeGroup &&
      matchesFeatures &&
      matchesSize &&
      matchesPrice &&
      matchesStock
    );
  });

  // Get the visible subset of filtered products
  const visibleFilteredProducts = filteredProducts.slice(0, visibleProducts);

  const hasActiveFilters =
    selectedBrands.length > 0 ||
    selectedAgeGroups.length > 0 ||
    selectedFeatures.length > 0 ||
    selectedSizes.length > 0 ||
    showInStockOnly;

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const endIndex = startIndex + PRODUCTS_PER_PAGE
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

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
      // buttons.push(
      //   <button key={1} onClick={() => goToPage(1)}>
      //     1
      //   </button>,
      // )
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

  const location = useLocation() 

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-10">
        {/* Hero Section 
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl !leading-[1.2] font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Action Figures Collection
          </h1>
          <p className="text-sm md:text-base text-brandBlue max-w-3xl mx-auto">
            Discover the best action figures for kids, featuring popular characters from Marvel, Star Wars,
            Transformers, DC Comics, and more! Bring your favorite heroes and villains to life.
          </p>
        </div>*/}

        {/* Filter and Sort Header */}
        <div
          className={`sticky z-40 bg-brandLightBlue py-2 mb-4 transition-all duration-300 ${
            showHeader ? "top-[108px] md:top-[137px]" : "top-0"
          }`}
        >
          <div className="shadow flex items-center gap-3 justify-between shadow-sm flex-wrap bg-brandLightBlue">
            <div className="grid grid-cols-3 gap-2 w-full flex-wrap">
              <form id="sort-by-form" className="bg-brandBlue text-white text-sm rounded-tl-full rounded-bl-full block h-full w-full px-3">
                <label htmlFor="sort" className="sr-only">
                  Select an option
                </label>
                <select
                  id="sort"
                  className="bg-brandBlue text-white text-sm rounded-tl-full rounded-bl-full block h-full w-full px-3 outline-0 cursor-pointer"
                >
                  <option value="Sort">Sort</option>
                  <option value="Relevance">Relevance</option>
                  <option value="Price (lowest first)">
                    Price (lowest first)
                  </option>
                  <option value="Price (highest first)">
                    Price (highest first)
                  </option>
                  <option value="Name (A-Z)">Name (A-Z)</option>
                  <option value="Name (Z-A)">Name (Z-A)</option>
                </select>
              </form>
              <div className={`relative z-[2] bg-white border-[3px] border-brandBlue border-b-brandBlue ${showFilters && 'border-b-white'}`}>
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
                <div
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
                          <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
                            {filteredBrands.map((brand) => (
                              <div
                                key={brand.name}
                                variant={
                                  selectedBrands.includes(brand.name)
                                    ? "default"
                                    : "outline"
                                }
                                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 cursor-pointer transition-all hover:scale-105 text-sm hover:bg-brandBlue hover:text-white ${
                                  selectedBrands.includes(brand.name)
                                    ? `bg-brandBlue text-white`
                                    : "hover:bg-brandBlue"
                                }`}
                                onClick={() => toggleBrand(brand.name)}
                              >
                                {brand.name} ({brand.count})
                              </div>
                            ))}
                          </div>
                        </>
                      }
                    />
                    {/* Age Group Filters */}
                    <Dropdown
                      title="Age Groups"
                      className="w-full text-brandBlue flex items-center border-b-2 border-b-textBlue py-3"
                      answer={
                        <div className="space-y-3 pt-3">
                          {ageGroups.map((age) => (
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
                                {age.name} ({age.count})
                              </span>
                            </label>
                          ))}
                        </div>
                      }
                    />
                    {/* Features Filters */}
                    <Dropdown
                      title="Features"
                       className="w-full text-brandBlue flex items-center border-b-2 border-b-textBlue py-3"
                       answer={
                        <div className="space-y-3 pt-3">
                        {features.map((feature) => (
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
                              {feature.name} ({feature.count})
                            </span>
                          </label>
                        ))}
                      </div>
                       }
                      />

                    {/* Size Filters */}
                    <Dropdown
                      title="Size"
                      className="w-full text-brandBlue flex items-center border-b-2 border-b-textBlue py-3"
                      answer={
                        <div className="space-y-3 pt-3">
                        {sizes.map((size) => (
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
                              {size.name} ({size.count})
                            </span>
                          </label>
                        ))}
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
                ({visibleFilteredProducts.length} of{" "}
                {filteredProducts.length}) items
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
            {visibleFilteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
              :
            <div className="grid gap-2 lg:gap-6 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          }

        {location.pathname !== "/category/pagination" ? 
          <>
            {/* Load More */}
            {visibleFilteredProducts.length < filteredProducts.length && (
              <div className="text-center mt-12">
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
