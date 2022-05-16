import React, { useEffect, useState, useRef, useContext } from "react";
import { showCardHeader } from "../../utils/uiConstants";
import { useParams } from "react-router-dom";
import CustomCard from "../../components/customCard/customCard";

const Details = (props) => {

  const [id, setId] = useState()

  const params = useParams();
  console.log(params.rendDetails);


 useEffect(() => {
    async function fetchData() {
      try{
        const res = await fetch(`https://api.tvmaze.com/shows/${params.rendDetails}`);
        const data = await res.json();
        // setShowData([...data]);
      } catch(error){
        console.log(error)
      }
    }
    fetchData();

  }, [id]);



    return 
    <div>
        
         <CustomCard /> 

         
    </div>
   
}


export default Details;
