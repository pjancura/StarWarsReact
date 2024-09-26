
export default function FormFilter(props) {

    


    return (
        <>
            <form action="" className={props.className} onChange={props.onChange}>
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
                <fieldset>
                    <legend>Climate</legend>
                        <input type="checkbox" name="temperate" id="temperate" />
                    <label htmlFor="temperate">Temperate</label>
                </fieldset>
            </form>

        </>
    );
}