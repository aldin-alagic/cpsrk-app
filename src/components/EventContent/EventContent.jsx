import React from "react";

import {
  EventContentWrapper,
  InfoWrapper,
  Figure,
  Info,
  InfoRow,
  Item,
  ItemTitle,
  ItemValue,
  Description,
} from "./EventContentStyle";
import { Image, Button } from "../../lib/style/generalStyles";

const EventContent = ({
  location,
  date,
  availability,
  company,
  image,
  imageAlt,
}) => {
  return (
    <EventContentWrapper>
      <InfoWrapper>
        <Figure>
          <Image src={image} alt={imageAlt} />
        </Figure>
        <Info>
          <InfoRow>
            <Item>
              <ItemTitle>Lokacija</ItemTitle>
              <ItemValue>{location}</ItemValue>
            </Item>
            <Item>
              <ItemTitle>Datum i vrijeme</ItemTitle>
              <ItemValue>{date}</ItemValue>
            </Item>
          </InfoRow>
          <InfoRow>
            <Item>
              <ItemTitle>Slobodna mjesta</ItemTitle>
              <ItemValue>{availability}</ItemValue>
            </Item>
            <Item>
              <ItemTitle>Firma</ItemTitle>
              <ItemValue>{company}</ItemValue>
            </Item>
          </InfoRow>
          <InfoRow>
            <Button to="/">Prijavi se</Button>
          </InfoRow>
        </Info>
      </InfoWrapper>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique,
        ex sit amet semper elementum, libero nisl condimentum dolor, a dictum
        risus lectus quis justo. Quisque consequat ut lorem vitae commodo. Nunc
        dictum quam dui, auctor fermentum libero viverra consequat. Pellentesque
        luctus posuere lacus non suscipit. Praesent scelerisque auctor lorem,
        vitae ultricies ligula imperdiet sed. Aliquam eu fringilla elit.
        Pellentesque semper eros at mattis ornare. Ut finibus venenatis turpis
        id ullamcorper. Donec sit amet magna faucibus, posuere lorem in,
        sollicitudin turpis. Duis pellentesque quam quam, eu tempus tortor
        pretium in. Sed efficitur pellentesque ante, eget semper purus interdum
        ac. Integer lacinia, velit dapibus congue consectetur, nisi justo
        consectetur felis, sit amet placerat lacus libero in dui. Quisque quis
        nisi felis.
      </Description>
    </EventContentWrapper>
  );
};

export default EventContent;
