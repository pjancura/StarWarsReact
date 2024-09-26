import data from '../assets/MockData/planets_page1.json' with { type: 'json' }

const mD = data.results

let formMap = new Map([
    ["sortables", "zToA"],
    ["temperate", "on"],
    ["arid", "3"],
    ["frozen", "4"],
    ["mountainRanges", "5"],
    ["desert", "6"],
    ["gasGiant", "on"],
    ["minMaxPopulation", [0, -1]]
])



export function comparePlanets(arr, properties) {
    let copyArr = [...arr]
    // checks for "sortables" value
    switch (properties.get("sortables")) {
        case 'aToZ':
            copyArr.sort((a, b) => a.name.localeCompare(b.name))
            break 
        case 'zToA':
            copyArr.sort((a, b) => b.name.localeCompare(a.name))
            break
        case 'highToLowPop':
            copyArr.sort((a, b) => b.population - a.population)
            break
            case 'lowToHighPop':
            copyArr.sort((a, b) => a.population - b.population)
            break
        case 'largeToSmall':
            copyArr.sort((a, b) => b.diameter - a.diameter)
            break
        case 'smallToLarge':
            copyArr.sort((a, b) => a.diameter - b.diameter)
            break
        default: 
            break   
    }
    
    let checkFilters = []

    if (properties.get("temperate") === "on") {
        checkFilters.push(copyArr.filter(item => {
            return item.climate.includes("temperate")
        }))
    }

    if (properties.get("arid") === "on") {
        checkFilters.push(copyArr.filter(item => {
            return item.climate.includes("arid")
        }))
    }

    if (properties.get("frozen") === "on") {
        checkFilters.push(copyArr.filter(item => {
            return item.climate.includes("frozen")
        }))
    }

    if (properties.get("desert") === "on") {
        checkFilters.push(copyArr.filter(item => {
            return item.terrain.includes("desert")
        }))
    }

    if (properties.get("mountainRanges") === "on") {
        checkFilters.push(copyArr.filter(item => {
            return item.terrain.includes("mountain ranges")
        }))
    }

    if (properties.get("gasGiant") === "on") {
        checkFilters.push(copyArr.filter(item => {
            return item.terrain.includes("gas giant")
        }))
    }

    
    console.log(checkFilters)
    return checkFilters.length > 0 ? checkFilters : copyArr
}

console.log(comparePlanets(mD, formMap).length)
