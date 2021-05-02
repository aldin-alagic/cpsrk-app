import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import EventCard from "../../components/EventCard/EventCard";

import { Grid } from "../../lib/style/generalStyles";
import eventsMock from "./../../lib/mock/events";

function Home() {
  //This events mock data will be replaced with an actual Axios/ApiSauce API call
  const [events, setEvents] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setEvents(eventsMock);
    }, 1000);
  }, [events]);

  return (
    <>
      <Hero />
      <Section title="Featured events">
        {events && (
          <Grid columns={3}>
            {events.map(
              (event) =>
                event.isFeatured && (
                  <EventCard
                    key={event.id}
                    image={event.imageUrl}
                    imageAlt={event.imageAlt}
                    title={event.title}
                    description={event.shortDescription}
                    route={`/event/${event.id}`}
                  />
                )
            )}
          </Grid>
        )}
      </Section>
    </>
  );
}

export default Home;
