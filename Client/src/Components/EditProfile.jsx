import { useForm } from "react-hook-form";
import Textbox from "./Textbox"
import { useSelector } from "react-redux";
import { useState } from "react";
import { states } from "../Constants";
import { ModalEditProfile } from "./Dialogs";
import profilePict from '../assets/profile-pic.png';

const EditProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useSelector((state) => state.auth);
    const [profilePic, setProfilePic] = useState(profilePict);
    const [name, setName] = useState(user?.name);
    const [phone, setPhone] = useState(user?.phone);
    const [state, setState] = useState(user?.state);
    const [city, setCity] = useState(user?.city);
    const [address1, setAddress1] = useState(user?.address1);
    const [address2, setAddress2] = useState(user?.address2);
    const [openDialog, setOpenDialog] = useState(false);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const submitHandler = async (data) => {
        'submit';
    };
    const editProfileHandler = () => {
        setOpenDialog(true);
    };
    return (<>
        <div >
            <form onSubmit={handleSubmit(submitHandler)} className="space-y-2">
                <span className="font-semibold text-sm lg:text-[13px]">Personal information</span>
                <div className="relative  pb-3 ">
                    <img
                        onClick={() => document.getElementById("profilePicInput").click()}
                        src={profilePic}
                        alt="Profile"
                        className="cursor-pointer flex w-32 h-32 object-cover rounded-full "
                    />
                    <input
                        type="file"
                        accept="image/*"
                        id="profilePicInput"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                    />
                </div>
                <Textbox
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Full name"
                    type="text"
                    name='name'
                    className='lg:w-full  lg:h-11 rounded-md text-sm lg:text-[13px] h-9'
                    register={register("name", { required: 'Name  is required' })}
                    error={errors.name ? errors.name.message : ''}
                />
                <Textbox
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    placeholder="Phone number"
                    type="text"
                    name='phone'
                    className='  lg:h-11 rounded-md text-sm lg:text-[13px] h-9'

                    register={register("phone", {
                        required: 'Phone number is required',

                        pattern: {
                            value: /^\d{8}$/,
                            message: "Phone number must contain exactly 8 digits"
                        }
                    })}
                    error={errors.phone ? errors.phone.message : ''}

                />
                <div className="flex gap-1">
                    <select
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                        name="state"
                        {...register("gouvernorat", { required: "State is required" })}
                        className=" lg:h-11     h-11 placeholder-gray-400  text-gray-900 outline-none text-base focus:ring-2 ring-[#FF5757] flex-1 rounded-md bg-transparent px-3 py-2.5 2xl:py-3 border"
                        defaultValue=""
                    >
                        <option value="" disabled className="">State</option>
                        {states.map((gouvernorat, index) => (
                            <option key={index} value={gouvernorat}>{gouvernorat}</option>
                        ))}
                    </select>
                    <Textbox
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        type="text"
                        name="city"
                        className=" lg:h-11 w-full rounded-md text-sm lg:text-[13px] h-11"
                        register={register("city", { required: "City is required" })}
                        error={errors.city ? errors.city.message : ""}
                    />
                </div>
                <div className="flex gap-1">
                    <Textbox
                        value={address1}
                        onChange={(e) => setAddress1(e.target.value)}
                        placeholder="Address 1"
                        type="text"
                        name="address1"
                        className="lg:w-full w-full lg:h-11 rounded-md text-sm lg:text-[13px] h-9'"
                        register={register("address1", { required: "Address is required" })}
                        error={errors.address1 ? errors.address1.message : ""}
                    />
                    <Textbox
                        value={address2}
                        onChange={(e) => setAddress2(e.target.value)}
                        placeholder="Address 2 (optional)"
                        type="text"
                        name="address2"
                        className="lg:w-full lg:h-11 rounded-md text-sm lg:text-[13px] h-9' "
                        error={errors.address2 ? errors.address2.message : ""}
                    />
                </div>
                
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => editProfileHandler()}
                        type="submit"
                        className="w-full bg-[#FF5757] text-white font-semibold py-2 px-8 rounded-md hover:bg-[#ff4242] transition-colors"
                    >
                        Confirm
                    </button>
                </div>
            </form>
        </div>
        <ModalEditProfile
            open={openDialog}
            setOpen={setOpenDialog}

        /></>
    )
}

export default EditProfile