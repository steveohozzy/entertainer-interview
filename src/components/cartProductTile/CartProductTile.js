
const CartProductTile = ({product}) => {
  return (
    <div className="flex items-start flex-wrap w-100 py-6 relative after:w-full after:absolute after:bottom-0 after:left-0 after:border-b-[3px] after:md:w-[50%]">
        <div className="w-[30%] md:w-[20%] border-[4px] border-brandLightBlue rounded-lg">
            <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full"
            />
        </div>
        <div className="w-[70%] md:w-[80%]">
            <div className="flex flex-wrap">
                <div className="w-full md:w-[50%] px-4 text-textBlue font-bold text-lg">
                    {product.name}
                    <div className="text-sm font-normal">
                        {product.brand}
                    </div>
                </div>
                <div className="w-full md:w-[50%] px-4 md:px-0">
                    <div className="flex flex-wrap justify-between items-start">
                        <div className="flex flex-col w-full md:w-[30%]">
                            <span className="text-brandRed font-bold">{product.price}</span>
                            <span className="line-through text-gray-400">{product.originalPrice}</span>
                        </div>
                        <div className="flex justify-between items-center w-full md:w-[70%] text-gray-500 font-bold">
                            <div className="flex items-center">
                                <span className="text-lg mr-2 font-normal">Qty</span>
                                <div className="flex items-center border border-gray-400 rounded-lg">
                                    <button className="px-2">-</button>
                                    <span className="px-2 b-l-1 border-gray-400 border-x mt-1 mb-1">1</span>
                                    <button className="px-2">+</button>
                                </div>
                            </div>
                            <div>
                                <button className="text-brandRed underline text-sm text-right">remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartProductTile
