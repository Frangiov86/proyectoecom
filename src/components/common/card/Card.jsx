import { Link } from "react-router-dom";
import "./Card.css";

export const Card = ({ title, price, stock, image, id }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h3>{price} U$S</h3>
      <h3>Stock: {stock}</h3>
      <Link to={`/itemDetail/${id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};
