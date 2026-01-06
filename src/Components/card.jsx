import Buttons from './Button'

function Card(props) {
    return (
        <div className="card">
            <h1 className="card-text"> {props.cardName}</h1>
            <p>{props.description}</p>
            <Buttons/>
        </div>
    );
}

export default Card;