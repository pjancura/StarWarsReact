import data from '../assets/MockData/planets_page1.json' with { type: 'json' }

const mD = data.results

let formMap = new Map([
    ["sortables", "zToA"],
    ["temperate", "on"],
    ["arid", "3"],
    ["frozen", "4"],
    ["mountainRanges", "5"],
    ["desert", "6"],
    ["gasGiant", "7"],
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
        checkFilters = copyArr.filter(item => {
            // console.log(item)
            // console.log(stringToArray(item.climate).includes("temperate"))
            return item.climate.includes("temperate")
        })
    }

    if (properties.get("") === "on") {
        checkFilters = copyArr.filter(item => {
            // console.log(item)
            // console.log(stringToArray(item.climate).includes("temperate"))
            return stringToArray(item.climate).includes("temperate")
        })
    }
    
    console.log(checkFilters)
    return checkFilters.length > 0 ? checkFilters : copyArr
}

// function stringToArray(s) {
//     s.replaceAll(" ", "")
//     let arr = s.split(",")
//     console.log(arr)
//     return arr
// }



console.log(comparePlanets(mD, formMap).length)

// console.log(stringToArray(mD[1].terrain).includes("temperate"))





// let formKeys = formMap.keys()
// console.log(formMap.get("sortables"))
// console.log(formMap.forEach((key) => {
//     console.log(key)
//     console.log(formMap.get(key))
// }))