import React, { useEffect, useState, useRef, useContext } from "react";
import { Button, Card } from "react-bootstrap";

import { searchShows } from "../../services/api";
import { Store } from "../../context/store";
import "./shows.css";

const Shows = () => {
  const [querySearch, setQuerySearch] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  const [genres, setGenres] = useState([]);

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
    res.data.forEach((item) => {
      item.show.genres.forEach((g) => (genres[g] = null));
    });
    originalSearchList.current = res.data;
    const genreList = Object.keys(genres);
    setGenres(genreList);
    setSearchRes(res.data);
    store.shows = res.data;
  };

  const filterByGenre = (genre) => {
    const filteredRes = originalSearchList.current.filter((item) =>
      item.show.genres.includes(genre)
    );
    setSearchRes(filteredRes);
  };

  const handleMoveToWatch = (itemToMove) => {
    const temp = store.globalState.watched
     temp.push(itemToMove);
     store.dispatch({
       type: "SET_WATCHED",
       payload: temp
     })
  };

  const clearGenreFilter = () => {
    setSearchRes(originalSearchList.current);
  };

  console.log(searchRes);
  console.log(searchRes.map((item) => item.show.genres));

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
        <div className="home-cards-container">
          {searchRes.length > 0 &&
            searchRes.map((item, index) => (
              <Card
                key={index}
                style={{ width: "22rem", marginBottom: "1rem" }}
              >
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
                  <div>{item.show.genres + ' '}</div>
                  <Button 
                className="move-to-watchlist-button" 
                href="#" variant="secondary"
                    onClick={() => handleMoveToWatch(item)}
                  >
                    Move to whatchlist
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
