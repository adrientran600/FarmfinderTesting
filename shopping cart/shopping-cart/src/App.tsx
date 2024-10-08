import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FarmFinderHeader } from "./components/farmfinderheader";
import { MenuBar } from "./components/menubar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";

function App() {
  return (
    <div className="App">
      <Router>
        <FarmFinderHeader />
        <MenuBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
