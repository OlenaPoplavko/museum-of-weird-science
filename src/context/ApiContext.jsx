import React, { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [fact, setFact] = useLocalStorage("lastFact", null);
  const [loading, setLoading] = useState(fact === null);
  const [error, setError] = useState(null);

  function getFact() {
    setLoading(true);
    setFact(null);

    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setFact(data.text);
        localStorage.setItem("lastFact", data.text);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
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
