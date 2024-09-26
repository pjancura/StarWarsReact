export function dataCleaner (arr) {
    const cleanArray = [];
    arr.forEach((planet) => {
        let objecte = {
            name: planet.name,
            rotation_period: planet.rotation_period,
            orbital_period: planet.orbital_period,
            diameter: planet.diameter,
            climate: planet.climate,
            terrain: planet.terrain,
            population: planet.population}
    
    cleanArray.push(objecte);
    
})
// console.log(cleanArray);
return cleanArray
}



