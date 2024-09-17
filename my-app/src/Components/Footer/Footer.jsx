import "./Footer.css";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pinterest_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import logo from "../Assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="logo" />
        <p>Smart Cart</p>
      </div>
      <ul>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="social_icon">
        <div className="footer_icon_container">
          <img src={instagram_icon} alt="insta" />
        </div>
        <div className="footer_icon_container">
          <img src={pinterest_icon} alt="pinterest" />
        </div>
        <div className="footer_icon_container">
          <img src={whatsapp_icon} alt="whatsapp" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>
          © 2023 by Smart Cart. All Rights Reserved. Proudly created by MIT
          Students
        </p>
      </div>
    </div>
  );
};

export default Footer;
