/**
 * HomePage styles
 */

import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';

export const Container = styled.div`
  width: calc(100% - 250px); // LeftNavigation Width
  margin-left: 250px; // LeftNavigation Width
  margin-top: 60px; // header height
  height: calc(100% - 60px); // header height
  background-color: whitesmoke;
`;

export const Content = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: skyblue;
`;

export const Col = styled.div`
  display: flex;
  display: -webkit-flex;
  flex: 1;
  height: 100%;
  border: 1px green solid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainTitle = styled.h1`
  color: ${props => props.theme.textColor};
`;

export const Category1 = styled(Dropdown)``;

export const Category2 = styled(Dropdown)``;

export const Category3 = styled(Dropdown)``;
