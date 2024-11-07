import OrderCard from "./OrderCard"
import { useSelector } from "react-redux";

const OrderHistory = () => {
  const { user } = useSelector((state) => state.auth);
  const orders = user?.orders || []; 
    return (

    <div className='w-full flex items-center'>
      <div className="w-full py-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 2xl:gap-10">
        {orders.map((order, index) => (
          <OrderCard
            order={order}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default OrderHistory