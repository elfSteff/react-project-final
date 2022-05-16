import React, { useEffect, useState, useRef, useContext } from "react";
import { Store } from "../../context/store";
import "./bingewatcher.css";
import Carusel from "../../components/caruselComponent/caruselComponent";
import Header from "../../components/header/header";
import CustomCard from "../../components/customCard/customCard";
import { showCardHeader } from "../../utils/uiConstants";
import { useNavigate } from "react-router-dom";


const BingewatcherMain = () => {

  const [showData, setShowData] = useState([]);
  const [page, setPage] = useState(1);

  const store = useContext(Store);
  const navigate = useNavigate ();
 

  useEffect(() => {
    async function fetchData() {
      try{
        const res = await fetch(`https://api.tvmaze.com/shows?page=${page}`);
        const data = await res.json();
        setShowData([...data]);
      } catch(error){
        console.log(error)
      }
    }
    fetchData();

  }, [page]);

  const incrementPage = () => {
    setPage((prev) => prev + 1);
  };

  const decrementPage = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

  
  console.log(showData);
 
  const handleSelectDetails = (rendDetails) => {
    console.log(rendDetails)
    navigate(`/details/${rendDetails}`)
  }

  return (
    <div className="home-page-container">
       {showData?.map(show => <CustomCard key={show.id} cardData={show} showDetails={false} onClickDetails={handleSelectDetails}/>)}
      <div className="home-table-pagination-container">
        <button onClick={decrementPage}>Previous</button>
        <div>{page}</div>
        <button onClick={incrementPage}>Next</button>
      </div>
    </div>
  )
};
// style={{  }}
export { BingewatcherMain };
