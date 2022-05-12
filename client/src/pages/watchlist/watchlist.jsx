import { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Store } from "../../context/store";

const Watchlist = () => {
   const store = useContext(Store);

  const handleRemoveFromWatchlist = (itemToMove) => {
    const tempList = store.globalState.watched.filter(item  => item.show.id !== itemToMove.show.id);
    store.dispatch({
      type: "SET_WATCHED",
      payload: tempList
    })
  };

  const handleMoveToFinished = (itemToMove) => {
    const temp = store.globalState.finished;
    temp.push(itemToMove)
    store.dispatch({
      type: "SET_FINISHED",
      payload: temp
    })
    handleRemoveFromWatchlist(itemToMove);
  };

  return (
    <div className="home-cards-container">
      <Store.Consumer>
        {(store) =>
          store.globalState.watched.map((item, index) => (
            <Card key={index} style={{ width: "22rem", marginBottom: "1rem" }}>
              <Card.Img variant="top" src={item?.show?.image?.medium} />
              <Card.Body>
                <Card.Title>
                  <div
                    dangerouslySetInnerHTML={{ __html: item?.show?.name }}
                  ></div>
                </Card.Title>
                <Card.Text>
                  <div
                    dangerouslySetInnerHTML={{ __html: item?.show?.summary }}
                  ></div>
                  {/* <iframe srcDoc={ item.show.summary}></iframe> */}
                </Card.Text>
                <div>{item.show.genres}</div>
                <Button
                  variant="dark"
                  onClick={() => {
                    handleMoveToFinished(item);

                  }}
                >
                  Move to Finished
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
