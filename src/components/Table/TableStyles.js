import styled from "styled-components";

import { colors, breakpoints } from "../../lib/style/theme";

import { MdDelete } from "react-icons/md";

export const TableWrapper = styled.table`
  table-layout: auto !important;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 1px 0px 4px 6px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  margin-top: 32px;
  border-radius: 6px;
`;

export const TableHeader = styled.thead`
  color: ${colors.white};
  font-weight: 600;
  background: ${colors.red};
`;

export const TableBody = styled.tbody``;

export const Th = styled.th`
  padding: 12px;
  display: none;
  width: auto;
  
  &:nth-child(-n + 2) {
    display: table-cell !important;
  }

  @media screen and (${breakpoints.mobileLarge}) {
    &:nth-child(3), &:nth-child(7) {
      display: table-cell !important;
    }
  }

  @media screen and (${breakpoints.tablet}) {
    display: table-cell !important;
  }
`;

export const ThAction = styled.th``;

export const Tr = styled.tr`
  &:nth-of-type(even) {
    background: ${colors.lighterGrey};
  }
`;

export const Td = styled.td`
  padding: 12px;
  display: none;
  width: auto;
  
  &:nth-child(-n + 2) {
    display: table-cell !important;
  }

  @media screen and (${breakpoints.mobileLarge}) {
    &:nth-child(3), &:nth-child(7) {
      display: table-cell !important;
    }
  }

  @media screen and (${breakpoints.tablet}) {
    display: table-cell !important;
  }
`;

export const TdAction = styled.td`
  text-align: center;
  padding: 12px;
`;

export const RemoveButton = styled(MdDelete)`
  &:hover {
    cursor: pointer;
    color: ${colors.red};
  }
`;

export const TableEmpty = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  padding: 20px 0;
`;


