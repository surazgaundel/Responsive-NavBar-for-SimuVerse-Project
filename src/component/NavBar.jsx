import {useState} from 'react'
import  Logo from '../assets/Logo.svg';
import  MobileLogo from '../assets/MobileLogo.svg';
import Search from '../assets/search.svg'
import shoppingBag from '../assets/shoppingBag.svg'
import user from '../assets/user.svg'
import wishlist from '../assets/wishlist.svg'
import { NavLink } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import {RxCross2} from 'react-icons/rx';
import Links from '../DataTab.js';

export default function NavBar() {
    const [isOpen, setOpen]=useState(false);

    const openBarMenu=()=>{
        setOpen(true);
        console.log(true)
    }
    const closeBarMenu=()=>{
        setOpen(false);
        console.log(false)
    }
  return (
   <nav className="navbar-container">
        <div className="header-container">
            <div className="logo-container">
                <NavLink to='/'>
                <img src={Logo} alt='logo' className='web-logo'/>
                <img src={MobileLogo} alt='logo' className='mobile-logo'/>
                </NavLink>
            </div>
            <button className={`burger-container ${isOpen?'isOpen':''}`} onClick={openBarMenu}>
                <GiHamburgerMenu/>
            </button>

            <div className={`tabs-container ${isOpen?'isOpen':''}`}>
                <button className="cross-container" onClick={closeBarMenu}>
                    <RxCross2/>
                </button>
                {Links.map((link,index)=>{
                    return( <NavLink key={index} to={link.to} className='link'>{link.name}</NavLink>)
                })}
            </div>
            <div className='symbol-user-container'>
            <div className={`symbol-container ${isOpen?'isOpen':''}`}>
                <div><NavLink to='/search'><img src={Search} alt='search-button'/></NavLink></div><div className='vertical-line'></div>
                <div><NavLink to='/wishlist'><img src={wishlist} alt='wishlist-button'/></NavLink></div><div className='vertical-line'></div>
                <div><NavLink to='/cart'><img src={shoppingBag} alt='shoppingBag-button'/></NavLink></div><div className='vertical-line'></div>
                <div><NavLink to='/account'><img src={user} alt='user-button'/></NavLink></div>
            </div>
            <div className='user-button'><NavLink to='/login'>SignUp / LogIn</NavLink></div>
            </div> 
        </div>
   </nav>
  )
}

