import styled from "styled-components";

import {
  colors,
  breakpoints,
  boxShadow,
  boxShadowHover,
  transitionCubic,
} from "../../lib/style/theme";

export const EventInfoCardWrapper = styled.div`
  border: 1px solid ${colors.lightGrey};
  box-shadow: ${boxShadow};
  transition: ${transitionCubic};
  border-radius: 6px;
  padding: 10px;

  &:hover {
    box-shadow: ${boxShadowHover};
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  padding: 10px 0 20px;
  border-bottom: 1px solid ${colors.lightGrey};
  text-align: center;
  margin-bottom: 15px;
`;

export const Content = styled.div`
  margin-bottom: 15px;
`;

export const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Item = styled.div`
  &:last-child {
    text-align: right;
  }
`;

export const ItemTitle = styled.h3`
  font-size: 12px;
  margin-bottom: 4px;

  @media screen and (${breakpoints.desktop}) {
    font-size: 14px;
  }
`;

export const ItemValue = styled.p`
  font-size: 12px;

  @media screen and (${breakpoints.desktop}) {
    font-size: 14px;
  }
`;
