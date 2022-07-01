import React from "react";
import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Store } from "../../context/store";

const Watchlist = () => {
  const store = useContext(Store);

  const handleRemoveFromWatchlist = (cardDataToMove) => {
    const tempList = store.globalState.watched.filter(
      (cardData) => cardData?.id !== cardDataToMove?.id
    );
    store.dispatch({
      type: "SET_WATCHED",
      payload: tempList,
    });
  };

  const handleMoveToFinished = (cardDataToMove) => {
    const temp = store.globalState.finished;
    temp.push(cardDataToMove);
    store.dispatch({
      type: "SET_FINISHED",
      payload: temp,
    });
    handleRemoveFromWatchlist(cardDataToMove);
  };

  return (
    <div className="home-cards-container">
      <Store.Consumer>
        {(store) =>
          store.globalState.watched.map((cardData, index) => (
            <Card key={index} style={{ width: "22rem", marginBottom: "1rem" }}>
              <Card.Img variant="top" src={cardData?.image?.medium}/>
             
              <Card.Body>
                <Card.Title>
                  <div
                    dangerouslySetInnerHTML={{ __html: cardData?.name }}
                  ></div>
                </Card.Title>
                <Card.Text>
                  <div
                    dangerouslySetInnerHTML={{ __html: cardData?.summary }}
                  ></div>
                </Card.Text>
                <div>{cardData?.genres + " "}</div>
                <Button 
                 href="#" variant="secondary"
                  className="move-to-button"
                  onClick={() => {
                    handleMoveToFinished(cardData);
                  }}
                >
                  Move to Finished
                </Button>
                <Button  href="#" variant="secondary"
                  className="move-to-button"
                  onClick={() => {
                    handleRemoveFromWatchlist(cardData);
                  }}
                  >
                    Remove from Watchlist
                  </Button>
              </Card.Body>
            </Card>
          ))
        }
      </Store.Consumer>
    </div>
  );
};

export default Watchlist;
