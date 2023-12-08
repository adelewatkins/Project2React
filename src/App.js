import "./App.css";
import Sellers from "./Components/Sellers/Sellers";
import PropertiesToLet from "./Components/Let/PropertiesToLet";
import Buyers from "./Components/Buyers/Buyers";
import PropertiesForSale from "./Components/Sale/PropertiesForSale";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import BuyersPT from "./Components/Buyers/BuyersPT";
import SellersPT from "./Components/Sellers/SellersPT";
import PropertiesToLetPT from "./Components/Let/PropertiesToLetPT";
import PropertiesForSalePT from "./Components/Sale/PropertiesForSalePT";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";


function App  ()  {
  return (
    <header>
      <Router>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWK7j0tDuQySJtiFoaacxBtjj8uIf-LSU9Q&usqp=CAU" alt= "Logo" width="80%px" height="80%px" class= "d-inline-block align-text-middle"/>  </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Buyers">Buyers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Sellers">Sellers</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button onClick" data-bs-toggle="dropdown" aria-expanded="false">
            Properties
            </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="/PropertiesToLet">To Let</a>
            <a class="dropdown-item" href="/PropertiesForSale">For Sale</a>
          </div>
        </li> 
        <li class="nav-item dropdown">        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">          Dropdown        </a>        <div class="dropdown-menu" aria-labelledby="navbarDropdown">          <a class="dropdown-item" href="#">Action</a>          <a class="dropdown-item" href="#">Another action</a>          <div class="dropdown-divider"></div>          <a class="dropdown-item" href="#">Something else here</a>        </div>
      </li>     
      </ul>
    </div>
  </div>
</nav>
        
        
        
        
        
        
        {/* class="navbar navbar-expand-lg bg-body-tertiary" >
          <div class= "container-fluid" >
            <a class="navbar-brand" href="/"> </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></button>
            </div>
            


          
          <Link to="/">Home</Link>
          <Link to="/Buyers">Buyers</Link>
          <Link to="/Sellers">Sellers</Link>
          <Link to="/PropertiesForSale">Sale</Link>
          <Link to="/PropertiesToLet">Let</Link> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sellers" element={<Sellers />} />
          <Route path="/Buyers" element={<Buyers />} />
          <Route path="/PropertiesForSale" element={<PropertiesForSale />} />
          <Route path="/PropertiesToLet" element={<PropertiesToLet />} />
        </Routes>
      </Router>
    </header>
  );
}
export default App;
