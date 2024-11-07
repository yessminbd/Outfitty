import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { categories, products } from "../Constants";
import { MdArrowLeft, MdArrowRight, MdShoppingCart } from "react-icons/md";
import Cart from "../Components/Cart";

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.variants.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.variants.colors[0]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const category = categories.find(cat => cat._id === product.categoryId);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
      image: product.images[0]
    };

    const existingItemIndex = cartItems.findIndex(
      item => item.id === cartItem.id &&
        item.size === cartItem.size &&
        item.color === cartItem.color
    );

    if (existingItemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, cartItem]);
    }

    setIsCartOpen(true);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row lg:justify-between w-full max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-20 gap-6">
        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <div className="aspect-square w-full">
              <img
                src={product.images[currentImageIndex]}
                alt={`${product.name} - View ${currentImageIndex + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {product.images.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full hover:bg-white/90 transition-colors shadow-md"
                  aria-label="Previous image"
                >
                  <MdArrowLeft className="w-6 h-6 text-[#FF5757]" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-3 rounded-full hover:bg-white/90 transition-colors shadow-md"
                  aria-label="Next image"
                >
                  <MdArrowRight className="w-6 h-6 text-[#FF5757]" />
                </button>
              </>
            )}
          </div>
        </div>

        <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-3">
          <div className="space-y-1">
            <span className=" text-gray-500">{category.name}</span>
            <h1 className="text-2xl lg:text-4xl text-gray-800 font-semibold">{product.name}</h1>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-2xl lg:text-3xl text-gray-800 font-semibold">{product.price.toFixed(2)} TND</span>
            {product.promotion > 0 && (
              <span className="line-through font-semibold text-lg lg:text-xl text-[#FF5757]">
                {(product.price + product.promotion).toFixed(2)} TND
              </span>
            )}
          </div>

          <p className="text-gray-700 text-[15px] lg:text-xl">{product.description}</p>

          <div className="space-y-3">
            <label className="block text-gray-700 font-semibold">
              Color
            </label>
            <div className="flex flex-wrap gap-2">
              {product.variants.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 font-semibold rounded-md border transition-colors ${selectedSize === size
                    ? 'bg-[#FF5757] text-white border-[#FF5757]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-[#FF5757]'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-gray-700 font-semibold">
              Size
            </label>
            <div className="flex flex-wrap gap-2">
              {product.variants.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 font-semibold rounded-md border transition-colors ${selectedColor === color
                    ? 'bg-[#FF5757] text-white border-[#FF5757]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-[#FF5757]'
                    }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-gray-700 font-semibold">
              Quantity
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-3 py-1 rounded-md border border-gray-300 hover:border-[#FF5757]"
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="px-3 py-1 rounded-md border border-gray-300 hover:border-[#FF5757]"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#FF5757] text-white py-3 px-6 rounded-md hover:bg-[#ff4242] transition-colors flex items-center justify-center gap-2"
            >
              <MdShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>

            <Link
              to="/order"
              className="flex-1"
            >
              <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Cart
        open={isCartOpen}
        setOpen={setIsCartOpen}
        cartItems={cartItems}
      />
    </div>
  );
};

export default Product;