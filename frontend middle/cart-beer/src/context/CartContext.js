import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [selectedBeer, setSelectedBeer] = useState(null);
  /**
   * La fonction addToCart prend un objet beer comme argument et l'ajoute au tableau cart.
   * @param beer - l'objet bière qui est ajouté au panier
   */
  const addToCart = (beer) => {
    setCart([...cart, beer]);
  };
  /**
   * Retirez la bière du chariot si l'identifiant de la bière n'est pas égal à l'identifiant de la bière
   * dans le chariot.
   * @param beer - l'objet bière qui est retiré du panier
   */
  const removeFromCart = (beer) => {
    setCart(cart.filter((b) => b.id !== beer.id));
  };

  /* Renvoie le CartContext.Provider avec la valeur de cart, addToCart, removeFromCart,setSelectedBeer,
selectedBeer. */
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, setSelectedBeer, selectedBeer }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
