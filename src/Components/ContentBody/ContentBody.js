import React from "react";
import Carousal from "./Carousal/Carousal";
import FilmCategory from "./FilmCard/FilmCategory";

const ContentBody = () => {
  return (
    <div style={{ width: "75%" }}>
      <Carousal />
      <div className="film-category-section">
        <FilmCategory />
      </div>
    </div>
  );
};

export default ContentBody;
