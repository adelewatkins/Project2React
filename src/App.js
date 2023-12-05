import "./App.css";
import Sellers from "./Components/Sellers";
import PropertiesToLet from "./Components/PropertiesToLet";
import Buyers from "./Components/Buyers";
import PropertiesForSale from "./Components/PropertiesForSale";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Buyers">Buyers</Link>
        <Link to="/Sellers">Sellers</Link>
        <Link to="/PropertiesForSale">For sale</Link>
        <Link to="/PropertiesToLet">To let</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sellers" element={<Sellers />} />
        <Route path="/Buyers" element={<Buyers />} />
        <Route path="/PropertiesForSale" element={<PropertiesForSale />} />
        <Route path="/PropertiesToLet" element={<PropertiesToLet />} />
      </Routes>
    </Router>
  );
}
export default App;
