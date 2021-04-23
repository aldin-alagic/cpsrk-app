import React from "react";

import Button from "../Button/Button";

import "./EventInfo.scss";

const EventInfo = ({ location, date, attendance, maxAttendance, company, image }) => {
  return (
    <>
      <div className="EventInfo">
        <figure className="EventInfo-Figure">
          <img
            src={image}
            alt="UX/UI workshop"
            className="EventInfo-Image"
          />
        </figure>
        <div className="EventInfo-Content">
          <div className="EventInfo-ContentRow">
            <div className="EventInfo-Item">
              <h3 className="EventInfo-ItemTitle">Lokacija</h3>
              <p className="EventInfo-ItemValue">{location}</p>
            </div>
            <div className="EventInfo-Item">
              <h3 className="EventInfo-ItemTitle">Datum i vrijeme</h3>
              <p className="EventInfo-ItemValue">{date}</p>
            </div>
          </div>
          <div className="EventInfo-ContentRow">
            <div className="EventInfo-Item">
              <h3 className="EventInfo-ItemTitle">Slobodna mjesta</h3>
              <p className="EventInfo-ItemValue">
                {attendance}/{maxAttendance}
              </p>
            </div>
            <div className="EventInfo-Item">
              <h3 className="EventInfo-ItemTitle">Firma</h3>
              <p className="EventInfo-ItemValue">{company}</p>
            </div>
          </div>
          <div className="EventInfo-ContentRow">
            <Button text="Prijavi se" />
          </div>
        </div>
      </div>
      <div className="EventInfo-Description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique,
        ex sit amet semper elementum, libero nisl condimentum dolor, a dictum
        risus lectus quis justo. Quisque consequat ut lorem vitae commodo. Nunc
        dictum quam dui, auctor fermentum libero viverra consequat. Pellentesque
        luctus posuere lacus non suscipit. Praesent scelerisque auctor lorem,
        vitae ultricies ligula imperdiet sed. Aliquam eu fringilla elit.
        Pellentesque semper eros at mattis ornare. Ut finibus venenatis turpis
        id ullamcorper. Donec sit amet magna faucibus, posuere lorem in,
        sollicitudin turpis. Duis pellentesque quam quam, eu tempus tortor
        pretium in. Sed efficitur pellentesque ante, eget semper purus interdum
        ac. Integer lacinia, velit dapibus congue consectetur, nisi justo
        consectetur felis, sit amet placerat lacus libero in dui. Quisque quis
        nisi felis.
      </div>
    </>
  );
};

export default EventInfo;
