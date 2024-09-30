import Card from './Card/Card'

export default function CardDisplay(props) {
    return(
        <div className={props.className}>
            {props.cardInfo.map(card => {
                return (
                    <Card key={crypto.randomUUID()} info={card}/>
                )
            })}
            
        </div>
    );
}
