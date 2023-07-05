export function Characters({ character }) {
    return (
        <div className="Card">
            <h1 className="Card-name">{character.name}</h1>
            <img className="Card-image" src={character.image} alt="" />
            <div className="Card-description">
                <p>
                    <strong>Location : </strong>
                    {character.location.name}
                </p>
                <p>
                    <strong>Status : </strong>
                    {character.status}
                </p>
                <p>
                    <strong>Species : </strong>
                    {character.species}
                </p>
            </div>
            <button className="Card-button">More</button>
        </div>
    );
}