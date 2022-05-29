import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Container from "react-bootstrap/Container";

const CustomContainer = ({ cardData, className }) => {
  return (
    <div className={`details-container ${className}`}>
      <Container fluid className="details-container">
        <Card
          style={{
            display: "flexbox",
            width: "85vh",
            padding: "5vh",
            marginBottom: "1rem",
            background: "bisque",
         
          }}
        >
          <Card.Img variant="top" src={cardData?.image?.medium} />
          <Card.Body>
            <Card.Title className="card-title">{cardData.name} </Card.Title>
            <Card.Link href={cardData.officialSite} >Official site</Card.Link>
            <CardHeader>
              Genres: {cardData.genres}
              <br />
              Rating average: {cardData?.rating?.average}
              <br />
              Status: {cardData.status}
              <br />
              Language: {cardData?.language}
              <br />
              Average Runtime: {cardData?.averageRuntime} min
              <br /> Premiered on {cardData?.premiered}
            </CardHeader>
            <br />
            <Card.Text>
             <h5> Details:</h5>
                            <span dangerouslySetInnerHTML={{ __html: cardData.summary }} />
            </Card.Text>
            {cardData.id !== "id" && (
              <Card.Text>Show id: {cardData?.id}</Card.Text>
            )}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CustomContainer;
