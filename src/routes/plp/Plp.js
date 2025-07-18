"use client"

import { useState, useEffect, } from "react"
import { Filter,X, Search, ChevronUp } from "lucide-react"
import { products, brands, ageGroups, features, sizes } from "../../data/products";

import ProductCard from "../../components/productCard/productCard";

const Plp = () => {
const [selectedBrands, setSelectedBrands] = useState([])
const [selectedAgeGroups, setSelectedAgeGroups] = useState([])
const [selectedFeatures, setSelectedFeatures] = useState([])
const [selectedSizes, setSelectedSizes] = useState([])
const [priceRange, setPriceRange] = useState([0, 100])
const [showInStockOnly, setShowInStockOnly] = useState(false)
const [showFilters, setShowFilters] = useState(false)
const [brandSearch, setBrandSearch] = useState("")
const [visibleProducts, setVisibleProducts] = useState(12)
const [showHeader, setShowHeader] = useState(true)
const [showBackToTop, setShowBackToTop] = useState(false)
const [lastScrollY, setLastScrollY] = useState(0)

// Handle scroll for header visibility
useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down & past threshold
      setShowHeader(false)
    } else {
      // Scrolling up or at top
      setShowHeader(true)
    }

    if (currentScrollY > 400) {
      setShowBackToTop(true)
    } else {
      setShowBackToTop(false)
    }

    setLastScrollY(currentScrollY)
  }

  window.addEventListener("scroll", handleScroll, { passive: true })
  return () => window.removeEventListener("scroll", handleScroll)
}, [lastScrollY])

// Scroll to top
const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

const toggleBrand = brandName => {
  setSelectedBrands(prev =>
    prev.includes(brandName)
      ? prev.filter(b => b !== brandName)
      : [...prev, brandName]
  )
}

const toggleAgeGroup = ageGroup => {
  setSelectedAgeGroups(prev =>
    prev.includes(ageGroup)
      ? prev.filter(a => a !== ageGroup)
      : [...prev, ageGroup]
  )
}

const toggleFeature = feature => {
  setSelectedFeatures(prev =>
    prev.includes(feature)
      ? prev.filter(f => f !== feature)
      : [...prev, feature]
  )
}

const toggleSize = size => {
  setSelectedSizes(prev =>
    prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
  )
}

const clearFilters = () => {
  setSelectedBrands([])
  setSelectedAgeGroups([])
  setSelectedFeatures([])
  setSelectedSizes([])
  setPriceRange([0, 100])
  setShowInStockOnly(false)
  setBrandSearch("")
}

const loadMoreProducts = () => {
  setVisibleProducts(prev => Math.min(prev + 8, filteredProducts.length))
}

// Filter brands based on search typing
const filteredBrands = brands.filter(brand =>
  brand.name.toLowerCase().includes(brandSearch.toLowerCase())
)

const filteredProducts = products.filter(product => {
  const matchesBrand =
    selectedBrands.length === 0 || selectedBrands.includes(product.brand)
  const matchesAgeGroup =
    selectedAgeGroups.length === 0 ||
    selectedAgeGroups.includes(product.ageGroup)
  const matchesFeatures =
    selectedFeatures.length === 0 ||
    selectedFeatures.some(feature => product.features.includes(feature))
  const matchesSize =
    selectedSizes.length === 0 || selectedSizes.includes(product.size)
  const matchesPrice =
    product.price >= priceRange[0] && product.price <= priceRange[1]
  const matchesStock = !showInStockOnly || product.inStock

  return (
    matchesBrand &&
    matchesAgeGroup &&
    matchesFeatures &&
    matchesSize &&
    matchesPrice &&
    matchesStock
  )
})

// Get the visible subset of filtered products
const visibleFilteredProducts = filteredProducts.slice(0, visibleProducts)

