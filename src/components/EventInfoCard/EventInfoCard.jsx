import React from "react";

import {
  EventInfoCardWrapper,
  Title,
  Content,
  ContentRow,
  Item,
  ItemTitle,
  ItemValue,
} from "./EventInfoCardStyle";
import { Button } from "../../lib/style/generalStyles";

const EventInfoCard = ({
  title,
  location,
  date,
  availability,
  company,
  route,
}) => {
  return (
    <EventInfoCardWrapper>
      <Title>{title}</Title>
      <Content>
        <ContentRow>
          <Item>
            <ItemTitle>Lokacija</ItemTitle>
            <ItemValue>{location}</ItemValue>
          </Item>
          <Item>
            <ItemTitle>Datum i vrijeme</ItemTitle>
            <ItemValue>{date}</ItemValue>
          </Item>
        </ContentRow>
        <ContentRow>
          <Item>
            <ItemTitle>Slobodna mjesta</ItemTitle>
            <ItemValue>{availability}</ItemValue>
          </Item>
          <Item>
            <ItemTitle>Firma</ItemTitle>
            <ItemValue>{company}</ItemValue>
          </Item>
        </ContentRow>
      </Content>
      <Button to={route}>Find out more</Button>
    </EventInfoCardWrapper>
  );
};

export default EventInfoCard;
