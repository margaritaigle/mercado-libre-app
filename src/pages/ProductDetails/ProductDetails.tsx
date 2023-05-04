import { useEffect, useState } from "react";
import { URLS } from "../../api/urls";
import { fetchData } from "../../api/api";
import { useParams } from "react-router-dom";
import "./ProductDetails.scss";
import {
  IProductDescription,
  IProductDetail,
} from "./ProductDetails.interface";
import { IPathFromRoot } from "../../components/Breadcrumb/Breadcrumb.interface";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";

export const ProductDetail = () => {
  const [productDetails, setProductDetails] = useState<IProductDetail>();
  const [productDescription, setProductDescription] =
    useState<IProductDescription>();
  const [pathFromRoot, setPathFromRoot] = useState<IPathFromRoot[]>();

  const { pictures, condition, sold_quantity, title, currency_id, price } =
    productDetails || {};

  const { id } = useParams();
  useEffect(() => {
    const productID = id || "";

    const urlProductDetails = URLS.GET_PRODUCT_DETAILS.replace(
      ":id",
      productID
    );
    const urlProductDescription = URLS.GET_PRODUCT_DESCRIPTION.replace(
      ":id",
      productID
    );

    Promise.all([
      fetchData(urlProductDetails),
      fetchData(urlProductDescription),
    ]).then(([productDetailsData, productDescriptionData]) => {
      setProductDetails(productDetailsData);
      setProductDescription(productDescriptionData);

      const urlProductPathFromRoot = URLS.GET_PRODUCT_PATH_FROM_ROOT.replace(
        ":id",
        productDetailsData.category_id
      );
      fetchData(urlProductPathFromRoot).then((data) =>
        setPathFromRoot(data.path_from_root)
      );
    });
  }, []);

  return (
    <div className="product-wrapper">
      {productDetails && productDescription && (
        <>
          <Breadcrumb pathsFromRoot={pathFromRoot} />
          <div className="product-content">
            <section className="product-description-container">
              <img src={pictures && pictures[0].url} alt={title} />

              <h2>
                {productDescription?.plain_text && "Descripción del producto"}
              </h2>
              <p>{productDescription?.plain_text}</p>
            </section>
            <section className="product-details-container">
              <span>
                {`${
                  condition === "new" ? "Nuevo" : "Usado"
                } - ${sold_quantity} vendidos`}
              </span>
              <h3>{title}</h3>
              <h1>
                {currency_id} {Math.round(price || 0).toLocaleString()}
              </h1>
              <button>Comprar</button>
            </section>
          </div>
        </>
      )}
    </div>
  );
};
