import React, { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [fact, setFact] = useLocalStorage("lastFact", null);
  const [loading, setLoading] = useState(fact === null);
  const [error, setError] = useState(null);

  const allowedWords = [
    "animal",
    "insect",
    "mammal",
    "reptile",
    "fish",
    "bird",
    "plant",
    "tree",
    "leaf",
    "photosynthesis",
    "biology",
    "cell",
    "genetics",
    "organism",
    "evolution",
    "earth",
    "planet",
    "space",
    "universe",
    "galaxy",
    "moon",
    "sun",
    "gravity",
    "water",
    "ocean",
    "sea",
    "river",
    "lake",
    "physics",
    "chemistry",
    "atom",
    "molecule",
    "brain",
    "heart",
    "body",
    "bones",
    "teeth",
    "weather",
    "cloud",
    "lightning",
    "rain",
    "wind",
    "temperature",
    "science",
    "scientist",
    "experiment",
    "discovery",
  ];

  const isFactScientific = (text) => {
    const lower = text.toLowerCase();
    return allowedWords.some((word) => lower.includes(word));
  };

  async function getFact() {
    setLoading(true);
    setError(null);
    setFact(null);

    try {
      let cleanFact = null;
      while (!cleanFact) {
        const res = await fetch(
          "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
        );
        if (!res?.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (isFactScientific(data.text)) {
          cleanFact = data.text;
          setFact(cleanFact);
          localStorage.setItem("lastFact", cleanFact);
        }
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (fact === null) {
      getFact();
    }
  }, []);

  return (
    <ApiContext.Provider value={{ fact, loading, error, getFact }}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
