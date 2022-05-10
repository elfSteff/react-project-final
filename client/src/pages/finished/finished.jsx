import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Store } from "../../context/store";

const FinishedList = () => {
  const store = useContext(Store);
//   const handleMoveToFinished = (itemToMove) => {
//     store.finished.push(itemToMove);
//   };
  return (
    <div className="home-cards-container">
      <Store.Consumer>
        {(store) =>
          store.finished.map((item, index) => (
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
                {/* <Button
                  variant="primary"
                  onClick={() => handleMoveToFinished(item)}
                >
                  Move to finished list
                </Button> */}
              </Card.Body>
            </Card>
          ))
        }
      </Store.Consumer>
    </div>
  );
};

export default FinishedList;