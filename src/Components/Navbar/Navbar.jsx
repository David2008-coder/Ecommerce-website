import React, {useContext, useState } from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>

      <div className="nav-hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-menu ${mobileMenuOpen ? "nav-menu-mobile" : ""}`}>
        <li onClick={()=>{setMenu("shop"); setMobileMenuOpen(false)}}>
          <Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>
          {menu==="shop"?<hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("mens"); setMobileMenuOpen(false)}}>
          <Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>
          {menu==="mens"?<hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("womens"); setMobileMenuOpen(false)}}>
          <Link to='/womens' style={{ textDecoration: 'none' }}>Womens</Link>
          {menu==="womens"?<hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu("kids"); setMobileMenuOpen(false)}}>
          <Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link>
          {menu==="kids"?<hr/>:<></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
