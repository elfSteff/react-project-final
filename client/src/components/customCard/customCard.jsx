import { showCardHeader } from "../../utils/uiConstants";
import { Button, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Container from "react-bootstrap/Container";
import { Store } from "../../context/store";

const CustomCard = ({ cardData, onClickDetails }) => {
  return (
    <div className="home-cards-container">
      <Container className="home-card-container-all-shows">
        <Card id="cardShow" style={{ width: "22rem", marginBottom: "1rem" }}>
          <Card.Img variant="top" src={cardData.image.medium} />
          <Card.Body>
            <CardHeader>
              Rating average: {cardData.rating.average + "-" + cardData.status}
            </CardHeader>
            <Card.Title>{cardData.name} </Card.Title>
            <Card.Text>Average Runtime: {cardData.averageRuntime}min</Card.Text>
            {cardData.id !== 'id' && <Card.Text>Show id: {cardData.id}</Card.Text>}
            <Container id="button-container-cards">
              <Button style={{cursor: 'pointer'} }
                id="details-card-button"
                onClick={() => onClickDetails(cardData.id)}
              >
                {" "}
                Details {cardData.id}
              </Button>
              {/* <Button variant="dark"> Move to Watchlist</Button> */}
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CustomCard;
