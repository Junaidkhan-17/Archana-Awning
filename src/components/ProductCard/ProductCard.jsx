import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ title, image, description }) => {
  return (
    <article className="product-card card-surface" data-aos="zoom-in-up">
      <div className="product-image-wrap">
        <img src={image} alt={title} />
        <div className="product-overlay">
          <Link className="btn btn-brand btn-sm" to="/contact">Enquire Now</Link>
        </div>
      </div>
      <div className="p-4">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default ProductCard;
