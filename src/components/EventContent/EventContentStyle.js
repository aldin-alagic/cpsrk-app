import styled from "styled-components";

import { breakpoints } from "../../lib/style/theme";

export const EventContentWrapper = styled.div`
 
`;

export const InfoWrapper = styled.div`
  @media screen and (${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Figure = styled.figure`
  width: 100%;
  height: 230px;
  margin-bottom: 24px;

  @media screen and (${breakpoints.mobileLarge}) {
    height: 300px;
  }

  @media screen and (${breakpoints.tablet}) {
    height: 230px;
    width: 400px;
  }

  @media screen and (${breakpoints.desktop}) {
    height: 350px;
    width: 600px;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    height: 450px;
    width: 800px;
  }
`;

export const Info = styled.div`
  margin-bottom: 15px;

  @media screen and (${breakpoints.tablet}) {
    width: 270px;
    margin-bottom: 0;
  }

  @media screen and (${breakpoints.desktop}) {
    width: 300px;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    width: 400px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (${breakpoints.tablet}) {
    margin-bottom: 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    margin-bottom: 32px;
  }
`;

export const Item = styled.div`
  &:last-child {
    text-align: right;
  }
`;

export const ItemTitle = styled.h3`
  font-size: 14px;
  margin-bottom: 4px;

  @media screen and (${breakpoints.tablet}) {
    margin-bottom: 12px;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const ItemValue = styled.p`
  font-size: 14px;

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 150%;
  text-align: justify;

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
    width: 600px;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    width: 800px;
  }
`;
