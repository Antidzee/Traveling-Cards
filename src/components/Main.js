import Card from "./Card";
import Data from "./data";

export default function Main(){

    const cards = Data.map(item => {
        return(
          <Card
            key="item-map"
            title={item.title}
            location={item.location}
            maps={item.googleMapsUrl}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            img={item.imageUrl}
          />
        );
      })

    return(
        <div className="main-container">
            {cards}
        </div>
    );
}