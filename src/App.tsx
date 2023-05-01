import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ProductsResults } from "./pages/ProductsResults";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBox />} />
        <Route path="items" element={<ProductsResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
