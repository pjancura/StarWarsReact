import Card from '../Card/Card'

export default function CardDisplay(props) {

    

    return(
        <div className={props.className}>
            {props.cardInfo.map(card => {
                return (
                    <Card key={card.name} info={card}/>
                )
            })}
            
        </div>
    );
}