import { useContext, useState } from 'react'
import { Star, Heart, ShoppingCart, Eye, Plus, Minus } from "lucide-react"

import { CartContext } from '../../contexts/cartContext'


const ProductCard = ({product}) => {
    const { name, price, image, originalPrice, isNew, isBestseller, brand, size, inStock, rating, reviews } = product;
    const { addItemToCart} = useContext(CartContext);

    // Quick view modal state
    const [quickViewProduct, setQuickViewProduct] = useState(null)
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const [quantity, setQuantity] = useState(1)

    // Reset modal state when opening
    const openQuickView = product => {
    setQuickViewProduct(product)
    setSelectedImageIndex(0)
    setQuantity(1)
    }

    const closeQuickView = () => {
    setQuickViewProduct(null)
    setSelectedImageIndex(0)
    setQuantity(1)
    }

    const addItemToCartHandler = () => {
        addItemToCart(product)
    }
    return (
        <>

            {/* Quick View Modal */}
            {quickViewProduct && (
            <div className="fixed inset-0 z-50 bg-black/50 md:bg-black/80">
            <div className="fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg sm:rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="relative flex flex-col gap-4">
                {quickViewProduct && (
                <>
                    <div>
                    <div className="text-2xl font-bold">{quickViewProduct.name}</div>
                    </div>
    
                    <button name="Close quick view" onClick={() => closeQuickView()} className="absolute right-[0px] top-0 rounded-sm opacity-70 transition-opacity hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-5 w-5"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg><span className="sr-only">Close</span>
                    </button>
    
                    <div className="grid md:grid-cols-2 gap-6">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        <img
                            src={quickViewProduct.images[selectedImageIndex] || "/placeholder.svg"}
                            alt={quickViewProduct.name}
                            className="w-full h-full object-cover"
                        />
                        </div>
                        <div className="flex gap-2 overflow-x-auto">
                        {quickViewProduct.images.map((image, index) => (
                            <button
                            name="Select image to view"
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
                                selectedImageIndex === index ? "border-blue-500" : "border-gray-200"
                            }`}
                            >
                            <img
                                src={image || "/placeholder.svg"}
                                alt={`View ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <span className="sr-only">Select image</span>
                            </button>
                        ))}
                        </div>
                    </div>
    
                    {/* Product Details */}
                    <div className="space-y-6">
                        {/* badging */}
                        <div className="flex flex-wrap gap-2">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs">{quickViewProduct.brand}</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs">{quickViewProduct.size}</div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs">{quickViewProduct.ageGroup}</div>
                        {quickViewProduct.isNew && <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs bg-green-800 text-white">NEW</div>}
                        {quickViewProduct.isBestseller && <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs bg-orange-800 text-white">BESTSELLER</div>}
                        {!quickViewProduct.inStock && <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 border-transparent bg-red-800 text-white text-xs">Out of Stock</div>}
                        </div>
    
                        {/* Rating */}
                        <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium ml-1">{quickViewProduct.rating}</span>
                        </div>
                        <span className="text-gray-500">({quickViewProduct.reviews} reviews)</span>
                        </div>
    
                        {/* Price */}
                        <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-blue-600">£{quickViewProduct.price}</span>
                        {quickViewProduct.originalPrice && (
                            <span className="text-xl text-gray-500 line-through">£{quickViewProduct.originalPrice}</span>
                        )}
                        </div>
    
                        {/* Description */}
                        <div>
                        <h3 className="font-semibold mb-2">Description</h3>
                        <p className="text-gray-700">{quickViewProduct.description}</p>
                        </div>
    
                        {/* Features */}
                        <div>
                        <h3 className="font-semibold mb-2">Features</h3>
                        <div className="flex flex-wrap gap-2">
                            {quickViewProduct.features.map((feature) => (
                            <div key={feature} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs border-transparent bg-gray-100">
                                {feature}
                            </div>
                            ))}
                        </div>
                        </div>
    
                        {/* Quantity and Add to Cart */}
                        <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="font-medium">Quantity:</span>
                            <div className="flex items-center border rounded-md">
                            <button
                                name="Reduce quanitity"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-gray-100 h-9 rounded-md px-3"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                disabled={quantity <= 1}
                            >
                                <Minus className="h-4 w-4" />
                                <span className="sr-only">Reduce quantity</span>
                            </button>
                            <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                            <button
                                name="Increase quantity"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-gray-100 h-9 rounded-md px-3"
                                onClick={() => setQuantity(quantity + 1)}
                                disabled={quantity >= 10}
                            >
                                <Plus className="h-4 w-4" />
                                <span className="sr-only">Increase quanitity</span>
                            </button>
                            </div>
                        </div>
    
                        <div className="flex gap-3">
                            <button
                            name="Add to cart"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2 flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105 hover:shadow-md"
                            disabled={!quickViewProduct.inStock}
                            onClick={addItemToCartHandler}
                            >
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart
                            </button>
                            <button name="Add to favourites" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-gray-100 h-10 w-10 transition-all hover:scale-105 hover:shadow-md">
                            <Heart className="h-4 w-4" />
                            <span className="sr-only">Add to favourites</span>
                            </button>
                        </div>
                        </div>
    
                        <span />
    
                        {/* Specifications */}
                        <div>
                        <h3 className="font-semibold mb-3">Specifications</h3>
                        <div className="space-y-2">
                            {Object.entries(quickViewProduct.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                                <span className="text-gray-600">{key}:</span>
                                <span className="font-medium">{value}</span>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>
                    </div>
                </>
                )}
                </div>
            </div>
            </div>
            )}



            <div
              className="flex flex-col rounded-lg border bg-white shadow-sm group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image || "/placeholder.svg"}
                  alt={name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Alternate image on hover */}
                <img
                  src={"/placeholder-alt.svg"}
                  alt={`${name} - alternate view`}
                  className="absolute inset-0 w-full h-64 object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {isNew && <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs bg-green-800 text-white">NEW</div>}
                  {isBestseller && <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs bg-orange-800 text-white">BESTSELLER</div>}
                </div>
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 opacity-100 md:opacity-0 transition-opacity">
                  <button name="quick view" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-gray-200 hover:bg-gray-300 h-9 rounded-md px-3 transition-all hover:scale-105 hover:shadow-md" onClick={() => openQuickView(product)}>
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">Open quick view</span>
                  </button>
                  <button name="Add to favourites" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-gray-200 hover:bg-gray-300 h-9 rounded-md px-3 transition-all hover:scale-105 hover:shadow-md">
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to favourites</span>
                  </button>
                </div>
              </div>
              <div className="p-4 flex flex-col grow">
                <div className="flex flex-wrap gap-1 mb-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                    {brand}
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                    {size}
                  </div>
                  {!inStock && (
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 border-transparent bg-red-800 text-white text-xs">
                      Out of Stock
                    </div>
                  )}
                </div>
                <h2 className="font-semibold text-lg mb-2 line-clamp-2 grow">{name}</h2>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({reviews} reviews)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-blue-600">£{price}</span>
                    {originalPrice && (
                      <span className="text-sm text-gray-500 line-through">£{originalPrice}</span>
                    )}
                  </div>
                  <button
                    onClick={addItemToCartHandler}
                    name="Add to cart"
                    className="text-white inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm h-9 rounded-md px-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105 hover:shadow-md"
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add
                  </button>
                </div>
              </div>
            </div>
        </>
    )
}

export default ProductCard