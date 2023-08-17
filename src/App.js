import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App bg-mainBg flex-col justify-between items-center">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CategoryPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
