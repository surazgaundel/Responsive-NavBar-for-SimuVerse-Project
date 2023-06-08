import React from 'react'
import {Routes, Route, Router} from 'react-router-dom';
import NavBar from './component/NavBar'
import Home from './pages/Home';
import Store from './pages/Store';
import Contact from './pages/Contact';
import Seller from './pages/Seller';
import Avatar from './pages/Avatar';
import Search from './pages/Search';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Login from './pages/Login';

export default function RoutesPage() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/seller' element={<Seller/>}/>
        <Route path='/avatar' element={<Avatar/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}
