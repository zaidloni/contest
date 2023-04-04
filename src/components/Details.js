import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";



const Details = () => {
    const {id} = useParams();
    console.log(id);
    const storeData = useSelector((store) => store.app);
    const requiredData = storeData.data[id - 1];
  return (
    <>
      <h1>Details Page For Post With ID: {id} </h1>

      <div className="detail-container">
        <img src={`https://picsum.photos/200?random=` + id}  />
        <p>
          <b>User Id:</b>
          {requiredData.userId}
        </p>
        <p>
          <b>Title:</b>
          {requiredData.title}
        </p>
        <p>
          <b>Body:</b>
          {requiredData.body}
        </p>
      </div>
    </>
  );
};

export default Details;
