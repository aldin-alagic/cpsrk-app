import React from "react";

import "./EventInfoCard.scss";
import { Button } from "../../lib/style/generalStyles";

const EventInfoCard = ({
  title,
  location,
  date,
  availability,
  company,
  route,
}) => {
  return (
    <div className="EventInfoCard">
      <h2 className="EventInfoCard-Title">{title}</h2>
      <div className="EventInfoCard-Content">
        <div className="EventInfoCard-ContentRow">
          <div className="EventInfoCard-Item">
            <h3 className="EventInfoCard-ItemTitle">Lokacija</h3>
            <p className="EventInfoCard-ItemValue">{location}</p>
          </div>
          <div className="EventInfoCard-Item">
            <h3 className="EventInfoCard-ItemTitle">Datum i vrijeme</h3>
            <p className="EventInfoCard-ItemValue">{date}</p>
          </div>
        </div>
        <div className="EventInfoCard-ContentRow">
          <div className="EventInfoCard-Item">
            <h3 className="EventInfoCard-ItemTitle">Slobodna mjesta</h3>
            <p className="EventInfoCard-ItemValue">
              {availability}
            </p>
          </div>
          <div className="EventInfoCard-Item">
            <h3 className="EventInfoCard-ItemTitle">Firma</h3>
            <p className="EventInfoCard-ItemValue">{company}</p>
          </div>
        </div>
      </div>
      <Button to={route}>Find out more</Button>
    </div>
  );
};

export default EventInfoCard;
