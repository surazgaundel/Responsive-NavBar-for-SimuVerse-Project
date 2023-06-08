import {useState, useEffect} from 'react'
import  Logo from '../assets/Logo.svg';
import  MobileLogo from '../assets/MobileLogo.svg';
import Search from '../assets/search.svg'
import shoppingBag from '../assets/shoppingBag.svg'
import user from '../assets/user.svg'
import wishlist from '../assets/wishlist.svg'
import { NavLink } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import Links from '../DataTab.js';

export default function NavBar() {
    // const [burgerClass,setBurgerClass]=useState('burger-bar unclicked')
    // const [menuClass,setMenuClass]=useState('menu hidden');
    // const [isMenuClicked, setIsMenuClicked] = useState(false)


    // const updateMenu = () => {
    //     if(!isMenuClicked) {
    //         setBurgerClass("burger-bar clicked")
    //         setMenuClass("menu visible")
    //     }
    //     else {
    //         setBurgerClass("burger-bar unclicked")
    //         setMenuClass("menu hidden")
    //     }
    //     setIsMenuClicked(!isMenuClicked)
    // }


  return (
   <nav className="navbar-container">
        <div className="header-container">
            <div className="logo-container">
                <NavLink to='/'>
                <img src={Logo} alt='logo'/>
                </NavLink>
            </div>
            <div className="burger-container">
                <GiHamburgerMenu/>
            </div>
            <div className='tabs-container'>
                {Links.map((link,index)=>{
                    return( <NavLink key={index} to={link.to} className='link'>{link.name}</NavLink>)
                })}
            </div>
            <div className='symbol-user-container'>
            <div className='symbol-container'>
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

