import style from "./card.module.css"
function Card(prop) {
    return(
        <div className={style.card} style={{backgroundImage: prop.image}}>
            <h2 className='card-title'>{prop.title}</h2>
            <ul className='card-property'>{prop.properties.map((property, index) =>
                <li key={index}>{property}</li>)}</ul>           
        </div>
    );
}

export default Card