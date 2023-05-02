import { useState, useEffect } from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { fetchData } from "../../api/api";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { URLS } from "../../api/urls";
import { useLocation } from "react-router-dom";

export const ProductsResults = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const [productsData, setProductsData] = useState<any>([]);

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
      <SearchBox />
      {productsData?.map((productData: any) => (
        <ProductCard productData={productData} key={productData?.id} />
      ))}
    </>
  );
};
