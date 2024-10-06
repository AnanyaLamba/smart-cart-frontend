import "./Breadcrum.css";
import arrow_icon from "../Assets/Breadcrum/breadcrum_arrow.png";
import { Link } from "react-router-dom";

const Breadcrum = ({product}) => {
    return ( 
        <div className="breadcrum">
            <Link to="/">HOME</Link>
            <img src={arrow_icon} alt="arrow" />
           <Link to={`/${product.category.toLowerCase()}`}>{product.category.toUpperCase()}</Link>
            <img src={arrow_icon} alt="arrow" />
            <span>{product.name}</span>
        </div>
     );
}
 
export default Breadcrum;
