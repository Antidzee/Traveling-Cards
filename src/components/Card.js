export default function Card(props) {
    return (
        <div className="card-container">

            <div className="main-img">
                <img src={props.img} />
            </div>

            <div className="cards-info">
                <span>
                    <p className="info--header">{props.location}</p>
                    <a href={props.maps} className="map-link" target="_blank">View on google maps</a>
                </span>
                
                <h1 className="">{props.title}</h1>
                <p>{props.startDate}</p> <br/>
                <p className="card-description">{props.description}</p>
            </div>

        </div>
    );
}