import React from 'react'
import { Link } from "react-router-dom";

const Layout = ({children}) => {
    return (
      <div>
        <div>
          <Link to="/cart">Cart</Link>
        </div>
        <nav>
          <Link to="/browse">Browse Items</Link>
          <Link to="/tank-builder">Tank Builder</Link>
          <Link to="/completed-builds">Completed Builds</Link>
          <Link to="/new">New to Aquascaping</Link>
        </nav>
        <main>{children}</main>
      </div>
    );
}

export default Layout;
