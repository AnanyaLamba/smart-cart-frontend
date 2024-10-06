import "./Offers.css";
import offer_img from "../Assets/exclusive_image.png/exclusive_image.png";

const Offers = () => {
    return ( 
        <div className="offers">
            <div className="offers_left">
                <h1>Exclusive</h1>
                <h1>Only For You</h1>
                <p>ON THE BEST SELLERS</p>
                <button>Check 'em out</button>
            </div>

            <div className="offers_right">
                <img src={offer_img} alt="offer_image" />
            </div>
        </div>
     );
}
 
export default Offers;