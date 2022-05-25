import { Button, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Container from "react-bootstrap/Container";
import { Store } from "../../context/store";
import { Link } from "react-router-dom";

const CustomCard = ({ cardData, onClickDetails, className }) => {
  return (
    <div className={`home-cards-container ${className}`}>
      <Container className="home-card-container-all-shows">
        <Card id="cardShow" style={{ width: "22rem", marginBottom: "1rem" }}>
          <Card.Img variant="top" src={cardData?.image?.medium} />
          <Card.Body>
            <CardHeader>
              Rating average:{" "}
              {cardData?.rating?.average + "-" + cardData.status}
            </CardHeader>
            <Card.Title>{cardData.name} </Card.Title>
            <Card.Text>
              Language: {cardData?.language}
              <br />
              Average Runtime: {cardData.averageRuntime} min
              <br /> Premiered on {cardData.premiered}
              <br />
              {/* Official Site: <Link>{cardData.offcialSite}</Link> */}
              <br />
            </Card.Text>
            {cardData.id !== "id" && (
              <Card.Text>Show id: {cardData?.id}</Card.Text>
            )}
            <Container id="button-container-cards">
              <Button
                style={{ cursor: "pointer" }}
                id="details-card-button"
                onClick={() => onClickDetails(cardData.id)}
                
              >
                Details
              </Button>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CustomCard;
