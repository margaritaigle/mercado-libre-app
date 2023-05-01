import "./ProductCard.scss";
import { Link } from "react-router-dom";

export const ProductCard = ({ productData }: { productData: any }) => {
  return (
    <div className="product-card-container">
      <img src={productData?.thumbnail} />
      <section>
        <span>
          <Link to={`./${productData?.id}`}>
            $ {Math.round(productData?.price).toLocaleString()}
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
