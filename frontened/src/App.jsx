import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import AboutHDX from './pages/AboutHDX'
import Contact from './pages/Contact'
import Account from './pages/Account'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Seller from './pages/Seller'
import User from './pages/User'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
         {/* Defining the routes  */}
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/AllProducts' element={<AllProducts/>} />
            <Route path='/About' element={<AboutHDX/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/Account' element={<Account/>}/>
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/product/:id' element={<Product/>} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/placeOrder' element={<PlaceOrder/>} />
            <Route path='/seller' element={<Seller/>} />
            <Route path='/user' element={<User/>}/>
        </Routes>
    </div>
  )
}

export default App
