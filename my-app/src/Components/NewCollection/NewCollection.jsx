import "./NewCollection.css";
import { new_collection_array } from "../Assets/new_collections";
import Item from "../item/Item";

const NewCollection = () => {
    return ( 
        <div className="new_collection">
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className="new_collection_item">
            {
                new_collection_array.map((collection, i) => {
                    return <Item key={i} itemInfo={collection} />
                })
            }

        </div>

    </div>
     );
}
 
export default NewCollection;