import "./Navbar.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../Assets/logo.png/logo.png";
import cart_icon from "../Assets/cart_icon.png/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="cart logo" className="logo" />
        <h1 className="title">Smart Cart</h1>
      </div>

      <ul>
        <li
          onClick={() => {
            setMenu("shopAll");
          }}
        >
          <Link to="/" >Shop All</Link>
          {menu === "shopAll" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shopMen");
          }}
        >
          <Link to="/men" > Shop Men</Link>
          {menu === "shopMen" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shopWomen");
          }}
        >
          <Link to="/women" >Shop Women</Link>
          {menu === "shopWomen" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shopKids");
          }}
        >
          <Link to="/kid" >Shop kids</Link>
          {menu === "shopKids" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Contact");
          }}
        >
          <Link to="/contact" >Contact</Link>
          {menu === "Contact" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="actions">
        <Link to="/login" ><button className="sign_in_button">Sign In</button></Link>
        <Link to= "/cart"><img src={cart_icon} alt="cart_icon" className="cart_icon" /></Link>
        <div className="count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
