import { CardInterface, CardItem } from "./CardInterface";
import "./Card.css";

export const CardComponent = ({ filteredBikes }: CardInterface) => {
  const renderCards = () => {
    return filteredBikes.map((bike: CardItem, index: number) => (
      <div key={index} className="col-4 ">
        <div className="card">
          <div className="card-img">
            <img src={require(`../../img/${bike.image}.png`)} alt={bike.name} />
          </div>
          <div className="card-body rounded-bottom px-2 pt-3">
            <h6 className="card-title mt-2 ">{bike.name}</h6>
            <p className="card-text ">{bike.price} $</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="container-fluid w-100 mt-5 pt-5 ">
        <div className="row offset-3">{renderCards()}</div>
      </div>
    </>
  );
};
