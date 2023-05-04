import { Result } from "../../pages/ProductsResults/ProductResults.interface";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

export const ProductCard = ({ productData }: { productData: Result }) => {
  if (!productData) return <></>;
  const { thumbnail, currency_id, id, address, title, price } = productData;
  return (
    <div className="product-card-container">
      <img src={thumbnail} alt={title} width={120} />
      <section>
        <span>
          <Link to={`./${id}`}>
            {currency_id === "UYU" ? "$" : "U$S"}{" "}
            {Math.round(price).toLocaleString("es-UY")}
          </Link>
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
