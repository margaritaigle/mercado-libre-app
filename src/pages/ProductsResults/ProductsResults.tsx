import { useState, useEffect } from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { fetchData } from "../../api/api";
import { URLS } from "../../api/urls";
import { useLocation } from "react-router-dom";
import { IProductData } from "./ProductResults.interface";

export const ProductsResults = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const [productsData, setProductsData] = useState<IProductData[]>([]);

  useEffect(() => {
    const url = URLS.GET_PRODUCTS_LIST.replace(
      ":query",
      searchParams.toString()
    );
    fetchData(url).then((data) => {
      setProductsData(data.results);
    });
  }, [search.toString()]);

  return (
    <>
      {productsData?.map((productData: IProductData) => (
        <ProductCard productData={productData} key={productData?.id} />
      ))}
    </>
  );
};
