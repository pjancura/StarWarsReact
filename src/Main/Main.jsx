import { useEffect, useState } from "react";
import mockData from "../assets/MockData/planets_page1.json"
import { comparePlanets } from "./comparePlanets"
import FormFilter from "./FormFilter";
import styles from './main.module.css'

export default function Main() {
    const [sortValue, setSortValue] = useState("")

    const [planetArray, setPlanetArray] =  useState(mockData.results)

    const [sortedArray, setSortedArray] = useState(planetArray)
    
    function handleOnChange(e) {
        console.log(e.target)
        setSortValue(() => e.target.value)
    }
    
    useEffect(() => {
        setSortedArray(comparePlanets(planetArray, sortValue))

    }, [sortValue, planetArray])

    return (
        <main className={styles.mainContainer}>
            <FormFilter className={styles.formFilter} onChange={handleOnChange} />

            {/* THIS OUTPUT DIV WILL BECOME THE <CARDDISPLAY/>  */}
            <div className={styles.output}>
                {sortedArray.map(planet => {
                    return <p className={styles.card} key={JSON.stringify(planet.name)}>{JSON.stringify(planet).replaceAll(",", ", ")}</p>
                })}
            </div>
    </main>
    );
}