import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";

import "./EventCard.scss";

const EventCard = ({ image, title, description, buttonText }) => {
  return (
    <div className="EventCard">
      <figure className="EventCard-Figure">
        <img src={image} alt="Design" className="EventCard-Image" />
      </figure>
      <h3 className="EventCard-Title">{title}</h3>
      <p className="EventCard-Description">{description}</p>
      <Link className="Button" to="/event">
        <Button text={buttonText} />
      </Link>
    </div>
  );
};

export default EventCard;
