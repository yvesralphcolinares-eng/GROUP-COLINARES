import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import Loader from "./loader";
import "./act4.css";

function Activity4() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError ] = useState(false);

  const API_URL = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
  fetch(API_URL)
    .then((res) => {
      if (!res.ok) throw new Error("Network error");
      return res.json();
    })
    .then((data) => {
      setLoading(true);
      setCharacters(data.results)/';[p----00';
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setError(true);
      setLoading(false);
    });
}, []);

  return (
  <div className="activity4">
    <h1>Rick and Morty Characters</h1>

    {error && <div className="error">No internet connection or failed to load data</div>}

    {loading && !error ? (
      <Loader /> 
    ) : (
      <div className="grid">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    )}
  </div>
);
}

export default Activity4;