"use client"

import { useState, useEffect, } from "react"
import { Filter,X, Search, ChevronUp } from "lucide-react"

import ProductCard from "../../components/productCard/productCard";

// All the data arrays (brands, ageGroups, features, sizes, products) remain the same
const brands = [
  { name: "Marvel", count: 156, color: "bg-red-800" },
  { name: "DC Comics", count: 89, color: "bg-blue-600" },
  { name: "Star Wars", count: 234, color: "bg-yellow-500" },
  { name: "TMNT", count: 45, color: "bg-green-800" },
  { name: "Transformers", count: 78, color: "bg-purple-500" },
  { name: "Monster Verse", count: 34, color: "bg-orange-800" },
  { name: "The Simpsons", count: 23, color: "bg-yellow-400" },
  { name: "Collectible Figures", count: 167, color: "bg-indigo-500" },
  { name: "Pokemon", count: 92, color: "bg-yellow-600" },
  { name: "Dragon Ball Z", count: 67, color: "bg-orange-600" },
  { name: "Naruto", count: 43, color: "bg-blue-500" },
  { name: "One Piece", count: 38, color: "bg-red-600" },
]

const ageGroups = [
  { name: "3-5 years", count: 89 },
  { name: "6-8 years", count: 234 },
  { name: "9-12 years", count: 345 },
  { name: "13+ years", count: 456 },
  { name: "Adult Collectors", count: 123 },
]

const features = [
  { name: "Articulated", count: 567 },
  { name: "With Accessories", count: 234 },
  { name: "Light & Sound", count: 89 },
  { name: "Transforming", count: 156 },
  { name: "Poseable", count: 445 },
  { name: "Collectible", count: 234 },
]

const sizes = [
  { name: "3-4 inches", count: 234 },
  { name: "6 inches", count: 345 },
  { name: "12 inches", count: 156 },
  { name: "18+ inches", count: 67 },
]

