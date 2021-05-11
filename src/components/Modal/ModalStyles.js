import styled from "styled-components";

import { colors, transitionEase, breakpoints } from "../../lib/style/theme";

export const ModalWrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
  position: fixed;
  background-color: ${colors.blackOverlay};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: ${transitionEase};

  ${(props) => props.isVisible && `
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  `};
`;

export const Inner = styled.div`
  margin: 30px;
  padding: 1em;
  background: ${colors.white};
  border-radius: 6px;
  
  @media screen and (${breakpoints.mobileLarge}) {
    max-width: fit-content;
    margin: 64px auto;
    padding: 2em;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
    margin-bottom: 32px;
`;

export const CloseButton = styled.button`
  display: inherit;
  border: none;
  background: ${colors.white};

  &:hover {
    cursor: pointer;
    color: ${colors.red};
  }

  &:focus {
    outline: none;
  }
`;
