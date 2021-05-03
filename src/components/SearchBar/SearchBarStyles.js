import styled from "styled-components";

import { colors, breakpoints } from "../../lib/style/theme";

export const SearchBarWrapper = styled.div`
  padding: 0;
  display: flex;
  justify-content: center;
`;

export const SearchBarInput = styled.input`
  width: 100%;
  border: 1px solid ${colors.lightGrey};
  border-radius: 6px;
  line-height: 40px;
  outline: none;
  font-size: 14px;
  padding: 0 15px;
  margin-bottom: 40px;

  &:focus {
    border-color: ${colors.yellow};
  }

  @media screen and (${breakpoints.mobileLarge}) {
    margin-bottom: 40px;
    width: 400px;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;
