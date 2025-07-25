import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

const recs = [
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
  }
]

const TopSellersCarousel = () => {
  return (
    <div className="mt-2">
      <div className="text-lg text-textBlue font-bold mb-2">
        Top Picks
      </div>
        <Swiper
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          autoplay={true}
          loop
          slidesPerView={3}
          spaceBetween={10}
          breakpoints={{
          768: {
            slidesPerView: 7,
          },
          1024: {
            slidesPerView: 9,
          },
        }}
        >
          {recs.map((product) => (
            <SwiperSlide>
              <div className="flex flex-col h-full" key={product.id}>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`grid overflow-hidden grow transition-all duration-300 ease-in-out text-slate-600 text-sm "grid-rows-[1fr] opacity-100"
                }`}>
                  <div className="overflow-hidden flex flex-col">
                    <h3 className="text-[10px] font-bold text-brandBlue my-2 grow leading-[1.2]">{product.name}</h3>
                    <div className="price">
                      <div className="flex items-end">
                        <span className="text-brandRed font-bold text-[12px]">
                          £{product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="line-through text-gray-400 text-[10px] ml-1">
                            £{product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default TopSellersCarousel