import data from "../assets/MockData/planets_page1.json" with { type: 'json' }

const planetArray = data.results

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
    let namesInArray = []

    if(properties.entries())

    if (properties.get("temperate") === true) {
        checkFilters = copyArr.filter(item => {
            let isTemperate = item.climate.includes("temperate")
            if (isTemperate) {
                namesInArray.push(item.name)
            }
            return isTemperate
        })

    }

    if (properties.get("arid") === true) {
        if (checkFilters.length > 0) {
            copyArr.map(item => {
                let isArid = item.climate.includes("arid")
                if (isArid && !namesInArray.includes(item.name)) {
                    checkFilters.push(item)
                    namesInArray.push(item.name)
                }
            })
        }
    else {
            checkFilters = copyArr.filter(item => {
                let isArid = item.climate.includes("arid")
                if (isArid) {
                    namesInArray.push(item.name)
                }
                return isArid
            })
        }
        
    }

    if (properties.get("frozen") === true) {
        checkFilters.push(copyArr.filter(item => {
            return item.climate.includes("frozen")
        }))
    }

    if (properties.get("desert") === true) {
        checkFilters.push(copyArr.filter(item => {
            return item.terrain.includes("desert")
        }))
    }

    if (properties.get("mountainRanges") === true) {
        checkFilters.push(copyArr.filter(item => {
            return item.terrain.includes("mountain ranges")
        }))
    }

    if (properties.get("gasGiant") === true) {
        checkFilters.push(copyArr.filter(item => {
            return item.terrain.includes("gas giant")
        }))
    }


    console.log(checkFilters.length > 0 ? checkFilters : copyArr)
    return checkFilters.length > 0 ? checkFilters : copyArr
}


// export function comparePlanets(arr, property) {
//     let copyArr = [...arr]
//     switch (property) {
//         case 'aToZ':
//             copyArr.sort((a, b) => a.name.localeCompare(b.name))
//             break 
//         case 'zToA':
//             copyArr.sort((a, b) => b.name.localeCompare(a.name))
//             break
//         case 'highToLowPop':
//             copyArr.sort((a, b) => b.population - a.population)
//             break
//             case 'lowToHighPop':
//             copyArr.sort((a, b) => a.population - b.population)
//             break
//         case 'largeToSmall':
//             copyArr.sort((a, b) => b.diameter - a.diameter)
//             break
//         case 'smallToLarge':
//             copyArr.sort((a, b) => a.diameter - b.diameter)
//             break
//         default: 
//             break   
//     }   
//     // console.log(copyArr)
//     return copyArr
// }

// console.log(comparePlanets(planetArray, "smallToLarge").map(planet => planet.name));

// console.log(planetArray.map(planet => planet.name))


// **************  Practice below here ***********
// const letters = ['b', 'P', 'c', 'a']

// const sortedLetters = letters.sort()

// console.log(sortedLetters)
// console.log(`letters: ${letters}`)

// const numbers = [10, 5, 100, 4]
// numbers.sort((a, b) => {
//     // if ( a < b ) {
//     //     return -1
//     // }
//     // else if ( a > b ) {
//     //     return 1
//     // }
//     // else {
//     //     return 0
//     // }
//     // above code can be simplified to
//     return a - b;
// })
// console.log(numbers)

// const spiceGirls = [
//     { name: 'ginger', age: 37 },
//     { name: 'sporty', age: 30 },
//     { name: 'baby', age: 19 },
//     { name: 'posh', age: 20 },
//     { name: 'scary', age: 25 }
// ]

// const comparator = (a, b) => {
//     return a.age - b.age
// }

// const lexicographicalComparator = (a, b) => {
//     return a.name.localeCompare(b.name)
// }

// spiceGirls.sort(comparator)

// console.log(spiceGirls)

// spiceGirls.sort(lexicographicalComparator)

// console.log(spiceGirls)