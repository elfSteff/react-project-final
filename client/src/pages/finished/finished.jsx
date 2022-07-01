import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Store } from "../../context/store";

const FinishedList = () => {
  const store = useContext(Store);

  const handleRemoveFromFinished = (cardDataToMove) => {
    const tempList = store.globalState.finished.filter(
      (cardData) => cardData?.id !==cardDataToMove.id
    );
    store.dispatch({
      type: "SET_FINISHED",
      payload: tempList,
    });
  };
  
  return (
    <div className="home-cards-container">
      <Store.Consumer>
        {(store) =>
          store.globalState.finished.map((cardData, index) => (
            <Card key={index} style={{ width: "22rem", marginBottom: "1rem" }}>
              <Card.Img variant="top" src={cardData?.image?.medium} />
              <Card.Body>
                <Card.Title>
                  <div dangerouslySetInnerHTML={{ __html: cardData?.name }}></div>
                </Card.Title>
                <Card.Text>
                  <div dangerouslySetInnerHTML={{ __html: cardData?.summary }}></div>
                </Card.Text>
                <div>{cardData?.genres}</div>
                <Button  href="#" variant="secondary"
                  className="move-to-button"
                  onClick={() => {
                    handleRemoveFromFinished(cardData);
                  }}
                  >
                    Remove from Finished
                  </Button>
              </Card.Body>
            </Card>
          ))
        }
      </Store.Consumer>
    </div>
  );
};

export default FinishedList;
