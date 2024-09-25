import React, { useState, useEffect, useRef } from "react";

const BASE_URL = "https://swapi.dev/api/planets/";

interface Planet {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  terrain: string;
  population: number;
}

export default function DataFetching() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const abortControllerRef = useRef<AbortController | null>(null);

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
        setPlanets(data.results);
        setHasNextPage(data.next !== null);
      } catch (e) {
        if (e.name === "AbortError") {
          console.log("Fetch aborted");
          return;
        }
        setError(e as Error);
        alert(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlanets();
  }, [page]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong please refresh the page</div>;
  }

  return (
    <div>
      <h1>Planets Data</h1>
      <button onClick={() => setPage(page + 1)}>Increase Page ({page}) </button>
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
