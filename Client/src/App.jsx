import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './Layouts/Layout'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Order from './Pages/Order'
import { Signin } from './Pages/Signin'
import { Toaster } from 'sonner'
import Login from './Pages/Login'
import ResetPassword from './Pages/ResetPassword'
import Profile from './Pages/Profile'



function App() {

  return (
    <>
      <main className='w-full min-h-screen bg-white'>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/order" element={<Order />} />
            <Route path='/log-in' element={<Login />} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='/sign-in' element={<Signin />} />
            <Route path='/reset-password' element={<ResetPassword />} />

            {/* <Route path='/terms-of-service' element={< />} /> */}
            {/* <Route path='/privacy-policy' element={< />} /> */}
          </Route>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Toaster richColors />

      </main>
    </>
  )
}

export default App
