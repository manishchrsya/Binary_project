import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="side-bar-container" style={{ width: "25%" }}>
      <ul className="side-bar-contents">
        <li>
          <ion-icon name="home-outline"></ion-icon>
          <span>Main Page</span>
        </li>
        <li>
          <ion-icon name="tv-outline"></ion-icon>
          <span>TV-channels </span>
        </li>
        <li>
          <ion-icon name="film-outline"></ion-icon>
          <span>Movies </span>
        </li>
        <li>
          <ion-icon name="heart"></ion-icon>
          <span>TV series </span>
        </li>
        <li>
          <ion-icon name="medal-outline"></ion-icon>
          <span>Concerts </span>
        </li>
        <li>
          <ion-icon name="football-outline"></ion-icon>
          <span>Sport </span>
        </li>
        <li>
          <ion-icon name="heart"></ion-icon>
          <span>For kids </span>
        </li>
        <li>
          <ion-icon name="star-outline"></ion-icon>
          <span>Favourits </span>
        </li>
        <li>
          <ion-icon name="person-outline"></ion-icon>
          <span>Personal data </span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
