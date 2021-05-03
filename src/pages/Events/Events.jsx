import { useEffect, useState } from "react";
import Section from "../../components/Section/Section";
import EventInfoCard from "./../../components/EventInfoCard/EventInfoCard";
import Loading from "../../components/Loading/Loading";

import { Title, Grid } from "../../lib/style/generalStyles";
import eventsMock from "./../../lib/mock/events";

const Events = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setEvents(eventsMock);
    }, 1000);
  }, [events]);

  return (
    <>
      <Title>Events</Title>
      <Section withoutTopPadding>
        {events ? (
          <Grid columns={4}>
            {events.map((event) => (
              <EventInfoCard
                key={event.id}
                title={event.title}
                location={event.location}
                date={event.dateTime}
                availability={event.availability}
                company={event.company}
                route={`/event/${event.id}`}
              />
            ))}
          </Grid>
        ) : (
          <Loading />
        )}
      </Section>
    </>
  );
};

export default Events;
