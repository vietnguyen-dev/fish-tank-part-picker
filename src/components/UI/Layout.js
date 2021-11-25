import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/fish-3-48.png'
import CartImg from '../assets/cart.png'

const Layout = ({children, layoutClass}) => {
    return (
      <>
        <div className="top-head main-container">
          <img src={Logo} alt="logo" />
          <h1>FT Part Picker</h1>
          <div className="cart-container">
            <Link to="/log-in">log in</Link>
            <h3>|</h3>
            <Link to="/cart">
              <img src={CartImg} alt="link to cart" />
            </Link>
          </div>
        </div>
        <nav className="mid-head main-container">
          <Link to="/new" className="main-nav-link">
            New to Aquascaping?
          </Link>
          <Link to="/tank-builder" className="main-nav-link">
            Tank Builder
          </Link>
          <Link to="/browse" className="main-nav-link">
            Browse Items
          </Link>
          <Link to="/completed-builds" className="main-nav-link">
            Completed Builds
          </Link>
        </nav>
        <main className={`main-container ${layoutClass}`}>{children}</main>
      </>
    );
}

export default Layout;
