import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef } from 'react';
const ModalWrapper = ({ open, setOpen, children }) => {
    const cancelButtonRef = useRef(null);
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className='relative z-10 w-full'
                initialFocus={cancelButtonRef}
                onClose={() => setOpen(false)}
            >
                <Transition.Child
                    as={Fragment}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-60 transition-opacity"></div>
                </Transition.Child>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
                    <div className="flex h-full items-center justify-center p-4 text-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0">
                            <Dialog.Panel
                                className='w-full max-w-xl relative transform overflow-hidden rounded-lg bg-white '
                            >
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="w-full mt-3 sm:ml-4 sm:mt-0 sm:text-left">{children}</div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default ModalWrapper