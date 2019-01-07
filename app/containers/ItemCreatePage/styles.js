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
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 1.5rem 0rem;
`;

export const LeftCol = styled.div`
  display: flex;
  display: -webkit-flex;
  width: 65%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;
export const RightCol = styled.div`
  display: flex;
  display: -webkit-flex;
  width: 35%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

export const MainTitle = styled.h1`
  color: ${props => props.theme.textColor};
`;

export const DropDown = styled(Dropdown)``;
