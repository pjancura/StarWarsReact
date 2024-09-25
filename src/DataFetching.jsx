import React, { useState, useEffect, useRef } from "react";
import { dataCleaner } from "./DataCleaner";

const BASE_URL = "https://swapi.dev/api/planets/";

export default function DataFetching() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);

      try {
        const response = await fetch(`${BASE_URL}?page=${page}`, {
          signal: abortControllerRef.current?.signal,
        });
        const data = await response.json();
        setPlanets(() => dataCleaner(data.results));
        setHasNextPage(data.next !== null);
      } catch (e) {
        if (e.name === "AbortError") {
          console.log("Fetch aborted");
          return;
        }
        setError(e);
        alert(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlanets();
  }, [page]);

  const handleNextPage = () => {
    if (hasNextPage) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong please refresh the page</div>;
  }

  return (
    <div>
      <h1>Planets Data</h1>
      <button onClick={handleNextPage}>Increase Page ({page}) </button>
      <button onClick={handlePreviousPage}>Decrease Page ({page}) </button>
      <ul>
        {planets.map((planet) => {
          return (
            <li key={planet.name}>
              {planet.name} - Rotation Period: {planet.rotation_period}, Orbital
              Period: {planet.orbital_period}, Diameter: {planet.diameter},
              Climate: {planet.climate}, Terrain: {planet.terrain}, Population:
              {planet.population},
            </li>
          );
        })}
      </ul>
    </div>
  );
}
