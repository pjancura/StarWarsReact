import React, { useState } from 'react';


export default function FormFilter(props) {

    function handlePopulationRange() {
        let min = document.getElementById("minPopulation").value
        let max = document.getElementById("maxPopulation").value
        let parsedMin = 0
        let parsedMax = -1
        console.log(typeof(min), min)
        min === "" ? parsedMin = 0 : parsedMin = parseInt(min) 
        max === "" ? parsedMax = -1 : parsedMax = parseInt(max)
        console.log(min, max)
        if (Number.isNaN(parsedMin)){
            console.log(`Error: ${min} is not a number.`)
            return
        }
        if (Number.isNaN(parsedMax)) {
            console.log("max NaN")
            console.log(`Error: ${max} is not a number.`)
            return
        }
        console.log(parsedMin, parsedMax)
        return [parsedMin, parsedMax]
    }


    return (
        <div className={props.className}>
            <h2 className="">Filter Planets</h2>
            <form action="" onChange={props.onChange} id="planet-form">
                <h4 className={props.styles.selectLabel}>Sort by
                </h4>
                <select name="sortables" id="sortables">
                    <option value="">-- Select Option --</option>
                    <option value="aToZ">A - Z</option>
                    <option value="zToA">Z - A</option>
                    <option value="highToLowPop">Highest - Lowest Population</option>
                    <option value="lowToHighPop">Lowest - Highest Population</option>
                    <option value="largeToSmall">Largest - Smallest Planet</option>
                    <option value="smallToLarge">Smallest - Largest Planet</option>
                </select>



                const TerrainFilter = (props) => {
    // Step 1: Create a state to keep track of selected checkboxes
    const [selectedTerrains, setSelectedTerrains] = useState({
        mountainRanges: false,
        desert: false,
        gasGiant: false,
    });

    // Step 2: Create an onChange event handler
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        // Update the state based on the checkbox change
        setSelectedTerrains((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    // Step 3: Filter results based on the selected checkboxes
    const filterResults = () => {
        const results = props.data; // Assuming props.data is the list of results you want to filter
        const { mountainRanges, desert, gasGiant } = selectedTerrains;

        // Filter the results based on the selected checkboxes
        const filteredResults = results.filter((item) => {
            if (mountainRanges && item.type === 'Mountain Ranges') return true;
            if (desert && item.type === 'Desert') return true;
            if (gasGiant && item.type === 'Gas Giant') return true;
            return false;
        });

        return filteredResults;
    };

    // Get filtered results
    const filteredResults = filterResults();
   
                <div className={props.styles.checkboxDiv}>
                    <h4>Climate</h4>
                        <label htmlFor="temperate">
                            <input type="checkbox" name="temperate" id="temperate" />                    
                            Temperate
                        </label>                    
                        <label htmlFor="arid">
                            <input type="checkbox" name="arid" id="arid" />
                            Arid
                        </label>
                        <label htmlFor="frozen">
                            <input type="checkbox" name="frozen" id="frozen" />
                            Frozen
                        </label>
                </div>

                <div className={props.styles.checkboxDiv}>
                    <h4>Terrain</h4>
                        <label htmlFor="mountainRanges">
                            <input type="checkbox" name="mountainRanges" id="mountainRanges" 
                            checked={selectedTerrains.mountainRanges}
                            onChange={handleCheckboxChange}/>                    
                            Mountain Ranges
                        </label>                    
                        <label htmlFor="desert">
                            <input type="checkbox" name="desert" id="desert" 
                            checked={selectedTerrains.desert}
                            onChange={handleCheckboxChange}/>
                            Desert
                        </label>
                        <label htmlFor="gasGiant">
                            <input type="checkbox" name="gasGiant" id="gasGiant" 
                            checked={selectedTerrains.gasGiant}
                            onChange={handleCheckboxChange}/>
                            Gas Giant
                        </label>
                </div>

                <div className={props.styles.minMaxPopulation}>
                    <h4>Population Range</h4>
                    <input type="text" name="minPopulation" id="minPopulation" placeholder="Min."/>
                    <p> to </p>
                    <input type="text" name="maxPopulation" id="maxPopulation" placeholder="Max."/>
                    <button type="button" onClick={handlePopulationRange} >Change Range</button>
                </div>
                <button type="reset">Clear Form</button>
            </form>

        </div>
    
    );
}