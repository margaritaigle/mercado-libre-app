import { Result } from "../../pages/ProductsResults/ProductResults.interface";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
import ShippingIcon from "../../assets/ic_shipping.png";

export const ProductCard = ({ productData }: { productData: Result }) => {
  const { thumbnail, currency_id, id, address, title, price, shipping } =
    productData || {};
  return (
    <div className="product-card-container">
      <Link to={`./${id}`}>
        <img src={thumbnail} alt={title} width={120} />
      </Link>
      <section>
        <span>
          <Link to={`./${id}`}>
            {currency_id === "UYU" ? "$" : "U$S"}{" "}
            {Math.round(price).toLocaleString("es-UY")}
          </Link>
          {shipping.free_shipping && (
            <img src={ShippingIcon} alt="free-shipping" />
          )}
        </span>
        <p>
          <Link to={`./${id}`}>{title}</Link>
        </p>
      </section>
      <span className="city">{address.state_name}</span>
      <hr />
    </div>
  );
};
