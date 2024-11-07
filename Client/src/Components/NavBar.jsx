import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdMenu, MdOutlineShoppingCart, MdPerson } from 'react-icons/md';
import { IoClose, IoList } from 'react-icons/io5';
import logoImage from "../assets/OUTFITTY.png";
import { categories } from '../Constants';
import Cart from './Cart';
const NavBar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const cartItems = [
  ];

  const handleCartClick = (e) => {
    e.preventDefault();
    setIsCartOpen(true);
  };

  return (
    <nav className="sticky px-5 lg:px-10 top-0 z-50 py-1 bg-white shadow-md ">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to={'/home'}>
              <h1 className='flex items-center'>
                <div>
                  <img src={logoImage} alt="Outfitty Logo" className='w-16 h-16' />
                </div>
                <span className='text-[#FF5757] text-2xl font-bold'>Outfitty</span>
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="text-gray-600  text-lg hover:text-[#FF5757]"
              >
                Categories
              </button>

              {showCategories && (
                <div className="absolute z-50 mt-2 w-48 bg-white rounded-md shadow-lg">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      to={``}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-[#FF5757]"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <div className="p-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 rounded-full border focus:outline-none"
                />
              </div>
            </div>


            <div className="flex items-center space-x-4">
              <button
                onClick={handleCartClick}
                className="text-gray-600 hover:text-[#FF5757]"
              >
                <MdOutlineShoppingCart className="w-6 h-6" />
              </button>
              {user ? (
                <Link to={`/profile/${user._id}`} className="text-gray-600 hover:text-[#FF5757]">
                  <MdPerson className="w-6 h-6" />
                </Link>
              ) : (
                <Link to="/log-in" className="text-gray-600 hover:text-[#FF5757]">
                  <MdPerson className="w-6 h-6" />
                </Link>
              )}

            </div>

          </div>

          <button
            onClick={() => setNavOpen(!isNavOpen)}
            className="md:hidden p-2 rounded-md text-[#FF5757]"
          >
            {isNavOpen ? <IoClose className="h-6 w-6" /> : <MdMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isNavOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 sm:px-3">
            <div className="p-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-full border focus:outline-none"
              />
            </div>

            <div className="p-2">
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="w-full flex text-left px-3 rounded-md text-gray-700 hover:text-[#FF5757]"
              >
                <IoList className="mr-3 h-6 w-6" />
                Categories
              </button>
              {showCategories && (
                <div className="ml-4 mt-2">
                  {categories?.map((category, index) => (
                    <Link
                      key={index}
                      to={``}
                      className="block px-3 py-2 rounded-md text-gray-600 hover:text-[#FF5757]"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="p-2">
              <button
                onClick={handleCartClick}
                className="flex items-center w-full px-3 py-2 rounded-md text-gray-700 hover:text-[#FF5757]"
              >
                <MdOutlineShoppingCart className="mr-3 h-6 w-6" />
                Cart
              </button>
              {user ? (
                <Link
                  to={`/profile/${user._id}`}
                  className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-[#FF5757]"
                >
                  <MdPerson className="mr-3 h-6 w-6" />
                  Profile
                </Link>
              ) : (
                <Link
                  to="/log-in"
                  className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-[#FF5757]"
                >
                  <MdPerson className="mr-3 h-6 w-6" />
                  Account
                </Link>

              )}

            </div>
          </div>
        </div>
      )}

      <Cart
        open={isCartOpen}
        setOpen={setIsCartOpen}
        cartItems={cartItems}
      />
    </nav>
  );
};

export default NavBar;