import React, { useState } from "react";
import Pic1 from "../../../Images/Category/Pic1.jpg";
import "./FilmCategory.css";

const FilmCategory = () => {
  const [category, setCategory] = useState("Action");
  const [additionalDetails, setAdditionalDetails] = useState(
    "Collection of films that Amaze"
  );

  return (
    <div className="film-category">
      <div className="category-poster">
        <img src={Pic1} alt="poster" />
      </div>
      <div className="card-details">
        <h3>{category}</h3>
        <p>{additionalDetails}</p>
      </div>
    </div>
  );
};

export default FilmCategory;
