import React from "react";

import EventInfo from './../../components/EventInfo/EventInfo';

import "./Event.scss";
import * as data from "../../utils/data";

const Event = () => {
  //This events mock data will be replaced with an actual Axios or ApiSauce API call
  const {
    title,
    location,
    date,
    attendance,
    maxAttendance,
    company,
    image,
  } = data.mockEvent;

  return (
    <>
      <h1 className="Event-Title">{title}</h1>
      <section className="Event">
        <EventInfo
          location={location}
          date={date}
          attendance={attendance}
          maxAttendance={maxAttendance}
          company={company}
          image={image}
        />
      </section>
    </>
  );
};

export default Event;
