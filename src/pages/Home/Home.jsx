import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import Event from "../../components/Event/Event";

import "./Home.scss";
import * as data from "../../utils/data"

function Home() {
  //This events mock data will be replaced with an actual Axios/ApiSauce API call
  const events = data.mockTopEvents;

  return (
    <>
      <Hero />
      <Section title="Featured events">
        <Grid columns="3">
          {events.length ? (
            events.map((eventItem) => (
              <Event
                key={eventItem.id.toString()}
                image={eventItem.image}
                title={eventItem.title}
                description={eventItem.description}
                buttonText="Find out more"
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

export default Home;
