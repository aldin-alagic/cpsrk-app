import React from "react";

import Section from "../../components/Section/Section";
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
      <Section withoutTopPadding>
        <EventInfo
          location={location}
          date={date}
          attendance={attendance}
          maxAttendance={maxAttendance}
          company={company}
          image={image}
        />
      </Section>
    </>
  );
};

export default Event;
