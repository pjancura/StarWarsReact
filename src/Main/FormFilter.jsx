import { useEffect, useState } from "react";
import mockData from "../assets/MockData/planets_page1.json"
import { comparePlanets } from "./comparePlanets"

export default function FormFilter() {
    const [sortValue, setSortValue] = useState("")

    const [planetArray, setPlanetArray] =  useState(mockData.results)

    const [sortedArray, setSortedArray] = useState(planetArray)

    // componentDidUpdate(_, prevState) {
    //     console.log(prevState)
    // }

    // console.log(sortValue)
    
    function handleOnChange(e) {
        setSortValue(() => e.target.value)
    }
    
    useEffect(() => {
        setSortedArray(comparePlanets(planetArray, sortValue))

    }, [sortValue, planetArray])
    


    return (
        <>
            <form action="" onChange={handleOnChange}>
                <label htmlFor="sortables">Sort Planets</label>
                <select name="sortables" id="sortables">
                    <option value="">-- Select Option --</option>
                    <option value="aToZ">A - Z</option>
                    <option value="zToA">Z - A</option>
                    <option value="highToLowPop">Highest - Lowest Population</option>
                    <option value="lowToHighPop">Lowest - Highest Population</option>
                    <option value="largeToSmall">Largest - Smallest Planet</option>
                    <option value="smallToLarge">Smallest - Largest Planet</option>
                </select>
            </form>
            <div>
                {sortedArray.map(planet => {
                    return <p key={JSON.stringify(planet.name)}>{JSON.stringify(planet)}</p>
                })}
            </div>
        </>
    );
}