// Extended product list with more items and descriptions
const products = [
  {
    id: 1,
    name: "Spider-Man Advanced Suit Figure",
    brand: "Marvel",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.8,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    isNew: true,
    isBestseller: false,
    ageGroup: "6-8 years",
    features: ["Articulated", "With Accessories"],
    size: "6 inches",
    inStock: true,
    description:
      "Bring the web-slinging action home with this highly detailed Spider-Man figure featuring the Advanced Suit from the hit video game. With multiple points of articulation and authentic detailing.",
    specifications: {
      Material: "High-quality plastic",
      "Articulation Points": "20+",
      Accessories: "Web effects, alternate hands",
      Manufacturer: "Marvel Toys",
    },
  },
  {
    id: 2,
    name: "Batman Dark Knight Figure",
    brand: "DC Comics",
    price: 22.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 203,
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    isNew: false,
    isBestseller: true,
    ageGroup: "9-12 years",
    features: ["Articulated", "Poseable"],
    size: "6 inches",
    inStock: true,
    description:
      "The Dark Knight rises with this incredibly detailed Batman figure. Features authentic movie styling and premium articulation for dynamic posing.",
    specifications: {
      Material: "Premium plastic with fabric cape",
      "Articulation Points": "25+",
      Accessories: "Batarang, grappling hook",
      Manufacturer: "DC Collectibles",
    },
  },
  {
    id: 3,
    name: "Darth Vader Deluxe Figure",
    brand: "Star Wars",
    price: 34.99,
    originalPrice: 39.99,
    rating: 4.7,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    isNew: true,
    isBestseller: false,
    ageGroup: "13+ years",
    features: ["Light & Sound", "With Accessories"],
    size: "12 inches",
    inStock: true,
    description:
      "Experience the power of the Dark Side with this premium Darth Vader figure featuring authentic breathing sounds and light-up lightsaber.",
    specifications: {
      Material: "High-grade plastic with electronic components",
      Height: "12 inches",
      Accessories: "Lightsaber with light and sound effects",
      Batteries: "3 x AAA (included)",
    },
  },
  {
    id: 4,
    name: "Leonardo TMNT Figure",
    brand: "TMNT",
    price: 18.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 67,
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    isNew: false,
    isBestseller: false,
    ageGroup: "6-8 years",
    features: ["Articulated", "With Accessories"],
    size: "6 inches",
    inStock: true,
    description:
      "Cowabunga! Leonardo leads the way with this action-packed figure featuring his signature katanas and ninja gear.",
    specifications: {
      Material: "Durable plastic",
      "Articulation Points": "15+",
      Accessories: "Twin katanas, throwing stars",
      Manufacturer: "Playmates Toys",
    },
  },
  {
    id: 5,
    name: "Optimus Prime Figure",
    brand: "Transformers",
    price: 42.99,
    originalPrice: 49.99,
    rating: 4.9,
    reviews: 134,
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    isNew: false,
    isBestseller: true,
    ageGroup: "9-12 years",
    features: ["Transforming", "Articulated"],
    size: "12 inches",
    inStock: true,
    description:
      "Autobots, roll out! This premium Optimus Prime figure transforms from robot to truck in 25 steps with authentic movie detailing.",
    specifications: {
      Material: "High-quality die-cast and plastic",
      Transformation: "25 steps",
      Accessories: "Ion blaster, energon axe",
      Manufacturer: "Hasbro",
    },
  },
  {
    id: 6,
    name: "Godzilla King of Monsters",
    brand: "Monster Verse",
    price: 28.99,
    originalPrice: null,
    rating: 4.5,
    reviews: 45,
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    isNew: true,
    isBestseller: false,
    ageGroup: "13+ years",
    features: ["Light & Sound", "Poseable"],
    size: "18+ inches",
    inStock: false,
    description:
      "The King of Monsters returns! This massive Godzilla figure features authentic roaring sounds and atomic breath light effects.",
    specifications: {
      Material: "Premium vinyl with electronic components",
      Height: "18 inches",
      "Sound Effects": "Authentic movie roars",
      Batteries: "4 x AA (not included)",
    },
  },
  {
    id: 7,
    name: "Pikachu Deluxe Figure",
    brand: "Pokemon",
    price: 16.99,
    originalPrice: 19.99,
    rating: 4.7,
    reviews: 234,
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    isNew: false,
    isBestseller: true,
    ageGroup: "3-5 years",
    features: ["Light & Sound", "With Accessories"],
    size: "6 inches",
    inStock: true,
    description:
      "Gotta catch 'em all! This adorable Pikachu figure features authentic Pokemon sounds and lightning bolt accessories.",
    specifications: {
      Material: "Soft vinyl",
      "Sound Effects": "Authentic Pikachu voice",
      Accessories: "Lightning bolt effects",
      Batteries: "2 x AAA (included)",
    },
  },
  {
    id: 8,
    name: "Goku Super Saiyan Figure",
    brand: "Dragon Ball Z",
    price: 31.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 178,
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    isNew: true,
    isBestseller: false,
    ageGroup: "Adult Collectors",
    features: ["Collectible", "Poseable"],
    size: "6 inches",
    inStock: true,
    description:
      "Power up with this highly detailed Super Saiyan Goku figure featuring premium paint applications and multiple display options.",
    specifications: {
      Material: "High-quality PVC",
      "Articulation Points": "30+",
      Accessories: "Energy effects, alternate faces",
      Series: "S.H.Figuarts",
    },
  },
  {
    id: 9,
    name: "Wonder Woman 1984 Figure",
    brand: "DC Comics",
    price: 26.99,
    originalPrice: 32.99,
    rating: 4.6,
    reviews: 92,
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    isNew: false,
    isBestseller: false,
    ageGroup: "9-12 years",
    features: ["Articulated", "With Accessories"],
    size: "12 inches",
    inStock: true,
    description:
      "Embrace your inner warrior with this stunning Wonder Woman figure from the hit movie, complete with golden armor and accessories.",
    specifications: {
      Material: "Premium plastic with metallic finish",
      Height: "12 inches",
      Accessories: "Lasso of Truth, shield, sword",
      Manufacturer: "McFarlane Toys",
    },
  },
  {
    id: 10,
    name: "Iron Man Mark 85 Figure",
    brand: "Marvel",
    price: 45.99,
    originalPrice: 52.99,
    rating: 4.9,
    reviews: 267,
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    isNew: false,
    isBestseller: true,
    ageGroup: "Adult Collectors",
    features: ["Collectible", "Light & Sound", "Articulated"],
    size: "12 inches",
    inStock: true,
    description:
      "The ultimate Iron Man figure featuring the Mark 85 armor from Avengers: Endgame with LED lights and premium detailing.",
    specifications: {
      Material: "Die-cast metal and plastic",
      "LED Features": "Arc reactor and repulsors",
      Accessories: "Nano gauntlet, energy effects",
      Batteries: "3 x LR41 (included)",
    },
  },
  // quick array with randoms for dummy products added after few load mores
  ...Array.from({ length: 22 }, (_, i) => ({
    id: i + 11,
    name: `Action Figure ${i + 11}`,
    brand: brands[i % brands.length].name,
    price: Math.floor(Math.random() * 40) + 15,
    originalPrice: Math.random() > 0.5 ? Math.floor(Math.random() * 50) + 20 : null,
    rating: Math.floor(Math.random() * 20) / 10 + 4,
    reviews: Math.floor(Math.random() * 200) + 50,
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    isNew: Math.random() > 0.7,
    isBestseller: Math.random() > 0.8,
    ageGroup: ageGroups[Math.floor(Math.random() * ageGroups.length)].name,
    features: features.slice(0, Math.floor(Math.random() * 3) + 1).map((f) => f.name),
    size: sizes[Math.floor(Math.random() * sizes.length)].name,
    inStock: Math.random() > 0.1,
    description: "An amazing action figure with incredible detail and premium features for collectors and fans alike.",
    specifications: {
      Material: "High-quality plastic",
      "Articulation Points": "15+",
      Accessories: "Various accessories included",
      Manufacturer: "Premium Toys",
    },
  })),
]

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl !leading-[1.2] font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Action Figures Collection
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            Discover the best action figures for kids, featuring popular characters from Marvel, Star Wars,
            Transformers, DC Comics, and more! Bring your favorite heroes and villains to life.
          </p>
        </div>

        

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
              <form className="max-w-sm md:order-3">
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
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleFilteredProducts.map((product) => (
            <ProductCard product={product} />
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
