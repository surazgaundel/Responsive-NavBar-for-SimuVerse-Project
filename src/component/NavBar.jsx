import {useState, useEffect} from 'react'
import  Logo from '../assets/Logo.svg';
import  MobileLogo from '../assets/MobileLogo.svg';
import Search from '../assets/search.svg'
import shoppingBag from '../assets/shoppingBag.svg'
import user from '../assets/user.svg'
import wishlist from '../assets/wishlist.svg'

export default function NavBar() {
    const [burgerClass,setBurgerClass]=useState('burger-bar unclicked')
    const [menuClass,setMenuClass]=useState('menu hidden');
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', setWindowWidth(window.innerWidth));
        return () => {
          window.removeEventListener('resize', setWindowWidth(window.innerWidth))
        }
      }, [windowWidth])

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    console.log(windowWidth.target.innerWidth);

  return (
   <nav className="navbar-container">
        <div className="header-container">
            <div className="logo-container">
                <img src={windowWidth.target.innerWidth<='600'?MobileLogo : Logo} alt='logo'/>
            </div>
            <div className="burger-container" onClick={updateMenu}>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
            </div>
            <div className= {`tabs-container ${menuClass}`}>
                <div>Home</div>
                <div>Store</div>
                <div>Contact</div>
                <div>Seller</div>
                <div>Avatar</div>
            </div>
            <div className='symbol-container'>
                <img src={Search} alt='search-button'/><div className='vertical-line'></div>
                <img src={wishlist} alt='wishlist-button'/><div className='vertical-line'></div>
                <img src={shoppingBag} alt='shoppingBag-button'/><div className='vertical-line'></div>
                <img src={user} alt='user-button'/>
            </div>
            <div className='user-button'>{windowWidth.target.innerWidth<=600?'Log In':'SignUp / LogIn'}</div>
        </div>
   </nav>
  )
}

