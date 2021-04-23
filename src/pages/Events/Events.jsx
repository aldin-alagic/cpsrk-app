import Section from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import EventInfoCard from "./../../components/EventInfoCard/EventInfoCard";

import "./Events.scss";
import * as data from "../../utils/data";

const Events = () => {
  //This events mock data will be replaced with an actual Axios or ApiSauce API call
  const events = data.mockEvents;

  return (
    <>
      <h1 className="Events-Title">Events</h1>
      <Section withoutTopPadding>
        <Grid columns="4">
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
