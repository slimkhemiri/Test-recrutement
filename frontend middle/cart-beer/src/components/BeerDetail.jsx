import { motion } from "framer-motion";
const BeerDetail = ({ selectedBeer }) => {
  return (
    <div>
      {selectedBeer?.map((beer) => (
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

          <div className="beer-volume">{beer.description}</div>
        </div>
      ))}
    </div>
  );
};

export default BeerDetail;
