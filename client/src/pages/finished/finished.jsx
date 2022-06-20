import { useContext } from "react";
import { Card } from "react-bootstrap";
import { Store } from "../../context/store";

const FinishedList = () => {
  const store = useContext(Store);
  
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
         
              </Card.Body>
            </Card>
          ))
        }
      </Store.Consumer>
    </div>
  );
};

export default FinishedList;
