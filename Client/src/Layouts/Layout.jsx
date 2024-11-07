import { Outlet } from "react-router-dom"
import NavBar from "../Components/NavBar"

export const Layout = () => {
    return (
        <>
            <div className='w-full h-screen flex flex-col md:flex-row'>

                <div className='flex-1 overflow-y-auto'>
                    <NavBar />
                    <div className='p-4 2xl:px-10'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>)
}
