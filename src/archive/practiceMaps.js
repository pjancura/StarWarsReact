import data from '../assets/MockData/planets_page1.json' with { type: 'json' }

const mD = data.results

let formMap = new Map([
    ["sortables", "zToA"],
    ["temperate", true],
    ["arid", "3"],
    ["frozen", "4"],
    ["mountainRanges", ""],
    ["desert", "6"],
    ["gasGiant", true],
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
    
    let entries = properties.entries()
    let checkFilters = []
    let namesInArray = []

    for (const [key, value] of entries) {
        if (value === true) {
            if (checkFilters.length > 0) {
                
            }
            else {
                // checkFilters = copyArr.filter(item => {
                //     let hasFeature = item.(key).includes("arid")
                //     if (isArid) {
                //         namesInArray.push(item.name)
                //     }
                //     return isArid
                // })
            }
        }
    }

    // if (properties.get("temperate") === true) {
    //     checkFilters = copyArr.filter(item => {
    //         let isTemperate = item.climate.includes("temperate")
    //         if (isTemperate) {
    //             namesInArray.push(item.name)
    //         }
    //         return isTemperate
    //     })

    // }

    // if (properties.get("arid") === true) {
    //     if (checkFilters.length > 0) {
    //         copyArr.map(item => {
    //             let isArid = item.climate.includes("arid")
    //             if (isArid && !namesInArray.includes(item.name)) {
    //                 checkFilters.push(item)
    //                 namesInArray.push(item.name)
    //             }
    //         })
    //     }
    // else {
    //         checkFilters = copyArr.filter(item => {
    //             let isArid = item.climate.includes("arid")
    //             if (isArid) {
    //                 namesInArray.push(item.name)
    //             }
    //             return isArid
    //         })
    //     }
        
    // }




    // console.log(checkFilters.length > 0 ? checkFilters : copyArr)
    return checkFilters.length > 0 ? checkFilters : copyArr
}

console.log(comparePlanets(mD, formMap).length)


function entriesLister(map) {
    let entries = map.entries()
    for (const [key, value] of entries) {
        console.log(key, value)
    }
}

// entriesLister(formMap)
