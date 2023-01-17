import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import "./BeerCart.css";
const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const handleRemove = (beer) => {
    removeFromCart(beer);
  };
  return (
    <div className="beer-list">
      {cart?.map((beer) => (
        <div key={beer.id} className="beer-item">
          <h1 className="beer-name">{beer.name}</h1>
          <motion.img
            className="beer-image"
            src={beer.image_url}
            alt={beer.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />
          <div className="beer-volume">
            {beer.volume.value}
            {beer.volume.unit}
          </div>
          <div className="beer-volume">{beer.description}</div>
          <button
            className="add-to-cart-button"
            onClick={() => handleRemove(beer)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
