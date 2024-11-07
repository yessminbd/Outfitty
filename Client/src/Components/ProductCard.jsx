/* eslint-disable no-unused-vars */
import clsx from 'clsx';
import { categories } from "../Constants";
import { Link, useNavigate } from "react-router-dom";
import { MdShoppingBag, MdShoppingCart } from "react-icons/md";
import { useState, useEffect } from 'react';
import Cart from './Cart';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const category = categories.find(cat => cat._id === product.categoryId);
    const [selectedProduct, setSelectedProduct] = useState(product._id);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleAddToCart = () => {
        const cartItem = {
            id: selectedProduct,
            name: product.name,
            price: product.price,
            size: "",
            color: "",
            quantity: 1,
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

    };
    const handleOrderClick = () => {
        const cartItem = {
            id: product._id,
            name: product.name,
            price: product.price,
            size: "",
            color: "",
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


    const handleOrderNow = () => {
        const orderItem = {
            id: selectedProduct,
            name: product.name,
            price: product.price,
            size: "",
            color: "",
            quantity: 1,
            image: product.images[0]
        };

        const updatedCart = [...cartItems, orderItem];
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));

        const total = updatedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        const orderDetails = {
            items: updatedCart,
            total: total,
            date: new Date().toISOString()
        };
        localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

        navigate('/order');
    };

    return (
        <div className="relative w-full bg-white px-4 py-0 rounded transition-shadow hover:shadow-2xl">
            <Link to={`/product/${product._id}`} className="relative block">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-80 object-cover rounded"
                />

                {product.promotion > 0 && (
                    <div className="absolute top-2 left-2 bg-[#FF5757] text-white text-xs font-bold px-2 py-1 rounded">
                        Discount
                    </div>
                )}
            </Link>

            <div className="flex flex-col min-h-[200px]">
                <div className={clsx(
                    "flex pt-3 gap-1 items-center text-sm font-medium justify-center",
                    category && "text-gray-500"
                )}>
                    {category ? category.name : "Unknown Category"}
                </div>

                <h4 className="line-clamp-1 text-gray-900 lg:text-2xl font-semibold text-center mt-2">
                    {product.name}
                </h4>

                <div className="flex flex-col items-center justify-center h-20">
                    <span className="lg:text-xl text-lg font-semibold text-gray-900">
                        {product.price.toFixed(2)} TND
                    </span>

                    {product.promotion > 0 ? (
                        <span className="text-[#FF5757] font-semibold lg:text-lg line-through">
                            {(product.price + product.promotion).toFixed(2)} TND
                        </span>
                    ) : (
                        <div className="h-7" />
                    )}
                </div>
                <button
                    onClick={handleOrderClick}
                    className="w-full flex items-center justify-center gap-2 rounded-md py-3 border border-gray-300 text-gray-900 hover:text-white hover:bg-[#FF5757] mt-5"
                >
                    <MdShoppingBag className="w-4 h-4" />
                    Order now
                </button>
                <button
                    onClick={handleAddToCart}
                    className="mb-2 w-full flex items-center justify-center gap-2 rounded-md py-3 border border-gray-300 text-gray-900 hover:text-white hover:bg-[#FF5757] mt-1"
                >
                    <MdShoppingCart className="w-4 h-4" />
                    Add to Cart
                </button>
            </div>
            <Cart
                open={isCartOpen}
                setOpen={setIsCartOpen}
                cartItems={cartItems}
                setCartItems={setCartItems}
            />
        </div>
    );
};

export default ProductCard;