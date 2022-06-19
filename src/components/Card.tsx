
const Card = ({image, id, name, location}: any) => {
    return(
        <div className="Card">
            <img className="img" src={image} alt="character-img"/>
            <div className="card-text">
              <p>#id: <span>{id}</span></p>
              <div>
                <p>Name: <span>{name}</span></p>
                <p>Location: <span>{location}</span></p>
              </div>
            </div>
        </div>
    )
}

export default Card;