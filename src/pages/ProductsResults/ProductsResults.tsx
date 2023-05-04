import { useState, useEffect } from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { fetchData } from "../../api/api";
import { URLS } from "../../api/urls";
import { useLocation } from "react-router-dom";
import { IProductData, Result } from "./ProductResults.interface";
import "./ProductResults.scss";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";

export const ProductsResults = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const [productsData, setProductsData] = useState<IProductData>();
  const getPathsFromRoot = () => {
    if (productsData?.filters.length)
      return productsData?.filters[0].values[0].path_from_root;
  };

  const pathsFromRoot = getPathsFromRoot();

  useEffect(() => {
    const url = URLS.GET_PRODUCTS_LIST.replace(
      ":query",
      searchParams.toString()
    );
    fetchData(url).then((data) => {
      setProductsData(data);
    });
  }, [search]);

  return (
    <div className="products-results-container">
      <Breadcrumb pathsFromRoot={pathsFromRoot} />
      {productsData?.results.map((productData: Result) => (
        <ProductCard productData={productData} key={productData?.id} />
      ))}
    </div>
  );
};
