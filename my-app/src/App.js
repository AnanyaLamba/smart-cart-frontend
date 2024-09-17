import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Components/pages/Shop";
import ShopCategory from "./Components/pages/ShopCategory";
import LoginSignup from "./Components/pages/LoginSignup";
import Cart from "./Components/pages/Cart";
import Contact from "./Components/pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/men" element={<ShopCategory category="Men" />}></Route>
          <Route
            path="/women"
            element={<ShopCategory category="Women" />}
          ></Route>
          <Route
            path="/kids"
            element={<ShopCategory category="Kids" />}
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        
      </Router>
      <div className="content">
        <h3>Welcome to the smart cart</h3>
      </div>
      < Footer/>
    </div>
  );
}

export default App;
