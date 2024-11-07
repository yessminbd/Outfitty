/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { ModalResetPassword } from "../Components/Dialogs";

const ResetPassword = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [username, setUsername] = useState("");

    const restPasswordClick = () => {
        setOpenDialog(true);
    };

    const resetPasswordHandler = () => {

    };
    return (
        <>
            <div className="flex flex-col items-center pt-20">
                <h2 className="font-semibold text-2xl lg:text-4xl pb-3">
                    Let's find your Outfitty account
                </h2>
                <p className="pb-5 text-gray-600 font-semibold">
                    What's your email, name, or username?
                </p>
                <div className="flex flex-row gap-x-3">
                    <div className="w-72 2xl:w-full flex items-center py-2 px-3 gap-2 rounded-full border-b border border-gray-200">
                        <MdOutlineSearch className="text-gray-800 text-xl" />
                        <input
                            value={username}
                            type="text"
                            name="username"
                            placeholder="Search"
                            className=" flex-1 outline-none bg-transparent placeholder:text-gray-800"
                            onChange={(e) => setUsername(e.target.value)} 

                        />
                    </div>
                    <button
                        className="bg-[#FF5757] font-semibold text-white rounded-full py-2 px-4"
                        onClick={restPasswordClick}
                    >
                        Search
                    </button>
                </div>
            </div>
            <ModalResetPassword
                open={openDialog}
                setOpen={setOpenDialog}
                onClick={resetPasswordHandler}
                setUsername={setUsername}

            />
        </>
    );
};

export default ResetPassword;
