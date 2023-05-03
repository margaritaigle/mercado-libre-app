import { useEffect, useState } from "react";
import { URLS } from "../../api/urls";
import { fetchData } from "../../api/api";
import { useParams } from "react-router-dom";
import "./ProductDetails.scss";
import {
  IProductDescription,
  IProductDetail,
} from "./ProductDetails.interface";

export const ProductDescription = () => {
  const [productDetails, setProductDetails] = useState<IProductDetail>();
  const [productDescription, setProductDescription] =
    useState<IProductDescription>();

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
      <div className="product-container">
        <section className="product-description-container">
          <img src={productDetails?.pictures[0].url} />

          <h2>Descripción del producto</h2>
          <p>{productDescription?.plain_text}</p>
        </section>
        <section className="product-details-container">
          <span>
            {`${productDetails?.condition === "new" ? "Nuevo" : "Usado"} - ${
              productDetails?.sold_quantity
            } vendidos`}
          </span>
          <h3>{productDetails?.title}</h3>
          <h1>
            {productDetails?.currency_id}{" "}
            {Math.round(productDetails?.price || 0).toLocaleString()}
          </h1>
          <button>Comprar</button>
        </section>
      </div>
    </>
  );
};
