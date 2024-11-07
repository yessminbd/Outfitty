/* eslint-disable no-unused-vars */
import { useState } from "react";
import Loader from "../Components/Loader";
import { products } from "../Constants";
import ProductCard from "../Components/ProductCard";

const Home = () => {

  const [loading, setLoading] = useState(false);

  return loading ? (
    <div className='py-10'>
      <Loader />
    </div>
  ) : (
    <div className='w-full flex items-center'>
      <div className="w-full py-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 2xl:gap-10">
        {products.map((product, index) => (
          <ProductCard 
            product={product}
            key={index}
          />
        ))}
      </div>
    </div>
  )


}

export default Home