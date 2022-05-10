import React, { useEffect, useState, useRef } from "react";
import { Button, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Carusel from "../../components/caruselComponent/caruselComponent";
import { searchShows } from "../../services/api";

const Shows = () => {
  const [querySearch, setQuerySearch] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  const [genres, setGenres] = useState([]);

  const originalSearchList = useRef([]);

  const handleQueryOnChange = (e) => {
    setQuerySearch(e.target.value);
    console.log(e.target.value);
  };

  const handleSearch = async () => {
    const res = await searchShows(querySearch);
    const genres = {}
    res.data.forEach(item => {
        item.show.genres.forEach(g => genres[g] = null)
    })
    originalSearchList.current = res.data;
    const genreList = Object.keys(genres)
    setGenres(genreList)
    setSearchRes(res.data);
   
  };

  const filterByGenre = (genre) => {
   const filteredRes =  originalSearchList.current.filter(item => item.show.genres.includes(genre))
   setSearchRes(filteredRes)
  }



  console.log(searchRes);
  console.log(searchRes.map((item) => item.show.genres));

  return (
    <>
      <div style={{ width: "22rem", margin: '2rem', display: 'flex' }}  className="m-3">
        <input type="text" onChange={handleQueryOnChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="sm">{genres.map(g => <Button id="btngenre" variant="light" className="me-2" onClick={() => filterByGenre(g)}>{g}</Button>)}</div>

      {searchRes.length > 0 &&
        searchRes.map((item, index) => (
          <Card key={index} style={{ width: "22rem", marginBottom: '1rem' }}>
            <Card.Img variant="top" src={item.show.image.medium} />
            <Card.Body>
              <Card.Title><div dangerouslySetInnerHTML={{__html:  item.show.name}}></div>
</Card.Title>
              <Card.Text>
               <div dangerouslySetInnerHTML={{__html:  item.show.summary}}></div>
               {/* <iframe srcDoc={ item.show.summary}></iframe> */}
              </Card.Text>
              <div>{item.show.genres}</div>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default Shows;
