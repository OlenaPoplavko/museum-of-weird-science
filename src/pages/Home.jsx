import { useState, useEffect } from "react";

function Home() {
  const [fact, setFact] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    getFact();
  }, []);

  function getFact() {
    setFact(null);
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
      .then((response) => response.json())
      .then((data) => setFact(data.text));
  }
  function addToFavorites() {
    if (fact && !favorites.includes(fact)) {
      setFavorites([...favorites, fact]);
    }
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <div>
      <h2>Weird Science Fact</h2>
      <p>Did you know?</p>
      {fact ? <p>{fact}</p> : <p>Loading...</p>}
      <button onClick={getFact}>Get Random Fact</button>
      {fact && !favorites.includes(fact) && (
        <button onClick={addToFavorites}>Save to Favorites</button>
      )}
    </div>
  );
}

export default Home;
