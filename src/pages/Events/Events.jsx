import Section from "../../components/Section/Section";
import EventInfoCard from "./../../components/EventInfoCard/EventInfoCard";

import { Title, Grid } from "../../lib/style/generalStyles";
import eventsMock from "./../../lib/mock/events";

const Events = () => {
  const events = eventsMock;

  return (
    <>
      <Title>Events</Title>
      <Section withoutTopPadding>
        <Grid columns={4}>
          {events.length ? (
            events.map((eventItem) => (
              <EventInfoCard
                key={eventItem.id.toString()}
                title={eventItem.title}
                location={eventItem.location}
                date={eventItem.date}
                attendance={eventItem.attendance}
                maxAttendance={eventItem.maxAttendance}
                company={eventItem.company}
              />
            ))
          ) : (
            <p>There are no events!</p>
          )}
        </Grid>
      </Section>
    </>
  );
}

export default Events;
