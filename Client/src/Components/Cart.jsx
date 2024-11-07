import { Link } from "react-router-dom";
import { MdClose, MdDelete } from "react-icons/md";
import clsx from 'clsx';

const Cart = ({ open, setOpen, cartItems = [], setCartItems ,cartId }) => {
  if (!open) return null;

  const handleRemoveItem = (itemToRemove) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) =>
          !(item.id === itemToRemove.id && item.size === itemToRemove.size && item.color === itemToRemove.color)
      )
    );
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[999] transition-opacity"
        onClick={() => setOpen(false)}
        style={{ backdropFilter: 'blur(1px)' }}
      />

      <div 
        className={`fixed right-0 top-0 h-full w-2/3 md:w-96 bg-white z-[1000] shadow-xl transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold hover:text-[#FF5757] text-gray-800">Shopping Cart</h2>
            <button
              onClick={() => setOpen(false)}
              className="p-2 hover:text-[#FF5757] rounded-full"
              aria-label="Close cart"
            >
              <MdClose className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Your cart is empty
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4 border-b pb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      {item.size == "" || item.color == "" ? (
                        <div className="mt-4"></div>
                      ) : (
                        <p className="text-gray-600">
                          {item.size} - {item.color}
                        </p>
                      )}
                      <p className="text-[#FF5757] text-lg font-semibold">
                        {item.price} TND x {item.quantity}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="p-2 rounded-full transition-colors"
                      aria-label="Remove item"
                    >
                      <MdDelete className="w-5 h-5 hover:text-[#FF5757] text-gray-800" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t p-4 space-y-4">
            {cartItems.length > 0 && (
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>
                  {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)} TND
                </span>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <Link
                to="/home"
                onClick={() => setOpen(false)}
                className="py-2 px-4 border text-center hover:text-[#ff4242] font-semibold border-gray-300 rounded-md transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                to="/order"
                className={clsx(
                  "text-center font-semibold py-2 px-4 rounded-md transition-colors",
                  cartItems.length === 0
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-[#FF5757] text-white hover:bg-[#ff4242]"
                )}
                {...(cartItems.length === 0 && { tabIndex: -1, 'aria-disabled': true })}
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;