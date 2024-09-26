import { useEffect, useState, useRef } from "react";
import mockData from "../assets/MockData/planets_page1.json"
import { comparePlanets } from "./comparePlanets"
import FormFilter from "./FormFilter";
import CardDisplay from './CardDisplay'
import styles from './main.module.css'
import { dataCleaner } from "./DataCleaner";
import handleCheckboxFilters from "./HandleCheckboxFilters";

const BASE_URL = "https://swapi.dev/api/planets/";

export default function Main() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [planets, setPlanets] = useState([]);
    const [sortValues, setSortValues] = useState(
        new Map([
            ["sortables", ""],
            ["temperate", ""],
            ["arid", ""],
            ["frozen", ""],
            ["mountainRanges", ""],
            ["desert", ""],
            ["gasGiant", ""],
            ["minMaxPopulation", [0, 0]]
        ])
    )
    const [sortedArray, setSortedArray] = useState(planets)
    // const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);
  
    const abortControllerRef = useRef(null);

    function handleOnChange(e) {
        let { type, value, name} = e.target
        if (type === "text") {
            console.log(value)
            return
        }
        if (type === "checkbox") {
            let newName = handleCheckboxFilters(name)
            console.log(newName)
            return
        }
        setSortValues(() => value)
    }
    
    useEffect(() => {
        setSortedArray(comparePlanets(planets, sortValues))
    }, [sortValues, planets])

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
    
      if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Something went wrong please refresh the page</div>;
      }





    return (
        <main className={styles.mainContainer}>
            <FormFilter className={styles.formFilter} styles={styles} onChange={handleOnChange} />
            <CardDisplay className={styles.output} cardInfo={sortedArray}/>
    </main>
    );
}