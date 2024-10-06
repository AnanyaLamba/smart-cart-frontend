import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";


import Breadcrumb from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts"
const Product = () => {
  const { id } = useParams();
  const all_products = useContext(ShopContext);
  const product = all_products.find((product) => product.id === Number(id));
  console.log(product);
  return (
    <div>
      
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts category={product.category}/>
    </div>
  );
};

export default Product;
