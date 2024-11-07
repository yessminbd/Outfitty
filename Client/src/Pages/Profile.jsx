import { useState } from "react";
import { useSelector } from "react-redux";
import { MdEdit, MdHistory } from "react-icons/md";
import { Link } from "react-router-dom";
import clsx from "clsx";
import profilePict from '../assets/profile-pic.png';
import EditProfile from "../Components/EditProfile";
import { IoLogOut } from "react-icons/io5";
import OrderHistory from "../Components/OrderHistory";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);




  const toggleComponent = (component) => {
    if (component === 'EditProfile') {
      setIsEditProfileOpen(true);
      setIsNotificationPanelOpen(false);
      setIsHistoryOpen(false)
    } else if (component === 'NotificationPanel') {
      setIsNotificationPanelOpen(true);
      setIsEditProfileOpen(false);
      setIsHistoryOpen(false)
    }
    else if (component === 'OrderHistory') {
      setIsHistoryOpen(true);
      setIsNotificationPanelOpen(false);
      setIsEditProfileOpen(false);
    }
  };

  const NavLink = ({ el }) => {
    return (
      <Link
        onClick={() => toggleComponent(el.component)}
        className={clsx(
          "w-full lg:w-3/4 flex gap-2 px-3 py-2 rounded-full items-center font-semibold text-gray-800 text-sm lg:text-[13px] hover:text-[#FF5757]",
        )}
      >
        <span>{el.icon}</span>
        <span>{el.label}</span>
      </Link>
    );
  };

  return (
    <div className="flex flex-col lg:mx-44 ">
       <div className="flex flex-row lg:mt-3">
        {user.image ? (
          <div className="relative cursor-pointer">
            <img
              onClick={() => document.getElementById("profilePicInput").click()}
              src={user.image}
              alt=""
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
          </div>
        ) : (
          <div className="mx-2 py-3">
             <img
                        onClick={() => document.getElementById("profilePicInput").click()}
                        src={profilePict}
                        alt="Profile"
                        className="w-32 h-32 object-cover rounded-full mx-auto"
                    />
          </div>
        )}
        <div>
          <h1 className="text-xl font-semibold mt-10 text-start text-gray-800">{user?.name}</h1>
          <span className="text-sm text-gray-500">{user?.email}</span>
        </div>
      </div>
      <div className='w-full lg:w-3/4 flex flex-row gap-6 lg:p-5'>
        <div className='w-1/3'>
          <NavLink el={{ label: 'Edit Profile', icon: <MdEdit />, component: 'EditProfile' }} />
          <NavLink el={{ label: 'Order history', icon: <MdHistory />, component: 'OrderHistory' }} />


          <Link
            to={"/home"}
            className={clsx(
              "w-full lg:w-3/4 flex gap-2 px-3 py-2 rounded-full items-center text-gray-800 font-semibold text-sm lg:text-[13px] hover:text-[#FF5757]",
            )}
          >
            <span><IoLogOut /></span>
            <span>Log out</span>
          </Link>


        </div>
        <div className="w-2/3">
          {isEditProfileOpen === false && isHistoryOpen === false && isNotificationPanelOpen === false ? (
            <EditProfile />) : (
            <>
              {isEditProfileOpen && <EditProfile />}
              {isHistoryOpen && <OrderHistory />}
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default Profile;
