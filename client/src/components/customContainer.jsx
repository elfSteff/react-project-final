import React, { useContext } from "react";
import { Store } from "../context/store";
import { Card } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";

const CustomContainer = ({ cardData, className}) => {
  const store = useContext(Store);
  
  const handleMoveToWatch = (cardDataToMove) => {
    const temp = store.globalState.watched
     temp.push(cardDataToMove);
     store.dispatch({
       type: "SET_WATCHED",
       payload: temp
     })
  };
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
            <Card.Text>
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
            </Card.Text>
            <br />
            <Card.Text>
             <> Details:</>
                            <span dangerouslySetInnerHTML={{ __html: cardData.summary }} />
            </Card.Text>
            {cardData.id !== "id" && (
              <Card.Text>Show id: {cardData?.id}</Card.Text>
            )}
            <Button  href="#" variant="secondary"  className="move-to-watchlist-button" 
            onClick={()=> handleMoveToWatch(cardData)}>Move to watchlist </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CustomContainer;
