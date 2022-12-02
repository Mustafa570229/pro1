import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./components/PokemonList";
import Button from "react-bootstrap/Button";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setloading] = useState(true);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  useEffect(() => {
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((response) => {
        setPokemon(response.data.results.map((p) => p.name));
        setNextPageUrl(response.data.next);
        setPrevPageUrl(response.data.previous);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
    return () => {
      cancel();
    };
  }, [currentPageUrl]);

  const prevFun = () => {
    setCurrentPageUrl(prevPageUrl);
  };
  const nextFun = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  if (loading)
    return (
      <h3 style={{ color: "red" }} h1>
        loading...
      </h3>
    );
  return (
    <>
      <PokemonList pokemon={pokemon} />
      {prevPageUrl && (
        <Button onClick={prevPageUrl ? prevFun : null}>prev</Button>
      )}

      <Button
        style={{ opacity: nextPageUrl ? "1" : "0", marginLeft: "20px" }}
        onClick={nextPageUrl ? nextFun : null}
      >
        next
      </Button>
    </>
  );
};

export default App;
