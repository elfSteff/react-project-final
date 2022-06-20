import React, { useEffect, useState, useRef, useContext } from "react";
import { Store } from "../../context/store";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import CustomContainer from "../../components/customContainer";

const Details = (props) => {
  const [filteredDetails, setFilteredDetails] = useState();
  const handleMoveToWatch = (itemToMove) => {
    const temp = store.globalState.watched;
    temp.push(itemToMove);
    store.dispatch({
      type: "SET_WATCHED",
      payload: temp,
    });
  };

  const store = useContext(Store);
  const params = useParams();
  console.log(params.rendDetails);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://api.tvmaze.com/shows/${params.rendDetails}`
        );
        const data = await res.json();

        console.log(data);

        const filteredData = {
          id: data.id,
          genres: data.genres,
          image: { medium: data.image.original },
          name: data.name,
          language: data.language,
          officialSite: data.officialSite,
          premiered: data.premiered,
          averageRuntime: data.runtime,
          schedule: data.schedule,
          status: data.status,
          summary: data.summary,
        };

        setFilteredDetails(filteredData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  
  return (
   <div>
      {filteredDetails && ( 
        <div>
        <CustomContainer key={filteredDetails.name} cardData={filteredDetails} /> 
        </div>
      )}
      
    </div>
  );
};

export default Details;
