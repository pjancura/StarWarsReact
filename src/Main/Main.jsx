import { useEffect, useState, useRef } from "react";
import mockData from "../assets/MockData/planets_page1.json"
import { comparePlanets } from "./comparePlanets"
import FormFilter from "./FormFilter";
import CardDisplay from './CardDisplay'
import styles from './main.module.css'
import { dataCleaner } from "./DataCleaner";

const BASE_URL = "https://swapi.dev/api/planets/";

export default function Main() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [planets, setPlanets] = useState([]);
    const [sortValue, setSortValue] = useState("")
    const [sortedArray, setSortedArray] = useState(planets)
    // const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);
  
    const abortControllerRef = useRef(null);
    
    function handleOnChange(e) {
        let { type, value } = e.target
        setSortValue(() => value)
    }
    
    useEffect(() => {
        setSortedArray(comparePlanets(planets, sortValue))
    }, [sortValue, planets])

    useEffect(() => {
        const fetchPlanets = async () => {
          abortControllerRef.current?.abort();
          abortControllerRef.current = new AbortController();
    
          setIsLoading(true);
          
          let page = 1
          let next = ""
          let newPlanet = []

          try {
            while (next !== null) {
              const response = await fetch(`${BASE_URL}?page=${page}`, {
                signal: abortControllerRef.current?.signal,
              });
                const data = await response.json();
                let dataCleaned = dataCleaner(data.results);
                newPlanet = [...newPlanet, ...dataCleaned];
                next = data.next
                // setHasNextPage(data.next !== null);
                ++page
            }
            setPlanets(newPlanet);
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
      }, []);
    
    //   const handleNextPage = () => {
    //     if (hasNextPage) {
    //       setPage(page + 1);
    //     }
    //   };
    
    //   const handlePreviousPage = () => {
    //     if (page > 1) {
    //       setPage(page - 1);
    //     }
    //   };
    
      if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Something went wrong please refresh the page</div>;
      }





    return (
        <main className={styles.mainContainer}>
            <FormFilter className={styles.formFilter} styles={styles} onChange={handleOnChange} />

            {/* THIS OUTPUT DIV WILL BECOME THE <CARDDISPLAY/>  */}

            <CardDisplay className={styles.output} cardInfo={sortedArray}/>
            {/* <div className={styles.output}>
            {sortedArray.map((planet) => {
                return (
                    <p key={planet.name} className={styles.card}>
                    {planet.name} - Rotation Period: {planet.rotation_period}, Orbital
                    Period: {planet.orbital_period}, Diameter: {planet.diameter},
                    Climate: {planet.climate}, Terrain: {planet.terrain}, Population:
                    {planet.population},
                    </p>
          );
        })}
                {/* {sortedArray.map(planet => {
                    return <p className={styles.card} key={JSON.stringify(planet.name)}>{JSON.stringify(planet).replaceAll(",", ", ")}</p>
                })} */}
           {/* </div> */}
{/* 
            <button onClick={handleNextPage}>Increase Page ({page}) </button>
            <button onClick={handlePreviousPage}>Decrease Page ({page}) </button> */}
    </main>
    );
}