import style from "./card.module.css"

export default function Card(props) {

    function fixKey(s) {
        let newTitle = ""
        if (!s.includes("_")) {
            newTitle = s.substring(0, 1).toUpperCase() + s.substring(1)
        }
        else {
            let removeUnderscore = s.replace("_", " ")
            let spaceIndex = removeUnderscore.indexOf(" ")
            newTitle = s.substring(0, 1).toUpperCase() + s.substring(1, spaceIndex) + " " + s.substring(spaceIndex + 1, spaceIndex + 2).toUpperCase() + s.substring(spaceIndex + 2)
        }
        // console.log(newTitle)
        return newTitle
    }

    function createListItem(property) {
        let key = property[0]
        let value = property[1]
        if (key === "name") {
            return
        }
        let fixedKey = fixKey(key)
        // console.log(fixedKey, value)
        return <li className={style.listItem}key={crypto.randomUUID()}><span className={style.bold}>{fixedKey}:</span> {value}</li>
    }

    return(
        <div className={style.card}>             
        {/* style={{backgroundImage: props.image}} */}
            <h2 className='card-title'>{props.info.name}</h2>
            <ul className='card-property'>
                {Object.entries(props.info).map(property => {
                    return createListItem(property)
                })}
            
            </ul>           
        </div>            
    );
}
