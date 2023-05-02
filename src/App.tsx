import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ProductsResults } from "./pages/ProductsResults/ProductsResults";
import { ProductDescription } from "./pages/ProductDetails/ProductDetails";
import "../index.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBox />} />
        <Route path="items" element={<ProductsResults />} />
        <Route path="items/:id" element={<ProductDescription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
