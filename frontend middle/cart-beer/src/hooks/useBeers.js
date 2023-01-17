import { useEffect, useState } from "react";
const useBeers = (page, perPage) => {
  const [beers, setBeers] = useState([]);
/* Récupérer les données de l'API et définir l'état des bières sur les données. */
  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`)
      .then((res) => res.json())
      .then((data) => {
        setBeers(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, perPage]);

  return { beers };
};

export default useBeers;
