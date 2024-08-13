import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeDashboard from "./Components/Pages/HomeDashboard";
import AddProductPage from "./Components/Pages/AddProductPage";
import ProductsList from "./Components/Pages/ProductsList";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/addProduct" element={<AddProductPage />} />
        <Route path="/productsList" element={<ProductsList />} />
      </Routes>
    </Router>
  );
}

export default App;
