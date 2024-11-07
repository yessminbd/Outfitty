/* eslint-disable no-unused-vars */
import Textbox from "../Components/Textbox";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { IoAlertCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { states } from "../Constants";

const Order = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [orderItems, setOrderItems] = useState([]);
  const SHIPPING_COST = 7;
  const onSubmit = (data) => {
    console.log(data);
    navigate('/confirmation');
  };

  

  return (
    <div className="min-h-full flex justify-center items-center py-6 px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col lg:flex-row gap-8 ">

        <div className="w-full lg:w-1/2  shadow-lg p-10">
          <div className="flex gap-2">
            <IoAlertCircleOutline className="h-4 w-4 text-gray-400 mb-8" />
            <p className="font-semibold pb-4 lg:pb-0 text-gray-400 ">IMPORTANT: Please Provide Exact Addresses for Efficient Delivery !</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-4 ">
            <Textbox
              placeholder="First name"
              type="text"
              name="first_name"
              className="flex-1 rounded-md mb-3"
              register={register("first_name", { required: "First name is required" })}
              error={errors.first_name ? errors.first_name.message : ""}
            />
            <Textbox
              placeholder="Last name"
              type="text"
              name="last_name"
              className="flex-1 rounded-md mb-3"
              register={register("last_name", { required: "Last name is required" })}
              error={errors.last_name ? errors.last_name.message : ""}
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <Textbox
              placeholder="Phone number"
              type="text"
              name="phone"
              className="flex-1 rounded-md mb-3"
              register={register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\d{8}$/,
                  message: "Phone number must contain exactly 8 digits"
                }
              })}
              error={errors.phone ? errors.phone.message : ""}
            />
            <Textbox
              placeholder="Email address (optional)"
              type="email"
              name="email"
              className="flex-1 rounded-md mb-3"
              register={register("email")}
              error={errors.email ? errors.email.message : ""}
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <select
              name="state"
              {...register("gouvernorat", { required: "State is required" })}
              className="placeholder-gray-400 mb-3 text-gray-900 outline-none text-base focus:ring-2 ring-[#FF5757] flex-1 rounded-md bg-transparent px-3 py-2.5 2xl:py-3 border"
              defaultValue=""
            >
              <option value="" disabled>State</option>
              {states.map((gouvernorat, index) => (
                <option key={index} value={gouvernorat}>{gouvernorat}</option>
              ))}
            </select>
            <Textbox
              placeholder="City"
              type="text"
              name="city"
              className="flex-1 rounded-md mb-3"
              register={register("city", { required: "City is required" })}
              error={errors.city ? errors.city.message : ""}
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <Textbox
              placeholder="Address 1"
              type="text"
              name="address1"
              className="flex-1 rounded-md mb-3"
              register={register("address1", { required: "Address is required" })}
              error={errors.address1 ? errors.address1.message : ""}
            />
            <Textbox
              placeholder="Address 2 (optional)"
              type="text"
              name="address2"
              className="flex-1 rounded-md mb-3"
              register={register("address2")}
              error={errors.address2 ? errors.address2.message : ""}
            />
          </div>
          <div className="flex gap-4">
            <textarea
              name="note"
              placeholder="Leave a note..."
              className="placeholder-gray text-gray-900 outline-none text-base focus:ring-2 ring-[#FF5757] flex-1 rounded-md bg-transparent px-3 py-2.5 2xl:py-3 border"
              rows="4"
              {...register("note")}
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-full bg-[#FF5757] text-white font-semibold py-2 px-8 rounded-md hover:bg-[#ff4242] transition-colors"
            >
              Confirm the order
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col space-y-6 p-10 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

          <div className="space-y-4 max-h-[400px] overflow-y-auto">
            {orderItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 border-b pb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-[#FF5757] font-semibold">
                    {item.price.toFixed(2)} TND
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-4 border-t">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold text-gray-800">199.00TND</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 ">Shipping</span>
              <span className="font-semibold text-gray-800">{SHIPPING_COST.toFixed(2)} TND</span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-3 border-t">
              <span className="text-gray-800">Total</span>
              <span className="text-[#FF5757]">206.99TND</span>
            </div>
          </div>

          <div className="pt-6 border-t">
            <h3 className="font-semibold mb-3">Payment Method</h3>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="cash"
                value="cash"
                checked
                readOnly
                className="text-[#FF5757] focus:ring-[#FF5757]"
              />
              <label htmlFor="cash" className="text-gray-700">
                Cash on Delivery
              </label>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Payment will be collected upon delivery of your order
            </p>
          </div>
        </div>

      </form>
    </div>
  );
};

export default Order;
