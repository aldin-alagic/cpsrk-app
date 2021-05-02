import React from "react";

import {
  EventCardWrapper,
  Figure,
  Image,
  Title,
  Description,
} from "./EventCardStyle";
import { Button } from "../../lib/style/generalStyles";

const EventCard = ({
  image,
  imageAlt,
  title,
  description,
  route,
}) => {
  return (
    <EventCardWrapper>
      <Figure>
        <Image src={image} alt={imageAlt} />
      </Figure>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button to={route}>Find out more</Button>
    </EventCardWrapper>
  );
};

export default EventCard;
