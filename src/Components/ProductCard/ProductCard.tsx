import { IProductData } from "../../pages/ProductsResults/ProductResults.interface";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

export const ProductCard = ({ productData }: { productData: IProductData }) => {
  return (
    <div className="product-card-container">
      <img src={productData?.thumbnail} />
      <section>
        <span>
          <Link to={`./${productData?.id}`}>
            {productData?.currency_id === "UYU" ? "$" : "U$S"}{" "}
            {Math.round(productData?.price).toLocaleString()}
          </Link>
        </span>
        <p>
          <Link to={`./${productData?.id}`}>{productData?.title}</Link>
        </p>
      </section>
      <span className="city">{productData?.address.state_name}</span>
      <hr />
    </div>
  );
};
