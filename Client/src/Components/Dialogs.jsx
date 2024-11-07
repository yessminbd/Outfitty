import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import { MdClose, MdEmail, MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import ModalWrapper from "./ModalWrapper";





export function ModalResetPassword({ open, setOpen, onClick = () => { }, setUsername }) {
    const closeDialog = () => {
        setOpen(false);
        setUsername("")

    };

    return (
        <ModalWrapper open={open} setOpen={closeDialog} >
            <div className="py-4 w-full flex flex-col gap-4 items-center justify-center">
                <Dialog.Title as="h3">
                    <p className={clsx(
                        "p-3",
                    )}>
                        <MdEmail size={60} className=" text-gray-700" /></p>
                </Dialog.Title>

                <p className="text-center text-lg text-gray-700 ">
                    Email sent !<br />If this addres is associated with a Outfitty account, you'll be able to reset your password.</p>              <div className="bg-gray-50 py-3  sm:flex sm:flex-row-reverse gap-4">
                    <Link to={'/reset-password'}
                        className={clsx("px-8 py-2 l2 rounded-full mr-3 font-semibold text-white ", 'bg-[#FF5757] hover:bg-[#f16868]')}
                        onClick={() => closeDialog()}                    >Try again</Link>

                    <Link to={'/log-in'}
                        label='Back to login'
                        className='bg-gray-700  py-2 px-5 rounded-full  font-semibold text-white hover:bg-gray-600  sm:w-auto'
                        onClick={() => closeDialog()}
                    >Back to login</Link>
                </div>
            </div>
        </ModalWrapper>
    )
}

export function ModalEditProfile({ open, setOpen, }) {
    const closeDialog = () => {
        setOpen(false);

    };

    return (
        <ModalWrapper open={open} setOpen={closeDialog} >
            <div className="py-4 w-full flex flex-col gap-4 items-center justify-center">
                <Dialog.Title as="h3">
                    <p className={clsx(
                        "p-3",
                    )}>
                        <MdVerified size={60} className=" text-green-700" /></p>
                </Dialog.Title>

                <p className="text-center text-lg text-gray-700 ">
                    Your information has been successfully updated   </p>
                <button className="absolute top-4 right-4 text-gray-700" onClick={closeDialog}>
                    <MdClose size={18} />
                </button>
            </div>
        </ModalWrapper>
    )
}

