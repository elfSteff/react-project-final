import React, { useEffect, useState, useRef, useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { searchShows } from "../../services/api";
import { Store } from "../../context/store";
import "./shows.css";
import { useNavigate } from "react-router-dom";

const Shows = ({className }) => {
  const [querySearch, setQuerySearch] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  const originalSearchList = useRef([]);

  const store = useContext(Store);

  useEffect(() => {
    setSearchRes(store.globalState.shows);
  }, []);

  const handleQueryOnChange = (e) => {
    setQuerySearch(e.target.value);
    console.log(e.target.value);
  };

  const handleSearch = async () => {
    const res = await searchShows(querySearch);
    const genres = {};
    res.data.forEach((cardData) => {
      cardData.show.genres.forEach((g) => (genres[g] = null));
    });
    originalSearchList.current = res.data;
    const genreList = Object.keys(genres);
    setGenres(genreList);
    setSearchRes(res.data);
    store.shows = res.data;
  };
  const handleSelectDetails = (rendDetails) => {
    console.log(rendDetails);
    navigate(`/details/${rendDetails}`);
  };


  const filterByGenre = (genre) => {
    const filteredRes = originalSearchList.current.filter((cardData) =>
      cardData.show.genres.includes(genre)
    );
    setSearchRes(filteredRes);
  };

  // const handleMoveToWatch = (cardDataToMove) => {
  //   const temp = store.globalState.watched
  //    temp.push(cardDataToMove);
  //    store.dispatch({
  //      type: "SET_WATCHED",
  //      payload: temp
  //    })
  // };

  const clearGenreFilter = () => {
    setSearchRes(originalSearchList.current);
  };

  console.log(searchRes);
  console.log(searchRes.map((cardData) => cardData.show.genres));

  return (
    <>
      <div></div>
      <div
        style={{ width: "22rem", margin: "2rem", display: "flex" }}
        className="m-3"
      >
        <input type="text" onChange={handleQueryOnChange} />
        <button  href="#" variant="secondary" onClick={handleSearch}>Search</button>
      </div>
      <div className="sm">
        {genres.map((g) => (
          <Button  href="#" variant="secondary"
            id="btngenre"
            
            onClick={() => filterByGenre(g)}
          >
            {g}
          </Button>
        ))}
        <Button  href="#" variant="secondary"
          id="btngenre"
       
          onClick={clearGenreFilter}
        >
          Clear Filter
        </Button>
      </div>

      <div>
        <div className={`home-cards-container ${className}`}>
          {searchRes.length > 0 &&
            searchRes.map((cardData, index) => (
              <Card
                key={index}
                style={{ width: "22rem", marginBottom: "1rem" }}
              >
                <Card.Img variant="top" src={cardData?.show?.image?.medium} />
                <Card.Body>
                  <Card.Title>
                    <div
                      dangerouslySetInnerHTML={{ __html: cardData?.show?.name }}
                    ></div>
                  </Card.Title>
                  <Card.Text>
                    <div
                      dangerouslySetInnerHTML={{ __html: cardData?.show?.summary }}
                    ></div>
                    {/* <iframe srcDoc={ cardData.show.summary}></iframe> */}
                  </Card.Text>
                  <div>{cardData.show.genres + ' '}</div>
                  {/* <Button 
                className="move-to-watchlist-button" 
                href="#" variant="secondary"
                    onClick={() => handleMoveToWatch(cardData)}
                  >
                    Move to whatchlist
                  </Button> */}
                  <Button 
                className="move-to-watchlist-button" 
                href="#" variant="secondary"
                    onClick={() => handleSelectDetails(cardData.show.id)}
                  >
                   Details
                  </Button>
                </Card.Body>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
};

export default Shows;
