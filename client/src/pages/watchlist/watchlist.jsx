import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Store } from "../../context/store";

const Watchlist = () => {
  const store = useContext(Store);

  const handleMoveToFinished = (itemToMove) => {
    store.finished.push(itemToMove);
    //find and delete itemToMove from store.watched
  };

  return (
    <div className="home-cards-container">
      <Store.Consumer>
        {(store) =>
          store.watched.map((item, index) => (
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
                  onClick={() => handleMoveToFinished(item)}
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
