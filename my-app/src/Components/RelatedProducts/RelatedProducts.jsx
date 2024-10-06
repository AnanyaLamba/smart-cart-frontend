import "./RelatedProducts.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Item from "../item/Item";


function getRelatedProductsForCategory(category , products){
    const category_products = products.filter(product => product.category === category );
    console.log("category_products ",category_products); //empty category
    const related_products = [];
    const related_products_id = [];
    while(related_products.length < 4 && category_products.length>0){
        const random_product_data = category_products[Math.floor(Math.random()* category_products.length)];
        if(!related_products_id.includes(random_product_data.id)){
            related_products.push(random_product_data);
            related_products_id.push(random_product_data.id);
        }
    }

    return related_products;
}


const ProductDisplay = ({category}) => {
    const products = useContext(ShopContext);
    const related_product_data = getRelatedProductsForCategory(category , products);
    // console.log(category)
    return ( 
        <div className="relatedproducts">
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-items">
            {
                related_product_data.map(products => {
                    return <Item key={products.id} itemInfo={products} />
                })
            }
        </div>
    </div>
     );
}
 
export default ProductDisplay;