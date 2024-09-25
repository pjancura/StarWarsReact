import { useState } from "react";

export default function FormFilter() {
    const [sortValue, setSortValue] = useState("aToZ")

    const [planetArray, setPlanetArray] =  useState(["A", "B", "C"])

    const [sortedArray, setSortedArray] = useState(planetArray)

    function updateSortValue(v) {
        setSortValue(v)
    }

    function handleOnChange(e) {
        console.log(e.target.value)
        updateSortValue(e.target.value)
        // setSortValue(() => e.target.value)
        console.log(sortValue)
    }
    
    switch (sortValue) {
        case 'zToA':
            setSortedArray(a => a.sort().reverse())
            console.log(sortedArray)
            break
        case 'highToLowPop':
            break
        case 'lowToHighPop':
            break
        case 'largeToSmall':
            break
        case 'smallToLarge':
            break
        default: 
            setSortedArray(planetArray)
            break   
    }
    console.log(sortValue)

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
                <p className="output">{sortedArray}</p>
            </div>
        </>
    );
}