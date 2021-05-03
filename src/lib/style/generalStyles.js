import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors, breakpoints, transitionEase } from "../style/theme";

export const Grid = styled.div`
  display: grid;
  row-gap: 32px;

  @media screen and (${breakpoints.mobileLarge}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);

    ${(props) => props.columns === 3 && `
      padding: 0 32px;
    `};
  }

  @media screen and (${breakpoints.desktopLarge}) {
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
    
    ${(props) => props.columns === 3 && `
      padding: 0 84px;
    `};
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  margin-bottom: 32px;
  text-align: center;

  @media screen and (${breakpoints.mobileLarge}) {
    font-size: 1.7em;
  }

  @media screen and (${breakpoints.tablet}) {
    font-size: 2em;
  }
`;

export const Button = styled(Link)`
  display: block;
  text-decoration: none;
  width: 100%;
  line-height: 40px;
  text-align: center;
  border: 1px solid ${colors.red};
  border-radius: 6px;
  background: ${colors.red};
  color: ${colors.white};
  transition: ${transitionEase};
  font-size: 16px;
  font-family: "Montserrat", sans-serif;

  &:hover {
    cursor: pointer;
    border-color: ${colors.yellow};
    background: ${colors.yellow};
  }

  &:focus {
    outline: none;
  }
`;

export const Main = styled.main`
  margin-top: 80px;
  flex: 1 0 auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;