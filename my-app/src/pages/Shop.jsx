import Hero from "../Components/Hero/Hero";
import Trending from "../Components/Trending/Trending";
import Offers from "../Components/Offers/Offers";
import NewCollection from "../Components/NewCollection/NewCollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const shop = () => {
    return ( 
        <div>
            <Hero />
            <Trending />
            <Offers />
            <NewCollection />
            <NewsLetter />
            
        </div>
     );
}
 
export default shop;
