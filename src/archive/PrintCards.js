import data from '../assets/MockData/planets_page1.json' with { type: 'json' }

const planets = data.results

function printPlanets(obj) {
    Object.entries(obj).map(property => {
        let key = property[0]
        let value = property[1]
            console.log(`key: ${key}, value: ${ value }`)
    })
}

printPlanets(planets[0])