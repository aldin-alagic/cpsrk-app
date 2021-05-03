import React, { useState, useEffect } from "react";

import Section from "../../components/Section/Section";
import EventContent from "./../../components/EventContent/EventContent";

import { Title } from "../../lib/style/generalStyles";
import eventsMock from "./../../lib/mock/events";

const Event = (prop) => {
  const routeEventId = parseInt(prop.match.params.id);
  const [events, setEvents] = useState(null);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    setEvents(eventsMock);
  }, []);

  useEffect(() => {
    events && setEvent(events.find((event) => event.id === routeEventId));
  }, [events, routeEventId]);

  return (
    <>
      {event && (
        <>
          <Title>{event.title}</Title>
          <Section withoutTopPadding>
            <EventContent
              location={event.location}
              date={event.dateTime}
              availability={event.availability}
              company={event.company}
              image={event.imageUrl}
              description={event.description}
            />
          </Section>
        </>
      )}
    </>
  );
};

export default Event;
