import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import useBeers from "../hooks/useBeers";
import { motion } from "framer-motion";
import "./BeerCart.css";
import BeerDetail from "./BeerDetail";

const BeersList = (props) => {
  const { beers } = useBeers(props.page, props.perPage);

/* Déstructuration du panier, addToCart, selectedBeer et setSelectedBeer du CartContext. */
  const { addToCart, selectedBeer, setSelectedBeer } =
    useContext(CartContext);

/**
 * Lorsque l'utilisateur clique sur le bouton, l'objet bière est transmis à la fonction addToCart.
 */
  const handleOrder = (beer) => {
    addToCart(beer);
  };

 /**
  * Lorsque l'utilisateur clique sur un produit, récupérez les détails du produit à partir de l'API et
  * affichez-les.
  */
  const handleShowProduct = (id) => {
    fetchBeerById(id);
  };

/**
 * Lorsque l'utilisateur clique sur une bière, récupère la bière par son identifiant et définit la
 * bière sélectionnée sur la bière sur laquelle il a cliqué.
 */
  const fetchBeerById = async (id) => {
    try {
      const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
      const data = await response.json();
      setSelectedBeer(data);
      console.log(data[0]);
      console.log(selectedBeer);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {selectedBeer ? (
        <BeerDetail selectedBeer={selectedBeer} />
      ) : (
        <div className="beer-list">
          {beers?.map((beer) => (
            <div key={beer.id} className="beer-item">
              <h1 className="beer-name">{beer.name}</h1>
              <motion.img
                className="beer-image"
                src={beer.image_url}
                alt={beer.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                onClick={() => handleShowProduct(beer.id)}
              />
              <div className="beer-volume">
                {beer.volume.value}
                {beer.volume.unit}
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => handleOrder(beer)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BeersList;
