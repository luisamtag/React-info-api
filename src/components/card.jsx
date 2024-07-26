import './card.css';

const Card = (props) => {
    const { char } = props;

    return (
        <div className="card">
            <img className='card__img' src={char.image} alt="character picture" />
            <h2>{char.name}</h2>
            <p>status: {char.status}</p>
        </div>
    )
}

export default Card