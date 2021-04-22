import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import Event from "../../components/Event/Event";

import "./Home.scss";
import ImageDesign from "../../assets/images/design.jpg";
import ImageDevelopment from "../../assets/images/development.jpg";
import ImageMarketing from "../../assets/images/marketing.jpg";

function Home() {
  //This events mock data will be replaced with an actual Axios/ApiSauce API call
  const events = [
    {
      id: 1,
      image: ImageDesign,
      title: "UX/UI design workshop",
      description:
        "Learn how to solve big problems and test new ideas based on Google Sprint methodology..",
    },
    {
      id: 2,
      image: ImageDevelopment,
      title: "Frontend best practices",
      description:
        "Best frontend practices for developers. Learn advanced CSS techniques and much more...",
    },
    {
      id: 3,
      image: ImageMarketing,
      title: "Digital marketing workshop",
      description:
        "Learn how to use Google Ads and social networks to gain customers for your digital product...",
    },
  ];

  return (
    <>
      <Hero />
      <Section title="Featured events">
        <Grid columns="3">
          {events.length ? (
            events.map((eventItem, index) => (
              <Event
                index={eventItem.id.toString()}
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
