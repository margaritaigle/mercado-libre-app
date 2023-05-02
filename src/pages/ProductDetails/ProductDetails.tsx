import { useEffect, useState } from "react";
import { URLS } from "../../api/urls";
import { fetchData } from "../../api/api";
import { useParams } from "react-router-dom";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import "./ProductDetails.scss";

export const ProductDescription = () => {
  const [productDetails, setProductDetails] = useState<any>();
  const [productDescription, setProductDescription] = useState<any>();

  const { id } = useParams();
  useEffect(() => {
    const urlProductDetails = URLS.GET_PRODUCT_DETAILS.replace(":id", id || "");
    const urlProductDescription = URLS.GET_PRODUCT_DESCRIPTION.replace(
      ":id",
      id || ""
    );
    fetchData(urlProductDetails).then((data) => {
      setProductDetails(data);
    });
    fetchData(urlProductDescription).then((data) => {
      setProductDescription(data);
    });
  }, []);
  return (
    <>
      <SearchBox />
      <div className="product-container">
        <section className="product-description-container">
          <img src={productDetails?.pictures[0].url} />

          <h2>Descripción del producto</h2>
          <p>{productDescription?.plain_text}</p>
        </section>
        <section className="product-details-container">
          <span>
            {`${
              productDetails?.condition.charAt(0).toUpperCase() +
              productDetails?.condition.slice(1)
            } - ${productDetails?.sold_quantity} vendidos`}
          </span>
          <h3>{productDetails?.title}</h3>
          <h1>
            {productDetails?.currency_id}{" "}
            {Math.round(productDetails?.price).toLocaleString()}
          </h1>
          <button>Comprar</button>
        </section>
      </div>
    </>
  );
};
