import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import LoginSignup from "./pages/LoginSignup";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import men_banner from "./Components/Assets/banner/banner_men.png.png";
import women_banner from "./Components/Assets/banner/banner_women.png.png";
import kid_banner from "./Components/Assets/banner/banner_kid.png.png";
import Product from "./pages/Product";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product/:id" element={<Product />} ></Route>
          <Route path="/men" element={<ShopCategory category="Men" banner={men_banner} />}></Route>
          <Route
            path="/women"
            element={<ShopCategory category="Women" banner= {women_banner}/>}
          ></Route>
          <Route
            path="/kid"
            element={<ShopCategory category="Kid" banner={kid_banner} />}
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>

        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
