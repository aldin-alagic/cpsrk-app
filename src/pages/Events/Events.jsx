import { useEffect, useState } from "react";
import Section from "../../components/Section/Section";
import EventInfoCard from "./../../components/EventInfoCard/EventInfoCard";
import Loading from "../../components/Loading/Loading";

import { Title, Grid } from "../../lib/style/generalStyles";
import eventsMock from "./../../lib/mock/events";
import SearchBar from "../../components/SearchBar/SearchBar";

const Events = () => {
  const [events, setEvents] = useState(null);
  const [eventFilter, setEventFilter] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setEvents(eventsMock);
    }, 1000);
  }, [events]);

  const handleFilterChange = (e) => {
    setEventFilter(e.target.value);
  }

  return (
    <>
      <Title>Events</Title>
      <Section withoutTopPadding>
        <SearchBar
          onFilterChange={handleFilterChange}
          placeholder="Search events by title..."
          disabled={events === null}
        />
        {events ? (
          <Grid columns={4}>
            {events.map((event) => (!eventFilter || event.title.includes(eventFilter)) && (
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
