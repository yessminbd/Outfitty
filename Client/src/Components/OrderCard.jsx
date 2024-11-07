import clsx from "clsx";
import { orderStatus, products } from "../Constants";

const OrderCard = ({ order, }) => {
    const product = products.find(p => p._id === order.productid);
    return (
        <div className="relative w-full bg-white px-4 py-2 rounded transition-shadow shadow-md">
            <div className=' flex items-center gap-2 '>
                <div className={clsx("w-6 h-4 rounded-full", orderStatus[order.status])}></div>
                <p className={clsx(' text-neutral-800 font-semibold',)}>{order.status}</p>
            </div>
            <span className=" justify-end  text-gray-500 text-sm">{order.deliveryDate}</span>

            <p className="font-medium ">{product.name}</p>
            <div className="flex">
                <p >{order.state}, </p>
                <p >{order.city}, </p>
                <p > {order.address1}</p>

            </div>
            <p className="">Total: {order.total} TND</p>
        </div>
    )
}

export default OrderCard