const hasActiveFilters =
  selectedBrands.length > 0 ||
  selectedAgeGroups.length > 0 ||
  selectedFeatures.length > 0 ||
  selectedSizes.length > 0 ||
  showInStockOnly



  return (
    <>
      {/* Filter Panel Overlay */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowFilters(false)} />
      )}

      {/* Sliding Filter Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          showFilters ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-xl text-gray-900">Filters</h2>
            <button name="Close filters" onClick={() => setShowFilters(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close filters</span>
            </button>
          </div>

          {hasActiveFilters && (
            <>
            {selectedBrands.map((brand) => (
              <div key={`brand-${brand}`} variant="secondary" className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-gray-100 gap-1">
                {brand}
                <X className="h-3 w-3 cursor-pointer" onClick={() => toggleBrand(brand)} />
              </div>
            ))}
            {selectedAgeGroups.map((age) => (
              <div key={`age-${age}`} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-gray-100 gap-1">
                {age}
                <X className="h-3 w-3 cursor-pointer" onClick={() => toggleAgeGroup(age)} />
              </div>
            ))}
            {selectedFeatures.map((feature) => (
              <div key={`feature-${feature}`} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-gray-100 gap-1">
                {feature}
                <X className="h-3 w-3 cursor-pointer" onClick={() => toggleFeature(feature)} />
              </div>
            ))}
            {selectedSizes.map((size) => (
              <div key={`size-${size}`} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-gray-100 gap-1">
                {size}
                <X className="h-3 w-3 cursor-pointer" onClick={() => toggleSize(size)} />
              </div>
            ))}
            {showInStockOnly && (
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-gray-100 gap-1">
                In Stock Only
                <X className="h-3 w-3 cursor-pointer" onClick={() => setShowInStockOnly(false)} />
              </div>
            )}
            <div className="mb-4 mt-4">
              <button name="Clear filters" onClick={clearFilters} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm border border-input bg-background hover:bg-gray-100 h-9 rounded-md px-3 w-full transition-all hover:scale-105 hover:shadow-md">
                Clear all filters
              </button>
            </div>
            </>
          )}

          {/* Brand Filters with Search */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Brands</h3>
            <div className="relative mb-3">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                id="searchBrands"
                placeholder="Search brands..."
                value={brandSearch}
                onChange={(e) => setBrandSearch(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-black pl-8 text-sm"
              />
            </div>
            <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
              {filteredBrands.map((brand) => (
                <div
                  key={brand.name}
                  variant={selectedBrands.includes(brand.name) ? "default" : "outline"}
                  className={`inline-flex items-center rounded-full border px-2.5 py-0.5 cursor-pointer transition-all hover:scale-105 text-sm hover:bg-gray-100 ${
                    selectedBrands.includes(brand.name) ? `${brand.color} text-white` : "hover:bg-gray-100"
                  }`}
                  onClick={() => toggleBrand(brand.name)}
                >
                  {brand.name} ({brand.count})
                </div>
              ))}
            </div>
          </div>

          {/* Age Group Filters */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Age Groups</h3>
            <div className="space-y-2">
              {ageGroups.map((age) => (
                <label key={age.name} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    id={age.name}
                    type="checkbox"
                    checked={selectedAgeGroups.includes(age.name)}
                    onChange={() => toggleAgeGroup(age.name)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                  />
                  <span className="text-sm">
                    {age.name} ({age.count})
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Features Filters */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
            <div className="space-y-2">
              {features.map((feature) => (
                <label key={feature.name} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    id={feature.name}
                    type="checkbox"
                    checked={selectedFeatures.includes(feature.name)}
                    onChange={() => toggleFeature(feature.name)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                  />
                  <span className="text-sm text-gray-700">
                    {feature.name} ({feature.count})
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Size Filters */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Size</h3>
            <div className="space-y-2">
              {sizes.map((size) => (
                <label key={size.name} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    id={size.name}
                    type="checkbox"
                    checked={selectedSizes.includes(size.name)}
                    onChange={() => toggleSize(size.name)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                  />
                  <span className="text-sm text-gray-700">
                    {size.name} ({size.count})
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  id="minPrice"
                  type="number"
                  placeholder="Min"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="flex h-10 rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-foreground w-20 text-sm"
                />
                <span className="text-gray-500">-</span>
                <input
                  id="maxPrice"
                  type="number"
                  placeholder="Max"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="flex h-10 rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-foreground w-20 text-sm"
                />
              </div>
              <div className="text-sm text-gray-600">
                £{priceRange[0]} - £{priceRange[1]}
              </div>
            </div>
          </div>

          {/* Additional Filters */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Additional Filters</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  id="showInStockOnly"
                  type="checkbox"
                  checked={showInStockOnly}
                  onChange={(e) => setShowInStockOnly(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                />
                <span className="text-sm text-gray-700">In Stock Only</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-10">
        {/* Hero Section 
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl !leading-[1.2] font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Action Figures Collection
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            Discover the best action figures for kids, featuring popular characters from Marvel, Star Wars,
            Transformers, DC Comics, and more! Bring your favorite heroes and villains to life.
          </p>
        </div>*/}

        

        {/* Filter and Sort Header */}
        <div
          className={`sticky z-40 bg-transparent pb-2 mb-4 transition-all duration-300 ${
            showHeader ? "top-[108px] md:top-[137px]" : "top-0"
          }`}
        >
          <div className="shadow flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border flex-wrap">
            <div className="flex items-center justify-between gap-4 w-full flex-wrap">
              <button
                name="Show filters"
                onClick={() => setShowFilters(true)}
                className={`md:order-1 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm border border-input bg-background hover:bg-gray-100 hover:text-accent-foreground h-10 px-4 py-2 transition-all hover:scale-105 hover:shadow-md`}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </button>
              <p className="text-gray-600 text-center order-3 text-xs md:text-sm w-full md:order-2 md:w-auto">
                Showing {visibleFilteredProducts.length} of {filteredProducts.length} results
              </p>
              <form id="sort-by-form" className="max-w-[200px] md:order-3">
                <label htmlFor="sort" className="sr-only">Select an option</label>
                <select id="sort" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                  <option value="Relevance">Relevance</option>
                  <option value="Price (lowest first)">Price (lowest first)</option>
                  <option value="Price (highest first)">Price (highest first)</option>
                  <option value="Name (A-Z)">Name (A-Z)</option>
                  <option value="Name (Z-A)">Name (Z-A)</option>
                </select>
              </form>
            </div>

            {/* Active Filters Display */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 mt-2 w-full">
                <span className="text-sm text-gray-600 font-medium">Active filters:</span>
                {selectedBrands.map((brand) => (
                  <div key={`brand-${brand}`} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-gray-100 gap-1">
                    {brand}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => toggleBrand(brand)} />
                  </div>
                ))}
                {selectedAgeGroups.map((age) => (
                  <div key={`age-${age}`} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-gray-100 gap-1">
                    {age}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => toggleAgeGroup(age)} />
                  </div>
                ))}
                {selectedFeatures.map((feature) => (
                  <div key={`feature-${feature}`} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-gray-100 gap-1">
                    {feature}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => toggleFeature(feature)} />
                  </div>
                ))}
                {selectedSizes.map((size) => (
                  <div key={`size-${size}`} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-gray-100 gap-1">
                    {size}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => toggleSize(size)} />
                  </div>
                ))}
                {showInStockOnly && (
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-gray-100 gap-1">
                    In Stock Only
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setShowInStockOnly(false)} />
                  </div>
                )}

                <button name="Clear all filters" onClick={clearFilters} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm border border-input bg-background hover:bg-gray-100 h-9 rounded-md px-3 transition-all hover:scale-105 hover:shadow-md">
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {visibleFilteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        {visibleFilteredProducts.length < filteredProducts.length && (
          <div className="text-center mt-12">
            <button name="Load more products" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm border border-input bg-white hover:bg-gray-100 h-11 rounded-md px-8 transition-all hover:scale-105 hover:shadow-md" onClick={loadMoreProducts}>
              Load More Products ({visibleFilteredProducts.length} of {filteredProducts.length})
            </button>
          </div>
        )}

        {/* Info Sections */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="rounded-lg border shadow-sm p-6 bg-gradient-to-br from-blue-50 to-purple-50">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Explore the Best Action Figure Toys for Kids</h2>
            <p className="text-gray-700 leading-relaxed">
              Action figures toys are one of the most popular toys for kids and collectors, offering children
              imaginative play opportunities and the ability to enhance their social skills. From superhero battles with
              DC Comics to epic space battles with Star Wars, action figures bring our favourite characters to life.
            </p>
          </div>
          <div className="rounded-lg border shadow-sm p-6 bg-gradient-to-br from-purple-50 to-pink-50">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">Top Action Figure Brands for All Ages</h2>
            <p className="text-gray-700 leading-relaxed">
              Looking for the hottest action figure brands? We have a wide range of favourites, including Marvel heroes
              and WWE for toy enthusiasts. For fans of animation, Teenage Mutant Ninja Turtle toys are a must-have. No
              matter the interest, you&apos;ll find the perfect action figure for any fan.
            </p>
          </div>
        </div>
      </div>

      {showBackToTop && 
          <button name="Scroll to to of site" onClick={scrollToTop} className="fixed bottom-4 right-4 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-gray-200 hover:bg-gray-300 h-9 rounded-md px-3 shadow-md transition-all hover:scale-105 hover:shadow-lg">
            <ChevronUp className="h-4 w-4" />
            <span className="sr-only">Back to top</span>
          </button>
      }
    </>
  );
}

export default Plp;
