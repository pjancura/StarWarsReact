
export default function FormFilter(props) {

    


    return (
        <>
            <form action="" className={props.className}>
                <label htmlFor="sortables">Sort Planets</label>
            <select className={props.className} name="sortables" id="sortables" onChange={props.sortable}>
                <option value="">-- Select Option --</option>
                <option value="aToZ">A - Z</option>
                <option value="zToA">Z - A</option>
                <option value="highToLowPop">Highest - Lowest Population</option>
                <option value="lowToHighPop">Lowest - Highest Population</option>
                <option value="largeToSmall">Largest - Smallest Planet</option>
                <option value="smallToLarge">Smallest - Largest Planet</option>
            </select>
            <label htmlFor="climates">Climates</label>
            <select className={props.className} name="climates" id="climates" onChange={props.sortbyClimate}>
                <option value="">-- Select Option --</option>
                {
                    props.climates.map((climate, index) => {
                        return <option value={climate} key={index}>{climate.charAt(0).toUpperCase() + climate.slice(1)}</option>
                    })
                }
            </select>
            </form>

        </>
    );
}