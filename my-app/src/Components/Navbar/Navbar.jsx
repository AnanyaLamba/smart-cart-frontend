import "./Navbar.css";

import { useState } from "react";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

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
          Shop All {menu === "shopAll" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shopMen");
          }}
        >
          Shop Men {menu === "shopMen" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shopWomen");
          }}
        >
          Shop Women {menu === "shopWomen" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shopKids");
          }}
        >
          Shop kids {menu === "shopKids" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Contact");
          }}
        >
          Contact {menu === "Contact" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="actions">
        <button class="sign_in_button">Sign In</button>
        <img src={cart_icon} alt="cart_icon" className="cart_icon" />
        <div className="count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
