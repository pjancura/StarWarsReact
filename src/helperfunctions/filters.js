function climates(arr) {
    let climates = {};
    arr.forEach(planet => {;
        let climateArray = planet.climate.split(',');
        climateArray.forEach(climate => {
            climates[climate.trim()] = 0
        })
    });

    return Object.keys(climates).filter(climate => climate.toLowerCase() !== "unknown");


}

function comparePlanets(arr, property) {
    let copyArr = [...arr]
    switch (property) {
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
    // console.log(copyArr)
    return copyArr
}


function filterClimate(arr, property) {
    return arr.filter(planet => planet.climate.includes(property));
}



export {climates, comparePlanets, filterClimate};