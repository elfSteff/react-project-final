
import { showCardHeader } from "../../utils/uiConstants";
import { Button, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Container from 'react-bootstrap/Container'

const CustomCard = ({ cardData }) => {
  return (
    <div className="home-cards-container">
      <Container className="home-card-container-all-shows">
          <Card id="cardShow" style={{ width: "22rem", marginBottom: "1rem" }}>
            <Card.Img variant="top" src={cardData.image.medium} />
            <Card.Body>
              <CardHeader>Rating average: {cardData.rating.average + "-" + cardData.status}</CardHeader>
              <Card.Title>{cardData.name} </Card.Title>
              <Card.Text>Average Runtime: {cardData.averageRuntime}min</Card.Text>
              <Container id= 'button-container-cards'>
              <Button id='details-card-button' > Details</Button>
              <Button variant="dark"> Move to Finished</Button>
              </Container>
            </Card.Body>
          </Card>
          </Container>
    </div>
  );
};

export default CustomCard;