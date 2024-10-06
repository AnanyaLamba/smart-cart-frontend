import "./Trending.css";
import {data_women_array} from "../Assets/data_trending_product";
import Item from "../item/Item";

const Trending = () => {
    return ( 
        <div className="trending">
        <h1>TRENDING IN WOMEN</h1>
        <hr />
        <div className="trending-item">
            {data_women_array.map((item, i) => {
                return <Item itemInfo={item} key={i} />
            }
            )}
        </div>

    </div>
     );
}
 
export default Trending;